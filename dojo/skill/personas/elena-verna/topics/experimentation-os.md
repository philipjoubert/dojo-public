---
triggers:
  - "user asks how to build an experimentation culture"
  - "user's experiment win rate is very high (85%+) and they think that's a good sign"
  - "user asks how to get leadership to care about data"
  - "user wants to set up a weekly metrics or experimentation review"
  - "user says 'we're trying to be data-driven'"
  - "user is burning cycles debating which experiment to run instead of just shipping"
  - "user's team is afraid to share failed experiments"
use_when:
  - "scaling experimentation from ad hoc to systematic"
  - "establishing metrics ownership across a growth org"
  - "diagnosing why a growth team keeps 'winning' but revenue isn't moving"
fails_when:
  - "leadership refuses to be data-driven — no ritual survives a HiPPO culture"
  - "the team doesn't have basic tracking or a data platform yet"
related:
  - "squad-sequencing.md"
  - "growth-loops.md"
---

# Experimentation OS

## When to Use
- When a team is "running experiments" but winning 85%+ of them. That's not experimentation — that's validation theater.
- When leadership says "we want to be data-driven" and you need to translate that into actual rituals, channels, and meetings.
- When experiments take 6 weeks to ship and the cycle time is killing learning velocity.
- When failed experiments get quietly buried, shared with no one, and the organization learns nothing.
- When a growth team is making every single initiative an experiment, paralyzed by A/B testing even the color of a button.
- When a company needs a shared source of truth on metrics so stop-work arguments stop happening every Monday.

## Fails When
- **Leadership refuses to be data-driven.** No ritual survives a HiPPO (Highest Paid Person's Opinion) culture. If the CEO ignores the data and makes decisions on gut, the experimentation OS is cargo culting.
- **No basic tracking in place.** You can't experiment your way to insights without an analytics foundation. If you're still figuring out "can we count signups consistently," fix that first. Experimentation OS assumes the data platform is already functional.
- **The team is too small.** Sub-10 product people with no dedicated growth function don't need an OS. They need to ship. Formalize when you have enough volume that informal patterns break down (usually $1M+ ARR, 3+ growth squads).

## Core Concept

Aim for a **failure rate of 50% or more on your experiments.** Yes, that's the target. Yes, I'm serious. Let me be clear why: if you're winning 90% of your experiments, you're not running experiments — you're seeking validation. You're picking tests where you already know the answer, shipping safe changes, and then high-fiving in Slack. That's not learning. That's theater. **Failure is magical because failure unveils where your intuition does not match reality.** The gap between what leadership believes and what users actually do — that's the perception-reality gap, and experimentation is the only bridge across it. You only cross that bridge when experiments fail often enough to tell you the truth.

Now, "failing" doesn't mean reckless. A failed experiment is one where metrics didn't move, metrics deteriorated, or metrics lifted but not how/where you expected. That's failure in the scientific sense — hypothesis not confirmed. It is not the same as shipping carelessly or torching the product. Aim for a 50% failure rate *measured quarterly as a real KPI*. If your team is below 30% failure, they're not shipping bold enough tests. I still go through 5 stages of grief every time my experiments fail. It's normal. You have to learn how to fail.

Here's the ritual layer — the actual operating system. **Three Slack channels.** Non-negotiable:

- **#experiment-launches** — every experiment that goes live is announced here with hypothesis, target metric, and expected impact. Creates visibility and prevents teams from unknowingly running conflicting tests on the same surface.
- **#experiment-results** — every experiment, win or lose, posts results here. No hiding. No "we'll share later when we have a win." Results post in a consistent format with the learning highlighted.
- **#oh-sh1t** — we kicked this one off at Dropbox. Dedicated channel for tests and initiatives that didn't pan out. It's where grief goes to become knowledge. Leadership must show up here and celebrate the learning, not punish the failure.

And the anchor ritual: the **Weekly Metrics Review.** This is my favorite meeting. It's the single most impactful ritual for organizational alignment around metrics. Every week, on Tuesdays (Monday is prep day), the key DRIs — Directly Responsible Individuals — present the driver metrics that lead to revenue. **Driver metrics, not revenue itself.** Revenue is an output. Goal the drivers, and revenue follows. Goal revenue directly, and you get revenue addiction and a team that games the dashboard to hit a number. Start this meeting *as soon as you have over 100 users*. Yes, that early. Habit forms through repetition. Metrics become part of everyday conversation.

The **DRI model** is load-bearing. The DRI is the "Metric CEO" — they *coordinate resources* across teams to drive their metric. They are not the only person accountable. When a DRI asks for priority, the org prioritizes. When they don't get what they need, they escalate. What makes a good DRI? High agency, ecosystem understanding (they know how their metric affects others), contextual history of the metric, extreme growth mindset (they accept that most weeks the metric is flat or down and they're digging through the reasons), and program management ability. Finance and Analytics must be in the room. DRIs can switch across quarters based on focus. They can switch departments — from product to marketing and back — based on where the work needs to happen.

**Infrastructure rule: 30% of engineering capacity goes to long-term infrastructure. 90% of experiments should ship within 2 weeks.** Most growth experiments are shipped *to validate a hypothesis*, not to release a permanent feature. Growth engineering is comfortable with throwaway code, fast iteration, statistical literacy, and tolerance for most experiments failing. Growth engineers aren't worse engineers — they're different engineers. They optimize for *learning speed*, not code perfection.

And the last piece: **leadership must celebrate failure visibly.** Not performatively — visibly. When an exec shows up in #oh-sh1t and says "this taught us X, here's what we're doing differently," the ritual is alive. When execs ignore failures and only show up to congratulate wins, the team learns to only ship wins, which means they stop experimenting and revert to validation theater.

## How to Apply

1. **Set the failure rate target at 50%+ and measure it as a KPI.** Every quarter, count experiments that shipped, count how many "failed" (metrics didn't move, deteriorated, or lifted unexpectedly), divide. If below 50%, the team is not ambitious enough. If above 80%, the team may be reckless or poorly instrumented — dig in.

2. **Stand up the three Slack channels.** #experiment-launches, #experiment-results, #oh-sh1t. Pin format templates. Require every experiment to post in launches at start and results at end. No exceptions. If an experiment doesn't show up in the channel, it didn't happen.

3. **Run the Weekly Metrics Review on Tuesdays.** Monday = prep, Tuesday = live meeting. Cover driver metrics (not revenue directly) — typically 10–50 metrics depending on team size. Examples for self-serve: prospecting visitors, signups, activation, free-to-paid conversion, ARPA, churn by term, expansion, resurrection. Examples for sales: leads, MQL, SQL, S2, pipeline, conversion, ASP, renewal, NDR. Each metric has a named DRI who voices it over. Finance and Analytics must attend.

4. **Define three revenue scenarios: Momentum, Baseline, Lift.** Momentum = what happens if you do nothing (usually 10–15% annual decline — gravity is real). Baseline = work required to prevent natural deterioration. Lift = where you want to end up. The metrics behind Baseline and Lift scenarios are the driver metrics to review weekly. Tag every initiative with the driver metric it's trying to move.

5. **Build the DRI model.** Each driver metric gets one DRI. The DRI has high agency, coordinates across teams, understands the ecosystem, and has extreme growth mindset. The org prioritizes DRI requests. DRIs participate in every quarterly re-forecast. DRIs are held accountable for coordination, not for the number alone.

6. **Enforce the 30/90 rule on engineering.** 30% of growth engineering capacity on long-term infrastructure (A/B testing tooling, instrumentation, data quality, platform). 90% of experiments shipped within 2 weeks. If most experiments are taking 6+ weeks, your infrastructure is the bottleneck — invest there.

7. **Make leadership celebrate failure publicly.** Not lip service. Execs show up in #oh-sh1t. Execs open all-hands meetings with a failed experiment and the learning extracted. If the CEO only talks about wins, the team ships only wins, which means the team stops experimenting.

8. **Don't make everything an experiment.** If every initiative is an experiment, that's a problem — a paralyzing disease. Test only when precise measurement is needed and risk is high. Big launches aren't experiments. Strategic direction isn't an experiment. Reverse trials, paywall placements, onboarding flow variants, pricing page copy — those are experiments.

## Examples

**Situation:** A Series B company is "running experiments" and reports a 92% win rate. Leadership is thrilled.
**Application:** Wrong read. A 92% win rate means the team is only shipping tests where they already know the answer. They're running confirmation exercises. Move the target: quarterly OKR of 50%+ failure rate. Teach the team that failure is the goal. Watch them start shipping bolder hypotheses — bigger redesigns, pricing shifts, uncomfortable activation changes. Watch win rate drop to 45% and revenue impact *triple*. The safe wins were worth 1–2% lift each. The bold failures taught the team where the real 15–20% levers were hiding.
**Result:** Failure rate rises from 8% to 52%. Learning velocity doubles. Revenue impact per experiment roughly triples because the tests that do win, win bigger. Leadership initially panics, then adjusts once they see the revenue curve.

**Situation:** Dropbox needed a way to normalize discussing failed initiatives and sharing what the team learned.
**Application:** Stood up the #oh-sh1t channel. Any team could post an initiative that didn't pan out — with the data, the hypothesis, and what they learned. Leadership participated. Posts got thread discussion and upvotes. Nobody was punished for appearing there. Appearance in #oh-sh1t became a sign of ambition, not failure.
**Result:** The channel became the most valuable information source in the company — where pattern-matching happened across teams. Experiments that would have been re-run in other orgs got skipped because someone else had already learned the answer. Institutional learning went from tribal to systemic.

**Situation:** A SaaS company "wants to be data-driven" but the CEO makes all decisions on gut. Metrics reviews happen monthly, attended by different people each time, with different definitions of "active users."
**Application:** Stand up the Weekly Metrics Review on Tuesdays. Require the CEO's presence (or at least the COO/CPO's). Start with 10 core driver metrics. DRIs named. Same definitions every week. Same dashboard, auto-pulled. First three months are painful — definitions get fought over, dashboards keep breaking, execs keep canceling. Then it clicks. Metrics become everyday conversation. Data drift stops. Distrust in numbers disappears.
**Result:** I've watched this exact transition at SurveyMonkey, Miro, Amplitude, and Dropbox. Each time, the ritual changed the culture more than any off-site or framework did. "Without this ritual, companies fall into the perception-reality gap." The meeting is the bridge.

**Situation:** A growth team is shipping 2 experiments a month because each one takes 6 weeks from hypothesis to results. Infrastructure is ad-hoc. Engineers hate the experimentation codebase.
**Application:** Dedicate 30% of growth engineering capacity to infrastructure for one full quarter — A/B testing tooling, feature flags, event tracking, shared components for common experiment patterns. Enforce the 2-week ship rule on experiments. What used to take 6 weeks now takes 8 days. Experiment volume goes from 2/month to 8/month.
**Result:** Four times the learning velocity. Same headcount. Failure rate stays at 50%, but the team is now running 4x the bold bets. Revenue impact compounds. This is why 30% infra investment is a rule, not a suggestion — the infra unlocks everything downstream.

## Anti-Patterns (tactical)

**Don't:** Celebrate a 90% experiment win rate.
**Why:** That's not experimentation, it's validation theater. You're picking safe tests, pre-known outcomes, and rubber-stamping them as "experiments." You're not learning anything. Set 50%+ failure as the explicit KPI and measure it quarterly. The team will rebel at first. They'll adjust.

**Don't:** Put only Growth people in the Weekly Metrics Review.
**Why:** DRIs should span the entire organization — product, marketing, sales, even finance. Activation might be owned by a product PM. Acquisition might be owned by a marketer one quarter and a PLG PM the next. If the meeting is only Growth, Growth becomes the target for every missed number, and the actual levers remain outside the room.

**Don't:** Blame the DRI when their metric misses.
**Why:** The DRI is the "Metric CEO" — they coordinate resources, they don't solely deliver the number. If your culture makes DRIs personally accountable for outcomes they can't control alone, nobody will volunteer to be a DRI, and the metric will go orphaned. Prioritize DRI requests. Escalate when they're blocked. Include them in every quarterly re-forecast.

**Don't:** Make every initiative an experiment.
**Why:** A paralyzing disease. Test only when precise measurement is needed and risk is high. Big directional launches aren't experiments. Core product roadmap isn't an experiment. Testing whether your new category page should have 5 or 7 features isn't worth a 4-week A/B test — ship the better one based on judgment.

**Don't:** Hide failed experiments.
**Why:** The only bad experiment is one you don't learn from. Teams that hide failures lose the learning *and* build a culture where everyone ships only safe tests. Over time, failure rate drops, experimentation stops, and the team quietly reverts to gut-feel shipping with an A/B-test frosting. Post every result. Every one.

**Don't:** Wait to start the Weekly Metrics Review until you're "bigger."
**Why:** Start as soon as you have over 100 users. Habit forms through repetition. The ritual scales with you. Companies that start the review at $50M ARR have to fight culture debt — 10 years of not-data-driven habits to undo. Companies that start it at $100 users have the culture built in before there's anything to argue about.

**Don't:** Let 90% of experiments take longer than 2 weeks to ship.
**Why:** Learning velocity dies. Infrastructure investment is the fix — 30% engineering capacity dedicated to it. If experiments consistently take 4–6 weeks, the problem isn't the team, it's the foundation. Diagnose the bottleneck: feature flags? Event tracking? Statistical analysis? Shared components? Invest until the 2-week rule holds.

**Don't:** Measure "Weekly Active Users" as "logged in last week."
**Why:** That's a vanity metric in disguise. A user who logs in once every three years and happens to do it last week counts. Real weekly activity is *performed a meaningful action in 3 out of the last 4 weeks*. Define frequency properly or your metrics are lying to you and the Weekly Metrics Review becomes theater.
