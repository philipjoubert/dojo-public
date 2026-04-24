---
triggers:
  - "user proposes a policy, compensation plan, metric, or program"
  - "user wonders why a program isn't producing the intended behavior"
  - "user says 'our team should...' or 'people should just...'"
  - "user describes employees / customers / users 'not cooperating' with a policy"
  - "user evaluates a named program (Drug Prevention, Customer Success, Quality Assurance)"
use_when:
  - "the gap between stated goal and actual behavior needs explaining"
  - "you are about to design a structure that depends on compliance"
  - "blaming the people has replaced examining the structure"
fails_when:
  - "the issue really is a single bad actor, not a structural pattern"
  - "the user already fully owns the incentive frame and now needs to design"
related:
  - "incentive-design.md"
  - "stage-analysis.md"
  - "dispersed-knowledge.md"
---

# Incentives, Not Intentions

## When to Use
- Before approving any new compensation plan, metric, bonus, or career-ladder policy.
- When a program named for its intention is failing — "Customer Success" not producing renewals, "Quality Assurance" not producing quality, "Innovation Teams" not producing innovation.
- When you find yourself saying "they should know better" or "if people would just…"
- When the official explanation for a problem is character ("we have the wrong people") rather than structure.

## Fails When
- The problem really is a specific bad actor operating against an otherwise-sound structure. (Rare but real.)
- The user has already identified the incentive mismatch and now needs to design the fix — route to `incentive-design.md`.

## Core Concept

People respond to incentives, not to intentions. They respond to what is actually rewarded and penalized, not to what you hope they will do. When a structure rewards behavior X while the stated goal is behavior Y, you will get X. And the people producing X are not failing or misbehaving. They are behaving rationally in the environment you created.

This is not cynicism about human nature. It is respect for human rationality. The moment you stop blaming the people and start examining the structure, you can actually fix the problem.

Adam Smith saw this in the butcher. The baker does not bake bread because he cares about your hunger; he bakes bread because selling bread feeds his family. The intention is personal gain; the consequence is that you eat. A functional system does not depend on participants having noble intentions. It structures the situation so that self-interested behavior produces beneficial outcomes. Smith described his bakers' motivations as "mean rapacity." The system works anyway.

Now consider the reverse. A policy designed with the finest intentions can produce terrible consequences if its incentive structure points the wrong way. Rent control is named for what it hopes to achieve: controlled, affordable rent. But examine the incentives. Landlords cannot charge market rates. What behaviors does this reward? Not building new apartments. Not maintaining existing ones. Converting rentals to condos. Moving capital to uncontrolled cities. The name says "rent control." The mechanism produces housing shortage.

The same pattern inside companies: Quality Assurance programs measured on documentation compliance; sales teams with quarterly quotas who sell what closes this quarter regardless of fit; customer success teams measured on renewal rates who avoid the difficult conversations that would actually help the customer. In each case the intention is reasonable. In each case the incentive structure determines the outcome.

The canonical case is the Soviet factory manager. His factory received an order for mining equipment; the equipment required blue paint; he had only green. He kept the equipment in storage rather than ship it, because shipping equipment in the wrong color meant disobeying orders, and disobeying orders meant prison. To an outside observer, this looks insane: critical mining equipment sits unused because of paint color. But the manager is not irrational. He is responding rationally to his incentive structure. The system is irrational. Incentive audits produce exactly this kind of clarity: rational people, inside a structure that rewards the wrong thing, producing outcomes the designers never intended but should have predicted.

## How to Apply

1. **For any existing policy or metric, conduct an incentive audit.**
   - *What behavior is actually rewarded?* Not in speeches. Not in values statements. In practice — who gets promoted, who gets bonuses, who gets praise. Look at who got ahead and why.
   - *What behavior is actually penalized?* Not what is officially prohibited. What actually damages careers and reputations in this organization.
   - *What happens to someone who ignores the stated goal and simply follows the incentive?* If they prosper, the incentive dominates the intention.
   - *Who bears the cost of the current structure? Who captures the benefit?* Costs always land somewhere. Benefits flow somewhere.

2. **Before implementing anything new, assume your employees are rational, intelligent, self-interested adults, and ask what they will do.** Not what you hope they will do. What a smart person would do, given the incentive you are about to publish. If that behavior is not the behavior you want, the design is wrong. Fix the design before shipping the memo.

3. **Trace the incentive through stages.** (See `stage-analysis.md`.) Every incentive change produces behavioral adaptation, which produces new conditions, which produces further adaptation. Stage one is how the metric first moves. Stage two is how people optimize against it. Stage three is what gets sacrificed to hit the optimized version. Stage four is the equilibrium — usually the opposite of the stated intention.

4. **Name the program by its mechanism, not its intention.** "Drug Prevention Program" tells you the hope. What you need to know is the mechanism — what, specifically, does the program do, and what behavior does it reward? A "Customer Success Team" measured on gross retention rewards ease-of-relationship, not customer outcome. A "Quality Assurance" function measured on defects found rewards finding defects, not preventing them. Rename programs after mechanisms and the analysis becomes much clearer.

5. **When a program fails, check the structure before the people.** The first question when behavior disappoints you is not "who should I fire?" It is "what is my structure rewarding?" Put decent people in a badly designed system and you get bad behavior. Put difficult people in a well-designed system and you get decent behavior. The structure does most of the work.

6. **Watch for the rhetorical shield of good intentions.** When a failing program is defended with "but we are trying to help," the conversation has gone wrong. Intentions are inputs. Consequences are outputs. Outputs are what matter. Good intentions do not redeem bad mechanisms; they only make the bad mechanism harder to criticize.

## Examples

**Situation:** A startup rewards engineers on "lines of code shipped per week."
**Application:**
- Incentive audit: the structure rewards volume of code. A rational engineer will write verbose code, resist refactoring (which removes lines), and produce the same feature with more lines rather than fewer.
- What a rational actor does: exactly what you are seeing. Bug rates rise. Review time rises. Velocity drops.
- Structure, not people: the engineers are not failing. The metric is. Firing them changes nothing.
**Result:** Replace the metric. Measure something closer to what you actually want — features shipped, customer problems solved, time-to-fix, or at minimum a composite that penalizes bug introduction. Or, better, stop trying to mechanistically measure engineering and trust qualitative judgment.

**Situation:** A Customer Success team measured on gross renewal rate is "failing to drive customer value."
**Application:**
- Incentive audit: the team is rewarded for keeping customers signed. Actions that keep customers signed include relationship-building, avoiding friction, and soft-pedaling bad news. Actions that drive customer value include hard conversations, implementation discipline, and sometimes telling the customer a truth they don't want to hear.
- Rational behavior: the team optimizes for the metric. The hard conversation risks short-term friction that could jeopardize renewal; it is systematically avoided.
**Result:** Either change the metric (to net retention with expansion, or to customer-outcome measures that lag), or accept the current behavior as a consequence of the current design. Stop blaming the team. Measurement is what you are actually asking for.

**Situation:** A sales team with quarterly quotas is "not cooperating" with the customer success team.
**Application:**
- Incentive audit: sales closes deals in the quarter; they are not measured on retention. Customer success inherits whatever sales closes.
- Rational behavior: sales closes whoever will sign. Fit is not their problem; their quota is.
**Result:** This is a structural mismatch. The fix is to add a retention-quality component to sales comp (clawback for early churn, multi-year ACV rather than first-year bookings, or split credit with CS on net retention). The fix is not "better alignment meetings."

**Situation:** A "no approval needed under $50K" policy produces reckless spending.
**Application:**
- Incentive audit: below the threshold, there is no friction, no visibility, and no accountability. Above the threshold, there is extensive review.
- Rational behavior: any motivated employee spends $49,999.
**Result:** The policy optimized for preventing large visible mistakes and created a reliable mechanism for many medium invisible ones. Fix either the incentive (tie spending quality to team budget, so dispersed small overspend compounds into a team cost someone owns) or the structure (remove the cliff; require accountability on any spending, proportional to size).

## Anti-Patterns (tactical)

**Don't:** Judge programs by their names.
**Why:** Names describe what the designer hoped; they tell you nothing about what the structure rewards. "Drug Prevention Program" is evaluated by whether drug use declines, not by whether the program exists. "Innovation Lab" is evaluated by whether innovation reaches customers, not by how innovative the lab's walls look.

**Don't:** Use "values statements" or "culture" as a substitute for incentive design.
**Why:** Values tell people what is officially preferred. Incentives tell people what is actually rewarded. When they conflict, incentives win. A company whose values say "long-term thinking" while rewarding quarterly targets will produce short-term thinking; no amount of reminding people about the values will change this.

**Don't:** Blame the people when the structure is producing predictable results.
**Why:** "We have the wrong people" is rarely true when the bad behavior is widespread. Widespread rational behavior is evidence of a structural incentive, not of character failure. Replace the people and the new people will produce the same behavior, because the structure is unchanged.

**Don't:** Assume your people are not smart enough to game your metric.
**Why:** Your people are smart enough. They will find the optimal point against your metric within weeks of its introduction. Assume the gaming will happen; design the metric so that the gaming produces the behavior you want.

**Don't:** Let the rhetorical shield of good intentions stop criticism.
**Why:** "But we are trying to help" is the most common defense of failing programs. Intentions are not outputs. A program with good intentions that produces bad outcomes has still produced bad outcomes. The honest evaluation is on outcomes.

When a policy isn't working, the first question should be: are people responding rationally to the incentives I created? If yes, then blaming them is pointless. They are doing exactly what the structure rewards. Fix the structure.
