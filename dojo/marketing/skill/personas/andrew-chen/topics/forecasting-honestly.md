---
triggers:
  - "user asks how to forecast growth"
  - "user's pitch deck has smooth hockey-stick projections"
  - "user asks for benchmark consumer-product metrics"
  - "user asks how Facebook found '7 friends in 10 days'"
  - "user can't explain what specific inputs drive their growth numbers"
  - "user treats MAU / signups / downloads as a primary KPI"
  - "user asks how to read cohort retention curves"
use_when:
  - "auditing a growth forecast for honesty"
  - "finding a single product-level activation metric for a growth team to rally around"
  - "calibrating a founder's expectations against the consumer reference class"
  - "diagnosing whether a 'growing' product is actually retaining users or just churning and replacing them"
fails_when:
  - "the user's business is genuinely pre-PMF — there isn't enough data to run a 7-friends-in-10-days analysis or cohort comparison yet"
  - "the user's product is episodic (travel, B2B SaaS) — consumer benchmarks like 30% DAU/MAU don't apply"
related:
  - "consumer-pmf.md"
  - "power-user-curve.md"
  - "paid-marketing-addiction.md"
---

# Forecasting Honestly — Inputs, Cohorts, and the Reference Class

## When to Use
- Evaluating or building a growth forecast for a networked consumer product.
- A team needs a single activation metric the growth org can rally around.
- A founder is anxious about "bad" consumer metrics and you need to calibrate them against the reference class.
- Diagnosing whether a "growing" product is actually retaining users or just replacing churn with new signups.
- Cleaning up a spreadsheet full of blended numbers and aggregate growth rates.

## Fails When
- The user's business is genuinely pre-PMF — there isn't enough data for cohort analysis or 7-friends-in-10-days regression yet. In that case, the right move is "get to PMF, then measure" — not build an elaborate model on noise.
- The user's product is episodic (travel, mortgage, vertical SaaS). Consumer benchmarks like 30% DAU/MAU don't apply; the reference class is different.

## Core Concept

There are four related pathologies in how most startups measure and forecast. Chen has written about each separately; the unifying frame is: **inputs beat outputs, cohorts beat aggregates, product-level activation beats generic metrics, and the reference class beats your intuition.**

**Pathology 1 — The hockey-stick forecast fallacy.** Teams forecast growth by multiplying current MAU by a fixed percentage WoW or MoM. The model is tautological. "Active users is a lagging indicator, and if you multiply this lagging indicator of a growth curve, it's a truism that the growth will go up and to the right." The problem: it disconnects actions from outputs. It assumes success as the base case when entrepreneurs should assume the opposite. Paul Graham's "Startup = Growth" essay made 5-7% weekly the target, which made bad forecasts worse because they were reverse-engineered to hit the benchmark rather than derived from reality.

The fix: **forecast from inputs.** Leading indicators specific to your business. How many pieces of content published, how many invites per user, how many new sales hires, how many hosts onboarded. Show the mechanism: inputs → conversion → output. Explicitly require the inputs to scale for the output to scale. Example chain for a SaaS business targeting 2x revenue next year:

> 2X revenue → 2X leads → 2X content pieces → therefore hire X new content marketers

If the hiring assumption is unrealistic ("we've had trouble finding one good content marketer this year, planning to hire eight"), the whole chain collapses honestly instead of hiding in a smooth exponential curve. "No plan survives contact with the enemy. Focus on the inputs because that's what you can actually control."

**Derive the growth rate. Don't assume it.**

**Pathology 2 — Leaky bucket (aggregates hide retention).** Websites are leaky buckets — constantly pouring in new users from the top while leaking existing ones from the bottom. Aggregate traffic data (Alexa, Similarweb, cumulative signups) can't tell you whether retention is healthy. Four scenarios are indistinguishable from aggregate data:

1. Pageviews come only from new users (retention ≈ 0%, growth buoyed by SEO/invites).
2. Pageviews only from one early-adopter generation.
3. Pageviews only from a loyal retained set, no new users.
4. Pageviews from new and retained users — the good case.

Chen's claim: "From aggregate data (like Alexa), you can figure out what sites are doing poorly at retention, but not what sites are doing well." A roaring hockey-stick site can be scenario 1 — all SEO-content-generating new users who never return.

The fix: **cohort analysis.** Break users into time-based cohorts (all users who joined in week N), follow each cohort's drop-off week-over-week. Stacking cohorts reveals whether this week's aggregate is retention-powered or new-user-powered. The PMF signal is the retention curve flattening at a commercially meaningful level. Growth curves lie; cohort curves don't.

**Pathology 3 — Using generic KPIs instead of product-level activation metrics.** DAU/MAU is too blunt. Total signups is a vanity number. Pageviews don't reflect value. What growth teams need is a *product-level activation metric* — a specific user action that strongly correlates with long-term retention, is memorable enough to rally around, and is actionable enough to design features against.

The canonical example: Facebook's "7 friends in 10 days" — the Facebook growth team found that users who added 7 friends within 10 days of signup were dramatically more likely to stick around. "I'm sure '10 friends in 12 days' works well too, as does '5 friends in 1 day' but you just pick something that makes sense and easily memorable."

The procedure (six steps):

1. **Define a user-success metric.** Days active in last 28; revenue in last 28; content uploaded in last 28. Pick what matches your monetization.
2. **Pull a cohort + build a data table.** For every user joined in the last X days, add rows with the success metric plus candidate input variables — friend count, comments given/received, mobile app install, shares, etc.
3. **Run correlations.** "The famous idea here is that fire engines correlate with house fires, but that doesn't mean that fire engines CAUSE house fires." Look for strong correlations; form hypotheses.
4. **Run regression, or pick the obvious one.** Startups usually don't have enough data for clean multi-variate models — that's fine. "You can't really tell your growth team 'OK guys, active days is driven by friends, posts, likes, and 20 other factors. Let's increase them.' Not very inspiring. Instead you're just looking for something simple that explains enough of variation in success to rally your team behind it."
5. **A/B test the model.** Build a feature that prioritizes moving the input variable; measure the downstream success metric. If it moves, you have a real model.
6. **"Brand" the model.** Make it dead simple to say and repeat. "7 friends in 10 days." "5 songs in first session." "First deposit within 48 hours." The whole growth roadmap aligns to moving the metric up.

**Pathology 4 — Comparing to the wrong reference class.** Every entrepreneur thinks their metrics are uniquely bad. They're usually not — they're just within the normal distribution of consumer metrics, which is grim across the board. "I've never met an entrepreneur who's happy with their metrics… The secret is, almost everyone's consumer product metrics are horrible, so once you start to compare them with everyone else's terrible metrics — then at least we're all in the same leaky boat together!"

Normal-bad consumer benchmarks:

*Signup rates:*
- SEO/content landing pages: often <1% signup.
- Homepage (word-of-mouth traffic): 10–20%.
- Minimal homepage optimized: 20–30%.

*Retention & frequency:*
- "Over 95% of your users are inactive on any given day."
- Typical D1/D7/D30 curves drop "pretty quickly with eventually stabilization around a mediocre number — often a single digit percentage."
- Getting >10% of total users back daily is "an amazing feat."

*Social graph density:*
- Often 50%+ of users don't know anyone on the service.
- Instagram in year one: 65% of users effectively followed no one.
- Combined with the 1% rule (only ~1% author content), healthy dynamic feeds are hard.

Benchmarks for comparison: **WhatsApp DAU/MAU 70%** (world-class). 30% DAU/MAU "good." Great consumer businesses monetize at 2-3% paid conversion.

Check against the reference class before you pivot. Otherwise you'll "fix" metrics that are already at the median for your category.

## How to Apply

1. **Rewrite your growth forecast from the inputs up.** Start with the specific actions you'll take next quarter (content pieces, invites sent, sales hires, listings onboarded). Show the conversion rates between inputs and output. Make the assumptions explicit, so when inputs don't scale, the forecast breaks honestly.

2. **Build a cohort view before you read another aggregate chart.** Every user cohort by signup week. D1, D7, D30, D60, D90 retention per cohort. Stack them on one chart. This is the only honest view of whether the product is working. Aggregate growth can hide complete retention collapse.

3. **Run the 7-friends-in-10-days procedure to find your product's activation metric.** Pick a success metric, pull user-level data, correlate, regress, A/B test, brand. Then align the growth roadmap to moving the metric up. Memorable. Pithy. Actionable.

4. **Calibrate against the reference class before panicking.** If your D30 is 15%, you're below Top-10 apps (60%) but roughly at the Next 100 apps (25.5%) and way above average (9.6%). Whether that's acceptable depends on your monetization model and category. Normal-bad is not cause for a pivot; worse-than-normal-bad is.

5. **Stop reporting blended top-line metrics as the primary KPI.** Switch the org's weekly metrics review to (a) cohort retention trends, (b) the product's named activation metric, and (c) per-channel / per-atomic-network performance. Blended MAU is for press releases, not management.

## Examples

**Situation:** Early Twitter, viewed from outside circa 2008. Alexa rank was flat or declining. Outside observers couldn't tell whether Twitter was in trouble or fine.
**Application:** Chen's framing: aggregate data can identify poor retention, not confirm healthy retention. Twitter at that moment was plausibly in scenario 1 (pure SEO / early-adopter churn) — no way to tell from outside.
**Result:** Chen's essay-time guess: "They are actually bleeding users pretty rapidly." The fix was never visible from aggregate data; it required the cohort view the Twitter team had internally. This is why outsiders can mis-read marketplaces and social products by looking at public metrics — the real signal is inside the cohort table.

**Situation:** Facebook growth team, 2007-ish. The team was looking for a single metric to rally the product roadmap around.
**Application:** Correlation analysis on user success metrics against candidate inputs produced the famous "7 friends in 10 days" pattern — users who crossed that threshold retained at dramatically higher rates. The team then designed onboarding flows around moving new users to 7 connections as fast as possible.
**Result:** The metric became internal dogma. Growth roadmap realigned around friend suggestion, Find Friends, address book import, email invites, and school-level defaults. Facebook's retention shape outgrew competitors, and the 7-friends-in-10-days story became one of the most-copied growth stories in Silicon Valley.

**Situation:** A founder looks at their product's metrics: 15% D30, 12% DAU/MAU, 60% of users following no one, 1% creating content. They're ready to pivot.
**Application:** Check against the reference class. 15% D30 is roughly average for a mid-tier app (Next 100 shows 25.5% D30). 12% DAU/MAU is below good (30%+) but not catastrophic. 60% lonely-followers is close to Instagram in year one (65%). 1% creating content is the 1% rule — structural, not a bug.
**Result:** The metrics are within the normal distribution for a consumer networked product. The right move isn't a pivot; it's finding the activation metric and moving it, calibrating to the category benchmarks. Panic is premature.

## Anti-Patterns (tactical)

**Don't:** Forecast growth by multiplying current MAU by a fixed percentage.
**Why:** Tautological. Lagging indicators go up when you multiply them by positive numbers; the math is trivially true and tells you nothing about whether the business will actually grow. "Derive the growth rate. Don't assume it."

**Don't:** Report aggregate traffic or cumulative signups as the org's primary KPI.
**Why:** Aggregates rise monotonically during churn-and-replace periods. Your top-line looks great while cohort retention destroys the business underneath. By the time the cohort math shows up in the aggregate, you've scaled a broken product.

**Don't:** Use "MAU" as your activation metric.
**Why:** MAU is too coarse to move a product roadmap. The team can't ship features "to increase MAU." They can ship features to move "friends added in first week" or "listings created in first session" or "first deposit within 48 hours." Find the specific, memorable, product-level input.

**Don't:** Compare your metrics against Facebook's or WhatsApp's.
**Why:** WhatsApp at 70% DAU/MAU is world-class outlier. Facebook's smile shape is world-class outlier. Your reference class is the honest distribution of consumer apps, which is grim across the board. Compare against that, not the aspirational extremes.
