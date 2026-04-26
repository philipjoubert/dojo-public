---
triggers:
  - "user proposes a decision with obvious visible benefits"
  - "user cites a policy's success based on who it helped"
  - "user describes a cut, savings, or cost reduction"
  - "user analyzes a competitor's move that produced visible results"
  - "user says a change will 'only affect' a specific group"
use_when:
  - "the benefits are concentrated and visible; the costs may be dispersed and invisible"
  - "the decision-maker cannot name who pays"
  - "a policy is being evaluated on its announced beneficiaries"
fails_when:
  - "the decision is truly local and has no spillover (a UX copy change)"
  - "the unseen has already been thoroughly mapped"
related:
  - "stage-analysis.md"
  - "tradeoffs.md"
  - "prices-as-information.md"
---

# The Seen and the Unseen

## When to Use
- Any decision with clear beneficiaries. The beneficiaries will advocate loudly; their advocacy is not evidence of net benefit.
- Budget cuts, headcount changes, and cost reductions — the savings are visible; the downstream costs are not.
- Competitor moves that appear to have worked — you may be looking at stage one of a play that collapses in stage three.
- Any claim that "this only affects X." No policy has ever had only its intended effects.
- Internal subsidies, free tiers, and "eliminating friction" — the friction was usually doing work; removing it produces invisible downstream cost.

## Fails When
- Used as a permanent veto. Every decision has unseen effects; the goal is to map the important ones and proceed, not to refuse action because consequences exist.
- Applied to genuinely bounded decisions. Not every meeting requires a page of counterfactuals.

## Core Concept

Every decision has two kinds of effects. The seen effects are immediate, obvious, and concentrated. They happen to identifiable people who know they are being affected. The unseen effects are delayed, diffuse, and dispersed. They happen to people who often do not know that any connection exists between what happened to them and the decision that caused it.

The seen is politically powerful. The unseen is usually larger.

Bastiat's canonical example still illustrates it. The politician points to the factory saved by the tariff. The workers cheer. The cameras roll. Here is a visible benefit, an obvious win. What the politician does not point to — what the cameras never show — are the factories that were never built, because the tariff raised input costs for every business that used the protected good. Some of those businesses could not afford to expand. Some could not afford to hire. Some never got started. The benefit was concentrated and seen. The cost was dispersed and unseen. And the cost, counted across the whole economy, was greater than the benefit.

The same asymmetry runs through business. The big enterprise customer provides visible revenue; the roadmap distortion they impose is invisible until it shows up, eighteen months later, as smaller customers churning for features you could not build. The $500,000 saved by cutting the engineering budget is visible on the cash-flow statement; the six months of slowed velocity, the departed senior engineers, and the harder fundraise are invisible until they compound. The new sales commission structure produces visible quota attainment in stage one; the customer-fit erosion, the renewal losses, and the pricing-power collapse arrive later and are diffuse enough that no single person connects them to the structure.

Dispersed cost blindness is the specific form of this error. A policy that costs one person $10,000 produces outrage; a policy that costs 10,000 people $1 each produces silence. The total cost is the same. The dispersed cost is invisible because no individual bears enough of it to notice.

This asymmetry explains much of what goes wrong in organizations. The people who benefit are loud. The people who pay may never connect their situation to the decision. The beneficiaries advocate, the victims don't even know to complain, and the policy that looked like a win in the boardroom is steadily eating the company.

## How to Apply

1. **Before finalizing any significant decision, write a one-page inventory of the unseen.** Not a sentence. A page. Force yourself to fill it. Specifically:
   - Who benefits visibly? (Easy. They will be in the proposal.)
   - Who pays invisibly? (Hard. Requires imagination.)
   - What will *not happen* because of this decision? (The jobs not created, the product not built, the customer who never called, the innovation that didn't occur because resources went elsewhere.)
   - Who is not at this table but will be affected? (The absent stakeholders. Make them present in your thinking.)

2. **Map the dispersed costs explicitly.** If the cost lands in many small pieces across many people, it is likely to be invisible to everyone who bears a piece of it — and possibly larger, in total, than any concentrated benefit. Do the arithmetic. How many people, how much each, how often.

3. **Ask: what is the decision's equivalent of the factories never built?** In every domain, there is a "factories never built" counterpart — the version of the opportunity cost that is particularly hard to see because it is an absence rather than a presence. A hire you will not attract because your comp is lower after the budget cut. A deal that will not close because the sales team is waiting on features you defunded. Name the absence.

4. **Be suspicious of "this only affects X."** Policies have no clean boundaries. The commission structure change affects product roadmap through the customers the sales team now prioritizes. The remote-work exception for one team affects hiring signals across the company. The enterprise discount affects pricing power across every future negotiation.

5. **When evaluating past decisions, ask whether the declared success was stage-one success.** Many "successful" initiatives declared victory at stage one — the visible immediate benefit — and were later revealed, when the unseen arrived, to be net-negative. You learn more from asking "what did this initiative destroy that I cannot see?" than from reading the announcement memo.

## Examples

**Situation:** A founder cuts the engineering budget by $500K to extend runway by six months.
**Application:** The seen: bank balance lasts six more months. The unseen: roadmap slows, features ship late, competitors gain ground, senior engineers leave for better-resourced companies, morale softens, the remaining engineers spend more time on firefighting, the next fundraise becomes harder because progress has slowed, the hiring bar effectively drops because candidates have options and you don't. Name these specifically. Now ask: is the six months of extended runway worth the compounding engineering cost? Sometimes yes. Sometimes very obviously no.
**Result:** The decision is no longer "do we extend runway" (yes, obviously). It is "what is the combined cost of extending it this way versus alternatives," which is a different and more honest question.

**Situation:** A startup lands a huge enterprise customer that immediately becomes 40% of revenue.
**Application:** Seen: revenue, validation, board celebration. Unseen: the customization demands the customer imposes; the engineering time that now diverts from the core product; the roadmap for the broader market that now stalls; the smaller customers who churn because features they needed are not being built; the eventual contract renewal in which the customer's leverage — which has been growing invisibly — is fully cashed in. Name the unseen before signing.
**Result:** You may still sign. But you will sign with structural defenses — caps on customization, commitments to core-product velocity, explicit carve-outs — that would not have existed if only the seen had been considered.

**Situation:** A founder raises taxes on senior employees (a bonus clawback) to fund a broader equity pool.
**Application:** Seen: the broader equity pool, which can be communicated to the whole company. Unseen: the specific senior employees whose incentives just shifted, and who will quietly update their behavior — some will leave, some will stop advocating for the company in hiring conversations, some will simply deliver less. None of them will say this at the all-hands. The cost is real and dispersed and lives in behavior changes you will not notice until months later.
**Result:** Either do it with eyes open (naming which seniors you are willing to lose some output from) or structure the change to preserve their incentives. What you cannot do is pretend the cost does not exist.

**Situation:** A city raises taxes on corporations. The mayor announces new programs funded by the increase.
**Application:** Seen: the revenue, the programs. Unseen: a company that was considering relocating to the city chooses another city instead. They never announced their consideration; their absence is not news. Jobs that would have been created in that city are now created elsewhere. No one holds a press conference for jobs never created. Over years, fewer businesses locate in the city; the tax base erodes; ten years later the city has less revenue than it had before the tax increase. But no newspaper traces the connection.
**Result:** The rule generalizes. Visible concentrated benefits + invisible dispersed costs + a long enough time horizon = political decisions that persist far past when their net effect turned negative. The business version: the celebrated cost-cut, the celebrated acquisition, the celebrated simplification. All can run the same arithmetic.

## Anti-Patterns (tactical)

**Don't:** Count only the beneficiaries.
**Why:** Beneficiaries will count themselves. They will advocate. They will produce grateful testimonials. You do not need a framework to see them. You need the framework to see everyone else. If your analysis names only the beneficiaries, you have not analyzed; you have marketed.

**Don't:** Treat the absence of complaints as evidence of no cost.
**Why:** Dispersed costs are silent by definition. Nobody writes to the CEO saying "I am the apartment that was never built because of your rent-controlled pricing structure." The silence is not the absence of cost; it is the invisibility of cost. Look for it.

**Don't:** Confuse stage-one success with net success.
**Why:** Most policies look successful in stage one. The visible benefit arrived, the announced goal was hit. Stage one is when the beneficiaries are photographed. The unseen costs — behavioral adaptation, opportunity cost, dispersed damage — show up over quarters and years. Announcements are written from stage one; evaluations should not be.

**Don't:** Let "it only affects X" stand.
**Why:** That phrase is the default way decisions hide their unseen effects. A hiring-process change "only affects" candidates — and also the current employees who watch it, and the hiring manager workload, and the speed at which critical roles fill, and the team dynamics of who got the offer and who didn't. A pricing change "only affects" new customers — and also the existing customers who hear about it, the sales team whose close rates change, and the competitors who respond. There is no "only."

**Don't:** Use the unseen as a permanent veto.
**Why:** Every decision has unseen effects. Every action trades off. The discipline is to map the important unseen effects, weigh them, and then act. A founder who uses "but the unseen effects!" to block every decision has weaponized a clear-thinking tool into an avoidance tool. Map, weigh, decide, move.

The politician sees the factory saved and holds a press conference. The factories never built are invisible. The founder who learns to see the unseen — specifically, concretely, on paper, before the decision — accounts for more of the actual consequences than the founder who doesn't. That is where the better decisions come from.
