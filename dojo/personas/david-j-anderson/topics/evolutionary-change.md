---
triggers:
  - "user wants to change process without resistance"
  - "user asks how to roll out Kanban"
  - "user is planning an agile transformation"
  - "team resists a new process"
use_when:
  - "The organization has a working process but poor outcomes"
  - "The cost of big-bang change is high"
  - "People's roles, identity, or status would be threatened by replacement"
fails_when:
  - "The current process is unsafe, illegal, or in immediate collapse"
  - "Leadership wants instant conformance more than durable improvement"
  - "The user cannot tolerate measured experiments"
related:
  - "kanban-method.md"
  - "kanban-maturity-model.md"
  - "statik.md"
---

# Evolutionary Change

## When to Use

- A process change is needed, but people are already resistant
- The organization tried a transformation and produced overhead
- Leadership wants better outcomes without renaming every role
- Teams have local knowledge that a central process designer does not understand

## Fails When

- The organization needs emergency containment
- Executives want a symbolic transformation more than improved capability
- The change team cannot measure whether a change improved service delivery

## Core Concept

Evolutionary change starts with what the organization does now. It respects current roles, responsibilities, and identities because resistance is often social and psychological, not merely rational.

The approach is not passive. It installs mechanisms that make problems visible: WIP limits, policies, feedback loops, flow metrics, and customer fitness criteria. Then the organization changes in response to evidence.

This is directed evolution. A change is a hypothesis. If it improves capability toward the desired fitness criteria, keep and amplify it. If it damages capability, roll back or roll forward.

## How to Apply

1. **Describe the current system without judgment.** Capture the process as practiced, not as documented.
2. **Preserve identity where possible.** Avoid role renaming and reorganizing as the first move.
3. **Define the desired fitness.** What customer expectation or service capability should improve?
4. **Install the smallest useful mechanism.** Visualization, a WIP limit, an explicit policy, or a feedback loop.
5. **Run the experiment.** Watch the effect on lead time, predictability, blocked work, quality, or customer satisfaction.
6. **Amplify or adjust.** Keep useful changes and discard changes that reduce capability.

## Examples

**Situation:** A company wants to impose a new agile operating model on 20 teams.

**Application:** Start by mapping the services and visualizing demand. Preserve team identities. Add service-level WIP limits and replenishment policies before changing roles.

**Illustrative result:** Resistance is lower because the change improves the current system instead of declaring it obsolete.

**Situation:** A support group has chronic overload.

**Application:** Do not begin with a reorg. Visualize ticket types, blocked states, and demand. Add WIP limits and define the policy for urgent work.

**Illustrative result:** The group can see the overload and negotiate demand instead of blaming each other.

## Anti-Patterns (tactical)

**Don't:** Announce a future-state process and force migration.
**Why:** In knowledge work, the current system contains tacit knowledge that the designed process usually misses.

**Don't:** Confuse slow with weak.
**Why:** Evolutionary change can create durable improvement because it avoids unnecessary resistance.

**Don't:** Run experiments without a fitness criterion.
**Why:** Without a target capability, every change becomes opinion.

**Don't:** Protect every current practice forever.
**Why:** "Start with what you do now" is the beginning, not the destination.
