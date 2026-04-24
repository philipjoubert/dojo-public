---
triggers:
  - "user asks why departments are conflicting"
  - "user sees high local efficiency but poor system output"
  - "user mentions work piling up / scattered WIP everywhere"
  - "user says 'we can't let workers be idle'"
use_when:
  - "non-constraints are measured on utilization and it is destroying flow"
  - "the constraint is identified but material is still being released without regard to its pace"
  - "managers are resisting the concept of deliberate idle time"
fails_when:
  - "the user has not yet identified or exploited the constraint"
  - "the system is truly balanced in the narrow sense where subordination has no target"
related:
  - "five-focusing-steps.md"
  - "exploit-the-constraint.md"
  - "drum-buffer-rope.md"
  - "throughput-accounting.md"
  - "people-are-not-stupid.md"
---

# Subordinate Everything Else to the Constraint

## When to Use
- The constraint is identified and exploited. Now the question is what the rest of the system does.
- Every non-constraint is running at maximum speed and inventory is piling up throughout the plant.
- Managers are protesting that "idle workers look bad" and refusing to slow non-constraints.
- Departments are optimizing their own metrics and hating each other for it. Subordination is the cure.

## Fails When
- The measurement system still rewards non-constraints on utilization. Tell me how you measure me — if the measurement says "keep the machine busy," subordination will lose to bonus.
- The release policy has not been changed. Subordination lives or dies at the release point; if material enters the system faster than the constraint can absorb, nothing downstream can save you.
- The team treats subordination as humiliation of non-constraints. It is not. It is proper system design. Non-constraints idle not because they are inferior but because they have more capacity than the system needs at this moment.

## Core Concept

Subordination is the step that breaks everyone's brain. The idea is simple: non-constraints exist to serve the constraint. Their utilization is determined by the constraint's consumption, not by their own capacity. When the constraint doesn't need more input, the non-constraint stops. Yes — stops. A machine sits idle. A worker stands around. Deliberately.

Every manager was taught this is wrong. Efficiency is good. Idle machines lose money. Labor utilization matters. Maximize output everywhere. Every one of those beliefs, applied to a non-constraint, is false. A system of local optimums is not an optimum system at all; it is a very inefficient system. You can keep every machine at 95% efficiency and still go broke, because all those "efficiencies" produce is inventory waiting in front of the constraint that cannot absorb it.

The critical distinction is between activating a resource and utilizing a resource. Activating means keeping busy, doing work. Utilizing means doing work that contributes to throughput. These are not the same thing. A machine producing parts that pile up in front of the bottleneck is activated. It is not utilized. Its output creates no throughput. Its output creates handling costs, storage costs, quality degradation, confusion on the floor, and cash tied up in raw material turned into useless work-in-process.

Subordination is also where the Boy Scout analogy ends. The fast kids cannot walk faster than Herbie, so they walk at Herbie's pace. If you let the fast kids race ahead, the line stretches across a mile of trail, Herbie is alone in the back, and when he stops to rest the fast kids are half a mile ahead and don't know it. The troop does not reach the destination faster. It simply scatters. This is your plant when non-constraints run at full speed.

## How to Apply

1. **Tie material release to constraint consumption, not to upstream availability.** This is the rope in Drum-Buffer-Rope and the single most important subordination mechanism. If the constraint will need a new batch at hour N, release raw material at hour N minus the buffer time. Not earlier. Not because upstream machines are "free." Only because the constraint will consume it.

2. **Schedule non-constraints backward from the constraint schedule.** The constraint has the master schedule. Non-constraints work out: "the constraint needs X parts at this time; we must start upstream at this earlier time." This replaces forward scheduling ("start now and see when things finish"), which produces the scattered Boy Scout pattern.

3. **Accept idle time at non-constraints as correct.** When the constraint's buffer is full, upstream non-constraints stop. When the constraint's output is ahead of downstream demand, downstream non-constraints stop. This is not waste — idle time at a non-constraint costs near-zero (operating expense is fixed), while producing unneeded inventory costs real money (storage, handling, quality, cash).

4. **Change the measurement system.** This is non-negotiable. If you preach subordination while measuring non-constraints on utilization, subordination will lose every time. The manager's bonus is what gets obeyed, not the PowerPoint deck. Measure non-constraints on on-time delivery to the constraint, on-time delivery of the constraint's output to the customer, and low work-in-process. Those are subordination-aligned measurements.

5. **Explain the physics to everyone.** Workers and managers resist subordination because it contradicts everything they have been told. Show them the numbers. A plant in which everyone is working all the time is very inefficient — this needs to be said, demonstrated, and repeated until it feels normal. Without the shared understanding, the old measurements reassert themselves as soon as attention wanders.

6. **Differentiate "the machine can do more" from "the system can use more."** A non-constraint at 60% utilization is not an opportunity to improve. Its remaining 40% capacity is protective capacity — insurance against the statistical fluctuations that would otherwise starve the constraint. Protective capacity is not waste. Trimming it away in the name of efficiency is how plants become balanced and then fail.

7. **Make constraint-protecting inventory visible, and non-constraint inventory shameful.** Work-in-process in front of the constraint is insurance; it should be sized deliberately and maintained. Work-in-process anywhere else is waste — upstream of non-constraints that ran too fast, downstream of processes that pushed rather than waited. Walk the floor. The inventory tells you where subordination is failing.

## Examples

**Situation:** A plant has three operations: A feeds B feeds C. C is the constraint, capable of 100 units/day. B can do 150/day, A can do 200/day. Traditional management runs each at full speed. After a week, A has produced 1,400 units, B has produced 1,050, C has produced 700 (constraint). Inventory between A and B: 350. Between B and C: 350. Total WIP: 700 units.
**Application:** Subordinate. A produces 100/day. B produces 100/day. C produces 100/day. A and B now have deliberate idle time — 50% of their shift for A, 33% for B. "But they look idle!" Yes. And throughput is unchanged — same 100/day out of C — but WIP is near zero, cash is freed up, lead times collapse, quality problems become visible fast, and no one is paid to build inventory nobody wants.
**Result:** The counter-intuitive lesson: the plant makes more money by producing less. The "productivity" of A and B before was waste. It looked like work; it produced inventory. Subordinated, A and B now produce value.

**Situation:** A plant's robots (non-constraint) show 36% improvement in efficiency. Nobody sold more product. Payroll didn't change. Inventory went up. Operating expense went up.
**Application:** The robots were activated, not utilized. To keep them "efficient," material was released at their appetite rather than at the constraint's pace. The robots produced parts that piled up upstream of the real bottleneck. Cost accounting celebrated the improvement because allocated overhead spread over more units lowered the per-unit number. Nothing got better in reality. Subordinate the robots: they run only when their output is needed. Their reported "efficiency" drops. Actual throughput and cash improve.
**Result:** The 36% improvement was a fiction. The cost-per-part decline was an accounting artifact of allocating fixed costs across growing inventory. Subordination exposes the fiction: the numbers on the spreadsheet stop saying the robots are great, and the cash on the balance sheet starts saying the plant is making money.

**Situation:** A sales team is told by operations that "we can't accept the order if it ships next week — our schedule is full." Operations is running at 90% utilization across every cell.
**Application:** Ask: which cell is actually the constraint? If it is cell 4 and cells 1–3 and 5–7 are being run at 90% utilization, most of their 90% is inventory-generating rather than throughput-generating. Subordinate. Run cells 1–3 only when cell 4 can absorb. Cells 5–7 only when cell 4 has produced. Suddenly "the schedule is full" becomes "cell 4 is full" — a much smaller constraint — and operations can usually accept the order by rescheduling cell 4's sequence rather than by adding capacity.
**Result:** Sales gets the order. Operations looks like heroes. The underlying fix was simply to stop confusing local utilization with system capacity.

**Situation:** A project team cannot commit to a new project because "all our developers are already 100% allocated."
**Application:** Ask: are they allocated to the critical chain, or scattered across many paths? In most organizations, the answer is scattered. A developer works on three projects a day, losing 40%+ of their time to multitasking. Subordinate: commit each developer to the critical-chain task of one project at a time; pull them off peripheral paths. Suddenly "100% allocated" becomes "the critical chains we choose to run are covered" — and capacity exists for another project, because capacity was being destroyed by bad multitasking.
**Result:** The organization discovers it has more capacity than it thought, simply by subordinating to the critical chains.

## Anti-Patterns (tactical)

**Don't:** Preach subordination while measuring non-constraints on utilization.
**Why:** Every manager rationally optimizes their own bonus. If their bonus is tied to machine utilization, they will keep the machine running regardless of your slides. The measurement wins. Change the measurement or do not bother.

**Don't:** Subordinate without a controlled release point.
**Why:** If material keeps entering the system faster than the constraint can absorb, inventory will still pile up regardless of any intentions downstream. The release point — the rope — is the physical mechanism of subordination. Without it, subordination is a slogan.

**Don't:** Treat "protective capacity" as waste.
**Why:** The 30–40% slack at a non-constraint is insurance against fluctuation. Remove it in the name of efficiency and the first statistical hiccup starves the constraint. "Balanced plants" die from this. Keep protective capacity.

**Don't:** Embarrass idle non-constraint workers.
**Why:** Subordination is about system design, not personal judgment. A worker on a non-constraint who is idle because the constraint hasn't consumed yet is doing the right thing. Rewarding or shaming them for "not working" is punishing the correct behavior and will produce rework of the old regime.

**Don't:** Fire workers when non-constraints are idle.
**Why:** The idle time is correct for the system, not excess capacity to trim. Cutting headcount at a subordinated non-constraint trims protective capacity and makes the system less robust to fluctuation. It also rewards short-term cost accounting over long-term throughput — the exact reversal subordination is trying to fix.

Subordinate. Yes, even though it contradicts everything you were taught. The measurements you were taught were wrong.
