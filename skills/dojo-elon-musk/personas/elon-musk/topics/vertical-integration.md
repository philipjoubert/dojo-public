---
triggers:
  - "user asks whether to build or buy a component"
  - "user is negotiating with a supplier and hitting price or timeline resistance"
  - "user wants to compress iteration cycles on a hardware product"
  - "user is facing supply chain risk or single-vendor exposure"
  - "user says 'atoms are cheap, process is pricey'"
  - "user is blocked on a component nobody else will build cheaply"
use_when:
  - "raw materials are a small fraction of finished cost (high idiot index)"
  - "suppliers add margin at multiple tiers and can't or won't break their cost structure"
  - "iteration speed matters and supplier release cycles are measured in years"
  - "you have or can build the manufacturing competence"
fails_when:
  - "volume is too low to amortize factory fixed costs — you become a high-fixed-cost prisoner"
  - "the component is a commodity sold at near-raw-material cost (idiot index under 3x) — no savings to capture"
  - "you lack the technical depth to actually build the thing better than the existing supplier base"
  - "you're integrating vertically for ideological reasons rather than economic ones"
related:
  - "idiot-index.md"
  - "first-principles.md"
  - "design-manufacturing-coupling.md"
---

# Vertical Integration

## When to Use
- You've run the idiot index and found high ratios across multiple components — your suppliers are sitting on most of your cost.
- Multiple supplier tiers are stacking margin (each taking 15-30%) and you can see that if you cut out the tiers you cut out the math.
- You need iteration cycles faster than your supplier release schedule. If a supplier retools on three-year cycles and you need design changes every quarter, you're either changing suppliers or becoming one.
- You're exposed to single-source supply risk on a critical component. Russia turns off the RD-180, you're done. Build it yourself.
- You have the engineering depth and the volume to justify the fixed costs.

## Fails When
- **Volume is too low.** Owning a factory means fixed overhead every second it's not producing. At 2-4 units per year, vertical integration is a burden, not an advantage. You need volume to amortize.
- **The component is already near raw-material cost.** If a supplier sells you a part with an idiot index of 2, there's nothing to capture. Buy it. Build what has high ratios.
- **You lack the manufacturing capability.** Wanting to make something and being able to make it are different. Vertical integration without engineering depth just means you become a worse supplier to yourself.
- **You integrate for ideological reasons.** "We should own everything" is not a strategy. Each integration decision should have specific economics: captured margin, compressed cycle time, or strategic supply security. If you can't write down which one, don't integrate.
- **You scale too fast.** Building a factory before you know what you need to build is how you end up with expensive machines doing the wrong thing. Integrate after the design is stable enough that the factory layout has a half-life longer than a quarter.

## Core Concept

The thesis in one sentence: atoms are cheap, process is pricey. If you do the accounting on most hard products, the raw material cost is a small fraction of the finished cost — often 2-5%. The rest is process. Process means labor, tooling, overhead, supplier margin, and — crucially — the cascading markups when tier 4 sells to tier 3 sells to tier 2 sells to tier 1 sells to you. Each tier adds 15-30% margin. Stack four tiers and the multiplier is 2-3x before anyone's done any actual value-add.

You can't negotiate your way out of this. The suppliers are profitable *because* of the stack. Their incentives and their cost structures are calibrated to take margin at each layer. If you ask them to cut 10x, you're not asking for a discount — you're asking them to destroy their business model. They won't.

So if the waste is in process, and you can't reach it through suppliers, you have one option: become your own supplier. Bring the process in-house where you control it. SpaceX builds roughly 80% of its hardware internally — engines, structures, avionics, software, key ground systems. They outsource raw materials and commodity parts. Everything between raw material and finished rocket, they own.

The payoff is three things:

**First, you capture the stacked margin.** A NASA study found SpaceX developed Falcon 9 for roughly $440 million — a figure that traditional contractors would have needed 3-10x to match. That 3-10x isn't genius. It's the sum of the margins the supplier chain would have extracted.

**Second, you collapse iteration time.** When a bracket needs to change, the engineer who designed it walks over to the manufacturing engineer who builds it. They use the same CAD system. They change the jig that afternoon. A supplier-based design cycle takes weeks of RFQ, approval, and retooling for the same change. SpaceX iterated through Falcon 1 → Falcon 9 v1 → Falcon 9 v1.1 → Falcon 9 Full Thrust → Falcon 9 Block 5 in roughly the time a traditional contractor would have spent on a single major revision. The iteration compression *is* the edge.

**Third, you own your strategic exposure.** When Russia threatened to stop RD-180 engine sales to ULA, ULA faced existential risk. SpaceX was insulated because they built their own engines. This isn't a day-one argument — it's a tail-risk argument, but the tail is real, and the second-order effect is that your negotiating position with every supplier improves when they know you can walk.

The cost of doing this is high fixed costs. Factories, tooling, engineering staff, specialized equipment — all of it burns money whether you're building or not. So vertical integration demands volume. You can't own a factory and run it at 2 rockets per year; the math destroys you. This is why the low-cost strategy, the vertical integration, and the standardized platform are all one strategy. Each piece needs the others. First principles identifies the waste. Vertical integration captures it. Standardization provides the volume that makes capture profitable.

## How to Apply

1. **Run the idiot index across your bill of materials.** Rank components by total annual spend times idiot index. That ranked list is your integration target pipeline — the highest-ratio, highest-spend parts are where integration pays off fastest.

2. **For each top candidate, diagnose why the cost is high.** Is it raw material markup? Tier stacking? Custom tooling? Certification overhead? Labor? Each has a different integration strategy. Tier stacking is the easy win — buy the raw material directly, cut out the middlemen. Certification is harder and may not be capturable.

3. **Estimate in-house cost.** What would it cost to manufacture this part yourself at your expected volume? Include fixed factory amortization, engineering staff, tooling. Be honest — if you don't know, go hire someone who does. Don't make this up.

4. **Compare.** If in-house cost is 50% or less of supplier cost at your expected volume, integrate. If it's 70-90%, think hard — the integration risk may not be worth the savings. Above 90%, don't integrate.

5. **Sequence.** Don't integrate everything at once. Pick the part with the highest capture value and clearest engineering path, do that, learn, then expand. SpaceX started with engines (Merlin), then structures, then avionics, over years. Not in one move.

6. **Keep outsourcing commodities.** The point isn't to make your own aluminum. Aluminum is sold near raw-material cost; the idiot index is low. Buy the aluminum. Make the engine.

7. **Design for volume from day one.** Vertical integration only works with volume, so your product architecture has to support volume. This is where commonality and platform design come in — same engine across stages, same fairing across missions, same structures across variants. Design for the factory, not the mission.

8. **Monitor the make/buy boundary continuously.** Just because you made something in-house in 2020 doesn't mean you should still make it in 2025. Supplier markets change. Your own cost structure changes. Review the boundary annually.

## Examples

**Situation:** SpaceX engineers need a critical engine valve. Supplier "kind of smirked and left" after hearing SpaceX's timeline and budget.
**Application:** Tom Mueller's team made the valve themselves. Commodity machining, commodity materials, in-house assembly. No aerospace supplier margin. No six-month lead time.
**Result:** The valve shipped on SpaceX's timeline at SpaceX's target cost. Repeated across the Falcon architecture, this is how the rocket got built for 1/10th of a comparable traditional program.

**Situation:** Rad-hardened processors cost $200,000 each, from a small number of aerospace suppliers.
**Application:** Don't integrate the rad-hard chip itself — that's a semiconductor fab, which is too far outside the core competence. Instead, design around the problem. Triple-redundant commercial processors (~$700 each) with software voting. You're vertically integrating the *reliability function*, not the chip.
**Result:** $2,000 total instead of $200,000. Equivalent effective reliability. No supplier lock-in.

**Situation:** You're an early-stage hardware company being quoted 12-month lead times for a custom subsystem.
**Application:** Run the idiot index. If the ratio is high, don't accept the 12 months. Decompose the subsystem into components you can source directly — motors, boards, brackets. Assemble in-house. Your iteration cycle goes from 12 months to 6 weeks.
**Result:** You stop being held hostage by supplier schedules. Your product iteration speed becomes a competitive weapon instead of a constraint. This only works if you're willing to own the complexity — and you should be, because the complexity is where the competition can't follow.

**Situation:** You want to integrate vertically but your volume is 50 units a year.
**Application:** Don't. At 50 units, factory fixed costs will eat you. Either expand your addressable market until the volume justifies integration, or stay with suppliers. Recognize that if you can't get to volume, the SpaceX playbook doesn't apply — you need a different one.
**Result:** You save the company from a premature integration that would have burned cash on underutilized capacity. Vertical integration without volume is a failure mode disguised as vision.

## Anti-Patterns (tactical)

**Don't:** Integrate for ideology.
**Why:** "We should make everything ourselves" is a slogan, not a strategy. Each integration decision must have specific economics. Captured margin? Cycle time? Strategic security? Name the benefit, size it, and compare to the cost. If you can't, don't integrate.

**Don't:** Integrate before you have volume.
**Why:** Fixed factory costs eat you alive at low volume. A $50M factory amortized over 40 units a year is $1.25M/unit of overhead before you've bent any metal. Vertical integration needs the standardization and platform strategy to feed it units. Build those first.

**Don't:** Integrate the truly commodity inputs.
**Why:** Aluminum, standard fasteners, commodity electronics — these are sold at near raw-material cost. Idiot index under 3. There's nothing to capture. Owning these just distracts your engineering team from the high-ratio components where the real savings live.

**Don't:** Assume in-house means cheaper automatically.
**Why:** A badly run in-house factory can easily cost more than a well-run supplier. Vertical integration only pays if you can actually manufacture competitively. If you don't have manufacturing depth, get it — hire or acquire — before you commit, not after. Otherwise you're just moving the inefficiency from their balance sheet to yours.

**Don't:** Cut off all supplier relationships.
**Why:** You still need commodity inputs, specialty materials, certification-heavy components you can't replicate. Vertical integration is selective — 80% in-house, 20% outside — not total. Keep good supplier relationships for the 20%, and keep them sharp by being willing to walk.

**Don't:** Freeze the boundary.
**Why:** Make/buy decisions age. A part that was smart to outsource in year 1 may be smart to integrate in year 3 as volume grows. A part you integrated may be worth spinning back out if a new supplier market emerges. Review the boundary annually. Don't let yesterday's decision ossify.

**Don't:** Forget the integration has to be paired with fast iteration.
**Why:** The biggest payoff of vertical integration isn't captured margin — it's the iteration speed that comes from having the designer and the manufacturing engineer in the same building. If you integrate but keep a traditional waterfall design process, you lose most of the benefit. The factory next to the design office is where the magic is. (See design-manufacturing-coupling.md for this specific pattern.)
