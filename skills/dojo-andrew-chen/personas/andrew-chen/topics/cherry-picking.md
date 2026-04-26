---
triggers:
  - "user is competing against an incumbent with network effects"
  - "user asks how a smaller startup beats a bigger network"
  - "user wants to know the Airbnb/Craigslist strategy"
  - "user is trying to unbundle a dominant platform"
  - "user asks how David beats Goliath in networked markets"
  - "user is debating whether to go broad or narrow on launch"
use_when:
  - "advising a startup that's up against a dominant networked incumbent"
  - "deciding which sub-network within an incumbent is the right wedge"
  - "planning a platform-bridging strategy (scraping, cross-posting, APIs) with a finite time window"
fails_when:
  - "there's no real incumbent to cherry-pick from — the market is genuinely green-field"
  - "the startup tries to cherry-pick a sub-network with structurally broken unit economics (low frequency, low margins, high churn)"
  - "the platform bridge becomes existential — strategy requires eventually standing alone"
related:
  - "atomic-network.md"
  - "big-bang-failures.md"
  - "hitting-the-ceiling.md"
---

# Cherry Picking — The David Strategy in Networked Markets

## When to Use
- A founder is competing against a dominant networked incumbent (Craigslist, eBay, Facebook, YouTube, LinkedIn, Yelp) and asking "how do I beat them?"
- A team is planning the wedge for a new product and debating whether to go broad or narrow.
- You're evaluating whether an incumbent is actually as strong as they look, or whether some sub-networks are neglected.
- A startup is using a competitor's platform as a distribution channel (scraping, cross-posting, API integration) and needs to plan the eventual escape.

## Fails When
- There's no real incumbent to cherry-pick. If you're launching into a genuinely green-field category, the framework doesn't apply — you have a different problem (Cold Start with no shoulders to stand on).
- The startup cherry-picks a sub-network with bad economics — low frequency, tiny margins, high churn — under the theory that "the incumbent is weak here." They're weak there for a reason.
- Platform dependence becomes permanent. The cherry-pick is a wedge, not a strategy. If the startup never graduates to its own distribution, the incumbent eventually closes the door.

## Core Concept

"Every dominant network might seem invincible, but the networks-of-networks framing argues that some parts of the network are weaker than others. Some are serving their customers well, and others are ready for a better product to emerge. There is an upstart's advantage — they can cherry-pick the one really attractive use case that's the most valuable and poorly defended by an incumbent."

The mistake smaller startups make against network-effect incumbents is trying to win head-to-head. Feature-for-feature, the incumbent has more engineers, more data, more money, more users, and a 3-year head start. By the time you ship parity, they've shipped beyond. The Innovator's Dilemma applies here with a vengeance: almost every "new feature" you could build is a sustaining innovation already on the incumbent's roadmap.

But the incumbent isn't actually one network. It's a network of networks — a dozen, a hundred, a thousand atomic networks glued together under one brand. Some are healthy. Many are weak. Craigslist had job listings (healthy), garage-sale items (healthy-ish), personals (imploding), apartment rentals (neglected), freelancer listings (neglected), vacation rentals (barely built). The David strategy is to identify a single weak sub-network, build a dramatically better experience specifically for it, and use that as your atomic network. The incumbent's small team — Craigslist famously had about 50 employees at $700M/yr — can't defend every vertical simultaneously, and they tend not to defend the ones that aren't their cash cows.

How to pick which sub-network? Look for:

- **High economic value per transaction.** Vacation rentals generate more per transaction than garage sales, so the unit economics of a focused product can support real investment.
- **High frequency or stickiness.** If users come back often, engagement loops get to compound.
- **Underserved UX.** If the incumbent's version is bare-bones (text-only listings, no reviews, no photos, no payments), the 10x improvement is obvious.
- **Weak hard-side coverage in the incumbent.** If the sellers / hosts / drivers on the incumbent aren't being served well, they'll migrate quickly.

Once you've picked the niche, build a product that's **10x better for that specific use case**, not 1.1x better overall. Airbnb's differentiator vs. Craigslist rooms-for-rent wasn't "slightly nicer UX." It was integrated payments, verified photos, reviews, calendars, and host profiles — a complete re-imagining of the trust stack for short-term rentals. 10x on a narrow vertical beats 1.1x on a broad one.

The second move — often ignored — is the **platform bridge**. Airbnb's famous Craigslist integration wasn't a feature; it was a user-acquisition strategy. Airbnb wrote a scraper (Craigslist had no API) that auto-posted Airbnb listings to Craigslist's rooms-for-rent category, with unique tracking URLs that routed replies back to Airbnb's own inboxes via Mailgun/Sendgrid. For years, Airbnb used Craigslist's traffic to bootstrap its own atomic network — and Craigslist's small team never noticed or never cared enough to block it. Skype, LinkedIn, and Facebook all did the same thing with Hotmail/Yahoo address books. The bridge is temporary; the escape matters.

Two reasons cherry-picking devastates incumbents.

**First, networks lost are rarely regained.** Once an atomic network has moved to a new product, the Cold Start Problem resurrects itself for the incumbent — they'd have to re-build the same density from scratch, and their existing users have low tolerance for ghost towns. The moment Craigslist's rooms-for-rent users shifted to Airbnb, Craigslist couldn't pull them back with any feature.

**Second, head-to-head loss swings market share 2x compared to pure gains.** A 20% share shift in the cherry-picker's favor moves the market from 80/20 to 60/40, not 55/45. This affects fundraising, morale, and recruiting on both sides. The incumbent's narrative of invincibility breaks.

## How to Apply

1. **Map the incumbent as a network of networks.** Draw out the sub-networks inside the incumbent's product. Which use cases are hot? Which are cold? Which have 10x-worse UX than a dedicated product could deliver? Where is the hard side underserved? The answer is in the cracks between the incumbent's focus areas.

2. **Pick the specific sub-network to attack.** Not "the Airbnb opportunity"; "rooms for rent, with integrated payments and verified photos, for people who already list on Craigslist." Specificity forces the atomic-network discipline.

3. **Build 10x better, not 1.1x better.** A dedicated product for a narrow use case should feel categorically different from a generic platform's version of the same thing. If your team can't articulate a 10x advantage, the cherry-pick isn't ready.

4. **Use the incumbent as the distribution bridge.** Scrape, cross-post, integrate. The incumbent's traffic is there; use it while you can. Assume it won't last forever — plan the atomic-network density threshold above which you don't need the bridge, and aim to hit it fast.

5. **Stand alone before the door closes.** The bridge is temporary. Craigslist eventually blocked Airbnb; LinkedIn blocked scrapers; Facebook restricted API access. Every platform dependence has a shelf life. The cherry-picker's job is to get above the Allee threshold on its own distribution before the bridge breaks.

## Examples

**Situation:** Airbnb vs. Craigslist, 2008–2011. Craigslist was the dominant listings platform with enormous traffic in the rooms-for-rent category, but their experience was bare-bones: text listings, no standardized photos, no reviews, no availability calendars, no payments, no trust signals.
**Application:** Airbnb launched at airbedandbreakfast.com with a complete rebuild of the short-term-rental experience. Verified host profiles, professional photography offers, integrated payments, reviews, calendars, messaging. Then — the famous Craigslist integration — an automated bot that cross-posted Airbnb listings to Craigslist, with unique URLs and per-listing email routing.
**Result:** Airbnb harvested Craigslist's traffic for years before Craigslist started blocking. By then, Airbnb had an atomic network in dozens of cities and didn't need Craigslist anymore. Craigslist's rooms-for-rent sub-network effectively transferred to Airbnb and never came back.

**Situation:** Facebook vs. MySpace, 2004–2008. MySpace was the dominant social network with ~100M users, but it was a general-interest network with weak network density inside any specific community.
**Application:** Facebook deliberately restricted its initial atomic network to harvard.edu students. The density per school was extreme — everyone in your class was on it. Then they copy-pasted the playbook: Stanford, Yale, the Ivy League, all colleges, eventually high schools and workplaces.
**Result:** Facebook's dense college atomic networks overran MySpace's sparse global network. By 2008, MySpace was in decline and Facebook was dominant. MySpace never regained the college segment.

**Situation:** Dropbox vs. Windows Networking and early cloud storage, 2008–2010. The incumbents (Windows Network Shares, FTP, email attachments) had massive distribution but terrible shared-folder UX — especially across machines, operating systems, and external collaborators.
**Application:** Dropbox built a "magic folder that just syncs" — dead simple, no setup, cross-platform. The specific atomic network was "teams that wanted to share files across machines and people without IT help." Dropbox cherry-picked this use case and ignored the broader file-management / enterprise-storage territory.
**Result:** Shared folders became the Dropbox use case. 100M users, $4B valuation at Escape Velocity, and a category that Windows Networking ultimately couldn't compete with because the incumbent's architecture couldn't be re-built around sharing without breaking backwards compatibility.

## Anti-Patterns (tactical)

**Don't:** Cherry-pick a sub-network with structurally broken economics.
**Why:** If the incumbent's version of this vertical has low transaction value, low frequency, or terrible margins, those problems will migrate to your dedicated product. A 10x better UX on a $5/transaction vertical with 3% monthly frequency is still a weak business.

**Don't:** Let the platform bridge become existential.
**Why:** If your growth depends on scraping Craigslist, posting to Instagram, or APIs that could close tomorrow, you have a time bomb. The bridge is a wedge, not a strategy. Plan the atomic-network density at which you can stand alone, and hit that density before the door closes.

**Don't:** Ship 1.1x better and call it cherry-picking.
**Why:** The whole point of a narrow focus is to deliver categorical improvement. If the incumbent can copy your wedge in a sprint, they will. Airbnb's 10x on rooms-for-rent was "complete rebuild of the trust stack," not "prettier photos."

**Don't:** Pick the sub-network the incumbent is actively focused on.
**Why:** Cherry-picking works because the incumbent's attention is spread thin. If you pick their cash cow, they'll defend it ferociously and you'll lose. Pick the one they're neglecting — the vertical where the hard side is frustrated and the UX hasn't been touched in years.
