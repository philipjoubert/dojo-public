---
triggers:
  - "user is debating an action with potentially catastrophic, irreversible downside"
  - "user computes expected value over a strategy that includes ruin or extinction"
  - "user is told 'the probability of catastrophe is small therefore the expected harm is small'"
  - "user is considering systemic interventions in food, medicine, climate, AI, or finance"
  - "user wants to distinguish 'risk' from 'ruin'"
  - "user invokes 'abundance of caution' as bureaucratic safetyism"
  - "user faces an asymmetric decision where the bad case is unbounded"
  - "user is being told 'we can't be paralysed by every small risk'"
use_when:
  - "the system is complex / nonlinear and not modellable from first principles"
  - "the downside is unbounded, systemic, or irreversible"
  - "the probability is unknown or uncomputable"
  - "the cost of inaction is bounded — the system was working before"
fails_when:
  - "the downside is genuinely bounded and recoverable"
  - "the cost of inaction is itself unbounded (a pandemic in motion, a rocket already launched)"
  - "you confuse the principle with bureaucratic 'abundance of caution' across all decisions"
  - "you weaponise it to block normal commerce, research, or experimentation"
related:
  - "ergodicity.md"
  - "fat-tails-and-fragility-detection.md"
  - "iatrogenics.md"
  - "via-negativa.md"
  - "black-swan.md"
---

# The Precautionary Principle (Ruin vs Risk)

## When to Use

- When you are debating an action whose downside includes ruin — extinction of a species, collapse of a civilisation, irreversible damage to a complex system you don't understand.
- When somebody computes expected value over a strategy that includes ruin in the sample space and reaches a confident "go" recommendation.
- When you are evaluating systemic interventions in food (GMO at scale), medicine (mass policy interventions), climate (geoengineering), AI (frontier model deployment), or finance (currency redesign).
- When you need to distinguish *risk* (something you can take, lose, recover from) from *ruin* (something you cannot recover from).
- When a credentialed actor is telling you the probability of the catastrophic outcome is small and therefore can be ignored.
- When somebody is using "abundance of caution" rhetoric to block ordinary decisions — the inverse failure mode you also want to refuse.
- When you face an asymmetric decision where the cost of inaction is bounded and the cost of action could end the game.

## Fails When

- **The downside is genuinely bounded and recoverable.** Most decisions are not in the principle's domain. Apply normal cost-benefit reasoning to bounded downsides; the principle is for the narrow class with unbounded ones.
- **The cost of inaction is itself unbounded.** Sometimes refusing to act is the catastrophic option — a pandemic spreading uncontrollably, a rocket already launched needing course correction. The principle requires bounded cost of inaction; when that condition fails, the principle doesn't apply.
- **You confuse the principle with bureaucratic safetyism.** "Out of an abundance of caution" applied to wear-a-mask-on-an-empty-beach decisions is the *opposite* of the precautionary principle. Don't conflate them.
- **You weaponise it to block ordinary commerce, research, or experimentation.** Most product launches, most research projects, most personal decisions have bounded downsides and should be subject to ordinary tinkering, not precautionary refusal.

## Core Concept

The single rule that overrides every other rule, including expected-value reasoning. When the downside includes ruin — extinction of a species, collapse of a civilisation, irreversible damage to a complex system you don't understand — *don't do it*, regardless of how small the proponent claims the probability is. This is not Luddism, not paranoia, not refusal of progress. It is correct reasoning under non-ergodicity. It is the operational consequence of recognising that you walk one path and the path that ends terminates the averaging.

The asymmetry. Bounded downsides are recoverable; you take the loss, you learn, you continue. Unbounded downsides are not. There is no "average" return on Russian roulette across one player's career, because the player is dead before averaging completes. The precautionary principle is the operational corollary of ergodicity: if ruin is in the sample space, the long-run expected value is undefined, and the decision rule cannot be expected-utility maximisation. The expected-utility crowd computes the average and recommends the bet; the player who follows the recommendation is gone before the average materialises.

Ruin vs. risk. A meaningful distinction. *Risk* is something you can take, lose, recover from, and try again. Volatility within a survivable range is risk. Risk is *required* — without it there is no learning, no improvement, no antifragility. *Ruin* is something you cannot recover from. Ruin ends the game. Once ruin is in the sample space of a strategy, the strategy is wrong regardless of expected value. The fragilista, the IYI, the Davos technocrat, the EA-style maximiser — all routinely confuse the two. They treat ruin as just "high risk" and apply expected-value reasoning that would be appropriate for ordinary risk. The result is policies that look efficient on paper and are catastrophic in practice.

The four conditions for invoking the precautionary principle. *The system is nonlinear / complex.* You cannot model it from first principles; the interactions matter more than the components. *The downside is unbounded or systemic.* Extinction, collapse, irreversible damage to many — not just to the decider. *The probability is unknown* (and likely unknowable — see Mediocristan vs. Extremistan; see fat tails). *The cost of inaction is bounded* — the system was working before; not intervening is survivable. When all four hold, the burden of proof flips: it is on the *proposer of the intervention* to demonstrate safety, not on the opponent to demonstrate harm.

The canonical applications. *GMOs and the food supply.* The controversial 2014 paper. Argument: even if individual GMO crops appear safe, the technology introduces *systemic* tail risk (cross-pollination, monoculture, novel pathogens) into the global food system, which is non-replicable and on which 8 billion lives depend. Standard cost-benefit analysis (which assumes ergodic averaging) is the wrong tool. Asymmetric burden of proof. *Pandemic policy.* Early 2020: a co-authored memo argued that the cost of acting early on COVID-19 was bounded (a few weeks of disruption) while the cost of inaction was unbounded (uncontrolled spread, fat-tailed mortality). The expected-utility crowd, including the WHO, computed "low probability times moderate harm" and waited. The result was hundreds of thousands of preventable deaths. *Nuclear power.* Routine industrial-grade nuclear plants in stable countries: probably fine. But the fact that the Japanese Nuclear Commission set safety policy at "1 in 1 million per year" and produced Fukushima within 8 years should make you reject the methodology, not the technology. The probability was uncomputable. *AI extinction risk.* Same argument. The "expected harm is small because probability of extinction is low" framing is wrong because *if extinction is in the sample space*, the long-run utility is undefined. The principle says: don't proceed without bounded downside, regardless of expected upside. *Currency debasement / fiat replacement.* Switching the monetary base of a global economy is unbounded-downside intervention. Even if the new system is "probably better," the cost of being wrong is systemic.

What the precautionary principle is *not*. It is *not* general Luddism. For interventions with bounded downside (most consumer products, most software, most personal decisions), apply normal cost-benefit reasoning and tinker freely. It is *not* paralysis. It applies only to the narrow class of interventions that meet all four conditions. It is *not* the "abundance of caution" rhetoric used by lazy bureaucrats to avoid decisions. Real precaution is asymmetric — it limits *one specific kind* of decision, not all decisions.

The IYI version of the principle (a near-miss). "Out of an abundance of caution" applied to wear-a-mask-on-an-empty-beach decisions is the *opposite* of the precautionary principle. The principle is meant to constrain the rare class of decisions where the downside is unbounded; bureaucratic safetyism applies it to ordinary decisions and produces fragility through suppression. Don't confuse the two. The principle defends against ruin; safetyism produces it through accumulated iatrogenic intervention.

> *One should not mess with a system if the results are fraught with uncertainty, or, more generally, should avoid engaging in an action with a big downside if one has no idea of the outcomes.*
>
> *We have always been crazy but weren't skilled enough to destroy the world. Now we can.*

## How to Apply

1. **Run the four-condition check.** Is the system nonlinear and complex? Is the downside unbounded or systemic? Is the probability unknown? Is the cost of inaction bounded? All four must hold for the principle to apply. Most decisions don't meet all four; for those, apply normal cost-benefit.

2. **Distinguish risk from ruin explicitly.** Whenever someone calls a strategy "risky," ask whether the bad case is recoverable or terminal. If recoverable, accept the risk and tinker. If terminal, refuse the strategy regardless of upside.

3. **Refuse precise small-probability arguments.** When somebody offers a "5% chance of catastrophe" or "1 in a million per year" estimate for a complex system, refuse the framing. The probability is uncomputable; the principle applies because of the *structure* of the downside, not because of the precision of the estimate.

4. **Flip the burden of proof.** Once the four conditions hold, the proposer of the intervention has to demonstrate safety, not the opponent demonstrate harm. This is not the default in current discourse; it has to be insisted on explicitly.

5. **Distinguish the principle from bureaucratic safetyism.** "Abundance of caution" applied to ordinary decisions is the inverse failure. The principle is asymmetric: it constrains a *narrow class* of decisions with unbounded downside. Calling out safetyism is part of defending the principle from being collapsed into universal timidity.

6. **Apply the principle particularly to systemic, non-replicable systems.** Global food supply, monetary base, climate system, frontier-AI deployment, civilisation-scale infrastructure. These are domains where you don't get a do-over and where a wrong intervention can't be partially absorbed by adjacent systems. Hold them to a different standard than ordinary commerce.

## Examples

**Situation:** A company is debating whether to deploy a frontier AI system at global scale. Internal analysis estimates a 0.5% chance of catastrophic misalignment and 99.5% chance of substantial benefit. Expected value calculation: positive.
**Application:** Run the four conditions. The system is nonlinear and complex (yes — emergent behaviour at scale, no first-principles model of capabilities). The downside is unbounded or systemic (yes — civilisation-scale risk if catastrophic misalignment materialises). The probability is unknown (yes — the 0.5% number is a guess, error bars larger than the estimate, no precedent). The cost of inaction is bounded (yes — the system was working before; not deploying delays benefit but doesn't itself cause catastrophe). All four conditions hold. The expected-value calculation is the wrong tool because the 0.5% case removes the player from the averaging. The right move is to refuse deployment until the downside is bounded — narrower scope, sandboxed conditions, reversible architecture — even at the cost of foregone benefit.
**Result:** The company that applies the principle deploys narrowly, learns from the bounded version, and progresses cautiously. The company that takes the expected-value bet either gets lucky (and the 99.5% scenario is the publicly-told story) or doesn't (and there is no one left to tell the public story).

**Situation:** A municipal health department is debating whether to mandate masks on a sparsely populated beach during an ongoing low-prevalence respiratory illness wave. The justification offered is "abundance of caution."
**Application:** This is the IYI mis-application of the principle. Run the four conditions: the system in question (outdoor sparsely populated beach) is not particularly complex; the downside (some additional transmission of an illness with low individual mortality) is bounded; the probability of harm is roughly knowable; the cost of inaction is small. None of the four conditions hold. The principle does not apply here. What is happening is bureaucratic safetyism wearing the principle's costume. The honest version is to recognise that the precautionary principle defends against *ruin* in fat-tailed systemic domains, not against minor risk in ordinary decisions. Conflating the two degrades the principle and produces accumulated iatrogenic intervention that itself fragilises the system.
**Result:** The health department that distinguishes the two recovers credibility with the population. The one that confuses them loses both — credibility on small decisions and the ability to invoke the principle when it actually matters.

## Anti-Patterns (tactical)

**Don't:** Apply the principle to bounded-downside decisions.
**Why:** Most decisions have bounded downsides — product launches, hiring, side projects, software releases, marketing campaigns. Applying the precautionary principle to these collapses into universal Luddism and degrades the principle's authority for the narrow class where it actually applies. The four-condition test exists to keep the principle precise.

**Don't:** Confuse the principle with bureaucratic "abundance of caution."
**Why:** Safetyism applies precaution-rhetoric across all decisions and produces accumulated iatrogenic intervention. The principle is the opposite — asymmetric, narrow, decisive. Conflating them is exactly the IYI move that lets credentialed actors expand their authority while degrading the framework that should constrain them.

**Don't:** Use the principle to refuse engagement with a real ongoing catastrophe.
**Why:** When the cost of inaction is itself unbounded — a pandemic in motion, a rocket already launched, a cascade already started — the principle's fourth condition fails and other reasoning takes over. Using "precautionary principle" to justify inaction in the face of a developing disaster is the inverse misuse. The principle constrains *initiating* unbounded-downside interventions; it doesn't license inaction during ongoing emergencies.
