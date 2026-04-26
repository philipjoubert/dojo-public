---
triggers:
  - "design team is spread thin across every feature"
  - "user asks where to invest scarce design or engineering resources"
  - "team is spreading quality evenly across all flows"
  - "user is deciding what needs to be 10/10 vs. 7/10"
  - "AI-era conversation: 'anyone can vibe-code a mediocre version of this'"
use_when:
  - "allocating design / engineering resources across a product"
  - "prioritizing where quality matters most"
  - "evaluating product experience gaps"
  - "building design systems and deciding where to break them"
fails_when:
  - "used to justify terrible secondary experiences"
  - "applied by calling everything a hot path — defeats the purpose"
  - "used on very early products where there's really only one flow"
related:
  - "craft-and-giving-a-damn.md"
  - "software-has-a-worldview.md"
  - "four-constraints.md"
---

# Hot Paths and Peanut Butter

## When to Use
- Allocating design and engineering resources across a product with many features.
- Prioritizing where to invest in quality — not every screen deserves the same effort.
- Evaluating why a product "technically works" but doesn't feel exceptional anywhere.
- Building or extending a design system and deciding which journeys should break it.
- Reasoning about product quality in the AI era, where baseline mediocrity is cheap.

## Fails When
- Used to justify genuinely terrible secondary experiences. Non-hot-path should mean "good instead of exceptional," not "broken." There's a minimum standard everywhere.
- Applied by calling everything a hot path. If you declare fifteen user journeys critical, none are critical. Real prioritization means saying no.
- Used on products so early there's really only one flow. At that stage, everything is the hot path because there's nothing else to be.

## Core Concept

In design resource allocation, two failure modes dominate. One is obvious — neglecting design entirely. The other is more subtle and equally destructive: peanut-buttering.

You spread design resources evenly across everything. Every feature gets the same level of attention. Every user flow gets the same investment. The result is uniform mediocrity. Everything is fine. Nothing is exceptional. The product tests fine, no specific complaint sticks, and yet it doesn't produce the experience that makes users love it. That's because you optimized evenness, and evenness is not a product strategy.

The alternative: identify hot paths — the critical user journeys that deserve 10/10 design investment — and concentrate excellence there while maintaining good-enough everywhere else.

Most paths can be good-enough. Not every screen matters equally. Settings pages, admin panels, secondary flows — these need to work, need to be clear, need to not frustrate. They don't need to inspire. Design systems exist precisely for this: they enable "vibe-coded 7 out of 10" across these paths. In the AI era this becomes more pronounced — anyone can generate a 7/10 of almost anything. So the strategic question is: where do *you* go to 10?

Hot paths must be exceptional. First sale. Checkout. Onboarding. The dashboard users see every day. These are where impressions form, where friction causes abandonment, where delight creates loyalty. This is also where the motivational battery gets charged: when the user thinks "this should work like X" and it does, and they find exactly the right option exactly where they expected it — they feel competent. That competence is the fuel that keeps users pushing through low points with your product.

Two modalities of design work follow from this. First: strengthen the foundation. Great design systems that enable anyone on the team to produce good design. The baseline rises. Second: break the design system deliberately on hot paths. Where you want users to appreciate the quality, you paint outside the lines. You create experiences the system couldn't produce on its own. The system carries most of the product. The hot paths transcend it.

Resources are finite. Attention is finite. If you spread everything evenly, you get an even result — and even isn't good enough where it matters. The peanut-butter approach feels fair. Every team gets the same design support. Every feature gets the same attention. But fairness isn't the goal. Excellence where it matters is the goal. Deliberate concentration beats egalitarian spreading every time.

One more frame: users don't experience features in isolation. They experience paths. A Shopify merchant visits the dashboard every day, goes through checkout every time they make a sale, completes onboarding once. Asking "where should design excellence concentrate?" is the same as asking "which paths disproportionately determine the user's relationship with the product?" That's the hot-path question, and the answer is almost always obvious once you state it correctly.

## How to Apply

1. **Identify your hot paths explicitly.** Not everything is critical. List the 5–7 user journeys that disproportionately determine whether someone converts, stays, recommends, or feels successful. These are your hot paths. Everything else is supporting infrastructure.

2. **Establish a strong baseline, then exceed it selectively.** Design systems exist for a reason — consistency, speed, minimum quality. Use them for 80% of your product. On hot paths, break the system deliberately. Invest the design hours that would have been spread across twenty features into perfecting two.

3. **Avoid peanut-buttering through discipline, not accident.** The natural organizational pressure is toward evenness. Every team owner thinks their flow is critical. The only way to concentrate resources is explicit prioritization — "these paths get exceptional attention, everything else gets good-enough." Expect pushback; it means the framework is doing its job.

4. **Measure experience quality on hot paths specifically.** Not aggregate usability scores across everything. Specific metrics on your critical journeys. How long does first-sale setup take? What's checkout abandonment? How do users describe onboarding? These are the numbers that matter; don't let aggregate metrics hide hot-path problems.

5. **Recognize when baseline has drifted.** "We're focused on hot paths" shouldn't mean non-hot-paths have degraded to broken. Audit the baseline periodically. If a settings page has become genuinely bad, it's leaking credibility into the hot paths. Good-enough still has a floor.

6. **In the AI era, ask where you go to 10.** If AI lets anyone vibe-code 7/10 versions of most things, the competitive question isn't "can we match 7/10?" but "where do we deliver 10/10 that AI-assembly can't?" The hot paths are that answer. Everything else, let AI-assisted workflows handle at the 7/10 level.

## Examples

**Situation:** Shopify allocates design across the product. The team wants to invest evenly because "everything matters."
**Application:** Identify the hot paths: first product setup, first sale experience, daily dashboard interaction, checkout flow, store customization. These deserve exceptional investment. The API documentation settings page? Needs to be clear and functional. Doesn't need to inspire. The design system handles the latter category; the hot paths get hand-crafted, system-breaking attention.
**Result:** Hot paths become distinctive and delightful; baseline stays clean and professional. Users associate the product with quality because they feel it most in the places that matter most.

**Situation:** A team is building Shop Pay — accelerated checkout that handles a significant portion of Shopify's transactions.
**Application:** This is the canonical hot path. It would be a mistake to let the design system template it. The team deliberately paints outside the lines — custom interactions, hand-crafted states, bespoke performance optimization. This isn't consistency's flow; it's quality's flow.
**Result:** Shop Pay becomes a competitive asset. The system would have produced a 7/10 version; breaking the system produced a 10/10 version. The cost was worth it because of the path's strategic importance.

**Situation:** A SaaS company looks at its conversion funnel and sees "everything is fine but nothing is great." Conversion is ~60% at checkout. They're considering where to invest.
**Application:** Checkout is a hot path. A technically functional checkout with all the fields can convert 60%. An exceptional checkout — anticipates every question, removes every friction, makes the user feel secure and competent at every step — can convert 78%. That 18-point delta is the hot-path premium. Spread the same design hours evenly across five features and you'll get a few points here and there; concentrate them on checkout and you get a strategic advantage.
**Result:** Reallocate effort. The other four features stay at current quality (which is fine). Checkout gets the kind of attention that would be wasted on settings pages. Conversion climbs.

**Situation:** A team-facing internal tool is used daily by every engineer. A customer-facing analytics page is used rarely by a small subset of users.
**Application:** The internal tool is a hot path (for engineers, who live in it), even though it's not customer-facing. The analytics page is not (for customers, who touch it rarely). The hot-path question is "does this path disproportionately shape experience," not "is it customer-facing."
**Result:** Invest disproportionately in the daily-use internal tool. The analytics page gets a clean baseline implementation. Total product quality improves even though the obvious external instinct would have said "customer stuff first."

## Anti-Patterns (tactical)

**Don't:** Use "it's not a hot path" to justify broken or embarrassing experiences.
**Why:** Non-hot-path should mean "good instead of exceptional," not "acceptable to be broken." There's a minimum standard everywhere. If a secondary feature has degraded to genuinely bad, it leaks credibility into the hot paths. "Not a priority" isn't a license for shoddy.

**Don't:** Declare fifteen paths as critical.
**Why:** Real prioritization means saying no. If you mark every path as critical, you've marked none of them. The framework's power is in forcing the trade-off. Five to seven paths is a reasonable upper bound for most products.

**Don't:** Ignore hot paths because they're not where new features live.
**Why:** The new feature pipeline tends to dominate design attention because it's where new work happens. But the hot paths — especially ones that have been around forever — often get neglected. An old checkout flow with accumulated friction is almost always higher-leverage than a shiny new feature.

**Don't:** Assume your obvious hot path is the actual hot path.
**Why:** Talk to users. Sometimes the admin settings page you deprioritized is where your power users actually live, and your "obvious" hot path isn't where the experience is being formed. Verify with behavior, not instinct.

**Don't:** Use the design system on hot paths out of consistency-worship.
**Why:** Design systems are for consistency at scale — 7/10 everywhere. Hot paths are where you deliberately pay the consistency tax to produce 10/10. Both modes are valid; using the system on a hot path defeats the purpose of having hot paths.

## Direct Quotes from Toby

> "Increasingly, the bar we come up against is: we have network effects and regulations and other things that allow us to differentiate, but ultimately you will be able to vibe-code those for yourself. Can we bring that quality of software to a level where it's actually worth paying for?"

> "When you want to do a thing and you think this should work a certain way — that's your first guess. And not only is that exactly how it works, you find exactly the right option at exactly the right place… man, you're proud of yourself. That's the exact fuel that keeps you going."

> "Two modalities. One: strengthen the foundation. Design systems that let anyone do good design. The baseline rises. Two: break the design system on hot paths. Paint outside the lines. Most paths use the system. Hot paths transcend it."

> "The peanut butter approach feels fair. Every team gets the same design support. But fairness isn't the goal. Excellence is the goal — concentrated where it creates the most value."

> "Where do users spend time? Where do they feel successful? Where do they abandon? Those are your hot paths. Everything else is infrastructure."
