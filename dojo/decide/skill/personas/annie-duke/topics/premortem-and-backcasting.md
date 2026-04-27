---
triggers:
  - "user is finalizing a plan and wants to stress-test it before committing"
  - "user describes a strategy with no apparent failure modes considered"
  - "user is leading a team into a major launch, hire, fundraise, or pivot"
  - "user asks how to do better strategic planning or how to anticipate what could go wrong"
  - "team is exhibiting groupthink — everyone agrees and nobody is naming the risks"
  - "user is overconfident about a goal and could use a structured way to surface obstacles"
use_when:
  - "the decision is significant enough to deserve a structured forecast of both failure and success"
  - "you want a tool that gets dissent surfaced without anyone having to be the squeaky wheel"
  - "the plan is being made by a group and groupthink risk is real"
fails_when:
  - "the decision is trivial and a premortem is overkill — running a premortem on every email is decision theater"
  - "the team uses the premortem to talk itself out of doing anything (negative thinking taken to paralysis)"
  - "no one writes anything down — verbal premortems get diluted by groupthink the same way regular meetings do"
related:
  - "three-ps.md"
  - "mental-time-travel.md"
  - "kill-criteria.md"
---

# Premortems and Backcasting

## When to Use
- A founder is finalizing a major plan — a fundraise, a launch, a pivot, a key hire — and wants to stress-test it before committing.
- A team has aligned around a strategy and the alignment looks suspiciously clean. Nobody is naming the risks. That's groupthink, and a premortem is the cleanest way to break it without anyone having to play the heel.
- A high-stakes goal needs to be planned backward from a vivid future, not forward from the foggy present. Backcasting from success and premortem-ing from failure are both forms of mental time travel that beat forward-from-now planning, every time.
- The user has a tendency to over-rely on positive visualization ("we're going to crush it") and the planning is starting to read like a victory speech rather than a plan.
- The decision is going to play out over months or years, and you want a record of why the team thought it would work — and how it might fail — that you can revisit later when reality starts producing data.

## Fails When
- **Trivial stakes** — Don't run a 90-minute premortem on whether to change the meeting time. The framework earns its time when the decision is big enough to warrant the structure.
- **Negative thinking taken to paralysis** — A premortem produces a list of failure modes; a list of failure modes is not a reason not to act. If your team is using premortem output to permanently postpone the decision, the tool is being misused. The point is to *anticipate and mitigate*, then move.
- **Verbal-only premortems** — If you don't write it down independently before discussing, you're just running a regular meeting where the loudest voice wins. The whole point is to capture the diversity of views *before* they get sanded down by group dynamics.

## Core Concept

The premortem is not mine — it belongs to **Gary Klein**, the decision researcher who introduced it in a 2007 *Harvard Business Review* piece. Klein's insight is simple and clean: instead of doing a postmortem after the patient is already dead, do the autopsy *before* the patient dies — while you can still change the outcome. Imagine you've already failed. From that vantage point, look back and explain *why*. The mental move is small; the effect is large. Looking forward from the present, with status-quo bias and optimism stacking the deck, people generate weak forecasts of failure modes. Looking backward from a vivid imagined failure, the same people generate dramatically richer lists. Mitchell, Russo, and Pennington showed in 1989 that prospective hindsight — imagining the event has already occurred — increases the ability to identify reasons for outcomes by 30%. Klein's premortem is the operational version of that finding.

My contribution, developed across *Thinking in Bets* and *How to Decide*, is the **backcast** — the companion to the premortem. The premortem imagines failure and works backward from it; the backcast imagines success and works backward from *that*. *You need both.* Most positive-thinking literature stops at backcasting — imagine you've succeeded, picture how — and treats premortems as defeatism. But mental contrasting research (Gabriele Oettingen, two decades of it) shows the opposite: people who imagine the obstacles between them and their goal are *more* likely to actually achieve the goal, not less. Imagining failure isn't manifesting failure. It's getting your route plan right. Paper maps show the destination; Waze shows the road closures, the traffic, the speed traps. When it comes to planning, you want Waze, not the paper map. Premortems are Waze.

The deep move underneath both tools is **mental time travel**. The future, viewed from now, looks foggy and is dominated by the present (status-quo bias makes you assume current conditions persist). The future, viewed from the imagined future, comes into focus — because you've teleported your perspective. From the summit you can see the route up the mountain. From the base you can see only what's ten feet ahead of you. Premortem and backcast are two summits — one labeled "we failed" and one labeled "we won" — and each gives you a clear view of the route that doesn't exist from where you currently stand. *The accurate forecast lives at the intersection of both views.* Just like accuracy lives at the intersection of inside view and outside view, the most realistic picture of the future lives at the intersection of imagined success and imagined failure. The probabilities of positive and negative futures have to add up to 100%; if you're only imagining one of them, you're working with half the picture.

## How to Apply

For both the premortem and the backcast, the steps are nearly identical. Run them in this order: premortem first (the harder, less-natural one), then backcast. *Anchor on the premortem* — that's where most of the lift is, because backcasting is what people do naturally anyway. Most people are already over-imagining success.

1. **Name the goal or decision in one sentence.** "We're going to double market share from 5% to 10% over the next three years." "We're hiring this candidate as our VP of Sales." "We're closing a $20M Series B by end of Q3." Specificity matters — vague goals produce vague failure modes.

2. **Pick a reasonable time horizon for the goal to play out.** Three years for the market share goal. Twelve months for the VP. End of Q3 for the raise. The horizon has to be long enough that real data is available by then but short enough that you can imagine yourself standing at it.

3. **Premortem first. Imagine you've already failed.** Picture the headline: *"Company X Fails to Reach Market Share Goal; Growth Stalls."* Sit with the failure for a moment until it feels real. Then ask: *why did this happen?* Each member of the team writes their own answers, independently, before any group discussion. Independent writing is non-negotiable — once people talk first, the group will produce a single consensus list, and consensus is what you're trying to get *around*, not into.

4. **Sort failure reasons into "within our control" and "outside our control."** Within: bad hires, slow execution, wrong product roadmap, missed pricing window, sales team didn't ramp. Outside: macro recession, key competitor moved faster than expected, regulatory change, the cofounder fell sick. Both categories matter. Within-our-control failures point to mitigation; outside-our-control failures point to contingency planning and resilience requirements (how thin is your plan against macro variance?).

5. **Now backcast. Imagine you succeeded.** Same horizon. Picture the headline: *"Company X Doubles Market Share."* Then: *why did this happen?* Same independent-writing rule. Same two-bucket sort: success because of *what we did*, success because of *what fell our way*. The luck-credit column is the part most teams skip; do not skip it. If your imagined success requires three lucky things to happen, the goal is more ambitious than your team is admitting. (Add up the probabilities; if your success path requires three independent lucky breaks at 50% each, your real probability of success is 12.5%, not 50%.)

6. **Combine the two views into a real plan.** Each premortem failure reason is now an obstacle to mitigate or accept. Each backcast success reason is a step to actively engineer. Each "outside our control" item — both directions — is a sanity check on how dependent your plan is on conditions you can't control. If your plan only works when the wind is at your back, that's a fragile plan. If your plan survives the premortem failures and exploits the backcast successes, that's a robust plan.

7. **Memorialize.** Date it. Save it. Make it findable. When the future starts unfolding, you have a reference document — what you thought would happen, why, and what you predicted as the failure modes. You can update against it as data lands. Without the document, you're stuck doing post-hoc storytelling that hindsight bias has already corrupted.

8. **Reward the dissent.** When the team gathers to discuss, the win-the-room move should be the most creative, specific, useful failure mode — not the most enthusiastic agreement. The premortem reframes "playing devil's advocate" as the team-player move. *Premortems reveal and reward the squeak.* Without that reframe, the team will collapse into agreement again, and you'll have wasted the exercise.

## Examples

**Situation:** A founder is closing a $20M Series B with a strong lead investor. The deal looks done. He's planning the announcement and the team's growth post-close.
**Application:** Premortem before signing. *It's six months from now. The Series B fell through in due diligence. Why?* Independent writing first. Reasons: a customer reference call went badly because the customer was unhappy and the founder didn't know; the burn rate the company is running on contradicts the runway story in the deck; the lead investor's partnership voted against; a co-investor pulled out and triggered a renegotiation; one of the customer logos in the pitch turned out to be a pilot, not paid. Backcast: *the round closed. Why?* The founder pre-empted the reference issue by checking with each customer first. The deck reconciled with the financials in a clean side-by-side. The pricing of the round was set at a level that the lead's partnership could defend internally.
**Result:** Two specific actions before the close: customer reference audit, financials reconciliation. The premortem caught the kind of thing that only embarrasses you in due diligence and tanks the deal. The backcast caught the proactive moves that make a "yes" easier on the lead. Both add maybe four hours of work and reduce the probability of a blown deal materially.

**Situation:** A team is finalizing the launch plan for a major product. Everyone in the room is enthusiastic; the plan looks airtight.
**Application:** That suspicious unanimity is itself a flag. Premortem. *It's three months post-launch. The product is dead. Why?* Independent writing. Reasons start showing up: the onboarding flow assumed customers would do something they consistently don't do; the pricing was tested with friendlies, not with real ICP; we relied on a single channel for distribution and the channel changed its policy; the support team isn't staffed for the inbound; we built the wrong feature first because the squeakiest customer asked for it. Backcast: *the launch is a hit. Why?* We launched with a small, real wedge instead of the broad version; the support team had three weeks of pre-loaded scripts; we had a fallback distribution channel ready; the pricing test ran on cold prospects, not warm ones.
**Result:** The plan moves from "looks airtight" to "actually robust." Maybe two of the seven failure modes turn out to be real once launch happens, and the team has already pre-planned for them. The other five didn't materialize — but the cost of having thought about them was an afternoon, and the value if even one of them had landed unmitigated would have been months of recovery.

**Situation:** A company is setting a three-year strategic plan to grow ARR from $10M to $50M.
**Application:** Both views. Premortem at year three: *we hit $20M instead of $50M. Why?* Sales team ramp was 9 months not 6, and the math compounds; product expansion stalled because engineering was tied up on tech debt; net retention dropped because customer success scaled too late; competitive pressure from a new entrant we didn't predict; macro tightening reduced enterprise budgets. Backcast at year three: *we hit $55M, beat the plan. Why?* The pricing change in year two unlocked a higher ACV than expected; we hired the VP of Sales six months earlier than planned; our second product line started pulling in net-new logos by month 18.
**Result:** The plan stops being a number-flow and starts being a sequenced set of bets, each with a probability and a mitigation. The leadership team also gets a much clearer picture of which assumptions the plan is most fragile against — the VP of Sales hire timing, in this case — and can act on that fragility (start the search now, not in Q3).

**Situation:** A founder is hiring for VP of Engineering. The leading candidate looks great. The reference calls were warm.
**Application:** Premortem. *It's twelve months from now. The hire didn't work out. Why?* Reasons surface: the candidate's previous company was smaller and they're going to struggle with our scale; their references were friendly but didn't include a peer or a direct report; their stated management style is a fit for a remote team but our team is hybrid-trending-in-office; they haven't done a hands-on engineering role in five years and the team needs a working manager. Backcast: *they're a star, twelve months in. Why?* Their pattern-match for our scale was actually right because of X; their first 90-day plan held up; they hired two strong directors in the first six months.
**Result:** Two specific things to do before the offer: get a peer reference and a direct-report reference; have a deeper conversation about hands-on involvement. The hire might still happen, with eyes open to the specific risks. Or the founder discovers something in the additional references that pulls the offer back. Either way, the probability of "twelve months from now I'm rehiring this seat" went down materially.

## Anti-Patterns (tactical)

**Don't:** Skip the independent-writing step.
**Why:** Verbal premortems become regular meetings, and regular meetings produce groupthink — which is the exact disease the premortem is supposed to cure. The senior person speaks first, the room aligns, the premortem becomes "let's enumerate the things we already agreed on." Independent writing forces the diversity of views into existence before the group dynamics can erase them. Five minutes of silent writing per person is non-negotiable. Without it, you've held a meeting and called it a premortem.

**Don't:** Skip the backcast.
**Why:** Premortem-only planning produces a robust pessimism — you've thought about everything that could go wrong. But you haven't thought about what you have to actively *engineer* to make the success happen. The backcast is the part where you discover that your imagined success requires three things you currently have no plan for. It's the cheerleader to the premortem's heckler, and you need both. Backcast-only planning is what most teams do by default; premortem-only is the overcorrection.

**Don't:** Treat the premortem list as a permission slip not to decide.
**Why:** A premortem produces a list of failure modes. The list is not a reason to abandon the decision; it's a guide to what you have to mitigate or accept. Some failure modes are mitigable (do the customer reference audit). Some are accepted as part of the bet (we can't control the macro, we'll accept that risk and reduce burn). Either way, the decision still has to land. Some teams use premortem output to delay indefinitely — *we identified ten failure modes, we can't act until they're all addressed.* That's analysis paralysis with a fancier name.

**Don't:** Run premortems where dissent is still socially expensive.
**Why:** The framework only works if "best failure mode" is the win condition. If the senior person reacts negatively to specific failure modes — "we already considered that," "you don't understand the business" — the team learns to keep the real risks to themselves and the premortem becomes performance art. The leader has to model the behavior: their own premortem list should be the most aggressive in the room. Otherwise the exercise is theater that confirms the leader's confidence.

**Don't:** Skip the time horizon.
**Why:** "Why might this fail?" without a horizon produces vague answers ("competitors will copy us") instead of specific ones ("by Q4 next year, the third competitor in our market will have launched a feature-equivalent product, our moat will have shrunk, and our ACV will compress 20%"). Set a date. Stand at the date. Look back. The specificity comes from the time-traveled vantage point; without it, you're just brainstorming risks at the same fog level you started with.

**Don't:** Forget to revisit the document when reality lands.
**Why:** A premortem you write and never look at again is a half-completed exercise. The point is to have a reference: what did we predict, what did we plan for, what landed. When data starts coming in — ramp slower than planned, churn higher than expected, a competitor moves you didn't predict — the document tells you whether your plan accounted for it. Revisit at quarterly milestones. *Was that risk in our premortem? If yes, our mitigation worked / didn't work. If no, what missed it?* That's where the learning compounds.

**Don't:** Confuse a premortem with negativity.
**Why:** Premortems are not pessimism; they're calibrated foresight. People who run premortems and act on them get to their goals more reliably than people who run on positive visualization alone — Oettingen's twenty years of mental-contrasting research is unambiguous on this. Imagining the obstacles is what gets you past them. Imagining only the success leaves you ambushed by the obstacles when they arrive. The temporary discomfort of imagining failure is paid back by the durable comfort of actually succeeding more often.
