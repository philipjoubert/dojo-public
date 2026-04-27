---
triggers:
  - "user reasons from 'what worked at my last company'"
  - "user invokes a heuristic without saying why it works"
  - "user generalises from a small sample of past cases"
  - "user defends a hire or strategy as 'best practice'"
  - "user runs a playbook from one stage in a context with different physics"
  - "user is choosing between two rules of thumb"
  - "user expects results to extrapolate without a reason they should"
use_when:
  - "the founder is generalising from observed past behaviour to a new situation"
  - "the question turns on whether a principle holds outside the conditions it was tested in"
  - "you're hiring or investing on the strength of pattern-match"
fails_when:
  - "the territory really is narrow and you don't need reach (a one-off bug)"
  - "you treat reach as something to bolt on rather than something a theory either has or doesn't"
  - "the rule is genuine background knowledge ('the laws of physics will hold tomorrow')"
related:
  - "good-explanations-hard-to-vary.md"
  - "fallibilism-no-authoritative-sources.md"
  - "creativity-as-replication-under-criticism.md"
  - "wealth-as-knowledge.md"
  - "four-strands.md"
---

# The Reach of Explanations

## When to Use

- When you are about to apply a pattern from one company, market, or product to a different one, and the move depends on the pattern carrying over.
- When someone defends a decision as "best practice" or "what worked at \[previous company\]" without saying *why* it worked.
- When you're hiring on a track record and weighing what kind of track record actually predicts performance in your context.
- When choosing between two heuristics that both fit the cases you've seen.
- When the situation contains genuinely new conditions — a new stage, a new market, a new technology — and the question is what carries over from your prior experience and what doesn't.
- When evaluating a playbook from a book or talk: does this generalise because the underlying explanation has reach, or only because it sounds general?

## Fails When

- **The territory really is narrow.** Some good explanations have no reach beyond their immediate problem — how to get the delivery person to the right door, why this specific bug appears on Tuesdays. Trying to extract universal lessons from these is silly. The reach of an explanation is determined by its content, not by its author's ambitions.
- **You treat reach as a virtue you bolt on to your theory.** "We should make our framework more general" by listing more cases is the wrong move. Reach is what an explanation either has or doesn't have based on whether its details are tied to features that exist in the broader territory. Adding rooms doesn't make the foundation deeper.
- **The pattern is genuine well-tested background knowledge.** Newton's laws will work tomorrow. Gravity will pull. Compounding will compound. The rule isn't against generalising; it's against generalising on the strength of a pattern instead of an explanation.
- **You confuse "this has worked many times" with "this will reach to a new context."** Many times in the same conditions tells you the conditions are stable, not that they generalise.

## Core Concept

There is a remarkable thing about good scientific theories. They explain phenomena their authors had no idea existed. The axis-tilt theory of seasons was constructed to account for changes in the sun's elevation in one Mediterranean hemisphere. Without modification, it explained why the southern hemisphere is out of phase with the northern; why tropical regions barely have seasons at all; why the polar regions have midnight sun in summer and continuous night in winter; why tilted planets in other solar systems must have something analogous to seasons. The author didn't put any of those predictions into the theory. They came out because the theory was hard to vary — its details were tied not to local Mediterranean facts but to features of geometry, rotation, and radiation that exist throughout the universe.

This is what I mean by *reach*. Reach is the ability of an explanation to solve problems beyond the ones it was created to solve. It's not a principle of induction. It is not "the future will resemble the past." It is not generalisation. The explanation reaches because of what it says about reality — because the elements it picks out as causally important are also present in territory it was never asked about. If it had named some local feature instead, the reach wouldn't be there. As I put it in the book: the better an explanation is, the more rigidly its reach is determined — because the harder it is to vary an explanation, the harder it is in particular to construct a variant with a different reach.

This is stronger and stranger than any of the standard heuristics for generalisation. Inductivism — the doctrine that we extract patterns by repetition — gets it backwards. The Mediterranean astronomer who has only ever experienced Mediterranean seasons is not extrapolating from past experience when he predicts Australian seasons; nothing in his experience contains Australia. He's predicting from a *theory* whose content compels predictions in places he's never been. Reach is not extrapolation. The theory just *applies*, and you find out it does, sometimes long after.

Newton's law of gravitation reached far beyond the falling apples and orbiting planets it was constructed for — to comets, to the moons of Jupiter, to the behaviour of tides, to phenomena Newton himself never investigated. Then Einstein's general relativity reached even further, predicting things Newton's theory got wrong (the precession of Mercury's perihelion, the bending of starlight, gravitational time dilation) and things nobody had thought to ask about (gravitational waves, black holes, the expansion of the universe). The shift wasn't quantitative. Newton's theory had reach in its domain; Einstein's had reach in a domain that included Newton's plus territory Newton's theory broke in. *That* is what supersession looks like in a tradition of good explanations: not better fit to data, but more reach.

For a founder, this matters because most of what is sold as "what worked" carries no reach. A playbook that worked at a 2017 mobile-consumer company and is now applied at a 2026 enterprise-AI company is not reaching — it's being extrapolated by analogy, on the unstated assumption that the conditions are the same. They are not the same. The question to ask of any pattern, heuristic, or playbook is: *do I have a hard-to-vary explanation of why it worked, such that the explanation's content is also present here?* If yes, the reach is real. If you can only say "this is what we did and it worked," you have a rule of thumb that holds inside its training distribution and breaks unpredictably outside it. And you cannot tell from the surface which playbook is which — both come dressed in the same confidence. The check is whether the underlying explanation reaches, or whether you're just hoping the new case looks enough like the old one.

This is also why hiring on track record alone is a weaker move than it looks. The right question about a candidate is not "did they succeed at company X?" but "do I understand *why* they succeeded, well enough that I can predict whether the same thing will work here?" "They led growth at \[famous company\]" is a fact. It is consistent with "they understood demand-generation principles that reach to my context" and also with "they happened to be at a company that was already winning, and the playbook they ran was contingent on conditions I don't have." Without the explanation, the pattern-match is a bet on prophecy.

## How to Apply

1. **For any pattern you are tempted to apply, name the explanation.** Not "this worked." Why it worked. What features of the situation made the move correct, and which of those features are present here. If you can't articulate the explanation, you don't have reach — you have a hope that the new case rhymes with the old one.

2. **Test the reach by deliberately constructing a counterexample.** Take the explanation and ask: in what conditions would this not work? What kind of company, market, or moment would falsify it? If the answer is "I can't think of any," your explanation is suspiciously universal and probably doing no work. If the answer is specific, you've actually mapped the boundary of where the principle applies — which is the same as knowing the principle.

3. **Promote principles over playbooks.** A principle is a hard-to-vary explanation: "compounding loops require that the cost of acquisition shrink as the network grows." A playbook is a sequence of actions: "run paid ads on these channels at this CAC." The first reaches; the second is parochial. When you can replace a playbook with the principle that generated it, you can run the principle through a new situation and get a new playbook.

4. **Hire and promote on principles that reach.** "She figured out X at her last company" is interesting only insofar as figuring out X required understanding that reaches. "She executed the existing playbook well" is consistent with no reach at all and frequently fails on contact with new conditions. The conversation worth having is: what does this person understand? What can they do in territory their last role didn't include? Pattern-matching the past is a cheap proxy for the question; better to ask the question directly.

5. **Treat reach as supersession, not addition.** When a theory wins, it isn't because someone added extra rooms onto an old theory. It's because a new theory explains the old domain plus new territory the old theory got wrong. If you find yourself patching a strategy or model with exceptions and special cases — "this works except in markets like X, except in stage-Y companies, except when Z happens" — you are running an old theory whose reach has collapsed. The work is to find the better explanation, not to extend the patch list.

6. **Do not confuse "the world is similar to last time" with "I have an explanation that reaches."** The first is induction; it is unreliable in any new domain. The second is what you actually want. The check: if the situation were genuinely different in some specific way, would your reasoning notice and update? If your reasoning would proceed the same way regardless, you're not reasoning from an explanation — you're cargo-culting from a memory.

7. **Acknowledge when reach genuinely runs out.** Most good explanations don't have much reach. A great solution to your delivery routing problem may not even reach to your neighbour. The right response to that is to be a good engineer about your delivery problem and to *not* try to dress local knowledge up as universal wisdom. Knowing the reach of your knowledge is part of having it.

## Examples

**Situation:** A founder previously led growth at a high-velocity consumer mobile app. He's now CEO of a B2B enterprise SaaS company and is rebuilding the growth function on the playbook he knows: aggressive paid acquisition, viral mechanics, weekly cohort analysis.
**Application:** The first question is not "is this playbook good?" but "what is the explanation for why it worked at the previous company, and is that explanation present here?" The consumer mobile playbook depended on: (a) a near-zero-friction onboarding, (b) decision-makers who are also users, (c) network density and viral coefficients that compound, (d) acquisition costs that pay back in days. Enterprise SaaS has none of these. Decision-makers are not users; sales cycles are months; viral mechanics are weak; acquisition costs pay back in years. The playbook isn't bad — it's local. Its reach doesn't extend here. The principles underneath it (find a low-CAC channel, compound retention) might reach, but you have to extract them from the specific tactics and re-derive what they look like in the new physics.
**Result:** The founder who runs the old playbook by force will spend a year burning money before noticing it isn't working. The founder who asks "what was the explanation?" will run the principle and conclude that, for example, the right analogue here is content distribution to an ICP-defined audience, where each piece compounds because the audience compounds — same principle, different tactics. The mistake is treating the playbook as the knowledge. The knowledge is the explanation; the playbook is just one expression of it in one set of conditions.

**Situation:** Galileo and Newton.
**Application:** Galileo's laws of motion and Newton's law of gravitation were constructed to explain a small set of phenomena: falling bodies on Earth, the orbits of the visible planets, the motion of the moon. Neither was designed to predict the existence of Neptune, the rate of Mercury's perihelion precession, or the trajectory of a comet that no one had yet observed. Newton's theory predicted all of these, because its details were tied not to "things that fall on Earth" but to mass, distance, and inverse-square attraction — features present everywhere. The reach was in the content of the explanation, not added on. Then Einstein's general relativity superseded Newton in exactly the way good explanations do: it accounted for everything Newton accounted for, plus the small residue Newton got wrong (Mercury, light bending, gravitational time dilation), plus phenomena Newton's theory didn't even contemplate (gravitational waves, black holes).
**Result:** Notice what supersession is not. It is not "Newton was approximately right and Einstein refined the constants." It is "Einstein had a different explanation, with different content, whose reach included Newton's domain plus territory Newton's theory broke in." The same shape applies in business. A new competitor doesn't usually win by being a slightly better version of you; they win by having a different explanation of the customer that reaches into territory your theory got wrong.

**Situation:** A founder reads a popular essay claiming that the right approach to early-stage culture is "do things that don't scale." She tries to import this directly: she takes every customer call herself, hand-writes onboarding emails, ships features in days.
**Application:** The principle, properly stated, is that at very small scale, founder-level intimacy with customers generates information that you cannot extract any other way, and that information is the bottleneck on what you build. That principle reaches. It reaches because the underlying explanation — that strategy decisions in a domain you don't yet understand are bottlenecked by information about the domain — is true regardless of whether you ship code or sell enterprise software. The *behaviour* "founder takes every call" is not the principle. It is one expression of the principle in one set of conditions. In a B2B context where customers prefer a senior account executive and the founder's time has higher leverage on product, the same principle generates a different behaviour: the founder sits in on three deep customer-discovery calls a week and reads transcripts of the rest.
**Result:** The reach is in the principle, not the tactic. The founder who runs the tactic without the principle gets the wrong behaviour in the wrong context and concludes that "do things that don't scale doesn't work for us." It does work — but only if you have the explanation, and applying explanations to new conditions is a creative act, not a copy-paste.

## Anti-Patterns (tactical, specific to this framework)

**Don't:** Treat "this worked many times before" as evidence of reach.
**Why:** Repetition tells you the conditions were stable; it doesn't tell you the conditions will hold in a new context. The Mediterranean astronomer's confidence that the sun rises every morning was based on thousands of mornings — none of which contained the Arctic Circle. A founder's confidence that a playbook works because they've run it three times is exactly the same epistemic move. Reach comes from explanations, not from how many times you've executed.

**Don't:** Bolt on "exceptions" when your theory's reach turns out not to extend.
**Why:** A theory that works "except in markets like X, except in companies like Y" is a theory that was always parochial; you're discovering its real domain by running into edges. The right move is not to expand the exception list. It's to find the underlying explanation that determines where the principle reaches and where it doesn't. Exception-stacking is the symptom of a rule of thumb pretending to be a theory.

**Don't:** Demand reach from theories that genuinely don't have it.
**Why:** Most good explanations are local. Why your build broke today; why this one customer churned; how to route the delivery person to the right door. These don't generalise, and trying to extract universal wisdom from them produces fortune-cookie management writing. Knowing the reach of your knowledge is part of having it.

**Don't:** Confuse breadth of vocabulary with breadth of reach.
**Why:** A framework that includes many cases by labelling each one with a different word ("this is the network-effects case, this is the trust-economy case, this is the platform case") has not extended its reach. It has just expanded its vocabulary. Reach is the property that one explanation predicts in many domains. Vocabulary expansion is the opposite — many explanations, each parochial, papered over with shared terminology.
