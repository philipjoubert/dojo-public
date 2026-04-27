---
triggers:
  - "user describes an organization with all the right rituals but no results"
  - "user is evaluating a process, framework, or methodology that's been adopted"
  - "user mentions 'best practices' or 'industry standard' as a justification"
  - "user reports green dashboards but failing outcomes"
  - "user is replicating what worked at FAANG / unicorn / famous company without the substrate"
  - "user is doing the form of something (sprint planning, OKRs, design reviews) without the function"
use_when:
  - "the form of rigor is in place but the function is missing"
  - "you need to diagnose why a well-run-looking process is failing"
  - "the user is about to install a process because someone successful uses it"
  - "the team has converged on rituals that nobody can explain the purpose of"
fails_when:
  - "the form actually IS the function in this case (regulatory compliance, ceremonial roles)"
  - "the user is using it to dismiss legitimate process they don't want to do"
  - "the airplane really is coming and you've just been impatient"
related:
  - "dont-fool-yourself.md"
  - "the-feynman-technique.md"
  - "first-principles-thinking.md"
  - "reality-vs-pr-and-the-challenger-lesson.md"
---

# Cargo Cult Thinking

## When to Use

- When a team has adopted "the way Google does it" / "the way Stripe does it" / OKRs / sprint planning / design reviews — but the *outcomes* the original practice produced aren't appearing.
- When an institution has the dashboards, the rituals, the documents, and the meetings, and is failing anyway.
- When someone is justifying a decision with "this is industry best practice."
- When a process has clearly become an end in itself rather than a means to anything.
- When you're about to install a process because of who else uses it, rather than because you understand the mechanism by which it produces its effect.

## Fails When

- Some ritual really is load-bearing in ways that aren't obvious. (Ceremonies, regulatory compliance, certain trust signals.) Not all form-without-immediate-substance is cargo cult.
- The "airplanes" really are coming, and the user is just being impatient. Some valuable processes have long lag times before the result manifests.
- The accusation gets used to dismiss disciplines the user doesn't want to do (testing, documentation, design review, code review). "It's just cargo culting" is a thought-terminating phrase when used wrongly.

## Core Idea

The South Pacific islanders who, after WWII ended and the cargo planes stopped coming, built wooden runways with bamboo control towers and waited for the planes to return — they did not misunderstand cause and effect through stupidity. They had observed a ritual (American military operations) and inferred that the ritual *was* the cause. The form was perfect; the airplanes didn't come, because the actual mechanism that produced cargo (a global supply chain run by a foreign military) was not the wooden runway.

This is the default failure mode of institutions past a certain age. They acquire the form of whatever produced their early success — the rituals, the org charts, the dashboards, the language — and continue to perform them long after the underlying mechanism has changed or been forgotten. Outsiders see runways. Insiders see *exactly* what they saw before. The airplanes don't come.

## Mechanism — the diagnosis

For each significant process, ritual, or "best practice" in the organization, ask:

1. **What is this supposed to produce?** Be specific — not "alignment" or "rigor," but a concrete observable output.
2. **What is the mechanism by which the form produces the function?** Articulate it. If you can't, you've identified a candidate.
3. **Is the function actually being produced?** Compare against base rates without the process.
4. **If we deleted this process tomorrow, what specifically would break first?** If the answer is vague or no one knows, that's data.
5. **Who instituted this, when, and for what reason that no longer applies?** Many processes are rusted-in solutions to problems that have been gone for years.

## Worked Examples

- **The Wesson Oil example.** In the same 1974 address, Feynman contrasts scientific integrity with advertising: *"Last night I heard that Wesson oil doesn't soak through food. Well, that's true. It's not dishonest; but the thing I'm talking about is not just a matter of not being dishonest, it's a matter of scientific integrity, which is another level. The fact that should be added to that advertising statement is that no oils soak through food, if operated at a certain temperature. If operated at another temperature, they all will — including Wesson oil. So it's the implication which has been conveyed, not the fact, which is true."* The form (a true statement) is preserved; the function (informing the listener) is lost. The runway is built; no airplanes land. (Cargo Cult Science address, reprinted in *Surely You're Joking*.)

- **Mr. Young's rats (1937).** Feynman holds up the experiment of a Mr. Young, who tried to train rats to enter the third door down a corridor and discovered the rats were using cues he hadn't controlled for — sight, smell, the *sound of the floor under their feet*. Young eventually had to put the corridor on sand to get clean results. *"From a scientific standpoint, that is an A-number-one experiment. That is the experiment that makes rat-running experiments sensible, because it uncovers the clues that the rat is really using — not what you think it's using."* Feynman's point: *"I looked into the subsequent history of this research. The subsequent experiment, and the one after that, never referred to Mr. Young. They never used any of his criteria of putting the corridor on sand, or being very careful. They just went right on running rats in the same old way, and paid no attention to the great discoveries of Mr. Young… But not paying attention to experiments like that is a characteristic of Cargo Cult Science."* The form (rat-running experiments) continues. The function (actually controlling for confounds) was abandoned. (Cargo Cult Science address.)

- **The Cornell psychology graduate student.** A student wanted to do a follow-up experiment varying the conditions of a published rat result. Feynman insisted she first *replicate* the original result in her lab — to know whether the published claim was robust before extending it. Her professor refused: the experiment had already been done; replication would waste time. *"It seems to have been the general policy then to not try to repeat psychological experiments, but only to change the conditions and see what happens."* The form (the journal-article ritual of citation and extension) was perfect. The function (knowing what's actually true about rats) was missing. (Cargo Cult Science address.)

- **The National Accelerator Lab.** Feynman recounts an experiment using deuterium that compared its results to data on light hydrogen taken on a different apparatus, because the experimenter couldn't get program time to redo the light hydrogen control on his own equipment — *"because there wouldn't be any new result."* The men running the program were so anxious for novel results, in order to keep funding flowing for public relations purposes, that they were destroying the scientific value of the experiments themselves. The form (publishable novelty) intact; the function (controlled measurement) sacrificed. (Cargo Cult Science address.)

## Voice / Quotes

> "In the South Seas there is a cargo cult of people. During the war they saw airplanes land with lots of good materials, and they want the same thing to happen now. So they've arranged to make things like runways, to put fires along the sides of the runways, to make a wooden hut for a man to sit in, with two wooden pieces on his head like headphones and bars of bamboo sticking out like antennas — he's the controller — and they wait for the airplanes to land. They're doing everything right. The form is perfect. It looks exactly the way it looked before. But it doesn't work. No airplanes land. So I call these things cargo cult science, because they follow all the apparent precepts and forms of scientific investigation, but they're missing something essential, because the planes don't land."
> — Cargo Cult Science, Caltech commencement address, 1974

> "It's a kind of scientific integrity, a principle of scientific thought that corresponds to a kind of utter honesty — a kind of leaning over backwards. For example, if you're doing an experiment, you should report everything that you think might make it invalid — not only what you think is right about it."
> — Cargo Cult Science, 1974

> "The first principle is that you must not fool yourself — and you are the easiest person to fool."
> — Cargo Cult Science, 1974

> "So I have just one wish for you — the good luck to be somewhere where you are free to maintain the kind of integrity I have described, and where you do not feel forced by a need to maintain your position in the organization, or financial support, or so on, to lose your integrity. May you have that freedom."
> — Closing line of the Cargo Cult Science address, 1974

## Coaching Moves

- For every recurring meeting or ritual: ask the team what its purpose is. Different answers, or no answers, mean it has become cargo.
- "If we stopped doing this for a quarter, what specific thing would visibly break?" — if the team can't answer, run the experiment.
- When importing a practice from a famous company, ask: what was the *substrate* under that practice (the people, the scale, the constraints) at the time it produced the result? Do we have that substrate?
- Annual ritual audit: list every recurring process, justify each one against current outcomes, kill the ones that can't be justified.

## Anti-Patterns

- The "but Google does it" defense.
- "We've always done it this way" used as justification for a process younger than the company.
- Adding *more* ritual when the current ritual fails — building bigger runways and louder bonfires.
- Treating accusation of cargo-cult as itself a cargo-cult move (using it as a slogan rather than a diagnosis).
