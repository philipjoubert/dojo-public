---
triggers:
  - "user claims to understand a system, model, or framework"
  - "user is about to act on a model they didn't build"
  - "user is reading a derivation, paper, or technical doc"
  - "user is hiring or evaluating someone whose understanding is being assessed"
  - "user is teaching or explaining and wants to know if they're really there"
use_when:
  - "the cost of pretending to understand is high"
  - "the system is small enough or important enough to be reconstructed"
  - "you want a generative test, not a recognitional one"
fails_when:
  - "the system is genuinely too complex to reconstruct in any reasonable time"
  - "applied as a perfectionist veto on action"
  - "reconstruction becomes an end in itself rather than a check on understanding"
related:
  - "the-feynman-technique.md"
  - "first-principles-thinking.md"
  - "make-it-concrete.md"
---

# What I Cannot Create, I Do Not Understand

## When to Use

- When you've been told you "understand" a system, model, framework, or argument.
- When you're about to act on a model you didn't build yourself.
- When evaluating whether a junior engineer / analyst / researcher actually understands something or is pattern-matching.
- When teaching: the test of whether the lesson worked.
- When reading a paper, derivation, or technical doc — at the points where you nodded.

## Fails When

- The system is genuinely too large or complex to reconstruct in any reasonable time. (You can't, in practice, rederive all of statistical mechanics in an afternoon.) The principle still applies on subsystems.
- Applied as a perfectionist veto: "I can't act on anything I haven't built from scratch" — that's not the rule. The rule is *don't claim to understand* what you can't construct, not *don't act* until you can.
- Reconstruction-for-its-own-sake: spending time rebuilding things off the critical path because the rebuilding is more enjoyable than the actual work.

## Core Idea

The line was on Feynman's blackboard at Caltech when he died: "What I cannot create, I do not understand." It is a statement about the nature of understanding, not a slogan. Understanding is *generative*: a person who genuinely understands a phenomenon can reconstruct it, vary it, predict its behavior in novel situations, and recognize when an argument about it is wrong. A person who only *recognizes* an explanation when they see it has the appearance of understanding without the substance.

This generalizes far past physics. You don't understand a business model if you can only nod when someone explains it. You understand it when you can rebuild it on a different industry's facts and watch it break in the right places. You don't understand an algorithm by reading the pseudocode; you understand it when you can re-derive it on a specific case, on paper, without the source. You don't understand a strategy until you can tell someone *why* it would fail in a different market and how it should be modified.

## Mechanism

For any claim of understanding:

1. **Pick a specific instance** of the thing.
2. **Try to construct it from primitives**, on paper or in code or in argument, without referring to the source.
3. **Stop where you stall.** Stalls are gaps. Don't bullshit past them.
4. **Compare your reconstruction to the source.** Where they agree: real understanding. Where they disagree: one of you is wrong; figure out which.
5. **Vary the case.** A person who can derive the standard example but no variation has memorized the example, not understood the principle.

## Worked Examples

- **The reconstruction habit.** Feynman described his working method explicitly: *"I happen to know this, and I happen to know that, and maybe I know that; and I work everything out from there. Tomorrow I may forget that this is true, but remember that something else is true, so I can reconstruct it all again. I am never quite sure of where I am supposed to begin or where I am supposed to end. I just remember enough all the time so that as the memory fades and some of the pieces fall out I can put the thing back together again every day."* (*The Character of Physical Law*, p. 47.) His memory was not a database; it was a generator. The understanding *was* the ability to rebuild.
- **The freshman Lectures as reconstruction.** When Feynman agreed to teach the two-year introductory physics course at Caltech, he re-derived the standard curriculum from primitives — not because he had forgotten it, but because re-deriving it was the only way to know what it actually said. The *Feynman Lectures on Physics* is the published artifact of a man performing the test on himself, in public, for two years.
- **The Mathematical Methods class in Brazil.** Teaching engineering students how to solve problems by trial and error, Feynman started with arithmetic. Eight out of eighty turned in the first assignment. The students protested that "this stuff was beneath them." But Feynman noted: *"Of course I realized what it was: They couldn't do it!"* They had read the words; they could not produce the things. Recognition without reconstruction. (*Surely You're Joking*, "O Americano, Outra Vez!")
- **The Brewster's Angle reconstruction.** When Feynman pointed at the bay and said *"now turn the polaroid,"* the students could not connect their fluently-recited definition of Brewster's Angle to the polarization they were now seeing. The textbook formula they could repeat. The phenomenon it described they could not generate from the formula. The same gap appears in every domain where vocabulary outruns construction. (*Surely You're Joking*, "O Americano, Outra Vez!")

## Voice / Quotes

> "What I cannot create, I do not understand."
> — On Feynman's Caltech blackboard at the time of his death, 1988

> "If you understand something, you can remember it, when you work it out yourself."
> — Interview with Charles Weiner, March 5, 1966

> "And you can re-create the things that you've forgotten perpetually — if you don't forget too much, and if you know enough. In other words, there comes a time where you'll know so many things that as you forget them, you can reconstruct them from the pieces that you can still remember. It is therefore of first-rate importance that you know how to triangulate — that is, to know how to figure something out from what you already know. It is absolutely necessary."
> — *Feynman's Tips on Physics*, p. 39

> "It will not do to memorize the formulas, and to say to yourself, 'I know all the formulas; all I gotta do is figure out how to put 'em in the problem!'"
> — *Feynman's Tips on Physics*, p. 38

> "I had a principle that everything that I wrote, I should understand inside out; that there was just a little bit less written than what I knew; and that whatever I wrote would be right."
> — Interview with Charles Weiner, June 28, 1966

## Coaching Moves

- Hire / promote on reconstruction. Ask the candidate to rederive a standard result in their field on a particular case, on a whiteboard, without preparation. The ones who can are different from the ones who can't.
- For yourself: every quarter, pick one core idea you claim to understand and rebuild it from scratch. Catch the gap before it catches you.
- When teaching, the goal is not the student's recognition of your explanation but their reconstruction of it on a new case. Test for the second.
- When reading a paper that bears on a decision, derive the central claim on your own data before believing the claim.

## Anti-Patterns

- Believing fluent re-explanation = understanding. You can fluently re-explain something you don't understand if you remember the words.
- Treating the rule as a perfectionist veto. Sometimes you have to act on incomplete understanding; the rule is to *know* you're doing that, not to refuse to do it.
- Confusing "I read it carefully" with "I understand it." Reading and understanding are different acts.
