---
triggers:
  - "user asks how to A/B test their way to a better product"
  - "user wants to run an experiment to decide a design question"
  - "user defaults to 'let the data decide'"
  - "user is stuck with a winning variant and doesn't know why it won"
  - "user asks about metrics as strategy"
  - "user talks about growth hacking, conversion optimization, or experiment velocity"
use_when:
  - "a team is about to outsource a design decision to an A/B test"
  - "a product org has become experimentation-native and stopped forming opinions"
  - "a variant has won and nobody can explain the mechanism"
  - "the question is a design or strategic question dressed up as a measurement question"
fails_when:
  - "the decision is genuinely tactical — button colors, copy tests — where a hypothesis is obvious and the downside is trivial"
  - "applied by a CEO who has no product taste and is using 'no A/B tests' as an excuse to impose whim"
  - "used to refuse measurement in general — the problem is testing without hypothesis, not measurement as such"
  - "you lack the instrumentation to measure anything cleanly — then A/B testing is premature regardless"
related:
  - "design-is-how-it-works.md"
  - "eleven-star-experience.md"
  - "quality-before-growth.md"
  - "founder-mode.md"
---

# A/B Testing Discipline

## When to Use
- A team is about to let an A/B test decide what a design or product should actually be.
- Your product org has become experimentation-native — every question routes to a test — and strategic opinions have atrophied.
- A variant won last quarter and you're about to ship it, but nobody can explain why it won.
- The question is a design or strategy question wearing a measurement costume.

## Fails When
- The decision is genuinely tactical. Button colors, copy tests, narrow flow optimizations — if the hypothesis is obvious and the downside is trivial, test away.
- The CEO imposing "no A/B tests" has no product taste. Then it's just replacing data with whim, which is worse.
- It becomes a refusal to measure at all. The problem is abdicating judgment to testing, not measurement itself.
- You don't have the instrumentation to measure cleanly. Then A/B testing isn't the question — your analytics are.

## Core Concept

A lot of tech companies, as they scale, develop a pattern. They ship continuously, they A/B test everything, and they let the test decide. It looks rigorous. It looks data-driven. It sounds very grown-up. And in many cases it's a way to abdicate design decisions to random variance.

When I took Airbnb back in 2020, one of the things I did was largely get rid of the classic A/B test for product and design decisions. That line got misread a lot. I wasn't saying "don't measure." I was saying: A/B testing without a hypothesis is abdicating your responsibility to the user.

Here's the rule I try to hold. You should only A/B test with a hypothesis. You start with a point of view about what a great version of this looks like and why. You ship variants to test the hypothesis, not to discover the answer. And if B beats A and you don't know WHY B won — you don't ship B. Because if you don't know why, you're stuck with it for the next ten years and you haven't learned anything. The test confirmed a number. It didn't tell you what's true.

The reason this matters is that most strategic and design questions don't have a "winning" answer that a two-week test can find. They have answers that require judgment, taste, deep understanding of the user, and a willingness to commit. Metrics are not a strategy. Growth is not a goal — growth is a direction. If the only thing driving your product forward is a stack of winning variants whose mechanism you don't understand, you've optimized the local maxima and missed every mountain range nearby.

The other failure mode is that A/B testing culturally trains people not to form opinions. When the test decides, designers and PMs stop reaching for the first-principles answer. They generate twelve variants and wait. Over time, the team loses the muscle to say "this is what a great one looks like" and starts saying "let's see what wins." The muscle atrophies. And ten years later you have a product that is a Frankenstein of locally-winning variants, with no coherent soul.

So: test with hypothesis. Know why you won. And reserve the big design and strategy decisions for taste and judgment, not variance.

## How to Apply

1. **Before running a test, write the hypothesis.** What do you expect to happen and why? If you can't write it, you're not ready to test.
2. **Design the test against the hypothesis.** If B wins because of factor X, what else should you see? Build in the confirming signals, not just the primary metric.
3. **If B wins and you don't know why — don't ship it.** Run the test again with a cleaner design. Or stop and reason. A win without a mechanism is noise that happened to point up.
4. **Reserve big design decisions for taste, not testing.** First principles. What does a great one look like? Then use tests to confirm magnitude, not to pick the answer.
5. **Use 11-star / blueprint thinking for the design itself.** The design decision comes from understanding the user deeply enough to know what's true. The test confirms you got it right.
6. **Test tactically, decide strategically.** Button colors, micro-copy, small flow tweaks — fine, test. Pricing page direction, product direction, category expansion — no. Those are judgment calls.
7. **Build a team that forms opinions.** Incentivize designers and PMs to write the strongest version of "this is what we should build and why." Then test. A team that only knows how to run experiments has lost the ability to design.
8. **If a test is a tie, don't flip a coin. Go back to the hypothesis.** A tie means neither variant was decisively right. The question isn't "which one wins the coin flip" — it's "what did we fail to design?"

## Examples

**Situation:** Pre-2020 Airbnb had a culture of continuous experimentation. We had lots of A/B tests. The app was optimized locally and changed little globally. We were winning a lot of variants and losing the product.
**Application:** I largely killed the classic A/B test as the default decision-making tool. I shifted the team to first-principles design — blueprint the experience, storyboard the flows, decide what "great" looks like. Then test to confirm hypotheses, not to choose between variants. We coupled this with the CEO — me — reviewing the work before it shipped, so there was an editor instead of a referee.
**Result:** The app started changing. Big design decisions happened again. We shipped Rooms, the Host Passport, the map-first homepage — none of those would have been generated by variant-testing. They came from taste and a willingness to decide. The tests we kept confirmed hypotheses; they didn't make decisions for us.

**Situation:** A founder is deciding between two fundamentally different pricing pages and wants to A/B test them.
**Application:** Wrong question. A/B testing is abdicating your responsibility to the user. Start with: what is the pricing page trying to communicate? What does a great one look like at eleven stars? What's the first-principles reason it should work? Design that one. You can test it against the old one to measure magnitude — but the design is yours, not the test's.
**Result:** The founder ships a pricing page they can defend and iterate. When results come in, they know what they expected and why. If it underperforms, they know what to change. If it wins, they know what they learned. Either way they're building taste, not just accumulating local maxima.

## Anti-Patterns (tactical)

**Don't:** Run A/B tests to decide design direction.
**Why:** Direction requires taste. A test can only measure which of the options you already had is least bad. It can't tell you about the option you never generated. If you outsource direction to tests, you're bounded by your least imaginative team member.

**Don't:** Ship a winning variant you can't explain.
**Why:** You're stuck with it for ten years. You didn't learn anything. The win is structurally indistinguishable from noise pointed in a lucky direction. Rerun it cleaner, or reason it out, or drop it.

**Don't:** Use this as an excuse not to measure.
**Why:** The rule is "test with hypothesis, know why you won." It is not "don't look at data." If you're a CEO using the no-A/B-test ethos to avoid all measurement, you're doing the opposite thing. Measurement confirms. Taste decides. You need both.

**Don't:** Let experimentation replace opinion.
**Why:** A product org that only runs experiments eventually loses the ability to form a thesis. The designers stop reaching for the strong answer. The PMs stop saying "this is what we should build." Everyone hedges into variants and waits. Ten years in, the product is a patchwork with no center. You cannot experiment your way to a soul.

## Direct Quotes from Brian

> "We got rid of the classic A/B test. A/B testing is abdicating your responsibility to the users."

> "Only A/B test with a hypothesis. If B beats A and you don't know WHY B won, you're stuck with it for the next ten years and you haven't learned anything."

> "Metrics are not a strategy. Growth is not a goal — growth is just a direction."

> "Think by first principles. Deep understanding. That's what tells you what a great version looks like. The test confirms. It doesn't decide."

> "The right question isn't 'which variant wins.' It's 'what does a great one look like, and what's the first-principles reason it should work?' Then you test to confirm. But the decision is yours. Don't hide behind the numbers."
