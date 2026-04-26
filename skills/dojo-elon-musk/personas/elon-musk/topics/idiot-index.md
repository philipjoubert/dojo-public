---
triggers:
  - "user asks how to evaluate whether a component or product is overpriced"
  - "user is reviewing a bill of materials or vendor quotes"
  - "user asks 'what should this cost?'"
  - "user is deciding whether to make vs. buy"
  - "user accepts a cost because 'that's what the industry charges'"
  - "user mentions supplier quotes that feel high"
use_when:
  - "you have a specific physical product or component with identifiable raw materials"
  - "you can actually price the raw materials on a commodity market"
  - "the part is representative — not a one-off custom where scale will never apply"
fails_when:
  - "applied to software, services, or IP-heavy products where raw material cost is meaningless"
  - "applied to parts where certification, rad-hardening, or extreme tolerances are genuinely required and no cheaper path exists"
  - "used without the ability to actually build the thing cheaper — you diagnose the problem but can't capture the savings"
related:
  - "first-principles.md"
  - "vertical-integration.md"
  - "the-algorithm.md"
---

# Idiot Index

## When to Use
- You're looking at a quote for a physical component, a bill of materials, or a finished product cost and you suspect you're being overcharged.
- You need a fast diagnostic for where in your supply chain the real waste is.
- You want to force a specific person — yourself, an engineer, a supplier — to defend a price against physics rather than against precedent.
- You're deciding which components to make in-house versus buy, and you need a principled way to rank them.

## Fails When
- **The product is not primarily physical.** For software, the "raw materials" are rounding error. Idiot index is a manufacturing tool, not a universal diagnostic.
- **The certification or rad-hardening is real.** Some parts genuinely require expensive processes for physical reasons — qualifying a part for crewed spaceflight, aerospace cert, pharmaceutical GMP. The idiot index will flag these as "high ratio" but the ratio is load-bearing. Don't delete certification just because it looks inefficient on a spreadsheet.
- **You have no path to capture the gap.** Diagnosing that a part has a 50x idiot index is worthless if you can't manufacture it cheaper. The idiot index is a pointer to opportunity, not the capture mechanism. Pair it with vertical integration or with supplier pressure, or don't bother.
- **Applied to a truly low-volume custom part.** Some things will never have scale — a one-off specialty instrument, a research prototype. The idiot index assumes scale is available; if it isn't, the "inefficient" price may be correct.

## Core Concept

The idiot index is a single number: the cost of a finished part divided by the cost of its raw materials on the commodity market. If the ratio is high, you're an idiot. That's the name. It's supposed to sting.

The logic is simple. A finished part is raw materials plus process. If the finished part costs 50x the raw materials, then 98% of the cost is process — supplier markups, labor, tooling, overhead, certification, margin stacking through tiers. Process is a variable. Physics is not. So a high idiot index tells you there's opportunity: most of what you're paying for is stuff that could, in principle, be attacked.

When I started SpaceX, I ran this calculation on rockets. Aerospace-grade aluminum, titanium, copper, carbon fiber. Commodity material cost was about 2% of the typical rocket price. That's an idiot index of 50. Fifty. Compare: a car's raw materials are 20-30% of sticker price, so the idiot index is 3-5x. Consumer electronics are similar. But rockets were 50x. That told me immediately — the opportunity here is enormous, and it's all in process.

The number also forces a specific question that most teams never ask: *what should this cost?* Not "what does it cost?" Not "what do our suppliers charge?" What *should* it cost, if you could manufacture near the physics floor? The answer is usually shocking. The Falcon 1 actuator quoted at $120,000: we built it for $3,900, because the actuator was a motor, a gearbox, and a housing, and those things don't cost $120k unless a supplier is charging $120k. Rad-hardened processors at $200,000: equivalent reliability from triple-redundant commercial chips at $2,000 total. Idiot index of 100, captured.

The idiot index is not just a metric. It's a verbal weapon. When a cost meeting gets polite and people start defending numbers, the question "what's the idiot index on this part?" short-circuits the politeness. Now the conversation is about a ratio, and ratios have defensible answers. Either the ratio is high and the part is a target, or the ratio is low and we move on.

## How to Apply

1. **Pick the part.** Specific. Not "the avionics system" — a specific actuator, valve, processor, bracket.

2. **Write down the finished cost.** What are you actually paying, today, for one unit? Include supplier markups, shipping, tariffs if they matter. One number.

3. **Decompose to raw materials.** What is this made of, in grams of what element or alloy? If it's an assembly, recurse — what are the components made of, and what are those components' raw materials? Go to the leaves.

4. **Price the raw materials at commodity rates.** London Metal Exchange, spot commodity prices, wholesale material catalogs. Not your supplier's "material cost" line item — the actual open market. If it's a specialty alloy, price the alloy; if it's a polymer, price the polymer.

5. **Compute the ratio.** Finished cost divided by raw materials cost. That's the idiot index.

6. **Benchmark.** Consumer products: 3-5x. Cars: 4-6x. Commercial aerospace: 10-20x. Anything above 20x deserves a hard look. Anything above 50x is where most of the company's margin opportunity probably lives.

7. **If the ratio is high, force a named owner to defend it.** Who set this price? Why? What part of the process is adding the cost — labor, tooling, certification, supplier margin, tier-stacking? Get specifics.

8. **Decide: make, renegotiate, redesign, or accept.** High idiot index doesn't mean automatic action. Sometimes the cert is real and you pay it. Sometimes you can renegotiate. Sometimes you make it in-house (vertical integration). Sometimes you redesign the part to use different materials or fewer components. The idiot index tells you where to spend attention, not what to do.

## Examples

**Situation:** Falcon 1 actuator, quoted by supplier at $120,000, 18-month development timeline.
**Application:** Decompose the actuator: motor, gearbox, bearings, housing, small electronics. Commodity raw materials and off-the-shelf components maybe $2,000-3,000. Idiot index of roughly 40-60x. The 98% is supplier custom-work markup and schedule slack. Decision: build in-house.
**Result:** Built for $3,900 in months, not $120k in 18 months. Over hundreds of parts on a rocket, this pattern compounds into the cost gap between SpaceX and legacy aerospace.

**Situation:** Raptor engine cost review. Engineer Lucas Hughes is asked: "what are the best parts in Raptor as judged by the idiot index?"
**Application:** He didn't know. That was the problem. An engineer who can't tell you the idiot index of the parts in their subsystem is an engineer who can't tell you where the cost is. After the meeting he went and ranked every part by finished cost versus raw material cost, then attacked the top ten.
**Result:** Systematic cost reduction on Raptor, driven by a ranked list instead of vibes. The idiot index became the unit of discussion in Raptor cost meetings.

**Situation:** Tesla vs. Raptor engine comparison. Merlin engine weighs 1,000 pounds. Tesla Model S engine weighs 4,000 pounds and costs $30,000 to make.
**Application:** If a Tesla engine is 4x as heavy but costs $30k, and your rocket engine is the same complexity class, why does it cost so much more? This is idiot index logic at the cross-domain level — using a comparable manufactured product as the reference. If a car engine can be made for $30k, a rocket engine of similar mass and complexity shouldn't cost 10x more unless you can defend what the 10x is paying for.
**Result:** Forces a detailed defense of every cost delta between automotive and aerospace. Most of the deltas are defensible (tolerances, reliability). Many are not, and those get attacked.

**Situation:** You run the idiot index on a certified medical device component and it comes out at 30x.
**Application:** Before declaring "idiot!" check what the 30x is paying for. If it's FDA certification, clean room manufacturing, biocompatibility testing — that's not waste, that's the cost of the category. The idiot index is flagging attention, not delivering a verdict.
**Result:** You don't attack the 30x. But now you know *exactly* what you're paying for, and if you want to build a lower-cost version for a different market (consumer wellness, veterinary), you know which of those cost drivers you could legitimately shed.

## Anti-Patterns (tactical)

**Don't:** Compute the idiot index and then do nothing.
**Why:** The number is a pointer, not an answer. If the index is 50x, you now owe yourself a decision — renegotiate, redesign, make in-house, or explicitly accept. A number that doesn't drive a decision is a number that wasted your time.

**Don't:** Use the idiot index as a generalized insult.
**Why:** The word is harsh on purpose — it's supposed to snap a polite room into a sharper conversation. But if you use it to attack people rather than to diagnose parts, you train everyone to hide their numbers from you, and now you can't run the diagnostic at all. Attack the ratio, not the person who reported the ratio.

**Don't:** Compute it on the wrong baseline.
**Why:** "Raw material cost" means commodity market, not your supplier's line item. Suppliers will happily show you a bill of materials where "raw material" is itself marked up. Go to LME, go to the spot market, go to a wholesale catalog. Your index is only as sharp as your baseline.

**Don't:** Assume a low idiot index means the part is fine.
**Why:** A low ratio means you can't get cheap by attacking material-vs-process delta. But the part could still be deleted entirely, simplified, or replaced. The idiot index is one cost lens, not all of them. A part with idiot index 2 and a part count that should be zero is still a problem — just a different problem.

**Don't:** Chase idiot index on non-bottleneck parts.
**Why:** You have finite engineering attention. Rank parts by total spend times idiot index (so you're weighting for actual dollars at stake, not just ratio). Attack the top of that list. A rare low-volume part with a 100x idiot index that contributes $50/unit of total cost is not where you should spend a week.

**Don't:** Use raw materials cost as your target.
**Why:** The physics floor is an asymptote you approach, not a number you hit. Supplier-equivalent quality still requires labor, tooling, and some process. The point of the idiot index isn't to get to 1x — it's to get from 50x to 5x, which is still a 10x cost reduction. Confusing the asymptote for the target makes you set impossible goals and miss achievable ones.
