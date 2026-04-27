---
triggers:
  - "user is facing a real decision and asks how to think about it"
  - "user can't decide between options and is gathering more data"
  - "user describes a team rushing to a solution without defining the problem"
  - "user mentions premortem, second-order thinking, margin of safety, or root cause"
  - "user has been 'in information-gathering mode' for weeks or months"
  - "user keeps solving the same problem repeatedly"
  - "user asks how to weigh options or set criteria"
use_when:
  - "the choice in front of the user is consequential enough to deserve a real process, not a snap call"
  - "the team is treating problem-definition and solution-finding as the same step"
  - "the user is making decisions in the wrong mode for the stakes (slow on small, fast on big)"
fails_when:
  - "the decision is genuinely inconsequential and reversible — just decide"
  - "the user is in HALT and needs prevention, not a six-stage process"
  - "the situation is a true emergency where speed beats accuracy"
related:
  - "four-defaults.md"
  - "safeguards.md"
  - "handling-mistakes.md"
  - "wanting-what-matters.md"
---

# The Decision Process

## When to Use
- The choice is consequential enough that the cost of getting it wrong is significantly worse than the cost of slowing down.
- A team is jumping to solutions inside the first ten minutes of a problem-definition meeting.
- The user is "gathering information" past the point where new information improves accuracy.
- The user can argue both sides credibly and is now looping on the same considerations.
- A decision is irreversible (or expensive to undo) and someone is treating it like a coin flip.
- The user keeps solving the same problem repeatedly and the symptoms keep returning.

## Fails When
- **The decision is genuinely inconsequential and reversible.** Running the six-stage process on which gym rack to use is its own form of waste. Sort by consequence and reversibility first.
- **The user is in HALT.** No process survives a hungry, angry, tired, or rushed decider. The first move is prevention, not the framework.
- **The team is in true emergency.** A burning building doesn't need a problem-definition meeting. Use the process when stakes warrant the time, not when speed beats accuracy.

## Core Concept

A choice is not the same as a decision. Shane: "A decision is a choice that involves conscious thought... If you don't apply this process, your choice doesn't necessarily count as a decision." Most of what people call decisions are actually choices that defaults made for them — emotion in the moment, social pressure to converge, ego protecting a position, inertia keeping the status quo. The decision process is what turns a choice into a decision.

It runs in six stages. Define the problem. Explore possible solutions. Evaluate the options. Do it (with the right speed for the stakes). Build a margin of safety. Learn from the result. Each stage has its own principles and its own failure modes, and skipping a stage is what produces most of the regret-decisions Shane has spent his career analyzing.

The frame underneath the process is that good decisions come from good *position*, and good position comes from disciplined process applied repeatedly to ordinary moments. You don't earn the right to make great decisions by being smart. You earn it by running the process when no one is making you.

### Stage 1 — Define the problem

Two principles.

**The Definition Principle.** The decider defines the problem. Don't let someone else define it for you. Don't use jargon — jargon is a tell that you don't understand it yet. Shane: "Write out the problem. If you find yourself using jargon in your description, it's a sign that you don't fully understand the problem. And if you don't understand it, you shouldn't be making a decision about it."

**The Root Cause Principle.** Identify the root, not the symptom. The prompt: "What would have to be true for this problem not to exist in the first place?"

The Downtown Dog Rescue example: Lori Weise was running a shelter that asked "how do we adopt out more dogs?" She replaced it with the root-cause question and discovered 30% of surrenders came from owners who simply couldn't afford food. The program shifted from adoption drive to food subsidy. Seventy-five percent of would-be surrenders kept their pets. The original problem definition would have spent the next decade running the wrong program at scale.

Two safeguards at this stage. The **Problem-Solution Firewall**: hold two separate meetings — one to define the problem, one to solve it. Stops the social-default rush to solutioning. The **Test of Time**: will the solution still hold in six months, or will the problem return? If return is likely, you're treating a symptom.

The meeting question Shane uses: "What do you know about this problem that other people in the room don't know?" Forces signal over noise.

### Stage 2 — Explore possible solutions

Two principles.

**The Bad Outcome Principle (premortem).** "Don't just imagine the ideal future outcome. Imagine the things that could go wrong and how you'll overcome them if they do." Shane treats premortem as operational, not optional. Josh Wolfe, quoted: "Failure comes from a failure to imagine failure." Most people are bad problem solvers because they were bad problem anticipators.

**Second-Level Thinking Principle.** Ask "And then what?" First-level thinking solves the immediate problem without regard to future problems the solution might create. Second-level thinking traces the chain forward.

The chocolate bar example: solves hunger now (first-level), creates a sugar crash and a craving an hour later (second-level). Scale this to every business decision. We launch the feature — and then what? Competitors copy it, customers expect it as table stakes, support volume goes up, the team has to maintain it forever.

The Stockdale Paradox sits here too. From Jim Collins, cited by Shane: "Never confuse faith that you will prevail in the end — which you can never afford to lose — with the discipline to confront the most brutal facts of your current reality." The optimists died in the camp. The realists with faith survived. The premortem is the disciplined-confrontation half of that equation.

Force the **3+ principle**: don't accept binary framing. "We launch or we don't" is the social default reducing cognitive effort. Ask: "What would I do if both of these options were off the table?" That third option is where the real solution often lives.

### Stage 3 — Evaluate the options

The criteria you use to evaluate options have to clear three tests.

1. **Clarity.** Explainable to a twelve-year-old. No jargon. If you can't explain the criterion simply, you don't actually understand it, and your team can't apply it without you.
2. **Goal promotion.** The criteria must favor options that actually achieve the goal. The Challenger disaster: launch-date criteria favored speed over safety. The criteria you choose are the strategy, whether you intend them to be or not.
3. **Decisiveness.** Criteria must produce a single winner, not a tie. Purely negative criteria ("I don't want X") rarely decide anything.

**The Most Important Thing principle.** Every problem has one criterion that dominates. If you can't name it, you don't understand the problem. If you haven't communicated it, your team can't decide without you and will never escape the need to check with you first. Shane: "There is only one most important thing in every project, goal, and company. If you have two or more most important things, you're not thinking clearly."

A practical tool: **Make Your Criteria Battle.** Write each criterion on a sticky note. Pair them. "If I absolutely had to choose between only these two, which matters more?" Add quantities: "I'll pay up to X for Y." This forces the gray into order.

Information quality matters as much as criteria. Three principles:
- **Targeting.** Know what you're looking for *before* you start sorting. Otherwise you waste time on irrelevant information and miss the relevant kind.
- **HiFi.** High-fidelity — close to the source, unfiltered by other people's biases. Abstractions are junk food; primary sources are nutrition.
- **HiEx.** High-experience — from people who've actually done what you're trying to do. The chef vs. line cook distinction (Tim Urban, cited by Shane): both follow the recipe; only the chef knows *why* when something goes wrong.

### Stage 4 — Do it (with the right speed for the stakes)

The **Consequentiality × Reversibility grid** sorts decisions:

- **Inconsequential + reversible.** Just decide. Waste is deliberation.
- **Consequential + irreversible** ("lead dominoes"). Decide carefully. Use ALAP.
- Most everyday decisions are in the first category; we treat them like the second.

Three action principles:

**ASAP.** If the cost to undo is low, decide as soon as possible. The mattress story — don't spend three days researching what's covered by a 100-night return policy.

**ALAP.** If the cost to undo is high, decide as late as possible. Preserve optionality.

**Stop / FLOP / Know.** When to stop deliberating:
- **STOP** — you've stopped gathering useful information. Tells: you can argue both sides credibly; you're asking people two steps removed from the problem; you're reviewing the same material in a loop.
- **FLOP** — **First Lost OPportunity**. Options are about to disappear. The buyer is walking. The partner is about to leave.
- **KNOW** — a piece of information makes the answer obvious, or a gut feeling won't go away.

The key caution from Slovic's horse handicappers study: more information → no improvement in accuracy, but *double* the confidence. "Confidence increases faster than accuracy." Past a point, more data makes you wronger and surer simultaneously.

### Stage 5 — Margin of safety

Shane: "A margin of safety is a buffer between what you expect to happen and what could happen. It's designed to save you when surprises are expensive."

Preparation mindset, not prediction mindset. Prediction says "I know what will happen, go all in." Preparation says "I might be wrong, I will be surprised, leave cushion." Buffett, cited by Shane: "Diversification is protection against ignorance. It makes little sense if you know what you are doing." Most of us rarely know what we're doing with the kind of confidence that earns concentration.

The operational test: when LTCM was returning 40%+, the right move wasn't to predict it would continue. It was to participate at 10% of net worth, not 100%. The strategy looked extraordinary; the leverage was the death sentence.

The subtle trap: if the worst case never materializes, the margin of safety looks like waste. "The minute you convince yourself you could have done better without a margin of safety is exactly when you need it most."

### Stage 6 — Learn from your decisions

The crucial move: separate **decision quality** from **outcome quality**. A good decision can produce a bad outcome (you were unlucky). A bad decision can produce a good outcome (you were lucky). Judge the process, not the result.

Shane's framing: "If you got results you didn't want, the world is telling you at least one of two things: (a) you were unlucky; (b) your ideas about how things work were wrong." If the same approach tried again would yield a different outcome, it was luck. Only when results are persistently divergent from expectations should you update the model.

The practical tool: a decision log. Capture the reasoning at the time of the decision, not retrospectively. Hindsight contaminates everything. The log lets you revisit decisions without ego distortion and update the actual process.

## How to Apply

1. **First sort by consequence and reversibility.** Don't run the full process on a reversible $40 purchase. Reserve it for the lead dominoes — the moves that are expensive to undo.

2. **Define the problem in writing, without jargon.** If the writing comes out muddled, the thinking is muddled. Don't move to step two until step one is clean.

3. **Hold separate problem-definition and problem-solving meetings.** Even if it's the same group, the same day. The structural separation prevents the social-default rush to solutioning.

4. **Run the premortem before the project plan.** Imagine it's two years from now and the project failed. Write down why. Address the surfaced failure modes while you still can.

5. **Force the 3+ principle.** If the framing is binary, ask: "What would I do if both of these options were off the table?" The third option is often where the answer lives.

6. **Name the Most Important Thing in one sentence.** If you can't, you don't understand the problem. If you haven't said it out loud to the team, they can't decide without you.

7. **Apply the Stop / FLOP / Know test before gathering more data.** If you've stopped gathering useful information, decide. The horse handicappers warning is the rule, not the exception.

8. **Build the margin of safety into the plan, not into post-hoc regret.** A margin of safety added after surprise is just damage control. Build it in when you commit.

9. **Log the decision and the reasoning at the time.** Then revisit on a fixed cadence. Separate process quality from outcome quality.

## Examples

**Situation:** A SaaS company keeps losing deals at the proposal stage. The VP of sales is convinced they need a more aggressive discount policy.
**Application:** Define the problem before solving it. Hold a problem-definition meeting separate from a solving meeting. Apply the root-cause prompt: what would have to be true for these losses not to exist in the first place? Run the test of time: will a discount policy fix this in six months, or will the problem return? In the definition meeting it surfaces that the proposal stage isn't the loss point — most prospects had already decided to go with the competitor before the proposal arrived. The problem isn't pricing. It's positioning earlier in the funnel.
**Result:** The team stops the discount-policy work. The actual fix lives upstream — in a sharper first-call deck, not a margin-eroding discount.

**Situation:** A founder has been deciding for two months whether to raise a Series A. Every week brings new investor conversations and new framings.
**Application:** Stop / FLOP / Know. The founder can argue both sides credibly. He's asking advisors who are two steps removed from his actual cap table. He's reviewing the same scenarios on different spreadsheets. That's the STOP signal. Combined with FLOP — two of the three lead investors have signaled their term sheets expire end of month. Decide.
**Result:** The decision gets made within five business days. The information that arrived after the decision wouldn't have changed it — confirming the STOP diagnosis was right.

**Situation:** A leader is choosing between three candidates for a senior role. The team is split. He's been "leaning toward" candidate B for three weeks but can't commit.
**Application:** Make Your Criteria Battle. Pair the criteria — "ability to ship fast" vs "depth of customer empathy" vs "fits team culture" — and force ranking. Add quantities: "I'd take six months of slower shipping for materially better customer empathy." After the criteria are forced into rank order, candidate B falls behind candidate A on the dominant criterion the leader hadn't admitted was dominant.
**Result:** Either candidate A is the hire, or the leader discovers his real reluctance is something the criteria didn't surface — at which point the actual conversation can happen.

**Situation:** A startup is about to commit to a seven-figure contract with a single vendor for core infrastructure. The CFO is uncomfortable and can't articulate why.
**Application:** Premortem. Imagine it's two years from now and the contract was a disaster. What happened? The team surfaces three failure modes: vendor pivots away from this product line, vendor gets acquired by a competitor, vendor's pricing model changes after the lock-in period. Build a margin of safety: negotiate exit clauses, keep one critical workload portable, time-box the lock-in.
**Result:** The contract still ships, but with terms that survive the surfaced failure modes. When the vendor does get acquired eighteen months later, the company has options instead of being forced into a bad migration.

**Situation:** A leader spent six months on a market entry decision. The launch failed. The team is calling it a bad decision.
**Application:** Separate decision quality from outcome quality. Was the problem defined correctly given what was knowable then? Were multiple options explored? Was a premortem run? Was a margin of safety built in? If the answers are yes and the failure came from genuinely unforeseeable factors, the decision was good and the outcome was bad luck. If the answers are no, the decision was bad and the outcome was correctly punished.
**Result:** The team learns the right lesson. If the process was sound, it gets repeated. If a specific stage was skipped, that stage gets reinforced. Outcome-bias would have either condemned a good process or rewarded a bad one — both bad outcomes.

## Anti-Patterns (tactical)

**Don't:** Skip the problem-definition stage because the problem "feels obvious."
**Why:** The most expensive errors are problems that were never defined correctly. The first plausible description becomes the working definition by social default and the team spends the next six months solving the wrong problem with high precision.

**Don't:** Treat all decisions with the same level of process.
**Why:** The Consequentiality × Reversibility grid exists for a reason. Running the full process on a $40 reversible purchase is its own waste. Running a snap call on a seven-figure irreversible commitment is the failure mode.

**Don't:** Confuse motion with progress in the gathering phase.
**Why:** Slovic's handicappers warning. More information doesn't increase accuracy past a threshold — it inflates confidence. Each additional data point feeds confirmation bias. The Stop / FLOP / Know test is the discipline.

**Don't:** Set criteria that are purely negative.
**Why:** "I don't want X" rarely decides anything. The criteria that promote the goal are the ones that produce a winner. Negative criteria filter — they don't choose.

**Don't:** Skip the margin of safety because the central forecast looks robust.
**Why:** The margin of safety isn't for the central case. It's for the surprise. "The minute you convince yourself you could have done better without a margin of safety is exactly when you need it most."

**Don't:** Judge the decision by the outcome.
**Why:** Outcomes contain luck. A good process can produce a bad result and a bad process can produce a good one. Judging by outcomes teaches the wrong lessons systematically. Reinforce the process; let the outcomes update the model only when they're persistently divergent.

**Don't:** Let binary framing survive past the first five minutes of solution exploration.
**Why:** Binary framing is the social default in option-clothing. If you only see two options, you haven't thought hard enough yet. The 3+ principle is the discipline.

**Don't:** Make a decision in HALT.
**Why:** No process survives the decider being hungry, angry, lonely, tired, rushed, or stressed. Defer if you can. The deferral is the decision.
