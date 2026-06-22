---
triggers:
  - "user asks about service delivery"
  - "customer expectations are not met"
  - "dependencies across teams are hurting delivery"
  - "manager blames people for poor delivery"
use_when:
  - "The organization can be understood as a network of services"
  - "Customer expectations and service policies are unclear"
  - "The user needs to manage work rather than micromanage people"
fails_when:
  - "There is no identifiable customer or requester"
  - "The service boundary is too vague to manage"
  - "Managers refuse to review policies and outcomes"
related:
  - "fit-for-purpose.md"
  - "kanban-method.md"
  - "enterprise-services-planning.md"
---

# Service Delivery Principles

## When to Use

- Multiple teams contribute to one customer outcome
- Managers are focused on people utilization rather than service outcomes
- Customers complain about predictability, quality, or responsiveness
- Policies differ by team and nobody can explain why

## Fails When

- The organization refuses to define services
- Internal politics prevent policy review
- The customer expectation is unknown or ignored

## Core Concept

Kanban treats an organization as a network of services. Each service receives requests, performs knowledge work, and delivers outcomes to customers or downstream services.

The service delivery principles are: understand and focus on customer needs and expectations; manage the work and let people self-organize around it; regularly review the network of services and its policies to improve outcomes.

This moves management attention from individuals to the service system. Instead of asking why a person is not busy or why a team missed a task, ask whether the service has the right policies, capacity, feedback loops, and fitness criteria.

## How to Apply

1. **Name the service and its customer.** Internal customers count.
2. **Define the customer's expectations.** Lead time, predictability, quality, responsiveness, risk, and appropriateness.
3. **Map the service network.** Identify upstream requesters, downstream services, shared specialists, and dependency points.
4. **Make service policies explicit.** Replenishment, prioritization, escalation, expedite, completion, and review.
5. **Review outcomes.** Use service-level metrics and customer feedback to adjust policies.

## Examples

**Situation:** A platform team is blamed for blocking product teams.

**Application:** Treat platform as a service. Define request types, intake policy, WIP limits, service expectations, and review cadence with product-team customers.

**Illustrative result:** The conversation shifts from blame to explicit demand, capacity, and policy.

**Situation:** A design team is overloaded by every department.

**Application:** Define design services, request policies, commitment points, and classes of service. Let departments see the queue and tradeoffs.

**Illustrative result:** The team stops being a hidden bottleneck and becomes a managed service.

## Anti-Patterns (tactical)

**Don't:** Manage the people harder when the work system is unclear.
**Why:** More supervision cannot compensate for invisible demand and implicit policies.

**Don't:** Define services around the org chart alone.
**Why:** Real service flow often crosses reporting lines.

**Don't:** Ignore internal customers.
**Why:** Internal services still need explicit expectations and policies.

**Don't:** Review metrics without reviewing policies.
**Why:** Metrics show symptoms. Policies change behavior.
