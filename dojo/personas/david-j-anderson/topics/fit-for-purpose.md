---
triggers:
  - "user asks about fit for purpose"
  - "customers are dissatisfied"
  - "product or service may not match customer needs"
  - "user asks what metrics matter"
use_when:
  - "The user needs to define customer fitness criteria"
  - "The service may be reliable but not appropriate for customer purpose"
  - "Product or service segments have different expectations"
fails_when:
  - "The user treats customer purpose as a vague persona statement"
  - "No customer segment or service expectation can be named"
  - "Metrics are internal convenience metrics rather than customer fitness metrics"
related:
  - "service-delivery-principles.md"
  - "kanban-method.md"
  - "enterprise-services-planning.md"
---

# Fit for Purpose

## When to Use

- Customers are unhappy but internal metrics look fine
- The product or service works but does not satisfy the customer's real purpose
- Different customer segments value different service attributes
- Teams need fitness criteria for evolutionary improvement

## Fails When

- Customer purpose is guessed from inside the building
- The service optimizes internal metrics that customers do not care about
- One generic customer expectation is applied to all segments

## Core Concept

The Fit for Purpose Framework is a shared framework from David J. Anderson and Alexei Zheglov. It asks whether a product or service is suitable for the customer's purpose, not merely whether it is delivered efficiently.

Fitness criteria translate customer expectations into decision filters and metrics. A service may need speed, predictability, quality, availability, flexibility, low cost, or risk control depending on the segment and purpose.

Kanban improvement should move capability toward these fitness criteria. Otherwise teams can improve flow and still disappoint customers.

## How to Apply

1. **Identify the customer segment.** Do not average all customers into one expectation.
2. **Name the customer's purpose.** What job or outcome are they trying to achieve with the service?
3. **Elicit fitness criteria.** What makes the service acceptable, preferred, or unacceptable?
4. **Pick meaningful metrics.** Lead time, predictability, quality, availability, responsiveness, or other criteria tied to customer purpose.
5. **Set thresholds.** Define what level of performance counts as fit.
6. **Use gaps as change drivers.** When capability falls short of fitness criteria, that gap drives improvement.

## Examples

**Situation:** An internal analytics team says it is efficient, but business stakeholders complain.

**Application:** Segment requests. Executives may need fast directional answers; finance may need precision and auditability. Define fitness criteria by segment.

**Illustrative result:** The team stops optimizing a generic queue and starts designing service policies by customer purpose.

**Situation:** A SaaS support team tracks average response time but enterprise customers still churn.

**Application:** Ask what enterprise customers need: predictable resolution, escalation visibility, and risk communication. Add fitness criteria beyond first response.

**Illustrative result:** Improvement targets match the reason customers buy support.

## Anti-Patterns (tactical)

**Don't:** Let internal efficiency define fitness.
**Why:** A service can be internally efficient and externally unfit.

**Don't:** Use one metric for every segment.
**Why:** Different customer purposes require different service expectations.

**Don't:** Treat satisfaction as a vague feeling.
**Why:** Fitness needs observable criteria and thresholds.

**Don't:** Improve flow without checking customer purpose.
**Why:** Faster delivery of the wrong service is still failure.
