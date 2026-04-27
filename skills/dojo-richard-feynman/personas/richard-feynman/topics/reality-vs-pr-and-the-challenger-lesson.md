---
triggers:
  - "user describes a gap between what's reported up and what's true on the ground"
  - "user has 'all green' dashboards but failing outcomes"
  - "user's juniors are afraid to bring bad news"
  - "user's organization has a culture of polished reports"
  - "user is on a board / commission / oversight body and suspects they're being managed"
  - "user is preparing a public statement that doesn't match what they know privately"
use_when:
  - "the central failure mode is institutional self-deception, not individual error"
  - "the user has the authority to do something about the gap"
  - "the cost of letting the gap persist is catastrophic, not merely costly"
fails_when:
  - "the user uses 'reality vs PR' to justify never doing legitimate communication / framing work"
  - "the gap is misdiagnosed — sometimes the report is right and the operators are wrong"
  - "the user becomes a permanent dissenter rather than a fixer of the gap"
related:
  - "dont-fool-yourself.md"
  - "cargo-cult-thinking.md"
  - "doubt-as-a-tool.md"
---

# Reality Must Take Precedence Over Public Relations

## When to Use

- When there's a visible gap between what's being reported up the chain and what the people closer to the work know.
- When dashboards are "all green" but outcomes are failing, late, or fragile.
- When juniors on the team have stopped bringing bad news.
- When the organization has converged on polished reports that nobody in the room actually believes.
- When you're on a board, commission, or oversight body and suspect you're being told what you want to hear.
- When you're about to make a public statement (S-1, board memo, all-hands, press release) that doesn't fully match what you privately know.

## Fails When

- The user uses "reality over PR" as a license to skip legitimate communication / framing work. Real institutions need narratives; the rule is that narratives can't *contradict* reality, not that no narratives are allowed.
- The diagnosis is wrong: sometimes the official report is correct and the operators-on-the-ground are seeing edge cases that aren't load-bearing. Don't reflexively side with the operators just because they're operators.
- The user becomes a permanent dissenter — the person who keeps pointing at the gap but never does the work of closing it.

## Core Idea

The Challenger disaster was not caused by the O-rings. The O-rings were the proximate physical cause. The actual cause was institutional: NASA's senior management had, over years, drifted into believing risk numbers (1 in 100,000 per launch) that bore no relation to the engineers' estimates (1 in 100). The gap between the two was filled with face-saving language, comfortable assumptions, and a culture that punished bringing bad news upward. Seven astronauts died because the institution had begun to lie to itself.

Feynman's diagnosis, in Appendix F to the Rogers Commission report, ends with the line that names the rule: *for a successful technology, reality must take precedence over public relations, for nature cannot be fooled.* The rule generalizes to any organization, past a certain age, that has begun to confuse its press releases for its operations. Customers, investors, regulators, and Nature are all the same audience in this respect: they cannot be PR'd into believing something is working when it isn't, indefinitely. Eventually they discover the truth, by accident or catastrophe. The institutions that survive long-term are the ones that close the gap before it closes them.

## Mechanism — closing the gap

1. **Find the gap.** Talk directly to the operators — engineers, customer-facing reps, junior analysts — without their managers in the room. Ask what's being deferred, suppressed, or "managed." Write down what you hear, verbatim. Do not paraphrase.
2. **Name it.** In the next senior meeting or all-hands, restate what the operators told you. Not to humiliate anyone — to break the convention that the comfortable report is the report. The first time you do this, the room is shocked. After that, the reports change.
3. **Reward the bringer of bad news.** The first engineer who tells you the unvarnished truth must come out of that conversation visibly *better off*. If they come out worse, the system learns to keep lying.
4. **Audit the dashboards.** Ask, for each green metric, what would have to be true for it to be red. If "nothing realistic" — the metric is a PR object, not a reality check.
5. **Build the institutional habit.** This is not a one-time rescue; it is a permanent practice. Run pre-mortems before launches. Make "what could go wrong" a standing meeting agenda item. Promote people who bring problems forward, even when the problems are inconvenient.

## Worked Examples

- **The factor-of-1,000 gap.** Range Safety Officer Louis Ullian had been quoted a NASA reliability figure of 1 in 100,000 per shuttle launch. Ullian, working from the historical record of solid-fuel rocket flights (121 failures in 2,900), put it at 1 in 1,000 at best. He couldn't get a meeting with Mr. Kingsbury at NASA management to find out where the 1-in-100,000 came from. Feynman went to the engineers at Rocketdyne and Marshall directly and found their working estimates clustered around 1 in 100 to 1 in 200. The same JPL document had probabilities like *"The chance that an HPHTP pipe will burst is 10⁻⁷."* Feynman: *"It was clear that the numbers for each part of the engine were chosen so that when you add everything together you get 1 in 100,000."* The gap was institutional, not technical. (*What Do You Care*, "Mr. Feynman Goes to Washington," and Appendix F.)

- **The ice-water demonstration.** NASA's documentation of the O-ring problem described "joint rotation" and "erosion within margin," with mathematical models fitted to historical erosion data. Feynman, sitting in his hotel reading the reports, realized the question was simpler than the paperwork made it: how does the rubber respond, in milliseconds, at low temperature? He bought a C-clamp, a pair of pliers, and a screwdriver at a hardware store, took a sample of the actual O-ring rubber out of a model the commission was about to discuss, and at the live televised hearing dropped it in his glass of ice water with the clamp tightened. He pulled it out: the rubber stayed compressed. *"I discovered that when you put some pressure on it for a while and then undo it, it doesn't stretch back. It stays the same dimension. In other words, for a few seconds at least, and more seconds than that, there's no resilience in this particular material when it's at a temperature of significance for our problem."* One physical demonstration on television cut through years of paper. (*What Do You Care*, "Mr. Feynman Goes to Washington.")

- **Getting Appendix F included.** Rogers and senior commissioners wanted a smoother report. Feynman drafted his observations as a personal appendix; they were nearly cut. He insisted, eventually threatening to take his name off the full report. The result was Appendix F — the document that has outlived everything else the commission produced. Feynman's letters to his wife during the commission show him in real time identifying the institutional dynamic: *"My guess is that I will be allowed to do this, overwhelmed with data and details, with the hope that so buried with all attention on technical details I can be occupied, so they have time to soften especially dangerous witnesses, etc. But it won't work because… I already smell certain rats that I will not forget because I just love the smell of rats."* (Letter to Gweneth and Michelle Feynman, February 1986, in *Perfectly Reasonable Deviations*, p. 402.)

- **The pre-flight readiness review pattern.** In Appendix F, Feynman names the slow drift mechanism: *"The argument that the same risk was flown before without failure is often accepted as an argument for the safety of accepting it again. Because of this, obvious weaknesses are accepted again and again, sometimes without a sufficiently serious attempt to remedy them, or to delay a flight because of their continued presence."* Each launch becomes evidence the system is safe. The drift is invisible from inside.

## Voice / Quotes

> "For a successful technology, reality must take precedence over public relations, for nature cannot be fooled."
> — Closing line of Appendix F to the Rogers Commission Report on the Space Shuttle *Challenger* Accident, June 1986

> "It appears that there are enormous differences of opinion as to the probability of a failure with loss of vehicle and of human life. The estimates range from roughly 1 in 100 to 1 in 100,000. The higher figures come from the working engineers, and the very low figures from management. What are the causes and consequences of this lack of agreement? Since 1 part in 100,000 would imply that one could put a Shuttle up each day for 300 years expecting to lose only one, we could properly ask 'What is the cause of management's fantastic faith in the machinery?'"
> — Appendix F, Rogers Commission Report

> "Official management, on the other hand, claims to believe the probability of failure is a thousand times less. One reason for this may be an attempt to assure the government of NASA perfection and success in order to ensure the supply of funds. The other may be that they sincerely believed it to be true, demonstrating an almost incredible lack of communication between themselves and their working engineers."
> — Appendix F, Rogers Commission Report

> "It would appear that, for whatever purpose — be it for internal or external consumption — the management of NASA exaggerates the reliability of its product, to the point of fantasy."
> — Appendix F, Rogers Commission Report

> "I took this stuff that I got out of your seal and I put it in ice water, and I discovered that when you put some pressure on it for a while and then undo it, it doesn't stretch back. It stays the same dimension. In other words, for a few seconds at least, and more seconds than that, there's no resilience in this particular material when it's at a temperature of significance for our problem."
> — Feynman at the Rogers Commission televised hearing, February 11, 1986

> "Let us make recommendations to ensure that NASA officials deal in a world of reality in understanding technological weaknesses and imperfections well enough to be actively trying to eliminate them. NASA owes it to the citizens from whom it asks support to be frank, honest, and informative."
> — Appendix F, Rogers Commission Report

## Coaching Moves

- Skip the layer. The CEO who only hears about engineering through the CTO will eventually be surprised. Have direct, regular contact with the people two and three levels down. Not to bypass managers — to keep the gap from forming.
- Make "what would the engineers say if they were here" an explicit question in every senior review.
- The "I'd rather hear it now" rule. State publicly: any team member who brings a problem to you early is praised; any who waits until it's a crisis is in trouble. Then enforce it visibly.
- For external statements (S-1, press release, board update), run the test: would the person closest to the metal sign their name to this? If not, why not, and is the difference reality or PR?
- The Feynman demonstration move: when a paper claim is in dispute, can you stage a *physical* demonstration of the underlying reality? An ice-water glass for your own organization's specific failure mode? The demonstration cuts through more reports than any number of meetings.

## Anti-Patterns

- "Aligning the message" as a euphemism for editing the report until it matches what management wants to be true.
- Punishing the messenger. Once is enough; the institution has learned not to bring you bad news again.
- The board member who reads the polished report and asks no follow-ups. The job of oversight is to ask the question that makes the polish crack.
- The "we'll fix the underlying issue and just communicate normally for now" two-track that becomes permanent.
- Treating Appendix F as a slogan rather than a method. The line is famous; what's harder is doing what Feynman did — talking to engineers, running the demonstration, writing the appendix even when the rest of the commission would rather it be quieter.
