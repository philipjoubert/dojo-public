---
triggers:
  - "user asks how to 'build' or 'manufacture' word of mouth"
  - "user is thinking about a referral program before organic WOM exists"
  - "user says 'our growth is mostly word of mouth but we can't measure it'"
  - "user wants to attribute organic signup sources / asks about attribution gaps"
  - "user asks about NPS, love marks, love mark identification"
  - "user asks how to make a product 'delightful' or what makes people share"
use_when:
  - "diagnosing whether WOM is real, measurable, and worth doubling down on"
  - "deciding between paid referral programs and organic WOM amplification"
  - "auditing a product for love marks vs. pure utilitarian design"
fails_when:
  - "pre-PMF — nothing to recommend, no WOM to grow"
  - "product is purely utilitarian (SSO, plumbing) where users never talk about the tool"
  - "you want WOM results in a quarter — it's a slow-compounding loop, 6+ months before it shows up"
related:
  - "distribution-trust.md"
  - "growth-loops.md"
  - "pride-test.md"
---

# Word-of-Mouth Loop

## When to Use
- A meaningful chunk of your signups come from "a friend told me" and nobody on your team has bothered to quantify it. You're running a loop and flying blind.
- You're about to bolt a financial referral program onto a product that has no organic WOM underneath. Don't. You'd be paying users to spam friends who will churn in a week.
- Your NPS is high (70+) but your attribution tools can't see why growth is happening. That delta — between attribution data and HDYHAU answers — *is* your WOM loop.
- You're early stage, have no paid acquisition budget, and are trying to figure out how to grow. WOM is usually where early traction actually came from, not the heroic founder LinkedIn post you thought it was.
- Your product is utilitarian and soulless, and every onboarding experience is cold and machine-like. You're leaving the most defensible growth loop on the table.

## Fails When
- **Pre-PMF.** WOM amplifies the signal users give you. If the signal is "meh," amplification just produces more meh. Fix PMF first.
- **Utilitarian plumbing where WOM can't physically happen.** Okta SSO — nobody's recommending their identity layer at dinner. Pick a different loop.
- **You measured once and declared victory.** WOM coefficient is a trend, not a snapshot. If you're not tracking it over time against cohort changes, product launches, and love-mark experiments, you haven't measured anything.
- **You tried to pay your way to it.** Referral incentives work *on top of* organic WOM, not instead of it. If you have to bribe users to talk about you, that's your signal about the product.
- **You want hockey-stick WOM in 90 days.** Love marks compound over quarters, not weeks. If leadership kills the program in month 2, you never had a WOM strategy to begin with.

## Core Concept

WOM is the ultimate trust signal and the highest-leverage growth loop most companies either ignore or mis-measure. It's the rate at which active users generate new users via word of mouth — hallway conversations, Slack shoutouts, screenshots, tweets, SMS threads. When it works, users become an extension of your marketing team for free. That's why early-stage founders consistently find that their first real traction came from WOM, even when their attribution dashboards were pointing somewhere else.

Here's the trap. Most companies treat WOM as a vibe. "We're growing through word of mouth!" — okay, *how much?* At what rate? Is it accelerating or decaying? They can't answer because they never set the metric up. The fix is the **WOM Coefficient** — new users attributable to WOM divided by total active users. You get the numerator from an HDYHAU survey ("How did you hear about us?") with open-text answers at signup. You aggregate the "a friend told me" / "saw it on Slack" / "my coworker uses it" responses. That's your dark funnel — the stuff every attribution tool misses because it can't track a message in someone's group chat.

NPS above 70 is strongly correlated with a healthy WOM loop. Free users generally score higher than paid — once you start paying, your expectations go up and products have to work harder to meet them. That's why freemium products usually have the strongest scalable WOM. Your free users aren't a cost center; they are your marketing distribution.

Now the actual playbook — **love marks.** Love marks are unexpected, delightful, human-like experiences in a product that match the user's self-image and desired identity. Asana's unicorn flying across the screen when you complete a task. GitHub's Octocat animation on a commit. Mailchimp's Freddie high-five. Superhuman's personal CEO email at signup. Apple Messages' confetti on "congratulations." These are *functionally useless*. They are retention and WOM infrastructure. They invoke human emotion in an interface that would otherwise be cold and machine-like. And that's what gets shared — because people recommend products that match the identity they want to project. "I use the product with the unicorn" is an identity statement. "I use the product with the SSO page" is not.

The practical frame is three loops wearing one label. **Organic WOM** — unprompted sharing driven by love marks and delight. **Amplified WOM** — referral programs, incentives, partnership distribution. **Product-embedded WOM** — casual contact loops where the product itself creates exposure (watermarks on shared artifacts, "Made with Lovable" footers, publicly shared Miro boards). Each compounds differently. Organic is the foundation. Amplified is the multiplier — and only works if organic exists. Product-embedded is the rocket fuel, but requires the product to have a natural sharing surface.

## How to Apply

1. **Install an HDYHAU survey on signup. Open text, not dropdown.** A dropdown forces users into your categories; open text captures "my friend Alex told me" vs. a flat "word of mouth." Aggregate monthly. Categorize responses into: direct WOM (friend/coworker), indirect WOM (Reddit, Slack, community), content (LinkedIn post, Substack, newsletter), paid channel, search, other. The delta between your attribution tool and HDYHAU is your dark funnel.

2. **Calculate the WOM Coefficient and trend it.** New users attributed to WOM (from HDYHAU) divided by active users in the period. Plot monthly. Track changes against product launches, love-mark experiments, onboarding redesigns. A WOM coefficient moving up = you're building a loop. Moving down = you're burning one.

3. **Run a Love Mark audit.** Walk through your product as a new user and catalog every moment that invokes *any* human emotion. For most B2B products, the count is zero. Write down the top 10 moments in the user journey and mark each: delight, neutral, friction. Prioritize the neutrals most likely to be shareable (first success, milestone, completion) and add a love mark.

4. **Interview users who shared.** Don't just look at who shared — ask them what prompted it. "What were you doing when you decided to send this to a coworker?" The answers will reveal the actual moments of delight. Most teams don't do this and guess at the wrong love marks.

5. **Reduce friction on the share path.** Pre-filled messages. One-click shares. Public-by-default for artifacts where that makes sense (Miro boards, Lovable projects). If sharing your product requires 4 clicks and an email address, you've broken your own loop.

6. **Only bolt on a referral program after organic WOM is confirmed.** If your WOM Coefficient is meaningful and trending up, a financial referral program can amplify it — that's what Dropbox did ("give storage, get storage"). If your coefficient is near zero, a referral program produces paid-for spam that churns immediately. Order matters.

7. **Set WOM coefficient targets alongside paid acquisition targets.** If paid has a budget and a goal, WOM should too. Otherwise the org defaults to optimizing what's measured and ignoring what isn't.

8. **Treat free users as a legitimate citizen of the business.** Include free-user metrics in your KPIs. Prioritize roadmap items that serve free users. Free users have the highest NPS because they don't have their expectations inflated by payment. They are your loudest marketers.

## Examples

**Situation:** A B2B SaaS has 5% monthly signup growth, most of which they can't attribute. Marketing thinks it's SEO. Sales thinks it's their outbound.
**Application:** Install HDYHAU on signup — open text, mandatory field. Let it run for 8 weeks. Aggregate. Cross-reference with the attribution dashboard.
**Result:** 62% of answers reference a friend, a coworker, a Slack community, or a social post by name. Attribution tool was showing 12% "direct." The delta — 50 points of growth — was WOM and dark-funnel channels nobody had a metric for. Leadership stops cutting the founder's LinkedIn time. Marketing repositions around amplifying the loops that were invisible.

**Situation:** A productivity tool has decent growth but a utilitarian UX. NPS is 28 (bad). Team is considering a paid referral program.
**Application:** Don't launch the referral program. At NPS 28, a referral program is paying users to damage their relationships by recommending something mediocre. Run a love mark sprint instead. Audit the product. Interview the 5 users who *did* recommend it — what moments did they remember? Add 3 love marks in the top 3 shareable moments over a quarter. Trend NPS and WOM coefficient monthly.
**Result:** Six months later, NPS climbs to 55, WOM coefficient moves from ~0.05 to ~0.18. *Now* a referral program makes sense — it amplifies something real instead of paying for noise. The team that wanted to ship the referral program in January would have burned budget and brand; the team that ran love marks first compounded.

**Situation:** An early-stage AI product has tiny traffic but every new signup says "Lenny's Newsletter recommended this." Founders are thrilled and want to double down on SEO.
**Application:** Don't touch SEO. SEO is collapsing anyway. The signal is that your product got recommended by a trusted voice to a high-intent audience, and those users are activating. That's a WOM loop with an influential node. Lean into the creator economy — sponsor newsletters and podcasts where your ICP already reads. Look at Lovable's partnerships with Lenny, MK1, Revolut, Stripe Atlas, Mercury — partners market directly to ICP with almost zero competitive noise. This is the new way to do paid marketing.
**Result:** Within 6 months, creator-sponsored acquisition becomes a top-3 channel. WOM coefficient compounds because each creator-introduced user tells 1–2 more people. HDYHAU tells you which creators convert, so the next tranche of spend goes to the ones that actually produce customers.

## Anti-Patterns (tactical)

**Don't:** Launch a referral program before measuring organic WOM.
**Why:** Financial incentives amplify what exists. If organic WOM is zero, you're paying users to pretend they love a product they don't. You'll get signups that don't activate and a brand that feels purchased. Organic first, amplifier second.

**Don't:** Use a dropdown in your HDYHAU survey.
**Why:** Dropdowns force users into your categories and erase specificity. "Word of mouth" is useless; "my coworker Alex showed me at our standup" is diagnostic. Open text with later aggregation beats structured input every time.

**Don't:** Treat NPS as the whole WOM story.
**Why:** NPS measures likelihood to recommend; WOM coefficient measures actual recommendation. High NPS without high WOM = users would recommend but don't, and your job is to reduce sharing friction. Low NPS with any WOM = your promoters carry the loop; figure out who they are and why.

**Don't:** Skip the "why did you share" interview.
**Why:** Teams guess at love marks and prioritize the wrong moments. The users actually know. A 30-minute call with 5 users who shared in the last week will tell you more than a dashboard full of product analytics.

**Don't:** Kill free users to "improve margins."
**Why:** Free users have the highest NPS and carry the WOM coefficient. They are your marketing budget, not your cost center. Tightening the free tier to force upgrades collapses the loop — revenue goes up for a quarter, new-user growth flatlines for a year.

**Don't:** Expect WOM to move in 30 days.
**Why:** Love marks, product-embedded sharing, community momentum — all compound over 6+ months. Short-horizon reviews kill the program before it produces. Commit to quarterly measurement at minimum, annual measurement ideally.
