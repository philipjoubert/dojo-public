---
triggers:
  - "founder asks how to structure their first sales team"
  - "founder asks what their first sales comp plan should look like"
  - "founder asks whether to hire an SDR/BDR"
  - "founder asks how to assign leads across reps"
  - "founder says their sales team isn't performing"
  - "founder says they need to hire more reps to hit the number"
  - "founder asks about quota — how much, when, how to ramp"
  - "founder asks whether to split SMB from enterprise"
  - "founder asks whether they need a sales playbook"
  - "founder describes hiring reps and all of them missing plan"
use_when:
  - "founder is at $1M–$10M ARR operating a 2–10 person sales team"
  - "founder is designing the first sales comp plan or quota structure"
  - "founder is deciding when to add an SDR, a sales manager, or a second segment"
  - "founder is diagnosing why new bookings are flat despite more reps"
fails_when:
  - "founder is pre-$1M ARR with zero reps — that's founder-led sales, not team building"
  - "applied to the VP-hiring decision itself — that's its own topic"
  - "applied to individual rep hiring interviews — that's its own topic"
  - "applied to a pure PLG motion with no human sales layer at all"
related:
  - "founder-led-sales-lifecycle.md"
  - "hiring-vp-sales.md"
  - "hiring-sales-reps.md"
  - "hiring-vp-marketing.md"
  - "lead-velocity-rate.md"
  - "smb-vs-enterprise-segmentation.md"
---

# Sales Team Building

## When to Use
- You have 2–10 reps and you're trying to figure out the operating system — comp, quota, territories, specialization.
- You're about to write your first real sales comp plan and you don't want to just copy Salesforce's. (Don't. It won't work.)
- You're missing plan and your instinct is "hire more reps." Before you do that, check if it's actually a sales problem.
- You're deciding when to add your first SDR, your first sales manager, your first enterprise rep.
- Your reps are drowning in leads, or starving for leads, and you don't have an SLA.
- You're about to split your team SMB vs. Mid-Market vs. Enterprise and you don't know when's too early.
- You've got a sales playbook that lives in someone's head and you're about to hire rep #5.

## Fails When
- You apply this before you've personally closed 10–20 deals. You don't have a team-building problem — you have a founder-led sales problem. Go close deals.
- You have one rep and you're trying to optimize team structure. There is no team. Hire a second rep first.
- You're pre-$1M ARR and trying to build comp plans that'll work at $10M. They won't. Comp plans have a stage.
- You're applying this to solve a fundamental demand problem. If leads aren't coming in, no team structure on earth will fix it. That's marketing.
- You're mechanically copying what Stripe or Salesforce does at $1B. Their playbook is for a company 100x your size. Use it and you'll have your own Year of Hell.

## Core Concept

Here's the single most important thing I can tell you about scaling a sales team: **what you think is a sales problem is almost always a marketing problem.** I see it constantly. Founder at $40k MRR, closing 5 new customers a month, says "I need to hire more reps." We dig in. 100 sign-ups, 50 MQLs, 20 SQLs, 10 of those can actually use the product, they close 5. That's a 50% close rate with a 30-day cycle. That's not a sales problem. That's world-class sales with not enough leads. Hiring three more reps won't add revenue — it'll just add cost and starve everyone. You need a head of demand gen, not a sales team. Burn this into your head before you do anything else: when the numbers are off, first ask whether your reps' calendars are full. If they're not, you don't have a sales problem.

Now, assuming you actually have a sales problem — enough leads, reps not closing them — here's the operating model. You're going to specialize. You want qualifiers qualifying (BDRs), openers opening (SDRs), closers closing (AEs), retainers retaining (CS), and upsellers upselling (AMs). Generalists almost never win at scale. Most sales pros are only really good at one piece of the motion. Ask them to do all five and they'll do all five badly. You can't specialize with 2 reps — you'll do it around reps 4 or 5, around $2M ARR. That's when the gains start compounding. Okta crossed $2.5B in ARR and still split their SMB team in half to specialize harder. Earlier is better. If you're waiting until $20M to segment, you've waited too long.

And the comp plan. Do not copy a BigCo comp plan. Do not. I did that at EchoSign and it cost us a Year of Hell — revenue per lead dropped 50%+. A BigCo comp plan (big base, 8–10% commission, high quota, hand-off after close) works when you're Fortune 500 and sales is a cost center. At a startup, sales has to be a profit center. The plan I want is simple: competitive base, but you cover it before any bonus — no commission until you've paid back your fully-loaded salary that month. Then you pay 20–25% of ACV commission, uncapped, with one accelerator (cash up front, or beating plan). That's it. No decelerators. No mystery-meat micro-incentives. The sky's the limit for A-players. The mediocre ones self-select out because their base stays flat. And as a founder, you know exactly what sales costs you: 20–25% of ACV, all-in. No black holes. That's epic.

One more thing on reality. The top 10% of reps close 65% of the revenue. The bottom 50% close 7.6%. Clari pulled that across 10 million opportunities and it matches what I've seen at every company I've been at and almost every SaaStr Fund portfolio company. So your team structure, your lead allocation, your quota design — all of it has to assume most of your revenue will come from a few A-players. That's why reps-you-wouldn't-buy-from is a fatal early hire. That's why giving mediocre reps "another quarter" is a hidden tax. That's why you specialize. That's why great reps need to be driving Tesla Plaids, not wearing Panerai watches. Build the team around the fact that talent is log-normal, not normal.

## How to Apply

1. **Before you hire another rep, do the marketing math.** Walk the funnel: sign-ups → MQLs → SQLs → qualified-and-deliverable → closed. Calculate close rate from the "qualified AND deliverable" step. If it's above 20–30%, your reps are fine. Hire a head of demand gen before you hire another AE. If your reps' calendars aren't truly full, more reps is the wrong answer. Say it out loud: "This is probably a marketing problem."
2. **Hire 2 reps first. Never 1.** One rep is uninterpretable — you can't tell the rep apart from the lead mix, the product, or luck. Two reps is an A/B test. Everything downstream — comp design, quota setting, playbook refinement — assumes 2 reps. This is the foundation.
3. **Write the first comp plan in one page, with 1 accelerator.** 50/50 base/variable. OTE should land at the market rate for your ACV segment — competitive, not cheap. Monthly: no commission until the rep has closed enough ACV to cover their fully-loaded base + benefits for that month. Above that line, 20–25% of ACV, uncapped. One accelerator — either cash-up-front deals or beating plan. That's it. If your comp plan can't fit on one page, it's wrong.
4. **Set quotas at 3x–5x OTE.** SMB-velocity reps closer to 3x. Enterprise reps closer to 5x. So a $120K OTE rep needs to be able to close $360K–$600K to break even economically; plan for them to hit $480K–$600K at steady state. At scale, push AEs toward $2M ARR each — that's where the best inside sales teams land. Great teams go higher.
5. **Ramp to full quota over 2 sales cycles — not 1, not 4.** One cycle is too tight (they can't possibly ramp). Four is too soft (mediocre reps will hide). I tell founders: pay 100% of year-1 ACV as commission for the first 90–120 days if you have to, just to keep them in the game. Then step down to the full plan. Expect points on the board by end of cycle 1, plan hit by end of cycle 2. If not, it's wrong fit.
6. **Round-robin leads until you have 4+ reps. Then segment.** Round-robin is boring but it's the only way to learn. Everyone on the same playbook, same lead quality, so you can compare. Around rep 4 or 5, start splitting by company size — Small, Medium, Large. That's usually where velocity economics diverge enough to matter. Later, segment by industry and vertical where it's worth it.
7. **Put an SLA on every lead. This is the #1 lead-ops move.** Any lead not followed up within 2 hours gets taken away and reassigned to the newest rep. Any lead untouched in 2 weeks gets taken away. This single rule will raise your revenue per lead 10–20% because it rescues the B-leads that your top reps ignore. No SLA = leaks everywhere.
8. **Wait on the SDR layer until you have real lead volume.** SDRs only make sense when there's a meaningful funnel to work — inbound you're not responding to fast enough, or outbound patterns you've proven can convert. Don't hire an SDR to manufacture demand that doesn't exist. Ratio-wise, plan 1 SDR per 1–2 AEs inbound, more outbound. And the 2025 data is clear: SDR teams are shrinking — AI is doing more of the top-of-funnel. Don't over-hire SDRs.
9. **Segment SMB from Enterprise by $2M–$5M ARR, not later.** SMB and enterprise are different jobs. Different deal sizes, different cycles, different buyer personas, different reps. Enterprise reps quota higher ($600K–$1M+), SMB reps close more deals smaller. Trying to make one rep do both means they do both badly. Split the teams, split the comp plans, split the playbooks.
10. **Document the playbook before rep 5. The first 2 can learn by osmosis. Reps 3–10 cannot.** Write down: ICP (who you sell to, who you don't), disqualification criteria, demo script, top 10 objections and the best answers, pricing guardrails, discount authority, handoff to CS. Keep it simple. Update it monthly. If it's not in the CRM, it doesn't exist. Train new reps against it in week 1. Don't abandon them to figure it out themselves.
11. **Add a sales manager (Director of Sales) at 8 AEs. A second VP tier at 30–50 reps.** These are the structural break-points. 1 Director per 8 AEs, 1 Director per 10–12 SDRs. 1 VP per 4–5 Directors. Sales Engineer per 8–10 AEs once the product has any technical depth. Sales Ops hire as early as rep #10. These ratios are stable across almost every SaaS company I've seen. Plan them into your budget, don't improvise them.
12. **Expect a heavy-tailed quota attainment distribution. Plan for it.** Top 10% closes 65%+ of your revenue. Bottom 50% closes under 10%. This is normal. Don't try to "fix" it by lowering quota for the bottom — you'll just slow the top. Top reps should hit 150%+ (ride the accelerator). Bottom reps at 30% are a signal: PIP or move on within 2 cycles. 80% of reps hitting plan is a healthy, well-managed team. Anything lower, either the plan's wrong or the bar's wrong.
13. **Give each new rep one sales cycle to put points on the board. That's it.** In startups, reps who don't produce in cycle 1 basically never do. Some great ones crush it in week 2; some need the full cycle. But if they're giving 110% and the board is still blank after a full cycle — it's wrong fit, not wrong timing. Move on. Your lead supply is too precious to burn on a no.
14. **Listen to 5–10 rep calls a week, personally. Even at $10M ARR.** Gong, Chorus, whatever. You will be shocked at what's happening in those calls. Objections being mishandled, pricing being left on the table, customers being rushed, discovery being skipped. You can fix half of it just by hearing it and coaching. This is the cheapest sales productivity tool on earth and 90% of founders skip it.
15. **Never cap commission. Ever.** If a rep closes $5M in a year and makes $1M, celebrate. That means you made $4M. A capped plan tells your best reps they should leave, and they will. The only thing a cap buys you is watching your A-players walk into your competitor's arms.

## Signature Numbers

- **50% close rate from qualified-and-deliverable SQLs** — that's the benchmark that tells you it's a marketing problem, not a sales problem.
- **2 reps minimum.** Always two. One teaches you nothing.
- **25+ qualified leads a month** — the threshold where founders start losing capacity and reps actually help.
- **$2M ARR** — the threshold where you start specializing the team. Don't wait until $20M.
- **20–25% of ACV, all-in** — total sales comp cost at scale. That's your unit economic ceiling. BigCo plans cost about the same but waste it on the mediocre.
- **3x–5x OTE** — rep quota at scale. SMB 3x, Enterprise 5x.
- **$2M ARR per AE** — the quota target great inside-sales AEs hit at scale. Top teams go higher.
- **2 sales cycles** — time to ramp a rep to full quota. One cycle to prove they can close. Two to hit plan.
- **Top 10% = 65% of revenue. Bottom 50% = 7.6%.** (Clari, 10M opportunities.) Build the team assuming this is your distribution.
- **150%+** — what top reps hit at. **30%** — what bottom reps end at. **80%** — what a healthy team's plan-attainment rate should look like.
- **1 Director per 8 AEs. 1 Director per 10–12 SDRs. 1 VP per 4–5 Directors.** The Rules of 8. Everywhere.
- **Sales Ops hire by rep #10.** Don't wait.
- **2-hour SLA on leads. 2-week re-assignment rule.** The single biggest lead-ops lever.
- **36% of B2B companies cut SDR headcount in 2025.** The days of SDR armies are over. AI is doing more of the top-of-funnel. Plan smaller, smarter SDR teams.

## Examples

**Situation:** Founder at $1.8M ARR with 3 AEs, all missing plan. Instinct is to "hire 2 more reps to hit the number this year." New bookings have been flat for 4 months. Pipeline looks "okay." Each rep is doing about 6 demos a month.
**Application:** Don't hire the reps. First do the marketing math. 6 demos a month per rep, 3 reps = 18 demos a month across the team. For reps paid to close, that's starvation volume. Their calendars aren't full. Adding 2 more reps just splits the same 18 demos 5 ways — now everyone's at 3–4 demos, and no one hits plan. This is a marketing problem, not a sales problem. Go hire a Head of Demand Gen. Work the funnel to double MQLs in 6 months. Only then add reps. Also put a 2-hour SLA in place this week — I'll bet you're losing 20% of inbound to slow follow-up.
**Result:** Founder pauses the rep hires, brings in a Head of Demand Gen, tightens the SLA. 90 days later demo volume is up 70%, close rate steady at 25%, and the existing 3 reps all hit plan. Adds 2 more reps at month 5 with full calendars on day one.

**Situation:** Founder at $3M ARR, 4 AEs, all generalist — each rep handles outbound prospecting, inbound qualification, demo, close, and renewals for their own book. They're exhausted. Two of them just asked for a raise. Founder doesn't know where the bottleneck is.
**Application:** You've hit the generalist wall. You can't specialize with 2 reps, but at 4 AEs and $3M ARR you absolutely can and should. Split the team: hire 1 SDR to do top-of-funnel (inbound qualification and light outbound) for the 4 AEs. Move renewals to a part-time CSM or ops person. Leave the AEs doing only demos and closes. Segment leads: 2 reps take SMB (smaller, faster deals), 2 take Mid-Market. Rewrite the comp plan so closers are paid on closing, not on renewals. Put the SLA in place. Document the playbook before you add rep 5.
**Result:** 60 days later each AE is doing 2x the demos they were, close rate stable, revenue per rep up 40%. The exhausted reps stop asking for raises — they're making more money, hitting accelerators. Hires reps 5 and 6 into the now-documented playbook.

**Situation:** Founder at $4M ARR, hired a VP of Sales from a $500M ARR public company 6 months ago. VP rolled out "the BigCo comp plan" — $150K base, 10% commission, 5 accelerators, 3 decelerators, quarterly bonus. Revenue per lead has dropped 50%. Top rep just quit.
**Application:** This is literally my Year of Hell at EchoSign. The BigCo comp plan is engineered for a cost-center, brand-inbound, hand-off-after-close world. You're none of those things. It's creating all the wrong incentives: the mediocre reps are happy sitting on fat bases, the top reps aren't paid enough for the hustle, and the accelerators are so complex no one can figure out why they'd push for the extra deal. Rip it up. Rewrite to the simple plan: competitive base, but you cover your fully-loaded cost each month before any commission. Then 20–25% of ACV, uncapped. One accelerator (cash-up-front, say). Monthly payout. Pay the top rep what you would have paid them under the new plan this quarter, retroactively — buy trust back. And own that this is on you for copying a playbook from a company 100x your size.
**Result:** Top rep stays after seeing the new plan and the retro check. Within 2 quarters, revenue per lead recovers. Two mediocre reps self-select out (their base is no longer carrying them). Replaces them with 2 hungry reps. Sales becomes a profit center again.

## Anti-Patterns (tactical)

**Don't: Hire more reps when the real problem is not enough leads.**
*Why:* This is the single most expensive mistake I see. Founder thinks "the reps aren't hitting plan, we need more reps." But the reps are starving — calendars half-empty, SQLs thin, waiting. Adding reps divides the same lead pie into smaller slices. Now everyone's underperforming, your burn is way higher, and you're no closer to growth. Before any rep hire, walk the funnel. If the close rate from qualified-and-deliverable is 20%+ and the calendars aren't full, it's marketing. Hire a demand gen leader, not another AE. When in doubt, the problem is marketing, not sales.

**Don't: Copy a BigCo comp plan (Salesforce, Datadog, Workday, etc.).**
*Why:* A BigCo plan is engineered for a mature, brand-driven, cost-center sales org at $500M+ ARR. It's got big bases, low commission rates, high quotas, lots of micro-incentives. At a startup, every lead is precious, every rep matters, and sales has to be a profit center. Copy the BigCo plan and the mediocre reps get comfortable, the top reps feel cheated, the accelerators confuse everyone, and revenue per lead tanks. Use the simple plan. Competitive base, pay back base with closed revenue before commission, 20–25% of ACV, one accelerator, uncapped. Your CFO will know exactly what sales costs; your top reps will get rich; the mediocre will leave on their own.

**Don't: Stack crazy accelerators, decelerators, and SPIFFs into the comp plan.**
*Why:* Too many goals = no goals. Sales reps optimize around whatever's simplest to understand and hit. If you've got 5 accelerators and 3 decelerators, reps will pick the 1 they like and ignore the rest — and you'll have no idea which lever actually moves behavior. One accelerator, max. Keep it simple enough a new rep understands it on day 1. If you need complexity to fix a behavior problem, you've got a bigger problem — probably the wrong rep, or a broken ICP.

**Don't: Cap commission — ever, for any reason.**
*Why:* A cap on commission is a sign you're telling your best reps to leave. It says: "We don't actually believe sales is a profit center." If a rep closes $5M and makes $1M in commission, that's a good problem. The company made $4M. Celebrate it. The second you cap, your top reps start looking — and they're the 10% closing 65% of your revenue. Losing them costs more than any "overpaying" ever could. Uncapped. Always.

**Don't: Keep underperformers around for "another quarter."**
*Why:* In a startup, reps who don't put real points on the board in their first sales cycle almost never do. Every lead they burn is a lead your A-player didn't get. Every month you delay firing costs you twice — once in the underperformer's salary, once in the leads they wasted. Decide fast: points on the board in cycle 1, plan hit in cycle 2, or move on. "Giving them more time" is almost always founder conflict-avoidance, not actual coaching. The team knows anyway. Fire the bottom fast; the rest of the team will respect you more.

**Don't: Wait until $10M or $20M ARR to specialize.**
*Why:* Generalist reps scale badly past $2M ARR. Every rep doing outbound, qualification, demo, close, and renewals means no rep is actually great at any of them. You leak revenue at every handoff that doesn't happen. Okta is over $2B ARR and just split their SMB team further because specialization still pays. Start specializing at $2M ARR: SDR/BDR for top-of-funnel, AE for closes, CS for retention, sales ops as early as rep 10. Earlier is better. The Rules of 8 (1 manager per 8 reps) start mattering fast.
