---
triggers:
  - "too much work in progress"
  - "everything is urgent"
  - "team starts work but does not finish"
  - "user asks about WIP limits or pull systems"
use_when:
  - "Work is entering faster than the system can finish"
  - "Queues, delays, and context switching are high"
  - "The user needs to expose bottlenecks and manage commitments"
fails_when:
  - "Leadership will override limits without discussion"
  - "The workflow is not visible enough to place limits"
  - "The team treats limits as personal productivity targets"
related:
  - "kanban-method.md"
  - "service-delivery-principles.md"
  - "enterprise-services-planning.md"
---

# WIP-Limited Pull Systems

## When to Use

- Work starts faster than it finishes
- Aging work piles up in the middle of the process
- People are busy but throughput is weak
- Managers keep asking for faster delivery while adding more work

## Fails When

- WIP limits are set and ignored
- Work is too poorly categorized to limit meaningfully
- Limits are used to punish people instead of manage flow

## Core Concept

A WIP-limited pull system limits how much work can be in progress at one time. New work is pulled only when capacity is available. This turns capacity from a hidden assumption into an explicit operating policy.

The purpose is not to make people idle. The purpose is to improve flow. High utilization creates queues. Queues create delay. Delay creates broken promises. A pull system makes overcommitment visible before it becomes failure.

WIP limits also expose system problems. If work cannot move, something is blocking flow: unclear policy, missing dependency, poor quality, overloaded specialist, or premature commitment.

## How to Apply

1. **Visualize the workflow first.** You cannot limit what you cannot see.
2. **Count current WIP.** Include work waiting for review, blocked work, rework, and hidden side tasks.
3. **Set initial limits.** Start slightly below current overload, not at an ideal future state.
4. **Define pull rules.** When can work enter? Who pulls it? What must be true before it moves?
5. **Make exceptions explicit.** Expedite work needs a policy, not a manager's whisper.
6. **Review aging and blocked work.** Use the limit to force attention to stuck work.

## Examples

**Situation:** A product team has 40 active tickets and ships a few per month.

**Application:** Limit active development and review. Stop starting new features until existing work moves. Create a blocked-work lane and review it daily.

**Illustrative result:** The team sees that review and dependency waits, not coding speed, are the real constraint.

**Situation:** Executives keep adding "just one more priority."

**Application:** Put a WIP limit on committed portfolio work. New work can enter only when something finishes or leadership explicitly abandons an existing commitment.

**Illustrative result:** Priority becomes a tradeoff instead of an infinite list.

## Anti-Patterns (tactical)

**Don't:** Set WIP limits so high they never constrain behavior.
**Why:** A limit that never binds is decoration.

**Don't:** Set WIP limits so low that the organization panics.
**Why:** The first limit should create conversation, not paralysis.

**Don't:** Break the limit silently.
**Why:** The discussion is the point. Silent exceptions destroy learning.

**Don't:** Treat WIP limits as individual quotas.
**Why:** The unit is the service system, not the worker.
