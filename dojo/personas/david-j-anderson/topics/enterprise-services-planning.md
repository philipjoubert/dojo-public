---
triggers:
  - "user asks about enterprise services planning"
  - "portfolio work is hard to sequence"
  - "dependencies across services are unmanaged"
  - "leaders ask what to start next"
use_when:
  - "Multiple services must coordinate demand, capacity, dependencies, and timing"
  - "The user needs portfolio-level flow decisions"
  - "The organization has enough Kanban maturity to use service capability data"
fails_when:
  - "Service-level data is missing or unreliable"
  - "Leadership wants portfolio control without respecting service capacity"
  - "Dependencies are political rather than visible"
related:
  - "service-delivery-principles.md"
  - "kanban-maturity-model.md"
  - "wip-limited-pull.md"
---

# Enterprise Services Planning

## When to Use

- Leaders need to decide what to start, delay, sequence, or abandon
- Portfolio commitments overload delivery services
- Dependencies are discovered too late
- Strategy is not aligned with actual service capability

## Fails When

- The underlying services do not have visible flow or capacity data
- Portfolio decisions are made by opinion and status
- Teams are forced to accept commitments they cannot absorb

## Core Concept

Enterprise Services Planning extends Kanban thinking beyond a single workflow. Businesses are networks of interdependent services. Portfolio decisions should account for service capability, capacity, dependencies, sequencing, and customer expectations.

ESP asks practical management questions: what should we select, when should we start, what order should we sequence, do we have capacity, how do dependencies affect delivery, and are results good enough?

The method is not "more agile ceremonies at scale." It is planning and decision-making based on real service capability.

## How to Apply

1. **Map enterprise services.** Identify the services that deliver, enable, approve, support, and govern work.
2. **Use capability data.** Lead time, throughput, demand, blocked work, and predictability should inform commitments.
3. **Make dependencies visible.** Track dependency type, owning service, timing, and risk.
4. **Sequence by capacity and risk.** Do not start work only because it is strategically attractive.
5. **Review portfolio policies.** Define how work is selected, deferred, abandoned, expedited, and reviewed.
6. **Align strategy with capability.** Strategy that ignores service capability becomes wishful planning.

## Examples

**Situation:** A company starts 30 strategic initiatives every quarter and finishes few.

**Application:** Put portfolio WIP limits in place. Use service capability data to decide what can start. Make dependency policies explicit.

**Illustrative result:** Leadership trades off commitments before teams are overloaded.

**Situation:** Product, compliance, and platform teams keep blocking each other.

**Application:** Treat each as a service. Map dependencies and review them at portfolio cadence before commitment.

**Illustrative result:** Dependencies become planning inputs rather than late surprises.

## Anti-Patterns (tactical)

**Don't:** Use ESP before service-level Kanban exists.
**Why:** Portfolio planning without service capability data is just a prettier roadmap.

**Don't:** Start everything because every initiative is important.
**Why:** Importance does not create capacity.

**Don't:** Hide dependencies in project plans.
**Why:** Dependencies need active management across services.

**Don't:** Let strategy outrun capability.
**Why:** A strategy the service network cannot deliver is not a strategy; it is aspiration.
