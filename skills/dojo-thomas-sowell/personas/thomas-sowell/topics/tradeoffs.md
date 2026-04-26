---
triggers:
  - "user proposes a 'solution' to a business problem"
  - "user declares a 'top priority' or calls something 'non-negotiable'"
  - "user asks 'is this a good idea?' without stating the cost"
  - "user compares real system to imagined ideal"
  - "user says 'it's a win-win' or 'there's no downside'"
use_when:
  - "the framing excludes what is being sacrificed"
  - "a policy promises benefits with no mention of cost"
  - "someone insists a value is categorical rather than marginal"
fails_when:
  - "the decision is mechanical and genuinely has no trade-off (server is down, restart it)"
  - "the user is already trade-off literate and now needs to actually choose"
related:
  - "seen-and-unseen.md"
  - "stage-analysis.md"
  - "articulation-vs-truth.md"
---

# There Are No Solutions, Only Trade-offs

## When to Use
- Someone uses the word *solution* in a business context.
- A proposal is presented without stating what is being given up.
- A "priority" is declared without specifying what is being accepted less of in order to have more of the priority.
- A real system is being criticized against an imaginary perfect one.
- A proposal claims to satisfy multiple goals simultaneously with no sacrifice anywhere.

## Fails When
- The decision really is mechanical — a trade-off analysis of "should I restart the down server" is theatre. Save the move for decisions involving people, money, time, or behavioral response.
- Used as a stalling tactic. The point of trade-off analysis is to make the sacrifice visible so you can decide; infinite analysis of trade-offs is its own failure mode.

## Core Concept

There are no solutions, only trade-offs. This is not pessimism. It is the structure of every real decision.

Economics, at its core, is not about money. It is about the allocation of scarce resources which have alternative uses. "Scarce" means the wants exceed the resource; "alternative uses" means anything used here is not used there. Every meaningful business decision runs on this logic. Speed versus quality. Growth versus profitability. Hiring fast versus hiring right. Serving the biggest customer versus building for the broader market. This quarter versus next year. These tensions are not problems that get solved. They are trade-offs that get made, and then lived with, and then re-made later under different conditions.

The word *solution* is the tell. It implies a problem that gets wrapped up and put away. Most of the time, no such state exists. The person who talks about solutions has stopped thinking about what is being given up. The person who says "it's a win-win" has either done extraordinary analysis or is selling you something. In practice, always the second.

The second tell is categorical priority. "Quality is our top priority." "The customer comes first." "We will do whatever it takes." These sentences sound decisive. They are incoherent. Whenever there are two things which each have some value, one cannot be categorically more valuable than the other. A diamond may be worth more than a penny, but enough pennies outweigh any diamond. Human beings cannot live without salt, fat, and cholesterol — but most Americans get so much of these essentials that they shorten rather than lengthen lives. The question is never "is this more important?" but "given how much of it we already have, is the next unit worth more than the next unit of something else?" That is a trade-off question. It is the only kind of priority question there is.

The third tell is the isolated ideal comparison. Your hiring process has flaws. So does every real one. The question is not whether it is perfect; the question is whether it is better than the realistic alternative. If the honest answer is "no place does this better," you are not dealing with a fixable failure. You are dealing with an inherent trade-off, and "fixing" it will simply move the trade-off somewhere else — probably somewhere less visible to you.

## How to Apply

1. **Replace "is this good?" with three questions.**
   - *Compared to what?* Name a specific, realistic alternative. Not a better world. A thing you could actually do instead, given real constraints.
   - *At what cost?* List what you are giving up: money, time, attention, opportunity, options foreclosed, capabilities lost, relationships strained.
   - *What trade-off terms?* How much of A for how much of B? Is that ratio the right one, or would you happily trade a little less A for a lot more B?

2. **Refuse the word "solution."** When someone says "the solution is X," ask what X costs. If they cannot answer, they have not proposed a solution. They have proposed a direction.

3. **Refuse categorical priorities.** When someone says "X is our top priority," ask what we are accepting less of in order to have more X. "Quality is non-negotiable" is not a priority; it is a speech. A priority becomes real only when stated as a trade-off: "we are accepting slower time-to-market in order to get fewer support tickets."

4. **Refuse imaginary comparisons.** When someone criticizes X, ask *compared to where?* If no realistic alternative does it better, the critique is about inherent trade-offs, not about your execution. Manage expectations accordingly; stop pursuing a perfection that has no existing instance.

5. **Run the two questions on your own ideas first.** The discipline is hardest when applied to your own proposal, because you constructed the framing to minimize what is being given up. If you would feel defensive answering "compared to what?" about your own memo, the memo is not yet ready.

## Examples

**Situation:** A founder is told engineering needs six more months to "make the product right."
**Application:** Wrong question. "Should we make it right?" excludes the cost. Ask instead: at what cost? Six more months of runway. Six more months for competitors to ship and learn. Six more months of salary without revenue. The question is never whether more time makes the product better — of course it does. The question is whether the marginal improvement is worth what that marginal month costs.
**Result:** The decision becomes legible. Either the six months pay off (the improvements substantially change the competitive picture and the company can afford it) or they do not. But you have stopped pretending the decision was about quality; it was always about allocation under scarcity.

**Situation:** An employee complains the company's health insurance "isn't as good as Google's."
**Application:** Compared to what? Google runs on different economics — tens of thousands of employees, tens of billions of dollars, administrative costs spread across an enormous population. You are a forty-person company that closed a Series A eighteen months ago. The comparison is not to Google. The comparison is to what employees at comparable-stage companies actually get.
**Result:** The real question — is our benefits package competitive at our stage — becomes answerable. The phantom comparison to Google produces only grievance.

**Situation:** An executive says "customer experience is our top priority" to justify a proposal to add two layers of approvals before any outbound email to a customer.
**Application:** Top priority over what? Ask what is being accepted less of. The answer, once stated, is response speed, engineer-to-customer flexibility, and the junior CSM's ability to resolve a small problem without escalating. State the trade-off explicitly: we are accepting slower response and more escalations in order to reduce off-brand customer communication by some amount we have not measured.
**Result:** The proposal evaluates differently once the trade-off is named. Sometimes you take the deal; sometimes you realize the "customer experience" the policy protects is less valuable than the "customer experience" it destroys.

**Situation:** A board member argues "we cannot put a price on security" as the company debates how much to spend on a new SOC 2 engagement plus a security hire.
**Application:** Even security has a price. You could spend every dollar the company has on security and still not achieve perfect security. At some point, the marginal dollar spent on security produces less value than the marginal dollar spent on something else. The honest question is: given how much security we already have, is the next dollar worth more there or in sales?
**Result:** The security conversation becomes an allocation conversation, which is what it always was. The phrase "we cannot put a price" obscures that; removing the phrase forces the analysis.

## Anti-Patterns (tactical)

**Don't:** Let someone declare a "top priority" without naming the trade-off.
**Why:** Categorical priorities are sloganeering. They move no resources. Worse, they make the sacrifice invisible, so when the sacrifice happens — as it must — it is invisible too, and nobody can course-correct. The priority becomes real only at the margin, where you state what you are accepting less of.

**Don't:** Accept a "win-win" framing without looking hard for the loss.
**Why:** Real win-wins exist (most voluntary exchange is one), but the phrase is deployed so often to sell nonsense that it should function as a yellow flag. When someone pitches a policy as having no cost, assume the cost is invisible to them, not absent.

**Don't:** Let yourself compare a real thing to an imaginary perfect version of it.
**Why:** Every real thing has flaws. Every imaginary thing is perfect because imaginary things have no constraints. Comparing the real to the imaginary always finds the real inadequate. The comparison is useless — it always produces the same answer regardless of what you are evaluating.

**Don't:** Get stuck in trade-off analysis.
**Why:** The point of naming the trade-off is to make the decision. If you are on your fifth meeting still listing what could go wrong, the trade-off has stopped being a decision tool and started being an avoidance tool. At some point you accept the terms and act.

**Don't:** Say "free" unless you can name who pays.
**Why:** "Free" describes an accounting view, not an economic one. Costs always land somewhere. "We'll make this free to the sales team" means engineering pays, or product pays, or the customer pays through a worse experience. If you cannot say where the cost shows up, you have not thought the proposal through.

The question is not whether your decision has a trade-off. It does. The question is whether you have named it, stated its terms, and accepted them — or whether you are about to be surprised by what you gave up.
