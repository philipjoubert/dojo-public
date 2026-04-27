---
triggers:
  - "product feels mediocre / generic / 'nothing special'"
  - "team over-optimizes for quantifiable metrics and ignores qualitative signals"
  - "users complain they feel stupid using the product"
  - "design discussions reduced to A/B tests"
  - "taste-related decisions being dismissed as 'soft'"
  - "founder asks why their product doesn't feel cared-for"
use_when:
  - "arguing for investment in quality that metrics won't capture in the short term"
  - "pushing back on pure data-driven design culture"
  - "hiring or evaluating people on taste dimensions"
  - "diagnosing why a culturally flat company has a flat product"
fails_when:
  - "used as an excuse to avoid any measurement at all"
  - "mistaken for visual polish alone (craft is deeper than UI aesthetics)"
  - "deployed to dismiss valid quantitative evidence of failure"
related:
  - "hot-paths-and-peanut-butter.md"
  - "software-has-a-worldview.md"
  - "environment-over-policy.md"
---

# Craft and Giving a Damn

## When to Use
- A product decision is being made by data alone and something in your gut says the data is the wrong frame.
- The team is shipping features that technically work but don't *feel* cared for.
- Users are getting confused by the software and the reflex in the building is to blame the users.
- You're trying to articulate why a "nondescript" company tends to produce nondescript software and how to break that pattern.
- You're hiring for a role where taste is load-bearing and you can't tell how to interview for it.

## Fails When
- Used to wave away quantitative data. Metrics are real; craft doesn't exempt you from them. The distinction is that they're necessary but not sufficient.
- Reduced to visual polish. A beautifully rendered UI can still be careless about edge cases. Real craft is about how every piece fits together, not about how the demo looks.
- Deployed so often it becomes cover for slow shipping ("we're just being crafty"). Craft is a standard, not an excuse for inaction.

## Core Concept

Every user of any piece of software can intuitively tell how much the people who created the software gave a damn about it. You just know. You can't always articulate why — you feel it when edge cases work instead of breaking, when the next step is already where you expected it to be, when the error message actually tells you what to do. That feeling is the creator's care, transmitted through the object.

And the opposite also transmits. When software is careless, when nobody thought about the case you're in, when the defaults are wrong — you feel that too. Often you blame yourself. You start to believe you're "bad at computers." You're not. The software was built without regard for you, and you're detecting exactly that.

This is why I treat software as a moral issue. Computers don't get to make people feel dumb. Hammers don't make people feel dumb. Screwdrivers don't make people feel dumb. Software is the only field of tooling where we somehow normalized the idea that the user is supposed to adapt to the tool. It's completely backwards. The tool is supposed to give people superpowers. When it doesn't — when it makes humans feel inadequate — that's a failure of the people who built it, not a failure of the user.

Taste, quality, craft — if they can't be put in numbers or written as a list, companies hate them. And yet almost everything you actually have to do to build a great company is in these categories. The companies that win aren't the ones that optimize hardest on measurable metrics. They're the ones where the people building the thing genuinely care about it, and that caring transmits through the interface to the user.

Corollary: if your internal culture is nondescript, your product will be nondescript. Craft is contagious, and so is its absence. You can't produce a product with soul inside a company that doesn't have soul. That's why "fix the product" and "fix the company" are often the same task.

The substitute that has emerged is metric-worship. Run the A/B test. Optimize the funnel. Let the numbers decide. And this mostly produces local-maxima mediocrity — the pricing page converts at 62% now, and nobody can articulate why, and the next test nudges it to 63%, and you've lost the ability to build from first principles. A/B testing without a hypothesis is abdicating the design decision to random variance. You're stuck with whatever won and you haven't learned anything about *why*. Metrics aren't a strategy. Growth isn't a goal — growth is a direction. Neither is a substitute for taste.

The positive side of this: interfaces should *inspire*, not just *inform*. When a user thinks "this should work like X" and it does, and they find exactly the right option exactly where they expected — they feel competent. That competence is the motivational battery that keeps entrepreneurs pushing through low points. A well-designed hot path isn't just efficient; it produces energy for the user. A badly designed one drains it. You're either giving your users fuel or taking it.

## How to Apply

1. **Use a single diagnostic question on any user-facing surface: does this make the user feel empowered or inadequate?** Run it on every screen. If it's making them feel stupid, that's your failure — stop blaming the user, stop adding training, start fixing the surface.

2. **Interview for craft.** In hiring, listen for how people talk about their past work. Do they mention specific details they got right? Do they express visible frustration when things shipped half-done? Do they show pride in quality that wasn't required by the spec? You can't test for craft with a rubric, but you can hear it in how someone describes the work.

3. **Protect the unquantifiable.** Companies naturally erode the things that can't be measured, because the things that *are* measured get optimized. Deliberately hold space for decisions that can only be justified with "because it's the right thing." This is a budgeting exercise — protect some portion of every design review for the stuff that isn't in the dashboard.

4. **Use A/B tests to confirm a hypothesis, not to decide the direction.** The design decision is yours. The test measures magnitude. If you run a test without a hypothesis and B wins, you don't know why, so you can't generalize the lesson — you've just confirmed a number. That's not knowledge.

5. **Fix the culture when the product feels flat.** If the product is generic, your team probably isn't having fun. Ask why. Are you grinding people through quarterly process? Are decisions made for defensive reasons? Are you hiring people who care, or optimizing for résumé brands? The product leaks whatever the culture actually is.

6. **Separate craft from polish.** A product can look beautiful and still be careless. The test for craft isn't "did the design team make it pretty," it's "does every interaction, including the unusual ones, work the way a competent person would expect?" Craft shows up more in error states and edge cases than in the happy path.

## Examples

**Situation:** A SaaS team is deciding between two versions of an onboarding flow. Version A is what the PM wants — data-driven, optimized from past tests. Version B is what the design lead wants — a first-principles redesign that assumes a new user mental model. PM wants to A/B test them for six weeks.
**Application:** If Version B has a clear first-principles argument and Version A is just "what we've tested to lately," the test isn't a learning exercise — it's a decision-avoidance exercise. Ship B with instrumentation. If it underperforms, you'll know *why* because B had a hypothesis. If A had won an A/B test you'd have a number and no understanding.
**Result:** B's conversion is 4 points lower in week one — but two specific steps reveal wrong assumptions about new-user mental models, which team fixes in week two. Post-fix, B outperforms by 11 points. That's a learning; the A/B run of A vs B would have just picked A and compounded the wrong model.

**Situation:** A merchant on Shopify sells a precision-CNC pill case from a small Japanese workshop. The entire site is a love letter to the object — macro photography, sub-millimeter tolerances, care in every paragraph of copy.
**Application:** You look at this thing and you know someone cared. Not because the marketing tells you — because the object itself transmits the caring. This is the test. When the object transmits the creator's attention, people keep it, refer it, love it. That's what solves consumerism, by the way: quality products people don't throw away.
**Result:** The merchant does disproportionately well relative to their market size, because caring is rare and users can tell.

**Situation:** A company ships a dashboard feature. It works, it's instrumented, metrics are fine. But no one uses it for anything beyond what's strictly required.
**Application:** The dashboard is *informing* rather than *inspiring*. The diagnostic: do users come back to it because they want to, or only when forced? If only when forced, the craft isn't there — the information is, but the experience of using it hasn't earned their attention. That's a craft problem, not a feature problem.
**Result:** Redesign treats the dashboard as a hot path: tight feedback loops, considered defaults, specific delight moments (live updates, hoverable detail, a satisfying micro-interaction on key events). Usage goes up not because the data is better, but because using it now produces energy.

## Anti-Patterns (tactical)

**Don't:** Measure everything that matters. Measure some of it, and protect the rest from the dashboard.
**Why:** The things companies hate — taste, judgment, care — are exactly the things that most determine product quality. If you put them on a dashboard, they get gamed. If you leave them unmeasured, they get cut. The right move is to protect them culturally, not metrically — "this is what we do because we care" is a legitimate answer in a design review.

**Don't:** Blame the user when users get confused.
**Why:** "Users don't understand the feature" is a diagnosis of *your design*, not of your users. Software that makes humans feel stupid is the software's fault. If your team's default reaction to confusion is "we need more documentation" or "we need to train them better," you're adapting the user to the tool. That's backwards.

**Don't:** Confuse polish for craft.
**Why:** A visually beautiful product can ship with broken edge cases, unhelpful error messages, and careless defaults. Craft is how the whole thing fits together when things go wrong, not how it looks on a Dribbble shot. Polish is the finish; craft is the joinery underneath.

**Don't:** Let a nondescript culture produce a nondescript product and then try to fix the product.
**Why:** The correlation is upstream. If your team doesn't care, your product will leak that. You can't design your way around an apathetic culture; you have to fix the culture and let the product follow. Otherwise you're just applying makeup.

## Direct Quotes from Toby

> "Every user of any piece of software can intuitively tell how much the people who created the software gave a damn about it. You just know."

> "When people are confused with software and they think about themselves as being inadequate — how dare software make humans feel that way. It's just not okay. To me this is almost a moral issue."

> "Computers don't get to make people feel dumb. That is not their role. They are tools. Hammers don't make people feel dumb. Screwdrivers don't make people feel dumb. We are the only field of tooling that somehow is allowed to make humans feel not good about themselves."

> "Taste, quality — if it can't be put in numbers or can't be written as a list, companies hate it. Yet almost everything you have to do to build a great company are these things."

> "The thing that solves consumerism is quality products. When something is well-made, people keep it. When something is thoughtless, people discard it and buy again."

> "If your company is nondescript, your product will be nondescript."

> "When you want to do a thing and you think this should work a certain way, that's your first guess. And not only is that exactly how it works, you find exactly the right option at exactly the right place… man, you're proud of yourself. That's the exact fuel that keeps you going."
