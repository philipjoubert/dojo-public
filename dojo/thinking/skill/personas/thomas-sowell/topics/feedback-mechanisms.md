---
triggers:
  - "user describes a program, team, or activity that keeps underperforming without correction"
  - "user talks about 'optimizing' or 'improving' an existing process"
  - "user describes subsidies, protected budgets, or cross-subsidies"
  - "user says 'we'll keep trying until it works' or similar open-ended commitment"
  - "user is designing an accountability system"
use_when:
  - "errors persist because the feedback loop is broken"
  - "perfection-seeking is substituting for shipping"
  - "a protected activity is being shielded from the signal that it is not working"
fails_when:
  - "the activity genuinely is early enough that feedback isn't yet reliable"
  - "the discipline is being used to prematurely kill an experiment before it could produce signal"
related:
  - "incentive-design.md"
  - "prices-as-information.md"
  - "skin-in-the-game.md"
---

# Feedback Mechanisms — How Mistakes Get Corrected

## When to Use
- Any team, initiative, or business unit that has been persistently underperforming without correction.
- Evaluating subsidies, cross-subsidies, or protected budgets.
- "We'll keep trying until it works" and other open-ended commitments.
- The pursuit of the perfect system when a good-enough one already works.
- Designing accountability mechanisms inside the organization.

## Fails When
- The activity genuinely is early. Startups don't have P&L feedback yet; that is a known trade-off of early stage. Don't demand feedback loops that haven't had time to form.
- Prematurely killing experiments that haven't had enough time to produce signal.

## Core Concept

Human beings are going to make mistakes in any kind of economic system. The key question is: *what kinds of incentives and constraints will force them to correct their own mistakes?*

This is perhaps the most important question in organizational design, and it is almost never asked. We ask how to make better decisions. We ask how to hire smarter people. We ask how to improve our processes. But we rarely ask: when our decisions are wrong, what mechanism exists to detect and correct them?

A system that prevents all mistakes would be ideal. No such system exists. The realistic choice is between systems that correct mistakes quickly and systems that allow mistakes to persist. The difference between success and failure often lies not in making fewer mistakes but in fixing them faster.

## The Profit-and-Loss Signal

Every system has feedback mechanisms, whether designed or not. The question is whether those mechanisms actually reach the people who need to hear them, and whether those people have the incentive and ability to respond.

The profit-and-loss system is the most powerful feedback mechanism ever devised. Profit tells a business: you are using resources to create something people value more than the inputs. Keep doing this. Loss tells a business: you are using resources to create something people value less than the inputs. Stop doing this. Bankruptcy forces correction even when managers are too blind or too stubborn to change.

This is not about rewarding success and punishing failure. It is about information. Loss is a signal that says "this is not working." Remove that signal and errors compound because no one knows they are making them.

The Soviet factory manager who kept mining equipment in storage rather than ship it — because it needed blue paint and he had only green — was responding perfectly to his incentive structure. Disobeying orders meant prison; having equipment sit idle meant nothing, because there was no profit-and-loss signal telling him the cost of the decision. The mistake persisted because no feedback existed to correct it.

## The Insulation Problem

Systems become insulated from correction in predictable ways. Understanding these patterns helps diagnose why errors persist.

- **Subsidies prevent loss signals from reaching decision-makers.** If a business unit loses money but is kept alive through corporate subsidies, the managers receive no signal that their decisions are wrong. They may believe they are succeeding. They may be promoted. The error continues because the feedback has been blocked.
- **Monopoly removes competitive pressure.** When customers have no alternative, dissatisfaction produces no consequence. Quality declines because there is no cost to declining quality.
- **Political protection removes market feedback.** A division protected because of its importance to an executive's pet project becomes immune to evaluation. Questioning its performance is career-limiting. Normal correction mechanisms cannot operate.
- **Cross-subsidies hide which activities are value-creating.** When profitable divisions fund unprofitable ones through internal accounting, no one knows which activities are actually working. The signal that would identify what to do more of and what to do less of is deliberately obscured.

For any process or team, ask: *what happens when they make a mistake?* If the answer is "nothing changes," you have a feedback problem. The mistake will persist, and similar mistakes will follow, because the mechanism that should trigger correction has been disabled.

## Process Costs Are Real Costs

Even when feedback exists, the cost of acting on it may exceed the cost of living with the problem. This is the domain of process costs.

Every action, even one that produces the right result, has process costs. The costs of deciding, implementing, and adjusting must be weighed against the benefits. Sometimes the inferior option, with lower process costs, is actually superior.

Consider a hiring process designed to find the perfect candidate. Seven interviews, a case study, references, background investigation, a final presentation to leadership. This process may indeed identify better candidates than a simpler one. But the hiring team spends hundreds of hours per position. Candidates drop out because the process takes too long. The position remains unfilled for months. The best candidates, who have options, accept offers elsewhere rather than wait.

The "perfect" process produces worse outcomes than a faster, less thorough process would have. The process costs exceed the benefits of additional information gathered.

This is not an argument against quality or thoroughness. It is an observation that thoroughness has costs, and those costs must be weighed. An 80% solution implemented quickly may beat a 95% solution that takes three times as long to deploy.

The related failure mode: the system that is always being improved but never finished. A software company spent two years building a perfect CRM. Every edge case handled. Every workflow optimized. Every report automated. By launch, the sales process had changed so much that half the features were irrelevant. The team immediately began planning version two. Meanwhile, a competitor bought an off-the-shelf CRM, configured it in two weeks, and spent the next two years actually selling. Their CRM was inferior by every measurable criterion. It lacked features. It required manual workarounds. But it existed, which meant they used it, which meant they iterated based on actual experience rather than theoretical requirements.

The pursuit of perfection produced paralysis. The acceptance of good-enough produced progress.

## The Open-Ended Commitment Trap

One specific process cost deserves attention: the open-ended commitment. Some problems feel so important that any cost seems justified. "We will do whatever it takes." "We cannot put a price on this." "We will keep trying until we succeed."

These sound like dedication. They are often formulas for wasting resources.

When a goal is open-ended, there is no stopping point. No matter how much has been spent, more could be spent. No matter how long it has taken, more time could be invested. The question "is this working?" never gets asked, because there is always more that could be done.

Open-ended commitments disable the feedback mechanism. They announce in advance that normal signals of failure will be ignored. They create a permission structure for throwing good money after bad.

The corrective is not cynicism or premature abandonment. It is explicit constraints. "We will invest X in this initiative and evaluate at month six." "We will try this approach for three iterations before considering alternatives." "If we have not achieved Y by date Z, we will cut our losses."

Constraints create feedback. They force evaluation. They prevent the gradual drift into a project that consumes everything and delivers nothing.

## How to Apply

1. **For any system, process, or team, ask the four feedback questions.**
   - How does this system learn from failures?
   - What happens when something goes wrong? Does information about the failure reach the people who made the decision? Do they feel any consequence?
   - Is there profit-and-loss feedback or an equivalent? Does success feel different from failure to the decision-makers?
   - Can mistakes persist indefinitely without correction? What is the longest a mistake could continue before being detected and fixed?

2. **Hunt for insulation.** Find the places in your organization where something is protected from feedback — by subsidy, by cross-subsidy, by political support, by "strategic importance." These are the places where errors will accumulate. You do not have to remove the protection; you do have to monitor what you are not going to be told about.

3. **Shorten the feedback loop.** The longer the delay between decision and consequence, the harder to learn. A marketing campaign that takes six months to evaluate teaches less than one that provides weekly data. By the time you know whether the six-month campaign worked, you have made dozens of other decisions you cannot fix.

4. **Put a budget and checkpoint on any open-ended commitment.** "Whatever it takes" is not a plan. Convert it: "We will invest $X over Y months. At Y/2 we check whether milestones Z are hit. If not, we pivot or close." The constraint creates feedback where the open-ended version would not.

5. **Account for process costs when evaluating improvements.** Before adding a process step, ask what it costs to perform. Before optimizing an existing process, ask whether the optimization is worth the friction it adds. The 95% solution that takes five times longer is often worse than the 80% solution that ships.

6. **Prefer stable, predictable systems over constantly-improving ones.** Stable systems accumulate institutional knowledge and let your team execute. Constantly-changing systems never accumulate knowledge — every change resets the learning curve. Change should be episodic and deliberate, not continuous optimization.

## Examples

**Situation:** A business unit has lost money for three consecutive years but is kept alive because leadership believes in its strategic importance.
**Application:** The P&L signal is being blocked by the strategic narrative. Managers of the unit are receiving no feedback that the unit is failing. They may be getting promoted on "strategic contribution." Errors will continue because the correction mechanism has been disabled. The "strategic importance" may be real; it may also be a permission structure for accumulating uncorrected errors.
**Result:** Either (a) declare a specific budget and timeline after which the unit must prove itself on market terms, or (b) explicitly separate the strategic subsidy from operational performance, with direct accountability on operational metrics independent of the subsidy. What you cannot do is leave the P&L signal muffled and expect the unit to self-correct.

**Situation:** A founder insists on "world-class" everything — world-class hiring, world-class architecture, world-class customer support.
**Application:** World-class processes have world-class process costs. The five-round hiring process may find better candidates; it also loses candidates to slower cycle time, consumes hundreds of hours of team time, and blocks roles from being filled. Ask: is the world-class process producing world-class outcomes, or is it producing average outcomes after enormous expense?
**Result:** Explicitly compare the process's benefit to its cost. An 80% process that costs 20% of the effort may produce better net outcomes than a 95% process at 100% effort. Permit yourself to choose good-enough where good-enough is actually better.

**Situation:** A product team is on its fourth rewrite of the core architecture in two years, always for the same reason: "to make it right."
**Application:** The rewrites are a process cost masquerading as progress. Each reset destroys the learning from the prior implementation. The team has never been in a stable architecture long enough to discover what is actually wrong with it, because they keep replacing it before finding out. The constant improvement is preventing real improvement.
**Result:** Declare a freeze. Pick the current architecture, document its known flaws, and commit to running it for a defined period (say, 12 months) with only surgical changes. At the end of the period, evaluate. If a rewrite is still needed, at least it will be informed by a year of operational experience, not theory.

**Situation:** A founder says "we're going to invest in sales enablement until it works." Six months later, $500K has been spent, sales metrics have not moved, and the CEO is asking about the next investment.
**Application:** Open-ended commitment with no feedback gate. The "until it works" phrasing disabled the normal question "is this working?" Each incremental investment was evaluated as small on its own, but the cumulative drift has consumed real resources for no clear outcome.
**Result:** Impose the gate retrospectively. Define what "working" means (named metrics, threshold values). Decide the next $150K investment against a specific milestone at 90 days. If milestones aren't hit, stop.

## Anti-Patterns (tactical)

**Don't:** Shield a struggling activity from feedback out of loyalty or strategy.
**Why:** The shield feels protective. It is actually disabling the mechanism that would tell the activity to fix itself. If the activity can be saved, it can be saved better with feedback than without. If it cannot, the shield only delays the eventual loss and makes it larger.

**Don't:** Mistake continuous optimization for continuous improvement.
**Why:** The system that is always being improved is often the system that never stabilizes long enough to produce results. Stable systems with periodic deliberate change usually outperform constantly-tweaked systems, because stability allows learning to accumulate.

**Don't:** Accept "we'll do whatever it takes" as a plan.
**Why:** It isn't one. It's a commitment to not evaluate. Convert every open-ended commitment into a bounded one with an explicit checkpoint. You can always re-commit after the checkpoint if the evidence warrants.

**Don't:** Optimize the process instead of shipping the output.
**Why:** Process perfection is a trap. The 95% process that never ships beats the 80% process that ships — on paper, in committee, in the founder's head. In practice, the 80% that shipped produces real feedback that teaches you what to fix. The 95% that never shipped teaches you nothing.

**Don't:** Treat losses as bad news to be hidden.
**Why:** Losses are information. The company that hides losses from its managers loses the primary signal that would tell them to change. Treat losses the way an engineer treats failed tests — as data about what doesn't work, not as morale problems.

The question is never whether a system will make mistakes. It will. The question is whether the system will correct those mistakes or whether they will persist and compound. Get the feedback mechanisms right and the system improves over time. Get them wrong and brilliance at the top cannot save you from the accumulation of uncorrected errors below.
