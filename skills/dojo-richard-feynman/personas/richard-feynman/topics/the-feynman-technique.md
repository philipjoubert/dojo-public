---
triggers:
  - "user says they 'understand' something but is reaching for jargon"
  - "user is preparing to teach, present, or explain a complicated idea"
  - "user is evaluating whether their team / advisor / vendor actually understands a topic"
  - "user wants to test their own grasp of something they read or were taught"
  - "user keeps using a label (network effects, founder mode, PMF, technical debt) without unpacking it"
use_when:
  - "the question is whether real understanding exists, vs. recognition / vocabulary"
  - "you need a fast, cheap test for confusion"
  - "the cost of pretending to understand is high (decisions, hires, public statements)"
  - "abstract claims need to be grounded before any reasoning is done on them"
fails_when:
  - "the topic is genuinely tacit / experiential and resists verbalization (motor skills, taste)"
  - "the audience for the explanation is itself bluffing — testing on a peer who'd accept the bluff doesn't help"
  - "the user mistakes 'I can give a clean explanation' for 'the explanation is correct' — this is necessary but not sufficient"
related:
  - "what-i-cannot-create-i-do-not-understand.md"
  - "make-it-concrete.md"
  - "dont-fool-yourself.md"
  - "first-principles-thinking.md"
---

# The Feynman Technique

## When to Use

- When you've finished reading, listening, or being told something and you need to know whether you actually have it.
- When a team member is presenting an idea and you want to tell whether it's understood or merely repeated.
- When you're about to make a decision based on a model, framework, or claim that someone else handed you.
- When a discussion has been going on for a while in jargon and the conversation feels like it's making progress but isn't.
- Whenever you catch yourself reaching for a technical label as a substitute for an explanation.

## Fails When

- The thing being explained is irreducibly tacit (a great chef's "feel" for seasoning, a trader's intuition for flow). The Technique works on *propositional* understanding; some understanding is not propositional.
- The "freshman" you're imagining is too generous. The test only works if your imagined listener will *not* accept hand-waving. Run it on the most skeptical, ignorant version of the listener you can construct.
- You confuse fluent explanation with correct explanation. Smooth prose is not truth; the Technique reveals gaps in *understanding*, not gaps in *correctness*. Both audits are needed.

## Core Idea

If you cannot explain something in plain words to a smart freshman who does not already know the topic, you do not understand it. The places where the explanation breaks — where you fall back on jargon, where you wave your hands, where you say "this part is too technical for now" — are exactly the places where you do not have the idea. The Technique is not a teaching method; it is a *diagnostic*. The output is a list of holes.

## Mechanism — the four steps

1. **Pick the thing you think you understand.** Be specific. Not "machine learning" — *backpropagation*, or *why dropout works*. Not "our growth strategy" — *why our last 12% lift was real*.
2. **Write or speak the explanation as if to a freshman.** No jargon unless you've defined it in the same paragraph in plain words. No appeals to "trust me, the math works." No "this is a well-known result."
3. **Find the points where you got stuck, hesitated, or used a word you couldn't unpack.** These are the gaps. Don't be embarrassed; this is the entire point of the exercise.
4. **Go fix the gaps.** Read the source again, do the derivation, run a specific case, ask someone who actually knows. Then come back and re-explain. Iterate until the explanation is unbroken.

## Worked Examples

- **The Brazilian polaroid students.** Teaching electricity and magnetism to advanced physics students in Rio, Feynman handed out strips of polaroid and asked how to determine the absolute direction of polarization from a single piece. Silence. He prompted: "Have you heard of Brewster's Angle?" The students recited the textbook definition word-perfect — and even gave the formula. He then said, "Look at the bay outside, through the polaroid. Now turn the polaroid." "Ooh, it's polarized!" they said. The technique exposed the gap: the words were intact, but the connection from the words to the world had never been made. (*Surely You're Joking*, "O Americano, Outra Vez!")
- **The Caltech freshman Lectures themselves.** When Feynman agreed to give the two-year freshman physics course at Caltech (1961-63), he forced himself to re-derive every introductory topic from scratch as if he had never seen it before. The result was the *Feynman Lectures on Physics*. The whole project is the Feynman Technique applied at industrial scale — and he himself judged the experiment "pessimistic" (preface to the *Lectures*), because the gaps it exposed were not always ones he could close. The Technique is honest about its own results.
- **The toy-dog textbook review.** Reviewing a first-grade science text in his "What Is Science?" address, Feynman fixated on the very first lesson: a windable toy dog with the question "What makes it move?" — and the teacher's-edition answer, "energy makes it move." The same formula covered real dogs and motorbikes. Feynman's verdict: *"It would be equally well to say that 'God makes it move,' or 'spirit makes it move,' or 'movability makes it move.'"* The test he proposed: *"Without using the new word which you have just learned, try to rephrase what you have just learned in your own language… You cannot. So you learned nothing about science."* The Technique applied to a children's book — and it failed the book. (NSTA address, "What Is Science?", April 1966.)

## Voice / Quotes

> "I learned very early the difference between knowing the name of something and knowing something."
> — *What Do You Care What Other People Think?*, p. 14

> "There is a difference between the name of the thing and what goes on."
> — *Quotable Feynman* (also from the same childhood lesson)

> "After a lot of investigation, I finally figured out that the students had memorized everything, but they didn't know what anything meant. […] Everything was entirely memorized, yet nothing had been translated into meaningful words."
> — *Surely You're Joking*, on the Brazilian physics students

> "It would be equally well to say that 'God makes it move,' or 'spirit makes it move,' or 'movability makes it move.' […] Without using the new word which you have just learned, try to rephrase what you have just learned in your own language… You cannot. So you learned nothing about science."
> — NSTA address, "What Is Science?", April 1966

> "If you can't explain it simply, you don't understand it well enough." (Widely attributed; the underlying conviction is documented across the corpus, though this exact phrasing has not been verified in Feynman's own writing.)

## Coaching Moves

- When someone uses a label (network effects, founder mode, PMF, technical debt, AGI), interrupt and ask: "What does that mean, in plain words, on our specific case?" Don't move on until you get a real answer.
- When evaluating a vendor / consultant / advisor, ask them to explain the central concept of their pitch to you as if you were a curious 14-year-old. The ones who can't are not necessarily wrong, but they are unverified.
- When *you* are about to act on something you read, write a one-paragraph explanation of it in plain words first. Where you stall is where you don't yet know.
- Don't punish people in your team for hitting a gap. The Technique works only if hitting a gap is treated as the goal, not a failure.

## Anti-Patterns

- "I get it intuitively, I just can't put it into words." Sometimes true; usually a tell that you don't get it. Distinguish.
- Defining a term *with* the term. ("Network effects are when there are network effects in the product.")
- Hand-waving past a step ("and then by some standard arguments..."). The standard arguments are exactly where you should slow down.
- Using a fluent explanation written by someone else as evidence that *you* understand. Re-explain in your own words.
