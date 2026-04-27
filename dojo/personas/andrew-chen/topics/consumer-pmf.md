---
triggers:
  - "user asks how to know if they have consumer product/market fit"
  - "founder is debating MVP vs shipping the real product"
  - "user asks how long it should take to reach PMF"
  - "team is celebrating MAU growth as evidence the product is working"
  - "user asks whether to hire a growth hacker"
  - "founder is trying to define their market for a consumer product"
use_when:
  - "consumer-internet team trying to determine if they've hit PMF"
  - "team is confusing growth metrics with product-market fit"
  - "founder is choosing between cloning a working category vs inventing a new one"
  - "team is about to launch an MVP but hasn't tested desirability"
fails_when:
  - "the company is B2B enterprise — Chen's retention-heavy consumer PMF tests don't map cleanly onto 6-month sales cycles"
  - "'retention is the only metric' becomes an excuse to ignore monetization in a category where revenue matters from day one"
  - "the market is genuinely new with no incumbents to benchmark against — the PMF comparison tests break down"
related:
  - "trough-of-sorrow.md"
  - "power-user-curve.md"
  - "next-feature-fallacy.md"
---

# Consumer PMF — Retention, Not Growth

## When to Use
- A consumer-internet team is asking "are we there yet?" and wants an operational definition of PMF, not a vibe.
- A founder is choosing between cloning a working category (fast TTPMF, lower strategic value) and inventing a new one (high strategic value, often fatally slow).
- A team is celebrating MAU growth, signup totals, or download counts as evidence that the product is working.
- Someone is about to hire a growth hacker for a pre-PMF product with a few hundred users.
- A founder is pushing an MVP that "validates demand" via a landing page with a price tag, and not actually shipping the product.

## Fails When
- The category is B2B enterprise with 6-month sales cycles. Retention-curve-flattening is a consumer heuristic; for enterprise, deal velocity, ACV growth, and logo retention matter more.
- "Retention is the only metric" is used as an excuse to ignore monetization in a category where revenue matters immediately — some consumer products (transactional commerce, fintech) require monetization tests in parallel.
- The market is genuinely new with no comparable incumbents. Without a reference class, the "compare favorably to competitors" PMF test has nothing to compare to, and you're back to feel.

## Core Concept

**Startups need product/market fit, not growth. Growth comes as a result of having achieved fit, and a growth team is built to optimize the curve.** The real question is: how do you know you've hit it, given that most startups fail to get there? The answer, for consumer internet, has nothing to do with the top-line number. It has to do with **retention**.

Growth without retention is just churn with a larger top-of-funnel. You're pouring water into a leaky bucket. A product that adds 10M users a month and loses 9M the next has a great top-line and a broken retention curve. The aggregate looks like growth; the reality is replacement. Google+ hit 300M claimed active users; users spent **3 minutes per month** there, versus **6–7 hours per month** on Facebook. The top-line was a vanity metric papering over a collapsed engagement story. PMF is not "the curve goes up" — it's **the retention curve flattens at a level that's commercially meaningful.** Everything downstream (acquisition, monetization, virality) compounds on top of retention, so if retention is broken, more growth just accelerates the losses.

Here's the operational test. **A market consists of all the consumers who can search for and compare products for a use case they already have in mind.** Open Google's Keyword Tool. If millions of people are searching for the use case each month, you have a market. "Vacation package" passes; "travel experiences" doesn't. "Social network for musicians" fails (nobody searches for it) even if you can cite the number of musicians in the US. Great markets are defined by a **large number of potential users, high growth in that number, and ease of acquisition.** Not competition (there are billions of users online; you're mostly competing against obscurity). Not monetization (making money is pretty straightforward once you have users). Leading with a great market helps you execute your product design in a simpler and cleaner way. In a market of all black Model Ts, you can sell otherwise identical cars of different color and that'll work.

Then the PMF tests, all anchored on incumbents: do user-test subjects group your product with the right competitors? Do they understand your differentiation? Will a segment switch to you? Will users who *rejected* the incumbents try yours? **Do your DAU/MAU, D7 retention, and cohort curves compare favorably to competitors?** Rough numbers for consumer: DAU/MAU above 10–20%, D1 retention above 20–30%, and a retention curve that actually flattens rather than decays to zero. New markets are a trap for PMF testing because there's no reference class: "doing great product design for them is extremely hard. It's so unconstrained that it's hard to do anything other than add features, see what sticks, and iterate." That path incurs product-design debt.

The framing of **Time to Product/Market Fit (TTPMF)** makes this concrete. If your plan for TTPMF exceeds your funding runway, you're already dead. A 2013-vintage consumer startup: $40K/month burn, 4 full-time engineers, $1M raise, 24 months of runway, 6 months needed to raise a Series A. That leaves 18 months of operating time. If it takes you 3 months to ship v1 and you need 1M installs pre-A, then the instant-clone version has 15 months to get there — roughly 2,000 signups per day. Doable. If your TTPMF is 12 months (because you're inventing a new category), you have 9 months to get to 1M installs — 11,000 signups per day. "Scary stuff." **TTPMF has to be less than 1–2 years or else your startup will implode. Ask anyone who's been working on a product for more than 2 years and doesn't have traction to show: it really, really sucks.**

Which leads to the **80/20 cloning rule**: keep 80% of a working category the same; reinvent 20% deeply. *"I don't think you ever want to do a full clone. Instead, you want to keep the fundamentals the same (80%) while substantially reinventing 20% of the product."* The 20% must be at the **core** of the product, not on the edges — something a user feels in the first 30 seconds. **Twitter's 140-character limit was a core 20%**; all the rest (profiles, following, streams) was blogging. Path's "private social network with real names" was a core 20% vs. public-anonymous Facebook. The 20% is what makes you not-a-clone. The 80% is what makes you actually ship in 18 months instead of 36.

There's also a vocabulary problem with "MVP" that Chen explicitly fixes with **Minimum Desirable Product (MDP)**. MVP is a *business-lens* concept — what's the minimum I need to prove viability? — often satisfied by a landing page with a price tag. MDP is a *user-lens* concept — what's the minimum I need to prove I'm delivering a high-value product experience? MDP requires shipping the real core, not a mock. Grounded in IDEO's desirability / viability / feasibility triangle: MVP asks "is there a business?" MDP asks "am I providing an insanely great product experience?" Measured by benefit-driven metrics — the lives you save, not the life preservers you sell. Early Twitter ("20M+ uniques/month, people telling each other what kind of sandwich they are eating") was the archetypal MDP — desirable, unmonetized. A landing-page MVP "validated demand" for a product that nobody came back to use once built is a classic category error: you tested viability without testing desirability.

## How to Apply

### Define the market first (consumer-lens)
1. **Run the Google Keyword Tool test.** Are millions of people searching for this use case every month? If yes, you have a market. If no, you're inventing one, and TTPMF blows up.
2. **Evaluate the market on: size, growth of size, ease of acquisition.** Not monetization. Not competition. You're mostly competing against obscurity.
3. **Name the incumbents.** If there's an incumbent, you can run comparison tests. If there isn't, treat yourself as an outlier and price in the category risk.

### Decide the product-risk level (the 80/20 rule)
1. **Target 80% same / 20% reinvention.** Keep the category fundamentals; reinvent one thing at the core.
2. **Put the 20% in the first 30 seconds.** It should be felt immediately, not discovered on day 7.
3. **If the TTPMF implied by the 20% is over 18 months, cut more.** Time-to-PMF must fit inside your runway with insurance on top.

### Test PMF against incumbents
1. **Does the retention curve flatten?** That's the single most important number. Pull cohorts from week 1, 2, 4, 8, 12 and look at whether the curve bends horizontal or keeps decaying.
2. **Does DAU/MAU hit 10–20%+?** For high-frequency consumer products. Lower is fine for episodic products, but for social/content/messaging this is the bar.
3. **Does D1 retention hit 20–30%+?** First-visit return is the cleanest single number. Everything downstream depends on it.
4. **Do user-test subjects group you with the right competitors?** If they don't, your positioning is broken, not your product.
5. **Will rejected-incumbent users try yours?** A really strong PMF signal — people who tried the leading product, didn't stick, and will give yours a shot. If they retain, you've found a segment the incumbent can't serve.

### Build for desirability before viability (MDP, not MVP)
1. **Ship the real product core.** Not a landing page with a price tag. Not a mock. The actual core experience, stripped down.
2. **Measure benefit-driven metrics.** Successful matches (dating), messages sent (social), time-to-first-value (SaaS). Not signups, not conversions.
3. **Add monetization later.** If desirability isn't there, viability doesn't matter. Early Twitter had no business model and it was fine; it was the MDP for a market that was clearly there.

### On the growth-hacker question
**Pre-PMF: don't.** Growth is a quantitative optimization discipline that requires data. Pre-PMF you have dozens of friends-and-family users, which isn't enough signal. What you need is lead bullets, not one silver bullet — PR, community management, partnerships, hard-to-scale founder-driven hustle. Twitter, Facebook, and LinkedIn all built their growth teams *after* signing up millions of organic users.

## Examples

**Situation:** A consumer social app has 180K MAU, 14% month-over-month growth, and the founder is ready to raise a Series A on the "network effects" pitch. A closer look at the retention cohorts shows that the retention curve hasn't flattened — each cohort's D30 is around 6%, decaying to 2% by D60, and 0.5% by D90.
**Application:** This is not PMF. The MAU growth is real, but it's a replacement engine — new users arriving faster than old users churning. The comparable benchmark for a healthy consumer social product is D30 of 20%+ and a curve that flattens, not one that keeps decaying. The honest diagnosis: you're still pre-PMF. Stop raising an A on the MAU story. The A-round pitch based on the current cohort math is a loaded gun pointed at the next 18 months — because the unit economics the investors will expect require retention the product can't produce. Either fix the retention curve first (rework activation, rework first-session experience, find the segment that does retain and double down on it), or raise a smaller bridge and extend TTPMF.
**Result:** The team either finds the cohort inside the 180K that actually retains — maybe a specific geography, a specific age range, a specific use case — and rebuilds the product around that atomic network, or they burn the A round over 18 months optimizing growth for a leaky bucket and run out of money in a worse position than they started.

**Situation:** A two-founder team wants to build a "reinvented" dating product. Their plan has 90% new category design — the underlying mental model of dating is being thrown out. They're planning 12 months to ship v1, with a $1.2M raise and 24 months of runway.
**Application:** TTPMF math says this doesn't work. 12 months to ship + 6 months to raise Series A = 6 months of operating time to hit PMF after shipping. At the scaling rates required for a consumer dating app to show PMF to a Series A investor, they'd need signups per day that most post-launch apps don't achieve. Pull the product risk *down*. What is the 80% of dating that they'll keep the same? Profiles, matching, messaging, photos, filters. What is the 20% they'll reinvent at the core? Find one thing — real names, event-based matching, intent signaling, something the user feels in the first 30 seconds. Ship that 20%-reinvention version in 4 months, not 12. Now TTPMF fits inside the runway.
**Result:** The team ships in 5 months (things always slip). They have 13 months of operating time. The 20% reinvention either resonates (PMF signal, retention curves compare to incumbents) or it doesn't (honest TTPMF failure, pivot or wind down). Either way, they tested the thesis cleanly inside their runway instead of running out of money with a half-built category-invention that never got to the retention test.

**Situation:** A founder is pitching a "validated" MVP — a landing page with a waitlist that's collected 30K email addresses. They're about to spend 6 months building the real product based on this validation.
**Application:** The landing page validated viability, not desirability. MVP, not MDP. The 30K people who signed up expressed intent, not retention. The right next step is not "build the full product over 6 months"; it's "ship the minimum real product experience — the actual core, stripped down — as soon as possible and measure whether those 30K people come back to use it." If the real core doesn't produce repeat usage, the 6-month build-out is a doomed investment. If the minimum real core does produce repeat usage, you have signal worth investing in. Measure the lives you save, not the life preservers you sell.
**Result:** The team ships a minimum-desirable version in 8 weeks, exposes it to 3K of the 30K, and learns what retention looks like on the real product, not the waitlist. If retention is strong, the rest of the roadmap is informed by real usage data. If retention is weak, they've saved 4 months of build-out on a product the waitlist wasn't actually going to retain on.

## Anti-Patterns (tactical)

**Don't:** Confuse MAU growth with product-market fit.
**Why:** A product that adds 10M users a month and loses 9M the next has a great top-line and a broken retention curve. The aggregate looks like growth; the reality is replacement. PMF is not "the curve goes up" — it's "the retention curve flattens at a level that's commercially meaningful." Google+ hit 300M claimed active users; users spent 3 minutes per month there, versus 6-7 hours on Facebook. The top-line was a vanity metric papering over a collapsed engagement story. If you don't look at cohort retention, you will raise the next round on a story that's mathematically doomed.

**Don't:** Hire a growth hacker before product-market fit.
**Why:** Growth work is quantitative optimization — it requires baseline usage to generate data, cohort sizes to A/B test against, retention behavior to amplify. Pre-PMF, you have dozens of friends-and-family users, which is simply not enough signal. Worse, building out an analytics-and-optimization culture before PMF trains the team to tweak instead of iterate on the core product. The way to find PMF is lead bullets, not silver bullets — PR, partnerships, community building, personal outreach, hard-to-scale founder-driven hustle. Add a growth team *after* the product is working, and it compounds the curve. Add it before, and it masks the fact that there's no curve to compound. Twitter, Facebook, and LinkedIn all built their growth teams *after* signing up millions of organic users.

**Don't:** Try to clone a working category without reinventing 20% of the core.
**Why:** Full clones have no defensible angle — the incumbent's network effects will crush them. The 80/20 rule gives you both speed (80% of the category is already validated, so TTPMF is fast) and differentiation (the 20% reinvention, if it's at the core of the experience, is what the user notices and remembers). A clone with zero reinvention is a slower version of the incumbent; a 90% reinvention is a new-category bet that usually busts the TTPMF budget.

**Don't:** Measure PMF by signups or download counts.
**Why:** Signups don't capture churn. Downloads don't capture retention. MAU doesn't capture frequency. Teams optimize for the metrics they track, so tracking vanity metrics produces vanity outcomes. The only metrics you can't game are cohort retention curves — because they always reflect the real behavior of real users over real time. If your cohort curve flattens at a commercially meaningful level, you have PMF. If it doesn't, you don't — regardless of what the top-line says.

**Don't:** Ship an MVP that tests viability without testing desirability.
**Why:** A landing page with a price tag validates that some number of people will click a button. It doesn't validate that they'll retain on the product once it exists. MDP — Minimum Desirable Product — is what you actually want: the simplest experience that proves the core product delivers insanely great user value. Ship the real core, stripped down. Measure repeat usage. Add monetization later. A waitlist of 30K emails is not PMF; retention on the shipped product among those 30K is the only real signal.

**Don't:** Plan a TTPMF that exceeds your runway.
**Why:** The math is brutal and most founders don't do it. $1M raise ÷ $40K burn = 24 months. Minus 6 months to raise the next round = 18 months operating time. Minus 3 months to ship v1 = 15 months to hit PMF. If your product-risk level implies 24+ months to the first retention signal, you are planning to run out of money before you know whether the product works. Cut product risk, raise more, or shelve the plan — but don't start the clock without doing the arithmetic.
