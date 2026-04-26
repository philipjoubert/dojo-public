---
triggers:
  - "founder asks what metric to track for future revenue"
  - "founder asks why revenue is slowing"
  - "founder asks how to evaluate VP Marketing"
  - "founder describes flat growth and asks where the problem is"
  - "founder asks which single metric matters most in SaaS"
  - "founder asks how to set a lead commit or lead quota"
  - "founder is trying to decide whether sales or marketing is broken"
  - "founder asks how to predict revenue 12+ months out"
use_when:
  - "founder wants to diagnose whether sales or marketing is the problem"
  - "founder has hired or is evaluating a VP Marketing"
  - "founder is past $1m ARR with a sales-assisted motion and inbound/outbound qualified leads"
  - "founder is trying to build a weekly/monthly operating cadence around a single North Star for growth"
fails_when:
  - "lead definition is unstable month to month"
  - "founder has a pure PLG self-serve motion with no qualified-lead concept"
  - "volume of qualified leads is still too small to be statistically meaningful (e.g. <20 a month)"
  - "lead scoring doesn't exist yet — there's no way to filter a lead from a contact"
related:
  - "hiring-vp-marketing.md"
  - "hiring-vp-sales.md"
  - "pmf-signals.md"
---

# Lead Velocity Rate (LVR)

## When to Use
- You're past initial traction (roughly $1m ARR) and want one number to run marketing against.
- Revenue looks fine this quarter but you want to know what next year looks like.
- Revenue is slowing and you can't tell whether the problem is sales, marketing, or product.
- You're interviewing or evaluating a VP of Marketing and want to know what to hold them to.
- Your board is asking "how do you know you'll hit plan?" and pipeline math isn't answering it.
- You're trying to decide whether to keep, upgrade, or replace your sales team.

## Fails When
- You change the lead definition month to month. The whole metric depends on a stable, consistent definition of "qualified lead."
- You have no lead scoring. If every sign-up counts, you're not tracking LVR, you're tracking contacts.
- You're pure self-serve PLG with no human-qualified leads in the motion. LVR is built for sales-assisted SaaS.
- Your volume is too tiny to be meaningful. Going from 3 leads to 5 isn't a trend, it's noise. Wait until you have at least a couple of dozen qualified leads a month.
- You're using LVR to hide lead quality problems. If reps are stuffing the pipeline to hit an LVR number, the metric is gaming you, not helping you.

## Core Concept

Sales is a lagging indicator. Your monthly sales tell you about the past. The deals you close this month were leads created 6, 12, sometimes 18 months ago. By the time revenue slows, the problem started a year ago. You already know you have a problem — you just don't know it yet. That's the whole issue with running the company off revenue.

Lead Velocity Rate is the fix. LVR is the growth rate in qualified leads, month over month, every single month. It's real-time, not lagging, and it predicts your future revenue 12–18 months out clear as can be. It is the one metric I would hold the VP of Marketing to. Not MQLs in absolute terms. Not pipeline. Not revenue. The *growth rate* of qualified leads, month over month, month over month, forever. If you set your LVR target about 10–20% higher than your desired MRR growth — and you have a consistent sales team — you will hit your revenue plan. It's just math.

Here's why LVR beats everything else: sales is variant, pipeline has data-quality problems, and renewals can swing results. But there's no reason qualified leads can't grow every single month like clockwork. Every. Single. Month. If LVR is hitting plan, even if you have a bad quarter on revenue, strategically you're fine — shrug off the down month. If LVR is missing plan, it doesn't matter how good this quarter's revenue looks. Revenue is going to follow LVR, lagging by about the median length of your sales cycle. That's the whole game.

## How to Apply

1. **Lock a qualified-lead definition, and don't touch it.** Pick a scoring rule — site actions plus a "Contact Me" or a demo request, not raw sign-ups. A free-account sign-up is not a lead. A trial that never did anything is not a lead. Write it down. Stop moving it.
2. **Compute LVR every month.** (Qualified leads this month) / (qualified leads last month) − 1. That's the number. Track it alongside the running trailing 3-month average so one bad campaign month doesn't panic you.
3. **Set the LVR target 10–20% above your desired MRR growth rate.** If you want to grow ARR 100% a year, you want LVR running 8–10%+ a month. If you want to 2x faster than that, you need 15–20%+ a month. That's how the math works out.
4. **Hold the VP of Marketing accountable for LVR.** This is their #1 KPI. It's their lead commit. Put variable comp on it. A VPM without variable comp on a lead commit gives you suboptimal results — they'll optimize for something else.
5. **Read the signal monthly.** Three scenarios, three responses. LVR hitting plan and revenue hitting plan — keep going. LVR hitting plan but revenue missing — sales is the problem, or the product is the problem, not marketing. LVR missing — marketing is the problem, full stop.
6. **Diagnose sales vs. product when LVR is healthy but revenue isn't.** If the sales team has changed, measure revenue-per-lead by rep. If that's declining, you have a sales quality problem — make changes. If the sales team hasn't changed much and revenue still isn't tracking LVR, you have a product problem — you're not keeping up with the competition. Time to make a change on that side.
7. **Don't let sales blame marketing for "quality" when LVR is consistent.** If your lead scoring hasn't changed, don't accept "the leads got worse" as an excuse for a sales miss. Hold sales accountable to LVR. The leads are the leads.
8. **Don't let marketing game the number with bad leads.** If LVR is up but close rates are collapsing, someone loosened the definition to hit the target. Audit the lead definition. Tighten it. Re-baseline.
9. **Cut your LVR target as you scale, but never to zero.** At EchoSign we ran 10%/month after $1m ARR and 8%/month after ~$3m ARR — 8%/month was what it took to grow 100% YoY. At scale it becomes harder, but after $2m–$3m in ARR, word-of-mouth alone should keep organic leads growing every single month. If organic leads are flat after that point, something's wrong with the product or the customers.
10. **Use LVR to buck yourself up in tough quarters.** If you have a bad revenue month but LVR is on plan and the sales team is strong, don't sweat it strategically. You'll do fine. Fix what needs fixing, but don't panic the company off one noisy month of closes.
11. **Bring LVR to every board meeting.** Report it as the top marketing KPI, ahead of MQLs, ahead of pipeline coverage. It's the only leading indicator that actually predicts the future.
12. **Check LVR against your sales cycle, not the current month.** If your median sales cycle is 4 months, the leads you generate now show up as revenue then. Revenue should track LVR lagging by roughly that length. If it doesn't, diagnose (step 6).

## Signature Numbers
- **12–18 months** — how far ahead of revenue LVR actually sees. You can see the future of your business this far out, clear as can be.
- **10–20% above desired MRR growth** — how much LVR should exceed your target revenue growth rate to give you margin for sales execution.
- **10% per month** — LVR target at EchoSign once they hit $1m ARR.
- **8% per month** — LVR target at EchoSign after ~$3m ARR; the rate required to produce enough leads to grow the business at least 100% YoY.
- **~1 in 5 quarters** — how often even good SaaS companies have a rough quarter on revenue. LVR is what keeps you calm through those.

## Examples

**Situation:** A founder at $4m ARR sees revenue growth has flattened for two quarters. Pipeline looks okay. He's about to fire the VP of Sales.
**Application:** Pull LVR for the last 12 months before you fire anyone. If LVR was growing 8%+/month through that period and revenue didn't follow, the sales team is the problem — revenue-per-lead will confirm it by rep. If LVR has been flat or declining for the last 6 months, sales isn't your problem. Marketing is. Firing the VPS will do nothing. You'll be back here next year, one VPS poorer, with the same issue.
**Result:** In this case LVR had been flat for 7 months. The real problem was the VPM had quietly stopped hitting the lead commit two quarters ago. Revenue was just catching up to that. Founder kept the VPS, replaced the VPM, and revenue recovered 6 months later — exactly the lag you'd predict.

**Situation:** A founder says "my LVR is up 18% month over month, I'm crushing it." But closed-won revenue is up only 3% and close rates have dropped from 22% to 11%.
**Application:** The LVR is fake. Someone changed the lead definition, or reps/SDRs are stuffing the pipeline to hit the lead commit. Re-baseline. Pull the scoring rules, recompute LVR under the original definition, and look at the real number. Put variable comp on *qualified* LVR (tight definition) plus on revenue actually attributable to marketing, so volume alone doesn't pay out.
**Result:** Under the original definition LVR was actually running 4%/month, not 18%. That explained the flat revenue. Tightening the definition and re-setting the VPM's comp plan against the honest number got the company to real 9–10%/month growth in qualified leads over the next two quarters.

## Anti-Patterns (tactical)

**Don't: Change the lead definition month to month.**
*Why:* You'll game the number and lose the signal. The whole point of LVR is consistent measurement across time. An unstable definition means you have no metric at all — just a vibe with a percentage sign next to it.

**Don't: Run the company off revenue growth alone.**
*Why:* Revenue is a lagging indicator. By the time revenue slows, the problem started 12–18 months ago. You already know you have a problem at that point — you just don't know it yet. LVR tells you now.

**Don't: Let your VP of Marketing off the hook for a specific lead commit.**
*Why:* A VP of Sales has a quota. If the VP of Marketing doesn't have a lead commit — a hard, variable-comp number — they don't really own a number. Positioning, brand, content, demand gen, it's all talk without a commit. Ask any VPM candidate: "what was your lead commit at your last company?" If they can't answer in 60 seconds, pass.

**Don't: Conflate lead volume with lead quality.**
*Why:* High LVR with collapsing close rates is not growth, it's noise. Pair LVR with revenue-per-lead by rep and by channel. If revenue-per-lead is stable or rising while LVR grows, you're winning. If it's collapsing, you're buying bad leads to hit a vanity number.

**Don't: Ignore LVR until revenue slows.**
*Why:* By then it's too late. The leads that would have produced this quarter's recovery needed to be generated a year ago. Track LVR every month from the first month you have enough volume to measure it. It is the earliest possible warning system you have.
