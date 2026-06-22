---
triggers:
  - "user asks what Kanban is"
  - "user has a Kanban board but poor delivery"
  - "user wants to improve knowledge work flow"
  - "user asks whether Kanban is a methodology or framework"
use_when:
  - "The user needs the whole Kanban Method, not just one practice"
  - "The user confuses Kanban with visual task tracking"
  - "The user wants to manage service delivery without replacing their process"
fails_when:
  - "The user wants a full replacement process with prescribed roles and ceremonies"
  - "The user has not identified the service or workflow being managed"
  - "The user wants status visibility but refuses WIP limits or policy changes"
related:
  - "evolutionary-change.md"
  - "wip-limited-pull.md"
  - "service-delivery-principles.md"
  - "statik.md"
---

# Kanban Method

## When to Use

- Work is invisible, overloaded, or unpredictable
- A team has a board but still misses commitments
- Managers want better flow without forcing a new methodology onto the organization
- The service exists, but policies, priorities, and customer expectations are implicit

## Fails When

- Kanban is reduced to columns and tickets
- The organization wants control theater rather than flow control
- Managers keep pushing work into a full system
- There is no service boundary or workflow to visualize

## Core Concept

The Kanban Method is a management method for improving service delivery in knowledge work. It is applied on top of the current way of working. It does not begin by replacing roles, job titles, process names, or organizational identity.

The method works because it makes the system visible and then creates evolutionary pressure. Visualize work and workflow. Limit work in progress. Manage flow. Make policies explicit. Implement feedback loops. Improve collaboratively and evolve experimentally.

The board is not the method. The board is a surface where the method becomes visible. If the board has no WIP limits, no pull criteria, no explicit policies, and no feedback loops, it is only visualization. Useful, but incomplete.

## How to Apply

1. **Name the service.** Who requests work? Who receives the result? What promise does the service make?
2. **Visualize the real workflow.** Map work from request to delivery as it actually happens, including queues, waiting states, rework, blocked states, and handoffs.
3. **Add WIP limits.** Start with limits that force useful conversations without causing panic.
4. **Make policies explicit.** Define how work enters, moves, is paused, is expedited, is blocked, and is considered done.
5. **Install feedback loops.** Hold replenishment, delivery, flow, operations, and strategy reviews at the right level of the service.
6. **Improve experimentally.** Change one thing, watch capability, and keep changes that improve fitness for purpose.

## Examples

**Situation:** A software team says it uses Kanban because it has columns for Backlog, Doing, Review, and Done.

**Application:** Add a WIP limit to Doing and Review. Define pull criteria. Make blocked work visible. Hold a weekly flow review looking at lead time, blocked time, and aging work.

**Illustrative result:** The team stops treating the board as reporting and starts using it as a management system.

**Situation:** A service desk has constant escalations and no predictability.

**Application:** Define request types, visualize queues, add WIP limits by work type, define expedite policy, and review demand versus capacity weekly.

**Illustrative result:** Escalation becomes an explicit class of service instead of a daily political fight.

## Anti-Patterns (tactical)

**Don't:** Install a generic board copied from another team.
**Why:** The workflow must reflect the service. A copied board hides the real constraints.

**Don't:** Use Kanban as status reporting for management.
**Why:** Status reporting shows what happened. Kanban should change what the system does next.

**Don't:** Add WIP limits and then let managers override them silently.
**Why:** The limit is a policy. Breaking it without discussion destroys the signal.

**Don't:** Treat adoption as success.
**Why:** Success is better service delivery, not use of the vocabulary.
