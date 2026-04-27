---
triggers:
  - "user asks where growth should report (product, marketing, CEO)"
  - "user wants to hire a Head of Growth or VP Growth"
  - "user asks about first growth hire, growth team structure, or scaling the team"
  - "user shares a growth job description and wants a review"
  - "user asks about Weekly Metrics Review, DRIs, or growth rituals"
  - "user describes a growth team that feels bureaucratic or stalled"
  - "user asks about growth engineering"
  - "user is starting a new growth role (30/60/90 day plan)"
use_when:
  - "designing or restructuring the growth function"
  - "diagnosing why an existing growth team isn't delivering"
  - "evaluating a growth JD or growth-leader candidate"
  - "setting up the operating cadence that makes a growth org data-driven"
fails_when:
  - "company is pre-PMF (don't hire growth, do founder-led growth)"
  - "company isn't a software product with data to experiment on"
  - "leadership won't commit to weekly data rituals or give growth surface ownership"
related:
  - "distribution-trust.md"
  - "ai-native-growth.md"
  - "growth-loops.md"
---

# Growth Teams (Org Design, Hiring, Operating Cadence)

## When to Use
- Designing the first growth team, or scaling from one experimentation squad to a full growth org with multiple squads and a Head of Growth.
- Reviewing a Growth JD. Nine times out of ten the JD is a rebranded marketing role or a catch-all Franken-job — "Head of Growth" plus "own marketing strategy, brand, content, and HubSpot." Please.
- Establishing the operating system: Weekly Metrics Review, DRI model, experimentation rituals, growth engineering team.
- Diagnosing a growth team that's stuck: bureaucratic, slow, optimization-only, or politically at war with core product.

## Fails When
- **Pre-PMF:** do not hire a growth team. You cannot outsource PMF to growth. Founder-led growth until $1M ARR, minimum. Hiring growth to *find* PMF is the #1 growth anti-pattern.
- **Not a software product with data:** these frameworks assume experimentation infrastructure, product analytics, and a rapid ship cycle. Hardware, heavily regulated, or low-volume B2B sales cycles don't fit cleanly.
- **Leadership won't attend Weekly Metrics Review or won't give growth surface ownership:** the team will get politicked to death in 12 months. Don't build the team until leadership is genuinely bought in.

## Core Concept

Let me be clear about what a Growth team actually is, because the term has been abused beyond recognition. A Growth team takes an experimentation-first approach to driving specific metrics within the growth model, aiming to increase the distribution of an existing product's value. That's it. It is *not* marketing. It is *not* brand. It is *not* content strategy. It is not your catch-all for roles you couldn't fill. Growth is the performance side of marketing plus the distribution side of product — the place where data, experimentation, and GTM meet. If your JD for "Head of Growth" includes "own overall marketing strategy and brand building," you're not hiring a Head of Growth, you're hiring a Head of Marketing and slapping the hot title on. Stop that.

Where does growth report? This depends on your primary motion, and it's consequential. Heavy product-led → growth sits in Product. Heavy marketing-led → growth sits in Marketing. Heavy sales-led → growth sits close to marketing or sales. I default to Product for most modern B2B software because growth needs to touch the in-product surfaces (onboarding, activation, monetization, feature adoption) and marketing teams almost never have the engineering horsepower to move those. Growth Marketing teams are great — at demand capture, channels, landing pages, lifecycle. They are not great at shipping product. Please repeat after me: *growth is part of marketing, but not all of marketing is growth*. Do not expect product work from a Growth Marketing team. Do not expect channel work from a Growth Product team without a lifecycle/PMM dotted-line relationship. Pick where it reports based on where the impact needs to land.

Growth teams must stay in Founder Mode. That's the scrappy, all-hands-on-deck, skip-the-hierarchy, talk-to-every-engineer mode that Brian Chesky writes about and that Steve Jobs and Elon Musk never left. Well-behaved growth teams rarely make history. The moment your growth team starts needing three approvals to ship an experiment, they've lost the edge that makes them valuable. Other teams — Sales, Customer Support, even Core Product — get to run in Manager Mode most of the time. Growth can't. Markets shift quarterly, channels decay by the Law of Shitty Clickthroughs, and once you saturate your core users you have to expand to adjacent users with worse retention. Constant innovation is the job, and innovation dies in committee. If leadership can't tolerate a team that bypasses org charts to find wins, don't build a growth team — build a marketing team and be honest about it.

The operating system matters as much as the org chart. My #1 recommendation for any company over 100 users: start the **Weekly Metrics Review**. I've run this meeting at SurveyMonkey, Miro, Amplitude, Dropbox, and Lovable — it is the single highest-leverage ritual for getting a company to genuinely be data-driven. Revenue is *not* the metric. Revenue is the output. You track the **driver metrics** (input metrics that lead to revenue) with DRIs (Directly Responsible Individuals) presenting each one weekly, on Tuesdays (Monday is prep), with Finance and Analytics in the room. Three revenue scenarios get tracked: **Momentum** (what happens if we do nothing — usually 10–15% annual decline), **Baseline** (what it takes to win back the natural deterioration), **Lift** (where you want to end). Each non-Momentum scenario has explicit driver-metric assumptions. Without this ritual, companies fall into the perception-reality gap: leadership makes decisions on intuition, the data contradicts it, nobody course-corrects because there's no shared reference point. Great teams end up moving fast in different directions. That's what kills companies.

## How to Apply

1. **Confirm prerequisites before hiring growth at all.** Two non-negotiables: you have PMF (retention is stable, churn <25% first-term, users return naturally), and you have enough data infrastructure to experiment (product analytics, CDP, basic CRM flowing). If either is missing, don't hire growth yet — you'll set the hire up to fail. Hiring a Head of Growth to *find* PMF is my #1 anti-pattern. Found on Lenny's list too. Don't do it.

2. **Start with one experimentation team, not a structure.** First growth team is 1 Growth PM + 1 Data Scientist (non-negotiable — data before growth) + 1–2 engineers + 0.5 designer + dotted lines to PMM/Lifecycle/Performance marketing as needed. They don't own surfaces yet — they float across the customer journey hunting the biggest underperforming metric. "Firefighters" approach. Prove ROI first. Smallest viable team.

3. **Pick surfaces deliberately when you scale.** When you have positive ROI (incremental revenue > team cost by 2x+) and traction on at least one driver metric, scale to a squad model. Each squad owns a lever: activation, monetization, acquisition, retention, or a specific loop (viral, content). Usual surfaces growth takes over: home/landing pages, SEO, SEM, onboarding quiz, empty-state dashboard, pricing/checkout pages, in-app messaging, email, experimentation platform. Everything else stays with Core Product or Marketing with an explicit agreement that Growth can experiment on it.

4. **Sequence the squads in this order: Activation → Monetization → Acquisition → Retention.** Not optional. Fix the bucket before you fill it. 90% of monetization and retention issues stem from poor activation — if you jump to acquisition first, you're pouring water into a leaky bucket. Retention goes last because the Core team owns it (Weekly Active Users is a retention signal) and because activation is a leading predictor of retention anyway — fixing activation usually lifts retention for free.

5. **Hire a Head of Growth with the right profile, not the shiny one.** Red flags in candidates: FAANG pedigree with zero experimentation scars, comes from lead-gen demand-gen shop pretending to be growth, can't name their last three failed experiments, wants to "build the team" before shipping anything. Green flags: former founder or founder-adjacent, has experimentation culture in their bones, has shipped something that failed in the last 6 months and can tell you why, knows the Disruption Risk 2x2 or similar framework, is already posting thoughtfully on LinkedIn (public record of how they think), comfortable touching data themselves (not waiting for an analyst).

6. **Set up the Weekly Metrics Review on day one.** Not when you have a team — before. Pick 10–50 driver metrics depending on team size. Assign DRIs across the entire org (not just Growth — DRIs can be in Product, Marketing, Sales, Success). Finance and Analytics attend mandatory. Tuesday cadence. Automated dashboards, not manual pulls (one round of manual is fine for setup). Every initiative gets tagged to a driver metric — if an initiative can't be tied to a metric, why is it on the roadmap?

7. **Treat the DRI as the Metric CEO, not the scapegoat.** A DRI coordinates resources to move the metric — they are NOT the sole executor. They need high agency, ecosystem understanding (they know how their metric interacts with adjacent ones), contextual history (what's been tried), extreme growth mindset (tolerance for "nothing, nothing, down, nothing, maybe up"), and program management ability. Protect them: if the DRI comes with a request, it prioritizes over other work, or it escalates. Include DRIs in every quarterly re-forecast so they're not blindsided when the number they "own" gets renegotiated.

8. **Build a Growth Engineering function when the squads scale.** Growth engineers ship to *validate*, not to release. 30% of their code is gone in a year (vs. 90% still in prod for core engineers). The 30/90 rule. First hire sets up off-the-shelf MarTech (no-code, experimentation platform, CDP, email tooling) so PMs and marketers self-serve. Following hires own owned surfaces + infrastructure. Don't convert Core engineers — they'll be miserable and slow. Recruit former founders, new grads, career-switchers, future-founders. Pride in business impact ("I shipped 14 experiments last quarter, 6 winners, $3M ARR") over code craft.

9. **Run the 30/60/90 new-job playbook when a growth leader starts.** Days 1–30: protect what's working (identify it, don't break it, remove friction). Days 2–30 in parallel: find easy wins — 80% confidence based on pattern-matching from past experience. Around day 30: start shopping one big bet (not committing — stress-testing). Days 30–90: shape strategy in a Miro board you keep updating as context lands. Interim engagements flip this — big bet first, fast. Full-time leaders earn the right to make big moves by first proving they understand the current state.

## Examples

**Situation:** A $5M ARR startup wants to hire a Head of Growth. The JD has 23 responsibilities including "own brand strategy, content calendar, PR, demand generation, product launches, marketing ops, website, and growth." They're looking for someone with "hypergrowth" on their resume.
**Application:** That's four jobs in a trench coat. Wrong! It also signals that the founder doesn't understand what growth actually is. The advice: (1) separate the JD into Head of Marketing (brand, content, PR, product launches, website) and Head of Growth (experimentation on activation/monetization/acquisition/retention with data and engineering resources). (2) If you can only hire one, hire a Head of Marketing first — a $5M ARR company needs demand capture more than growth experimentation. (3) If you really only have one slot and want a Head of Growth, cut the JD to a clean Gitlab-style or Turno-style description: grow key metrics, mentor the team, improve user journey, be data-driven, work cross-functionally. Done. Five bullets. (4) Also, at $5M ARR you might still be too early — founder-led growth to $10M minimum before a full Head of Growth makes sense.
**Result:** Founder reframes the hire, probably splits it, gets better candidates, and doesn't waste 18 months with a disappointing hire who was set up to fail.

**Situation:** A growth team has been shipping experiments for six months but nothing is moving the needle. Leadership is threatening to dissolve the team. Morale is low. Weekly Metrics Review hasn't been happening.
**Application:** Likely a cluster of failures. (1) Diagnose metric choice — are they optimizing the right metric? Often the "growth team isn't working" story is actually "we gave them activation to fix but the real bottleneck is acquisition" or vice versa. (2) Check whether the team has ownership of the surface they're trying to optimize. If they're running experiments on pages Core Product owns, they're constantly re-litigating permission instead of shipping. (3) Start the Weekly Metrics Review *this week*, even with imperfect data. Get leadership in the room. Assign DRIs. This alone usually surfaces the real blockers within 3 weeks. (4) Reset the innovation:optimization ratio — if the team is doing 95% optimization on a product that needs to be rebuilt, kill the optimization backlog and push for big-bet experiments instead.
**Result:** Team either reveals a structural problem (wrong metric, wrong owner, wrong maturity) and can be relocated/refocused, or within 6 weeks of the Weekly Metrics Review operating, leadership starts seeing patterns and quick wins show up. Saves the team or kills it cleanly with data, which is the correct outcome either way.

**Situation:** A PE-backed SaaS company has a growth team reporting to Marketing. The VP Marketing treats growth as "the paid acquisition and email team." The product team considers growth an outside meddler. Collaboration is terrible.
**Application:** Classic structure mismatch. A Growth Marketing team will never do meaningful product work — they don't have the engineering or design resources and they can't win the political fight against Core Product over in-product surfaces. Two paths: (1) Accept the constraint and rename the team — "Growth Marketing" — with a scope limited to demand capture, channels, landing pages, lifecycle. Be honest. Don't expect in-product experimentation from them. (2) Or, restructure so a new Growth Product function reports to the CPO, owns a specific set of product surfaces (onboarding, pricing page, in-app messaging) with an explicit collaboration charter with Core Product, and runs the Weekly Metrics Review alongside the existing Growth Marketing team. Either works. Trying to pretend Growth Marketing is doing Growth Product work is the lie that's creating the political problem.
**Result:** Honest org design reduces friction. The team that exists can focus and ship. If ambition exceeds marketing-only scope, a Growth Product function gets stood up with the authority it needs to actually impact in-product metrics.

## Anti-Patterns (tactical)

**Don't:** Hire a Head of Growth to find PMF.
**Why:** You cannot outsource PMF to a growth team. PMF comes from the founder, product, and customer conversations — no growth hire on earth has a shortcut around that. Hiring growth pre-PMF gives the founder a scapegoat and gives the hire an impossible job. It's my most frequent "please don't do this" conversation.

**Don't:** Give the growth team random metrics ownership without a clear surface.
**Why:** If a growth team owns "activation" but doesn't own any of the surfaces that drive activation (onboarding flow, empty dashboard, setup moments), they're going to spend 80% of their time begging for roadmap space from the team that *does* own the surfaces. That's not a growth team, that's a political function. Own the surface or own the experiment — never just the metric in the abstract.

**Don't:** Make the Weekly Metrics Review a revenue-only meeting.
**Why:** Revenue is an output. If you track only revenue, you can't diagnose, you can only celebrate or panic. Driver metrics (acquisition, activation, monetization, retention metrics that *predict* revenue) are what you operationally manage. See the Beckham meme — revenue is important. It's just not the thing you track weekly at the driver level.

**Don't:** Blame the DRI when the metric misses.
**Why:** DRIs coordinate resources; they don't have unilateral authority over every team that touches the metric. If you treat a DRI as solely accountable, they either (a) optimize for short-term wins they can personally control, which ignores the long-term bets that drive real lift, or (b) quit. Neither helps. Protect DRIs: prioritize their requests, escalate resource conflicts, include them in re-forecasts.

**Don't:** Convert Core Product engineers to Growth engineers by memo.
**Why:** Core engineers optimize for 90% of code still in prod in a year, beautiful architecture, pixel-perfect design collaboration. Growth engineers write code that's 30% in prod after a year, hardcode where sensible, make PM decisions independently, and take pride in experiment count and revenue impact. Converting a Core engineer rarely works — they're miserable within 6 months. Hire for Growth Engineering on purpose: former founders, new grads, career-switchers, future-founders.

**Don't:** Rebrand lead-gen, demand-gen, or RevOps as "growth" because you can't fill the role.
**Why:** It sets up everyone for disappointment. The hire thinks they're joining a growth team, discovers they're actually a demand-gen solo IC, quits in 9 months. The leadership thinks they've got a growth function, discovers 6 months in they have a Marketing Ops person building HubSpot workflows. Nobody wins. Be honest about the role. If you can't fill "Demand Gen Manager" at your current salary band, raise the salary — don't rename the role.

**Don't:** Let growth reporting change every quarter based on political wind.
**Why:** Growth needs stability in who they report to because they depend on cross-functional partnerships that take months to build. Moving them from Marketing to Product to CEO to Product every 3 quarters resets the relationships every time. Pick a structure based on your primary motion (heavy PLG → Product; heavy SLG → Marketing/Sales) and commit for 18+ months.

**Don't:** Assume the growth team should work in Manager Mode once the company scales.
**Why:** Every other team gets to stabilize with scale — Sales moves to enablement, Customer Success moves to playbooks, Core Product moves to roadmap cycles. Growth doesn't get that luxury. Markets evolve, channels decay, adjacent users have worse retention, and the Law of Shitty Clickthroughs is undefeated. Keep growth in Founder Mode even when the rest of the org has moved to Manager Mode, or you will watch key metrics flatline within 18 months and nobody will understand why.
