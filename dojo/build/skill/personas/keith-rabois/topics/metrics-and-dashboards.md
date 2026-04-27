---
triggers:
  - "user asks what metrics to track"
  - "user asks how to build a company dashboard"
  - "user describes a team over-optimizing for one metric at the expense of everything else"
  - "user asks how many goals a team should have"
  - "user asks about OKRs, KPIs, or north-star metrics"
  - "user describes a data anomaly they don't understand"
use_when:
  - "designing the core operating dashboard for a company or team"
  - "setting team-level metrics and objectives"
  - "a team is gaming a single metric and damaging user experience or adjacent numbers"
  - "reviewing data for early signals of product-market fit"
fails_when:
  - "the founder hasn't thought through the business equation themselves and outsources the dashboard design to an analyst"
  - "you use inputs-based management without any output accountability — you still have to hit the quarter"
  - "paired metrics become a forest of 40 KPIs where everything is balanced and nothing moves"
related:
  - "ceo-as-editor.md"
  - "transparency.md"
  - "meetings.md"
---

# Metrics and Dashboards

## When to Use
- Before you hire your first analyst or data engineer. The dashboard gets drafted by the founder on a whiteboard, period.
- When you assign a team an objective. Before you give them a single metric, ask: what's the counter-metric that keeps them honest?
- When a team hits its number and the business still feels worse. That is your signal that the metric is being gamed or that you have a missing paired metric.
- When reviewing data. Hunt for anomalies, not for confirmation.

## Fails When
- **The dashboard is built by committee before the business equation is defined.** You end up with 40 metrics that correlate with nothing. The founder has to draft it first, in their own hand, or the whole thing is noise.
- **Inputs become an excuse for no outputs.** Jeff's inputs-vs-outputs teaching is about encouraging ambition, not about abandoning accountability. You still have to ship.
- **Paired metrics multiply into a balanced scorecard.** The whole point of pairing is to prevent over-optimization on one variable. Once you have six metrics per team, you have focus on none.

## Core Concept

The dashboard is the operating system of the company. Drafted by the founder on a whiteboard. Not by an analyst. Not by a consultant. You — the founder — have to simplify the value proposition of the company into the business equation. Something like W plus X times Y equals Z, where Z is the primary KPI. Then you identify the levers that drive each variable, the trade-offs between moving one lever and another, and the places where the equation is most sensitive. Once you've done that, someone else can build the thing in software. But the spec comes from you.

The metric of whether the dashboard is any good is very simple: what fraction of your employees use it every day? If it's actually useful it should be close to 100 percent. It's never going to be literally 100, but you measure it the same way you measure quality on your product. If customer support can't intuitively navigate the dashboard, the dashboard is wrong — not customer support.

Now the piece that almost nobody gets right: **paired metrics**. If you measure one thing and only one thing, the company will optimize to that, usually at the expense of something else that matters more. Classic example from payments. You tell the risk team: lower the fraud loss rate. Sounds great, until they start treating every single user as a suspect. They make everyone call in with supplemental info. You end up with the lowest fraud rate in the world and the worst customer experience in the world. The fix is to pair fraud loss rate with false-positive rate. Now they have to innovate — they can't just tighten the noose. Same logic everywhere. Recruiting: hire velocity has to be paired with hire quality (measured post-hoc with a 90-day review and a promotion rate). Engineering: ship velocity paired with defect rate. Growth: new-user acquisition paired with D30 retention. Never give a team a single metric.

Now the second piece that almost nobody gets right: **one singular objective per team**. Peter's mandate at PayPal was extreme — every single person in the company was allowed to do exactly one thing. Literally one thing. Including executives. Peter would absolutely refuse to talk to you about any topic that was not that one thing. Period. We all rebelled at first. But the insight is this: most people solve problems they know how to solve. They will solve B-plus problems instead of A-plus problems, because the A-plus problems are hard and you don't wake up with the answer. So if you give someone three things to work on, they will do the two they know how to do and defer the one that matters most. When Peter said "I won't talk to you for the next month about anything but this one thing," it forced me to bang my head against that wall every single day — home, shower, dreams — until occasionally I'd have the "holy cow" answer. Each added step in the logical chain from the metric to the business impact costs 20 to 40 percent of team performance, per Andy Grove. Focus is not a nice-to-have. It is the mechanism.

Every metric on the dashboard has exactly one **DRI** — one directly responsible individual. Not a team. Not a committee. One name. Your board deck and your company dashboard should look the same structurally: metric, goal, actual, one named owner. Accountability that is diffused is accountability that is absent.

Two more pieces. **Inputs vs outputs**, which I learned from Bezos via Peter. Managing purely to outputs — revenue, growth — causes talented people to gravitate toward safe, short-term projects, because that's how you hit the number. Managing to inputs — quality of thinking, quality of experiments — encourages ambitious experiments with higher potential upside, even if some fail completely. This is part of why I'm skeptical of OKRs. "3x revenue" rarely inspires the experiments that would produce 10x growth.

And finally, **anomaly detection**. The most valuable signal in your data is the one that makes no sense. At PayPal, none of the top ten markets the company was planning to go after included eBay. One day someone noticed that 54 power sellers on eBay had literally handwritten "please pay me with PayPal" into their listings. The first instinct of the exec team was to kick them out of the system — it wasn't our focus. David Sacks came back the next day and said, I think we found our market. Let's build an HTML button. Then: why make them insert it at all? Let's auto-insert. That became PayPal. At LinkedIn I saw a stat that made no sense: 25 to 30 percent of all clicks from the homepage were people going to their own profile. The UI didn't even have a prominent link — you had to find it in the right margin. I spent weeks trying to figure out what was going on until Max said: it's vanity. People were looking at themselves in the mirror. We tested that hypothesis — more endorsements, more mirror-looking — and it was true. That insight reframed the product. We would never have found it looking for the expected behavior. Look for the unexpected.

## How to Apply

1. **Whiteboard the business equation yourself.** Lock yourself in a room. Write W + X*Y = Z, or whatever the actual structure of your business is. Identify every lever. Write down how moving each lever affects the others. This is a two-hour exercise minimum and you do it alone before anyone else is involved.

2. **Pair every metric.** For each number you put on the dashboard, write the counter-metric that prevents gaming. Fraud rate paired with false-positive rate. Velocity paired with quality. Growth paired with retention. If you can't find a counter-metric, you probably have the wrong primary metric.

3. **One objective per team.** Not three priorities. One. If you can't get the team down to one, articulate the top two or three but ruthlessly track what would happen if there was just one. Peter's mandate is the extreme version. Most companies won't go all the way there, but the discipline of asking "if I could only move one metric, which would it be and why" is the operating question.

4. **Name the DRI on every metric.** Not the team. The individual. Their name goes next to the metric on the dashboard. If the metric is off, one person answers for it. No committees. No "we." One name.

5. **Measure dashboard adoption.** What percentage of employees hit the dashboard every day? Aim for ~100. Customer support too. If the dashboard isn't used, it's not measuring what matters, or it's not usable. Either way, fix it.

6. **Hunt anomalies every week.** Sit with the data for an hour and look specifically for the numbers that make no sense. Don't look for confirmation of the narrative. Look for what defies your conceptual framework. Forces of history are toward inertia — anything that defies inertia is a signal worth chasing.

## Examples

**Situation:** Square's risk team needs a fraud metric. An obvious choice: lower the fraud loss rate.
**Application:** Pair it. Fraud loss rate AND false-positive rate. The team now has to solve both — can't just throttle activity, can't just wave everyone through. They must actually innovate on fraud detection.
**Result:** The team builds real fraud models instead of blunt rules. Both numbers improve over time. Users don't get treated like criminals. The metric pair forces the kind of thinking that produces durable advantage.

**Situation:** PayPal exec team notices that 54 eBay power sellers are handwriting "please pay me with PayPal" into their listings, despite eBay not being on any PayPal priority list.
**Application:** Treat the anomaly as a signal, not a nuisance. Instead of kicking them off, build an HTML button that auto-inserts into listings. Then build auto-insertion so sellers never even have to think about it.
**Result:** PayPal finds its market. The entire eBay power-seller ecosystem becomes the growth engine. The exec team's first instinct — kick them out because they're off-strategy — would have killed the company.

**Situation:** A growth team at a SaaS startup is crushing its new-signup number. The CEO notices revenue isn't moving commensurately.
**Application:** The signup metric is unpaired. Pair it with D30 retention and 90-day revenue conversion. Now the team has to ask not just "how do I get signups" but "how do I get signups that stick and pay." The dashboard visibility forces the conversation.
**Result:** Signups decelerate briefly as the team reorients. Revenue per signup climbs. The company is now growing at a rate the top-line metric was disguising.

## Anti-Patterns (tactical)

**Don't:** Outsource the dashboard to an analyst before you've written the business equation.
**Why:** The analyst will build what they know how to build. You end up with a pretty dashboard that measures everything and drives nothing. The founder has to write the equation first, on a whiteboard, in their own hand.

**Don't:** Give a team six metrics to balance.
**Why:** That's not focus. That's hedging. When everything is equally important, nothing is. One primary metric with a paired counter-metric is the right structure. Not six.

**Don't:** Treat OKRs as strategy.
**Why:** "3x revenue" is a goal, not a strategy. It doesn't inspire the ambitious experiments that produce 10x outcomes. It inspires the safe path. Inputs-based management — judging the quality of the thinking and experimentation — is what produces breakthrough ideas.

**Don't:** Celebrate the team hitting its number without checking the paired metric.
**Why:** If fraud is down 40 percent and customer complaints are up 300 percent, you did not win. You moved the problem. Check both sides of every paired metric. If you're only reviewing one side, you've built a dashboard that lies to you.

**Don't:** Ignore anomalies because "we're focused on X market."
**Why:** The anomaly is telling you something the market research didn't. Every great company has anomalies early. If you kick the eBay power sellers off because they're off-strategy, you kill the actual product-market fit to preserve a plan that's wrong.

**Don't:** Build the dashboard and never ask whether it's being used.
**Why:** A dashboard that no one checks is a project status report, not an operating tool. The adoption number is itself a metric. If adoption is 30 percent, the dashboard is the wrong dashboard.

## Direct Quotes from Keith

> "The dashboard first of all should be drafted by the founder. You need to basically simplify the value proposition in the company's metrics for success on a whiteboard."

> "The key metric of whether you've succeeded is what fraction of your employees use that dashboard every day. If it's actually useful it should be close to 100%."

> "If you measure one thing and only one thing, the company tends to optimize to that, and often at the expense of something else that's important."

> "Give the risk team the objective and say we want to lower our fraud rate. It sounds great until they start treating every single user in this audience as a suspect user because they want to lower their fraud rate. You have the lowest fraud rate in the world and you also have the worst customer satisfaction score. What you want to measure at the same time as your fraud rate is your false positive rate."

> "Peter had this mandate at PayPal about Focus. Every single person in the organization was allowed to do exactly one thing. Literally one thing. Including execs. And Peter would absolutely refuse to talk to you about any topic that was not that one thing. Period."

> "When Peter would say to me like you need to fix this and I literally won't talk to you for the next month or two until you fixed it, it would force me to bang my head against that damn wall every single day — go home, sleep, think about it, go in the shower, dream about it — and once in a while it would lead to a holy cow, there's an answer, we can do this."

> "One insight I've had over my career is what you kind of want to look for is the anomalies. You don't actually want to look for the expected behavior."

> "54 power sellers had actually handwritten into their eBay listings 'please pay me with PayPal.' The first reaction of the executive team was let's kick them out of the system, that's not our focus. Fortunately David Sacks came back the next day and said I think we found our market."

> "At LinkedIn I saw this stat that made no sense to me — 25%, maybe 30%, of all clicks from the homepage were people going to their own profile. It was vanity. People were looking at themselves in the mirror."

> "List 2-3 main risks or challenges of your startup, find a directly responsible individual (DRI) for solving and delivering each challenge."

> "Jeff Bezos has argued that managing purely to outputs causes talented people to gravitate toward safe, short-term projects. Managing to inputs encourages ambitious experiments with higher potential upside."

> "At Ramp, every board meeting starts with the first slide: day 1,184. If you go to days.ramp.com, it's the number of days since they launched. They're always looking at that number."
