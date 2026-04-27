---
triggers:
  - "user has a result that confirms what they already wanted to believe"
  - "user is celebrating a metric, lift, win, or forecast that came out conveniently"
  - "user is justifying a decision they've already made"
  - "user's reasoning has post-hoc rationalization patterns"
  - "user is presenting findings to themselves or to a board"
  - "user is rationalizing skipping a step (review, validation, customer call)"
use_when:
  - "self-deception is the most likely failure mode for the decision at hand"
  - "the user has personal / financial / reputational stake in one outcome being true"
  - "results came in suspiciously clean and on the desired side"
  - "the user is about to commit publicly to a claim they haven't stress-tested"
fails_when:
  - "the user is paralyzed by self-doubt and needs encouragement, not more skepticism"
  - "the cost of false negatives (ignoring a real result) exceeds the cost of false positives in this domain"
  - "the user is in a context where epistemic humility is being exploited (negotiation, hostile audience)"
related:
  - "cargo-cult-thinking.md"
  - "the-feynman-technique.md"
  - "doubt-as-a-tool.md"
  - "reality-vs-pr-and-the-challenger-lesson.md"
---

# Don't Fool Yourself

## When to Use

- When a result, metric, or finding has come in on the side the team wanted, and the impulse is to celebrate rather than audit.
- When you're about to commit (publicly, financially, organizationally) to a claim that hasn't been stress-tested.
- When a smart person near you is presenting findings and you have a vague feeling something is off but you can't articulate it.
- When a process has produced a clean number and you suspect the cleanness is the artifact, not the signal.
- When you're justifying a decision you've already emotionally made and looking for confirming evidence.

## Fails When

- The self-doubt is paralyzing rather than productive. Feynman's rule is *don't fool yourself* — not *never trust yourself*. People who use the rule as a permanent veto on action have misunderstood it.
- The user is in a hostile environment where any expressed uncertainty is weaponized. Honest doubt belongs in honest rooms; in some negotiations, it's a tactical mistake to say "I don't know" out loud.
- The cost of being wrong via *false negatives* (rejecting real findings) is higher than the cost of false positives. In some domains (search, exploration, brainstorming) the rule should be inverted.

## Core Idea

The most reliable way for a person to be wrong is to want a particular answer. Self-deception is not a moral failing; it is the default state of an evolved primate that prefers comfort to truth. The defense against it is *not* virtue or willpower. It is procedure: explicit, written-down checks installed at the moments most vulnerable to motivated reasoning. "After you've not fooled yourself, it's easy not to fool other scientists" — the hard part is upstream.

## Mechanism — the audit

The audit runs at every point where a conclusion is being reached:

1. **What did I want this answer to be, going in?** Write it down. If you don't know, you're already fooled.
2. **What would falsify this conclusion?** If nothing would, this isn't a conclusion; it's a belief.
3. **Did I specify the test before running it?** Pre-registration is the cheapest defense; post-hoc rationalization is the failure mode.
4. **Who, on this team / in this room, would be embarrassed if this turned out to be wrong?** Their interpretation is suspect — including yours, if you're in that group.
5. **What's the strongest counter-case?** State it in its strongest form. If you can't, you haven't done the work yet.
6. **What would I need to see to change my mind?** A specific number, observation, or test. If "nothing," see step 2.

## Worked Examples

- **Mr. Young's rats (1937).** A psychologist named Young ran rats down a corridor with doors on each side, trying to train them to choose "the third door from where they started." The rats kept going to the door where the food had been the time before. Young investigated obsessively: he repainted the doors identically, masked the smells, covered the corridor to block visual cues — the rats still found the right door. He finally discovered they were using the *sound the floor made* under their feet, and he could only fool them by mounting the corridor on sand. *That* was the experiment that made rat-running sensible — because it uncovered the cues the rats were really using, not what the experimenter assumed they were using. Feynman's punchline: subsequent rat-running studies *ignored* Young's controls and went on running rats the old way. Young had discovered the only thing that mattered, and the field had no use for it because it complicated their lives. (*Cargo Cult Science*, 1974, reprinted in *Surely You're Joking*.)
- **The Millikan oil-drop drift.** Millikan measured the electron's charge and got a number that was a little off — he had used the wrong value for the viscosity of air. Subsequent measurements of the electron's charge, plotted over time, crept slowly toward the correct value. Why slowly? Because each experimenter who got a result far from Millikan's *assumed their own apparatus must be wrong*, and went looking for a bug. Each one who got a result close to Millikan's didn't look as hard. The collective profession fooled itself for years. *"It's a thing that scientists are ashamed of — this history."* (*Cargo Cult Science*, 1974.)
- **The Wesson oil ad.** Feynman's contrast for what scientific integrity actually means: *"Last night I heard that Wesson oil doesn't soak through food. Well, that's true. It's not dishonest; but the thing I'm talking about is not just a matter of not being dishonest, it's a matter of scientific integrity, which is another level. The fact that should be added to that advertising statement is that NO oils soak through food, if operated at a certain temperature. If operated at another temperature, they ALL will — including Wesson oil. So it's the implication which has been conveyed, not the fact, which is true."* The audit catches the *implication*, not just the surface claim. (*Cargo Cult Science*, 1974.)
- **NASA Challenger management.** Feynman's *Appendix F* found that working engineers estimated catastrophic failure at roughly 1 in 100, while management's estimates were 1 in 100,000 — a thousandfold gap. *"What is the cause of management's fantastic faith in the machinery?"* he asked. The answer was institutional self-deception: each successful flight despite known O-ring erosion was treated as evidence of safety rather than as a near-miss that should have grounded the program. *"The argument that the same risk was flown before without failure is often accepted as an argument for the safety of accepting it again."* (Report of the Presidential Commission, Appendix F, June 1986.)

## Voice / Quotes

> "The first principle is that you must not fool yourself — and you are the easiest person to fool. So you have to be very careful about that. After you've not fooled yourself, it's easy not to fool other scientists. You just have to be honest in a conventional way after that."
> — *Cargo Cult Science*, Caltech commencement address, 1974

> "It's a kind of scientific integrity, a principle of scientific thought that corresponds to a kind of utter honesty — a kind of leaning over backwards. For example, if you're doing an experiment, you should report everything that you think might make it invalid — not only what you think is right about it: other causes that could possibly explain your results; and things you thought of that you've eliminated by some other experiment, and how they worked — to make sure the other fellow can tell they have been eliminated."
> — *Cargo Cult Science*, 1974

> "Details that could throw doubt on your interpretation must be given, if you know them. […] If you make a theory, for example, and advertise it, or put it out, then you must also put down all the facts that disagree with it, as well as those that agree with it."
> — *Cargo Cult Science*, 1974

> "The idea is to try to give all the information to help others to judge the value of your contribution: not just the information that leads to judgment in one particular direction or another."
> — *Cargo Cult Science*, 1974

> "The only way to have real success in science, the field I'm familiar with, is to describe the evidence very carefully without regard to the way you feel it should be. If you have a theory, you must try to explain what's good and what's bad about it equally."
> — *What Do You Care What Other People Think?*, pp. 117–118

> "When playing Russian roulette the fact that the first shot got off safely is little comfort for the next."
> — *Personal Observations on Reliability of Shuttle* (Appendix F), Rogers Commission Report, June 1986

## Coaching Moves

- Pre-register the criterion. Before running an experiment, write down (a) what you expect to see, (b) what would count as a positive result, (c) what would count as a null. Date and timestamp it. The act of pre-registration alone catches most motivated reasoning.
- For every decision memo, add a section: "What I'd need to see to change my mind." If you can't fill it in, the memo isn't ready.
- Hire / promote the person who, in the post-mortem of the failed launch, points to *their own* error first. The instinct to look at your own data before someone else's is the rare and valuable trait.
- When a number arrives that's surprisingly good, treat it like a number that's surprisingly bad: investigate before you celebrate.

## Anti-Patterns

- "We checked it three times" — three checks by people who all want the result to be right is one check.
- "But the math is so beautiful, it has to be true." Beauty is not a check on truth.
- "Trust your gut." Sometimes correct, often the engine of self-deception. Don't override gut without reason; don't treat it as evidence either.
- The gradual narrowing of definitions ("by 'success' we mean...") to keep the conclusion alive after the original definition stopped supporting it.
