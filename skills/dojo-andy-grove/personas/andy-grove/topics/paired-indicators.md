---
triggers:
  - "user proposes measuring a team or function with a single metric"
  - "user mentions inventory, vouchers, orders, throughput, or activity counts as a KPI"
  - "user asks how to measure administrative or knowledge work"
  - "user describes a team that hit its number but quality cratered"
  - "user asks about leading indicators or scorecards"
use_when:
  - "designing a dashboard, scorecard, or compensation tie-in"
  - "evaluating a metric someone has proposed"
  - "diagnosing why a team optimized one number while another silently rotted"
fails_when:
  - "the work genuinely has only one measurable dimension and the counterfactual cost is negligible — rare but possible at the smallest scales"
  - "applied as a demand for symmetric cost — the pair doesn't have to be balanced in importance, only sufficient to flag the off-axis failure"
related:
  - "output-of-a-manager.md"
  - "managerial-leverage.md"
  - "performance-review.md"
  - "planning-and-calendar.md"
---

# Paired Indicators

## When to Use
- Designing any indicator, scorecard, or KPI for a team — administrative, technical, sales, or operations.
- Reviewing a metric someone is about to ship into a compensation plan, a board deck, or a public OKR.
- A team has hit its number cleanly and you have a quiet feeling that something else is wrong. The "something else" is usually the missing pair.
- Setting up linearity charts, trend indicators, or stagger charts and choosing what they should display.
- Auditing an existing dashboard for measurement-induced behavior change.

## Fails When
- Used to demand a perfectly symmetric pair where one isn't necessary. The pair doesn't have to be of equal importance; it has to be enough to flag the off-axis failure mode that the headline indicator will otherwise hide.
- Applied to a measurement that no one acts on. If nobody steers from a number, pairing it doesn't matter — the bigger problem is that you're collecting data that doesn't change behavior.
- Treated as proof that a team is doing well when both indicators look fine. Two indicators can both look fine while a third dimension nobody chose to measure quietly degrades. Pairing reduces the failure mode; it doesn't eliminate it.

## Core Concept

Indicators steer behavior. That is the most important fact about them, and the one most often forgotten the moment a number is named.

> "Indicators tend to direct your attention toward what they are monitoring. It is like riding a bicycle: you will probably steer it where you are looking. If, for example, you start measuring your inventory levels carefully, you are likely to take action to drive your inventory levels down, which is good up to a point. But your inventories could become so lean that you can't react to changes in demand without creating shortages. So because indicators direct one's activities, you should guard against overreacting. This you can do by *pairing* indicators, so that together both effect and counter-effect are measured." (HOM ch.2)

A single number always optimizes itself at the expense of something not on the chart. Inventory measured alone goes to zero, then the customer can't get what they ordered. Vouchers processed counted alone goes up, then half of them have errors and the suppliers are calling. Orders closed measured alone goes up, then the receivables age and the bad-debt line explodes. Velocity measured alone goes up, then quality collapses. Square feet cleaned measured alone goes up, then the cleaning is sloppy. Every quantity has a quality that runs the other way, and if you don't put both on the chart, you are choosing — quietly, by omission — to let the second one go.

The discipline is to pair every quantitative indicator with a quality indicator that runs the other direction. The pair doesn't have to be symmetric. Quantity is usually objective and easy to count; quality is often partly subjective, partly objective, and harder. That doesn't matter. What matters is that the off-axis failure mode is visible. **Number of vouchers processed** pairs with **number of errors found in audit**. **Square feet cleaned** pairs with a quality rating from a senior manager whose office is in that building. **Orders entered** pairs with **bad-debt rate**. **Inventory level** pairs with **shortage incidence**. **Compiler completion date** pairs with **capability of the compiler at that date** — keeps you from shipping the perfect compiler that will never be done, and from rushing one that's inadequate. The first rule of measurement is that any measurement is better than none. The second rule, which is more important once you've made it past the first, is that any single measurement is worse than a pair.

The same logic generalizes. Output should be measured, not activity — a salesman is measured by orders he gets, not by calls he makes. Indicators should be physical, countable things. Leading indicators tell you what's coming, but only if you'll actually act on them; without that, monitoring them generates anxiety and nothing else. The CEO's lament — *"CEOs always act on leading indicators of good news, but only act on lagging indicators of bad news"* — is exactly what paired indicators are designed to fight. Pair the good-news indicator with the bad-news indicator and force the conversation about both before action.

## How to Apply

1. **Name the headline indicator and ask: which quantity is this?** Almost every indicator is a quantity — orders, vouchers, square feet, items in inventory, transactions, hires, lines of code. Start by being explicit that this is a count, a rate, a volume.

2. **Ask: what's the quality this quantity will degrade?** For every quantity, there's a quality on the other side. Vouchers degrades into errors. Orders degrades into bad debt. Square feet degrades into sloppy work. Items in inventory degrades into stockouts in the other direction (driving inventory down too far). Hires degrades into attrition or bad fits. The quality is usually less crisp to measure than the quantity. That's fine. You don't need it to be perfect; you need it to be on the chart.

3. **Make the quality indicator believable enough that you'll act on it.** A leading indicator you don't trust is a leading indicator you won't act on, and a leading indicator you won't act on is anxiety, not management. If the quality indicator is too soft to drive action, sharpen it — or pair the quantity with two qualities until the picture is real.

4. **Hold the pair together at every reporting cadence.** Don't let the headline number get reported in isolation, ever. Build the dashboard, the staff meeting agenda, and the compensation calculation so the pair always travels together. The moment one half of the pair gets dropped from the report — usually the soft, subjective half — the steering effect of the headline takes over.

5. **When you can only collect the quantity, name the missing pair as a known liability.** Sometimes the quality indicator genuinely can't be measured, or the cost of measuring it is too high. In that case, write down the quality you're not measuring and treat it as an open risk. This forces the team to know that the headline is being optimized in the absence of its counterweight, and that's the start of useful paranoia.

6. **Apply the same discipline to leading indicators and stagger charts.** A linearity indicator (cumulative output vs. month) shows whether you're on pace; pair it with a quality measure or you'll cram low-quality work into the last week of the month to hit the line. A stagger chart (rolling forecasts of incoming orders) reveals whether your forecasting is improving; pair it with actuals or it just becomes optimistic noise.

## Examples

**Situation:** An accounts-payable group's manager wants to drive productivity. He starts measuring vouchers processed per person per day.

**Application:** Quantity alone, measured alone, drives behavior toward speed. Pair it with errors found by auditing or by suppliers reporting back. The pair lets the manager see whether productivity is real or whether velocity is being bought by sloppiness.

**Result:** A productive team is one whose voucher count goes up while its error rate stays flat or falls. A team whose voucher count goes up while errors go up is producing motion, not output. Without the pair, the dashboard celebrates the wrong outcome. (HOM ch.2.)

> "[T]he number of vouchers processed should be paired with the number of errors found either by auditing or by our suppliers." (HOM ch.2)

---

**Situation:** Custodial services in a large building. The natural quantity indicator is square feet cleaned.

**Application:** Square feet cleaned alone goes up by cutting corners on the cleaning itself — light dust, missed corners, fewer passes. Pair the quantity with "a partially objective/partially subjective rating of the quality of work as assessed by a senior manager with an office in that building." The pair is asymmetric — quantity is countable, quality is judgment — but it's enough to keep the steering honest.

**Result:** The custodial group can be compared across buildings on quantity, with the quality rating from local senior managers acting as the brake. The competitive spirit between groups, which is real and useful, is now aimed at the right target — output, not activity. The pair turns measurement into something useful instead of a one-axis race to the bottom. (HOM ch.2.)

---

**Situation:** Compiler development. Engineers ship a compiler — a major piece of software — and the team needs an indicator for whether they're on track.

**Application:** Completion date is the obvious quantity. Capability — what the compiler can actually do — is the obvious quality. Track them as a pair, charted together. If completion is on schedule but capability has stagnated, you're shipping something inadequate. If capability is impressive but completion is sliding indefinitely, you're heading for the perfect compiler that ships in 2030.

**Result:** "Joint monitoring is likely to keep things in the optimum middle ground." (HOM ch.2.) The pair functions as a real-time governor — not because either number is perfect, but because each pulls against the other. Either one alone would let the team drift in a way that looks productive on the chart and ruinous in the work.

---

**Situation:** A startup founder reads that "lead-velocity rate" is the canonical leading indicator for a sales team and asks what they should pair it with.

**Application:** Lead velocity is a quantity — leads in, growing month over month. The natural pairs are conversion quality (how many of those leads become opportunities, then close), customer fit (cohort of close-rate by lead source), and bad-debt or churn-after-close (whether the closed deals stick). Pick the pair that catches the failure mode the team is most prone to. A team that aggressively buys lead volume should be paired against fit; a team that aggressively closes should be paired against post-close retention or bad debt.

**Result:** The headline lead-velocity number stays — it's the right driver for early visibility — but it travels with a pair that flags the failure mode the headline will otherwise mask. Without the pair, "lead velocity is up" becomes the sales team's victory cry while the customer-success and finance teams discover the price two quarters later. (HOM ch.2.)

## Anti-Patterns (tactical)

**Don't:** Ship a single-indicator OKR or compensation tie-in.
**Why:** The compensation case is the worst because the steering effect is at its strongest. A salesman compensated only on orders closed will close bad deals. A support team compensated only on tickets resolved will close tickets without solving problems. A team compensated only on speed will ship low-quality work fast. If a single indicator must drive the comp, name out loud the quality you're not measuring and accept that you're choosing to let it slide.

**Don't:** Combine a quantity and a quality into a single composite score.
**Why:** Composite scores hide the steering. The team optimizes the score, not the underlying behaviors. They debate weightings instead of doing the work. Keep the pair as two numbers next to each other, not as one number that averages them. Two numbers force a conversation; one number ends one.

**Don't:** Pair a quantity with another quantity in the same direction.
**Why:** "Vouchers processed" paired with "transactions per hour" is not a pair — it's the same indicator twice. The pair has to capture the off-axis failure mode. Errors, returns, complaints, churn, defects — the quality side is what's uncomfortable to measure, which is why teams skip it, which is why it has to be the explicit pair.

**Don't:** Drop the soft half of the pair because it's "subjective."
**Why:** The subjective half is usually the more important half. It captures the human dimension of the work — was the customer treated well, was the cleaning thorough, was the meeting useful — that the quantity will erode silently. Soft measurement is harder to defend in a board deck and easier to live with for the customer.

**Don't:** Use a leading indicator without committing in advance to act on it.
**Why:** "Leading indicators … give you time to take corrective action … But unless you are prepared to act on what your leading indicators are telling you, all you will get from monitoring them is anxiety." (HOM ch.2.) A leading indicator you watch but won't act on is a worry, not a tool. Either commit to act when it crosses a threshold — and write the threshold down before the data arrives — or stop watching it.

**Don't:** Forget that the missing-pair problem applies to your own indicators too.
**Why:** Founders and CEOs are not exempt. "ARR" alone has the same disease as "vouchers processed" alone. Pair revenue with retention. Pair shipping velocity with defect rate. Pair hires with attrition. The most senior indicators are the ones whose missing pairs cost the most when they erupt, because by the time the off-axis failure becomes visible, it's already a board-level conversation.
