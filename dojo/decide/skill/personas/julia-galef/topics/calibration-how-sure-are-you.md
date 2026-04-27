---
triggers:
  - "user says they are 'sure' or 'certain' about a claim with real stakes"
  - "user asks how confident they should be in a forecast, plan, or hire"
  - "user is arguing as if something is obvious or has 'no chance' of going a particular way"
  - "user wants to improve their forecasting or judgment"
  - "user describes a decision that hinges on the probability of an outcome"
use_when:
  - "the answer to the user's question depends on their actual probability of being right, not how right they feel"
  - "the user is defending a belief without having priced in the downside"
  - "there's a concrete claim that could be settled by an outcome"
fails_when:
  - "the question is about values or preferences, not facts — 'should I want X' doesn't have a probability"
  - "the user is in the middle of executing and needs to act — calibration is a habit you build between decisions, not during them"
  - "the stakes are trivial and the time cost of quantifying isn't worth the friction"
related:
  - "scout-vs-soldier.md"
  - "thought-experiments-for-bias.md"
  - "motivation-without-self-deception.md"
  - "influence-without-overconfidence.md"
---

# Calibration — How Sure Are You, Really?

## When to Use
- The user just said something like "there's no way," "obviously," "100% sure," "definitely," or "it's a slam dunk" about a claim that could in fact be wrong.
- The user is making a decision whose payoff depends on a probability — hiring, funding, launching, trusting someone, bet-the-company moves.
- The user is defending a belief without ever having asked themselves what it would look like if they were wrong.
- The user wants to improve their judgment as a habit, not just this one call.

## Fails When
- **Values questions** — "Should I want kids?" has no probability. Don't force calibration on questions where the output is a preference, not a fact.
- **Mid-execution** — when the user needs to swing the bat, introspecting on their 72%-vs-78% confidence is a distraction. Calibrate before and after, not during.
- **Trivial stakes** — stopping to quantify whether you'll like the restaurant is overkill. Calibration earns its keep when the decision matters.

## Core Concept

Most people treat "how sure am I?" as a binary: do I feel any doubt, or don't I? If the answer is "no, I don't feel any doubt," they report "100% sure." That's the press secretary talking — the part of your mind whose job is to make clean, confident statements to the outside world (and to yourself).

A scout treats confidence as a *prediction about being right*. Putting a belief in the "70% sure" bucket means: this is the kind of thing I expect to be right about roughly seven times out of ten. Do that across all your beliefs and you can actually check yourself — your "70% sure" claims should come true about 70% of the time. That's called being *calibrated*. It's an abstract ideal, but it's measurable, and it's a skill with a fast learning curve. Most people become well-calibrated on trivia questions after a couple of hours of practice.

The internal move that gets you there is switching from the press secretary to the board of directors. The press secretary says, "Our toothpaste whitens teeth better than any other brand." The board, hearing a proposal for a rigorous blind trial, suddenly asks: "Wait — would we actually win that study?" The press secretary makes claims; the board makes bets. A scout learns to tell the difference between those two feelings, and to reach for the second one when the stakes are real.

## How to Apply

1. **Notice the claim.** When you or someone else asserts something with no hedging — "there's no way," "definitely," "obviously" — mark it. That's a calibration opportunity.

2. **Run the equivalent-bet test.** Imagine a box with four balls, one of them gray. You can either bet on your claim being right, or bet on drawing the gray ball — same payoff either way. Which bet do you prefer? If you prefer the ball (25% chance), your real confidence is below 25%. If you prefer betting on your claim, it's above 25%. Keep adjusting the number of balls until the two bets feel equally good. That ratio is your real probability. This works because it makes the press secretary stop talking — you can't bluff a ball in a box.

3. **Make the hypothetical concrete.** Vague beliefs can't be tested. If you believe "our servers are secure," the hypothetical is: suppose we hired a hacker; if they broke in, you'd owe a month's salary. Now how sure do you feel? If you believe "I was the reasonable one in that fight," the hypothetical is: a neutral third party hears both sides and judges; you win $1,000 or lose $1,000. Now how sure?

4. **Use the five levels.** For trained calibration, five bins is enough: 55% (barely better than a coin), 65%, 75%, 85%, 95%. Past 95% you should be rare. Putting things at 95% and being wrong 20% of the time is the most common overconfidence pattern. Respect the extremes — "100%" almost never earns its keep.

5. **Track predictions.** Write down the claim, the probability, the deadline, and the test. Check back. That's where the calibration skill actually gets built. Without a feedback loop, "being careful about confidence" is just a vibe.

6. **Prefer predictions that pay rent.** A prediction you can check beats an assertion you can't. "This hire will work out" doesn't pay rent. "This hire will still be here in 12 months and will have shipped at least one major feature by month 6" does. When you can't state the test, you're not sure what you believe yet — go back and make it concrete.

## Examples

**Situation:** A founder says, "I'm 100% sure we'll hit our Q3 revenue number. There's no way we miss."
**Application:** Equivalent-bet test. Would you rather bet $50K on hitting the number, or bet $50K on drawing a gray ball from a box with 20 balls (5% chance of losing)? The founder hesitates. Would you rather bet on the revenue number, or draw from a box with 10 balls (10% chance of losing)? Still not sure. What about 5 balls (20%)? Now they prefer the balls. So their actual confidence is somewhere in the 80–90% range, not 100%. That changes the plan — 15% chance of missing is the scenario worth a second look.
**Result:** The false certainty dissolves without the founder losing motivation. They're now running the miss scenario and building a cushion, instead of being blindsided in October.

**Situation:** A founder tells you Spock is their logical role model.
**Application:** Remind them of Spock's actual track record. When Spock says "impossible," it happens 83% of the time. When he says "more than 99.5% likely," it happens 17% of the time. His predictions are *anti-correlated* with reality. Sounding logical and being calibrated are different skills.
**Result:** The founder notices that "I feel certain" and "I'm likely to be right" are two completely separate claims. Confidence theater doesn't survive contact with a prediction log.

**Situation:** A founder asks whether self-driving cars will be on the market within a year. They start to scoff, "That's crazy." You ask: how sure?
**Application:** Ball bet, 1 in 4. Prefer the ball (easy bet). Ball bet, 1 in 16. Now the founder prefers the tech bet — some company might be further along than they're letting on. Ball bet, 1 in 9. Now it's a genuine toss-up. Actual confidence lands around 11%.
**Result:** "That's crazy" becomes "unlikely but not impossible, about 1 in 9." That's a usable input for strategy. "Crazy" wasn't.

**Situation:** A founder is practicing calibration by scoring themselves on trivia. They got 85% of their "95% sure" answers right.
**Application:** That's not a disaster — it's the standard overconfidence bias. Flag it explicitly: "You're systematically overconfident at the high end. When you feel 95% sure, treat it as 85% and act accordingly." This single correction, applied consistently, improves most major decisions more than any framework upgrade would.
**Result:** They stop pricing low-probability risks at zero. The "this will never happen" failure modes start getting a line of defense.

## Anti-Patterns (tactical)

**Don't:** Let someone hide behind "I'm just careful — I only claim what I know for sure."
**Why:** That's the press secretary with extra steps. Refusing to quantify isn't the same as being calibrated. It's often the opposite — people who won't give probabilities are usually the ones whose gut estimates are most deformed, because they've never checked. Push for a number. Even "somewhere between 60 and 80%" is progress.

**Don't:** Confuse calibration with pessimism or hedging.
**Why:** A well-calibrated scout is willing to say "95% sure" when they really are 95% sure. The goal isn't to downgrade everything; it's to match the number to reality. Chronically saying "I'm not sure" is its own miscalibration — underconfidence is just as wrong as overconfidence, it just looks humbler.

**Don't:** Stop at the qualitative "I feel pretty confident."
**Why:** The point of the equivalent-bet test is to force a number. "Pretty confident" covers the range from 60% to 99%, which is the range where almost every important decision actually lives. A number commits you. A vibe doesn't.

**Don't:** Bet on vague claims.
**Why:** If you can't state the hypothetical test — "what would we see if this were true vs. false?" — you're arguing about labels, not about the world. "Our culture is strong" pays no rent. "Our regrettable attrition will be under 8% next year" does. Calibration only works on claims that could come out one way or the other.

**Don't:** Treat a single wrong prediction as "miscalibration."
**Why:** A 70% prediction is *supposed* to fail 30% of the time. You need a batch before you can judge. One wrong call is noise; a pattern of 95%-confident claims coming true 70% of the time is a signal. Reach for the track record, not the last data point.

**Don't:** Use calibration as a weapon.
**Why:** Asking someone "how sure are you?" in front of their team as a gotcha makes them dig in, not update. Calibration is a tool for your own judgment and for private coaching. It's poison as a public rhetorical move.
