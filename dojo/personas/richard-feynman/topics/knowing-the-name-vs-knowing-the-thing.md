---
triggers:
  - "user uses a category label as if it were an explanation (network effects, founder mode, PMF)"
  - "user describes their startup with a positioning sentence and assumes they understand it"
  - "user invokes a buzzword (AGI, web3, AI-native) without unpacking the mechanism"
  - "user is pattern-matching to a famous case rather than reasoning about their own"
  - "user is satisfied with a diagnosis once they've named the thing"
use_when:
  - "the conversation has converged on a label and stopped at the label"
  - "the cost of mistaking the name for the thing is high"
  - "you need to break a team out of vocabulary-as-thinking"
fails_when:
  - "the user is using a label efficiently as shorthand and would unpack it if asked"
  - "the user is in a context where shared vocabulary is necessary for coordination"
  - "applied as a perpetual gotcha — every word can be unpacked further"
related:
  - "the-feynman-technique.md"
  - "make-it-concrete.md"
  - "cargo-cult-thinking.md"
  - "dont-fool-yourself.md"
---

# Knowing the Name vs Knowing the Thing

## When to Use

- When a team uses a category label (*network effects*, *founder mode*, *PMF*, *technical debt*, *flywheel*, *moat*) as if naming the phenomenon were the same as understanding it.
- When a founder describes their startup with a fluent positioning sentence and assumes the sentence captures the mechanism.
- When a buzzword (*AGI*, *agentic*, *AI-native*, *web3*) is doing all the explanatory work in a pitch or strategy.
- When someone is pattern-matching to a famous case ("we're the Stripe of X") rather than reasoning about their own situation.
- When a diagnosis stops the moment the thing has been named, before anyone has asked what the thing actually is.

## Fails When

- The user is using a label efficiently as shorthand among people who *would* unpack it if asked. (Domain shorthand among practitioners is fine; it becomes a problem when the shorthand is mistaken for understanding by people who couldn't unpack it.)
- The user is in a context where shared vocabulary is *necessary* for coordination. Sometimes "let's all agree to call this X" is the right move.
- It's applied as a perpetual gotcha — every word can be unpacked further, and a discussion never converges. The point is to break vocabulary-as-thinking, not to make every conversation infinite.

## Core Idea

This is the most generalizable Feynman line, and the one founders need most: *I learned very early the difference between knowing the name of something and knowing something.* His father, walking him through the woods, would name a bird in four languages and then say "now you know the *names* of the bird in four languages and you still don't know anything about the bird." The point: the brain accepts a label as a closed answer. Once you have the word for it, the question stops asking itself.

This is the central failure mode of business strategy, product reasoning, and most "frameworks" discourse. *We have network effects.* — Do you? Describe the actual mechanism by which one user's action increases the value of the product to another user, in your specific case, today. *We have product-market fit.* — Do you? Describe the specific user, the specific job, the specific alternative they would otherwise be using. *We have a moat.* — Of what kind, and why does it actually deter the actual competitor? *We're operating in founder mode.* — What does that mean concretely about your last week's calendar?

In every case, the label closes a question that the speaker hasn't yet answered. Feynman's discipline is to keep the question open until the *thing itself* — the mechanism, the user, the constraint, the asymmetry — has been described in plain words. The label is allowed back in only after the description has been done, as a name for the thing you now actually understand.

## Mechanism — keeping the question open

1. **Catch the label.** When someone (or you) uses a category word, mentally flag it: "we're now operating with a name, not yet with a thing."
2. **Ask for the mechanism.** Not "what is X" in the abstract — "what is X *in our specific case*, this week, today?" The label has to be cashed out in the particulars.
3. **Demand the case.** (See `make-it-concrete.md`.) A specific user, a specific moment, a specific number, a specific failure. The label that can't be cashed in concrete cases is empty.
4. **Distinguish description from explanation.** "We have technical debt" describes a phenomenon; it does not explain it. The explanation is "we shipped feature X without writing the test, then changed the API, and now changing the auth flow takes three days because of the missing test." Without the second sentence, the first is a name.
5. **Restate without the label.** Try to make the same point in plain words, with no jargon. Where you can't, the label was carrying the weight that no actual understanding had earned.

## Worked Examples

- **The bird-walking story.** The canonical illustration. A kid in Feynman's neighborhood teases him: "See that bird? What kind of bird is that?" Feynman doesn't know. The kid says, "It's a brown-throated thrush. Your father doesn't tell you anything!" But Feynman writes: *"It was the opposite: my father had taught me. Looking at a bird he says, 'Do you know what that bird is? It's a brown throated thrush; but in Portuguese it's a … in Italian a … in Chinese it's a … in Japanese a … etcetera. […] you know in all the languages you want to know what the name of that bird is and when you've finished with all that, you'll know absolutely nothing whatever about the bird. You only know about humans in different places and what they call the bird. […] now look at the bird.'"* The names had been hiding the question of what the bird actually does. (BBC, "The Pleasure of Finding Things Out," 1981; the same anecdote also appears in *What Do You Care What Other People Think?* and the 1966 NSTA "What Is Science?" address.)
- **The Brazilian Brewster's Angle.** Teaching advanced physics students in Rio, Feynman handed out polaroid strips and asked how to determine the absolute direction of polarization. Silence. He asked if they'd heard of Brewster's Angle. They recited the textbook definition word-for-word, including the formula. He pointed at the bay outside and said *"now turn the polaroid"* — and only then did one of them say "Ooh, it's polarized!" The labels — *Brewster's Angle, index of refraction, plane of reflection* — were intact and pristine. The connection from the labels to a window and a bay was missing. The students had stored names; nothing had been *translated into meaningful words*. (*Surely You're Joking*, "O Americano, Outra Vez!")
- **The toy-dog textbook.** Reviewing a first-grade science textbook in his "What Is Science?" address, Feynman zeroed in on its first lesson: a windable toy dog with the question "What makes it move?" — and the teacher's-edition answer, "energy makes it move." The same formula covered real dogs, motorbikes, falling balls. Feynman: *"It would be equally well to say that 'God makes it move,' or 'spirit makes it move,' or 'movability makes it move.'"* He proposed the test: *"Without using the new word which you have just learned, try to rephrase what you have just learned in your own language… You cannot. So you learned nothing about science."* (NSTA address, "What Is Science?", April 1966.)
- **The "Fitz-Cronin effect."** Feynman noted his own discipline: *"The result of this is that I cannot remember anybody's name, and when people discuss physics with me they often are exasperated when they say 'the Fitz-Cronin effect,' and I ask 'What is the effect?' and I can't remember the name."* The lab joke is the principle: he refused to let the label do the work the explanation should do. (NSTA address, "What Is Science?", April 1966.)
- **Modern translation.** Every "Why is our retention bad?" answered with "we don't have product-market fit." That isn't an answer. That's the question with a more impressive name.

## Voice / Quotes

> "I learned very early the difference between knowing the name of something and knowing something."
> — *What Do You Care What Other People Think?*, p. 14

> "You know in all the languages you want to know what the name of that bird is and when you've finished with all that, you'll know absolutely nothing whatever about the bird. You only know about humans in different places and what they call the bird. […] now look at the bird."
> — Feynman recounting his father's lesson, BBC "The Pleasure of Finding Things Out," 1981 (also in *What Do You Care What Other People Think?*)

> "There is a difference between the name of the thing and what goes on."
> — *Quotable Feynman* (from the same childhood lesson, restated)

> "After a lot of investigation, I finally figured out that the students had memorized everything, but they didn't know what anything meant. […] Everything was entirely memorized, yet nothing had been translated into meaningful words."
> — *Surely You're Joking*, on the Brazilian physics students

> "It would be equally well to say that 'God makes it move,' or 'spirit makes it move,' or 'movability makes it move.' […] Without using the new word which you have just learned, try to rephrase what you have just learned in your own language… You cannot. So you learned nothing about science."
> — NSTA address, "What Is Science?", April 1966

> "One does not learn a subject by using the words that people who know the subject use in discussing it. One must learn how to handle the ideas and then, when the subtleties arise which require special language, that special language can be used and developed easily. In the meantime, clarity is the desire."
> — "New Mathematics," written for the California State Department of Education

## Coaching Moves

- In any meeting, when a category label appears, ask: "what does that mean in our specific case?" If the room can't answer, you've found a place where the work hasn't been done yet.
- Run the test on your own pitch. Take your one-line description of your company. Replace every category word (network effects, AI-native, marketplace, platform, etc.) with the actual mechanism you'd describe to someone who didn't know the words. Did the pitch survive? If not, the labels were doing the work.
- For each "framework" your team uses, demand a worked example *from your own data*. Not from the framework's source. The framework that has never been cashed in your context is operating as vocabulary, not analysis.
- When evaluating a candidate or vendor: ask them to explain their central concept without using the term they came in with. The ones who can are different from the ones who can't.
- For your own learning: when you read a new term, do not consider yourself as having learned anything until you can describe the underlying phenomenon without using the term. The term is then a *handle* on the understanding; it is not the understanding.

## Anti-Patterns

- The "we have a flywheel" pitch where no one can describe what specifically spins what.
- "First principles" used as itself a label — a word deployed to signal rigor without doing the work the rigor would require.
- Naming a problem as a substitute for solving it. ("This is a culture issue.")
- Believing fluent use of category vocabulary equates to understanding. The fluent speaker may have only learned the words.
- Using the principle as a perpetual gotcha — every word can be unpacked further, every concept rests on other concepts. The point is to *cash out the labels that are doing real work in your reasoning*, not to refuse all vocabulary.
