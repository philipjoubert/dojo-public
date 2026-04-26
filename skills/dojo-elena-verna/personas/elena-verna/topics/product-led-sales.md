---
triggers:
  - "user has PLG motion and is debating whether to add sales"
  - "user says their VC is pushing them to hire sales"
  - "user wants to know when to hire their first AE"
  - "user sends every freemium signup to sales and sales says the leads are trash"
  - "user asks about PQA / PQL / product-qualified account scoring"
  - "user is drowning in self-serve users but generating no sales pipeline"
  - "user has internal channel conflict between self-serve and sales"
  - "user asks about outreach — who to contact, when, on what channel, with what message"
use_when:
  - "you already have a working PLG/self-serve motion and want to capture enterprise revenue on top"
  - "customers are organically asking for enterprise offerings — the only signal that really matters"
  - "you need a qualification system because sales thinks freemium signups are garbage leads"
fails_when:
  - "you don't have PLG yet — PLS sits on top of PLG, not instead of it"
  - "you're hiring sales to create pipeline from scratch (sales kills PLG if it has to hunt)"
  - "AOVs are below $10K — self-serve should scrape these efficiently"
related:
  - "reverse-trial.md"
  - "pricing-monetization.md"
---

# Product-Led Sales

## When to Use
- You have a working PLG motion. Self-serve activates, engages, and monetizes. Usage is real. *Now* you're ready to talk about sales.
- Customers are organically asking for enterprise offerings. They're reaching out via support, social, direct emails, asking about enterprise contracts and purchase orders. This is the golden goose signal. Pay attention to it — it's the only one that really matters.
- You have AOVs that can support human sales involvement (~$10K+). Below that, sales math doesn't work and self-serve should scrape it up.
- Organic expansion is showing up in a segment you haven't served well — usually enterprise (1,000+ employees) — and you need sales to unlock it.

## Fails When
- **You don't have PLG yet.** Product-led sales is sales *on top of* self-serve. Without self-serve activation generating usage signals, there is nothing to qualify, nothing to route, nothing to trigger. It's just sales-led sales with a fancier name.
- **You hire sales to generate pipeline from scratch.** You will end up with one frustrated AE you'll part ways with in under 2 years, and a signal-to-noise ratio in your CRM that Sales will correctly label as garbage. Don't hire sales before you have clear visibility of where their pipeline comes from.
- **You switch from PLG to sales-led.** Don't do it. You are layering, not pivoting. "Switch" and "pivot" are wrong-vocabulary words here. Companies that pivot from PLG to sales kill their end-user funnel, watch pipeline dry up (because pipeline was built on PLG!), panic, try to re-ignite PLG, and discover a competitor has taken their lunch.
- **Your VC told you to.** Your VC does not know when to add sales to your PLG. They know when it would make their fund feel good.

## Core Concept

Here's the reality of B2B in 2026: PLG is a superpower for getting in the door and capturing individual and team value. Sales is a superpower for closing the 6- and 7-digit contracts that make public markets take you seriously. You need both. The question is never "PLG or sales?" — that's a crap question, the whole framing is wrong. The question is *when and how to layer sales on top of PLG*.

The way PLG companies die is with amnesia. They crush PMF with PLG, close their first $100K deal by leveraging end-user champions, then suddenly forget where that deal came from. VC is thrilled. Leadership questions whether PLG matters. They chase sales contracts, end-users leave, pipeline dries up (because pipeline was built on PLG usage!), they try to reignite PLG but it's too late — a competitor has entered the gap. Don't do that. **Add** sales. Don't switch to sales.

The mechanics: in PLS, end-user usage is the *basis* for pipeline creation. In top-down sales, usage is the *goal* after a contract closes. That's the inversion. Product creates pipeline via usage signals. Sales closes the big deals on top. Product is accountable for pipeline — yes, product, not marketing; making marketing accountable for PLS pipeline is a recipe for disaster within six months. And an end-user is *not* a lead. Pitch-slapping every freemium signup is the fastest way to teach your AEs that product leads are garbage and kill the motion before it starts.

The framework to run a clean PLS motion has four parts — the **Four W's**: When, Who, Where, What.

**When** — the trigger events that say an account is ready. Product usage signals: volume, velocity change, feature breadth, product errors (errors are fantastic triggers, because they create an opportunity for sales to solve the problem and build relationships). Behavioral signals: pricing page visits, economic buyer signup (never miss a CISO creating an account!), admin activity, social/community engagement. Don't overcomplicate — most often, an account hitting overages or reaching 5–10 users is good enough to start.

**Who** — end-user, champion, or economic buyer. Self-serve usage is full of end-users and champions; economic buyers are rare. Sales teams are trained to talk to economic buyers. If you flood them with end-users labeled as "leads," sales will correctly conclude your motion is broken. Create a "champion" lead type and give sales the context: title, role, product interactions, account-level details. Champions can't buy but can influence. Treat them as partners to sales, not leads.

**Where** — channel matches persona. End-user: email, in-product, community. Champion: email, in-product, community, social. Economic buyer: email, social, events. LinkedIn and product chat for inbound conversations are incredibly powerful and often overlooked — I personally bought $24K of Drift software over chat and it felt magical.

**What** — personalized, value-driven, action-oriented. Personalize at the account level at minimum (reference volume, velocity, feature usage); at the individual level where you can (a pain they posted publicly, a pull request, a community question). Value beyond self-serve: enterprise features, prioritized support, services, helping the champion find the economic buyer. Action: offer an enterprise trial, not **"15 minutes of their time"** — that's not an ask, that's noise. Teams leading with specific value tied to a prospect's shared pain see 20–30% more meetings booked than generic outreach.

Getting to these four requires a **PQA score** (Product Qualified Account) — a simple 1–100 scale across volume, velocity, breadth, and behavioral triggers. Calculate daily. Set a threshold (80+ is a good starting place) for sales routing. Pro tip: don't overcomplicate things. An account hitting overages or 5–10 users is good enough to get started. Start with one signal, get it flowing reliably, then expand. Companies succeed with 3 tools more often than they fail with 12.

Finally: PQLs (Product Qualified Leads) are the *people* within the account with buying power. Most self-serve users aren't enterprise buyers. The big unlock: (1) is the account in PQA territory? (2) is an economic buyer present? If yes to both, deploy sales. If account is in PQA but no buyer, deploy customer success / white-glove engagement to surface one. If neither, ABM and prospecting.

## How to Apply

1. **Verify PLG is working before touching sales.** Activation is real. Users are hitting aha moments. Monetization is working at the self-serve tier. If any of these is broken, sales doesn't fix it — sales papers over it until the cracks show up as churn. You're not ready until self-serve revenue is at or above ~$1M ARR and usage signals are clean enough to qualify accounts on.

2. **Wait for the real signals before hiring sales.**
   - Gold: customers organically asking for enterprise. They're emailing support, DMing on social, asking about POs and enterprise contracts.
   - Amber: traction in a usually-sales-driven segment (1,000+ employee companies). Read this carefully — traction in enterprise doesn't automatically mean you've earned the right to sell enterprise. You need intra-team network effects (like Slack: I benefit when the whole company uses it) and a differentiated enterprise offering *on top of* PLG.
   - Red: your VC told you to.

3. **Build the PQA score.** Start with one signal — usually "account hit usage overage" or "account has 5–10 users." Calculate daily. Set a threshold (80+ on a 1–100 scale is a reasonable start). Route accounts above the threshold to sales. Keep accounts below it in self-serve. Evolve the score over time as you learn which signals correlate with actual closes. Don't build a 40-variable ML model in week one — start embarrassingly small and get one thing flowing.

4. **Apply the Four W's to every outreach.**
   - **When:** account crosses PQA threshold or hits a specific trigger (overage, 5+ users, pricing page visit, economic-buyer signup). Monitor daily. First contact unfruitful? Don't give up — continuous evaluation surfaces future opportunities.
   - **Who:** identify end-users, champions, economic buyers separately. Create a "champion" lead type in your CRM. Arm sales with account-level context (how many champions? what teams represented?).
   - **Where:** match channel to persona. Execs on LinkedIn, ICs in email and in-product, champions everywhere.
   - **What:** personalize at account level minimum, at individual level where you can. Lead with pain the prospect has publicly shared. Offer an enterprise trial, not a 15-minute meeting.

5. **Install the four guardrails against channel conflict.**
   - **Sales floor:** minimum contract size sales can close. Typical floors: $5K–$60K. Below the floor, self-serve scrapes it up — don't let sales "close" small deals.
   - **Minimum upsell multiplier:** if a customer moves from self-serve to sales, they must land at ~1.2× their previous self-serve spend at minimum, on top of the sales floor. Otherwise sales is cannibalizing, not expanding.
   - **Quota relief for self-serve hand-offs:** give sales quota relief when they send a small customer back to self-serve. This removes the incentive to force every account into a contract.
   - **PLS first.** Start with sales expanding on top of self-serve. Only move to pure top-down after PLS is working.

6. **Compensate sales on expansion, not land.** In PLS, initial contract values are smaller than in traditional top-down because sales is engaging earlier in the problem lifecycle. If you comp on land ARR like a traditional org does, sales will over-sell the first contract and disrupt the expansion journey — which is where most of the revenue actually lives. Comp on expansion ARR. Expansion is where PLS wins.

7. **Product owns pipeline.** This is the part that breaks most orgs. Product is responsible for growing PQAs. Not marketing. Not sales. Product. Product builds the activation that generates usage. Product ships the feature walls that trigger PQA score bumps. Product owns the pipeline number alongside sales owning the close rate. If you try to put PLS pipeline in marketing's lap, it's a recipe for disaster within six months. I've seen this exact failure three times.

8. **Multi-touch, not one-and-done.** Getting real engagement requires 10+ touches across multiple channels (email, social, calls, in-product). The "send one email and land the $100K deal" fantasy is a fantasy. Clay's GTM team segments trial users at day 3 into no/low/high usage and runs different sequences per bucket. That's the baseline cadence, not the ceiling.

## Examples

**Situation:** A PLG B2B product is at $5M ARR. VC is pushing them to hire sales. The founder asks when.
**Application:** Check the real signals. Are customers emailing support asking about enterprise contracts? Is a CISO signing up? Are accounts hitting overages regularly? If yes — build a PQA score starting with one signal (overages + 5–10 users on the account). Hire one AE with explicit scope: expand on existing self-serve accounts only, no cold outbound to create pipeline, minimum contract of $15K. Comp on expansion ARR. If the signals aren't there, keep investing in PLG. Tell the VC "not yet, here's the signal we're waiting for."
**Result:** If signals are real, the first AE closes expansion deals on accounts that already have organic usage — land at $20–50K, expand into 6-figures over 18 months. Sales doesn't "feel hard" because the pipeline is pre-qualified. If signals aren't real, you save yourself a $300K mistake that would have tanked your PLG motion trying to feed a starving AE.

**Situation:** A sales-enablement SaaS is pitching every new freemium signup to AEs. Sales is complaining the leads are trash. The marketing team is confused.
**Application:** Sales is correct. New freemium signups are not leads. Rip out the MQL-every-signup pipe. Build a PQA score on the account (not the user): volume, velocity, breadth. Set a threshold (start at "account has 5+ users and has hit an overage"). Only accounts above the threshold get routed to sales. Create a "champion" lead type for passionate individual users — these go to sales as partners (to help identify the economic buyer), not as leads to pitch.
**Result:** Pipeline volume to sales drops 80%+. Pipeline quality spikes. Sales stops calling product leads garbage. AEs start closing deals. The lead-scoring pipe is now something that compounds instead of something that embarrasses the org.

**Situation:** Miro's Andrew Reese notices a cluster of users engaging with the retrospective template. Account-level usage is climbing. No one has reached out yet.
**Application:** Pull titles and LinkedIn profiles for the cluster. Reach out with a mini product session on retrospective facilitation features — not a pitch, education. Position himself as a consultant, not a salesperson. Let the conversation surface the team's goals. From there, map a path to expansion.
**Result:** Individual champions become advocates. Account expands across teams. Andrew becomes one of Miro's longest-tenured Account Managers by treating PLS outreach as value delivery, not pitch delivery.

**Situation:** A company has self-serve and sales running in parallel with no guardrails. Sales is blaming missed quota on "losing customers to self-serve." Self-serve is blaming sales for siphoning their expansion revenue.
**Application:** Install the four guardrails. Set a sales floor at $15K — sales cannot close below this. Set a 1.2× minimum upsell multiplier for self-serve → sales handoffs. Give sales quota relief for sending small customers back to self-serve. Start with PLS (expansion on top of self-serve) as the primary sales motion; pure top-down comes later.
**Result:** Finger-pointing stops because the lanes are clear. Self-serve scrapes up everything below $15K efficiently. Sales focuses on expansion, lands larger contracts, and stops cannibalizing. Channel conflict goes from a quarterly political crisis to a non-issue.

## Anti-Patterns (tactical)

**Don't:** Send every signup to sales as a lead.
**Why:** Pitch-slapping every user wastes sales time, frustrates users, and trains sales to distrust the entire product pipeline. Once an AE has called 50 freemium hobbyists in a week, they will correctly conclude the product team is sending garbage. The motion dies from there. Qualify on account, not user. Fit first, then behavior.

**Don't:** Hire sales to create pipeline from scratch.
**Why:** You will end up with a frustrated AE who sends their first 200 cold emails and gets crickets, because there's no end-user pull, no champion, no usage signal — nothing that makes PLS outreach land. You'll part ways within 24 months. If you don't have a pipeline signal, don't hire sales. Build the signal first.

**Don't:** Ask for "15 minutes of their time."
**Why:** That's the laziest possible CTA. It offers zero value and communicates you haven't thought about what the prospect would get. Offer something concrete: an enterprise trial, a workshop with their team, a technical session on a specific feature, prioritized support. Anything except "15 minutes."

**Don't:** Run PLS out of marketing.
**Why:** Marketing doesn't own product. Product owns usage. Product owns the PQA score. If PLS lives in marketing, you get a leaderboard of MQLs instead of a qualified account funnel, and sales will re-learn that product leads are garbage. Product owns PLS pipeline. Full stop. "But our product team doesn't want pipeline targets" — too bad. If they're doing PLS, they have pipeline targets. Recipe for disaster within six months if you get this wrong.

**Don't:** Comp PLS sales on land ARR.
**Why:** PLS sales engages earlier in the problem lifecycle than top-down. Initial contracts are smaller. If you comp on land, they'll over-sell the first deal to hit the number and wreck the expansion path. Expansion is where PLS revenue lives. Comp on expansion ARR so the incentive matches the model.

**Don't:** Switch from PLG to sales-led.
**Why:** You'll die. The pipeline sales needs to succeed was built on PLG usage. Kill PLG and you starve sales of pipeline inside 6 months. The mental model is *layering*, not *switching*. Keep saying "we are adding sales, not pivoting to sales." Repeat it until your board believes it.

**Don't:** Build a PQA score with 40 variables in week one.
**Why:** You will spend 6 months building a model that never ships. Start embarrassingly small — one signal, one threshold, one playbook. Account hit overage + 5 users is a perfectly good starting PQA. Wire it to the CRM. Run the play. Iterate from there. Companies succeed with 3 tools more often than they fail with 12.

**Don't:** Let sales close deals below your sales floor.
**Why:** Small deals waste sales capacity, cannibalize self-serve revenue, and train reps to optimize for volume over ACV. If a $3K account keeps buying via self-serve, that's the correct outcome — that account is being served efficiently. Sales only engages when the math justifies human involvement. Set the floor. Enforce it.

**Don't:** Skip the multi-touch sequence.
**Why:** The one-email-lands-the-deal fantasy is a fantasy. Expect 10+ touches across email, social, calls, in-product, community. If your AE gives up after two emails, they're not running PLS — they're running a spray-and-pray campaign with a product wrapper. Invest in sequence design and channel coverage.

**Don't:** Ignore economic-buyer signups when they happen.
**Why:** A CISO, VP Engineering, or Head of Procurement creating a free account is a flashing siren. Your PQA score must weight this signal heavily. Most orgs don't — they treat every signup the same way and then wonder how Figma closed a seven-figure deal by simply *noticing* that the VP Design created an account. Notice. Route. Act.
