---
triggers:
  - "user reports an operation with many problems, doesn't know where to start"
  - "user names a 'bottleneck' they want to fix"
  - "user asks what's limiting their throughput"
  - "user lists a dozen things wrong and wants priorities"
use_when:
  - "you need to find the single weakest link before prescribing any action"
  - "the user believes they have multiple constraints at once"
  - "the user has equated the noisiest problem with the real constraint"
fails_when:
  - "the system has no clear goal yet — define the goal first"
  - "the situation is genuinely about motivation or culture, not throughput"
related:
  - "five-focusing-steps.md"
  - "exploit-the-constraint.md"
  - "drum-buffer-rope.md"
  - "inherent-simplicity.md"
---

# Identify the Constraint (Find Herbie)

## When to Use
- You are about to make any improvement, investment, or scheduling decision. The constraint determines the leverage point. Everything else is motion.
- Someone on the team is describing "lots of problems everywhere." That phrasing is the tell. A system does not have twenty constraints. It has one.
- You inherited an operation and need to understand what is really limiting it. Start here, before any 90-day plan.
- Performance has decayed after a previous improvement. The constraint has probably moved and no one noticed. Re-identify.

## Fails When
- The identification was a guess dressed up as a finding. Gut feel on which machine is "always broken" is often wrong. Verify.
- The physical symptom (big pile of work in front of Machine A) is mistaken for the constraint (the policy releasing too much material into the system). Buying a second Machine A in that case does nothing but move the pile to Machine B.
- Attention gets distributed. If after this exercise you still have five "constraints" and three parallel initiatives, you have not identified — you have triaged.

## Core Concept

A constraint is any factor that limits a system from achieving more of its goal. Read that carefully. It limits the *system* — not one department. And there is exactly one of them at any moment. This is not a preference. A chain has a weakest link. If two links were equally weak, the tiniest fluctuation would make one weaker — and that one is the constraint. Two equal constraints do not coexist in practice.

Most managers do not know where their constraint is. They look at efficiency reports. They see one machine at 75% utilization and another at 98%. They worry about the 75% machine. They should be worshipping the 98% machine — that is their bottleneck. Every hour lost at the bottleneck is an hour lost for the entire system. Every hour saved at a non-bottleneck is a mirage. Once you accept this, the whole organization looks different.

Constraints come in two forms. **Physical constraints** are tangible — a machine whose capacity is less than demand, a skilled worker who is overloaded, a supplier who cannot deliver quickly enough, a market that will not buy more. **Policy constraints** are rules, procedures, or beliefs that limit performance — a batch-size rule, a measurement system rewarding the wrong behavior, an approval process, "we've always done it this way." Policy constraints are more common than physical constraints. They are also harder to see because they feel like facts rather than choices. Removing a policy often makes an apparent physical bottleneck disappear entirely.

The Boy Scout hike is the canonical teaching image. Alex Rogo watches the line of boys stretch out across a mile of trail. The fastest boys race ahead. Herbie — the slowest — falls further behind. The gaps only grow; they never shrink. Why? Dependent events and statistical fluctuations. Each boy's pace fluctuates. In isolation the fluctuations would average out. But the boys are in a line — dependent. The boy behind cannot pass. The boy in front cannot hand back time. Fluctuations don't cancel. They accumulate, in one direction only: toward lateness.

This is your factory. Your project. Your supply chain. The slowest element determines the pace of the whole. Find Herbie. Put Herbie at the front. Distribute Herbie's load among the faster boys. The troop moves together and arrives before dark. Ignore Herbie and run the front boys at maximum speed and the troop is spread over a mile with nobody reaching the destination.

## How to Apply

1. **Start from the goal and ask: what is preventing us from generating more of it?** Not "what are all our problems." THE constraint. One answer. If your answer is "many things," you have not thought clearly enough. Go deeper.

2. **Follow the symptoms to their source.** Where does work pile up? Where are queues longest? Where do people wait? Where do expeditors live? Where do late orders always run through? These physical traces point to the constraint with high reliability. Inventory in front of it is a physical fingerprint. Inventory is not wealth — it is a signpost.

3. **Talk to the expeditors and supervisors.** They know. "Talk to the expeditors. They could probably tell us which parts they're missing most of the time. The department where the expeditors go to look for them is probably where we'll find our Herbie." Institutional knowledge beats your data warehouse here, especially if your data warehouse is measuring the wrong things.

4. **Distinguish physical from policy.** Ask: "If we removed all policies, measurements, and procedures — if people could do whatever they thought was right — would this constraint still exist?" If yes, physical. If no, policy. If policy, buying more capacity will not help you. You will be treating a symptom while the disease spreads.

5. **Watch for the hidden constraint.** A mountain of work-in-process in front of Machine A does not mean Machine A is the constraint. The mountain may be there because a release policy floods the floor with work regardless of what Machine A can process. Buy a second Machine A and the pile will simply reappear at Machine B. The real constraint was the release policy, four steps upstream.

6. **Ask the leverage question.** "If you could have one more hour of capacity anywhere in your system — one more hour that would directly increase throughput — where would you put it?" If someone can answer with one resource, you have found the constraint. If they say "it depends" or "we need more everywhere," they are managing chaos, not the system.

7. **Verify, don't guess.** Run the numbers. For each major resource, compare capacity to demand. The constraint has capacity less than or equal to demand. Others have excess. Your data will be imperfect; use the pile method and the expeditor method and the calculation method together — they are more reliable than any single approach.

## Examples

**Situation:** A plant has three machining operations in sequence: A feeds B feeds C. C has the lowest rated capacity. Management is worried about C.
**Application:** Verify. Walk the floor. Where is the work-in-process? If the pile is in front of C, the identification is confirmed. If the pile is between A and B, or scattered everywhere, the constraint is probably not C — it is the release policy, or it is a policy that forces A to batch in ways B cannot absorb.
**Result:** In the classic Goldratt story, the pile turns out to be everywhere, because management has been measuring every machine on utilization and releasing material at maximum upstream rate. Fix the release policy and the pile moves — visibly — to a single place, which is the real constraint.

**Situation:** A software team has "slow delivery," "flaky tests," "too much tech debt," "unclear requirements," and "not enough engineers."
**Application:** Refuse the list. What is the single resource or policy most limiting shipped features? Trace: PRs are merged slowly because reviews sit. Reviews sit because two senior engineers do them all. Why only two seniors? Policy — "non-seniors can't approve." The constraint is a policy hidden inside a hiring frame. Adding engineers makes it worse; more PRs pile up in the same review queue.
**Result:** Naming the single constraint focuses every subsequent decision. Tech debt, flakiness, and requirement quality are real issues, but they are not limiting throughput today. Fixing them before fixing the review constraint is improvement effort wasted at non-constraints.

**Situation:** A hospital ER is backed up. Everyone wants to expand ER capacity.
**Application:** Where are patients actually waiting, and why? They are waiting in the ER for admission to a bed upstairs. Upstairs beds are held by patients waiting for discharge. Discharge is delayed by an approval policy requiring three signatures during business hours only. The constraint is a policy four floors removed from the symptom.
**Result:** Expand the ER and nothing changes. Fix the discharge policy and the ER pressure drops within a week. This is why you never act on the visible symptom before tracing cause and effect.

**Situation:** A manufacturer's Boy Scout hike — every hour, every day.
**Application:** The plant has ten workstations. Each has normal fluctuation. Each depends on the one before it. Management has been told that balanced capacity is ideal and has trimmed each station to exactly match demand. Why is the plant always late despite 95% efficiency everywhere? Because 0.95 to the power of 10 is 0.60. With twenty stations in sequence, 0.36. Fluctuations compound forward. The constraint exists by virtue of the statistical accumulation alone — even on a "balanced" plant, one station will always be the effective bottleneck for any given period, and it will starve downstream of work while upstream piles up.
**Result:** A "balanced plant" is not the goal. Protective capacity at non-constraints is not waste; it is what allows the constraint to actually be the only thing limiting you. The closer a plant comes to balanced capacity, the closer it comes to bankruptcy.

## Anti-Patterns (tactical)

**Don't:** Identify multiple constraints and run parallel programs.
**Why:** There is one at a time. Two equal constraints would immediately become one-equal-and-one-slightly-looser at the first fluctuation. If your analysis says three or five or ten, it is a triage list, not a constraint analysis. Go deeper until one emerges.

**Don't:** Equate "noisiest problem" with "real constraint."
**Why:** The squeaky wheel is often downstream of the actual bottleneck. It is loud because it is starved. The real constraint may be quietly running at 98% utilization while nobody complains. Look at the traces — inventory, expediting, waiting — not at the complaint volume.

**Don't:** Skip the physical/policy diagnostic.
**Why:** Physical constraints take capital to elevate. Policy constraints take courage. Most of the time you need the second, not the first, and most of the time managers propose the first because it is more comfortable and requires less internal conflict. If you propose buying hardware without having checked for a policy constraint, you are almost certainly wrong.

**Don't:** Declare the constraint found and move on.
**Why:** Step 5 exists because the constraint moves every time you improve it. The identification is fresh for a while, then stales. Re-identify regularly. If a new bottleneck has emerged and your organizational attention has not moved, you are running the old regime against a new reality.

**Don't:** Accept "it depends" as an answer to the leverage question.
**Why:** "It depends" is what managers say when they have not thought clearly. Push. If they can't say where one more hour of capacity would directly produce more throughput, they do not understand the system yet. Their answer, once given, is your working identification.

Find Herbie. Everything else in the Theory of Constraints is what you do once you've found him.
