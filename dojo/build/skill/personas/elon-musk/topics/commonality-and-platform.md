---
triggers:
  - "user is designing multiple product variants for different use cases"
  - "user's bill of materials has many similar-but-different parts"
  - "user wants to reduce cost but preserve customer customization"
  - "user has separate engineering teams producing architecturally incompatible products"
  - "user is deciding between a custom solution and a platform approach"
  - "user says 'every customer wants something different'"
use_when:
  - "you have real or potential volume across multiple variants that could share components"
  - "suppliers or manufacturing fixed costs are amortized over volume — more units means lower unit cost"
  - "customers will adapt to your platform if the price is right"
  - "the product architecture can support a common core with variant-specific extensions"
fails_when:
  - "customer needs are genuinely heterogeneous and they will walk rather than adapt"
  - "the shared platform adds more mass/complexity to each variant than a purpose-built version would"
  - "forced commonality destroys a performance requirement that's actually load-bearing"
  - "volumes are low enough that the platform overhead exceeds the savings"
related:
  - "vertical-integration.md"
  - "first-principles.md"
  - "question-requirements.md"
---

# Commonality and Platform

## When to Use
- You're about to build a "custom" version of something for a specific customer or use case. Before you do, ask whether you can force the customer onto a common platform instead.
- You have multiple product lines, and the bills of materials show that 40-60% of parts are "almost the same but slightly different." That's where commonality lives.
- Manufacturing fixed costs — factories, tooling, engineering staff — are substantial and you need volume to amortize them. Platform is the volume-generation strategy.
- You're deciding between "optimize each product for its niche" and "build one thing and sell it broadly." The latter is almost always cheaper at scale if customers will accept it.

## Fails When
- **Customer needs are genuinely heterogeneous.** Some markets fragment for real physical reasons. Medical device classes, military platforms with strict spec conflicts, niche performance requirements. If forcing commonality means losing the customer, the math doesn't work.
- **The common platform adds more weight/complexity per variant than a purpose-built version would.** Sometimes the shared core carries overhead each variant pays for but doesn't use. If the overhead exceeds the per-variant optimization you'd otherwise have, the platform is a net negative.
- **Volumes don't justify the platform investment.** Platform engineering is front-loaded work. A platform with 10 units of lifetime volume across all variants will never amortize. Do the math honestly.
- **Forced commonality breaks a real physics requirement.** Atlas V uses three different engine types because the physics of ascent, sustainer, and upper stages genuinely trade differently. It's more expensive, but it works. If physics is pushing you away from commonality, resist the pull.

## Core Concept

Fewer moving parts means fewer failure modes means lower cost. That's the sentence. Most of commonality follows from taking it seriously.

The traditional aerospace approach is to optimize each mission: custom adapters, mission-specific vehicles, multiple engine families, bespoke fairings. Each mission gets what it needs. The result is a fleet of one-offs where the factory never gets good at anything because it never builds the same thing twice. Atlas V famously uses up to three different rocket types in a single vehicle, each optimized for its flight phase. My response when I first heard that: you've just tripled your factory costs and all your operational costs. Every optimization for a niche is a tax on the factory and every supplier relationship.

SpaceX's bet was the opposite. One propellant pair — liquid oxygen and RP-1 kerosene — across all stages of Falcon 9. One engine family — Merlin — across first stage (nine of them) and second stage (one vacuum variant). One structure diameter. One welding method. One avionics architecture. One ground system family. Even Falcon Heavy is just three Falcon 9 first stages strapped together with a shared upper stage. Not a new vehicle — a scaled variant of the same core.

The Falcon 9 became the Model T of rockets. Customers fly to our spec, not the other way around. We publish a Falcon User's Guide that defines the bolt circles, the electrical connectors, the fairing environments. Customers design their satellites to fit us. The 5-meter fairing became an industry standard not because it was optimal for every payload, but because we made it the default and told customers to adapt. Most of them did, because the price delta was compelling enough to justify the adaptation cost.

This flips the traditional power dynamic. In bespoke aerospace, the supplier serves the customer's spec. In platform aerospace, the customer adapts to the supplier's platform. The customer trades some optimization for a lot of cost reduction. Most customers will take that trade if the numbers are sharp enough.

The math behind commonality compounds. Building 40 identical Falcon 9s per year creates automotive-style learning curves: the first 10 cost $60M apiece as you're learning, the next 190 cost $30M apiece at manufacturing scale, and reused boosters push marginal cost under $15M. None of that is achievable in bespoke aerospace. A traditional provider building 4 custom vehicles per year never accumulates enough reps to start the curve.

There's an even deeper point. Every mechanism is a failure mode. Every unique part is something that can fail in a unique way. A folding grid fin is a mechanism; a fixed grid fin isn't. A vehicle with three engine types has three failure envelopes; one with one engine type has one. Commonality doesn't just reduce cost — it reduces the surface area of risk. Each unique thing on the vehicle is paying rent in mass, cost, and failure-mode count. If it's not earning that rent, delete it and use the common part.

## How to Apply

1. **Audit your bill of materials for "almost the same" parts.** Brackets that differ by 2mm. Valves from different suppliers doing the same job. Engines from different programs with 80% shared architecture but different part numbers. Each of these is a commonality candidate.

2. **Pick a shared architecture early.** Platform decisions are expensive to reverse. Decide early what's common — propellant, materials, major subsystems, major interfaces — and enforce it across programs. Retrofitting commonality after two teams have built incompatible systems is brutal.

3. **Publish an interface spec.** Falcon User's Guide. Define the bolt patterns, the electrical interfaces, the thermal environments, the volumes available. Customers and internal teams design to this spec. If a variant wants to deviate, it needs explicit justification — not the default.

4. **Force adaptation, don't chase bespoke.** When a customer asks for a custom variant, your first response is "adapt to our platform, here's the spec." If they insist on custom, price it at a premium that reflects the real cost of breaking commonality. Many will accept the spec. The ones who don't are paying for their deviation explicitly.

5. **Delete mechanisms in favor of fixed versions where physics permits.** Folding vs. fixed grid fins. Deployable vs. fixed nozzle extensions. Adjustable vs. fixed geometries. Each mechanism is a failure mode. If a fixed version is within 95% of the mechanism's performance, delete the mechanism.

6. **Resist "this variant is different" reasoning.** Teams will always want their variant to be special. Push back. Ask what's actually different at the physics level, not at the historical-accident level. Most "different" variants can be collapsed into the common platform with modest re-engineering.

7. **Monitor volume by common part, not by variant.** Your factory is building "the propellant pair," not "the rocket variants." Volume on shared components is what drives the learning curve. If your dashboards track variant volume instead of common-part volume, you'll miss where the leverage is.

8. **Re-examine the platform every few years.** A platform that was right at scale X may be wrong at scale 10X. As your volumes grow, new commonality opportunities open (parts that weren't worth standardizing at low volume become worth it at high volume). As customer needs shift, some variants you locked out may re-enter. Don't freeze the platform.

## Examples

**Situation:** Falcon 9 uses nine Merlin engines on stage one, and one vacuum Merlin on stage two. Falcon Heavy uses 27 Merlins on the three first stages and one vacuum Merlin on its upper stage.
**Application:** One engine family across both vehicles. The factory is building Merlins, not "Falcon 9 engines" vs. "Falcon Heavy engines." Every Merlin flown on any mission advances the learning curve for every Merlin to come. Heavy isn't a new vehicle — it's three Falcon 9s.
**Result:** Merlin production reaches volumes that allow per-engine cost in the low millions, versus $20-25M for comparable Russian RD-180 engines. The cost delta is almost entirely due to commonality and volume, not superior design.

**Situation:** Customer wants a bespoke satellite adapter for their payload, incompatible with the Falcon User's Guide spec.
**Application:** First response: "adapt your satellite to our standard adapter." If they insist, price the bespoke adapter at a premium reflecting the full cost of breaking commonality — not just the incremental manufacturing cost, but the engineering time, the documentation, the certification, the factory disruption. Most customers take the standard adapter once they see the premium.
**Result:** The platform stays clean. The occasional customer who genuinely needs bespoke pays for it. Both outcomes are acceptable; neither subsidizes the other.

**Situation:** Falcon 9 grid fins were originally designed to fold during ascent, like traditional aerospace grid fins, to reduce drag.
**Application:** Question the requirement. Is the drag penalty of fixed grid fins actually large enough to justify the mechanism? Simulate it. Answer: no, drag is small at the angle of attack during ascent. Delete the folding mechanism.
**Result:** Fewer parts. Fewer failure modes. Lighter. Cheaper. The mechanism wasn't earning its rent.

**Situation:** Your product line has five variants, each with slightly different enclosures, each tooled separately.
**Application:** Audit the enclosures. If 80% of the geometry is common, design one enclosure that accommodates all five variants with minor inserts or cutouts. Tool it once. Cost drops, inventory simplifies, engineering overhead drops. If the variants use 20% of the common enclosure's features each, that's acceptable overhead for the simplification.
**Result:** Bill of materials simplifies. Supplier negotiation improves (higher volume on one part beats low volume on five). Inventory cost drops. The only cost is that each variant is slightly less "optimized" than it would be with a bespoke enclosure — and that cost is almost always worth paying.

## Anti-Patterns (tactical)

**Don't:** Let each product line design in isolation.
**Why:** Separate teams produce incompatible architectures. Engineering teams naturally optimize for their own product and don't see the shared-part opportunity. Without someone at the top enforcing platform discipline, you end up with five "almost the same" part numbers instead of one. The enforcement has to come from architecture leadership, not from hoping teams coordinate.

**Don't:** Assume customers won't adapt.
**Why:** They will, at the right price. Traditional aerospace taught itself that customers demand bespoke solutions. Actually, customers demand low prices more. If your platform saves them 50% and costs them 10% in adaptation, they take the deal. The ones who don't are a minority — and they're probably not customers you want at your target price point anyway.

**Don't:** Let "custom" become the default response.
**Why:** Sales teams naturally say yes to customers. Without push-back, every mission becomes bespoke, the platform benefits evaporate, and the factory becomes a one-off shop. The default response has to be "adapt to the platform." Custom is the exception, priced as an exception.

**Don't:** Add variants without subtracting parts.
**Why:** Every new variant that doesn't share parts with existing variants is a pure cost add. If you're launching a variant, your first question is "what shared parts is it using?" If the answer is "none," either redesign the variant to share parts or kill the variant. Variants that don't reinforce commonality erode the platform.

**Don't:** Confuse platform with generic.
**Why:** A platform is a common architecture that supports intentional variants. Generic means one-size-fits-all with no variation. Platforms are more powerful — they preserve the cost benefits of commonality while allowing targeted customization through configuration, not bespoke engineering. Don't collapse the distinction.

**Don't:** Resist platform changes when they're warranted.
**Why:** Platforms age. The Model T was right for its decade; it was wrong by 1927. Your platform will need major revisions as volumes grow, technology shifts, and customer needs evolve. Don't confuse "commit to the platform" with "freeze the platform." The commit is to the discipline of commonality, not to any specific architecture forever.

**Don't:** Break commonality to chase a performance optimization that isn't load-bearing.
**Why:** Engineers love to make things better. Given a common part that's 95% optimal and a bespoke part that's 100% optimal, they'll argue for bespoke. Push back hard. Is the 5% actually mission-critical, or is it engineering pride? Usually pride. The commonality benefit dwarfs the 5% gain.
