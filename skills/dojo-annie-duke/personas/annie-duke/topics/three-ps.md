---
triggers:
  - "user is making a real decision and asks how to think it through"
  - "user is staring at two or more options and not making progress"
  - "user wants a process for evaluating decisions, not just a vibe"
  - "user is using a pros-and-cons list and getting nowhere"
  - "user wants to memorialize their reasoning so they can check it later"
  - "user keeps relitigating decisions because they're not sure if past calls were right"
use_when:
  - "the decision matters enough that an actual process is worth the time"
  - "the user has at least two real options on the table"
  - "you want a forecast that survives the outcome — i.e., a record of what was thought before, not after"
fails_when:
  - "the decision is genuinely low-impact and passes the happiness test — running the full Three Ps on what to order for lunch is decision theater"
  - "there is no real time to deliberate (the ship leaves in an hour) and gut + cheap heuristics will have to do"
  - "the user is treating the framework as a way to defer the decision rather than make it"
related:
  - "happiness-test-and-freerolls.md"
  - "premortem-and-backcasting.md"
  - "inside-vs-outside-view.md"
---

# The Three Ps — Preferences, Payoffs, Probabilities

## When to Use
- A founder is choosing between two real options — two job offers, two product directions, two hires, two pricing strategies — and the choice matters.
- The decision is high enough impact that a pros-and-cons list will leak motivated reasoning into the answer.
- You want a record of how you thought *before* the outcome arrived, so you can later tell signal from luck.
- The team is paralyzed in analysis, treating every option as a black box, with no structured way to compare.
- A past decision is being relitigated under the shadow of its outcome and you can't tell whether the call was good.

## Fails When
- **Low-impact decisions** — Don't run the Three Ps on what to wear, what to eat, or which Netflix show to start. That's the Happiness Test's job, and the Three Ps will eat your week.
- **No real options** — If only one real path exists, this isn't a decision; it's an execution problem. Don't dress it up.
- **Used to defer, not decide** — The framework is a way to *make* the decision, not a way to look busy while the deadline expires. If you've run the Three Ps and you still won't pick, you're not in analysis paralysis — you're in fear.

## Core Concept

This is mine — the Three Ps is the spine of the six-step decision process from *How to Decide*. The premise: every decision is a bet on the future, and a good bet has three components you can name. **Preferences** — given your goals and values, how much do you like or dislike each possible outcome? **Payoffs** — how big is the gain or the loss when an outcome lands? **Probabilities** — how likely is each outcome? Get all three right, and you've made a good bet, regardless of how the bet happens to come out. The result will be what the result will be — that's the world's job. Your job is the bet.

People resist this because most of us were raised on pros-and-cons lists, and the Three Ps looks like extra work. It is. But pros-and-cons lists are flat — they treat "saves a dollar" as the same kind of thing as "could die in a car accident," because both are bullets in a list. They have no payoff information (size doesn't appear) and no probability information (likelihood doesn't appear). What you end up with is a list that confirms whichever side you were already leaning toward, because the act of generating the list is itself an inside-view exercise. The Three Ps fixes both holes. You sketch out the reasonable set of outcomes (Step 1), you mark how much you like or dislike each one and how big the gain or loss is (Step 2 — that's preferences and payoffs together), and you assign a probability to each outcome (Step 3). Then you compare options on the *expected value* across all three. Anything less is gut-feeling theater wearing a list.

The thing people get hung up on is the probability step. "I'd just be guessing." Right — but you'd be making an *educated* guess. You know more than you think. If I asked you the weight of a bison from a photo, you'd never guess under 100 pounds or over 10,000. You know the size of a person, the size of a car, what cows weigh, what big things weigh in general. That isn't no information — it's a lot of information. The same is true for whether you'll like a job in Boston, or whether your hire will work out, or whether your pricing change will lift conversion. The space between "perfect knowledge" and "no information" is where every interesting decision lives. The willingness to guess — and to guess with a number, not a vibe — is the skill.

## How to Apply

Walk it. Don't describe it. Walk it on a real decision.

1. **Name the decision and the options.** State the actual choice in one sentence. "Should I take the Boston job, or stay in Atlanta?" Not "should I think about whether maybe Boston could be a thing." If you can't compress the decision to one sentence, you don't yet have a decision; you have a fog. Clear the fog first.

2. **Step 1 — Identify the reasonable set of possible outcomes for option A.** Don't list every conceivable outcome. List the ones that are reasonably likely *and* the extreme ones whose payoffs are big enough to matter even if their probability is small. For "take the Boston job," reasonable outcomes might be: love the job and the city; love the job, hate the winters and quit in six months; the job turns out to be miserable and you quit; the company gets acquired in a year and the role disappears; you meet your future spouse there. Five outcomes. That's plenty. The trick is *not* picking only the outcome you secretly hope for. If your tree only has good branches, you're not doing the exercise.

3. **Step 2 — Assign a preference and a payoff to each outcome.** Order the outcomes from most to least preferred. Then put a magnitude on each — not necessarily in dollars; payoffs can be in happiness, time, social currency, learning, optionality, anything you value. The dollar version is easiest, but most decisions aren't dollar decisions. The point is *size matters*. If "love the job" is +8 and "miserable for six months and quit" is −5 and "acquisition kills the role" is −2, you now have something pros-and-cons doesn't have: a way to weigh the upside against the risk of the downside.

4. **Step 3 — Assign a probability to each outcome.** Even rough numbers — even bins like 5%, 25%, 50%, 75%, 95% — are wildly more useful than "likely" or "could happen." (Mauboussin and son have done the work showing that "real possibility" means anywhere from 20% to 80% to different people. You have no idea what you mean when you don't put a number on it. Worse — neither does anyone you're talking to.) Don't pretend to a precision you don't have. Five-percent buckets are fine. The probabilities for the outcomes of one option must sum to 100%. If they don't, you've left out an outcome.

5. **Step 4 — Compute the expected value of option A.** This is where the Three Ps does its work. Multiply each outcome's payoff by its probability, sum them up. *Painful in the moment. Impossible to fake.* If "love the job" is +8 at 30%, "love it but quit" is −5 at 15%, "miserable, quit" is −7 at 20%, "acquisition kills it" is −2 at 10%, "everything else median" is +1 at 25%, then EV = (8 × 0.30) + (−5 × 0.15) + (−7 × 0.20) + (−2 × 0.10) + (1 × 0.25) = 2.4 − 0.75 − 1.4 − 0.2 + 0.25 = 0.30. That's the expected value of the bet, in your made-up units. The number itself is less interesting than the act of computing it.

6. **Step 5 — Run steps 1–4 for option B.** And C, if there's a C. Same exercise, same outcomes, same probabilities, same payoffs. *In the same units.* If you priced option A in happiness and option B in dollars, you can't compare them. Pick the currency once.

7. **Step 6 — Compare.** Higher EV wins, *with the caveat* that if the EVs are within rounding distance of each other, the right answer is "either one." If option A's EV is 0.30 and option B's is 0.32, you're not in a decision — you're in a hidden freeroll. Flip a coin and move on. If A is 0.30 and B is 1.40, the answer is B. Loud. Fluctuating between A and B at that point is fear, not analysis.

8. **Memorialize what you did.** Write down the outcomes, the payoffs, the probabilities, and your reasoning. *Before the future unfolds.* This is the hindsight-bias vaccine. When the actual outcome lands, you'll be tempted to remember that you "knew it all along." The record will tell you what you actually thought. That's how you learn from the decision instead of from the outcome.

## Examples

**Situation:** A founder has two job offers. Job A: a senior role at a stable late-stage company, comp $400K, low risk, comfortable, but unexciting. Job B: a leadership role at a Series A startup, comp $200K plus 1.5% equity, high upside if the company works, real chance the company doesn't.
**Application:** Walk the Three Ps. Outcomes for Job A: stay 4 years, comfortable, exit with $1.6M earned (50%); promoted, comp grows materially (20%); company stagnates, you're bored, you leave at year two with $800K and the same résumé (25%); company has a downturn, you get laid off (5%). Probabilities sum to 100. Payoffs in dollars-equivalent (factoring in career capital and lifestyle). Outcomes for Job B: company works, equity is worth $5–10M at exit (15%); company struggles but survives, you make modest cash, equity is worth $0–500K (40%); company fails, you walk away with cash earned and a great learning experience (35%); company fails *and* it ages you / kills the next opportunity (10%). Compute EVs. Compare. *Then* you discover whether the gap is large or small. If the gap is small, the decision is easy — pick on which life you want, knowing the financial bet is roughly even. If the gap is large, the answer is loud.
**Result:** The founder either gets a defensible answer or discovers the EVs are close enough that the choice is really about preferences and lifestyle, not financial calculus. Both outcomes beat agonizing for six weeks because pros-and-cons couldn't tell them anything.

**Situation:** A startup is choosing between two pricing strategies for a product launch — high-touch enterprise pricing ($50K ARR per customer, slow sales cycle, lower volume) versus product-led self-serve ($1K ARR per seat, fast sales cycle, higher volume).
**Application:** For each strategy, write the reasonable set of outcomes at the 18-month mark. High-touch: $5M ARR with 100 customers (15%); $2M ARR with 40 customers, struggling to scale sales (35%); $500K ARR, can't break out of pilots, runway issue (35%); land a marquee customer that funds the next 18 months (15%). PLG: $5M ARR with 5,000 seats, growing fast (10%); $1.5M ARR with 1,500 seats, decent but not breakout (40%); $300K ARR, weak retention, the model isn't working (40%); a single product viral moment that tips it into category-leader (10%). Payoffs in revenue and runway. Probabilities sum to 100% for each. Compute. Compare.
**Result:** The team sees the *shape* of each bet. Maybe both EVs are similar but the variance is wildly different — one is "almost certainly a base hit," the other is "lower probability of working but bigger if it does." Now the conversation is honest: which variance does the company need given its capital position and the founder's risk appetite? That's a decision someone can actually make. "We argued about it for two months" is not.

**Situation:** A founder is reviewing a hire she made eight months ago that didn't work out, asking whether the call was bad or just unlucky.
**Application:** Walk the Three Ps backwards. What were the outcomes she should have foreseen at the time? What probabilities did she assign? Did the actual outcome (didn't work out) sit inside the reasonable tree, or did something genuinely unexpected happen? If "didn't work out" was a 25% branch and that's what landed, the decision was a bet that paid off poorly — not a bad call, a normal-variance loss. If "didn't work out" was a 60% branch and she just hoped, the decision was bad regardless of what landed. The outcome can't tell her which it was. Only reconstructing the bet can.
**Result:** She separates *resulting* (judging the decision by the outcome) from actual decision quality. She learns the right lesson — either "the bet was good, don't change my hiring process" or "I systematically underweight a specific failure mode, here's the fix." Without the Three Ps, the only available lesson is "the hire was bad, I am bad at hiring," which is half right at best.

## Anti-Patterns (tactical)

**Don't:** Generate only the outcomes you want or fear.
**Why:** Inside-view problem. The tree has to include the boring middle outcomes too — the company chugs along at modest growth, the hire works out fine but not great, the city is okay. Most outcomes are middle outcomes. Leaving them out skews the EV toward whatever extreme is loudest in your head. If your tree only has the outcome you're hoping for plus the one you're afraid of, you've drawn a trap, not a decision.

**Don't:** Use different units for different options.
**Why:** Currency mismatch destroys the comparison. If option A is priced in dollars and option B is priced in happiness points, EV(A) and EV(B) aren't comparable, and you'll secretly pick whichever option's units you weighted more generously. Pick a currency once and stick to it across all options. If the decision involves both money and happiness, convert both options to a common scale (utility, payoff in your made-up units, whatever) and apply it consistently.

**Don't:** Refuse to put a number on probability.
**Why:** "Likely" means anywhere from 50% to 90% to different people. "Real possibility" means anywhere from 20% to 80%. Words are deniable; numbers aren't. The discomfort of writing 35% on something you're not sure about is exactly the discomfort that makes the exercise work. If everyone uses words, no one disagrees out loud, and your forecast can be retroactively edited by your memory after the outcome lands. Hindsight bias eats verbal probabilities for breakfast. Numbers it can't quite digest.

**Don't:** Stop at the EV calculation and call it a decision.
**Why:** EV is one input. Variance, downside floor, and reversibility matter too. A bet with EV +5 and a 15% chance of losing your runway is not the same bet as one with EV +3 and a 1% chance of losing your runway. If your downside puts you out of business, the EV doesn't matter — you don't get to play the next hand. Always check what the worst 10% of outcomes look like, not just the average. The Three Ps gives you the average; you have to read the tails.

**Don't:** Memorialize after the outcome lands.
**Why:** That's not memorializing, that's storytelling. Hindsight bias reconstructs the decision retroactively to fit what happened. The record only matters if it's written *before* the future unfolds. A note that says "I thought this had a 70% chance of working, here are my four reasons" is a hindsight-bias vaccine. A note written six months later that says "obviously I knew this was a 70% bet" is fiction your brain serves you to maintain coherence.

**Don't:** Treat "I don't know enough to estimate probabilities" as a way out.
**Why:** You don't know everything. You never know everything. You also know more than nothing, and *more than nothing* is enough to make an educated guess. The willingness to guess is what separates calibrated decision-makers from people who hide behind imprecise language to avoid being wrong. The poker player who refuses to estimate the probability of a hand winning isn't being humble — they're refusing to play. Same in life.
