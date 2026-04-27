---
triggers:
  - "user is being told to defer to authority, consensus, or 'how it's done'"
  - "user is reasoning from analogy and the analogy is doing all the work"
  - "user is stuck because conventional wisdom forbids a move that seems right"
  - "user is evaluating a claim that's accepted without anyone being able to derive it"
  - "user wants to enter a field where they don't have credentials"
use_when:
  - "the conventional answer is suspiciously confident given the underlying uncertainty"
  - "you can actually reason it out from primitives in a reasonable amount of time"
  - "the cost of being wrong via authority is higher than the cost of doing the work"
  - "no one in the room can reconstruct the standard answer from first principles"
fails_when:
  - "the field really has accumulated genuine knowledge by working it out and you're reinventing the wheel"
  - "the primitives you're reasoning from are themselves wrong or incomplete"
  - "first-principles reasoning becomes contrarianism for its own sake"
  - "the timescale to derive doesn't fit the decision (you have to ship today)"
related:
  - "the-feynman-technique.md"
  - "make-it-concrete.md"
  - "doubt-as-a-tool.md"
  - "what-i-cannot-create-i-do-not-understand.md"
---

# First-Principles Thinking

## When to Use

- When you're being told "this is how it's done" by people who can't explain why.
- When the conventional answer in a field has been accepted for so long that nobody alive can reconstruct the original argument.
- When you're entering a domain without credentials and need to figure out which received wisdom is real and which is mythology.
- When a smart adversary has accepted the same premises everyone else has, and you suspect the win is in re-examining the premises.
- When you find yourself nodding at a chain of reasoning you couldn't actually rederive.

## Fails When

- The accumulated knowledge in the field is genuine and hard-won, and "first-principles reasoning" turns into the user reinventing — badly — what professionals figured out a century ago.
- The primitives you derive from are themselves wrong (this is the trap of "I reasoned it out myself" reaching confident wrong answers).
- It collapses into contrarianism — disagreeing with the consensus *because* it's the consensus, which is just authority-worship inverted.
- The timescale doesn't fit. Deriving from scratch takes time the decision doesn't have.

## Core Idea

Reason from the bottom up rather than the top down. Refuse to take a result on authority unless you can rederive it — at least on a particular case, at least roughly — from primitives you do trust. This is not anti-intellectualism or contempt for tradition; it is the opposite. It is the discipline of distinguishing knowledge that has been earned (and which therefore can be rederived) from knowledge that has merely been *passed down* (and which may have lost the supporting argument somewhere along the chain).

Feynman's signature move as a student and professor was to ignore the standard derivation in the textbook and rederive the result on a specific concrete case. If the result fell out, he believed it. If the standard derivation produced a result that didn't fall out from the concrete case, he found the bug in the derivation. Often the bug had been there for fifty years.

## Mechanism — how to actually do it

1. **State what you've been told as cleanly as possible.** No jargon you can't unpack. (See `the-feynman-technique.md`.)
2. **Identify the primitives — what you'd take as given without further argument.** For physics: experimental observations. For business: things customers actually do. Be ruthless about not smuggling in derived claims as primitives.
3. **Try to reconstruct the chain from primitives to claim, on a concrete case.** (See `make-it-concrete.md`.)
4. **Note where you stall.** A stall is either a gap in your understanding (do the work) or a bug in the standard story (the prize).
5. **Compare your reconstruction to the standard answer.** Where they agree, you have actually learned something. Where they disagree, one of you is wrong; figure out which.

## Worked Examples

- **The Wolfram recommendation letter (1981).** Feynman wrote a MacArthur Fellowship recommendation for the young Stephen Wolfram and named the working method directly: *"The method he uses in studying each question is not so much to read about it, but to work it all out himself. He works very hard. Such methods and such industry is, of course, the true source of creativity and originality."* What Feynman is recommending Wolfram for is precisely the discipline of refusing to inherit results — re-deriving the field on a specific case before believing it. (Letter reproduced in *Perfectly Reasonable Deviations from the Beaten Track*, p. 332.)

- **The brown-throated thrush.** Feynman's father took him on a walk and a kid teased him for not knowing the bird's name. The father's response, which Feynman cites as the formative episode of his intellectual life: *"You know in all the languages you want to know what the name of that bird is and when you've finished with all that, you'll know absolutely nothing whatever about the bird. You only know about humans in different places and what they call the bird. […] now look at the bird."* Feynman concludes: *"There is a difference between the name of the thing and what goes on."* (BBC, "The Pleasure of Finding Things Out," 1981; also in *What Do You Care What Other People Think?* and the 1966 NSTA "What Is Science?" address.)

- **The Brazilian education encounter.** After a year teaching in Brazil, Feynman discovered students could state Brewster's Angle perfectly — the index of refraction, the polarization direction, the tangent equation — but when he pointed at the bay outside the classroom window and asked them to apply it to the actual reflected sunlight, *"they hadn't any idea."* They had memorized the chain of derived results without ever once running it from primitives on a real case. Feynman's diagnosis was that "no science is being taught in Brazil," and he said so to the assembled professors and government officials. (*Surely You're Joking, Mr. Feynman!*, "O Americano, Outra Vez!" chapter.)

- **The Cornell psychology student.** A graduate student wanted to vary the conditions of an established rat-running experiment. Feynman insisted she first reproduce the original experiment in her own lab — to know whether the published result was real before building on it. The professor refused, saying the original had already been done; her job was to push the field forward. *"This was in about 1935 or so, and it seems to have been the general policy then to not try to repeat psychological experiments, but only to change the conditions and see what happens."* Feynman is identifying the moment a field stops re-deriving and starts inheriting. (Cargo Cult Science address, reprinted in *Surely You're Joking*.)

## Voice / Quotes

> "The method he uses in studying each question is not so much to read about it, but to work it all out himself. He works very hard. Such methods and such industry is, of course, the true source of creativity and originality."
> — Letter recommending Stephen Wolfram for the MacArthur Fellowship, c. 1981 (*Perfectly Reasonable Deviations from the Beaten Track*, p. 332)

> "I learned very early the difference between knowing the name of something and knowing something."
> — *What Do You Care What Other People Think?* (recounting his father's teaching)

> "Then a way of avoiding the disease was discovered. This is to doubt that what is being passed from the past is in fact true, and to try to find out *ab initio* again from experience what the situation is, rather than trusting the experience of the past in the form in which it is passed down."
> — "What Is Science?" address to the National Science Teachers Association, April 1966

> "Science is the belief in the ignorance of experts."
> — "What Is Science?" address to the National Science Teachers Association, April 1966

> "There is a difference between the name of the thing and what goes on."
> — "What Is Science?" address to the National Science Teachers Association, April 1966

> "Any real knowledge has to have been found out somehow. If an expert tells you that 'a great man invented it' and the ideas cannot be explained, then be suspicious."
> — Feynman, recorded interview (in *The Quotable Feynman*, ed. Michelle Feynman)

## Coaching Moves

- When evaluating a claim, ask: "Could I rederive this on a specific case in an afternoon?" If yes, do it before believing it. If no, ask whether you trust the chain that produced it.
- For each "best practice," ask: what was the original problem this solved, and is it our problem? If the original problem is gone, the practice is a fossil.
- When entering a new domain, distinguish (a) accumulated knowledge that has earned its place from (b) accumulated convention that just hasn't been re-examined. The first is a foundation; the second is a debt.
- Build a habit of rederiving, on a concrete case, any result you intend to act on at significant scale. The concrete case is the test (`make-it-concrete.md`).

## Anti-Patterns

- "First principles" used as a slogan to justify ignoring genuine domain expertise. Elon Musk gets quoted this way; the actual Musk operations involve enormous amounts of borrowed expertise. The slogan is a license; the work is the work.
- Reasoning from analogy and calling it first principles. ("Software is like biology" is an analogy, not a derivation.)
- Reasoning from primitives that are themselves wrong. The discipline of first-principles thinking includes auditing your primitives.
- Pretending to derive what you actually remember. The test is whether you could derive it if you didn't already know the answer.
