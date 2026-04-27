---
triggers:
  - "user proposes a new product or feature"
  - "user describes an initiative starting from company capabilities"
  - "user asks how to decide what to build"
  - "user asks about product development process"
use_when:
  - "any new product, feature, or initiative being considered"
  - "team is building something and nobody can cleanly state the customer benefit"
  - "deciding whether a project is worth building at all"
fails_when:
  - "treated as a marketing exercise after the build decision is already made — the point is to kill bad ideas before resources get committed"
  - "used for incremental improvements to an existing product with a well-understood customer — the overhead isn't worth it"
  - "written to sell the idea rather than stress-test it"
related:
  - "six-pager.md"
  - "start-with-the-magic.md"
  - "customer-obsession.md"
  - "mechanisms-over-good-intentions.md"
---

# Working Backwards (PR-FAQ)

## When to Use
- Any new product, feature, or major initiative being considered.
- When a team is building something and nobody can cleanly state in one sentence who the customer is and what changes for them.
- When leadership needs to decide whether a project is worth committing engineering resources to.
- When a project has been running for months and the team has drifted away from the original customer benefit.

## Fails When
- Written after the decision to build is already made — then it's theatre, not invention. The point is to kill ideas before resources get committed.
- Written to sell rather than to stress-test. If the PR-FAQ cannot survive its own FAQ, the product cannot survive its own launch.
- Applied to minor incremental improvements where the customer benefit is obvious. The process is heavy; reserve it for initiatives where the answer isn't already clear.
- The author works backwards from existing company competencies and calls it customer-backwards. The giveaway: the press release reads like a capability announcement, not a customer story.

## Core Concept

Start with the customer and work backwards to the technology. Do not start with what we can build — start with what the customer will love, and work backwards to the engineering. In almost every company, the default is the opposite: here are the skills we have, here is the infrastructure we own, what can we sell with it? That is skills-forward thinking, and it produces Me-Too products that have to fight for attention because no customer was waiting for them. Working backwards forces us to exercise new muscles, never mind how uncomfortable and awkward-feeling those first steps might be. Amazon had no hardware expertise before Kindle. No infrastructure-as-a-service expertise before AWS. Both were built by working backwards from a customer need we could clearly articulate.

The principal tool is the PR-FAQ: a one-page mock press release and a five-page FAQ, written as if the product were already launched. The press release is the customer's story. The FAQ is every hard question we know we'll face — from the press, from customers, and from ourselves internally about economics, dependencies, and feasibility. We write them before we write any code. Before we staff the team. Before we commit to anything. The single most important thing to understand about the PR-FAQ is this: **most PR-FAQs don't get approved, and that's a feature, not a bug.** Spending a month of thinking up front to kill a bad idea costs the company a month. Spending a year of engineering time to kill the same bad idea costs a year of engineering time plus the opportunity cost of what that team could have been building instead.

The press release has a fixed structure because the structure forces clarity. A heading the customer would recognize. A sub-heading that says in one sentence who benefits and how. A problem paragraph from the customer's point of view — their pain, in their language. A solution paragraph showing how the product removes the pain. A quote from a company spokesperson, a quote from a hypothetical customer. A "getting started" paragraph. If the press release does not describe a product that is meaningfully better — faster, easier, cheaper — than what already exists, or a stepwise change in customer experience, it isn't worth building. Put the draft down and go work on something else.

## How to Apply

1. **Write the one-page press release first.** Before anything else. Heading, sub-heading, problem paragraph, solution paragraph, company quote, customer quote, getting started. One page. 11-point type. No appendices.

2. **Read your own draft cold.** If you stop reading after the first sentence, you should still have the gist. If the sub-heading doesn't tell you in one line who this helps and how, the concept is fuzzy. Rewrite.

3. **Write the five-page FAQ.** Split into External FAQ (the questions a customer or journalist would ask) and Internal FAQ (TAM, economics and P&L assumptions, dependencies, build-vs-buy, feasibility risks). Do not dodge the hard questions. If you cannot answer them here, you cannot answer them in market.

4. **Review in a one-hour meeting.** Distribute at the start of the meeting. Silent read for 18–20 minutes. Then line-by-line feedback. Senior people speak last. Do not let the author defend the document — let the document defend itself.

5. **Iterate.** Expect ten or more drafts and five or more leadership reviews before a serious PR-FAQ is ready for a build decision. A great PR-FAQ takes a week or more of drafting, not an afternoon.

6. **Be willing to kill it.** The right ratio for a healthy organization is that most PR-FAQs get killed. If everything gets approved, you're not stress-testing hard enough, or your authors are only bringing safe ideas. Both are bad.

## Examples

**Situation:** Kindle, 2004. Amazon's core business was selling physical books, and the e-book market was essentially nonexistent. There was no hardware expertise at Amazon. Engineers wanted to design around what Lab126 could realistically build.

**Application:** The team was forced to write the press release first. The headline described a device that let you carry every book ever written, download any book in under 60 seconds, and read on a screen that looked like paper in direct sunlight. The FAQ had to answer: does a person want this? At what price? How does it affect the physical book business we already own? That last question forced Amazon to commit to self-cannibalization — disrupt our own book business before someone else disrupts it for us.

**Result:** Kindle shipped. It cannibalized physical books, as expected. It also created a new category and locked in customers Amazon would never have reached through physical retail alone.

---

**Situation:** Fire Phone, 2014. The team wrote press releases. They iterated. Leadership approved the build.

**Application:** The press release emphasized the phone's differentiating features — Dynamic Perspective, Firefly. What the FAQ failed to answer convincingly was: why would a customer switch from iPhone or Android for this? What is the step-change in customer experience? The differentiation existed, but it was technology-led, not customer-led. The document looked like a customer story but was built backwards from what the engineers could do.

**Result:** Massive write-down. Product killed within a year. The postmortem was instructive: Working Backwards does not protect you from building the wrong thing if you let the document describe your capabilities in customer language rather than describing a real customer need. The process is necessary. It is not sufficient.

---

**Situation:** AWS (S3 and EC2), mid-2000s. No external customer was asking for utility-priced elastic compute. Amazon's own internal engineering team was, though — they were sick of waiting weeks for hardware.

**Application:** The team wrote the press release from the perspective of a developer at a startup who wanted to build a service without buying servers. The FAQ had to address pricing (Bezos unilaterally cut the proposed 15 cents/hour to 10 cents to avoid attracting competition), scale (the answer: scale to infinity, no planned downtime), and the key strategic question — why should a book retailer build cloud infrastructure? The answer came from Bezos: "Because we need it as well."

**Result:** AWS shipped. Two-year head start on cloud computing. The clarity of the press release — a developer at a startup doing alchemy with primitives — shaped the product architecture for a decade.

## Anti-Patterns (tactical)

**Don't:** Write the PR-FAQ after the team has already started building.
**Why:** The document stops being a kill-switch and becomes a justification. You'll rationalize every weakness because reversing course feels expensive. The entire value of the PR-FAQ is exercising the Type 2 decision to not build — which you can only exercise before you've built.

**Don't:** Describe the technology in the press release.
**Why:** Customers don't care about the technology; they care about what changes for them. A press release that says "uses advanced machine learning" is written for the engineering org, not the customer. If you can't articulate the benefit without naming the technology, you don't yet understand the benefit.

**Don't:** Answer the hard FAQ questions with "TBD" or "We'll figure it out."
**Why:** The FAQ exists to surface what you don't know. A TBD is a confession that the PR-FAQ is premature. Either answer the question or acknowledge the product isn't ready for a build decision.

**Don't:** Present the PR-FAQ as a slide deck.
**Why:** Bullet points hide fuzzy thinking. The narrative structure forces you to connect claims to reasons and to expose weak logic. If your thinking fits on slides, your thinking isn't deep enough to make the call.

**Don't:** Let the author defend the document during review.
**Why:** If the document needs verbal defense, it isn't ready. The document must stand on its own — because in market, there's no author in the room when the customer decides. Make the reviewers argue with the page, not the person.

**Don't:** Treat "most PR-FAQs get killed" as a problem to solve.
**Why:** The kill rate is the metric that proves the process is working. If it approaches zero, either the process has lost its teeth or the authors have stopped bringing real ideas. Both need correcting.
