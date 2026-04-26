---
triggers:
  - "user computes 'expected value' over a strategy with ruin in the sample space"
  - "user invokes 'shut up and multiply' or pure expected-utility maximisation"
  - "user is sizing a position and reasons from the average across scenarios"
  - "user dismisses 'loss aversion' as cognitive bias"
  - "user is taking advice from a portfolio-of-bets investor about a single-bet life decision"
  - "user is debating low-probability extinction-class outcomes"
  - "user wants to model a career, business, or strategy as repeatable"
  - "user is being told the rational move is the high-EV play"
use_when:
  - "the path includes an absorbing barrier — bankruptcy, ruin, death, disqualification"
  - "the actor is one person walking one trajectory, not a portfolio across many"
  - "the strategy is non-repeatable in any meaningful sense"
  - "the recommended action averages across futures the actor will not all see"
fails_when:
  - "the bet really is repeatable and the actor can lose without exiting the game"
  - "you use it to refuse all asymmetric risk-taking"
  - "you confuse path-dependence with universal pessimism"
  - "you import the framework into domains where ruin is not actually in the sample space"
related:
  - "precautionary-principle.md"
  - "fat-tails-and-fragility-detection.md"
  - "barbell-strategy.md"
  - "skin-in-the-game.md"
  - "mediocristan-vs-extremistan.md"
---

# Ergodicity (Path-Dependence)

## When to Use

- When you are evaluating a strategy and the analysis reaches for "expected value" or "expected utility" while the strategy includes a non-zero probability of ruin.
- When somebody invokes "shut up and multiply," "rational expected-value maximisation," or Bayesian-style averaging in a domain where you walk one path and ruin terminates it.
- When you are sizing a position — a financial bet, a career move, a one-shot business commitment — using portfolio math designed for repeatable independent samples.
- When you're being told that loss aversion or risk caution is "irrational" by a behavioural economist who has never bet his own house.
- When a venture capitalist or investor with a portfolio is giving advice to a founder whose career is one bet.
- When extinction-class or ruin-class outcomes are being weighted by their (small) probability and the conclusion is to ignore them.
- When the framework you are reasoning inside assumes infinitely many parallel lives across which the average matters.

## Fails When

- **The bet is genuinely repeatable.** A casino sizing house edge across millions of plays *is* in an ergodic regime. Expected value is the right tool there. The frame applies to one-trajectory life decisions, not to operations of a portfolio with many independent shots.
- **You use it to refuse all asymmetric risk.** The barbell strategy involves real risk on the risky leg — bounded, but real. Ergodicity says don't put ruin in the sample space; it doesn't say avoid all variance. Conflating the two collapses the framework into universal timidity.
- **You confuse path-dependence with universal pessimism.** Most decisions don't have ruin in the sample space. Most decisions are properly handled by ordinary expected-value or expected-utility reasoning. The framework is a *constraint* on a narrow class, not a global override.
- **Ruin is not actually in the sample space.** Sometimes "ruin" is just a colourful description of a bad outcome you can recover from. Real ruin means *cannot continue*. Don't import the framework against losses that are merely painful.

## Core Concept

The single most consequential mathematical idea most people get wrong, and the one to which Taleb returns most insistently in interviews. Once you understand it, half of behavioural economics dissolves and a great deal of "rationalist" advice is revealed as misapplied portfolio math.

The technical statement, made simple. A process is *ergodic* if the average outcome over many people doing it once is the same as the average outcome of one person doing it many times. Most things people reason about as if they were ergodic are not. The slippage between the two averages — the population average and the time average — is what produces every blow-up of "rational" expected-value strategies, and it is what makes the cautious grandmother more correct than the credentialed economist.

The Russian roulette example is the cleanest illustration. Six people play Russian roulette once for $1M each. Five collect, one dies. The "expected value" per player is $833K. Now consider one person playing six times. The expected-value calculation is the same — but the person is dead before completing the experiment. Across the *population*, the average return is positive. Across the *path* of one player, the average return is undefined because the path terminates. The two averages are not the same. The economist who computes the population average and tells the single player it's a good bet has made the most consequential possible error.

Why this matters. Almost every decision in life is path-dependent in this way. You don't get N independent samples from your career; you get one trajectory. You don't average across N parallel investment lives; you walk one. If your strategy has *any* probability of an absorbing barrier — bankruptcy, ruin, death, irrecoverable damage — then the long-run "expected return" is irrelevant because you never get to see it. The existence of the absorbing barrier breaks ergodicity, and ergodic-style averaging produces strategies that look optimal on paper and end the player.

What this implies for risk. "Loss aversion" is not irrational. The cautious grandmother who refuses asymmetric bets is not irrational. The trader who limits position size below what the expected-value calculation suggests is not irrational. They are correctly applying ergodic reasoning to non-ergodic situations. The "rationalists" — Kahneman-Tversky-style behavioural economists who call this irrational, EA-style expected-value maximisers, the "shut-up-and-multiply" Bayesian — are systematically wrong because they apply Mediocristan averaging to Extremistan paths. The grandmother has not read the papers. She has, however, watched the people who took such bets disappear from the population.

The Goldman Sachs example is illustrative on the other side. Goldman has been around 159 years not because they take more risk than competitors, but because they refuse risks of ruin. Every year they could marginally outperform by adding a little more leverage; every year they don't. Survival is the only metric that matters because dying ends the game. The institutions that survive across centuries have all internalised the same insight: optimise within the no-ruin envelope, not across the full theoretical sample space.

The corollary for personal life. Apply via negativa: identify every path on which you go bust (financial ruin, reputation collapse, irreversible health damage, broken family) and make sure your strategy puts zero probability mass on those paths, *regardless of expected return*. Then optimise within the remaining envelope. The order matters. Optimise-then-survive is the wrong order; survive-then-optimise is right.

Application to startup founders. A founder with a "high expected value" strategy that includes a 20% chance of losing their house is making an ergodic error. The 80% upside cases are real, but the 20% downside case eliminates the founder from playing again. If the founder gets one career, the expected-value math is wrong; if the founder is a venture capitalist with a portfolio of 30 founders, the math is correct *for the VC* but not for any individual founder. The mismatch in ergodicity between investor and founder explains a lot of the misalignment in venture.

Application to AI policy. Arguments that "AI extinction risk is small therefore expected harm is small" are ergodic errors. If extinction is in the sample space, the long-run expected utility is undefined. The precautionary principle applies regardless of how small the proponent claims the probability is. This is not Luddism; it is correct reasoning under non-ergodicity.

> *If you go to a casino and you have a small probability of blowing up, no matter what your edge is, you will blow up. That's it. So no matter what your edge, because you cannot say okay I'm gonna blow up and then get rich — you can't, you got to get rich and then blow up. So the sequence matters.*

## How to Apply

1. **Identify whether the situation is ergodic.** Is this one person walking one trajectory, or a portfolio of independent shots? If one trajectory, ergodicity does not hold and population-average reasoning is wrong. If a portfolio, it might hold for the portfolio operator but not for the participants.

2. **Inventory the absorbing barriers.** For any decision, list the outcomes from which you cannot recover. Bankruptcy. Reputational ruin. Irreversible health damage. Family rupture. Loss of professional license. Anything that ends the game must be assigned zero probability mass *regardless of how attractive the expected return looks*.

3. **Reorder the optimisation.** Survive first, then optimise. The expected-value calculation is run *inside* the no-ruin envelope. Anything outside the envelope is removed from consideration before the maximisation begins, not adjusted for inside it.

4. **Translate "loss aversion" as ergodic correction.** When somebody calls you irrational for refusing a high-EV bet that risks ruin, name the distinction. You are not failing to multiply correctly; you are applying the right average (time average for one player) instead of the wrong one (population average across many).

5. **Distinguish your role from the role of advisors with different ergodicity.** A VC with a portfolio of 30 bets gives advice that is correct for the VC's ergodic regime. The founder lives in a different regime — one bet, one career, no portfolio. Translate the advice across the regime boundary or refuse it.

6. **Apply the framework to extinction-class arguments.** When somebody multiplies a small probability of extinction by a large utility number and tells you the expected harm is manageable, refuse the calculation. Extinction is the absorbing barrier. The calculation is undefined.

## Examples

**Situation:** A founder is being pitched on taking a personal-guarantee loan to bridge the company through a tough quarter. The math says: 80% chance the company recovers and the loan is repaid easily; 20% chance the company fails and the founder personally loses their house. Expected value is positive.
**Application:** The 20% case includes the absorbing barrier — personal bankruptcy ends the founder's ability to start the next thing, support their family, and recover. The expected value of the bet is computed as if the founder will live many parallel lives across which the 80% wins compound. They will not. They live one. The 20% case terminates the trajectory. The right move is to refuse the personal guarantee, find the bridge through equity dilution or partial layoffs, and preserve survival even if the expected return is lower.
**Result:** The founder who took the personal guarantee and got the 80% case is fine, but the strategy was wrong even when it worked — survivorship bias compounded with bad reasoning. The founder who refused and survived has the next bet available; the founder who took it and lost is gone from the field.

**Situation:** A retail investor reads an EA-style argument that the long-run expected return of a leveraged equity strategy dominates an unlevered one over a 30-year horizon, even accounting for drawdowns. The math, run on a Monte Carlo of population averages, supports the argument.
**Application:** The Monte Carlo computes the average across many parallel investor-lives, most of which see the 30-year compounded outcome. The actual investor walks one path. On a non-trivial fraction of paths, the leverage triggers a margin call during a drawdown that wipes out the position permanently. The investor never gets to the 30-year average. The strategy is correct for a hypothetical population of immortal investors with infinite recapitalisation; it is wrong for a single mortal investor with one balance sheet.
**Result:** The investor who refuses the leverage underperforms on the average path and survives every path. The investor who follows the EA reasoning has a non-trivial chance of being out of the game before the 30-year horizon arrives — at which point the strategy's 30-year expected return becomes irrelevant to them.

## Anti-Patterns (tactical)

**Don't:** Use ergodicity to refuse every risky decision regardless of structure.
**Why:** The framework targets *ruin* in the sample space, not all variance. The barbell strategy involves real risk on the risky leg — bounded, but real. The grandmother's caution is correct for non-ergodic situations with absorbing barriers; it is wrong as a general theory of how to live. Convex bounded-loss exposure is desirable. Ruin is not.

**Don't:** Conflate "expected value is wrong here" with "probability theory doesn't work."
**Why:** Probability theory works fine; the error is using the population-average computation when the time-average is the correct one for the actor. The fix is the right average, not the abandonment of math. Practitioners who reach for "ergodicity" without doing the actual reasoning end up sounding like they have a slogan rather than an argument.

**Don't:** Apply the framework when the actor is in fact a portfolio operator.
**Why:** A VC with 30 bets, a chain restaurant operator with 200 locations, an insurance company with millions of policies — these are operating in something close to an ergodic regime *for them*. Expected-value reasoning is appropriate. The misapplication is to take advice given inside one regime and apply it inside another. Translate first.
