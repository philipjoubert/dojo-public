---
triggers:
  - "founder asks what a good NRR or net retention rate is"
  - "founder asks the difference between NRR and GRR"
  - "founder describes high churn and asks what to do"
  - "founder says a big customer just canceled and wants to know why"
  - "founder asks how to lower churn"
  - "founder asks what churn benchmarks apply to SMB vs enterprise"
  - "founder is building a customer success team and asks how to size it"
  - "founder asks whether SMB SaaS can get to 100% NRR"
  - "founder sees flat usage and asks if the customer will renew"
  - "founder is planning renewals strategy"
use_when:
  - "founder has real paying customers and at least one full renewal cycle of data"
  - "founder is trying to set NRR / GRR targets for the next year"
  - "founder is segmenting customers and needs different retention strategies by segment"
  - "founder is in the first 60 days of a new enterprise customer relationship"
  - "founder is diagnosing why churn is high in a specific segment"
fails_when:
  - "founder has fewer than ~20 paying customers and no renewals yet — not enough data"
  - "founder hasn't separated SMB from enterprise revenue — the blended number hides the truth"
  - "founder treats enterprise churn as if it's random — it isn't, and this framework won't help if you don't believe that"
  - "founder is in a true B2C / prosumer motion where Verizon-style churn dynamics apply"
related:
  - "customer-success.md"
  - "smb-vs-enterprise-segmentation.md"
  - "pricing.md"
  - "second-product-and-scaling.md"
  - "compounding-10m-to-300m.md"
---

# Churn and Net Revenue Retention

## When to Use
- You've got a year of real renewal data and want to know if your retention is actually good, bad, or fake-good.
- Your blended churn number looks OK but you suspect it's hiding something — SMB rot, enterprise quits, or both.
- A Big Customer just told you they're leaving and you want to understand what you missed and how to stop it from happening again.
- You're building or sizing a customer success team and want to know where to put the next headcount dollar.
- You're fundraising and your board is asking for NRR by segment and you don't have it.
- You're past $10M ARR in an SMB motion and you're stuck under 100% NRR. You need to decide whether it's a CS problem or a product problem.
- You just closed a $50k+ enterprise deal and want to know what to do in the first 60 days so they don't quit you in year 2.

## Fails When
- You apply blended churn targets across all segments. A $50/month SMB and a $500k enterprise account do not churn for the same reasons and you cannot run them with the same playbook.
- You're pre-renewal. You can't manage what you haven't measured. Wait until you have at least one cohort through a full renewal cycle.
- You treat enterprise churn like SMB churn — shrugging at it as "they just canceled." It's never "they just canceled" with an enterprise. They took months to quit you. You just weren't watching.
- You're in true prosumer / B2C territory where people put your tool on a personal credit card. Those dynamics are closer to Verizon than to SaaS. Different playbook.
- You use trials and POCs as part of your reported retention number. Exclude them, or the number is meaningless.

## Core Concept

Churn is not a GAAP metric. It has no universal definition. Even public SaaS companies define it differently — and some hide it in the definition. That's why the first rule of churn is: segment it, or you don't understand your business. Period.

Here's the segmentation I've run for years. **Single-seat and sub-$99/month deals: around 3% a month churn, measured by revenue.** Credit cards expire. Jobs change. Solopreneurs go under. That's inherent churn — not all fixable. **$99–$999/month credit-card deals: roughly 100% NRR after churn.** That's HubSpot, Zendesk, a lot of the middle of the market, and it's what you should target there. **$10k–$100k+ enterprise deals: 120%+ NRR.** That's the floor. If you're below that in enterprise, something's wrong. Box, Salesforce, Okta — every B2B leader that sells to the enterprise lives at 120% or higher. The best-in-class B2D (Datadog, Snowflake, Twilio at IPO) lives at 130%+, sometimes 150%+. That's not aspirational. That's the league you're in if you sell to developers.

NRR (Net Revenue Retention) and GRR (Gross Revenue Retention) are not the same number and you have to know the difference. **GRR** is how much of last year's revenue you kept, excluding any expansion — churn only, capped at 100%. **NRR** is how much of last year's revenue you kept *including* upsell and expansion from existing customers. NRR can exceed 100% — that's "net negative churn," and it's the magic of SaaS. Workday has 100% NRR but only ~95% GRR — they close the whole deal when they close it, but they leak about 5% a year. That's probably why growth slowed under 20% YoY. You want *both* numbers. GRR tells you if customers are staying. NRR tells you if the ones who stay are growing. At $100M+ ARR, your growth comes more from your base than from new bookings — 73% of Salesforce's new bookings come from existing customers. That's the whole game at scale.

Here's the part most founders miss: **Big Companies don't churn. They Quit You.** Churn is a B2C term. It sounds blameless and random. That's dangerous when you apply it to enterprise. No one at a big company *wants* to churn out of a solution they use every day, spent months deploying, trained dozens of employees on, and built into their workflows. The soft cost of ripping you out is enormous. They only do it when they have to. So when an enterprise customer leaves, it is *always* predictable, *always* preventable, and *always* your fault. They gave you 6–18 months of warning signals and you missed them — or you saw them and did nothing. 9 times out of 10, the decision to leave was made in the first 60 days of the relationship. That's why the first 60 days is when you win or lose the renewal, not the last 60.

What do those signals look like? Champion turnover — your internal advocate left and you didn't jump on it. Stakeholder turnover more broadly — the VP who signed the deal is gone and you never mapped the broader stakeholder graph. Usage plateauing while the customer expected it to grow. Silent satisfaction — the customer who never complains and is also never delighted. Budget cuts or a restructuring you hear about secondhand. Competitor activity — they're going to your competitor's events, dinners, webinars. Missed QBRs or check-ins they used to attend. Any one of these is a flag. Two or more, and you're losing the account — you just don't know it yet.

## How to Apply

1. **Segment churn into at least three buckets immediately.** Single-seat / sub-$99 a month, $99–$999/month credit-card deals, and $10k+ enterprise deals. Three buckets, three churn rates, three NRR targets, three playbooks. Anyone who reports a single blended NRR number does not understand their own business.

2. **Set segment NRR targets, not a blended one.** SMB floor: 100% NRR after you're past $10M ARR. Mid-market: 105%+. Enterprise: 120%+. Best-in-class B2D and developer-focused products: 130%+. Anything less and you're leaking money faster than you're compounding it.

3. **Track GRR and NRR separately.** Every month, every board deck. GRR tells you whether customers stay. NRR tells you whether the staying ones expand. Workday-style dynamics — strong NRR masking 95% GRR — will catch you if you don't split them.

4. **For every big customer, within 24 hours of signing, assign a churn risk score.** Low, medium, high. Do it as a three-person call — you, VP Sales, VP Customer Success. You'll *know*. Some are buying a product that isn't quite there yet. Some don't have exec support. Some are a glorified pilot dressed up as a production deal. Some have a use case that's a stretch. Write it down. Review the list monthly.

5. **Structured customer check-in at Day 60 after go-live. Non-negotiable for any $50k+ deal.** That's the Peter Gassner / Veeva pattern and it works. By Day 60, you'll know whether the deployment is succeeding or failing. If it's failing, you can still save them. By Day 365? Odds are close to zero. 9 times out of 10, the quit decision was made in the first 60 days.

6. **Map every stakeholder. Not just the champion.** Gary in finance got the deal done. So what? Gary may not be here in a year. Gary's boss may prefer a competitor. The actual budget holder may be another VP entirely. Get to know all of them. At minimum, the champion, their boss, the budget owner, and one user leader. Ideally by name, ideally in person.

7. **Segment churn by reason, not just by segment.** Product gaps. Relationship / champion change. Pricing. Competitive loss. Company shutdown. Consolidation. Strip out the unmanageable (company went under, got acquired and consolidated) from the manageable (product gaps, CS coverage, pricing objection). Attack the manageable ones first — that's where the fix lives.

8. **Separate inherent churn from fixable churn.** In SMB, about 3% a month is inherent — credit cards expire, businesses go under, jobs change. That's not your fault. Everything above that is fixable. Don't conflate the two. And don't use "inherent" as an excuse for sloppy retention work.

9. **Over-invest in Customer Success for your top 20% of revenue.** That's where 80% of the money is. Senior, experienced CSMs. Quarterly on-site visits for top customers. 2x-a-year CEO/founder-level visits for your biggest accounts. Yes, on a plane. "I never lost a customer I actually visited" — that's not a joke, it's mostly true.

10. **Build the onboarding for retention, not for activation.** Most teams build onboarding to show the product works. The right way is to build onboarding so the customer is locked in by Day 60 — a real deployment, real use cases live, stakeholders engaged, success criteria written down. If your activation rate is below 90% on your target ICP, that's where most of your future churn is hiding.

11. **For SMB: if you're stuck under 100% NRR, the answer is usually more product, not more CS.** HubSpot got from 60% to 100% NRR by going multi-product — marketing automation, then CRM, then the whole stack. MangoMint got to 110% by building an OS for salons — bookings plus payments plus payroll. Toast did the same for restaurants. You can drive down churn with better onboarding and CSMs, but to cross 100% NRR in SMB you usually need to become the core system, not a feature.

12. **Run a monthly cross-functional Lost Deals / Lost Customers review.** Not just sales. Product, engineering, success, marketing. Everyone should know why you lost. Most startups don't do this. It's the single highest-ROI meeting you can add.

13. **Track champion change as a first-class event.** When a sponsor leaves, your odds of non-renewal jump. At SaaStr, when a CMO leaves at a sponsor, there's more than a 50% chance they don't renew. At Adobe Sign / EchoSign we saw the same pattern. Jump on it within a week — new intro, new relationship, re-sell the value.

14. **Watch usage trajectory, not usage level.** Flat usage is a flag. A customer using you heavily but not growing use is going to evaluate the market. The less your product is used, the more at risk you are — period. Even high-NPS products with low daily usage churn. There's nothing easier to cut from a budget than a product nobody uses.

15. **Audit first-60-days rigor on every new enterprise customer. Every single one over $50k.** Did the structured check-in happen? Did someone actually go on-site? Did the champion respond? Is the deployment live? If not, the clock is ticking. That's your renewal, lost in the first 60 days, and you won't know it until month 11.

## Signature Numbers

- **~100% NRR** — the floor for SMB SaaS after $10M ARR. You can hit it. HubSpot, Shopify, Bill.com all got here.
- **~3% a month** — inherent churn in single-seat / sub-$99 SMB. Not all fixable. Plan for it.
- **100% NRR** — what $99–$999/month credit-card deals should deliver. HubSpot, Zendesk, and most of the middle of the market sit here.
- **120%+ NRR** — the enterprise floor. Okta, Medallia, Qualtrics, Veeva all run here or above.
- **130%+ NRR** — best-in-class, especially B2D. Asana, Fastly, Smartsheet at IPO.
- **140–170% NRR** — Zoom, Slack, Datadog, Snowflake, Twilio at IPO. The elite.
- **98–99%** — ServiceNow's customer retention rate. That's what enterprise churn looks like when you actually do this right.
- **73%** — share of Salesforce's new bookings coming from existing customers. At scale, NRR *is* the business.
- **60 days** — the window in which 9 out of 10 enterprise quit decisions are actually made.
- **3–5 years** — how long an enterprise customer plans to stay when they sign. Don't blow it.
- **$50k+ ACV** — the threshold above which every single customer deserves a structured 60-day check-in and a named CSM.
- **120% NRR** — doubles revenue in 5 years with zero new customers. 110% doubles in 8. 100% is flat forever. That's the math.

## Examples

**Situation:** An SMB SaaS founder at $8M ARR is reporting 92% NRR blended. Growth has slowed from 120% YoY to 60%. Board is pushing to hire more CSMs to "fix churn."
**Application:** First: segment. Pull the NRR by ACV band. It turns out the solopreneur tier (sub-$99/month) is running 80% NRR — normal-ish, some of that is inherent, the rest is activation. The $299/month tier is 95%, which is where the hemorrhage is. The $1k+/month tier is at 110%. Hiring CSMs for the sub-$99 tier is insane — the unit economics don't support it, and most of that churn is inherent. The real fix is on the $299 tier: tighter onboarding, better activation (it's currently 72% — that's where future churn lives), and probably a second product to drive NRR up through upsell. Hiring CSMs without fixing activation is setting money on fire.
**Result:** Founder stops the CSM hiring plan. Invests instead in activation — hits 88% activation on the $299 tier in two quarters. Launches an adjacent module for the top half of that tier. NRR moves from 95% to 104% on that segment in 12 months. Blended NRR crosses 100% for the first time. Growth reaccelerates.

**Situation:** Enterprise SaaS founder at $25M ARR. A $400k ACV customer just churned out at renewal. Founder is shocked. "They never complained. Usage was fine." Founder wants to blame "competitive pressure."
**Application:** It wasn't competitive pressure. Big companies don't churn — they quit you. Work the timeline backwards. When did the champion change? (It was 9 months ago — and no one was assigned to rebuild the relationship.) When was the last on-site visit? (14 months ago.) When was the last QBR? (They canceled the last two, and no one escalated.) What was usage doing? (Flat for 8 months — CS logged it as "steady" instead of flagging it.) Were there 3+ stakeholders mapped? (No — only the original champion.) So: champion lost, no on-site, two missed QBRs, flat usage, no stakeholder map. Five flags, 9 months of warning, and no one on the team called it. This was a foregone quit by Month 3 of the renewal year.
**Result:** Founder runs a post-mortem for the whole company. Institutes the four rules: every $50k+ customer gets a named CSM, a 60-day structured check-in, a quarterly on-site, and a living stakeholder map. Institutes a monthly high-risk review where the VP CS, VP Sales, and founder rate the top 40 accounts. Next year they save two accounts that would have quit the same way. GRR improves from 88% to 94%. NRR crosses 120% for the first time.

**Situation:** Developer-tools founder at $15M ARR reports 108% NRR and thinks they're doing great.
**Application:** Not great. For B2D, 108% is weak — best-in-class is 130%+. Pull the expansion data: are existing customers growing seat count or usage? If not, you have a product problem — your developers aren't pulling adoption through their organization. This is where you need to invest: product features that expand naturally (more APIs, more integrations, more seats), plus a CS motion that drives team-wide adoption. Don't settle. Developer products with true PMF run at 130–150% NRR because usage compounds organically inside the customer. If yours doesn't, the stickiness is weaker than you think.
**Result:** Founder invests in in-product expansion mechanics (admin dashboards, team analytics, usage-based pricing tier) and a CS motion focused on driving developer adoption beyond the initial team. NRR climbs from 108% to 125% over 18 months. The product is now actually what the NRR said it was.

## Anti-Patterns (tactical)

**Don't: Report a blended NRR number.**
*Why:* It hides everything that matters. SMB churn and enterprise churn are different physics. A healthy blended 108% can be a 120% enterprise on top of an 85% SMB — and the SMB is quietly rotting the base. Split the number by segment. Always.

**Don't: Treat enterprise churn as random or "bad luck."**
*Why:* It isn't. Big companies take months to quit you. The decision is almost always made in the first 60 days. If an enterprise customer left and it "surprised" you, you weren't paying attention. Run the post-mortem. The signals were there — champion change, missed QBRs, flat usage, no stakeholder map. Find the signal you missed so you don't miss it again.

**Don't: Include trials and POCs in your reported retention number.**
*Why:* You're fooling yourself and the board. Trials convert at some rate, and that rate is not churn. Segment them out, report them separately, and don't count the revenue as ARR until the trial converts. Otherwise the number is meaningless and usually flattering.

**Don't: Use "inherent churn" as an excuse.**
*Why:* Yes, about 3% a month in SMB is inherent. That's the floor. Everything above it is fixable. Teams that lean on "inherent churn" as a shrug usually have 6–8% monthly churn and are calling it unavoidable. Attack the fixable part — onboarding, activation, CS coverage, pricing — before you accept any number as inherent.

**Don't: Staff Customer Success evenly across the base.**
*Why:* Your top 20% of customers make 80% of your revenue. Put senior, experienced CSMs there with real coverage. The long tail gets pooled coverage, tech-touch, and automation. Staffing evenly means your biggest accounts are under-served and your smallest ones are over-served. Reverse the ratio.

**Don't: Assume high usage equals healthy renewal.**
*Why:* Usage can mask churn. A customer using you heavily while also evaluating a competitor will churn. A customer using you heavily but whose champion just left will churn. A customer with flat usage for 8 months will churn. Stakeholder health beats account health. Solution adoption beats product adoption. Don't run the health score off usage alone — it's a lagging indicator of the real signal, which is the stakeholder relationship.

**Don't: Try to fix SMB NRR with more Customer Success alone.**
*Why:* In pure SMB, you can push onboarding and activation to the limit and still not cross 100% NRR — because there isn't enough to upsell. The fix at scale is almost always more product. HubSpot needed marketing automation and CRM. Toast needed payments and payroll. MangoMint needed a whole OS. If you're stuck under 100% in SMB after you've fixed onboarding, that's product telling you something.
