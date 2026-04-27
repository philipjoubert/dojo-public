---
triggers:
  - "user asks what network effects actually do for a business"
  - "user asks how to measure network effects"
  - "user is trying to prioritize growth team work"
  - "user asks about the Escape Velocity phase"
  - "user asks what the rocketship growth rate is or T2D3"
  - "user asks about viral factor, engagement, or unit economics in a networked product"
use_when:
  - "decomposing 'improve network effects' into concrete, prioritizable projects"
  - "diagnosing which of the three forces is strong or weak in a product"
  - "setting growth targets for a networked company (T2D3 / rocketship rate)"
  - "evaluating startup pitches that claim network effects — to see if all three forces are present"
fails_when:
  - "the product doesn't have a real network (single-player SaaS, standalone consumer tool)"
  - "team is pre-PMF — the Trio applies during Escape Velocity, not before you've built an atomic network"
related:
  - "atomic-network.md"
  - "hard-side.md"
  - "law-of-shitty-clickthroughs.md"
---

# The Trio of Forces — Network Effects, Decomposed

## When to Use
- You're running a networked product in the Escape Velocity stage and trying to turn "improve network effects" from a slogan into a prioritized roadmap.
- You're evaluating a startup that claims network effects and want to stress-test the claim — by checking whether all three forces are actually present.
- You're trying to set a target growth rate for a $1B-in-10-years outcome (T2D3).
- You're explaining why a product with huge Acquisition (viral signups) is still going to collapse — because Engagement and Economic aren't there.

## Fails When
- The product isn't a real network. No multi-sidedness, no density effect, no hard side. Traditional SaaS and standalone tools don't decompose this way.
- The team is pre-PMF. Before you have a single stable atomic network, there's nothing yet to amplify — you're still in the Cold Start Problem, not Escape Velocity.

## Core Concept

"Let's start with a surprising idea that goes against the grain of industry jargon: the network effect is not one effect. Instead, the network effect is a broader umbrella term that can be broken down into a trio of underlying forces: the Acquisition network effect, the Engagement network effect, and the Economic network effect. Each one of these can contribute to a business in a different way, and is stronger the more dense a network is."

The tech industry uses "network effects" as a blanket term, which makes it unactionable. You can't put "improve network effects" on a roadmap. You *can* put "raise viral factor from 0.4 to 0.6 by A/B testing the invite flow" on a roadmap. You *can* put "increase day-30 retention in the HVA cohort by nudging tool users into shared folders" on a roadmap. The Trio forces the decomposition.

**Acquisition Effect.** The ability of a networked product to acquire new users through its existing users — viral growth built into the product, not bolted onto marketing. Measured with the **viral factor** (K): the ratio of new users a cohort brings in per user. K = 0.5 means every 1,000 users bring 500 more, who bring 250, totaling 2,000 (a 2x amplification). K = 0.75 → 4x. K = 0.95 → 20x. K > 1 is rare and rarely sustainable. Retention is the strongest lever on viral factor because retained users keep sending invites over time — a one-time blast at K = 3 produces less total growth than a sustained K = 0.6 with a tight cycle time. Viral loops built into the product (Dropbox's shared folders, Zoom's meeting links, PayPal's eBay badges) are hard for competitors to copy because they're specific to the product's core use case, unlike ad creative that can be cloned in a week.

**Engagement Effect.** The force that makes a networked product stickier as the network grows — and the one closest to the classic Vail/AT&T definition of network effects. Three concrete levers. *First*, new use cases. As more people join, more ways to use the product emerge — more Slack channels, more LinkedIn connections, more Dropbox folders. *Second*, engagement loops. Visualize the loop step-by-step: creator posts → network sees → likes/comments arrive → creator gets feedback → creator posts again. Optimize each step. If the network is too sparse, the loop breaks and churn climbs. *Third*, reactivation of dark nodes. Churned users who are surrounded by an engaged network get pulled back automatically — a coworker shares a folder, a friend posts a photo that tags them. This is unique to networked products; traditional products rely on spammy "we miss you" emails that nobody opens.

Benchmarks: 60% day-1 retention, 30% day-7, 15% day-30 as starting targets for a consumer networked product. The best products' retention curves "smile" — they actually go up over time as the network densifies.

**Economic Effect.** The force that improves monetization, conversion, and unit economics as the network grows. Three patterns. *Efficiency over subsidy*: Uber's driver guarantees cost $15 per trip burn at 1 trip/hour; at 2 trips/hour (twice the demand density), the same $25 guarantee costs $2.50 burn per trip. *Higher conversion as density rises*: Dropbox's High-Value Actives convert once their collaborators are on the platform. Slack teams upgrade because premium features (full-archive search) get more useful with more users. Tinder Super Likes and Fortnite emotes are status items only valuable in rich networks. *Pricing power from lock-in*: Google's ad auction, eBay's fees, Airbnb's commissions all rise with concentration. The historical root: late-1700s London credit bureaus (the Society of Guardians, 1776) pooled data from 550 merchants — more merchants produced better risk predictions, which attracted more merchants, which improved predictions. Experian and Equifax grew out of this dynamic.

All three forces reinforce each other, or all three fail together. Chain letters had strong Acquisition and zero Engagement and zero Economic — which is why they collapsed like Ponzi schemes. Google+ had bundling-driven Acquisition but Engagement of 3 minutes per user per month, and no Economic. The test for "real" network effects is whether all three are present, not just one.

One more output of the Trio is the **Rocketship Growth Rate** — the pace required to build a $1B+ networked company in 7–10 years. The SaaS-world version is **T2D3**: Triple, Triple, Double, Double, Double. From PMF at $2M ARR → $6M → $18M → $36M → $72M → $144M → $1B+ valuation at typical multiples. Generalizing: `Rocketship growth rate = ((target revenue − starting revenue) / starting revenue) ^ (1/years)`. Growth rates are front-loaded — 5x, 4x, 3x, 2x, 1.5x, 1.5x is the shape, not smooth exponential — because teams exhaust the easy levers early and the later years require harder work. If your actual rate is 50% YoY, doubling for six years gets you 64x, which misses the 266x required to go from $1M to $200M. T2D3 isn't a target — it's the physics of the outcome.

## How to Apply

1. **Separate the three forces on a single slide.** For your product, write one sentence about what each is today. "Acquisition: weak — K ≈ 0.15 because we don't have a real viral loop, we're on Facebook ads. Engagement: decent — D30 is 28% but we need the smile, not decay. Economic: bad — ARPU is flat as network grows, no lock-in." This slide is how you diagnose which force is the bottleneck and where next-quarter effort should go.

2. **Find your K-factor and tune the invite flow.** Measure invites sent per user per month, conversion per invite, and cycle time. A/B test each screen. Small changes in individual steps compound massively across generations — "a 50% dropoff in invite conversion can drop total new users 80% through a few loop iterations."

3. **Draw your engagement loop on a whiteboard.** Creator → consumer → response → creator. Slack user → channel → notification → Slack user. Find the step that's leaking the most, and make that the quarter's priority. Segment users by frequency bucket (Aatif Awan at LinkedIn: 7-of-7, 6-of-7, 5-of-7 days active) and design different loops for different buckets.

4. **Check for the Economic signature of real density.** Burn per hard-side-unit (per driver, per host, per creator) should be declining as the network grows. ARPU in mature cohorts should be rising. Conversion rate from free to paid should be rising with network density. If none of those are moving, you have Engagement without Economic — you're giving value and not capturing it.

5. **Back-solve your required growth rate.** Pick your $1B+ target year. Apply the rocketship formula. Compare with your actual growth rate. Then decide honestly whether to accelerate the business or reduce your ambition — because those are the only two legitimate responses to missing the required curve.

## Examples

**Situation:** Dropbox, Escape Velocity phase around 2012. 100M registered users, $4B valuation. The Growth & Monetization team needed to pick where to push.
**Application:** They segmented users into HVAs (High-Value Actives, who used shared folders with colleagues) and LVAs (Low-Value Actives, who used Dropbox for personal backup). That single segmentation became the lever across all three forces. **Acquisition**: "fish in your own pond" — target companies with many Dropbox users already inside. **Engagement**: nudge LVAs toward multi-device use and shared folders until they became HVAs. **Economic**: convert companies whose HVA density crossed a threshold to enterprise plans.
**Result:** Dropbox grew from 100M to 500M+ users while ARPU climbed, all off a single segmentation decision that exercised all three forces.

**Situation:** PayPal, 1999–2000. Started as FieldLink for Palm Pilots — failed. Launched as a web-based peer-to-peer payments tool — flat adoption.
**Application:** An eBay PowerSeller emailed asking to use a "We accept PayPal" badge in their listings. PayPal productized it: sellers entered their eBay credentials and PayPal automatically inserted the badge across their auctions. Combined with Max Levchin's $10 give / $10 get incentives, the Acquisition Effect kicked in hard.
**Result:** <10K users to 100K in months. 1M a few months later. 5M within a year. Acquisition was the dominant force because PayPal found a native viral surface (eBay listings) no competitor could replicate cheaply.

**Situation:** Chain letters, as the anti-example. The 1930s Prosperity Club chain letter achieved insane Acquisition Effect, spreading through the US by mail in weeks.
**Application:** None. Strong Acquisition, zero Engagement (the letter is useless once you've seen it), zero Economic (no one captures value). Ponzi dynamics.
**Result:** Collapse within months. The lesson generalizes: Acquisition without Engagement or Economic always collapses. If your product has only one of the three, you don't have network effects — you have a virus with no host.

## Anti-Patterns (tactical)

**Don't:** Claim "network effects" on a pitch deck with no evidence of all three forces.
**Why:** Investors who have seen 10,000 pitch decks are inoculated against the phrase. Show the viral factor, the retention curve cohort-by-cohort, and the burn-per-unit economics improving with density. If all three are there, you have real network effects; if not, you don't.

**Don't:** Optimize one force at the expense of the others.
**Why:** Notifications often raise MAU faster than DAU, lowering the ratio. Paid marketing raises Acquisition but corrupts LTV/CAC math (early-adopter CAC is always better than later-cohort CAC). Professionalizing hard-side revenue can accelerate Economic but triggers revolt if mismanaged. The Trio is a system; optimize as a system.

**Don't:** Accept "we have a viral factor of 1.5" without checking cycle time.
**Why:** K alone isn't enough. K = 1.5 with a 30-day cycle beats K = 2 with a 90-day cycle; both are beaten by K = 1.1 with a 7-day cycle across enough generations. Cycle time is the often-ignored multiplier on the Acquisition Effect.

**Don't:** Assume Escape Velocity tactics will apply before you have an atomic network.
**Why:** You can't amplify a force that doesn't yet exist. Pre-PMF the only job is to build one stable atomic network. Trying to A/B test viral loops or T2D3 forecasts on 50 friends-and-family users is noise, not signal.
