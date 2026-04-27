---
triggers:
  - "user asks about first principles thinking"
  - "user wants to break a problem down to fundamentals"
  - "user is reasoning by analogy and getting stuck"
  - "user says 'this is just how it's done'"
  - "user wants to innovate rather than iterate"
  - "user is in a new domain and inheriting borrowed wisdom"
  - "user mentions Elon Musk, Aristotle, Descartes, or Five Whys"
use_when:
  - "the entire industry has converged on the same answer and the answer seems expensive or impossible"
  - "someone can't explain why a practice exists beyond 'we've always done it this way'"
  - "you're trying to invent something new rather than improve something old"
  - "you're operating in a domain where the borrowed conventions might be quietly wrong"
fails_when:
  - "the domain has accumulated empirical evidence that beats reasoning from scratch (medicine, aerodynamics, anything safety-critical)"
  - "the cost of rebuilding from scratch exceeds the value of the improvement"
  - "you're using 'first principles' to license overconfident contrarianism without doing the actual work"
  - "speed matters more than originality and a known recipe will do"
related:
  - "inversion.md"
  - "circle-of-competence.md"
  - "map-is-not-territory.md"
  - "mental-models-latticework.md"
---

# First Principles Thinking

## When to Use
- An entire industry has converged on the same expensive answer and nobody can explain why
- You're being told "that's just how it's done" and the explanation stops there
- You're inheriting assumptions from an analogous field that might not transfer
- You need to invent, not iterate
- You're tempted to copy a successful pattern without understanding what made it work
- A budget, a price, or a constraint feels arbitrary but unchallenged

## Fails When
- You're in a domain where empirical evidence beats armchair reasoning (clinical medicine, structural engineering, anything safety-critical with a long evidence base) — first principles can identify the question, but the answer often comes from data, not deduction
- The cost of decomposing the problem exceeds the value of the marginal improvement — most decisions don't need to be rebuilt from scratch
- You're using "first principles" as a flag for overconfidence — the phrase becomes a license to ignore people who have actually done the work
- The genuinely correct move is to copy what works and ship it
- You haven't earned the right to challenge the consensus because you don't understand it well enough to identify which assumptions are load-bearing

## Core Concept

First principles thinking is the practice of stripping a problem down to the things that are actually true — not because somebody said so, not because that's how it's been done, but because they hold up under questioning. Once you have those bedrock truths, you reason up from them. Whatever conclusions you reach may or may not match the prevailing wisdom. The point is that they're now yours.

Aristotle defined a first principle as "the first basis from which a thing is known." Descartes used methodological doubt — strip away everything you can question, see what survives, then build on what's left. Shane's framing is plainer: "First principles thinking is one of the best ways to reverse-engineer complicated situations and unleash creative possibility... it's a tool to help clarify complicated problems by separating the underlying ideas or facts from any assumptions based on them. What remain are the essentials. If you know the first principles of something, you can build the rest of your knowledge around them to produce something new."

The opposite of first-principles thinking is reasoning by analogy. Analogy is fast and usually wrong in novel situations. Elon Musk's framing, which Shane quotes often: "The normal way we conduct our lives is, we reason by analogy. We are doing this because it's like something else that was done, or it is like what other people are doing... with slight iterations on a theme. And it's mentally easier to reason by analogy rather than from first principles. First principles is kind of a physics way of looking at the world... you boil things down to the most fundamental truths and say, 'okay, what are we sure is true?' and then reason up from there. That takes a lot more mental energy."

You don't have to go to atomic depth to get most of the value. Shane's image is the Lego house: somebody hands you a house already assembled. Most people move a few blocks around and call it an improvement. Going one layer deeper — breaking it back into individual blocks — opens the door to building something entirely different. Going two layers deeper, melting the plastic to a different shape, opens up more. "Everything that exists is effectively a set of Lego blocks, assembled in a certain way, that can be taken apart and reassembled." The depth you go is determined by the size of the prize.

Critically, first principles are not absolute truths. They are the elements that, in the context of any given situation, are non-reducible. They evolve as you learn more. The laws of thermodynamics are first principles for a refrigerator engineer. A theoretical physicist working on entropy might want to break the second law down further. The principle is contextual. The discipline is constant: don't let unexamined inheritance pretend to be foundation.

## How to Apply

1. **State the goal in concrete terms.** Not "make this better." Something like: "Reduce the cost per kWh of this battery pack by 60%." A vague goal can't be decomposed.

2. **List every assumption built into the current approach.** Not just the technical ones. The pricing assumptions. The supply-chain assumptions. The "this is how the industry works" assumptions. Each of these is a candidate for examination.

3. **Use Five Whys.** Pick the most consequential assumption. Ask "why?" Take the answer. Ask "why?" again. Do this five times in succession. Most assumptions die between why three and why five — at the bottom you'll either hit something genuinely true (a first principle) or something nobody can defend (an inherited belief). Children do this naturally. Adults stopped because their parents got tired. Don't be the adult who got tired of the question.

4. **Use Socratic questioning when Five Whys feels too crude.** The Socratic checklist Shane uses: clarify your thinking and the origins of your ideas; challenge assumptions; look for evidence; consider alternative perspectives; examine consequences and implications; question the original questions. It's the same impulse as Five Whys, structured for harder problems.

5. **Reach for material reality where possible.** Musk's rocket example works because he could ask: what is a rocket physically made of, and what is the commodity price of those materials? Aerospace aluminum, titanium, copper, carbon fiber. Two percent of the typical rocket price was raw materials. The other 98% was assumption, margin, and manufacturer convention. When you can ground the question in physical or mathematical reality, do that.

6. **Reason back up.** Once you have the bedrock, build from it. Check if your conclusion matches what people are doing. If it does, the consensus has been reasoned through. If it doesn't, you may have found something. You may also be wrong — first principles thinking gives you a defensible position, not a guarantee of correctness. The next step is to test, not to declare victory.

7. **Distinguish what you actually need to rebuild from what you should accept.** Most decisions in your day don't justify first-principles work. Reserve the discipline for the few that do — the assumption that, if wrong, would change everything downstream of it.

## Examples

**Situation:** Elon Musk wants to send people to Mars. Rockets cost what rockets cost. The aerospace industry has priced launches the same way for decades.
**Application:** Musk asks: what is a rocket actually made of? Aerospace-grade aluminum alloys, titanium, copper, carbon fiber. He looks up the spot price on the London Metal Exchange. The materials cost is around 2% of a typical launch price. So the launch price is not driven by physics — it's driven by industry assumption, margins, and manufacturing convention. Conclusion: it should be possible to build a rocket from scratch for vastly less.
**Result:** SpaceX. Reusable boosters. Per-kilogram launch costs that have collapsed an entire industry's pricing model. The same first-principles move on battery packs ($600/kWh historical, ~$80/kWh in raw materials) led to the Gigafactory.

**Situation:** Derek Sivers founds CD Baby in the dot-com era. Everyone around him is raising large rounds, building elaborate office systems, hiring big teams.
**Application:** Sivers asks: what does a successful business actually need? Answer: happy customers. Not investors. Not fancy offices. Not big teams. He builds the business around that single first principle. The desks are planks of wood on cinderblocks. He builds his own office computers from parts. The infamous order-confirmation email ("a hush fell over the crowd as he put your CD into the finest gold-lined box money can buy") is a first-principles answer to the question "what would actually delight a customer?"
**Result:** $4M monthly revenue, no outside funding, one of the cleanest exits of the era. Sivers' line: "Having no funding was a huge advantage for me." The companies optimizing for what venture-backed companies were supposed to look like were reasoning by analogy. He was reasoning from the principle.

**Situation:** A founder is told the standard pricing for their B2B SaaS category is "$X per seat per month, payable monthly, with a 12-month contract."
**Application:** Five Whys. Why per seat? "Because that's how the category prices." Why? "Because the value scales with the number of users." Does it, in this case? Maybe not — maybe the value scales with the number of decisions made or transactions processed. Why monthly billing? "Because customers expect it." Do they, or did the first vendor in the category set that expectation and everyone copied? Why a 12-month contract? "To smooth revenue." Whose revenue — the buyer's or the seller's? At the bottom of the questioning, the founder finds that two of the four conventions are actually load-bearing for buyers and two are pure inheritance from the dominant incumbent. They re-price.
**Result:** A pricing structure that matches their actual value delivery rather than the category's accumulated conventions. Possibly a competitive moat — incumbents can't copy the pricing without admitting their old structure was arbitrary.

## Anti-Patterns (tactical)

**Don't:** Apply first principles to every decision in your day. The mental cost of decomposing every assumption is enormous. Reserve the discipline for the small number of decisions where being wrong about a foundational assumption would compound badly.
**Why:** The point of first principles is to escape the gravity of inherited consensus when it's holding you back. Applied to lunch, it's just procrastination dressed in philosophy.

**Don't:** Confuse first principles with contrarianism. Reaching the consensus answer through your own reasoning is also a successful application of the method. The goal is owning the conclusion, not differing from it.
**Why:** "First principles" has become a shibboleth that licenses bad ideas. The actual practice often produces the same answer the experts already gave — but now you understand why, and you'll know when conditions change enough that the answer should change too.

**Don't:** Use first principles to override domains with deep empirical knowledge you don't have. Reasoning from scratch about whether a drug is safe, or whether a bridge will stand, is dangerous when there's a century of accumulated evidence and the cost of being wrong is bodies.
**Why:** Aristotle and Descartes weren't trying to redesign penicillin from first principles. They were trying to find the unconditioned starting points of philosophical thought. The translation of the method to engineering and business works in domains where the cost of testing is low and the consensus is mostly historical accident. Where the consensus is hard-won knowledge, treat it as data — it doesn't get overruled by deduction.

**Don't:** Stop at "why?" once. Most assumptions hold under one why. They die under three. The friction in business meetings around three whys ("we can take this offline") is a feature of how rare the practice is, not a sign that you should stop.
**Why:** The shallow why catches surface assumptions, which are usually fine. The deep why catches the assumption that's been quietly compounding into your strategy for years. That's the one with the prize attached.

**Don't:** Mistake first principles for "ignore all expertise." Lifers in a domain often have implicit access to first principles you'd take years to derive. The discipline is to ask them why, not to dismiss them.
**Why:** Reasoning by analogy + ignoring experts = ungrounded confidence. Reasoning from first principles + actively learning from experts = the actual move. Musk taught himself rocket science before he tried to build a cheaper rocket. The work came first.
