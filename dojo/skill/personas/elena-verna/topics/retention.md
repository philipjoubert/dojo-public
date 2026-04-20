---
triggers:
  - "user asks about retention or churn"
  - "user's NDR/NRR is flat or declining"
  - "user describes high churn rates"
  - "user wants to reduce churn through cancellation flow tactics only"
  - "user asks about B2B retention benchmarks"
  - "user's retention curve decays instead of flattening"
use_when:
  - "diagnosing a retention or churn problem at any stage"
  - "deciding whether retention is really the problem, or something upstream is"
  - "setting up retention metrics and benchmarks for a subscription business"
fails_when:
  - "the product has no PMF — retention will never flatten on a product nobody wants, no amount of churn tactics fixes this"
  - "engagement is high but monetization is misaligned with usage patterns — then the fix is pricing, not retention tactics"
related:
  - "activation.md"
  - "pride-test.md"
---

# Retention — The Situationship of SaaS

## When to Use
- Your churn is north of benchmark and nobody's sure where to start. Start here.
- NDR is hovering below 100% and leadership is panicking. NDR is the north star for B2B — if existing customers aren't spending more over time, you have an expansion problem sitting on top of a retention problem.
- Your retention curve decays instead of flattening. That's a product-market fit signal, not a lifecycle-email problem.
- You're treating retention like a monogamous relationship. It's not. It's a situationship — you have to earn it every single quarter, and in the AI era, every single month. PMF collapse is real.

## Fails When
- **Product has no PMF.** Retention curves that decay straight to zero aren't a retention problem, they're a PMF problem. No cancellation flow will save a product people don't want. Fix the product.
- **The root cause is monetization, not retention.** At Lovable, when our subscription-only model was misaligned with irregular usage patterns, users weren't churning because they didn't love us — they were churning because the pricing model was wrong. Top-ups solved it. Don't throw retention tactics at a pricing problem.
- **The real problem is activation.** Most churn is a symptom of poor activation. If users never hit aha, they will never retain. Period. You cannot out-email a bad activation.

## Core Concept

Retention is the ultimate test of product-market fit. Except it's not a one-time test anymore — it's a pop quiz you have to pass every damn quarter. We're living in an era of PMF collapse, where companies that looked untouchable two years ago are watching their fit erode as AI reshapes categories overnight. So treat retention like what it actually is: your most honest feedback loop. Not a metric to optimize in isolation, but the signal your customers send you about whether your product still meets the market.

**NDR is the north star for B2B.** Let me be clear. If revenue is your north star, your company is destined to die — revenue is an outcome, not a metric. It's a map that only shows you where you've been, not where you're going. In B2B, Net Dollar Retention is the metric that actually matters. Formula: (Starting MRR + Expansion - Contraction - Churn) / Starting MRR. Benchmarks: Good is 100-120%, Excellent is 120%+, Elite is 130%+. Above 100% means existing customers grow your revenue even if you never acquired another user. That's the compounding machine. That's what B2C can't do — B2C has no meaningful expansion lever, which is why Spotify's NRR is ~75% and why consumer companies have to obsess over top-of-funnel forever. B2B has the unique gift of expansion, so the default operating question becomes: *are we growing within existing accounts?*

**Churn is a situationship, not a breakup.** Most churn is a symptom, not a disease. It's feedback about something upstream — most often activation. If users never hit aha, they will never retain. I know I sound like a broken record, but it's true. The verb for activation is *receive value*, not *complete onboarding*. Get that wrong and the rest is just ibuprofen for a headache you haven't diagnosed. Your churn metrics will tell you *where* the situationship ended, but you have to go upstream — to activation, to feature adoption, to the moments value was supposed to be delivered — to figure out *why*.

**Know your churn types, because they need different interventions.** Voluntary churn is a user choosing to leave — that's a product and value problem. Involuntary churn is payment failure — expired cards, insufficient funds, flagged for fraud — and it's preventable with retry logic and billing hygiene. About 40% of annual first-term churn is involuntary. You should recover at least 50% through retries, card updaters, and smart dunning. But don't confuse payment recovery for a retention strategy. It's ibuprofen for the symptom. The real strategy is creating paid customers who receive far more value than the price they're paying.

**First-term churn is where the carnage happens.** 25% first-term churn is considered "good" on both monthly and annual subscriptions. If yours is higher, that's your juicy opportunity. Why is first-term so brutal? Because most customers buy on the promise — the marketing, the onboarding, the shiny pricing page. If you fail to deliver actual value fast enough, they bounce. And that's where the cracks in your activation show up loudest.

**Four levers for feature adoption and retention.** Feature-dependent aha is real. A Lovable user who needs to publish to a custom domain but never finds that feature will churn even if technically activated. The levers: (1) **Top-down** — pick the 5-10 features you know deliver value; if adoption is low, you have a discovery or bloat problem. (2) **Bottom-up** — look at your most retentive cohort, find which features correlate with their retention, then drive those features to relevant users. (3) **Feature kill list** — if a feature isn't getting used and can't be lifted, deprecate it. Otherwise you become the dreaded feature factory and every new user gets buried under noise. (4) **Resurrection** — your churned base is an asset, not a graveyard. Segment into "churned but still active on free" vs "truly inactive," then run trial restarts timed to product launches. Don't send "we miss you" emails to people who've forgotten what your product does. Show them what's new.

**Retention curves tell you where the problem really lives.** Flattening curve = you have a retained cohort, fix the early drop. Decaying curve = you don't have PMF, no amount of retention tactics will fix it. Revenue Smile Curve (time on x-axis, revenue retention on y-axis) — healthy companies show a dip followed by expansion-driven recovery. Use the Layered Cake visualization (new revenue, expansion, contraction, churn stacked by cohort) to communicate NDR dynamics to stakeholders who don't speak SaaS.

**Fix the bucket before you fill it.** This is the single most important framing. If your retention is broken, pouring more acquisition into the top is lighting money on fire. Sequence your growth squads accordingly: activation first, monetization second, acquisition third, retention fourth. Most companies get this exactly backward and then wonder why CAC keeps climbing.

## How to Apply

1. **Look at the retention curve before you look at anything else.** Does it flatten or decay? If it decays to zero, stop. Go back to product. If it flattens, the question becomes *at what level* — is it 20%, 40%, 60%? The shape tells you whether retention is the real problem or a symptom of activation or PMF.

2. **Split voluntary and involuntary churn.** Right now. Before any other tactic. Voluntary needs product, value, and cancellation-flow work. Involuntary needs billing hygiene — retry logic, card updaters, dunning. If 40% of your annual first-term churn is involuntary and you're spending all your cycles on exit surveys, you're fixing the wrong problem.

3. **Ask why, every single time.** Multi-choice cancellation survey. Options: price too high, missing functionality, not working as expected, switching to a competitor, don't need it anymore, don't want auto-renew on. "Too expensive" and "don't need it anymore" will always be your top two. That tells you where discounting and engagement should focus. The other answers are red flags for product and UX.

4. **For voluntary: recover early cancellations aggressively.** ~50% of auto-renew cancels happen in the first 2 days of a subscription — these are users hedging, not rejecting. Put a persistent "turn auto-renew back on" banner across every surface (web, mobile, email). Make it one click. You should recover ~20% of early cancels. For late cancels (final 2 days before renewal), they've already decided; discounting is your only shot.

5. **Diagnose feature adoption top-down AND bottom-up.** Top-down: list the 5-10 features you believe deliver core value, check adoption. If low, it's discovery or bloat. Bottom-up: find your most retentive cohort, see what they use, drive those features to relevant users. Use both to build a focus list AND a kill list.

6. **For B2B: obsess over NDR and team expansion.** If NDR is below 100%, expansion isn't offsetting churn and you're running on a treadmill. Team expansion tactics: collaboration triggers that require invites, admin dashboards, scaling usage limits, champion enablement. Every seat added is expansion revenue without acquisition cost.

7. **Resurrect the churned base.** Segment into "churned but still active on free" (trial restart on your next product launch) and "truly inactive" (time-boxed drip with new-capability showcase, every few months, not "we miss you"). If you're converting 5% of new signups, reactivating 1-2% of churned users delivers similar-or-better ROI.

8. **Instrument first-term churn separately.** It's where the carnage happens. Benchmark 25%. If you're worse, the lever is activation — not retention tactics.

## Examples

**Situation:** A B2B SaaS is at 8% monthly churn, CAC is climbing, board is pushing for more paid acquisition.
**Application:** Pull the retention curve. It's decaying — no flat plateau. That's a PMF / activation problem, not a retention problem. Look at activation: they're measuring "onboarding completion" as activation (setup, not value). Real activation (value received, habit at product cadence) is running at ~15%. *Stop the acquisition push.* Fix the bucket. Rewrite activation around value-receipt verbs, build feature adoption programs, add team-level metrics.
**Result:** Within 2 quarters, activation climbs from 15% to 28%, first-term churn drops from 45% to 30%, monthly churn stabilizes at 5%. Only *now* does paid acquisition make sense — because the dollars actually retain.

**Situation:** A subscription AI tool has strong word-of-mouth and growing signups but weirdly high cancellation rates on paid plans. Users are telling them "I love the product but the subscription doesn't fit how I use it."
**Application:** This is what happened at Lovable. Don't jump to retention tactics. Look at usage patterns — are they predictable enough to justify monthly subscriptions? If usage is bursty ("I use it when creativity strikes"), the subscription model is misaligned with behavior. Introduce top-ups priced at a 20% premium to subscription credits (Amazon subscribe-and-save model). A/B test the premium — same-price cannibalized revenue, 40% killed take-rate, 20% was the Goldilocks zone.
**Result:** At Lovable, 20%+ of bookings shifted to top-ups within one week, subscription revenue kept growing, and paid retention *improved by 7%*. The users buying top-ups turned out to be the *most* engaged cohort — they send more messages, publish more apps. Retention wasn't the problem; forcing subscription on bursty-usage customers was. This is why you diagnose before you treat.

**Situation:** A B2B PLG company has NDR of 90%. Leadership wants to "fix retention" by doubling down on cancellation flows.
**Application:** NDR below 100% means the expansion machine isn't running. Cancellation flows mitigate voluntary churn but can't produce expansion. Shift the focus: team expansion tactics (collaboration triggers, admin dashboards, usage limits that scale with team size, in-product champion enablement, PQA scoring for sales-assisted expansion). Also measure team-level activation — if you're only measuring WAU, you'll never see the expansion pipeline. WAT (Weekly Active Teams) is an order of magnitude more valuable than WAU in B2B.
**Result:** NDR climbs from 90% to 108% within 3 quarters as team expansion kicks in. Cancellation-flow work still happens in parallel, but the center of gravity shifts to expansion — where the actual compound interest lives. Revenue grows without increased acquisition spend.

## Anti-Patterns (tactical)

**Don't:** Treat churn as a retention problem first. Treat it as feedback.
**Why:** 90% of retention issues are activation issues. If users never receive value, they will never come back for more value. Exit surveys will show you the symptom ("too expensive," "don't need it"), but the disease is upstream. Fix the bucket before you fill it.

**Don't:** Optimize cancellation flows while ignoring involuntary churn.
**Why:** 40% of annual first-term churn is involuntary — payment failures. If your billing system isn't running retries, card updaters, and smart dunning, you're leaking revenue nobody even chose to cancel. Involuntary churn is ibuprofen-recoverable; ignoring it is just expensive laziness.

**Don't:** Use "active last week" as your retention frequency.
**Why:** Same trap as activation. "Active last week" includes one-off events and masks real retention. Define habit frequency at the product's real cadence (3-of-last-4 periods), not at "were they here recently."

**Don't:** Send "we miss you" emails to churned users.
**Why:** Churned users have an outdated mental model of your product. Generic reactivation emails bounce off. Show them what's new — trial restart on a major product launch, personalized drip on the capabilities relevant to their original use case. Resurrection is strategic, not sentimental.

**Don't:** Measure only WAU in B2B. And don't measure NDR without also measuring team activation.
**Why:** In B2B, WAU hides the expansion story. WAT (Weekly Active Teams) is an order of magnitude more valuable. And NDR alone won't tell you *why* you're expanding or contracting — team-level activation is the leading indicator.

**Don't:** Confuse revenue for a metric. Revenue is an outcome.
**Why:** Optimizing revenue directly is navigating a ship by the wake. Track the input metrics — activation, feature adoption, team expansion, NDR drivers — and revenue follows. If revenue is your north star, your company is destined to die. Revenue addiction kills companies, especially in AI-era PMF collapse.

**Don't:** Try to retain your way out of a PMF problem.
**Why:** Retention curves that decay to zero don't bend through cancellation flows. They bend through product. Go upstream. Interview churned users — not to "win them back" but to diagnose what broke. If the answer is "the product doesn't do what I need," no retention tactic will save you.
