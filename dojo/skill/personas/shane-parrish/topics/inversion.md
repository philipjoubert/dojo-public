---
triggers:
  - "user asks about inversion or 'invert always invert'"
  - "user is trying to figure out how to succeed at something vague"
  - "user asks about premortem or pre-mortem"
  - "user wants to improve a complex system but doesn't know where to start"
  - "user is making a major decision and wants to stress-test it"
  - "user mentions Charlie Munger, Carl Jacobi, or 'avoiding stupidity'"
  - "user asks 'how do I become a great X'"
use_when:
  - "the positive goal is vague and the failure modes are concrete"
  - "you're optimizing for a hard-to-measure outcome (a great culture, a happy life, a successful product) and need a tractable handle"
  - "a plan looks obviously good and nobody has stress-tested the downside"
  - "you're constructing a decision and want to surface what you're not seeing"
fails_when:
  - "the goal is genuinely about discovery — invention can't be reverse-engineered from a list of failures"
  - "you're using inversion to license risk-aversion across the board"
  - "the failure modes aren't enumerable (genuine novelty, frontier domains)"
  - "you're applying it to short, low-stakes choices where the overhead exceeds the value"
related:
  - "second-order-thinking.md"
  - "first-principles.md"
  - "margin-of-safety.md"
  - "mental-models-latticework.md"
---

# Inversion

## When to Use
- The positive goal is vague — "be successful," "build a great culture," "have a happy life"
- The failure modes are obvious and enumerable
- You're about to make a major decision and want to find what you're not seeing
- A plan has reached unanimous agreement and nobody has played the role of finding the cracks
- You're trying to improve something and the standard "what should we do?" question keeps producing the same low-impact answers
- You're solving a problem forward and you keep hitting the same wall

## Fails When
- Inversion can't generate genuine invention. Listing the things that would make a novel as boring as possible doesn't produce great novels — it just clears space
- The downside list becomes infinite and you become paralyzed by every conceivable failure mode
- You over-apply it to every trivial decision and turn life into a defensive crouch
- The failure modes are unknown unknowns (genuine frontier work) — the list you can write is incomplete in ways you can't see
- You substitute inverted thinking for forward thinking, rather than using both

## Core Concept

Inversion is the practice of flipping a problem around and solving it backward. Instead of asking "How do I win?" you ask "How would I guarantee losing?" — and then you don't do those things. Instead of asking "How do I be happy?" you ask "What makes people miserable?" — and you eliminate those.

The German mathematician Carl Gustav Jacob Jacobi summarized his method in three words: *man muss immer umkehren* — "invert, always invert." Charlie Munger picked it up and built it into Berkshire Hathaway's decision style. His most-quoted line: "All I want to know is where I'm going to die, so I'll never go there." Shane treats this as one of the core thinking habits, alongside second-order thinking and probabilistic thinking — the practices he returns to most.

The reason inversion works is asymmetric. The list of ways to succeed at something hard is enormous, diffuse, and often domain-specific. The list of ways to fail at the same thing tends to be shorter and more universal. As Shane writes: "Avoiding stupidity is easier than seeking brilliance." You don't have to be a genius to identify the obvious failure modes. You just have to look. Eliminate enough of them and the path to the positive outcome opens up — not guaranteed, but cleaner.

There's a second insight underneath this one. Forward thinking is *additive* — it generates new actions to take. Inverted thinking is *subtractive* — it identifies things to stop doing or never start doing. Additive thinking is more likely to introduce harm (what Shane and Taleb call iatrogenics, after the medical concept of harm caused by the treatment). Subtractive thinking, applied first, removes harm without introducing risk. It's not glamorous. Nobody gets a promotion for the dumb things they didn't do. But the long-run compounding favors the person who consistently avoided ruin over the person who occasionally swung for genius.

Inversion isn't a substitute for forward thinking. It's a complement. The discipline is doing both — articulating the goal forward, then flipping it and listing the failure modes, then solving for the failure modes, then re-checking the forward path. Most people skip the inversion step entirely, and that's where competitive advantage lives.

## How to Apply

1. **Articulate the goal forward, in concrete terms.** "I want to build a strong engineering culture." "I want this product launch to succeed." "I want to make a good decision about whether to take this job."

2. **Flip the goal.** Replace it with its opposite. "What would guarantee a terrible engineering culture?" "What would guarantee this product launch fails?" "What would make taking this job an obvious mistake in two years?"

3. **Enumerate the failure modes.** Write them down. Be honest, including the failure modes you'd rather not name. The list should be uncomfortable. If the list is short and obvious, you haven't pushed hard enough. The interesting failure modes are the ones that would make a thoughtful outsider wince.

4. **Eliminate the avoidable ones.** For each failure mode, ask: is there a structural change I can make that would prevent this? If the failure mode is "we hire people who don't care about the work," the structural fix is the hiring process, not exhortations about caring. If the failure mode is "we run out of cash before we get to product-market fit," the structural fix is more runway or lower burn, not optimism about timelines.

5. **For the failure modes you can't eliminate, build margin against.** Some failure modes are inherent to the bet. You can't eliminate them; you can build slack so they don't kill you. This is the bridge between inversion and margin of safety. Inversion identifies the cliffs; margin of safety puts a fence between you and them.

6. **Run a premortem.** A premortem is inversion applied to a specific decision. Imagine it's two years from now and the decision was a disaster. Write the story of how it became a disaster. Get the team to write their versions independently. Compare. The disasters that show up in multiple stories are your highest-risk failure modes — address those before committing.

7. **Use the inverse-checklist habit.** For repeated decisions, build a short list of failure modes you've seen. Before committing, run the checklist. This is less glamorous than inspired strategy but compounds enormously over a career.

## Examples

**Situation:** A company wants to "improve innovation." The leadership team brainstorms innovation initiatives — hackathons, innovation labs, new processes.
**Application:** Apply inversion. What would *guarantee* killing innovation? List: punish failed experiments, route all decisions through committee, demand that every project show ROI within a quarter, give the most political people the most influence over what gets funded, copy what other companies are doing, schedule innovation in formal hour-long meetings, never let people work on their own ideas. Now look at the company's actual practices. Most companies are doing several of these. The first move isn't to add an innovation program — it's to stop doing the things that already kill innovation.
**Result:** Subtractive change is usually faster, cheaper, and more honest than additive change. The hackathon becomes irrelevant if the underlying culture punishes the people who win it.

**Situation:** A founder is deciding whether to take a large funding round at a high valuation.
**Application:** Premortem. Imagine it's three years out and the round was a mistake. Why? Possibilities: the valuation was so high that the next round had to be a down round, which destroyed morale and gave the new lead onerous terms; the cash made the team sloppy on cost discipline and the runway evaporated faster than planned; the new investor's growth expectations forced premature scaling and the unit economics broke; the board composition shifted in ways that made strategic flexibility harder. Run the list. Each of those is a real risk for high-valuation rounds. Some can be structurally addressed (insist on standard terms, board composition rules, milestone-tied tranches). Others can only be mitigated by margin of safety (raise less than you could; keep burn lower than the round size implies).
**Result:** The decision either gets made with eyes open to the failure modes, or gets restructured to address them, or gets passed on. None of those outcomes were available without the inversion.

**Situation:** Munger and Buffett evaluating whether to enter a new investment category. The forward question — "could this make money?" — almost always answers yes.
**Application:** Inversion. "What would have to be true for us to lose meaningful capital here?" If the failure modes include things they can't evaluate (regulatory risk in a category they don't follow, technology risk in a domain they don't understand, fraud risk in a country with weak enforcement), they pass. Munger: "I want to think about things where I have an advantage over other people. I don't want to play a game where people have an advantage over me." This is inversion married to circle of competence — list the failure modes, check whether you can manage them, walk away if you can't.
**Result:** A track record built more on what they didn't invest in than what they did. The errors avoided were larger than the upside captured by the marginal bets they passed on.

## Anti-Patterns (tactical)

**Don't:** Use inversion to manufacture unlimited downside scenarios and freeze. Every action has imaginable failure modes. The discipline is identifying the *plausible* and *consequential* ones, not the exhaustive ones.
**Why:** Risk-aversion masquerading as analysis is a real failure mode of this method. The point of inversion is to surface what's actually likely to ruin you, not to generate enough fear to never act. Calibrate against base rates, not worst-case fiction.

**Don't:** Apply inversion to creative or generative work and expect it to produce the work. "What would make this a bad novel?" doesn't write a good novel. Inversion clears space — invention has to fill it.
**Why:** Inversion is a defensive tool. It's a check on plans, a generator of failure modes, a way to surface blind spots. It is not a substitute for the positive vision. Use it as the second pass, not the first.

**Don't:** Treat the inverted list as a reason to justify what you were already going to do. "We considered the failure modes and decided to proceed anyway" is meaningless if "proceed anyway" was the foregone conclusion. The inversion has to actually have the power to change the decision.
**Why:** Performative inversion is worse than no inversion — it gives the team a false sense that risks were considered. If you can't point to specific changes the failure-mode list produced, you didn't really run the exercise.

**Don't:** Skip inversion on the decisions you're most confident about. The decisions where everyone agrees are exactly the ones where the failure mode is most likely to be invisible. Confidence and convergence are warning signs, not green lights.
**Why:** Munger's edge wasn't in finding the deals nobody saw; it was in saying no to the deals everyone saw. The quality of your "no" pile is the long-run determinant of your "yes" pile's value.

**Don't:** Confuse inversion with pessimism. Pessimism predicts bad outcomes. Inversion identifies the structural causes of bad outcomes so they can be removed. The temperament is curious and disciplined, not gloomy.
**Why:** A pessimist sees the cliff and says "we'll fall." An inverter sees the cliff and says "we should not stand near the edge." Same data, different posture, very different downstream behavior.
