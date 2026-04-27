---
triggers:
  - "user lists many problems and doesn't know which to address"
  - "user asks about root cause analysis"
  - "user proposes a solution and wants to know if it will work"
  - "user has tried many fixes and problems keep returning"
use_when:
  - "the organization has many symptoms and unclear causation"
  - "a proposed solution hasn't been tested for unintended consequences"
  - "someone needs to distinguish symptoms from core problems"
fails_when:
  - "the problem is narrow enough that simple 5-Whys will do"
  - "parties refuse to state their logic openly"
related:
  - "inherent-simplicity.md"
  - "evaporating-cloud.md"
  - "every-conflict-can-be-removed.md"
  - "five-focusing-steps.md"
---

# Current and Future Reality Trees (The Thinking Processes)

## When to Use
- The organization has a long list of undesirable effects — missed deliveries, excess inventory, low morale, quality defects, customer complaints — and no clear sense of which is cause and which is symptom.
- A solution has been proposed and you want to test whether it actually delivers the desired outcomes, and whether it creates new problems along the way.
- Previous "solutions" have each addressed one symptom and the problems keep returning. That pattern is the tell that the root cause has not been found.
- Any serious change management effort where the logic chain from injection to outcomes needs to be defensible and visible.

## Fails When
- The situation is narrow and well-understood. Simple 5-Whys suffices; the Tree is overkill.
- The parties will not state their logic openly. The Tree requires exposing assumptions to challenge, which some organizations refuse to do culturally.
- The logic is built sloppily — "IF A THEN B" without sufficient cause. Poor cause-and-effect chains produce wrong roots and wrong solutions.

## Core Concept

Nature is cause and effect. Every effect has a cause. Every cause produces effects. This is the operating system of reality, and it applies to organizations as much as to physics. If physical reality is governed by a few causes — Newton described the motion of every body in the universe with three laws — why would organizational reality be different? It is not.

Organizations look complex on the surface, but beneath the chaos, a few core problems create most of the symptoms. Find those core problems, address them, and dozens of symptoms disappear simultaneously. This is the whole point of the Thinking Processes. They answer three questions every manager must be able to answer.

- **What to change?** Use the **Current Reality Tree**. Start with the undesirable effects at the top. Ask "why does this exist?" Connect the effects downward to their causes. Keep asking why. Watch for convergence — multiple symptoms tracing back to the same cause. That convergence point is your core problem.

- **What to change to?** Use the **Evaporating Cloud** to find the breakthrough idea (injection) that breaks the conflict preventing improvement. Then use the **Future Reality Tree** to test whether the injection actually produces the desired effects.

- **How to cause the change?** Use the **Negative Branch Reservation** to identify new problems the solution creates and develop counter-injections. Use the **Prerequisite Tree** to list obstacles. Use the **Transition Tree** to build the detailed action plan.

The discipline is cause-and-effect logic, rigorously applied. Every connection must be defensible: IF [cause] THEN [effect], with sufficient cause. Every injection must survive scrutiny for unintended consequences before it is implemented. This is uncomfortable. Most managers prefer intuition. But intuition that cannot be written down and challenged is indistinguishable from rationalization. The Tree forces the logic into the open, where it can be tested before reality tests it for you.

## How to Apply

### Current Reality Tree — finding the core problem

1. **List the undesirable effects (UDEs).** Everything painful about the current state. Late deliveries. Excess inventory. Low morale. Quality defects. Employee turnover. Cash flow stress. Write them all down without prioritizing.

2. **Work backward from each UDE.** Take one. Ask: what must be true for this to exist? What causes this? Write down the cause. Then ask why that cause exists. And why that cause exists. Keep going. Aim for sufficient cause — "IF A AND B AND C, THEN effect" — and defensible logic.

3. **Watch for convergence.** Different UDEs will start connecting to the same causes as you work backward. This is the hallmark of reality — causes converge, they don't fan out. If they didn't converge, you'd need more atoms than the universe has to explain one late shipment.

4. **Identify the core problem.** The point where many chains meet. Often it is a policy, a measurement, or a belief — not a physical thing. Test: if you removed this, would multiple symptoms disappear? If you only removed the symptoms without this, would they return? The answer to both should be yes for a true core problem.

5. **Apply the sufficiency and necessity tests.** Sufficiency: is this cause enough to produce this effect on its own, or are there others? Necessity: is this effect inevitable given this cause? Sloppy logic produces wrong roots. If you cannot defend each arrow, the Tree is wrong.

### Future Reality Tree — testing the solution

6. **Start with the injection.** The proposed change — a new policy, measurement, action, or condition.

7. **Build the logic forward.** IF injection, THEN what happens next? Then what? Continue until you reach the desirable effects — the opposites of the UDEs. If you cannot build a logical chain from injection to the results you want, your solution is incomplete.

8. **Check for Negative Branches.** Every change has side effects. What new problems does the injection create? Write them out. Each is a Negative Branch.

9. **Design counter-injections to trim the Negative Branches.** Additional actions that prevent the new problem. If the injection creates a Negative Branch "managers will resist because their measurements now look bad," the counter-injection is "change the measurements at the same time."

10. **Validate the full tree before implementing.** If the tree holds together logically, the injection is ready. If it does not — if Negative Branches remain unresolved, or the chain to desirable effects is weak — go back. Better to discover flawed logic on paper than to discover it in reality after you've invested six months.

## Examples

**Situation:** A software company has persistent problems: projects always late, developers burned out, quality slipping, customers frustrated. Traditional diagnosis has produced seven task forces attacking seven symptoms independently.
**Application:** Build the Current Reality Tree. Late projects — why? Resources switching between projects constantly. Why? Too many projects started. Why? Management pressured to start everything immediately. Why? Measurement rewards project starts, not completions. Why? Historical belief that "busy developers are productive developers." Trace from the other UDEs. Developer burnout — traced via multitasking back to "too many starts" back to the same measurement. Quality slipping — traced via rushing back to overload back to the same measurement. Customer frustration — traced via late delivery back to the same chain. All four UDEs converge on ONE core problem: the measurement and incentive system rewards starts rather than completions.
**Result:** Instead of seven task forces, one change. Change the metric from "percentage of time utilized" to "throughput of completed projects." The Future Reality Tree predicts: IF we measure completed projects, THEN managers will limit WIP. IF they limit WIP, THEN developers can focus. IF developers focus, THEN projects finish faster. Negative Branch: developers might feel insecure during idle time. Counter-injection: educate the team on the system logic and celebrate focused work. Implementation: project throughput doubles without adding staff. Customer complaints drop 70%.

**Situation:** A plant has UDEs: high inventory, long lead times, poor on-time delivery, quality defects rising, morale low, expediting constant.
**Application:** CRT. Late delivery — because work arrives at final assembly late. Why? Upstream operations delayed. Why? Expediting interrupts scheduled work. Why? Everything is urgent. Why? Behind on most orders. Why? Release more work than we can complete. Why? Measure plant on local efficiency; managers keep machines busy to protect their reviews; so they release work to feed machines, regardless of completion. The core problem: local efficiency measurement at non-constraints. All six UDEs converge there.
**Result:** Injection: subordinate non-constraints; measure on throughput contribution, not local efficiency. Future Reality Tree: WIP drops, lead times drop, delivery improves, rushing stops (quality improves), chaos ends (morale improves). One root, many effects.

**Situation:** A product team proposes a new pricing strategy: "offer annual discounts to boost retention."
**Application:** Future Reality Tree before implementing. IF we offer annual discounts, THEN customers take them. IF customers commit for a year, THEN churn drops. Good. Negative Branches: IF we discount annuals, THEN annual revenue per customer drops. IF revenue per customer drops, THEN CAC payback worsens. IF CAC payback worsens, THEN we cannot afford current marketing spend. Also: IF we discount, THEN existing customers renegotiate for the discount. IF that happens, THEN existing revenue drops too. Counter-injections needed: pricing tier structure so annuals replace monthly-equivalents without margin loss; grandfathering existing customers only at renewal. Without these counter-injections, the injection destroys value.
**Result:** The team adjusts the proposal before shipping. A naive rollout would have produced the intended retention improvement AND destroyed margin. The Tree caught the problem on paper instead of in revenue reports.

**Situation:** An executive proposes combining two departments into one to "improve collaboration."
**Application:** Current Reality Tree first — why is collaboration poor? Trace. Often it traces to competing measurements, not organizational structure. If the CRT shows that, the proposed injection is wrong; you don't need to reorganize, you need to align the measurements. Running the FRT on the reorg anyway surfaces Negative Branches: loss of specialization; leadership disruption; legacy process conflicts. The injection may create more problems than it solves.
**Result:** The reorg is deferred. The measurement fix is tried first and often solves the collaboration problem without the pain of restructuring.

## Anti-Patterns (tactical)

**Don't:** Build the Tree to confirm what you already concluded.
**Why:** The point is to find convergence you didn't see, or Negative Branches you didn't expect. If you know the answer before drawing the tree, you will draw the tree to match. Draw it when you genuinely don't know.

**Don't:** Accept sloppy cause-and-effect.
**Why:** "IF A THEN B" without sufficient cause produces wrong roots. If B can happen without A, then A is not sufficient. Add the other necessary causes. Rigor matters — a Tree built on shortcuts identifies a wrong core and prescribes a wrong solution.

**Don't:** Stop at two or three layers.
**Why:** Root causes are usually four to seven layers deep. If your tree stops early, you are treating symptoms deeper than the surface but still not at the root. Keep asking why. Watch for convergence; that is your signal.

**Don't:** Ignore Negative Branches because you like the injection.
**Why:** Every change has side effects. If you implement without addressing them, the Negative Branches become the next set of UDEs, and you are back where you started. Design counter-injections or accept the tradeoffs consciously.

**Don't:** Treat the Thinking Processes as paperwork.
**Why:** They are a thinking discipline, not a documentation exercise. Filling out trees to justify a foregone decision is worse than not doing them. Either engage the logic honestly or don't pretend.

The answer is always there, waiting. Reality has no obligation to be complex. Keep asking why until causes converge, and the solution will reveal itself.
