---
triggers:
  - "user is reasoning at a high level of abstraction without examples"
  - "user is using general terms (the market, our users, the technology, AI) without specifying"
  - "user has a model that 'works in theory'"
  - "user is having an argument that has gone on for a while in jargon"
  - "user is evaluating a claim that's been made in the abstract"
use_when:
  - "the conversation has been abstract long enough to lose contact with what's actually being decided"
  - "you suspect a confusion is hiding inside an abstraction"
  - "two parties are arguing past each other and might agree if forced to a specific case"
  - "you need to test whether a model survives contact with reality"
fails_when:
  - "the question is genuinely about the general case (statistical claims, theory)"
  - "any specific example would be cherry-picked and misleading"
  - "the user uses 'just give me a concrete example' to derail genuinely abstract reasoning"
related:
  - "first-principles-thinking.md"
  - "the-feynman-technique.md"
  - "what-i-cannot-create-i-do-not-understand.md"
---

# Make It Concrete

## When to Use

- When a discussion has been at a high level of abstraction long enough that nobody is sure what's being decided.
- When a model "works in theory" and you suspect the theory has not been tested on a specific case.
- When two smart people are arguing past each other and you can't tell whether they agree or disagree.
- When evaluating a claim phrased in general terms ("our users," "the market," "the technology").
- When you're about to make a decision and the reasoning has been abstract throughout.

## Fails When

- The question is genuinely about the general case — a statistical claim about a population, for instance, or a theorem.
- Any specific example would be cherry-picked or misleading. (In contested empirical fields, the choice of example *is* the argument.)
- "Give me a concrete example" gets used to derail legitimate abstract reasoning the user finds uncomfortable.

## Core Idea

Before any abstraction is allowed to stand, demand a specific example you can run the reasoning on. The example must be *real* — a particular user, a particular trade, a particular bug, a particular customer call — not a constructed hypothetical. If the asker can't produce a real example, the abstraction is probably hollow. If they can, the work is now to walk the reasoning through the example and watch where it breaks. Most arguments collapse at this step. The ones that survive earn the right to be generalized.

This is Feynman's most consistent intellectual move. In lectures, he reaches for a specific moving object before discussing forces in general. In the Manhattan Project, he reasons about specific arrangements of fissile material before reasoning about criticality in the abstract. In consulting, he runs the proposed system on a specific input rather than evaluating its design diagrams.

## Mechanism

1. **When you hear an abstract claim, ask: "Give me one specific case where this happened."** Not "what would happen if" — "what *did* happen, last week, with a real instance."
2. **Walk the reasoning through the case, step by step.** At each step, ask: does the claim hold up here? If not, where did it break?
3. **If the claim breaks on the case, you're done.** The abstraction is wrong, or at minimum needs a qualifier the original speaker hadn't included.
4. **If it holds, run a second case. And a third.** Three is the minimum before the abstraction has earned trust.
5. **Notice if you can't find three real cases.** That's data. The claim may be theoretical only.

## Worked Examples

- **The Brazilian polarized light demonstration.** Teaching what was supposed to be Brazil's most advanced physics course on electricity and magnetism, Feynman handed students strips of polaroid and asked them how to determine the absolute direction of polarization for a single piece. They had no answer. He hinted: *"Look at the light reflected from the bay outside."* Silence. He asked: *"Have you ever heard of Brewster's Angle?"* Instantly: *"Yes, sir! Brewster's Angle is the angle at which light reflected from a medium with an index of refraction is completely polarized."* They knew the index, the tangent relation, the polarization direction — perfectly. But when he said *"Look at the bay outside, through the polaroid. Now turn the polaroid,"* and they cried *"Ooh, it's polarized!"* — the abstraction had never once been connected to a concrete instance. Feynman concluded: *"Everything was entirely memorized, yet nothing had been translated into meaningful words."* (*Surely You're Joking, Mr. Feynman!*, "O Americano, Outra Vez!" chapter.)

- **The chess-game analogy in the Messenger Lectures.** When Feynman explains how physicists discover laws without observing every interaction, he refuses the abstract account and reaches for a specific case: *"Suppose that physics, or rather nature, is considered analogous to a great chess game with millions of pieces in it, and we are trying to discover the laws by which the pieces move… For instance, suppose there is one bishop only, a red bishop, on the board, then since the bishop moves diagonally and therefore never changes the colour of its square, if we look away for a moment while the gods play and then look back again, we can expect that there will be still a red bishop on the board, maybe in a different place, but on the same colour square. This is in the nature of a conservation law."* The general principle (conservation laws can be inferred from invariances without watching every move) is delivered through a specific bishop on a specific square. (*The Character of Physical Law*, Lecture 1.)

- **The Challenger probability number.** NASA management told Feynman the failure probability per launch was 1 in 100,000. The abstract number was beyond audit until he asked the engineers to walk him through it on a specific component. The same JPL report had probabilities like *"The chance that a HPHTP pipe will burst is 10⁻⁷"* — for individual nuts and bolts. Feynman observed: *"You can't estimate things like that; a probability of 1 in 10,000,000 is almost impossible to estimate. It was clear that the numbers for each part of the engine were chosen so that when you add everything together you get 1 in 100,000."* Once forced down to the concrete component, the abstraction collapsed. (*What Do You Care What Other People Think?*, Mr. Feynman Goes to Washington.)

- **Mlodinow's recollection.** Working alongside Feynman at Caltech, Leonard Mlodinow brought him a derivation he had followed but not re-done. Feynman: *"Just because you are following someone doesn't mean you are going down the correct path. When you can derive it yourself, then you understand it. And maybe you can believe it."* The "derive it yourself" instruction is the operational form of "make it concrete" — run the abstraction on a case you control. (*Feynman's Rainbow*, Mlodinow.)

## Voice / Quotes

> "I can't understand anything in general unless I'm carrying along in my mind a specific example and watching it go."
> — *Surely You're Joking, Mr. Feynman!*, p. 244

> "There must always be a parallel between a general theorem and a special example of a kind. In fact, I personally find — people are different; some people think abstractly very well — I don't. I always have to have examples to understand something the first time I hear it, and then I generalize from the examples."
> — Interview with Charles Weiner, March 1966 (Niels Bohr Library and Archives)

> "The physicist is always interested in the special case; he is never interested in the general case. He is talking about something; he is not talking abstractly about anything."
> — *The Character of Physical Law*, Lecture 2

> "Everything was entirely memorized, yet nothing had been translated into meaningful words. So if I asked, 'What is Brewster's Angle?' I'm going into the computer with the right keywords. But if I say, 'Look at the water,' nothing happens — they don't have anything under 'Look at the water'!"
> — *Surely You're Joking, Mr. Feynman!*, "O Americano, Outra Vez!"

## Coaching Moves

- Make "give me a concrete example" your most-used phrase in any technical or strategic conversation. It will save you more bad decisions than any other single move.
- When writing a memo, force yourself to include at least one specific instance for every general claim. Where you can't supply one, mark the claim as unverified.
- In meetings, when an abstract argument has been going for ten minutes, interrupt: "Can someone walk us through this on a real customer / trade / bug?" Watch the conversation become useful.
- For your own reasoning: any abstract conclusion you reach, immediately test it on the most recent real case in your memory. If the case doesn't fit, the abstraction needs work.

## Anti-Patterns

- The hypothetical-as-example move: "Imagine a user who…" The hypothetical user is exactly the user the abstraction was built to fit. Demand a real one.
- Cherry-picking: choosing the one example that fits and ignoring the cases that don't. The first example is necessary; the third is the test.
- Allowing the example to be retrofit: "Well, in *that* case, what I really meant was…" The criterion has to be stable across cases or the claim is empty.
