---
triggers:
  - "user asks about building a marketplace"
  - "user asks which side of a two-sided network to focus on first"
  - "user describes creator/driver/seller recruiting"
  - "user is frustrated that supply is more expensive than demand"
  - "user asks why their marketplace isn't liquid"
  - "user asks about creator economy / developer platform strategy"
  - "user asks why Vine died or why Uber pays so much in driver incentives"
use_when:
  - "diagnosing a marketplace, social platform, dev ecosystem, or creator tool"
  - "deciding where to put the first dollar of subsidy, effort, or engineering"
  - "evaluating whether a platform is mismanaging the 1% who produce most of the value"
fails_when:
  - "the network has no hard side — genuinely symmetric like pairwise messaging at small scale"
  - "the user is pre-product and has no idea which side is actually hard yet (sometimes the intuitive 'scarce' side isn't the actual bottleneck)"
related:
  - "atomic-network.md"
  - "marketplace-playbook.md"
  - "cold-start-theory.md"
---

# The Hard Side — The 1% Who Do the Work

## When to Use
- Any marketplace, social platform, creator economy product, developer ecosystem, or multi-sided SaaS.
- A team is debating whether to spend on demand or supply, users or creators, buyers or sellers.
- A team has built the easy side beautifully and can't figure out why the network isn't liquid.
- A platform is at scale and its hard side is starting to organize, complain, or threaten to leave.

## Fails When
- The network is genuinely symmetric — 1:1 messaging tools, small-team workflow products — where there isn't really a "hard side." Slack at 3 people, Zoom at 2.
- The team assumes the intuitive scarce side is the real hard side without checking. For large-scale job listings, for example, employers are the hard side, not job seekers — the inversion isn't obvious until you model the economics.
- The user is too early to have data on hard-side economics. In that case, pick the side with the harder value prop and the larger per-user investment — that's almost always the right first guess.

## Core Concept

"This is the 'hard side' of your network. They do more work and contribute more to your network, but are that much harder to acquire and retain. For social networks, these are often the content creators that generate the media everyone consumes. For app stores, these are the developers that actually create the products. For marketplaces, these are usually the sellers and providers who spend their entire day attracting users with their products and services."

Every networked product has a hard side and an easy side, and they are wildly asymmetric. The 1/10/100 rule (Bradley Horowitz): 1% of users start threads, 10% participate actively, 100% lurk. Wikipedia is even more extreme — roughly **0.02%** of users, around 4,000 people making 100+ edits a month, produce the content that hundreds of millions read. Uber's hard side is drivers, and they are ~5% of users. Slack's S-1 showed that less than 1% of customers generate 40% of revenue. Zoom's showed 344 accounts (under 1% of customers) generated 30% of revenue. You don't build a network; you build a hard side that drags the network along.

The hard side is also the expensive side. Driver acquisition cost at Uber was $300+ per driver. Creator payments at YouTube, TikTok, Substack, and the Apple App Store run into the billions. The hard side is the side where you spend serious money, serious engineering, and serious product attention. And they're the side with defensibility — competitors can buy demand cheaply with Facebook ads, but getting a power driver to leave Uber for Lyft takes a bespoke incentive structure aimed at that specific driver.

There's one rule of thumb that comes up in almost every marketplace conversation: **supply side is king.** "Because all these marketplaces tend towards supply constrained, you should evaluate each opportunity/company from the POV of the supply side. Does it work for them? Can they do it 40 hours/week and stay sticky? When can you pull away subsidies? These are the key questions." The order of operations for a marketplace is "supply, demand, supply, supply, supply." You fight for the hard side; demand follows.

Beware the inversion, though. For enterprise or job-listing businesses, the "buyers" can be the hard side — employers, recruiters, procurement. The test isn't which side has more users; it's which side has **higher per-user investment, longer decision cycles, and greater economic leverage** over the network. Whichever side that is, that's the hard side, and that's where the work goes.

The hard side's motivations aren't uniform. For content creators, it's status, reach, and feedback — Vine's creators asked for $1.2M each because they were producing billions of views and couldn't monetize. For drivers, sellers, and hosts, it's money — driver-earnings-per-hour is the North Star. For enterprise managers, it's organizational leverage — "I can scale my team's output through this tool." You have to design the hard-side experience around the actual motivation, not the one you wish they had.

At scale, the hard side professionalizes. Hobbyist hosts become power hosts with 50+ listings. Solo app developers become VC-funded companies. Occasional sellers become full-time Amazon businesses. Top creators build production studios. This is healthy in the abstract — the algorithms and incentives are doing their job — but it creates misalignment. Professionals have their own economic incentives and can organize. Vine didn't pay creators; 18 of them walked; Vine died. eBay's seller revolts, Reddit's moderator blackouts, Uber's driver strikes — these are the same pattern. If you mistreat the hard side at scale, you collapse.

## How to Apply

1. **Identify the hard side explicitly.** Not "users and creators." Name it. "Our hard side is the top 5% of drivers who do 40% of trips." "Our hard side is the engineering managers who onboard teams." Write it down. Build a dashboard that measures concentration — what % of activity comes from the top 1%, 5%, 10% — and watch that ratio over time.

2. **Understand their actual motivation.** Interview them. Not in focus groups — in-depth, at their kitchen tables, in their shops, in their Slack threads. What do they want that you're not giving them? What makes them switch to competitors? What would they pay for? Uber spent heavily on in-person driver interviews and embedded driver-ops teams in every city.

3. **Design the product around the hard side first.** If you build for demand and bolt supply features on at the end, the hard side feels like an afterthought — which it is. Airbnb's host tools (pricing suggestions, calendars, reviews, photo help) are the core of the product; the guest experience is built on top. Uber's driver app shipped before the rider app, and still gets more engineering attention per user.

4. **Pay them like they're partners.** Subsidies, economic guarantees, referral bonuses, professional tooling, enterprise tiers, customer success, training, monetization support. The hard side is the cost of goods sold in a networked business. Scrimping here is the false economy that kills the network at scale.

5. **Watch for revolt signals early.** Organized complaints, public threads about switching, concentration of activity in one geography, top creators signing contracts with competitors. By the time the hard side has organized, you've already lost leverage. The time to professionalize your relationship with them is before they ask for it.

## Examples

**Situation:** Wikipedia. ~100,000 active monthly contributors out of hundreds of millions of monthly viewers. One specific contributor — Steven Pruitt, a US Customs officer — has edited approximately one-third of all English-language Wikipedia articles in his spare time.
**Application:** Wikipedia doesn't pay editors, but it treats its hard side as partners. Recognition through contributor badges, governance participation, dispute-resolution processes, and very careful product protection against spam, vandalism, and abuse. Editing tools get more engineering love than reading tools.
**Result:** The 0.02% keeps editing. The encyclopedia keeps expanding. Competitors who assumed "anyone can write Wikipedia" and tried to launch by onboarding lots of casual editors discovered that quality editors are rare and rare editors are load-bearing.

**Situation:** Vine, 2015. Twitter bought Vine for $30M. The platform was driven by a tiny set of top creators — 18 of them produced billions of monthly views.
**Application:** Vine refused. Top creators left en masse for YouTube and Instagram. Vine shut down a few years later.
**Result:** A well-organized hard-side revolt can kill a product in months. The $1.2M ask was cheap compared to the cost of shutdown. Twitter's mistake was treating creators as an externality rather than as partners.

**Situation:** Uber circa 2015-2018. Driver power-users — the top ~15% of drivers doing 40% of trips — were simultaneously the most valuable, most expensive, and most likely to dual-app with Lyft.
**Application:** Uber built DxGy incentive structures ("Do X trips, Get $Y"), tiered bonuses at 10/25/50/100 trips, guaranteed surge pricing, and driver referrals of "$200 give / $200 get." At peak, Uber was spending $50M+ per week on driver incentives in a single region.
**Result:** The hard side stayed concentrated on Uber. But this dynamic also created the driver protests, the $525M XChange Leasing failure, and the long series of labor disputes — because professionalizing the hard side creates power, and power gets exercised.

## Anti-Patterns (tactical)

**Don't:** Spend equally on the easy side and the hard side at launch.
**Why:** The easy side is easy — you can buy it cheaply from Facebook if you have product-market fit on the hard side. The hard side is where the defensibility lives and where the money should go. Balanced spend wastes budget on the easy side before the hard side is load-bearing.

**Don't:** Assume the intuitive "scarce" side is the real hard side.
**Why:** For job listings the hard side is employers, not job seekers. For B2B marketplaces it's often buyers (procurement), not sellers. The correct diagnostic is per-user investment, decision cycle length, and concentration of value — not raw count. Model the economics before you pick.

**Don't:** Treat the hard side as an externality at scale.
**Why:** As the network matures, the hard side concentrates, professionalizes, and becomes powerful enough to organize against you. Vine, Reddit's mod blackouts, eBay's seller fee protests, Uber's driver strikes — same pattern. The antidote is to build the professionalization tier (Pro accounts, enterprise tools, customer success, training, revenue sharing) before they demand it, not after.

**Don't:** Optimize for median or average user behavior.
**Why:** Medians hide the power law. Designing for the average user means designing for the lurker — and the lurker doesn't drive the network. Design for the top 1%, then make the product usable enough that the other 99% can participate passively. The Power User Curve is the shape of every real network.
