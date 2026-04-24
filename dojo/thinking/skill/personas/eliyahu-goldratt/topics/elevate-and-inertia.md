---
triggers:
  - "user wants to invest in more capacity"
  - "user's previous improvement worked and now performance has plateaued"
  - "user is running old policies after the constraint has moved"
  - "user asks 'what next' after breaking a bottleneck"
use_when:
  - "exploit and subordinate have been done and the constraint still limits throughput"
  - "the organization is stuck in success — old wins now producing diminishing returns"
fails_when:
  - "exploitation wasn't completed first — elevation is premature"
  - "the organization can't let go of policies that made sense for the old constraint"
related:
  - "five-focusing-steps.md"
  - "exploit-the-constraint.md"
  - "subordinate-everything-else.md"
  - "never-say-i-know.md"
---

# Elevate the Constraint & Don't Let Inertia Become the Constraint

## When to Use
- You have identified the constraint, exploited every minute of existing capacity, and subordinated the rest of the system. Throughput is still limited by the same resource. Now — and only now — elevate.
- A previous improvement program broke the old constraint. Performance is plateauing. The team is running the old regime against a new reality. Time for Step 5: return to Step 1, re-identify, and kill the policies that have gone stale.
- Success has bred confidence, which has hardened into dogma. "We know how to run this plant." That sentence is the tell.

## Fails When
- Elevation is attempted before real exploitation. You spend capital on capacity you did not need.
- The constraint moves after elevation and no one adjusts. The organization keeps feeding resources to what used to be the bottleneck while the new one quietly strangles throughput.
- Step 5 is treated as "check in occasionally." It is not. Every successful improvement creates the conditions for the next failure unless the policies, measurements, and attention are realigned.

## Core Concept

**Elevation** means increasing the capacity of the constraint through investment. Buy another machine. Hire more people. Add a shift. Outsource. It is step four in the Five Focusing Steps, and it is step four for a reason. Elevation is expensive, slow, and permanent. Exploitation is cheap, fast, and reversible. Do the cheap fast reversible thing first. Most of the time elevation turns out not to be necessary — and the money you saved funds the next round of exploitation somewhere else.

**Inertia** is what kills organizations that succeed at the first four steps. When you break a constraint, the constraint moves. The old bottleneck now has excess capacity. A different resource — or a different policy — now limits the system. But the organization doesn't notice, or noticing, doesn't respond. All the special treatment for the old constraint continues. Dedicated maintenance. Priority scheduling. Quality inspection before it. Buffers in front of it. The new constraint, meanwhile, receives ordinary treatment. The gap between reality and organizational understanding grows with every improvement.

Every successful improvement creates the conditions for future failure. That is the uncomfortable truth. When you solve a constraint, you change the system. The system now works differently. But your understanding of the system — your policies, your measurements, your priorities — is based on the old system. Close that gap, or the gap closes on you.

## How to Apply — Elevation

1. **Only after Step 2 and Step 3.** Ask yourself honestly: is the constraint producing every hour of the day? Is quality inspection before it? Is it working on the highest-throughput priority? Is the release policy tied to its consumption? Are non-constraints measured on its support rather than their own utilization? If any answer is no, you have not exploited or subordinated. Go back. Elevation is premature.

2. **Verify the throughput-per-dollar of elevation.** For each elevation option, calculate: how many additional throughput hours does this buy? What is the capex and ongoing opex? Compare against the same spend on different elevations, or on subordinating further. The answer is often not the most obvious investment.

3. **Plan for the constraint to move.** When you elevate successfully, it will. Know in advance where you think the new constraint will emerge — that is how you avoid the typical pattern of the post-elevation surprise. Most often the new constraint is further downstream, where protective capacity was thin, or elsewhere in the chain where a policy limit now shows up.

4. **Avoid over-elevation.** Do not elevate so much that you create massive excess capacity. The money was spent unnecessarily; the new constraint will be somewhere else anyway. Elevate in measured steps, then re-identify.

## How to Apply — Step 5 (Don't Let Inertia Become the Constraint)

5. **Schedule regular constraint reviews.** Monthly, quarterly. Ask: "Is our constraint still where we think it is? Have our improvement efforts moved it?" Don't assume. Verify. Look at the data — where is work piling up now? Where are expeditors going? What do people complain about now?

6. **Tie policies to constraints explicitly.** Every policy should answer: why does this policy exist? What constraint does it address? Document this. When the constraint moves, you can identify which policies are now obsolete.

7. **Sunset policies automatically.** Policies should have expiration or review dates. "This batching policy applies while Machine X is the constraint. Review when Machine X capacity increases by 20%." This forces re-examination and prevents the default of "we've always done it this way."

8. **Change measurements when constraints move.** If you were measuring Machine X utilization because Machine X was the constraint, stop measuring Machine X utilization when it is no longer the constraint. The old measurement now produces the wrong behavior. Measurements must track the current constraint, not the historical one.

9. **Celebrate letting go.** Build a culture where abandoning obsolete practices is positive, not suspicious. "We used to do this. It worked then. It doesn't apply now. We are letting go." This is harder than it sounds. People are attached to things that worked. But attachment to past success prevents future success.

10. **Recognize the meta-constraint.** The greatest constraint in most organizations is the organization's own thinking. The beliefs, assumptions, policies, and measurements formed by past experience. Physical constraints move; the mindset remains stuck. Overcoming this requires self-examination, which is why Step 5 is harder than Steps 1–4. Never say "I know."

## Examples

**Situation:** A plant has successfully exploited its milling constraint. Throughput rose 35%. Management proposes buying another mill for $800K to push further.
**Application:** Before buying, re-identify. Is the constraint still milling, or has it moved? In most cases, after a big exploitation win, it has moved. Perhaps now the constraint is assembly, or a specialized tool, or a policy limit on overtime. Elevating mill capacity in that case produces nothing. Walk the floor. Check where inventory is piling up now. Check what people are now complaining about. Decide then.
**Result:** The $800K either stays in the budget or goes where it actually produces throughput. Either is a win over buying on the old mental map.

**Situation:** A team broke a project management bottleneck by switching from padded task estimates to Critical Chain buffer management. Projects are finishing 40% faster. A year later, throughput is plateauing.
**Application:** Step 5. The old constraint was task-level padding + multitasking. That has been broken. The new constraint is now something else — perhaps resource contention at a specific senior engineer who becomes the critical chain on every project; perhaps sales' ability to feed projects at the new throughput; perhaps the intake/prioritization policy that accepts too many concurrent projects. Re-identify. Kill any Critical Chain policies that now serve the old constraint rather than the new one.
**Result:** The organization restarts the improvement loop. If Step 5 is skipped, the team plateaus and slowly decays back toward the old performance because old instincts creep back in.

**Situation:** An organization that implemented DBR (Drum-Buffer-Rope) five years ago is now experiencing rising lead times and inventory growth. The DBR "isn't working anymore."
**Application:** The drum, buffer, and rope were calibrated to the constraint as it was five years ago. The constraint has almost certainly moved in that time, and the calibration has not. Re-identify. Recalibrate. The DBR method is not broken; the application has not been maintained. Inertia has turned a great method into a bad one by persistence without re-tuning.
**Result:** Re-tuning restores performance. This pattern — great method, stopped being maintained — accounts for most "TOC doesn't work in our context" complaints.

**Situation:** After a successful improvement, the plant is measured on the old constraint's utilization in the performance review. The new constraint languishes.
**Application:** Step 5 failure. The measurements were not updated with the constraint. Managers rationally optimize the old constraint because their bonus is tied to it, even as the new constraint strangles the system. Change the measurement. The behavior will follow.
**Result:** The organization unlocks the next gain. Without this, the old measurements trap the organization in an increasingly misaligned regime.

## Anti-Patterns (tactical)

**Don't:** Elevate before exploiting.
**Why:** You will spend capital on capacity you did not need, discover the constraint has moved to a place the investment cannot help, and end up with expensive excess capacity generating no throughput. The order matters.

**Don't:** Elevate by huge increments.
**Why:** Big elevations create big excess capacity at the old constraint and move the bottleneck dramatically. Modest elevations let you re-identify between rounds and avoid over-investment. The cheap discipline is step-by-step elevation with re-identification between steps.

**Don't:** Skip Step 5 because the organization is tired after the improvement.
**Why:** This is where most improvement programs die. The big gain was the easy part. Holding the gain requires ongoing re-identification and the willingness to kill the policies that made the gain possible. Without this, you plateau — and the plateau slowly becomes a decay.

**Don't:** Treat "we know what we're doing" as evidence of competence.
**Why:** That sentence is the tell that inertia is operating. The more successful the original improvement, the more certain the organization becomes — and the more vulnerable it is to the new constraint. Hold the success tentatively. Never say "I know."

**Don't:** Keep policies that "can't hurt" when the constraint has moved.
**Why:** Dedicated maintenance on a non-constraint consumes maintenance capacity needed at the new constraint. Priority scheduling on a non-constraint confuses the scheduling of the real constraint. Old policies are not neutral; they are active misallocations once the constraint has shifted. Kill them deliberately.

Every successful improvement creates the conditions for the next failure. Step 5 is how you prevent the next failure. Don't skip it.
