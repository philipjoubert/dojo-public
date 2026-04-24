/**
 * Fetches portrait thumbnails for each persona from Wikipedia's REST API
 * into public/portraits/{slug}.{ext} and writes src/lib/portraits.generated.ts
 * listing which slugs have an image (so the Portrait component can fall back
 * to the SVG silhouette when we don't).
 *
 * Run manually: `npx tsx scripts/fetch-portraits.ts`
 * Add `--force` to re-download existing files.
 */
import {
  existsSync,
  mkdirSync,
  readdirSync,
  readFileSync,
  unlinkSync,
  writeFileSync,
} from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const APP_ROOT = path.resolve(__dirname, "..");
const PORTRAITS_DIR = path.join(APP_ROOT, "public", "portraits");
const MANIFEST_PATH = path.join(APP_ROOT, "src", "lib", "portraits.generated.ts");

// Wikipedia title overrides for slugs whose default "Name" title is wrong,
// ambiguous, or a disambiguation page. Keys are persona slugs.
const TITLE_OVERRIDES: Record<string, string> = {
  "toby-lutke": "Tobias Lütke",
  "paul-graham": "Paul Graham (programmer)",
  "chris-voss": "Chris Voss",
  "andrew-chen": "Andrew Chen (entrepreneur)",
  "david-ogilvy": "David Ogilvy (businessman)",
  "eliyahu-goldratt": "Eliyahu M. Goldratt",
  "eugene-schwartz": "Eugene Schwartz",
};

interface Persona {
  slug: string;
  name: string;
}

function loadPersonas(): Persona[] {
  const file = readFileSync(
    path.join(APP_ROOT, "src", "lib", "personas.generated.ts"),
    "utf8",
  );
  // Grab the PERSONAS array literal (starts with `[` after the `=`, ends at
  // the matching `]`). Brace-counting so we don't trip on nested objects.
  const marker = "export const PERSONAS: Persona[] =";
  const start = file.indexOf(marker);
  if (start === -1) throw new Error("PERSONAS export not found");
  // Skip past the `Persona[]` type annotation — we want the `[` of the literal.
  const arrayStart = file.indexOf("[", start + marker.length);
  let depth = 0;
  let end = -1;
  for (let i = arrayStart; i < file.length; i++) {
    if (file[i] === "[") depth++;
    else if (file[i] === "]") {
      depth--;
      if (depth === 0) {
        end = i + 1;
        break;
      }
    }
  }
  if (end === -1) throw new Error("could not find end of PERSONAS array");
  const arr = JSON.parse(file.slice(arrayStart, end)) as Persona[];
  return arr.map((p) => ({ slug: p.slug, name: p.name }));
}

function titleForSlug(p: Persona): string {
  return TITLE_OVERRIDES[p.slug] ?? p.name;
}

async function fetchJson(url: string): Promise<unknown> {
  const res = await fetch(url, {
    headers: {
      "User-Agent": "dojo-builder-portrait-fetch (https://github.com/magicsafari/personas-public)",
      "Accept": "application/json",
    },
  });
  if (!res.ok) throw new Error(`GET ${url} → ${res.status}`);
  return res.json();
}

interface WikiSummary {
  type?: string;
  thumbnail?: { source: string };
  originalimage?: { source: string };
}

async function lookupImageUrl(title: string): Promise<string | null> {
  const url =
    "https://en.wikipedia.org/api/rest_v1/page/summary/" +
    encodeURIComponent(title.replace(/ /g, "_"));
  try {
    const data = (await fetchJson(url)) as WikiSummary;
    if (data.type === "disambiguation") return null;
    // Prefer the thumbnail (typically 320px). These render tiny in the UI,
    // and originalimage is often multi-MB.
    return data.thumbnail?.source ?? data.originalimage?.source ?? null;
  } catch {
    return null;
  }
}

function extFromUrl(url: string): string {
  const clean = url.split("?")[0].toLowerCase();
  if (clean.endsWith(".jpg") || clean.endsWith(".jpeg")) return "jpg";
  if (clean.endsWith(".png")) return "png";
  if (clean.endsWith(".webp")) return "webp";
  if (clean.endsWith(".svg")) return "svg";
  return "jpg";
}

async function downloadImage(
  url: string,
  outPath: string,
): Promise<void> {
  const res = await fetch(url, {
    headers: {
      "User-Agent": "dojo-builder-portrait-fetch (https://github.com/magicsafari/personas-public)",
    },
  });
  if (!res.ok) throw new Error(`GET ${url} → ${res.status}`);
  const buf = Buffer.from(await res.arrayBuffer());
  writeFileSync(outPath, buf);
}

function existingPortraitFor(slug: string): string | null {
  if (!existsSync(PORTRAITS_DIR)) return null;
  const match = readdirSync(PORTRAITS_DIR).find(
    (f) => f === `${slug}.jpg` || f === `${slug}.png` || f === `${slug}.webp` || f === `${slug}.svg`,
  );
  return match ?? null;
}

interface Result {
  slug: string;
  name: string;
  status: "downloaded" | "kept" | "skipped" | "failed";
  ext?: string;
  reason?: string;
}

async function main(): Promise<void> {
  const force = process.argv.includes("--force");
  const personas = loadPersonas();
  if (!existsSync(PORTRAITS_DIR)) mkdirSync(PORTRAITS_DIR, { recursive: true });

  const results: Result[] = [];
  for (const p of personas) {
    const existing = existingPortraitFor(p.slug);
    if (existing && !force) {
      results.push({
        slug: p.slug,
        name: p.name,
        status: "kept",
        ext: path.extname(existing).slice(1),
      });
      continue;
    }

    const title = titleForSlug(p);
    const imageUrl = await lookupImageUrl(title);
    if (!imageUrl) {
      results.push({
        slug: p.slug,
        name: p.name,
        status: "skipped",
        reason: "no wikipedia image",
      });
      continue;
    }

    const ext = extFromUrl(imageUrl);
    const outPath = path.join(PORTRAITS_DIR, `${p.slug}.${ext}`);
    try {
      // Clear any other-extension leftover so there's one canonical file per slug.
      if (force && existing && path.extname(existing).slice(1) !== ext) {
        unlinkSync(path.join(PORTRAITS_DIR, existing));
      }
      await downloadImage(imageUrl, outPath);
      results.push({
        slug: p.slug,
        name: p.name,
        status: "downloaded",
        ext,
      });
    } catch (err) {
      results.push({
        slug: p.slug,
        name: p.name,
        status: "failed",
        reason: String(err),
      });
    }
  }

  // Rebuild the manifest from what's actually on disk (covers cases where a
  // previous run downloaded something this run skipped).
  const onDisk: Record<string, string> = {};
  if (existsSync(PORTRAITS_DIR)) {
    for (const f of readdirSync(PORTRAITS_DIR)) {
      const ext = path.extname(f).slice(1);
      if (!["jpg", "png", "webp", "svg"].includes(ext)) continue;
      const slug = path.basename(f, `.${ext}`);
      onDisk[slug] = ext;
    }
  }

  const manifest = `// GENERATED by scripts/fetch-portraits.ts — do not edit by hand.
// Maps persona slug → portrait file extension under /portraits/. Missing
// entries mean we don't have a photo and the UI should fall back to the
// silhouette.

export const PORTRAITS: Record<string, string> = ${JSON.stringify(onDisk, null, 2)};
`;
  writeFileSync(MANIFEST_PATH, manifest);

  const by = results.reduce<Record<string, number>>((acc, r) => {
    acc[r.status] = (acc[r.status] ?? 0) + 1;
    return acc;
  }, {});
  console.log("fetch-portraits:", by);
  for (const r of results) {
    const tag = r.status.padEnd(10);
    const extra = r.reason ? ` (${r.reason})` : r.ext ? ` .${r.ext}` : "";
    console.log(`  ${tag} ${r.slug}${extra}`);
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
