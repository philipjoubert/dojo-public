---
triggers:
  - "user asks whether B2B and B2C growth are the same"
  - "user is copying a consumer playbook into a B2B context (or vice versa)"
  - "user asks about NDR benchmarks and why they differ across models"
  - "user is at a B2B company running consumer-style activation that won't unlock expansion"
  - "user asks whether to measure users or accounts, WAU or WAT"
  - "user has a prosumer product and isn't sure which playbook applies"
  - "user asks why B2B valuations are higher than B2C at similar revenue"
use_when:
  - "choosing which playbook to apply — tactics don't transfer cleanly across contexts"
  - "setting up metrics and KPIs for a new product or business line"
  - "diagnosing why a known-good tactic from one world is failing in the other"
fails_when:
  - "you're trying to force a unified playbook across a true B2B and a true B2C business inside one company"
  - "product is pure consumer utility with no possible expansion (music streaming, social apps)"
  - "team is using this framework to justify avoiding real diagnosis ('we're different!')"
related:
  - "growth-matrix.md"
  - "retention.md"
  - "product-led-sales.md"
---

# B2B vs. B2C Growth Differences

## When to Use
- You're copying a B2C playbook into a B2B product ("let's be Notion-ish") and the math isn't working. The surface looks similar. The mechanics underneath are not.
- You're at a B2B PLG product, 10,000+ individual signups, and leadership is proud. I'm going to make you less proud in a minute — 10,000 individual users who never aggregate into teams is a glorified consumer app, not a B2B business.
- You're benchmarking NDR and your investor is quoting Snowflake (138%) against your number (95%) and you're wondering if the comparison even makes sense.
- You're choosing between WAU and WAT as a metric. You're treating them as interchangeable. They are not — in B2B, WAT (Weekly Active Teams) is an order of magnitude more valuable.
- You're a prosumer tool and trying to figure out which side of the line you're on. The honest answer is probably "both, sequenced" — consumer mechanics for acquisition, B2B mechanics for monetization.

## Fails When
- **Unified playbook ambition.** If your pitch is "one playbook across B2B and B2C because we're different," you're dodging the real work. The frameworks are different because the economics are different.
- **Pure-consumer with zero expansion surface.** Spotify's NRR is ~75% and nothing about "expansion" saves it. For pure consumer, focus on retention + acquisition volume. This topic is directional, not prescriptive for that context.
- **You're using this to deflect.** "Oh, but we're B2B so that B2C tactic doesn't apply" is a common excuse not to experiment. Some consumer tactics (love marks, delight, brand as product) now transfer fully into B2B. Use the framework to diagnose, not to dismiss.

## Core Concept

B2B and B2C both acquire, activate, monetize, and retain. That's the surface similarity that causes most of the confusion. Under the hood, three mechanics differ sharply, and if you copy a playbook across without accounting for them, you ship a broken growth motion.

**Difference 1: Revenue sources.** In B2C, most revenue comes from acquiring new paying customers. In B2B, the fastest-growing businesses derive the majority of growth from *existing* customers — expansion, not acquisition. **Net Dollar Retention** is the metric that captures this: (Starting MRR + Expansion − Contraction − Churn) / Starting MRR. Above 100% means your existing base is growing your revenue even if you never sign another customer. Slack's NDR is ~120%. Snowflake went public at 138%, Twilio at 155%. That's the B2B compound. In B2C, NDR below 100% is *accepted* — Spotify sits at ~75%, which means existing revenue is shrinking and they have to keep acquiring new paying customers to replace the bleed. That's why B2C companies have to obsess over the top of the funnel forever and why B2B companies get 10–15x revenue multiples where consumer gets single digits.

**Difference 2: Revenue concentration.** In B2B, a few accounts generate most of the revenue. Slack has 600K customers but ~40% of revenue comes from less than 1% of them (~575 pay more than $100K/year). In B2C, revenue is distributed far more evenly across the user base. This changes what "acquisition" means. In B2B, every signup must be profiled at the door — is this an ICP account, a monetization-relevant prosumer, or a free-forever use case? Giving ICP accounts a human point of contact is beneficial and often necessary. In B2C, you don't stratify signups like this because nobody signup is worth 100x another signup.

**Difference 3: Accounts, not users.** In B2B, you sell to companies. In B2C, to individuals. This cascades into everything. B2B PLG companies must measure acquisition, activation, engagement, and retention at the *team/account* level — not just the individual. New *accounts* acquisition beats new *users* acquisition. Activation must be redefined around team collaboration: SurveyMonkey = 5 responses; Miro = 2+ teammates on a board; Dropbox = editing/inviting on a shared file. Optimizing activation at the individual level in B2B is a trap — it produces 10,000 individual users who never expand and never buy enterprise. B2B acquisition is actually three parallel tracks: (1) land the first end-user in the account, (2) attract team members to that account, (3) find a buyer. Each track has different CACs, channels, tactics, messaging, velocities. Merging them produces mediocrity.

This is the "deadly gravitational pull" I've written about. Because B2B PLG *looks* like consumer product — cute mascots, friendly UI, easy onboarding, habit-forming design — product and marketing teams get pulled into optimizing for the individual. They ship beautiful consumer-like experiences. Individual adoption climbs. Everyone celebrates. Then 18 months in you discover those 10,000 users never aggregated into teams, the enterprise sales motion has no end-user champions to leverage, and your revenue concentration is a flat, unexpandable plane. It doesn't matter how many individual users you have — if they're not aggregating into teams and growing inside a company, you're a glorified consumer app. Being a B2B PLG purist focused only on individual experience is a ticking time bomb. Some companies limp along for years generating hundreds of millions of dollars before the bomb goes off. When it does, all up-market expansion efforts fail because the product was never designed for team value.

**What transfers, what doesn't.** Love marks transfer — B2B users are humans who want to smile at work. Trust as moat transfers — founder-led social, building in public, and community work in both. WOM loops transfer. Activation discipline transfers. What doesn't transfer: revenue mechanics (NDR obsession for B2B, acquisition obsession for B2C), revenue concentration logic (profile signups in B2B, don't in B2C), and the team/account dimension (measure WAT not just WAU in B2B). Copy the tactics across carefully. Don't copy the math.

## How to Apply

1. **Identify your business model honestly.** B2B (selling to companies, revenue concentrated in accounts, expansion-driven) or B2C (selling to individuals, distributed revenue, acquisition-driven). Prosumer tools are often "B2C mechanics at the top of the funnel, B2B mechanics at the bottom" — you need both playbooks, sequenced.

2. **Pick the right north star. NDR for B2B. Retention + acquisition volume for B2C.** If you're B2B and your NDR is under 100%, nothing else matters until that flips — expansion is the engine. If you're B2C, optimize the retention curve shape and keep pouring fuel on acquisition because you need to replace churned revenue continuously.

3. **Profile every signup in B2B. Don't in B2C.** B2B — at signup, ask role, company size, use case, team size. Route into: ICP (enterprise-bound), prosumer (self-serve), or free-forever (students, personal use). Set different metrics per segment. B2C — the signup is the signup. Don't burden the onboarding with qualifying questions you won't act on.

4. **Measure teams, not just users, in B2B.** Weekly Active Teams (WAT) > Weekly Active Users (WAU). New Team Creations > New User Signups. Users-per-team is the velocity metric that signals enterprise viability. If you're only measuring at the user level, you're hiding the expansion story from yourself.

5. **Redefine activation at the team level for B2B.** Individual activation is necessary but insufficient. True B2B activation requires team-level value: collaboration between 2+ members, shared artifacts, admin configured, permissions set. Miro, Slack, Dropbox — all their aha moments are team-verbs, not solo-verbs.

6. **Run three parallel acquisition tracks in B2B.** Track 1: individual end-user acquisition (the entry point). Track 2: team-member attraction (in-product invites, domain-based team discovery, collaboration triggers). Track 3: buyer finding (LinkedIn, G2, Capterra, events, ABM — entirely different channels and messaging than the first two). Different teams own different tracks.

7. **Accept B2C's acquisition treadmill if you're B2C.** If NDR below 100% is structural, stop pretending you'll expand your way out of it. You won't. Focus on: retention curve shape, first-term churn, acquisition volume, payback period. That's the real job. B2B envy doesn't help.

8. **In B2B, don't underinvest in team/company-level value to serve individuals.** The gravitational pull is strong and constant. Every individual-focused feature is easier to ship and easier to measure in the short term. But B2B revenue lives at the team/company level. Every sprint that goes entirely to individual features is a sprint that didn't build the enterprise expansion surface.

## Examples

**Situation:** A B2B PLG tool has 10,000 individual users but flat team adoption. NDR is 88%. Leadership is happy with signup growth and thinks they're ready for enterprise.
**Application:** You're not ready for enterprise. You have a consumer app that dressed up in a B2B costume. The deadly gravitational pull — product and marketing optimized the individual experience, team experience was left as an afterthought. Fix activation to require team-level value verbs (inviting a teammate, shared artifact, collaborative edit). Add domain-based team discovery so new signups from the same company find each other. Build admin surfaces and usage limits that scale with team size. Measure WAT explicitly on the weekly metrics review. Sequence it: activation (team level) → monetization (team/company tiers) → acquisition (track 3, buyer finding).
**Result:** Over 3–4 quarters, team adoption climbs, NDR moves above 100%, and enterprise sales finally has usage-based signal to qualify. The 10,000 individual users aren't wasted — they're the entry point, but you stop pretending individual count is the business. You start closing 6-figure deals you couldn't close before because now there's team activation underneath them.

**Situation:** A consumer subscription app at ~7% monthly churn is benchmarking against Slack and panicking.
**Application:** Stop the benchmarking. You are comparing a B2C consumer app to a B2B SaaS product with expansion revenue. 7% monthly churn in a DTC consumer subscription is *in range* (5–7% is the band). You are never going to hit Slack's <2% enterprise churn because the economic structure is different — there's no "I use this for work and my company pays" dynamic. Refocus: what's your first-term churn? Is your retention curve flattening or decaying? What's your payback period on acquisition? Those are the B2C metrics that matter. Goal the right things.
**Result:** The panic ends. First-term churn benchmark (25%) becomes the new target. Resurrection tactics, engagement loops, acquisition volume get the attention. Three quarters later, retention flattens earlier on the curve, first-term churn drops from 45% to 30%, and LTV improves without changing the monthly churn number leadership was fixating on.

**Situation:** A prosumer creator tool is torn between optimizing for individual creators (B2C playbook) or landing agency/studio accounts (B2B playbook).
**Application:** Both, sequenced. B2C mechanics at the top of the funnel — fast individual activation, viral sharing, love marks, low-friction signup — because that's how creators find the product. Then B2B mechanics kick in at monetization and expansion — team plans, admin dashboards, collaboration features, usage limits that scale with team size, account-level metrics for agency deals. Don't optimize the individual experience so aggressively that you can't sell to studios. Don't optimize the studio pitch so aggressively that individual creators bounce at signup.
**Result:** Top of funnel stays consumer-grade; revenue expands into B2B ACVs. This is how Canva, Figma, and Notion all built their businesses — consumer-feeling acquisition, B2B-level expansion and monetization.

## Anti-Patterns (tactical)

**Don't:** Celebrate individual user growth in B2B without measuring team adoption.
**Why:** 10,000 individual users that never aggregate into teams is a glorified consumer app wearing a B2B label. All up-market expansion fails. The ticking time bomb goes off somewhere between $50M and $200M ARR when the enterprise pipeline doesn't materialize.

**Don't:** Copy a B2C retention curve shape expectation into B2B.
**Why:** B2B retention should flatten higher and show a Revenue Smile Curve — dip, then expansion-driven recovery. B2C retention tends to decay more aggressively because there's no structural expansion mechanism. Using B2C benchmarks to evaluate B2B performance undersells what your B2B motion is actually capable of.

**Don't:** Measure only WAU in B2B.
**Why:** WAU hides the team/account story. A customer where one user is active and five accounts are inactive looks the same as a customer where all five are active. WAT (Weekly Active Teams) surfaces the expansion leading indicator. Measure both, but if you only measure one, measure WAT.

**Don't:** Route every B2B signup through the same onboarding.
**Why:** B2B signups include ICP (big company), prosumer (self-serve monetizable), and free-forever (students, personal use). Each needs a different path. One-size-fits-all onboarding is one-size-fits-none. Profile, segment, route.

**Don't:** Put ICP sales on prosumer and free-forever users.
**Why:** Sales floor exists for a reason. Sales reps need to produce 3–5x their salary. Chasing $200/year prosumer accounts with a human AE is a losing-money motion. Let self-serve scrape those. Sales goes to accounts where the math works.

**Don't:** Copy B2C acquisition hacks (growth loops, virality, casual contact) and assume they'll close enterprise deals for you.
**Why:** They won't. They'll produce individual users. Enterprise deals require track 3 — buyer finding — through entirely different channels (LinkedIn, G2, events, ABM) and entirely different messaging (enterprise value prop, security, SLA, integrations). Keep the B2C acquisition tactics where they belong (top of funnel) and build the buyer-finding track separately.

**Don't:** Use "we're different, we're a B2B/B2C hybrid" as a reason to avoid measurement.
**Why:** Hybrid just means you have *both* sets of metrics to run. Not fewer. Profile segments, pick the right north star per segment, and stop using hybrid as a dodge.
