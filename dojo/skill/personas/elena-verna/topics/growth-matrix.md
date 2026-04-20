---
triggers:
  - "user asks whether to be product-led or sales-led"
  - "user says 'should we do PLG' or 'should we hire a sales team'"
  - "user is mapping or auditing their full growth engine"
  - "user treats PLG vs SLG as a binary religious choice"
  - "user is a sales-led company afraid of being disrupted from below"
  - "user is a PLG company that can't crack enterprise"
use_when:
  - "deciding where to invest next across the growth surface"
  - "auditing which cells of the growth engine are owned and which are empty"
  - "layering a new motion on top of an existing one"
fails_when:
  - "product-market fit isn't established — no matrix matters without it"
  - "the company tries to own all nine cells simultaneously from day one (spread too thin)"
related:
  - "growth-loops.md"
  - "squad-sequencing.md"
---

# The Growth Matrix (3x3)

## When to Use
- When someone asks "should we be PLG or sales-led?" Wrong question. The question is *when and how* to layer both.
- When you're mapping your entire growth engine and you need a shared picture the whole exec team can point at.
- When a sales-led company is afraid of being disrupted from below by a PLG competitor. (They should be. Salesforce knows it. That's why Salesforce has self-serve.)
- When a PLG company is leaving enterprise money on the floor because they can't close deals over $100K without a human.
- When a growth team is over-indexed on one motion and has quietly neglected the other six or seven cells for years.

## Fails When
- **No PMF yet.** The matrix assumes you have a product people want. If you don't, mapping your distribution strategy is premature optimization. Go fix the product.
- **Trying to own all nine cells simultaneously from day one.** You can't. You'll spread a small team across nine fronts, win none of them, and burn out. The destination is nine cells. The starting point is one.
- **Treating the matrix as a theoretical exercise.** If you map it and then don't reallocate resources based on what's empty, you've just drawn a grid. Grids don't grow companies.

## Core Concept

Let me be clear: "Should we be PLG?" is not the right question. The right question is *when* and *how* to invest across all three motions. Because being a B2B PLG purist is just plain foolish. And being a sales-led purist in 2026 is a slow-motion obituary. Friends don't let friends pick a religion.

The Growth Matrix is a 3x3 grid. Three **levers** (what you're optimizing) on one axis: **Acquisition, Retention, Monetization**. Three **motions** (how you optimize) on the other: **Product-Led, Marketing-Led, Sales-Led**. That gives you nine cells. Every cell is a real, distinct growth initiative area. And here's the destination: **your goal is to own all nine cells.** Ultimate business sustainability and competitive defensibility come from triggering all three motions across all three levers. Not picking one square. Not picking a religion. Owning the whole board.

```
                 Product-Led       Marketing-Led     Sales-Led
Acquisition      Viral loops,      Content, SEO,     Outbound, ABM,
                 sharing, UGC      paid, social      partnerships
Retention        Usage triggers,   Lifecycle email,  CSM, account
                 habit loops       re-engagement     management
Monetization     Self-serve        Upsell demand     AE-closed deals,
                 upgrades, PLG     gen, pricing      expansion, RFPs
                 pricing pages     campaigns
```

The most common failure mode is the old pirate framework: Marketing owns acquisition, Product owns retention, Sales owns monetization. That's three cells. You're ignoring six. It's not defensible (everyone can buy the same channels), not predictable (activation failures fall through the cracks between teams), and not sustainable (you feed the beast from the top forever). Abandon the silos. The question is which *square you should start with*. Your destination is all nine.

So how do you pick where to start? Start where you're *structurally strongest*. A deeply technical, end-user-beloved product with intuitive self-serve activation? Start PLG (Slack, Figma, Lovable). A complex, high-ACV product serving procurement-heavy buyers? Start sales-led (old Salesforce, Palantir). A content-heavy category where your buyer is actively searching? Start marketing-led. Then **layer sequentially, never switch.** Sales-led orgs layer PLG on top (free trial or freemium as the bottom of the funnel). PLG orgs layer sales on top (product-led sales to capture enterprise accounts that self-serve can't close). The biggest mistake is viewing it as a decision — which one should I be — versus a sequential play of what goes on top of what.

And here's the thing about layering: **never switch, always add.** Companies that chase $100K enterprise deals by abandoning self-serve destroy the engine that created their pipeline. Companies that rip out sales to "go PLG" leave enterprise deals on the floor and existing customers unsupported. Remove "switching" from your vocabulary. The answer is almost always *add*, not *replace*.

## How to Apply

1. **Draw the 3x3 on a whiteboard.** Acquisition/Retention/Monetization on one axis. Product-Led/Marketing-Led/Sales-Led on the other. No exceptions. No creative axes. This grid, exactly.

2. **Mark which cells you currently own.** Be honest. "Own" means you have dedicated resources, measurable output, and it's actually contributing to revenue. If your sales team closes two deals a quarter and you call that "sales-led monetization" — no, that's a person with a job title. Not a motion.

3. **Mark which cells are empty or near-empty.** These are the opportunities. Also mark which cells are *leaking* — you have them nominally, but they're underperforming because of an upstream cell failure (usually activation).

4. **Identify your structurally strongest motion.** Not the trendiest — the strongest. What does your product's shape argue for? High-usage, end-user-loved, cheap-to-deliver? Product-led. High-ACV, procurement-driven? Sales-led. High-intent-search, content-heavy category? Marketing-led.

5. **Layer the next motion on top — don't swap.** If you're sales-led and want PLG, add a free trial or freemium with self-serve activation, route enterprise-sized accounts to sales via PQA scoring. If you're PLG and want sales, add Product-Led Sales — let the product create the pipeline, sales closes it.

6. **Review the matrix quarterly.** Cells fill, cells empty, motions mature. The company at $5M ARR owns two cells. At $50M, maybe five. At $500M, you better own all nine or your competitor does. "Ultimate business sustainability and competitive defensibility come from triggering all motions across all levers."

## Examples

**Situation:** SurveyMonkey (back in the day). PLG-native product with massive end-user adoption. At one point, a single enterprise logo had 800+ paid individual accounts and 1,000+ free accounts sitting inside it. Sales team can't close the enterprise deal.
**Application:** They owned *Product-Led Acquisition* and *Product-Led Monetization* (self-serve upgrades). What they didn't own: *Sales-Led Monetization* (the enterprise contract wrapper) and arguably *Sales-Led Retention* (account management at enterprise tier). The answer was not to abandon PLG for sales. The answer was to build Product-Led Sales on top — let usage volume and account breadth create PQA signals, trigger sales outreach at the right threshold, close the enterprise deal without breaking the self-serve engine below.
**Result:** Layer sales on top of PLG, don't swap. Companies like Slack, Figma, Dropbox, Miro all ran this play. Enterprise revenue unlocks while the individual and team tiers keep rotating the loop.

**Situation:** A traditional sales-led enterprise software company watches a product-led startup win smaller deals from under them. Procurement teams are bypassing the CISO. Individual employees are buying tools with their own credit cards.
**Application:** Salesforce has run this play for years. They stay sales-led at the enterprise tier and layer PLG defensively at the bottom — free trials, self-serve pricing pages, usage-based entry points. The goal isn't to win PLG deals; it's to deter PLG competitors from establishing a bottom-up beachhead inside their customer base.
**Result:** Defensive PLG protects the sales motion without diluting it. If you continue being sales-led with no PLG cell at all, you have a high chance of being disrupted by a product-led competitor from the bottom up. That's not a hypothesis anymore. That's history.

**Situation:** Miro circa its growth phase. Strong Product-Led Acquisition (collaborative boards invite new users by design), strong Product-Led Activation (collaboration = activation), but enterprise monetization needs human help to close seven-figure deals with procurement.
**Application:** Owned cells: Product-Led Acquisition, Product-Led Retention (collaboration drives habit), Product-Led Monetization (self-serve upgrades for teams). Missing cell to layer: Sales-Led Monetization for enterprise. They added PLS with PQA scoring on account breadth and usage volume. They didn't abandon self-serve — if anything, self-serve remained the primary funnel and the source of every PQA signal.
**Result:** Miro owned six or seven cells of the matrix by the time of its later valuation rounds. PLG purists who refused to hire a sales team capped out at 1/3 the valuation. Sales-led purists who refused to build a self-serve flow got disrupted.

**Situation:** A content-heavy category (think: developer tools, financial services, creator tools) where buyers actively search for solutions and SEO is still a working channel.
**Application:** Start marketing-led on the acquisition row — SEO, content, paid search, social. Layer product-led on top once signups get heavy — onboarding flows, self-serve activation, casual contact loops. Layer sales-led for the large accounts once signups contain enterprise logos. Three motions, one lever (acquisition), all compounding.
**Result:** Companies like Notion, Amplitude, and Canva own multiple motions across all three levers — because they started strong in one, built one out fully, then added the next. The matrix fills quarter by quarter. It doesn't fill all at once.

## Anti-Patterns (tactical)

**Don't:** Ask "should we be PLG or sales-led?"
**Why:** It's the wrong question and it bakes in the wrong frame. The question is always *when* and *how* to layer. Asking the either-or version almost guarantees you'll make a decision you have to reverse within 18 months, at which point you'll have destroyed momentum in both directions. The correct posture is sequential layering.

**Don't:** Run PLG or PLS out of the Marketing department.
**Why:** Six-month failure clock. Product *must* own the motion when the product is the selling surface. Marketing can't ship in-product upgrade flows. Marketing can't design activation. "We'll do PLG out of marketing" is a recipe for a gorgeous landing page and a sales team that sells exactly the way it always sold. Product must take accountability for pipeline.

**Don't:** Spread thin across all nine cells at $5M ARR.
**Why:** You don't have the people or the focus. Pick your structurally strongest cell, dominate it, then layer. Nine-cell ambition at nine-person scale is how growth teams burn out and how founders conclude "growth doesn't work." Growth works. You just started everywhere at once.

**Don't:** Abandon self-serve to chase enterprise deals.
**Why:** Self-serve is the engine that creates the pipeline that sales closes. Kill self-serve to "focus on enterprise" and in 12 months your pipeline is dry and your AEs are cold-calling. PLG fuels PLS. Don't light the fuel tank on fire because the turbo is fun.

**Don't:** Abandon sales to "go pure PLG."
**Why:** Enterprise accounts will not convert themselves at $500K ACV. You need humans for procurement, security review, custom contracts, and the specific kind of political support that only an AE can provide. Ripping out sales leaves enterprise on the floor, existing customers unsupported, and expansion revenue dead. Layer, don't swap.

**Don't:** Ignore the cells your competitors already own.
**Why:** If your closest competitor owns Marketing-Led Acquisition and Sales-Led Monetization and you own Product-Led Acquisition and Product-Led Monetization, you're not actually competing in the same way. The "competitor" losing deals to you might be doing so because your buyer wants self-serve — and the deals you lose to them are ones where the buyer wanted a human. Map both grids side by side. That's where the strategic conversation lives.
