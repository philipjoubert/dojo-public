---
triggers:
  - "user asks how to introduce Kanban"
  - "user wants to design a Kanban system"
  - "user needs to map demand and workflow"
  - "user mentions STATIK"
use_when:
  - "The user has a specific service and needs an initial Kanban system design"
  - "Current workflow, demand, and policies are unclear"
  - "The user wants a collaborative implementation approach"
fails_when:
  - "The service boundary is not known"
  - "The user wants to copy a generic board"
  - "Stakeholders cannot participate in understanding demand and workflow"
related:
  - "kanban-method.md"
  - "service-delivery-principles.md"
  - "wip-limited-pull.md"
---

# STATIK

## When to Use

- A team wants to introduce Kanban thoughtfully
- You need to design the board and policies around real demand
- Stakeholders disagree about what the workflow actually is
- Existing work types, risks, and expectations are hidden

## Fails When

- The workshop is treated as board design only
- The team copies another service's workflow
- Demand, capability, and customer expectations are skipped

## Core Concept

STATIK is the Systems Thinking Approach to Introducing Kanban. It designs a Kanban system from the service outward: purpose, demand, capability, workflow, policies, and visualization.

The point is not to make a board. The point is to understand the service well enough that the board, WIP limits, policies, and feedback loops reflect reality.

STATIK is collaborative because the current system is distributed across people's heads. The people doing the work know the exceptions, queues, hidden policies, and recurring failure modes.

## How to Apply

1. **Identify the service.** Who is served and what outcome is expected?
2. **Analyze sources of dissatisfaction.** What do customers and stakeholders complain about?
3. **Study demand.** What types of work arrive, how often, with what urgency and risk?
4. **Analyze capability.** What lead times, quality patterns, and predictability does the current system demonstrate?
5. **Model the workflow.** Show the real knowledge-discovery steps, queues, and handoffs.
6. **Design policies and limits.** Define commitment, pull, WIP, classes of service, and completion.
7. **Build feedback loops.** Decide which reviews will keep the system evolving.

## Examples

**Situation:** A data team wants a Kanban board.

**Application:** Use STATIK first. Identify request types: ad hoc analysis, dashboards, data fixes, experiments. Map each workflow and define commitment criteria.

**Illustrative result:** The team gets a system that reflects real demand instead of a generic To Do / Doing / Done board.

**Situation:** A marketing team has invisible dependency work.

**Application:** Analyze demand and workflow across copy, design, legal, analytics, and launch. Make waiting states explicit.

**Illustrative result:** The board shows the actual constraint, not just the department that happens to own the ticket.

## Anti-Patterns (tactical)

**Don't:** Start by drawing columns.
**Why:** Columns without demand and capability analysis are guesses.

**Don't:** Ignore dissatisfaction.
**Why:** Dissatisfaction reveals which service expectations matter.

**Don't:** Design alone as the manager.
**Why:** The hidden system lives in the people doing the work.

**Don't:** Treat the first design as final.
**Why:** The first design is a hypothesis; feedback loops evolve it.
