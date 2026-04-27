---
triggers:
  - "user asks how to approach a problem from scratch"
  - "user is accepting a quoted price or industry standard as fixed"
  - "user says 'this is how it's always been done' or 'that's just what X costs'"
  - "user is reasoning by analogy to competitors"
  - "user is stuck on a hard problem and defaulting to conventional wisdom"
use_when:
  - "the cost, timeline, or constraint comes from tradition, supplier quotes, or industry precedent rather than physics"
  - "you need to decide whether a problem is actually as hard as people claim"
  - "everyone in the room is agreeing with the received answer"
fails_when:
  - "the problem is routine and the conventional answer is already near-optimal — first principles is expensive thinking, don't spend it on non-bottlenecks"
  - "you lack the technical depth to actually evaluate the physics — you'll just swap one set of assumptions for a worse one"
  - "you use it as a rhetorical bludgeon to dismiss experienced people rather than as analysis"
related:
  - "idiot-index.md"
  - "question-requirements.md"
  - "the-algorithm.md"
---

# First Principles

## When to Use
- You're being quoted a price, a timeline, or a performance limit, and your instinct is to accept it because "that's the market" or "that's what physics allows."
- A decision is being driven by analogy ("Boeing does it this way," "the industry standard is X") rather than by the actual constraints of your specific problem.
- You're about to optimize something. Stop and make sure the thing should exist first. If it shouldn't, no amount of optimization will save you.
- The problem is strategically important enough to justify the thinking cost. This is a sledgehammer, not a chisel.

## Fails When
- **You apply it to trivia.** First principles is expensive. If the decision doesn't move the needle, just use the conventional answer. Don't re-derive a bolt spec from metallurgy.
- **You don't have the technical depth to evaluate the physics.** Then you're just replacing one set of assumptions with a worse one. Either get the depth, or get someone who has it into the room.
- **You use it to override experienced people without engaging with their reasoning.** First principles doesn't mean ignoring expertise. It means interrogating whether the expertise is answering the right question. If the expert has a physics-level reason, respect it. If they only have "we've always done it this way," that's when you push.
- **You skip the "rebuild" step.** Tearing down assumptions is easy. The work is reconstructing a better answer from the fundamentals. Critique without reconstruction is just cynicism.

## Core Concept

Most people reason by analogy. They see what competitors do, what the industry does, what's been done before, and then they tweak. That's fine for most decisions. But when you're trying to do something that hasn't been done — or to do something 10x better than it's currently done — analogy puts a ceiling on you. You inherit everyone else's assumptions along with their answers.

First principles is the opposite move. You strip the problem down to the physics. What is this thing actually made of? What does that material actually cost on the commodity market? What does the physics actually require? What are the real constraints, as opposed to the inherited ones? Then you reason back up from there. You rebuild the answer from the ground, not from the top.

The example that anchors this: when I wanted rockets, I looked at Russian ICBMs. The quoted price was absurd. So I asked — what is a rocket actually made of? Aerospace-grade aluminum, some titanium, copper, carbon fiber. What do those materials cost on the commodity market? It turned out the raw materials were about 2% of the typical rocket price. Two percent. That tells you immediately: 98% of a rocket's cost is not physics, it's process. If the physics only accounts for 2%, the other 98% is a variable. That's a first-principles result, and you don't get to it by comparing rocket prices to each other.

The same logic applies to batteries. Everyone said battery packs cost $600/kWh and would stay expensive. Ask what a battery is actually made of: cobalt, nickel, aluminum, polymers, some steel. Go price those on the commodity exchange. The material floor is something like $80/kWh. Everything above that is manufacturing. So batteries aren't expensive — manufacturing them that way is. Now you know what problem to solve. Not "how do I make batteries cheaper," but "how do I manufacture them at material cost plus a reasonable margin."

The mental move you're trying to learn: whenever someone tells you a cost or a constraint, ask what the physics floor is. The floor is the material, the energy, the information-theoretic minimum. Anything above that floor is process, and process is a variable.

One more framing to keep with you: you should take the approach that you're wrong. Your goal is to be less wrong. That's the epistemic counterpart to first principles. Reasoning from physics isn't about certainty — it's about getting your beliefs proportional to the actual evidence rather than to what everyone around you believes. Most industries are trapped in their own history — the European automakers, traditional aerospace, legacy finance — all of them inherit a set of assumptions that made sense in a prior decade and have compounded into "how it's done" without anyone re-deriving whether it still makes sense. The move is to notice the trap and step outside it. If you can articulate why the received answer exists — the historical reason, the path-dependency — and the reason doesn't survive a physics check, you've found the opportunity.

## How to Apply

1. **State the received answer.** Write down what the conventional answer is — the price, the timeline, the performance limit, whatever is being treated as fixed. Be specific about the number.

2. **Decompose to physical constituents.** What is this thing actually made of? What are the atoms? What energy does it require? What information does it carry? Get to elements, not assemblies.

3. **Price the constituents at their true floor.** Commodity prices. Raw material costs. Theoretical minimum energy. Ignore markups, ignore supplier chains, ignore "industry standard" pricing.

4. **Compute the ratio.** Received cost divided by physics-floor cost. If it's under 2x, you're probably near optimal. If it's 10x, something is wrong. If it's 50x — as rockets were — then 98% of the cost is a variable, and the real question is which specific variables you can attack.

5. **Ask what the 98% is doing.** If the physics says the thing could cost X, and the market says it costs 50X, the delta isn't magic. It's specific things: supplier markups stacking through contract layers, custom designs that don't scale, expendable hardware, labor, overhead, certification overhead. Identify them by name.

6. **Rebuild the answer.** Now you design backward from the physics floor toward a real, manufacturable thing. You'll add cost back — you have to — but you're adding it deliberately, component by component, each one justified. Not inherited.

7. **Sanity-check against experts.** Once you have a physics-grounded answer, take it to people with technical depth and let them try to break it. If their objections are "nobody does it that way," ignore. If their objections are "here's a physical reason it won't work," listen hard.

## Examples

**Situation:** SpaceX is told a Falcon 1 actuator will cost $120,000 and take 18 months.
**Application:** Look at the actuator. It's a motor, a gearbox, some bearings, a housing, electronics. Price those components. The material and component cost was closer to a few thousand dollars. The $120k was supplier markup and slow custom work. The engineers built it in-house for $3,900 by summer.
**Result:** 30x cost reduction on a single part. Repeated across a rocket, this compounds into the 10x launch cost advantage SpaceX has over legacy aerospace.

**Situation:** Radiation-hardened processors for avionics are quoted at $200,000 each.
**Application:** What does "radiation-hardened" actually buy you? Reliability under cosmic ray hits. Can you get equivalent reliability another way? Yes — triple-redundant commercial processors voting on results. Commercial chips are about $700 each. Three of them plus voting software: ~$2,000.
**Result:** 100x cost reduction, equivalent reliability, and you're not locked into a single vendor with a multi-year lead time.

**Situation:** Someone tells you your product can't be under $N because "that's what it costs to manufacture in this category."
**Application:** Don't argue with them in the abstract. Go get the bill of materials. Price every line at commodity or near-commodity rates. Sum it. That's your physics floor. Then the question becomes: why isn't our cost near that floor, and which specific process steps are stacking the markup?
**Result:** You convert a vague argument about cost into a concrete list of attackable variables.

## Anti-Patterns (tactical)

**Don't:** Use "first principles" as a slogan to sound smart without doing the actual decomposition.
**Why:** The move isn't skepticism, it's physics. If you can't write down the bill of materials and price it, you're not doing first principles, you're just being contrarian. Contrarianism without reconstruction is worse than conventional wisdom.

**Don't:** Apply it to every decision.
**Why:** First principles is expensive thinking. You need it when the stakes are high, the received answer smells wrong, or the problem is strategically load-bearing. For routine decisions, conventional answers are fine. If you re-derive every bolt spec from metallurgy you will ship nothing.

**Don't:** Confuse "first principles" with "ignore experts."
**Why:** Experts often have physics-level reasons you haven't thought of. The test isn't whether you override them; it's whether their reason is "the physics requires this" or "we've always done it this way." You override the second kind, not the first. And you can only tell which is which if you have — or have brought in — the technical depth to evaluate.

**Don't:** Stop at decomposition.
**Why:** Tearing down assumptions is the easy half. Rebuilding a better answer from the physics floor is the hard half, and it's where the value is. If you leave the work at "everyone else is wrong," you've done nothing. The payoff is a concrete, physics-grounded target you can actually execute against.

**Don't:** Assume the physics floor is reachable on day one.
**Why:** The 98% gap in rocket cost isn't closed by a clever insight. It's closed by a decade of vertical integration, manufacturing redesign, and brutal iteration. First principles tells you *what's possible*. It doesn't tell you *how hard it will be to get there*. Those are different problems, and confusing them gets you killed — you commit to a price target, can't deliver, and burn the company. First principles identifies the opportunity; the algorithm, vertical integration, and iteration are how you capture it.

**Don't:** Skip the ratio.
**Why:** The thing that turns first principles from philosophy into a tool is the ratio between received cost and physics cost. That ratio tells you how much opportunity is there. If the ratio is 1.5x, walk away — nothing to capture. If it's 50x, you're looking at a world-changing business. Without the number, you're just waving your hands.
