---
triggers:
  - "user presents a policy / metric / initiative and stops at the intended effect"
  - "user says 'this will motivate X behavior'"
  - "user asks 'will this work?'"
  - "user is about to make an exception"
  - "user is about to roll out a new commission / bonus / metric / rule"
use_when:
  - "the proposal has behavioral consequences and multiple rounds of response"
  - "people will adapt to the new incentive before you can evaluate the stage-one effect"
  - "a decision establishes precedent"
fails_when:
  - "decision is truly one-shot with no behavioral response (a database schema choice)"
  - "stage analysis has already been done and now you need to commit"
related:
  - "seen-and-unseen.md"
  - "incentives-not-intentions.md"
  - "precedent-trap.md"
---

# Stage Analysis — "And Then What Will Happen?"

## When to Use
- Any compensation, metric, or incentive change. People will respond; the response changes the system.
- Any policy with a behavioral response. Hiring processes, expense policies, approval workflows, pricing changes.
- Any "one-time" exception or discount. Exceptions set precedents; precedents become the new baseline.
- Any forecast or plan that describes stage one only ("salespeople will sell more"). If the plan is written in stage-one language, its stage-three consequences haven't been considered.

## Fails When
- The decision is truly one-shot with no behavioral feedback (a closed-loop technical choice). Save stage analysis for decisions where people adapt.
- Used to generate infinite worry. At some point you stop asking "and then what" and commit.

## Core Concept

Most thinking stops at stage one. That is the error that accounts for most expensive corporate mistakes.

The discipline comes from economics but is not confined to it. When Professor Smithies at Harvard asked the undergraduate Sowell what policy he favored, Sowell answered with enthusiasm — the policy would produce a visible, desirable result. *"And then what will happen?"* Smithies asked. Sowell thought about it and began to trace the consequences. *"And what will happen after that?"* By the third iteration Sowell could see that the policy's stage-three effects were disastrous — much worse than the initial situation the policy was meant to improve.

Simple exercise. Goes further than most executive discussions about policy, because most discussions stop at stage one.

Stage one is the immediate, visible effect. The thing you can put in the announcement. Stage two is how the affected parties adapt to the new conditions. Stage three is what those adaptations cause. Stage four is the long-run equilibrium, where the system has fully absorbed the change. Stage one answers are always the most flattering; stage four answers are where the actual outcome lives.

The reason stage-one thinking persists is that stage-one effects are visible, immediate, and attributable. You can point to them. You can put them in the board deck. You can claim credit. By the time stage three or four arrives, the person who made the original decision has usually moved on, the causal chain is murky, and whoever inherits the problem cannot reliably trace it back to the original policy. Politicians and executives get promoted on stage one; their successors deal with stage three.

The classical business example: the founder who measures engineers on lines of code shipped. Stage one — engineers write more code. The metric rises. The founder is pleased. Stage two — engineers write verbose code to hit the metric. Code quality declines. Bugs increase. Stage three — the team spends increasing time fixing bugs rather than building features. Net velocity drops. Stage four — the founder, seeing declining velocity, increases pressure on the lines-of-code metric, believing more code will solve the problem. The spiral continues. At no point were the engineers failing. They were succeeding at the metric. The metric was failing at measuring what the founder wanted. But the founder's intentions were invisible to the system; only the metric was real.

## How to Apply

1. **Write the stages down.** Not in your head. On paper. Stage one, stage two, stage three, stage four. For each stage, write what the visible effect is and which actors are adapting to which incentive. This is the whole discipline — most people claim to trace consequences and then don't.

2. **Stop at the stage where the chain terminates or stabilizes.** Sometimes that's stage two (the adaptation is obvious and fully absorbed). Sometimes it's stage five (there are multiple rounds of adaptation as different actors update). Don't stop at stage one because stage one is pleasant; don't continue past stabilization because continuing is its own avoidance.

3. **For each stage, name the specific actor and what they do differently.** "Salespeople will change behavior" is not stage analysis. "The AE now discounts 15% earlier in the cycle because her quota compresses mid-quarter, which shortens sales cycles but trains customers to wait for discounts, which reduces list-price close rates" — that is stage analysis.

4. **Look for the reversal.** In many cases, the stage-four effect is the opposite of the stage-one intention. The commission structure meant to improve retention reduces retention. The approval policy meant to prevent mistakes prevents action. The content-marketing playbook that worked when it was rare stops working when everyone copies it (the composition fallacy). When you find the reversal, you have found the real output of the decision.

5. **Ask whether the decision-maker will still own the consequences when they arrive.** If stage three shows up after the quarter, the VP who proposed the change will be measured on stage one and lauded for it. This is not an argument against the change; it is an argument for tying the decision-maker's comp to the stage-three outcome, or for someone else to do the stage analysis on his behalf.

6. **Integrate with precedent.** Stage analysis of a one-time exception always includes the repeated game. "We give this one customer a 20% discount" has a stage-two of "other customers hear and expect equivalence" and a stage-three of "your list price means nothing." The isolated analysis is not sufficient; the stage analysis includes the precedent it establishes.

## Examples

**Situation:** A VP Sales proposes a new quarterly-bookings commission structure with aggressive accelerators.
**Application:**
- Stage one: Salespeople close more deals this quarter. Bookings rise.
- Stage two: Discounting increases — heavy concessions on price, terms, and scope — because a booking is a booking and accelerators kick in.
- Stage three: Customers trained to wait for end-of-quarter discounts. List price erodes. Poor-fit customers accumulate because the team optimized for close rate, not retention.
- Stage four: Churn rises. Customer acquisition cost increases to replace lost revenue. Pricing power across the market has been spent to fund stage-one. The VP has been promoted.
**Result:** Stage one looked brilliant. Stage four is a worse business than you started with. The correct response is not to refuse the plan but to change the metric — ACV net of clawbacks, or LTV proxies — so that stage two's adaptation points toward the behavior you actually want.

**Situation:** A founder announces a policy: "any decision over $50K requires the CEO's approval."
**Application:**
- Stage one: Costly mistakes are prevented because the CEO has visibility. Intended effect.
- Stage two: Teams avoid requesting approval. Entrepreneurial employees experience the policy as distrust and begin leaving. Remaining employees learn to define situations as "just under" the threshold.
- Stage three: Decision speed collapses. Opportunities pass. The employees who remain are the ones least uncomfortable with bureaucratic friction, which is to say the ones you least want running new initiatives.
- Stage four: The next mistake happens anyway, because the CEO approves it — the CEO doesn't have the specific knowledge either, and the policy gave the CEO responsibility without giving him information.
**Result:** The policy optimized for stage-one visibility (fewer mistakes) and produced stage-four disaster (fewer capable people and equally many mistakes). Rewrite around better feedback, not more approvals.

**Situation:** A city imposes rent control to "keep housing affordable."
**Application:**
- Stage one: Current tenants pay below-market rent. Visible beneficiary.
- Stage two: Developers cannot earn the return required to fund new buildings. Maintenance drops. Landlords convert units to condos or exit the market.
- Stage three: Housing supply contracts. People who would have moved to the city can't find apartments. Young people looking for work can't come.
- Stage four: The housing market becomes divided — the long-tenured tenants holding cheap rent, and everyone else paying extreme premiums for the limited remaining supply. Homelessness rises in some cases, producing the opposite of the stated intent.
**Result:** Rent control is the textbook example because it illustrates the full reversal: the policy explicitly named for affordability produced, over stages, one of the most severe forms of housing unaffordability.

**Situation:** A founder approves a one-off work-from-home exception for one employee with a good reason.
**Application:**
- Stage one: The employee is grateful and more productive. Intended effect.
- Stage two: Another employee with an equally valid reason asks for the same. Then a third.
- Stage three: The office is empty on Fridays. Projects requiring collaboration stall. New hires wonder where everyone is.
- Stage four: The informal new policy is "Fridays are remote." The founder never decided that; it accreted through stage-two precedent-setting.
**Result:** Each individual decision was defensible. The sequence produced an outcome nobody chose. The fix is not to refuse the first exception but to ask, in advance, *what precedent does this establish?* and to make that question part of the first decision.

## Anti-Patterns (tactical)

**Don't:** Stop at stage one because the stage-one answer is pleasant.
**Why:** Pleasant stage-one answers are precisely when you must keep going. Unpleasant stage-one answers tend to prompt stage-two analysis naturally because you are looking for reasons to be pleased. Pleasant ones do not.

**Don't:** Perform stage analysis as narrative rather than as specific prediction.
**Why:** "There will be second-order effects" is not stage analysis; it is handwaving. You have to name the actor, the new incentive, the new behavior, and the consequence. If you cannot, you have not actually done the analysis.

**Don't:** Continue past the stage where the system stabilizes.
**Why:** Beyond stabilization, you are no longer doing analysis; you are speculating. The chain either terminates, loops, or stabilizes. Stop when it does.

**Don't:** Treat the stage-one measurement as evaluation.
**Why:** Most dashboards measure stage one. Quarterly bookings, MAU, tickets closed, code shipped, pipeline added. These are stage-one signals. If the only measurement of the new policy is a stage-one metric, the policy will keep getting judged favorably right up until stage four delivers the reversal. Build at least one measurement of stage three in advance.

**Don't:** Let stage analysis become paralysis.
**Why:** You will not trace every possible chain to completion; you cannot. The discipline is to map the most important stages, decide whether the net effect is what you want, and act. If you are on your fifth round of "but what about stage five scenario C2," you have stopped analyzing and started avoiding.

Most thinking stops at stage one. Stopping there is the most common avoidable error in corporate decision-making. The founder who routinely asks "and then what will happen?" — and keeps asking until the chain terminates — will make better decisions not because of superior intelligence but because of superior questions.
