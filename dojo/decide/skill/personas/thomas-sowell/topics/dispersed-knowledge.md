---
triggers:
  - "user describes decisions from HQ or leadership failing on the ground"
  - "user is redesigning org structure or deciding what to centralize"
  - "user replacing an 'evolved' process with a 'designed' one"
  - "user treating employees as interchangeable pieces to be rearranged"
  - "user asks 'should we pull this decision up to the leadership level?'"
use_when:
  - "authority sits higher than knowledge"
  - "decisions made centrally keep getting rejected by teams doing the work"
  - "evaluating a reorg, process overhaul, or tooling change imposed from above"
fails_when:
  - "the decision actually does depend on general knowledge (legal, compliance, financial standards)"
  - "local knowledge has already been gathered and now a judgment is needed"
related:
  - "incentives-not-intentions.md"
  - "incentive-design.md"
  - "feedback-mechanisms.md"
---

# Dispersed Knowledge — General vs Specific

## When to Use
- Any reorg or redesign where authority is being moved further from the operating level.
- When leadership decisions keep being quietly reversed or worked around by the teams that must execute them.
- When a consultant or new executive proposes replacing evolved practices with "better designed" ones.
- When you're tempted to centralize in response to a problem.
- When someone treats your employees as chess pieces — moveable units whose knowledge and relationships transfer automatically with their job title.

## Fails When
- The decision genuinely depends on general knowledge — legal compliance, accounting standards, regulatory requirements, strategic direction. These are properly centralized.
- Local teams have become entrenched defenders of inefficient local practices; sometimes the central view is correct and the practice actually should change.

## Core Concept

Not all knowledge is the same, and this matters enormously for how organizations should be designed.

**General knowledge** travels well. It includes expertise, statistics, industry best practices, strategic frameworks. A CFO knows financial modeling. A marketing executive knows what messaging works across industries. A consultant carries experience from dozens of similar companies. This kind of knowledge can be written down, taught in schools, and applied across contexts. It makes economic sense to concentrate general knowledge at higher levels — where it can be leveraged across many situations.

**Specific knowledge** does not travel. It is knowledge of local conditions, individual reliability, particular circumstances that exist right here, right now. The sales rep knows this specific customer is going through a budget freeze. The frontline employee knows this machine makes a particular sound before it fails. The account manager knows the client contact is about to be promoted and will be more receptive to new proposals next quarter. The engineer knows which test always flakes on Mondays and why.

This knowledge cannot easily be written down or transmitted upward. Much of it cannot even be consciously articulated. The employee may not know why they have a bad feeling about a particular deal. They just do.

The crucial insight: *general knowledge can be economically held by higher or larger units. Specific knowledge must remain with those who are in daily contact with the relevant facts.* When you try to move specific knowledge upward through the hierarchy, it degrades. By the time it reaches the decision-maker, it has been filtered, summarized, and stripped of the nuance that made it valuable.

This is not about hierarchy being bad. It is about matching the type of knowledge to the location of the decision.

## The Knowledge-Location Test

Before any major decision, particularly one that changes how things are done on the ground:

- **What is the decision?** Be specific. Not "improve sales performance" but "change the commission structure for the enterprise team."
- **What knowledge is required to make it well?** List it out. Industry benchmarks, yes. But also: how do individual reps respond to different incentives? What behaviors does the current structure actually produce? What unintended consequences might arise?
- **Where does that knowledge actually reside?** Benchmarks are at HQ. Knowledge of individual rep behavior is with sales managers. Knowledge of what really drives deals may be with the reps themselves.
- **Where does the authority to make this decision currently sit?** Usually at HQ, with people who have general knowledge but lack specific knowledge.

When authority and knowledge are co-located, decisions tend to be sound. When authority sits higher than knowledge, expect poor decisions — push authority down, or push information up with enough fidelity that HQ can act on it. When knowledge is dispersed across many people and authority is centralized, you are attempting central planning. Expect systematic failure.

## The Chess-Pieces Fallacy

A related error. Intelligent people in positions of authority look at the organization as if it were a chessboard and the employees as pieces to be moved according to a master plan. If only the pieces could be arranged correctly, the organization would function optimally.

This assumes people are passive and interchangeable. It assumes the knowledge needed to arrange them exists at the top. It assumes the right configuration can be known in advance rather than discovered through experimentation.

None of these assumptions hold. People are not chess pieces. They have their own knowledge, their own incentives, their own responses to being moved. The person who was productive in one role may become unproductive in another — not because they have changed, but because the specific knowledge and relationships that made them effective did not transfer.

The knowledge needed to organize people is itself dispersed. The team lead knows which people work well together. The project manager knows which developer should take which task. The individual contributor knows what conditions help them do their best work.

When founders treat organizational design as a chess problem to be solved from above, they destroy the dispersed knowledge that made the organization function. The new org chart looks more logical on paper. It satisfies a consultant's framework. But it has severed the connections through which knowledge flowed.

## Why Evolved Practices Often Beat Designed Ones

Language evolved without a designer. No committee of linguists invented English. Designed languages like Esperanto failed to gain adoption. Evolved languages, messy and illogical, dominate the world. Traditions encode more wisdom than individuals can articulate. Practices that seem irrational often reflect accumulated responses to constraints that no one remembers.

For founders, this creates a practical tension. Experts offer designs. They propose restructuring, new processes, innovative approaches. But they often replace evolved systems with designed systems — and the designed systems fail in ways the evolved ones did not, because the evolved systems had been selected against failure modes no one thought to prevent.

The engineer who insists on a particular code review process may not be able to articulate why it matters. But the practice may have evolved to catch a type of bug that only appears under specific conditions. Eliminate the process, and the bugs return. The knowledge was in the practice itself, not in anyone's head.

Before replacing an evolved process with a designed one, ask: *what knowledge might be embedded here that we do not understand? Why did this practice develop? What problem was it solving that we can't see?*

The answer is often "we don't know." That uncertainty suggests caution. Feedback loops matter more than master plans. Build systems that can learn and adapt, rather than systems that execute a design.

## How to Apply

1. **Before pulling a decision upward, identify where the knowledge actually lives.** If it's dispersed at the operating level, pulling the decision up does not increase decision quality — it decreases it, because the new decision-maker doesn't have the knowledge.

2. **When a decision from HQ keeps failing on the ground, ask the structural question, not the character question.** The first question is not "who made the bad decision" but "was the knowledge needed to decide well in the same place as the authority to decide?" If the answer is no, you have a structural problem. More-capable leaders will not fix it.

3. **Push decisions toward the knowledge. Push standards and principles down from above.** Strategy, finance, legal compliance, safety standards — centralize. The decisions about how this specific customer is onboarded, which vendor is reliable, how this specific engineer prefers to work — decentralize, with boundaries set by general principles.

4. **Before replacing an evolved practice, study it.** Spend a week understanding *why* the practice exists. Often the practice encodes knowledge of a constraint or failure mode the proposer doesn't see. Sometimes it really is vestigial and should go. You cannot tell which without study.

5. **Resist the urge to centralize in response to problems.** When a local decision goes wrong, the instinct is to pull authority up so "smarter people" can oversee it. This usually worsens the problem — it separates the power from the knowledge further. Instead, ask: did the local decision-maker have the knowledge and the incentive to decide well? If not, fix that.

6. **Treat "we'll rearrange the org chart" with suspicion.** The org chart is a map of authority. The company operates through relationships, tacit knowledge, and informal networks not shown on the chart. Rearranging the chart breaks those networks — sometimes productively, often not. Ask specifically what you are breaking before you rearrange.

## Examples

**Situation:** HQ selects a new project management tool for all engineering teams. Three months later, teams have abandoned it for their old tools plus informal workarounds.
**Application:** The knowledge needed to select a good project management tool for these engineers — how they actually work, which features matter, which are irrelevant, what integrations already exist — lived with the engineers themselves. The operations team at HQ had general knowledge about project management tools in general. The authority to decide was at HQ. The knowledge was on the ground. Structural mismatch. The tool the operations team chose was reasonable by their criteria; those criteria did not include the specific criteria that mattered.
**Result:** Next time, let each engineering team select its own tool, with HQ setting only required interoperability standards. Or, if standardization is genuinely required, ask the engineers which tool and then let HQ negotiate the enterprise contract. Don't confuse "HQ owns the decision" with "HQ has the knowledge to make the decision."

**Situation:** A founder announces a reorg that moves customer-facing engineers from reporting to the product org to reporting to the customer success org. "It will improve customer focus."
**Application:** What specific knowledge did the previous structure encode? Product-reporting kept engineering close to the product roadmap; it surfaced tensions between customer-specific asks and general product direction; it kept the engineers in the daily meetings where priorities are set. The new structure optimizes for a different thing (customer-proximity) but breaks the specific mechanisms by which those engineers previously did their work. Chess pieces, moved without understanding what their position was doing.
**Result:** Sometimes the reorg is right anyway. But only if you can name specifically what the previous structure was doing that was suboptimal, and how the new one addresses it, and what you expect to lose. "Improve customer focus" is a slogan, not a design.

**Situation:** A new CEO arrives and commissions a consultant to redesign the sales organization. The consultant proposes a matrix structure with specialized roles, layered management, and detailed metrics.
**Application:** The knowledge needed to design a good sales structure at this company lives with the current best performers and the frontline managers. The consultant has general knowledge about sales structures in general. The structure they propose is the one that is easy to teach and publish — not necessarily the one that fits this business.
**Result:** Ask the consultant: has anyone you have advised, at our stage, with this structure, succeeded? If they cannot answer, they have general knowledge and no specific knowledge about whether the design will work here. A simpler test: promote your best salesperson to player-coach, give them three reps, and compare to the consultant's proposal. Often the simple structure beats the matrix one because it matches the actual knowledge distribution.

**Situation:** A founder decides to centralize all pricing decisions to "maintain consistency."
**Application:** Pricing decisions depend on both general knowledge (competitive positioning, target margins) and specific knowledge (this specific customer, their budget cycle, their alternatives, their switching cost). Centralizing pulls authority toward general knowledge and away from specific knowledge. Result: systematic over-pricing or under-pricing in the cases where local knowledge mattered.
**Result:** Set pricing guardrails (floors, target discount structures, unacceptable terms) centrally. Let the field allocate within the guardrails based on specific knowledge. The guardrails enforce the general; the field supplies the specific.

## Anti-Patterns (tactical)

**Don't:** Assume that because you are the CEO you have the knowledge the decision requires.
**Why:** Being the CEO gives you authority and general knowledge of the company. It does not give you specific knowledge about every decision. For any decision, ask honestly: do I know this, or do I know about it? The chauffeur test applies — if you could not answer the follow-up question from someone who actually lives with the consequences, you don't have the specific knowledge.

**Don't:** Replace an evolved practice without understanding it.
**Why:** The practice may encode knowledge of constraints or failure modes that are invisible to the redesigner. When the new "designed" system is deployed, the old failure modes reappear, and nobody remembers why the old practice was there.

**Don't:** Treat employees as interchangeable.
**Why:** Their productivity depends on specific relationships, accumulated specific knowledge, and conditions that will not follow them to a new role. The "star performer in sales" who is moved to run product may fail — not because they got worse, but because the knowledge and relationships that made them a star did not transfer.

**Don't:** Centralize in response to a problem you don't understand.
**Why:** Centralization is almost never the answer to a knowledge-location problem. It makes the mismatch worse. When a local decision has gone wrong, the honest question is: did the local decision-maker have the knowledge and the incentive to decide well? Fix that. Pulling the decision up puts it where it has even less knowledge.

**Don't:** Confuse "authority" with "information."
**Why:** You can give yourself more authority by fiat. You cannot give yourself more information by fiat. Authority without information produces confident bad decisions — exactly the pattern most founders want to avoid.

The central question is not whether to centralize or decentralize. It is whether authority is located where knowledge exists. Get this wrong and the smartest people in the wrong place will consistently make worse decisions than average people in the right place.
