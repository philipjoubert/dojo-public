---
triggers:
  - "user defends a strategy or theory because 'it fits the data'"
  - "user is choosing between two stories that both explain the past"
  - "user has a vision/positioning/values doc that 'works for any product'"
  - "user invokes a prediction or metric as proof of understanding"
  - "user appeals to 'we'll know more when the next test runs'"
  - "user describes a market read or customer narrative they can't poke holes in"
  - "user says 'so far so good' about a model that has never been wrong"
use_when:
  - "the founder is committing real resources behind an explanation"
  - "the explanation is doing strategic work — directing hiring, capital, focus"
  - "there is at least one rival worth comparing against"
fails_when:
  - "you're in genuine open exploration and any structure is scaffolding"
  - "the question is procedural, not explanatory ('which API endpoint do we hit?')"
  - "you have only one viable explanation and the choice is whether to act"
  - "you mistake elegance for hardness — simple is not the same as constrained"
related:
  - "reach-of-explanations.md"
  - "fallibilism-no-authoritative-sources.md"
  - "don-t-destroy-error-correction.md"
  - "problems-inevitable-problems-soluble.md"
  - "creativity-as-replication-under-criticism.md"
---

# Good Explanations Are Hard to Vary

## When to Use

- When you are about to commit real resources — money, hires, runway, focus — behind an explanation of why something works or why it will.
- When evaluating any narrative offered as the reason for a result: the growth chart, the failed launch, the lost deal, the great hire, the bad quarter.
- When a strategy doc, mission statement, or set of values has the property that any future result would seem consistent with it.
- When someone says "the data confirms our thesis" — which thesis, exactly, and what data would have refuted it?
- When a competitor's positioning or a customer's stated reason for buying could just as easily have been any of five neighbouring stories.
- When you are tempted to A/B test or run an experiment without first stating two genuinely competing explanations.
- When you find yourself reaching for "Occam's razor" or "the simpler theory wins" as a tiebreaker.

## Fails When

- **You are in genuine open exploration.** The first weeks of a new product, the rough sketch of a research direction, the early conversation with a co-founder — at this stage all theories are scaffolding. You tolerate hand-waving because you're trying to find what the explanation might even be. The criterion bites once you start staking real resources behind a particular shape of theory.
- **The question is procedural, not explanatory.** "Which authentication library?" "Where do we host?" These are not problems that need a hard-to-vary theory of the world. They are problems with well-known background knowledge and rules of thumb that work inside their domain. The criterion is for explanations of *why something works* — not for choosing tools.
- **You only have one viable explanation and the choice is whether to act.** Sometimes there isn't a rival yet. Acting on the only standing explanation is correct; the rule is not "wait for two." It's "when two appear, the burden inverts."
- **You confuse simple with hard-to-vary.** "Demeter is sad" is a simple explanation. So is "users want a good product." Both are easy to vary. Simplicity is one feature good explanations often have — it isn't the criterion.
- **You weaponise it to dismiss anything you don't like.** "That's not hard to vary" said in a voice of triumph is a tell you've forgotten that the work is doing the variation yourself, not labelling someone else's idea.

## Core Concept

For most of the history of human thought, people supposed that the way to test a theory was to check whether it predicted what actually happened. The Persephone myth predicts that winter happens once a year. So does the axis-tilt theory. Both are testable. Both fit the data. The conventional view says: keep both, run more tests, the better one will eventually emerge.

The conventional view is wrong, and the failure mode it produces is exactly the failure mode that destroys most company strategies, most political ideologies, and most of what people call "data-driven decision-making." Consider the Persephone myth. Demeter, goddess of the harvest, mourns when her daughter is taken to the underworld for half the year, and her sadness commands the world to grow cold. Now ask: why those specific gods? Why a marriage contract enforced by a magic seed? Why a daughter and not a son? In the Nordic version, seasons are caused by Freyr's eternal war with the forces of cold; when he is winning, the world is warm. Why a war and not a contract? Why one god and not three?

There is no principled answer. *Every detail of the Persephone myth could be replaced by something else without changing what it predicts.* The author wasn't being constrained by the seasons when he chose magic seeds over magic apples. He was being constrained by his culture, his audience, his sense of story. Now contrast the axis-tilt explanation. The Earth's axis is tilted relative to the plane of its orbit. For half the year, the northern hemisphere is tilted toward the sun, receiving more direct radiation per unit area; for the other half, the southern. *Try to vary it.* Try saying the seasons are caused by the moon instead of the sun — the moon's position doesn't repeat annually, so the prediction breaks. Try saying it's the gods' moods rather than geometry — moods don't have hemispheres. Try saying the tilt produces winter everywhere at once — that contradicts the Australian growing season. Every detail of the explanation is doing work; you can't substitute parts without breaking what it predicts.

That is the difference between a good explanation and a bad one. Not testability — both myths and the axis-tilt theory are testable. *Hardness*. A good explanation is one whose details are so tightly constrained by the problem that you cannot vary them without losing the explanation. As I put it in *The Beginning of Infinity*: "It is not yours to modify. It has an autonomous meaning and an autonomous domain of applicability." If you find yourself able to swap any element of your theory without changing what it explains, the theory wasn't constraining anything to begin with — and it should be rejected on sight, before any experiment.

This inverts the standard view of the scientific method. Most accounts of the difference between myth and science make far too much of testability — as if the ancient Greeks' great mistake was that they didn't send expeditions to the southern hemisphere. But they could never have guessed that such an expedition would tell them anything until they'd already conjectured that seasons would be out of phase, and that conjecture could only be hard to vary if the underlying explanation was good. *Testability matters because it lets us reject bad explanations.* But most bad explanations should be rejected before we test them — because their details can be reinterpreted to fit any outcome, and so passing or failing the test changes nothing. Science would be impossible if it weren't for the fact that the overwhelming majority of false theories can be rejected out of hand without any experiment, simply for being bad explanations.

For a founder, the implication is severe. A strategy document that survives any quarterly result, a market positioning that fits any product, a set of cultural values that retroactively justifies whatever the team did this month — these are easy-to-vary explanations, and they explain nothing. They feel rigorous because they fit the data. So did the Persephone myth. The question is not "does this story account for what happened?" but "could a slightly different story have accounted for it just as well, and if so, what is *this* story actually telling me?" If the answer is "nothing distinctive," the story is doing no work, and acting on it is the same epistemic move as acting on superstition.

## How to Apply

1. **Generate at least one rival before acting.** Before committing to a theory of why something is working or failing, articulate a second theory that fits the same observations. If you can't construct a rival, you don't yet understand the situation well enough to act on the first theory — you've just got a story you find appealing. The work is upstream of testing: produce two genuinely competing explanations *first*, then design the test that distinguishes them.

2. **Try to vary the details of your own explanation.** Take your current theory and ask: if I swap this element for that one, does the explanation still account for what I'm trying to explain? If yes — for any element — that element wasn't doing work. Either find one that does, or admit that your theory has loose joints and isn't yet load-bearing.

3. **Refuse "fits the data" as sufficient.** Whenever you catch yourself or a teammate saying "the metrics support this" or "users behave this way, so the theory must be right," remember: any number of theories fit any finite set of data. The question is not whether yours is consistent with the data, but whether the rival theories aren't.

4. **Treat predictions in the rival's domain as the real test.** A good explanation makes predictions in territory you didn't design it for. (See `reach-of-explanations.md`.) If you can't say what *new* observation would distinguish your theory from a competing one, you haven't got two theories yet — you've got one theory and one decoration.

5. **Reject bad explanations on sight, without testing.** If a proposed explanation has the property that its author could have substituted three other stories that fit the same facts equally well — about why churn dropped, why this candidate is the right hire, why our last launch flopped — do not run an experiment. The experiment cannot help you. Reject it now.

6. **Hold your good explanations harder than feels comfortable.** Once an explanation is genuinely hard to vary, it has an autonomous meaning. It applies in territory you haven't surveyed and makes predictions you didn't ask for. Don't soften it because the prediction is inconvenient. The thing that makes an explanation good is precisely that you can't tweak it to dodge an awkward implication — including implications about your own product, your own quarter, your own roadmap.

7. **Distinguish "we don't yet have an explanation" from "this is the explanation."** Saying "we don't know why retention dropped" is honest. Saying "users are getting bored" when you mean "we have no idea, but bored is a respectable-sounding word" is the start of self-deception that compounds.

## Examples

**Situation:** A founder argues that their growth has stalled because "the market is saturated." Pressed, she also mentions that a key paid channel got more competitive, that a recent feature confused users, and that the sales team turned over. Each of these is offered as supporting "saturation."
**Application:** None of those facts uniquely picks out market saturation. They are all consistent with the saturation story; they are also consistent with "we shipped a bad feature into a still-expanding market," with "our paid channel is now negative-ROI but the underlying market is fine," and with "we have a sales execution problem that has nothing to do with demand." The saturation story has the structure of the Persephone myth: every detail can be replaced by something else (it's not the channel, it's the feature; it's not the feature, it's the team) without changing what it predicts (growth will not return). It's not telling us anything.
**Result:** The right move is not to test the saturation theory. The right move is to construct one or two rivals that account for the same facts and then ask which observations would distinguish them. "If the channel is the cause, organic acquisition should still be healthy." "If the feature is the cause, cohorts pre-launch should retain better than cohorts post-launch." Now there is something to look at.

**Situation:** Aristarchus of Samos in the third century BCE has the axis-tilt theory of seasons. He has never travelled south of Ethiopia. He has no evidence about Australia or the Pacific.
**Application:** It would be tempting, if he wanted to be cautious, to confine his theory to the Mediterranean — to say "this explains seasons in the known world, and we don't claim anything beyond that." But the axis-tilt theory cannot be confined that way. Tilts work the same on both hemispheres. To deny what the theory predicts about Australia, Aristarchus would have to deny what it says about Earth's geometry generally — at which point the theory has stopped explaining anything. It is not his to modify.
**Result:** This is what a good explanation does for a founder too. If your theory of why your enterprise customers churn explains the U.S. data, and the theory is hard to vary, it makes claims about what should happen in Europe, in your next product line, with customers you haven't sold to yet. You don't get to confine it to the cohort you're comfortable with. If you try, you've replaced the explanation with a rule of thumb, and rules of thumb break unpredictably the moment the conditions change.

**Situation:** A strategy team writes a set of company values: "We move fast." "We put customers first." "We disagree and commit." A year later, after a series of mixed decisions, the values are unchanged, the team can point to each one as supporting their behaviour, and the values feel as true as they did at the start.
**Application:** This is the failure mode in pure form. The values are easy to vary in both directions: moving slowly to be careful is "putting customers first"; moving fast over an objection is "disagreeing and committing." After the fact, any decision is consistent with the values; before the fact, the values rule out nothing. The team experiences this as principled. It is the opposite of principled — it is principle-shaped language with no constraining content.
**Result:** Real values are hard to vary. "We will not lie to customers, including by omission, even when it costs us a deal" is a value: it forbids specific behaviour, the cost is real, and a year of decisions can be checked against it. "We put customers first" forbids nothing. The first rules out moves; the second is a permission slip. If your values cannot be cited to overrule a decision someone in the room wanted to make, they aren't doing work.

## Anti-Patterns (tactical, specific to this framework)

**Don't:** Conclude that because a theory is testable, it is therefore good.
**Why:** Testability is a floor, not a ceiling. The yodelling-prevents-winter theory is testable — yodel, see if winter comes, conclude. The gambler's "I can feel that tonight is my night" is testable. So is the prophet's. The Persephone myth is testable. Every one of these can be reinterpreted on failure ("you yodelled wrong"), which means that running the test buys nothing. Testability matters in combination with hardness, never alone.

**Don't:** Use "Occam's razor" as the deciding criterion.
**Why:** Occam's razor — "the simplest explanation is best" — is one of the most over-cited and least operative principles in popular epistemology. There are plenty of very simple bad explanations. "Demeter did it" is simple. "The market wanted it" is simple. Simplicity is sometimes a feature of hardness, but it is not the criterion. Two equally simple theories can be tested by which is harder to vary, and that is the work the razor was meant to do.

**Don't:** Confine a good explanation to the territory it was designed for.
**Why:** If your theory of why your last hire worked out is genuinely good, it makes claims about hires you haven't made. If your theory of why this customer cohort churns is genuinely good, it makes claims about cohorts you haven't acquired yet. Saying "it only applies here" is a tell that you have a rule of thumb dressed as an explanation, and you should be operating with appropriate uncertainty rather than confidence borrowed from a category mistake.

**Don't:** Mistake "we ran the experiment, the metric moved" for an explanation.
**Why:** The metric moving tells you the metric moved. *Why* it moved is a separate question — and if you can't answer it, you don't know that the next experiment in the same series will move it again. A grandmaster can write a book about why a knight sacrifice wins; a chess engine can only show that it didn't lose. A founder who can only say "users converted more on variant B" is in the chess-engine position. They will be surprised when the effect disappears, because they never knew why it appeared.
