---
triggers:
  - "user describes a chronic conflict or trade-off"
  - "user proposes a compromise between two positions"
  - "user says 'we need to balance X and Y'"
  - "user has two options both of which seem necessary and mutually exclusive"
use_when:
  - "two positions appear contradictory and the default answer is to split the difference"
  - "a persistent political fight is consuming energy"
  - "a business trade-off is accepted as inherent without interrogation"
fails_when:
  - "the conflict is genuinely zero-sum and no hidden assumption exists (rare, but real)"
  - "the parties are not willing to examine their assumptions"
related:
  - "every-conflict-can-be-removed.md"
  - "people-are-not-stupid.md"
  - "reality-trees.md"
  - "inherent-simplicity.md"
---

# The Evaporating Cloud

## When to Use
- A decision has been framed as "X or Y" and everyone is arguing over how much of each to accept.
- A compromise is about to be adopted. Compromises are lose-lose dressed up as wisdom; surface the assumption before agreeing.
- Two departments or stakeholders have been fighting for years and the conflict is being treated as inherent ("that's just how Sales and Finance are").
- A negotiation has stalled. The positions seem irreconcilable. Compromise is being proposed. Stop — and rebuild the problem.

## Fails When
- The parties refuse to examine their assumptions. The Cloud requires willingness to ask "why do I believe this is necessary?" and accept that the answer may be false. Without that willingness, the tool fails.
- The conflict is truly physical and zero-sum at the relevant level — I cannot have two people in one chair. Even here, step up one level: a different chair, a different arrangement, a different time. Physical zero-sum is rarer than it appears.
- The Cloud is used to appear thoughtful without actually challenging the assumption. Drawing the diagram and walking away is worse than nothing.

## Core Concept

Every organization is paralyzed by conflicts. Quality vs speed. Centralize vs decentralize. Cost-cutting vs growth. Low inventory vs reliable delivery. Department A vs Department B. The traditional approach is compromise: give each side a little of what they want, make everyone equally unhappy. This is intellectual laziness disguised as wisdom.

Every conflict can be removed. Not managed. Not compromised. Removed. When I say this, people think I'm naive. They've spent careers learning to "balance" competing priorities. They've internalized the belief that tough choices require painful trade-offs. But consider: if a conflict truly had no resolution, we'd call it a law of physics, not a management problem. The existence of a persistent conflict means there are underlying assumptions that, if examined, will reveal a path forward.

The Evaporating Cloud is the tool for that examination. The structure is simple. Every conflict has the same anatomy: a common objective, two needs that serve the objective, two actions that fulfill the needs but appear to contradict each other. Between each need and its action, there is an assumption. That assumption is often invisible — it feels like a fact. It is not. It is an assumption. And assumptions can be wrong.

```
              [Common Objective]
                    / \
                   /   \
          [Need A]       [Need B]
                \         /
                 \       /
          [Want A] <-> [Want B]  (conflict)
```

Find the common objective. Find the two needs. Find the two wants that are in conflict. Find the assumptions between needs and wants. Challenge each assumption. The one that is false — and there is usually one — is your injection: the action that breaks the assumption and dissolves the conflict. Neither party compromises. Both needs are fully met. The conflict, which was never really about physics, evaporates.

## How to Apply

1. **State both opposing positions clearly, in their starkest form.** "We must do X" versus "We must do Y." Do not soften. The clarity of the conflict is the starting material.

2. **For each position, find the legitimate need behind it.** Why does side A want X? Not "to win the argument" — what outcome are they trying to achieve? Both sides have real needs. That is why the conflict persists.

3. **Find the common objective.** Both needs serve something higher. For two departments fighting, it is usually the success of the organization. For two spouses arguing about money, it is usually the health of the family. State this explicitly; it is often the first time the parties notice they actually agree at this level.

4. **Draw the cloud.** Common objective at top. Needs on either side. Wants (positions) at bottom, with the arrow showing conflict. The diagram is not decoration; it forces explicit statement of the structure.

5. **Surface the assumptions under every arrow.** Ask: "What must I assume for this to be valid?" For the arrow from Need A to Want A: what must be true for "ensuring safety" to require "home by 10 PM"? For the arrow from Need B to Want B: what must be true for "social acceptance" to require "home at midnight"? Write them down. Every one. Even the obvious ones.

6. **Challenge each assumption. Hard.** Is it always true? Is it necessarily true? Under what conditions would it be false? What action — an injection — could make it false? The assumption that looks dumbest when written down is often the correct target.

7. **Design the injection.** The injection is the action that breaks an assumption and dissolves the conflict. Not a compromise — a change in reality that makes both needs achievable. If "ensuring safety requires being home by 10" rested on "we can't know they're safe after 10 unless they're home," the injection is a check-in protocol that lets the parent verify safety at midnight. Both needs met. No compromise.

8. **Validate.** If the injection works, the parties should both say "yes, that meets my need" — not "well, I can live with that." If someone is still unhappy, you have not found the real assumption yet. Keep digging.

## Examples

**Situation:** Manufacturing company. Operations wants large inventories to protect delivery reliability. Finance wants small inventories to protect cash flow.
**Application:** Common objective: successful, sustainable business. Need A (operations): reliable delivery to customers. Need B (finance): financial efficiency. Want A: large inventories. Want B: small inventories. Assumptions under A→A: supplier lead times are long and variable; demand is unpredictable; we cannot ensure availability without stock. Assumptions under B→B: inventory ties up cash; it becomes obsolete; carrying costs are real. Challenge: is "supplier lead times are long and variable" necessarily true? What if you renegotiated supplier relationships — smaller, more frequent deliveries? What if you added a replenishment-based ordering system tied to actual consumption? Suddenly small inventory can deliver reliably.
**Result:** The conflict evaporates. Inventory drops (Finance wins); on-time delivery improves (Operations wins); cash freed up (company wins). No compromise. The "trade-off" was an assumption, not physics.

**Situation:** Sales wants aggressive discounting to hit volume targets; Finance wants to hold prices to protect margins.
**Application:** Common objective: profitable growth. Need A (sales): meet customer demand, win deals. Need B (finance): protect profitability. Assumptions under sales→discounts: customers buy primarily on price; without discounts we cannot win. Challenge: is that true for every customer? Investigate. It turns out some customers will pay premium for faster delivery, better support, or customization — if offered. The injection: create value-added services at premium prices; compete on those rather than on discount. Don't discount the premium offering; compete differently in the basic segment.
**Result:** Sales meets volume targets without destroying margins. Finance keeps profitability. Neither compromised. The assumption "customers buy on price" was partially false, and surfacing it opened a new segment.

**Situation:** Startup CEO wants to ship the product fast; CTO wants to do it right. Classic "speed vs quality" debate.
**Application:** Common objective: successful product. Need A (CEO): capture the market window. Need B (CTO): build a product that works. Assumptions under speed→"ship now": we will lose market to competitors; waiting costs sales. Assumptions under quality→"wait": doing it right means doing it slowly; we cannot have both. Challenge: does doing it right necessarily mean slowly? Often not — if quality problems are caught early, rework later is avoided, and total time decreases. If the architecture is clean from the start, velocity accelerates. The assumption "quality and speed are opposed" is false at the system level and only true within a narrow interpretation.
**Result:** Invest in the right foundation; ship fast on top of it. Both needs met. The common framing of "balance speed and quality" was the problem; quality and speed are often aligned, not opposed, once the assumption is examined.

**Situation:** Parent wants teenager home at 10 PM; teenager wants to stay out until midnight.
**Application:** Common objective: good family relationship. Need A (parent): ensure safety. Need B (teen): social acceptance, maturity. Assumptions under 10 PM: we can't verify safety later; later means more dangerous; social life must fit this window. Some of these are false. Check-in protocols verify safety. Specific activities have specific end times. The real issue may not be the hour but the information.
**Result:** A check-in system at 10 PM plus a midnight curfew for specific known-safe events. Safety ensured. Social life preserved. No compromise at 11 PM that satisfied nobody. Both sides got what they actually needed.

## Anti-Patterns (tactical)

**Don't:** Use the Cloud to rationalize a decision you've already made.
**Why:** The whole point is to challenge your own assumptions. If you build the Cloud knowing the answer you want, you'll write the assumption that validates you, skip the one that refutes you, and produce theater. Draw the Cloud when you genuinely do not know which assumption is false.

**Don't:** Stop at the common objective.
**Why:** Finding the common objective is useful — it often defuses the temperature — but it is not the solution. The conflict is real at the wants level. You still need to find the injection. Stopping at "we both want the company to succeed" leaves the operational fight intact.

**Don't:** Compromise the moment the injection feels hard.
**Why:** Injections usually require real change — a new supplier arrangement, a new product offering, a new process. That is why the conflict persisted; no one wanted to do the work. Compromising here abandons the real solution and locks in the lose-lose. The hard work is where the value is.

**Don't:** Treat the Cloud as a bureaucratic exercise.
**Why:** Filling out the form without challenging the assumption is worse than not doing it. It inoculates you against the real tool. If you draw the Cloud and conclude "well, we examined it, compromise it is," you have not applied the method.

**Don't:** Present the injection as a demand.
**Why:** You have usually surfaced an assumption the other party was making. If you frame the injection as "you were wrong," they defend. If you frame it as "here's an alternative that meets both our needs," they consider. Goldratt's own teaching: sometimes present the negative branch and let the other party propose the injection themselves. "If I had suggested it, he would have treated my suggestion as an insulting, unfair demand."

Every conflict can be removed. Not managed. Removed. The assumption is where the work is.
