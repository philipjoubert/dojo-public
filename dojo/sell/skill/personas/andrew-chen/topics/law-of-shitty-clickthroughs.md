---
triggers:
  - "user asks whether a marketing channel will scale"
  - "user is excited about a new channel with great early numbers"
  - "user asks why CAC keeps rising"
  - "user asks if they should copy a famous growth hack"
  - "user's email/push/ad performance is decaying"
  - "user asks how to pick which channel to bet on next"
use_when:
  - "evaluating whether a growth channel will continue to work at scale"
  - "explaining why a competitor's famous hack won't work for them now"
  - "diagnosing why marketing economics are deteriorating over quarters"
  - "deciding whether to invest in a new, untested channel before competitors"
fails_when:
  - "the channel in question is an organic / product-driven loop — those decay much more slowly and to a floor, not to zero"
  - "the user actually has a channel-specific product defect, not channel decay"
related:
  - "paid-marketing-addiction.md"
  - "viral-loops.md"
  - "trio-of-forces.md"
---

# The Law of Shitty Clickthroughs — Channel Decay Is a Law

## When to Use
- A team has a channel that's working great and wants to 10x the spend.
- A founder is citing another company's growth hack as a template.
- Payback periods are extending month over month and the team wants to know why.
- You're trying to decide whether to enter a crowded channel (Facebook ads, SEO for a competitive keyword, influencer marketing in a saturated category).

## Fails When
- The "channel" is actually a product-driven loop (Dropbox shared folders, Zoom meeting links, PayPal badges). Those decay to a floor, not to zero, because they're tied to the product's core use case, not to a passing consumer behavior.
- The team has a channel-specific product or targeting problem, not channel decay. Rising CAC in a mature channel is expected; rising CAC after six weeks of spend is often a product fit problem in a niche targeting setup.

## Core Concept

"Over time, all marketing strategies result in shitty clickthrough rates."

Chen calls it a Law because it's a gravitational pull, not a phenomenon. Every channel that has ever worked has followed the same shape: it works because it's novel; competitors copy; customers acclimate; novelty fades; scale moves you past the early adopters into the mainstream, who convert worse. The channel's CTR and conversion rate decay monotonically. You can slow the decay with creative rotation and audience discipline, but you can't reverse it.

The headline number is banner ads. HotWired's first banner, October 1994: "Have you ever clicked your mouse right HERE? You will." 78% CTR. Facebook banner CTR in 2011: 0.05%. That's a 1,500x decay in 17 years. Email marketing CTRs dropped from roughly 30% to 13% over a decade. Push notifications are following the same curve — the first push you get from an app has reasonable CTR; by push ten, you're spam and the user either mutes or uninstalls.

Three drivers compound:

**First, novelty fades.** Customers respond to what's new; they are "pattern-recognition machines." They learn to filter whatever messaging works today. Banner blindness is so complete — per Jakob Nielsen's eye-tracking studies dating to 1998 — that "users, almost comically, avoid looking at any banners." Rotating creative delays the decay but doesn't reverse it.

**Second, first-to-market never lasts.** Competitors reverse-engineer your spend in minutes. Chen's own illustration: "With a quick query, I know how much Airbnb is spending on search marketing (turns out, millions per year), what keywords they are buying ads on, and who their competitors are. Daily ad budget: $10,638. Keywords: 62,729." There is a whole cottage industry of companies that scrape competitor ad creative. By the time something's working for you, the copycat is probably already spinning up.

**Third, more scale means less qualified customers.** The Technology Adoption Lifecycle: early adopters convert dramatically better than the mainstream on every metric (signup rate, CTR, CPA, LTV). If your pilot model says "acquire customers at $10 and break even within 6 months" based on early-adopter cohorts, you should expect "a 30% increase in CAC and 30% decrease in LTV" when you scale — which doubles payback. "This could be the difference between life and death for a company."

The viral-loop corollary is worse, not better. "Viral growth rate is a compounding process, so the difference between a 80% dropoff and a 50% dropoff is huge spread over 1000s of viral loops." If your invite email's open rate drops 50%, the viral factor drops proportionally, which drops total new users through multiple generations of the loop by 80% or more. Channel decay compounds through your viral loops, not just through your ad spend.

There are two defenses against the Law, neither of which reverses it.

**The Nomad Strategy** is constant rotation — new creative, new publishers, new formats, new audiences. Pushes the effective decay from months out to years, but the underlying direction is the same. It's maintenance, not victory.

**The 10x move is discovering the next untapped channel before competitors.** Chen's tell: "Sometimes I get asked 'have you ever seen someone do XYZ to acquire customers?' Turns out, the highest vote of confidence I can give is, 'No I haven't, and that's good — that means there's a higher chance of it working. You should try it.'" The channels that matter are the ones no one else has figured out yet — TikTok influencers in 2019 before the agencies arrived, Reddit community sponsorships before the brands got there, newsletter partnerships before Substack had pricing data. By the time there's a Stratechery article about a channel, the edge is mostly gone.

The broader prescription is the same as the Acquisition Effect conclusion: **you can't buy a billion users at $10 CPI.** Paid channels hit ceilings; product-driven viral loops don't, or decay much more slowly, because they're tied to the product's native use case rather than to a fickle consumer attention surface. Dropbox's folder sharing, Slack's team invites, Zoom's meeting links — these are harder for competitors to copy because the *integration* is the moat, not the creative.

## How to Apply

1. **Measure channel-by-channel, not blended.** Blended CAC is a lie. "Your Blended CAC and per-channel CAC can often be off by 2-5X. As you scale your paid, your organic won't follow 1:1. So as you grow, your Blended will approach your dominant channel's CAC." Decompose.

2. **Treat any channel CAC growth as expected.** Mature Facebook ads? CAC is going up. Mature Google Search? CAC is going up. This is not a crisis; it's physics. The crisis is when you assumed it wouldn't.

3. **Run three channels in parallel before the first one saturates.** The discipline is channel diversity in advance of need. Building the second and third channel takes 12–18 months, so you have to start when the first one still looks great.

4. **Reserve a line of the budget for untested channels.** "Have I seen anyone try this yet?" — if the answer is no, that's a signal to test it. Untested channels are where the 10x returns live, and they're only available for a window. Spend a meaningful, time-boxed amount to discover them before competitors do.

5. **Tie growth to product, not ads.** Folder shares, team invites, meeting links, referral codes tied to product value. The Acquisition Effect is the only force that meaningfully resists Shitty Clickthroughs, because it's baked into the product's native use case and doesn't decay as consumer attention shifts.

## Examples

**Situation:** Dropbox, early 2010s. The team executed every paid-search best practice: trial-based pricing, hide the free option, landing-page optimization.
**Application:** They discovered that in the cloud-storage category, paid was structurally unprofitable — competition had bid up CPA, novelty was gone, and targeting couldn't overcome the saturation.
**Result:** They pivoted to viral folder-sharing + the give/get disk-space referral program — a product-driven Acquisition loop rather than a paid channel. That loop became Dropbox's primary growth engine for years.

**Situation:** The first Hotwired banner ad, October 1994. "Have you ever clicked your mouse right HERE? You will." CTR: 78%.
**Application:** Hotwired was the first; the medium was brand new; every user clicked out of curiosity.
**Result:** By 2011, the average Facebook banner CTR was 0.05%. A 1,500x decay. "Banner blindness" is now so complete that the medium is essentially an awareness play, not a performance play. The specific creative didn't cause the decay; the category did.

**Situation:** Airbnb's early Craigslist integration (2011). Airbnb wrote a scraper that auto-posted its listings to Craigslist's "rooms for rent" category, producing massive traffic for effectively zero CAC.
**Application:** This was a first-to-channel move — no one else was doing it. Airbnb had a window of years before anyone else figured out the integration.
**Result:** Airbnb rode the hack until Craigslist eventually tightened. By then, Airbnb had an atomic network and didn't need the channel anymore. The lesson: the Law applies even to clever hacks; win during the window, then diversify.

## Anti-Patterns (tactical)

**Don't:** Copy another product's famous growth hack and expect similar results.
**Why:** Dropbox's give/get referral worked because cloud storage was uncharted territory for virality. Airbnb's Craigslist scraper worked because nobody else was doing it. PayPal's $5 bonus worked in a world where incentive spam hadn't normalized yet. Copying a historical hack copies the tactic without the novelty — which is the *only* thing that made it work.

**Don't:** Scale a channel 10x because it's performing well.
**Why:** Scaling past your core demographic is exactly when CAC blows up. The first US ad impression on a property is the most responsive; as you buy up your core demographic, incremental impressions come from non-core users who convert worse. The 10x spend usually produces 4-6x users at double the CAC.

**Don't:** Build your unit-economics model off early-adopter cohort data.
**Why:** Early adopters over-convert by 30-50% on every metric. If your model says you're profitable at $10 CAC and 6-month payback, expect to be barely profitable or underwater when you move past the early-adopter cohort. Chen: "This could be the difference between life and death for a company."

**Don't:** Treat the Law as fatalism.
**Why:** It's not an argument for giving up on marketing; it's an argument for product-driven loops, channel diversity, and early discovery of untapped channels. Paid marketing is a supplement to a real growth engine, not the engine itself.
