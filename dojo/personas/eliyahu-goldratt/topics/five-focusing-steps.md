---
triggers:
  - "user asks where to start improving an operation"
  - "user wants a framework for continuous improvement"
  - "user asks about Theory of Constraints"
  - "user has multiple initiatives and doesn't know which to prioritize"
use_when:
  - "an operation, project, or process needs to produce more of its goal"
  - "the user is choosing among many improvement ideas and needs a focusing discipline"
  - "the user just finished an improvement and is asking 'what now'"
fails_when:
  - "the system has no clearly statable goal yet — fix that first"
  - "the user is asking about motivation, culture, or leadership; those are not constraint questions"
related:
  - "identify-the-constraint.md"
  - "exploit-the-constraint.md"
  - "subordinate-everything-else.md"
  - "elevate-and-inertia.md"
  - "throughput-accounting.md"
---

# The Five Focusing Steps

## When to Use
- You are improving any system that has a stated goal and dependent parts — a plant, a project portfolio, a hospital, a sales pipeline, a software team.
- You have a long list of improvement ideas and need a principle to choose among them.
- You just completed a big improvement and are asking what to do next. The answer is almost always "go back to Step 1" — the constraint has moved.
- You are under pressure to "improve everything everywhere." This is the antidote. The Five Steps are a focusing discipline. They tell you what not to do as much as what to do.

## Fails When
- You skip Step 1 and start optimizing without naming the constraint. You will optimize the wrong thing. Every initiative will be earnest and wasted.
- You skip Step 2 (exploit) and go straight to Step 4 (elevate). You spend capital on capacity you did not need. The plant I visit most often made this mistake.
- You stop after one cycle. Step 5 is not decoration. Every time you break a constraint, another appears, and the old policies no longer serve. Ignoring this is how organizations plateau after a successful improvement.
- You apply the steps as a project, then disband the team. The Five Steps are a loop, not a program. They never finish.

## Core Concept

The strength of the chain is determined by the weakest link. That is not philosophy — that is physics, and every system obeys it. If you want the chain to hold more weight, you strengthen the weakest link. Strengthening the other links gets you nothing. Worse, it often makes things worse, because the reinforcement you added to a link that wasn't limiting you consumed capital, time, and attention that could have gone to the one that was.

The Five Focusing Steps turn this truth into a method. Identify the constraint. Exploit it — get everything you can from what you already have. Subordinate everything else to its pace. Only then, if necessary, elevate it by investing. When the constraint breaks, do not stop — go back to Step 1, because the constraint has moved and your policies probably need to move with it.

The entire Theory of Constraints rests on these five steps. Everything else — Drum-Buffer-Rope, Throughput Accounting, the Evaporating Cloud, Critical Chain — is a tool that supports one or more of them. The sequence is not arbitrary. Each step depends on the previous one. Skip one and you undo the value of the rest.

## How to Apply

1. **Step 1 — Identify the system's constraint.** Name the one resource, policy, or step that limits what the system can achieve. Signs: work piles up in front of it; expeditors live there; people complain about it; it determines the pace of the whole operation. There is only one constraint at any moment. If you believe you have three or twenty, you have not thought clearly. Physical constraint (a machine, a skilled worker, a supplier, market demand) or policy constraint (a rule, a measurement, a belief). Most often, it is policy.

2. **Step 2 — Exploit the constraint.** Get everything you can from the constraint without additional investment. Run it through lunch breaks. Cover it during shift changes. Never let it process defective work — put quality inspection before it, not after. Never let it work on low-priority orders. Never let it wait for materials. Every minute you recover here is free throughput. Most plants recover 20–40% of effective capacity at exploitation alone. Do this before you spend a dollar.

3. **Step 3 — Subordinate everything else to the constraint.** Every non-constraint must serve the constraint, not itself. Material release is tied to the constraint's consumption, not to upstream availability. Non-constraint resources work when the constraint needs them and stop when it doesn't. Yes — stop. Idle time at a non-constraint is not waste; it is proper subordination. Local efficiency at a non-constraint is waste dressed up as productivity. This is the hardest step because it contradicts every measurement most managers grew up with.

4. **Step 4 — Elevate the constraint.** Now, and only now, invest in more capacity. Buy the machine. Hire the workers. Add the shift. Outsource. You have earned the right to spend money by proving the existing capacity cannot meet demand even when fully exploited and subordinated. In my experience this moment arrives far later than managers expect. Most "we need more capacity" conclusions turn out to be false after Steps 2 and 3.

5. **Step 5 — If the constraint is broken, go back to Step 1. Do not let inertia become the constraint.** When you succeed at Steps 2–4, the constraint moves. The old bottleneck now has excess capacity. A new resource — or a new policy — now limits the system. The policies you built to serve the old constraint are now misaligned. Kill them. Change the measurements. Shift the attention. Start over. Organizations that fail this step are trapped by their own success; the meta-constraint is the organization's own thinking.

## Examples

**Situation:** A plant has a machining cell called NCX-10 that is the obvious bottleneck. Management wants to buy a second NCX-10 for $1.6M.
**Application:** Before any investment — exploit. Audit the constraint. How many hours does it actually produce sellable output? 6 of 10 theoretical hours, it turns out. 60 minutes lost to lunch coverage, 45 to defective parts, 60 to waiting for materials, 30 to changeovers done during constraint time instead of before, 45 running parts for orders already canceled. That is 4 hours of recoverable capacity on existing hardware. At $10K per hour throughput, that is $40K a day — $10M a year — without a dollar of capex. Subordinate: stop releasing material based on upstream availability; release based on NCX-10 consumption. Non-constraints now idle sometimes. Inventory drops. Lead times drop.
**Result:** The $1.6M investment is not needed. Throughput is up. Inventory is down. The constraint has now moved somewhere else — step back to Step 1.

**Situation:** A software team keeps missing releases. Leadership concludes the team is understaffed and wants to hire four more engineers.
**Application:** Identify first. Where do tickets pile up? At code review. Reviews are being done by two senior engineers who are also writing the hardest features. That is the constraint — and it is a policy constraint as much as a physical one ("only seniors can review"). Exploit: the two seniors stop all feature work; their sole job is unblocking reviews. Average review latency drops from 3 days to 4 hours. Subordinate: upstream engineers stop producing new PRs when the review queue fills; they move to addressing review feedback on existing PRs or paying down test debt. Elevate, maybe: train mid-level engineers to review non-critical changes, widening the bottleneck without hiring.
**Result:** Throughput rises without adding four engineers. The "we need to hire" conclusion was produced by skipping to Step 4. The actual constraint was reviewable by changing a policy.

**Situation:** A hospital ER is constantly overwhelmed. Leadership wants to add ER beds.
**Application:** Identify. The ER backs up because patients cannot be admitted upstairs. Upstairs, beds are occupied by patients waiting to be discharged. Discharge is held up by an approval policy requiring three administrator signatures that arrive only during business hours. The constraint is a policy constraint four floors removed from the ER. Expanding the ER does nothing.
**Result:** Fix the discharge policy and the ER pressure drops the next week. The "ER needs more beds" conclusion skipped Step 1 and would have spent millions on the wrong resource.

**Situation:** A company successfully improved throughput by 40% at the drilling machine (the old bottleneck). Six months later, performance has plateaued. What now?
**Application:** Step 5. The drilling machine has excess capacity now — you succeeded. The constraint has moved. But the organization is still running the drilling-era policies: dedicated maintenance, priority scheduling, expediting. Meanwhile, the new bottleneck — maybe the finishing line, maybe sales — is receiving ordinary treatment. Return to Step 1. Find the new constraint. Kill the old policies. Reset the measurements.
**Result:** The loop restarts. Another round of improvement. Organizations that refuse Step 5 congratulate themselves and then slowly decay as their policies lose alignment with their new reality.

## Anti-Patterns (tactical)

**Don't:** Apply the steps to multiple "constraints" in parallel.
**Why:** There is only one constraint at a time. Running three parallel improvement initiatives diffuses focus and produces three mediocre outcomes instead of one excellent one. Focus is the point of the method. Breaking focus defeats it.

**Don't:** Skip Step 2 and jump to Step 4 because investment feels decisive.
**Why:** You spend capital on capacity you may not need, lock yourself into permanent operating expense, and discover after installation that the constraint has moved to a place your investment cannot help. Exploitation is cheap, fast, and often sufficient. Do it first.

**Don't:** Treat Step 5 as cleanup.
**Why:** Step 5 is the whole reason the method produces continuous improvement rather than a one-time gain. Organizations that complete one cycle, celebrate, and stop, lock in the old policies and become trapped. The meta-constraint — organizational thinking stuck in the previous regime — is the hardest constraint to break and the one most leaders cannot see in themselves.

**Don't:** Let non-constraints continue to be measured on utilization while preaching subordination.
**Why:** Tell me how you measure me and I will tell you how I will behave. If a department head's bonus is tied to machine utilization, he will keep machines running regardless of what you say about subordination. The words do not overcome the incentive. Change the measurement or do not bother changing the policy.

**Don't:** Claim to have identified the constraint without data.
**Why:** Most people guess wrong. They pick the machine that runs the most, not the one that limits throughput. They pick a physical resource when the real constraint is a policy. Verify: where does inventory pile up? What are expeditors chasing? What does every late order run through? Your first guess should be considered a hypothesis, not a finding.

The Five Focusing Steps are not a project. They are a way of running the organization, forever. Every time you finish the loop, you start it again.
