---
triggers:
  - "user cites a statistic about a group ('our bottom quartile', 'the poor', 'junior employees')"
  - "user says 'X group is getting worse / better / stagnating'"
  - "user designs policy around a category (employee segment, customer segment)"
  - "user treats 'household income' or any aggregated statistic as evidence about individuals"
use_when:
  - "a category (statistical bin) is being treated as if it were a fixed set of people"
  - "policy or decisions are being shaped by what happens to 'the category'"
fails_when:
  - "the category really is a fixed cohort (specific named cohort that doesn't turn over)"
  - "the analysis is correctly about the category itself, not the individuals"
related:
  - "articulation-vs-truth.md"
  - "tradeoffs.md"
---

# Categories vs People

## When to Use
- Statements that describe what is happening to a group or percentile without naming specific individuals.
- Any performance review framework that refers to "the bottom quartile" as if those were stable names.
- Compensation analysis about "senior" vs "junior" bands that treats bands as fixed populations.
- Customer-segment discussions that describe "enterprise customers" as if the set does not change.
- Any "the X are getting worse" or "inequality is widening" claim — ask whether the X are the same X.

## Fails When
- The cohort genuinely doesn't turn over — a specific named class, a fixed customer list, a bounded set of people with stable membership.
- The question you're asking really is about the category, not the individuals (e.g., "what is the turnover rate of our bottom quartile?" is legitimately about the category).

## Core Concept

Perhaps the most fertile source of misunderstanding about groups of people is the widespread practice of confusing statistical categories with flesh-and-blood human beings.

"The top 20%" and "the bottom 20%" exist as categories in every year's data. But the people in those categories change dramatically over time. A 25-year-old making entry-level wages is in a different category than they will be at 45 earning peak career income. When you track categories, the categories stay put. When you track people, the people move.

Consider the classical empirical reversal. Media reports routinely assert that "the rich are getting richer while the poor are getting poorer" — a statement about categories. U.S. Treasury data, which follows specific individuals over time via their tax returns, tells the opposite story about *people*. The particular taxpayers who were in the bottom 20% in 1996 had their incomes rise 91% by 2005. The particular taxpayers in the top 20% in 1996 had their incomes rise only 10%. The incomes of those in the top 5% and top 1% actually declined.

Both sets of statistics are true because people *move* between categories. The bottom bin today is occupied by different people than occupied it a decade ago. The people who were in the bottom bin then have, mostly, moved up and out. New people (younger, earlier-career, newer immigrants) have filled the bin from below. The category persists; the population inside it rotates.

This is not a statistical technicality. It is the difference between describing a bin and describing humans. Policies based on categorical thinking often harm the very people they aim to help — because the "fixed group" the policy addresses is not fixed. Programs designed around "the poor" as a permanent class miss that most poor people are not permanently poor; they are young, or between jobs, or starting businesses, or new to the country. Policies that treat "the rich" as a permanent class ignore that most high incomes are temporary (the sale of a business, the peak earning year of a career).

The confusion shows up inside companies the same way.

## How the Confusion Shows Up in Business

- **"Our bottom-quartile employees are underperforming."** Which specific employees? If you pick the five who were in the bottom quartile three years ago, where are they now? If they have all been promoted out of the quartile, your "underperforming bottom quartile" is a healthy pipeline behaving correctly. If they are the same five, you have a real problem — but it is an individual problem, not a categorical one.

- **"Junior employees feel stuck."** Which junior employees? The junior employees today are different from the junior employees 18 months ago. If 18-month-old junior employees have been promoted, your "stuck junior employees" are the new cohort, who by definition haven't had time yet.

- **"Enterprise customers have lower retention."** Which enterprise customers? If your highest-revenue enterprise accounts three years ago are all still with you, and the "low retention" is in a different set of accounts you onboarded recently, you are not describing the same group.

- **"Household income has stagnated."** Household income is a category statistic. It stagnated in part because the number of people per household has declined — more single-person households, more unrelated individuals maintaining their own homes. Per-capita income rose 122% over the same period that household income rose 31%. The "stagnation" describes a statistical artifact, not the experience of the same set of people.

The reversal is often dramatic. What looks like a group stagnating or worsening frequently turns out to be a category that is refilling from below while individuals within it rise.

## The Moral Dimension

The difference between categories and people matters morally as well as empirically.

The very phrase "income distribution" is tendentious. It starts the economic story in the middle, with a body of income or wealth existing somehow, leaving only the question of how that body gets "apportioned." But income is not apportioned like newspapers. There is no central authority deciding who gets what share of a fixed pile. People earn income by providing goods and services that others value. There is no pre-existing quantity waiting to be divided — the pie has to be produced before anything can be said about who gets which slice.

When you talk about "the bottom 20% of employees" as if it were a fixed group being treated unfairly, you are making the same kind of error. The bottom 20% is a statistical artifact. The flesh-and-blood humans inside it are moving through it. Policies that treat the bin as a permanent class will misallocate attention, mis-target investment, and produce responses that describe a fiction rather than a reality.

This does not mean there are no real problems. If a specific employee is stuck three years running, that is a real problem. If a specific customer segment really does have low retention, that is a real problem. But the real problem lives at the level of specific individuals or specific cohorts, not at the level of the statistical bin.

## How to Apply

1. **Whenever someone cites a statistic about a group, ask: are these the same people over time, or are you describing a refilling bin?** For most "group X is getting worse" claims, the honest answer is the latter.

2. **Follow individuals, not categories.** Pick the specific five (or ten, or twenty) people who were in the category at an earlier time. Where are they now? What happened to each? The answer is almost always more revealing — and more actionable — than the aggregate.

3. **When designing policy around a group, ask whether the group is stable enough for the policy to make sense.** A retention program for "new employees in their first six months" addresses a turnover bin; a retention program for "employees who joined in Q1 2024" addresses an actual cohort. These require different policies.

4. **Watch for the category-to-moral-claim leap.** "The poor are getting poorer" becomes "society is failing the poor" becomes "we must act." But if the first statement was a statistical artifact about a refilling bin — and the actual humans in it were doing much better — the moral conclusion is based on a fiction.

5. **Check averages against distributions.** Averages hide individual variation. Medians hide tails. Any single statistic about a group contains less information than the underlying distribution. When the single statistic looks surprising, look at the distribution.

6. **Use actual cohort tracking for important questions.** If you genuinely want to know whether employees are progressing, track specific cohorts over time. If you want to know whether customers are retaining, cohort by signup date. Don't use "the average" as a proxy for "people's experience."

## Examples

**Situation:** A founder says: "Our junior employees have been stuck at entry-level comp for three years — we need to raise the band."
**Application:** Which junior employees? Pick the specific eight people who were at entry-level three years ago. Where are they now? If six have been promoted and two left for better jobs, your "stuck junior employees" are the new ones — who, by definition, have not had time to be promoted yet. The band is not too low; you are looking at a refilling bin.
**Result:** The honest intervention is either (a) accept that this is a normal pipeline and stop treating it as a problem, or (b) if you still want to invest more in entry-level, do it as an explicit investment in new hire quality, not as a fix for "stuck employees."

**Situation:** A board member presents a chart showing "customer acquisition cost in the bottom quartile has doubled in 18 months."
**Application:** Which customers are in the bottom quartile of CAC today vs 18 months ago? Probably not the same mix. The bottom quartile of CAC is selected for being the cheapest to acquire. The composition of that quartile changes as you enter new channels, adjust targeting, and compete for different segments. Saying "CAC in the bottom quartile has doubled" may mean your worst channels have gotten worse — or it may mean the *composition* of the bottom quartile has shifted as channels evolved.
**Result:** Ask about specific channels, not about quartile statistics. "What happened to CAC in paid search specifically, in referral specifically, in outbound specifically?" The answers are usable; the quartile aggregate is not.

**Situation:** A startup's engagement metric shows "the bottom 20% of users are spending less time in-app."
**Application:** The bottom 20% of users by engagement today is a statistical bin. The users in it 18 months ago are almost entirely not in it today — they have either grown (left the bin by going up) or churned (left the company entirely). The users in the bin today are new or newly-disengaged. The comparison describes two different populations.
**Result:** Cohort users by signup date and track engagement over their lifetime. The question "are the same users engaging less over time?" is different from "is the bottom 20% of users less engaged this year than last year?" — and only the cohort analysis answers the question you care about.

**Situation:** A political or social claim: "Inequality is rising — the rich are getting richer and the middle class is stagnating."
**Application:** Category statement. U.S. Treasury data following specific individuals shows that the bottom 20% of 1996 had 91% income growth by 2005; the top 1% had their incomes decline. Both statements — the category version and the individual version — are true; they describe different things. Any moral or policy argument must start from what is true about people, not about bins.
**Result:** Use this as a template. When someone asserts a category trend, ask for the individual-level data. If they don't have it, the category claim may or may not reflect what is happening to people; you don't know from the category alone.

## Anti-Patterns (tactical)

**Don't:** Treat a percentile, quartile, or statistical bin as if it described a fixed set of humans.
**Why:** Bins are always statistical. They fill, refill, and rotate. The people inside them three years ago are mostly not the people inside them today. A statement about the bin is not a statement about the people.

**Don't:** Design performance interventions around "the bottom quartile" without identifying specific people.
**Why:** If your bottom quartile refills healthily (turnover pipeline working as intended), intervention on the bin is wasted effort. If it contains specific stuck people, intervention should target those people. The bin is never the right unit.

**Don't:** Let aggregate statistics replace cohort tracking.
**Why:** Cohort tracking is more work and less clean. But aggregate statistics are frequently misleading precisely because they average across populations that are rotating. If the question matters, do the cohort analysis.

**Don't:** Make moral or causal claims from category trends.
**Why:** "Group X is suffering, therefore society / company is failing them" requires that "Group X" is the same humans. If the humans are rotating through the bin, the moral claim may be about nobody in particular.

**Don't:** Conflate household, family, or firm statistics with individual experience.
**Why:** Household composition changes. Firms merge and split. Customer segments reshape. A "household income" number that is flat while per-capita income rose 122% is not evidence of stagnation — it is evidence that households got smaller. The statistic the news reports may not be the statistic that matches experience.

Verbal virtuosity has transformed a transient cohort in a given statistical category into an enduring class called "the poor." The same verbal move happens inside companies every day — "our junior engineers," "our bottom quartile," "our enterprise segment" — treating bins as if they were people. The discipline is to follow actual people, not categories.
