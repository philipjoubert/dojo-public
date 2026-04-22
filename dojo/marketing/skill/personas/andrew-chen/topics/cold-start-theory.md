---
triggers:
  - "user asks how networked products grow"
  - "user asks what stage their marketplace or social product is in"
  - "user asks about network effects as a strategy"
  - "user is mapping out a multi-year plan for a marketplace, social network, or collaboration tool"
  - "user describes a stalled network and is unsure why"
  - "user is trying to figure out whether to launch new markets or shore up the current one"
use_when:
  - "diagnosing where a networked product is in its lifecycle"
  - "deciding what set of tactics apply right now (seed vs. copy-paste vs. amplify vs. defend)"
  - "explaining why the strategy that worked last year stopped working"
fails_when:
  - "the product isn't actually a networked product — no multi-sidedness, no density effect, no hard side. Traditional SaaS or single-player tools don't obey these stages."
  - "the team uses the stages as flattering labels ('we're at Escape Velocity!') without the underlying diagnostics — density per atomic network, viral factor, retention curves, local market share."
related:
  - "atomic-network.md"
  - "trio-of-forces.md"
  - "meerkats-not-metcalfe.md"
---

# Cold Start Theory — The Five Stages of a Networked Product

## When to Use
- Anyone building, investing in, or operating a networked product — marketplaces, social networks, workplace collaboration tools, developer platforms, multi-sided marketplaces, bottom-up SaaS.
- A founder is trying to decide whether the current problem is a launch problem, a growth problem, a saturation problem, or a competition problem.
- A team has a playbook that stopped working and can't tell whether they've outgrown it or are misreading the market.
- An operator is trying to decide where to put the next marginal dollar — new cities, retention, virality, defense.

## Fails When
- The product isn't a network. If there's no density effect — no sense in which user #1000 makes user #1001 more valuable — these stages don't apply and the framework misleads.
- The team treats the stages as self-flattery rather than diagnosis. Labelling yourself "Escape Velocity" while your atomic networks are still ghost towns doesn't change the underlying physics.
- Early teams skip past the first stage. Every networked product has to clear the Cold Start Problem first. There are no shortcuts via Big Bang launch, press pops, or capital.

## Core Concept

"Cold Start Theory lays out a series of stages that every product team must traverse to fully harness the power of network effects. The curve represents the value of the network as it builds over time, and is shaped as an S-curve with a droop at the end. There are five primary stages: The Cold Start Problem, Tipping Point, Escape Velocity, Hitting the Ceiling, The Moat."

The industry loves to reduce network effects to a binary — a product "has them" or "doesn't." That's useless. A product in its first month and a product competing for global dominance are both "networked products with network effects," but the problems, the tactics, and the failure modes are completely different. Cold Start Theory replaces the binary with a five-stage arc. Each stage has its own goal, its own diagnostics, and its own failure mode.

**Stage 1: The Cold Start Problem.** Anti-network effects dominate. Most networks die here. A new user shows up, finds nobody there, and leaves — which makes the next user even less likely to stay. "Anti-network effects are the negative force that drives new networks to zero. While the industry tends to focus on the positive results of network effects, at their inception, network effects are a destructive force, driven by a vicious — not virtuous — cycle where new users churn because not enough other users are there yet." The goal of this stage is singular: build one **atomic network** — the smallest network that is stable on its own and grows without you holding it up.

**Stage 2: Tipping Point.** You have one atomic network. Now you need a repeatable playbook for building the next one, and the one after that. "Imagine a network launch as tipping over a row of dominos. Each launch makes the next set of adjacent networks easier, and easier, and easier, until the momentum becomes unstoppable — but it all radiates from a small win at the very start." This is the city-by-city, campus-by-campus, company-by-company phase. Tactics shift from hand-to-hand founder hustle to operational scaling: Invite-Only, Come for the Tool / Stay for the Network, Paying Up for Launch, Flintstoning, raw Always Be Hustlin'. The goal is to tip entire markets.

**Stage 3: Escape Velocity.** Thousands of employees are now pushing on the network. The question is no longer "will it live?" but "how hard can we make the network effects?" This is where the **Trio of Forces** — Acquisition, Engagement, Economic — becomes the operating frame. Each one has its own metrics, its own teams, its own roadmap. The meta-failure here is coasting. Network effects are not passive; they amplify when you amplify them and atrophy when you don't.

**Stage 4: Hitting the Ceiling.** Growth curves are "squiggles, not smooth exponentials." Market saturation, network saturation, the Law of Shitty Clickthroughs, trolls, overcrowding, context collapse, the hard side revolting. Every networked product hits this stage and every one reacts poorly the first time. The fix is layering — new formats, new geographies, new adjacent users, new revenue streams — not grinding harder on the core.

**Stage 5: The Moat.** Network-based competition, where both players have network effects. You're fighting a David (cherry-picker) or a Goliath (bundler). Your moat is defended at the atomic-network level, not the global level. A company with 75% national share can still be 50/50 in SF and LA — and if it loses those, aggregate share collapses fast because lost networks are rarely regained.

The meta-failure that kills companies across all five stages is **misreading which stage you're in**. A Big Bang Launch is a Cold Start Problem mistake — it looks like Tipping Point but the networks aren't there. Coasting is an Escape Velocity mistake. Grinding harder on the core is a Ceiling mistake. Fighting head-to-head on features is a Moat mistake. The first job of the framework is to tell you which stage you're actually in.

## How to Apply

Diagnose, don't assume. Before doing anything else, work out which stage you're in:

1. **Do you have a single, self-sustaining atomic network?** If you're not sure, the answer is no — and you're in Stage 1, Cold Start. Signs: empty-app experiences, retention cliffs, users opening the product and bouncing. Steve Huffman's test for Reddit was that he'd go camping, come back, and the front page was full of links he hadn't posted. If the founders stop Flintstoning and the network goes dark, you haven't crossed the threshold yet.

2. **Can you copy-paste atomic networks reliably?** If yes, and each new launch tips faster than the last, you're in Stage 2, Tipping Point. The signal is time-to-tip per network shrinking. The failure signal is that every new market requires the same cold-start effort — your playbook isn't repeatable yet.

3. **Are you operating the Trio of Forces as three distinct disciplines?** Acquisition, Engagement, Economic each need their own metrics, their own teams, their own roadmap. If you conflate them into one vague "growth" function, you're in Stage 2 operationally even if the numbers say Stage 3. Real Escape Velocity is visible in rising viral factor, smiling retention curves, and shrinking burn per unit of supply.

4. **Has growth bent from exponential to linear or lumpy?** That's the Ceiling. The move is to layer — new formats, adjacent users (Bangaly Kaba's theory), new verticals. Jeff Jordan's eBay fix was Buy It Now, Stores, international, PayPal integration. Not "more eBay." More cake.

5. **Are you fighting a competitor who also has network effects?** That's the Moat. The question is whether you're Goliath (defending via bundling, platform strength, hard-side lock-in) or David (cherry-picking the incumbent's weakest sub-network). Share is decided at the atomic-network level, not nationally.

When you don't know which stage you're in, the per-atomic-network diagnostics will tell you. "In the weekly dashboard, each row represented a city — yes — but more important, each city was an individual network in Uber's global network of networks that needed to be nurtured, protected, and grown." Aggregate numbers hide the stage you're actually in.

## Examples

**Situation:** A consumer app launches with a splashy tech-press article, hits 90 million signups in a few months, and celebrates internally. Retention cohorts show users spending three minutes per month in the product. Leadership points to the headline number as proof of product-market fit.
**Application:** This is Stage 1 misread as Stage 3. The company has scattered users across thousands of weak networks rather than building density inside any one. The fix is not more press — it's a retreat to atomic networks. Pick one segment, one geography, one use case; build enough density that the product actually delivers its core promise on every open; then copy-paste.
**Result:** Google+ never made this retreat. It shut down in 2019 despite peak reported numbers of 300M "active" users. Facebook at the same size had 6-7 hours of monthly session time; Google+ had three minutes. "The fate of Google+ was sealed in their go-to-market strategy."

**Situation:** A rideshare startup has tipped fifty cities. Each new launch follows a playbook: driver-side Craigslist ads, $30/hr guarantees, rider referral program, Ops GM with city-CEO autonomy. Launch cycle-time per city is dropping every quarter.
**Application:** This is textbook Stage 2 execution. The goal is to keep the dominos falling — codify the playbook, invest in Ops autonomy, arm GMs with local creativity (Uber Ice Cream, Uber Puppies, Rider Zero stunts). Do not overcentralize. At the same time, set up infrastructure for Stage 3 by building the Trio of Forces measurement: viral factor per city, retention curves per cohort, burn-per-trip per market. When launches stop requiring founder-level heroics, you've crossed into Escape Velocity.
**Result:** Uber's global Ops team hit roughly 800 city launches on this model. The framework for what came next — NACS (North American Championship Series), dual-apper analysis, efficiency-over-subsidy — was built during the Tipping Point phase so the transition to Escape Velocity and then the Moat didn't require rebuilding the company.

**Situation:** A mature marketplace is losing its core growth rate. Top-line MoM is flat for the first time. Executives propose a redesign of the core product.
**Application:** This is Ceiling, not Cold Start. Redesigning the core touches the same user base. What they need is layers — Jeff Jordan's eBay playbook. New formats (Buy It Now opened women and non-auction-lovers). New geographies. New verticals (PayPal integration). New adjacent-user segments (Bangaly Kaba walked Instagram from US women 35-45 down to women in Jakarta on low-end 3G Android phones across eight segments in three years). The worst move is to grind harder on what's already saturated.
**Result:** eBay's Buy It Now now accounts for 62% of GMV. The layer cake extended eBay's growth by a decade. The failure case is Vine, Yahoo, MySpace — trying to fix the Ceiling by shipping more of the same core product.

## Anti-Patterns (tactical)

**Don't:** Declare yourself in a later stage than you actually are because the numbers look good.
**Why:** Aggregate numbers hide which stage you're in. Total registered users, cumulative downloads, MAU — all can rise while no individual atomic network is actually working. Every network-product autopsy starts with "the top-line was climbing the whole time." The discipline is per-atomic-network diagnostics: density, retention, time-to-tip, market share inside each network. If those aren't healthy, you're still in Cold Start or Tipping Point regardless of what the headline number says.

**Don't:** Use a Big Bang Launch to skip the Cold Start Problem.
**Why:** "The Big Bang Launch is convenient for larger, more established companies as a method to launch new products because they often have distribution channels, huge engineering teams, and sales and marketing support. But counterintuitively, for networked products, this is often a trap. It's exactly the wrong way to build a network, because a wide launch creates many, many weak networks that aren't stable on their own." Broadcast channels are untargeted by nature. You end up with a smattering of users across thousands of networks, none of which has density. The correct move is bottom-up, atomic-network-first — even if it looks small.

**Don't:** Coast once you've hit Escape Velocity.
**Why:** Network effects are not a passive feature of the product. They're the output of constant work on the Trio of Forces. Acquisition decays (Law of Shitty Clickthroughs), engagement saturates, economics tighten. A product that stops amplifying its network effects starts losing them to whoever doesn't. Every dominant network has a cherry-picker waiting for the first sign of neglect — Airbnb picking off Craigslist's rooms-for-rent vertical is the canonical case.
