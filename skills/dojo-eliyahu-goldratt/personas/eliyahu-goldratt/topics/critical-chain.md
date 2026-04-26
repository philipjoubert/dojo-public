---
triggers:
  - "user complains about projects always running late"
  - "user mentions padded estimates, multitasking, or 90%-complete projects"
  - "user asks about project management methodology"
  - "user wants to apply constraint thinking to projects"
use_when:
  - "an organization's projects finish on time less than 50% of the time"
  - "resources are spread across many concurrent projects"
  - "project managers defend their padding and still deliver late"
fails_when:
  - "the organization refuses to change task-level measurements"
  - "there is no single prioritization authority; projects get started freely"
related:
  - "five-focusing-steps.md"
  - "subordinate-everything-else.md"
  - "people-are-not-stupid.md"
  - "the-goal-and-measurements.md"
---

# Critical Chain Project Management

## When to Use
- Projects consistently finish late despite padded task estimates.
- Resources are working on three or four projects at once and feeling the grind.
- Managers complain about "scope creep" or "unexpected problems," and neither explanation actually survives scrutiny.
- The organization wants to compress project durations and reduce the chronic stress and heroics.

## Fails When
- Task-level deadlines stay in place alongside the new buffer management. Critical Chain without removing task-deadline punishment does not work; people will continue to pad and hide.
- There is no mechanism to limit concurrent projects. Critical Chain within a project will not rescue an organization overloaded with too many parallel projects.
- Senior sponsors do not commit to protecting resources from multitasking. The single most important cultural change is "one task at a time on the critical chain," and it requires visible, enforced backing.

## Core Concept

How many projects in your organization finish on time? Between 10% and 30%, in most organizations. Now: when people estimate task durations, do they pad? Yes — they give 80–90% confidence estimates, roughly doubling the median. So we have conservative estimates throughout every task, and projects still finish late. How?

Three mechanisms explain it completely, and they are the reason Critical Chain exists.

**Student Syndrome.** A task is estimated at ten days. When does work begin? Not day one. The resource sees plenty of time, works on other urgent things, and starts in earnest only when the deadline looms. If a problem arises in the final week, there is no buffer left — the buffer was consumed by procrastination.

**Parkinson's Law.** Work expands to fill the time available. If a task is estimated at ten days and the worker finishes in six, they will rarely report early — "if I report early, they'll cut my estimates next time" — and they will almost always slow down or polish until the full ten days are used. Early finishes don't exist; late finishes do. Asymmetric game. Only lose.

**Bad multitasking.** Organizations start all project paths as early as possible. A resource ends up on three tasks. They switch between them trying to be responsive. A task that would take ten days of focused work now takes thirty days — same work content, triple the elapsed time, plus pure waste in context-switching.

All three mechanisms consume the padded safety before real problems arrive. The safety exists on paper but not in reality. Projects arrive at their deadlines having consumed the buffer through procrastination, dilution, and context-switching, and then real problems show up with no safety left.

The Critical Chain solution follows directly:

1. **Aggressive task estimates.** Use median (50% confidence) estimates, roughly half the typical padded numbers. This defeats Student Syndrome — there is no cushion to justify delay.
2. **Aggregated buffers, not task-level padding.** Remove the safety from individual tasks; place it in project-level and feeding-path buffers.
3. **Buffer management, not deadline management.** Track how much of the project buffer has been consumed relative to how much of the critical chain has been completed. That is how you know the project's health — not by individual task status.
4. **No bad multitasking.** Resources work one critical-chain task at a time, start to finish. Other paths wait.
5. **The Critical Chain, not the Critical Path.** Account for resource dependencies as well as task dependencies. A chain of tasks that share a resource creates a dependency even if the deliverables are independent.

## How to Apply

1. **Identify the Critical Chain.** Map the project as a network of tasks. Include both task dependencies (A must finish before B can start) and resource dependencies (same person must do A and B, so they cannot be parallel). The longest path through this network is the Critical Chain. It is always equal to or longer than the Critical Path, and usually longer.

2. **Get aggressive estimates.** 50% probability of completion. Roughly half the typical 80–90% estimate. Tell estimators: "We are not punishing you for missing at the task level. We are aggregating safety at the project level."

3. **Build the project buffer at the end of the Critical Chain.** Size it at roughly 50% of the chain duration. If the chain is 100 days, the project buffer is 50 days — placed at the end, protecting the project completion date.

4. **Build feeding buffers.** Wherever a non-critical path joins the Critical Chain, insert a buffer. This protects the Critical Chain from delays in feeding paths. Size it at maybe 50% of the feeding path's duration.

5. **Install resource buffers (alerts).** These are not time buffers. They are signals to critical-chain resources: "your task is coming up in N days; be ready." Prevents the common scenario where a critical-chain task is ready to start but the resource is buried in another project.

6. **Enforce single-tasking on the Critical Chain.** A resource working on a critical-chain task does not get pulled onto other work. Other projects wait. Yes, wait. The organization must commit to this at the senior level; otherwise, the old multitasking pattern reasserts itself.

7. **Manage by buffer consumption, not task status.** If the Critical Chain is 60% complete, how much of the project buffer has been consumed? Less than 60% → green. Around 60% → yellow, prepare recovery. Above 60% → red, act now. Do not ask "are you on schedule?" at the task level. Task-level deadlines are gone; chain-level health is what matters.

8. **Limit concurrent projects at the portfolio level.** This is upstream of any single-project improvement. If the organization starts too many projects in parallel, no methodology saves you. Cap concurrent projects at a level that allows real single-tasking on critical chains.

## Examples

**Situation:** A software company starts 12 projects per quarter, each estimated at 8 weeks, each finishing in 16–20 weeks. Developers have 3–4 active tasks at any time.
**Application:** Cut concurrent projects from 12 to 4. Re-estimate tasks at 50% confidence (half of the old estimates). Aggregate the removed safety into a project buffer at the end of each project. Assign each developer to one critical-chain task at a time. Manage via buffer consumption — daily. Kill the "percentage time utilized" metric; measure throughput of completed projects.
**Result:** Projects that were shipping in 20 weeks now ship in 10–12. Throughput of completed projects doubles. Developers stop feeling scattered. The "we need more engineers" argument evaporates; the problem was never capacity, it was multitasking-induced capacity destruction.

**Situation:** A plant build-out project is padded: every subcontractor quoted their 90% estimate. Total project estimate: 18 months. Cost of delay: $5M per month in deferred revenue.
**Application:** Re-estimate each subcontract at 50% confidence. Sum: ~9 months of work. Build a project buffer of ~4.5 months (50% of the chain). Total predicted duration: ~13.5 months. Cut multitasking — assign subcontractors to the critical chain without fragmenting their teams across other sites. Manage the buffer.
**Result:** The project finishes in 13 months. Five months of extra revenue capture — $25M — is unlocked by the method. The "we can't shorten it, we're already aggressive" protest the subcontractors gave at the start was the pad defending itself.

**Situation:** A sales team's pipeline is managed like a project. Deals sit in stages for weeks because reps work on many deals at once.
**Application:** Treat the sales process as a project with a Critical Chain per deal. Aggressive estimates for stage durations. Limit each rep to one active critical-chain deal per customer segment; other deals queue. Measure buffer consumption at the deal level, not "activity per rep."
**Result:** Deal velocity rises. Fewer deals stuck. The reps who were "busy with 20 deals" are now productive with 8. Throughput of closed deals goes up, not down.

**Situation:** A project manager insists her 90% confidence estimates are necessary. "If you force me to 50%, we'll miss all the deadlines."
**Application:** Explain the physics. At 50% confidence, yes, individual tasks will miss half the time. That's what 50% means. But the aggregate safety — the project buffer — will cover the variance because statistical fluctuation partly cancels across a chain. We are not punishing task misses; we are measuring buffer health. At 90% per task, safety is consumed by Student Syndrome and multitasking before the real problems arrive. At 50% + aggregated buffer, safety is where it can actually protect the project.
**Result:** After the first project, the project manager sees it work. Resistance collapses. The "necessary" padding was never necessary; it was a defense against a measurement regime that punished task-level misses. Change the regime and the padding goes away by itself.

## Anti-Patterns (tactical)

**Don't:** Keep task-level deadlines alongside the project buffer.
**Why:** If people are still judged on individual task dates, they will still pad, and the buffer becomes a pad on top of a pad. Task-level deadlines must disappear; chain-level health replaces them.

**Don't:** Allow multitasking "just this once."
**Why:** The exception becomes the rule. Multitasking destroys capacity; allowing it on critical-chain resources undoes the method. Senior leadership has to back single-tasking publicly and visibly.

**Don't:** Start projects without capacity on the Critical Chain.
**Why:** Starting more projects than you have critical-chain capacity for is how you got here. Portfolio discipline is the upstream fix; no amount of Critical Chain inside a single project saves an overloaded portfolio.

**Don't:** Forecast buffer consumption; measure it.
**Why:** The buffer is the measurement. Don't replace it with stories about "are we on schedule?" The buffer tells the truth: it is either being consumed faster or slower than the chain is completing. The answer is numeric, not narrative.

**Don't:** Optimize budget while ignoring schedule.
**Why:** Companies obsess over saving 5% on machines for a project that generates $10M/year when it completes. Six months of delay to save $500K destroys $5M of throughput. The financial penalty of delaying the income from a completed project almost always dwarfs everything else. If your measurement framework rewards budget optimization, you will get budget optimization and delayed revenue. Change the measurement.

Projects are not late because estimates are too short. Projects are late because safety is distributed, diluted, and consumed before it is needed. Aggregate the safety. Kill the multitasking. Manage the buffer. The chain shortens.
