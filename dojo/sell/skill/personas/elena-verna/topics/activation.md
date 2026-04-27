---
triggers:
  - "user says their activation rate is X%"
  - "user is defining their activation metric"
  - "user measures activation as sign-up, login, or onboarding completion"
  - "user is working on B2B onboarding or PLG onboarding"
  - "user wants to add profiling questions but is afraid of 'hurting conversion'"
  - "user is worried monetization or retention is broken"
use_when:
  - "defining or redefining activation for any product, especially B2B PLG"
  - "diagnosing why free-to-paid conversion or retention is underperforming"
  - "designing or redesigning onboarding"
fails_when:
  - "there is no product-market fit yet — no amount of activation tuning will save a product nobody retains"
  - "the aha moment genuinely requires weeks of implementation (enterprise data migrations, heavy integrations) — that's a sales-assisted job, not a self-serve activation problem"
related:
  - "retention.md"
  - "pride-test.md"
---

# Activation (Setup -> Aha -> Habit Loop)

## When to Use
- You are defining activation for the first time, or you inherited a metric called "activation" and want to know if it's actually measuring value delivery.
- Free-to-paid conversion is weak, churn is high, or retention curves decay fast. 90% of monetization and retention issues stem from incorrect activation. Fix the bucket before you fill it.
- You run B2B PLG and you're measuring activation at the user level only. That will stall you out as soon as you try to go upmarket. Trust me — I watched it happen at SurveyMonkey.
- Your onboarding team refuses to add profiling questions because "it'll hurt activation." Wrong. It won't.

## Fails When
- **You define aha as a login, a view, or an onboarding-wizard completion.** Those are not value. Those are people pushing buttons. Activation is a habit formed around the core value prop — not the ceremonial passage through your welcome screens.
- **You treat B2B activation like B2C activation.** In B2C, activation is one user experiencing one moment of value. In B2B, if a single user activates but their team never does, you've built a glorified consumer app with 10,000 siloed accounts and zero enterprise pipeline. I've lived this one.
- **You measure "active last week" and call it weekly activation.** That's measuring another one-off event, not frequency. A user active every day for the first time in three years looks identical to a user active on a genuine weekly cadence. They are not the same user.

## Core Concept

Activation is the bridge between sign-up and habit. It has three distinct stages, and confusing them is the single most common screw-up I see in B2B growth: **Setup -> Aha -> Habit Loop**. (Plus a fourth thing that should happen *before* setup — profiling — which I'll get to.)

**Setup is the user doing the work to reach the value.** Creating a survey, uploading a file, connecting a data source, building an app. The verbs are *create, upload, configure, import, generate, connect.* The user is ready — but they haven't received the value yet. Setup is preparation, not payoff. Many companies innovate brilliantly on setup and then try to count setup completion as activation. Don't fall in this trap. No matter how slick your onboarding wizard is, walking through it is not the same as getting value from your product.

**Aha is when the user receives and *realizes* the core value.** The verbs here are *publish, send, receive, share, export, deploy.* For SurveyMonkey, aha was not creating a survey — it was getting 5+ responses back. For Miro, aha was not opening a board — it was collaborating on that board with another person. For Dropbox, aha was someone on the other end editing, viewing, or being invited into a shared file. For Lovable, aha is not building an app — it's launching it and getting traffic. See the pattern? The user has to *receive* the thing your product promises. Not set up the receiving machinery. Not click "I'm done." Actually receive value.

**Habit loop is when users return at the right frequency for your product.** One aha isn't activation — it's a one-off win. Activation is only complete when the user has shown they understood the reward and want to receive it again, and again, at the cadence your product is built for. And please, for the love of growth, define frequency correctly. "Active last week" is not weekly. Proper frequency definitions: daily = active 3 of 5 days/week across the last 2 weeks; weekly = active 3 of the last 4 weeks; monthly = active 3 of the last 4 months. Anything else is just another one-off event in disguise.

**And the special B2B twist: team-level activation.** In B2B, individual activation is not enough. The whole gravitational pull of PLG is toward consumer-like experiences focused on the individual user, because individuals are easier to onboard, easier to monetize, easier to retain. But if your users don't activate as *teams*, your enterprise motion is dead on arrival. At SurveyMonkey, we had single logos with 800+ paid accounts and 1,000+ free accounts, and we still couldn't land the enterprise deal. Because those users were satisfied in their siloed accounts. At Miro, we refused to count an account as activated until someone collaborated with someone else on a board. That changed everything. Measure Weekly Active Teams, not Weekly Active Users. Bake "invite a teammate" into setup. Structure the aha moment around 2+ people doing something together. Teams are the escalator from individual use to company-level value.

**Bonus: profile users *before* setup.** Onboarding profiling is the step every B2B team wants to skip because "it'll kill our activation rate." It won't. I've implemented profiling at every company and client I've ever worked with — SurveyMonkey, Miro, Amplitude — and *none* of them saw an activation drop. A 3-screen, 9-question profiling flow has at most a 10% drop-off in profiling completion and zero impact on users reaching the habit loop. If a few questions scared the customer away, they had such low intent they were never going to activate anyway. And the data you get — role, company size, use case, team size, experience level, how they heard about you — pays dividends for years: personalized onboarding paths, product-qualified leads for sales, monetization predictions, revenue attribution. Stop treating profiling like B2C does. Your users are professionals. Treat them like it.

Finally: a 40%+ activation-to-habit rate is the bar you should be chasing. Below that, you're leaking everything you acquire. And remember — activation is not engagement. Engagement is what you optimize *after* activation is solid. Don't skip steps.

## How to Apply

1. **Write the aha moment using value verbs, not setup verbs.** If your aha sentence contains *create, upload, connect, generate,* try again. It should contain *publish, receive, share, collaborate, export.* The user has to receive value, not prepare to receive it.

2. **Quantify the aha moment.** "Getting responses" is not measurable. "Receiving 5+ responses on a survey within 14 days of sign-up" is. Pick a threshold. Validate it correlates with long-term retention. This is your leading indicator.

3. **Define habit frequency at the product's natural cadence.** Not at "last week." What's the *real* cadence your product supports? Miro brainstorms are monthly; Miro meetings are daily. SurveyMonkey survey cycles are every few months. Lovable app iterations are daily when users are building. Pick the right frequency, then define *habit* as active 3-of-last-4 periods at that cadence.

4. **For B2B: add the team level.** Weekly Active Teams, not just Weekly Active Users. Activation happens at the *team* level — setup includes inviting at least one teammate, aha involves 2+ people engaging together, habit loop is the team returning at the right cadence. If you only measure individual activation, your enterprise motion will stall and you won't know why.

5. **Add profiling to the front of your onboarding flow.** 3 screens, 6 questions maximum, multiple choice only, no open-ended. My go-to six for B2B: role/function, company size, use case/goal, team size, experience level, HDYHAU (how did you hear about us). Explain why you're asking. Immediately drop any question whose answer you're not acting on downstream. If you can't use it, don't collect it.

6. **Segment everything downstream by profile.** Setup paths, aha rates, monetization, resurrection emails, sales routing. If you profiled at onboarding and you're still treating every user the same afterward, you wasted the profiling. Use it.

7. **Stop measuring "active last week" as weekly.** Rewrite your frequency definitions today. It takes an hour. It changes what you see forever.

## Examples

**Situation:** A B2B PLG SaaS has 40% "activation" — defined as "completed onboarding." Free-to-paid is 1.5% and leadership is pushing for more top-of-funnel.
**Application:** Rewrite activation from scratch. Setup (onboarding completion) is not activation. Define aha as the first real value-delivery action (e.g., first report shared with a teammate). Define habit as 3 of last 4 weeks active at the team level. Re-measure. "Activation" drops from 40% to 12% overnight — because the old metric was measuring setup, not value. Now leadership can see the real leak. Kill the top-of-funnel push. Go fix the bucket.
**Result:** Within 2 quarters, team-level activation (the new metric) climbs from 12% to 25%. Free-to-paid conversion nearly doubles — because users who activate actually stick. The top-of-funnel push the team was about to do would have poured water into a bucket with holes.

**Situation:** A Miro-like collaboration tool has strong individual user sign-ups but weak enterprise sales pipeline. "We have 50,000 users at Fortune 500 companies, why can't we close these deals?"
**Application:** Check team-level activation. They're measuring Weekly Active Users, not Weekly Active Teams. Most of those 50,000 users are solo — siloed boards, no collaboration, no network effects. Rebuild activation around the team: "invite a teammate" becomes a mandatory setup step, aha requires 2+ people on the same board, do email-domain matching to suggest joining existing workspaces at sign-up.
**Result:** Within 6 months, Weekly Active Teams climbs to a level where enterprise sales finally have ammunition. End-users become internal advocates who push IT to buy team/enterprise plans. Bottom-up demand for enterprise shows up. This is exactly what worked at Miro. The other path — SurveyMonkey, where we didn't do this early enough — left enterprise deals stranded even with 800+ paid accounts per logo.

**Situation:** An onboarding team refuses to add 3 profiling screens because "our CRO said friction kills activation."
**Application:** Run it as a test. Add 3 screens, 6 questions, multiple choice, with explanations ("We're asking so we can show you the fastest path to value"). Measure drop-off during the profiling flow AND final activation. Expect: maximum 10% drop-off in profiling completion. Zero impact on habit-loop formation. Likely a small *lift* in activation from better-segmented onboarding paths. Plus a mountain of profile data to use in sales routing, lifecycle emails, and revenue attribution.
**Result:** Activation holds or improves. Profile data fuels PQA scoring for sales, personalized onboarding paths that raise segment-specific activation rates, and revenue attribution by use case. The CRO apologizes. (Kidding. They never do.)

## Anti-Patterns (tactical)

**Don't:** Count setup completion as activation.
**Why:** Setup is preparation, not value. You'll ship onboarding redesigns all day and wonder why retention never moves. The user has to *receive* the value, not prepare to receive it. If your activation metric can be hit by a user who never sees the payoff, it's the wrong metric.

**Don't:** Use vanity verbs for aha. No "logins," no "views," no "onboarding completions."
**Why:** Logging in is not value. Viewing a dashboard is not value. If I log into your app and bounce, I have not been activated. The aha must be something that only happens when the product actually does what it promised.

**Don't:** Measure B2B activation only at the user level.
**Why:** Individual users in B2B are satisfied in siloed accounts. They don't demand enterprise plans. They don't force IT to buy. If you don't measure and design for team activation, you will hit a ceiling somewhere around "glorified consumer app" and your upmarket expansion will die. I watched SurveyMonkey's enterprise motion stall for exactly this reason.

**Don't:** Measure frequency as "active yesterday / last week / last month."
**Why:** That's another one-off event wearing a frequency costume. A user who was active exactly once last week and a user who's been active every week for a year both count. That is not useful information. Use 3-of-last-4 windows at the product's real cadence.

**Don't:** Skip profiling because "it'll hurt conversion." And don't collect profiling you don't use.
**Why:** 3 screens, 6 questions, multiple choice has at most a 10% drop-off rate and zero impact on habit-loop formation in B2B. Meanwhile, no profiling means you personalize nothing, your sales team inherits garbage leads, and you can't attribute revenue to use cases. But collecting data you don't act on is worse — it teaches the team that data is decorative. Drop any question whose answer isn't changing something downstream.

**Don't:** Oversimplify onboarding to "remove all friction."
**Why:** High-intent customers want the details. Oversimplifying lets low-intent customers through the funnel to churn later, and drops off your best users who wanted to configure things properly. Friction is not the enemy — friction in the wrong place is the enemy.

**Don't:** Try to activate a product that doesn't have PMF.
**Why:** You cannot grow something that hasn't reached product-market fit. Activation optimization on a non-PMF product is rearranging deck chairs. If retention curves are flat-at-zero, go back to product, not onboarding.
