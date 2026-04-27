---
triggers:
  - "user is deciding whether to build an integrated product or assemble from modular components"
  - "user describes their plan or product as 'vertically integrated' / 'end-to-end' / 'fully integrated platform'"
  - "user asks whether to outsource a piece of the value chain to a lower-cost supplier"
  - "user describes their industry as commoditizing and wants to know where the profit pool is moving"
  - "user asks why Apple's integrated approach beats Android, or vice versa"
  - "user is evaluating a vertical vs. horizontal strategy"
  - "user wants to know why some industries start integrated and go modular, and others don't"
use_when:
  - "deciding which pieces of the value chain to own vs. outsource at a specific moment in industry maturity"
  - "diagnosing why profitability is migrating from one layer of an industry to another"
  - "evaluating whether an incumbent's integrated architecture is still a moat or has become a liability"
  - "predicting which firms in an industry transition will capture profit three years out"
fails_when:
  - "applied statically. The right answer changes as the product crosses the good-enough threshold — integrated wins when not good enough, modular wins when overshoot"
  - "applied to industries where no clear performance metric exists for 'good enough'"
  - "used to argue for pure modularity in a product that is still not good enough — the 'outsource everything to lower cost' mistake"
related:
  - "disruptive-innovation.md"
  - "overshoot-detection.md"
  - "sustaining-vs-disruptive.md"
  - "value-networks.md"
  - "rpv.md"
  - "three-types-of-innovation.md"
---

# Modularity vs. Integration (Interdependence Theory)

## When to Use
- A company is deciding which parts of its value chain to keep in-house and which to outsource.
- Profits in an industry are shifting from one layer to another and nobody can explain why.
- A founder is choosing between a tightly integrated product strategy (Apple-like) and a modular ecosystem strategy (Microsoft-like).
- An analyst needs to predict who will make money in an industry two to five years from now, given the current state of performance.
- A CEO is being pitched on a margin-improving outsourcing deal that would move a key capability out of the firm.

## Fails When
- You try to pick a universal answer. There is no permanently correct answer to integrated-vs-modular — the right answer depends entirely on whether the product in its current state is not-yet-good-enough or already-more-than-good-enough for the customer's job, and that state changes over time.
- The performance metric is fuzzy or contested. The theory depends on having a clear definition of what "good enough" means in the customer's use case. In industries where the job is poorly understood, the signal is noisy.
- You mistake "interface stability" for modularity. Interfaces only become truly modular when they are specifiable, verifiable, and predictable — not merely documented.

## Core Concept

Any product is made of subsystems that must fit and work together. The places where two subsystems meet are called interfaces. The character of those interfaces — how well-specified, how predictable, how well-understood — determines an awful lot about which firms can participate in building the product and which firms will make money doing it.

An **interdependent** architecture is one in which the subsystems cannot be designed independently of each other. The way one piece works depends in unpredictable ways on the way another piece works. Engineers designing one subsystem need to be in constant, high-bandwidth contact with engineers designing the other — because any change in one ripples into the other, and only someone who understands both can resolve the interaction. Interdependent architectures therefore require the same organization to develop both pieces, simultaneously. This is vertical integration. It's slow, it's expensive, it requires deep coordination, and it's the only way to get an interdependent product out the door in workable form.

A **modular** architecture is one in which the interfaces between subsystems are so well-specified, so reliably predictable, and so completely defined that it doesn't matter who makes the components. As long as each supplier meets the spec, the pieces snap together. Designers in one firm can work on their subsystem without ever speaking to designers in another firm. The system works because the interfaces carry all the coordination load. This is what allows a modular industry to explode into dozens or hundreds of specialized component suppliers, each expert at one subsystem, each competing on cost and incremental innovation within its slice.

Here is the insight that makes the framework useful. Neither architecture is universally better. Which one wins depends on whether the product, in its current state, is good enough for the customer's job or not yet good enough. When the product is not yet good enough — when customers are still pushing for more performance along the dimensions that matter most — an integrated architecture wins. It wins because you cannot yet trust that a modular interface preserves all the performance you need. Every spec-boundary between suppliers imposes a small performance tax, and when you're racing against a performance ceiling, those taxes accumulate into the difference between a product that works and one that doesn't. Integrated firms, because they can optimize across subsystem boundaries, can wring out performance that modular firms cannot. That is why integrated firms dominate industries in their formative years.

When the product *overshoots* what customers need along the primary performance dimension, the job shifts. Customers stop caring about one more increment of the headline performance metric — they already have more than they need. Their purchase criterion moves to speed, customization, convenience, or low cost. Modular architectures suddenly become the winners, because modular industries can iterate faster, customize more cheaply, and commoditize price harder than any integrated firm can. The flip is not gradual. It's a phase transition. And the firms that don't see it coming — the integrated incumbents who kept pouring investment into performance the customer no longer values — lose.

The second-order consequence is where the real money is. When architecture flips from integrated to modular, the profit doesn't disappear — it migrates. It migrates to the subsystem that is *still not good enough* within the now-modular overall system. That subsystem remains interdependent with its own sub-components, requires vertical integration internally, and captures the economic rent that used to belong to the integrator of the whole system. In the early PC industry, the integrator (IBM) made the money. As the PC became good enough as a whole, the profit migrated to microprocessors (Intel) and operating systems (Microsoft) — the two layers that were still not good enough for what the overall system needed to do. Inside each of those layers, the winning firm was itself integrated. This pattern — modularity at the system level, integration at the sub-system where the bottleneck sits — is how profit pools reshape themselves.

## How to Apply

1. **Diagnose the state of the product along its primary performance dimension.** Ask: is the product still not good enough — are customers pushing for more? Or has it overshot, with the average customer now ignoring a new generation of performance improvements they could easily afford? The answer determines which architecture wins at the system level. Not-good-enough → integrated. Overshot → modular.

2. **Locate the current performance bottleneck inside the system.** Whichever subsystem is still not good enough will remain interdependent internally — and that's where vertical integration still pays and where profits will concentrate. If the bottleneck is battery life, the battery makers (and anyone who controls the chemistry) capture rent. If the bottleneck is chip performance, chip designers capture it. The bottleneck moves over time as subsystems get solved, and the profit pool moves with it.

3. **Before outsourcing, ask what you are giving up along with the cost savings.** Any outsourcing deal that looks like a pure cost-reduction win almost always includes a hidden transfer of learning, capability, or profit potential from you to the supplier. The supplier takes on the thing you decided wasn't core; over time, the supplier becomes expert at it; over further time, the supplier starts taking over adjacent pieces of your value chain that it learned to do while it was serving you. This is how outsourcing decisions that look like margin wins end up being handovers of the business.

4. **Don't outsource the piece of the value chain that is currently the performance bottleneck.** Wherever the "not-good-enough" subsystem lives, it needs interdependent design and therefore vertical integration. That's where the margin is, and that's where the hard-won proprietary capability lives. Keep it inside. Outsource pieces that are already solved commodities — where the interfaces are truly modular and no proprietary advantage remains.

5. **Re-run the diagnostic every few years.** Industries move through the integrated-to-modular flip, then back again when a new performance dimension opens up that nobody had been optimizing for. When smartphones displaced laptops, the industry that had gone modular (laptops) was outflanked by a new integrated product (iPhone) that created a new not-good-enough dimension. The architecture flips back and forth over the product's life. Strategy has to flip with it.

## Examples

**Situation:** In the early 2000s, Dell was the most admired PC manufacturer in the world, famous for its direct-to-consumer model and its exceptional supply chain. Asus, a Taiwanese company, had been supplying Dell with motherboards — simple circuit-board work that Dell had decided wasn't its core competence. Then Asus came to Dell with an interesting value proposition.

**Application:** Asus said: *You know, Dell, motherboard manufacturing isn't your core competence — it's ours. If you let us do more of it, we could do it for 20% lower cost.* Dell's analysts looked at the numbers and realized that not only would cost drop 20%, they could also get the circuit-board manufacturing assets off the balance sheet. So Dell shoveled that over. Dell's profitability improved. Asus's revenues and profits improved too. A couple of years later, Asus came back: *You know, Dell, the motherboard is really the guts of the machine. Come to think of it, you don't need to assemble all the rest of the junk either — assembly isn't your core competence, it's ours. We could do it for 20% lower cost.* Dell's analysts looked at it and realized they could get all the other manufacturing assets off the balance sheet. So they shoveled that over. Dell's revenues were unaffected; profitability improved again. A couple of years after that, Asus came back: *You know, Dell, having to deal with all these component suppliers and the logistics headaches and shipping the stupid computers to your dumb customers — logistics isn't your core competence, it's ours. We could do it for 20% lower cost.* Dell's analysts looked at it and realized they could get all the current assets off the balance sheet. So they shoveled that over. Dell's revenues were unaffected but profitability — especially return on net assets — really improved, because now Dell had almost no assets.

**Result:** Asus became the third largest computer manufacturer in the world. Dell puts its name on stuff that Asus makes. The whole story can be told without the words "stupid managers" once — because there's no stupidity involved. Dell's analysts got their profitability by getting out. Asus got its profitability by getting in. The pursuit of profit is what caused it to happen. That is how Taiwan's economy became prosperous — this sequence run over and over, in consumer electronics and then in many other industries. And it is the cautionary tale. Every decision Dell made was locally rational. Dell's ROIC improved at every step. Dell management could show improved metrics to Wall Street every quarter through the whole process. And at the end of the process, Dell no longer had a business.

---

**Situation:** Henry Ford built the Model T in the early 1910s as a fully integrated product. Ford's River Rouge plant turned iron ore and silica into finished automobiles under one roof. Ford made the steel, made the engines, made the glass, made the tires — everything.

**Application:** At that moment in automotive history, the car was not good enough. Engines broke, bodies rusted, tires blew, electrical systems failed. Supplier ecosystems capable of reliably delivering each subsystem to specification didn't exist, because the specifications themselves kept changing as engineering learned what worked. Ford's vertical integration wasn't a strategic flourish; it was the only way to get a Model T out the door that actually worked. An interdependent product required an integrated organization. A hundred years later, almost no automaker makes its own steel, glass, tires, electronics, or even — increasingly — its own engines. The car overshot what ordinary drivers need along most performance dimensions. Interfaces between subsystems stabilized. Specialized suppliers became reliable enough that modular procurement worked. The industry flipped.

**Result:** Profit in the auto industry migrated over the century from the integrator (early-era Ford and GM) toward subsystems where performance still strained — at various moments this has been transmissions, electronics, and most recently batteries and autonomous-driving software. Tesla's vertical-integration strategy makes sense precisely because EV drivetrains, battery management, and self-driving software are the new not-good-enough subsystems; they require interdependent design across what was, in the ICE era, the modular system. The industry is re-integrating around these new dimensions. The pattern repeats; the location of the integration moves.

---

**Situation:** Traditional hospitals bundle three very different kinds of medical work under one roof: diagnosing rare and unusual presentations (solution-shop work — what the best academic medical centers do), delivering a repetitive, well-understood procedure like a hip replacement or cataract surgery (process-clinic work), and managing chronic disease over years (ongoing-network work). Hospital margins suffer from bundling all three, because the pricing and process requirements are incompatible.

**Application:** When the solution-shop work (diagnosis of the still-not-understood) is the not-good-enough subsystem, it should be done in an integrated environment with the best diagnostic and imaging resources under one roof. When the procedure is well-understood and standardized — cataract surgery or hip replacement — a focused factory like the Shouldice Hospital for hernias or Aravind Eye Care for cataracts, which does nothing else, produces dramatically better cost and quality than an integrated hospital doing everything. That's the process-clinic architecture. The two should be separated, not bundled, and the interfaces between them should be explicit handoffs, not shared infrastructure. Bundling them forces integrated hospitals to staff and price for the hardest case, subsidizing simple procedures with complex ones and starving both.

**Result:** Integrated general hospitals are being disrupted by two different kinds of focused entrants — specialty clinics at the process-clinic end (doing one thing at dramatically lower cost), and concierge diagnostic centers at the solution-shop end (doing open-ended diagnosis with full attention). The integrated-everything hospital is caught between them. Interdependence theory says this is inevitable as soon as the process-clinic work becomes sufficiently standardized — which for many procedures it already has.

## Anti-Patterns (tactical)

**Don't:** Outsource the piece of the value chain that is currently "not good enough."

**Why:** Wherever the performance bottleneck sits in a product, interdependent design across that subsystem's internal components is still required, vertical integration still wins, and the economic rent of the entire system concentrates there. That's exactly the piece you must not give up. When a cost-reduction pitch lands on your desk — "let us take over X for 20% less cost" — the question to ask is not "does the math work?" but "is X currently the performance bottleneck in the overall product?" If X is still not good enough, outsourcing X hands the margin-capturing piece of your business to the supplier. Even worse, the supplier uses the capability they build serving you to take over adjacent pieces, one at a time, because once they have the bottleneck subsystem they can credibly do everything downstream of it. The Asus-Dell sequence is the cautionary tale. Every individual outsourcing decision Dell made was ROIC-accretive in the short term; the cumulative effect was that Dell became a brand-label operation while Asus became a computer company. The right rule: outsource what has become a commodity (modular, well-specified, no remaining proprietary edge); keep what is still pushing the performance frontier. If you cannot tell which is which, that is the first thing to figure out — before any outsourcing decision gets signed.
