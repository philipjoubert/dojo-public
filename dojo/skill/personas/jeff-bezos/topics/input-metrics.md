---
triggers:
  - "user asks about setting team goals or OKRs"
  - "user describes obsessing over revenue, share price, or other output metrics"
  - "user asks how to measure a team's performance"
  - "user mentions KPIs or dashboards that aren't changing behavior"
use_when:
  - "setting goals for a team or organization"
  - "designing dashboards and review cadences"
  - "diagnosing why teams can't move an output metric they're held accountable for"
fails_when:
  - "selected input metrics don't actually drive the outputs — takes patient trial to find the right ones"
  - "input metrics are tracked but not reviewed or acted on"
  - "the team treats input metrics as proxies and optimizes them while the output gets worse"
related:
  - "op1-op2.md"
  - "flywheel.md"
  - "resist-proxies.md"
  - "customer-obsession.md"
---

# Input Metrics vs. Output Metrics

## When to Use
- Setting team goals — which metrics should people actually be accountable for?
- Designing operating dashboards that drive behavior rather than just describe outcomes.
- Diagnosing why a team is being held accountable for an output metric they cannot directly move.
- Explaining to a board or investor why the company is focused on operational metrics instead of only financial ones.

## Fails When
- The chosen input metrics don't actually drive the output they're supposed to drive. Finding the right inputs takes patient trial and error.
- Input metrics are tracked but the cadence doesn't produce action. A dashboard nobody reviews is decoration.
- The team turns input metrics into proxies — hitting the input number while the underlying customer experience degrades. Input metrics are not immune to the proxy trap.
- Used to avoid accountability for outputs entirely. The point is not "we only care about inputs." The point is "we work the inputs because the outputs will follow."

## Core Concept

Share price is an output metric. Revenue is an output metric. Profit is an output metric. The CEO, and companies in general, have very little ability to directly control output metrics. What the CEO can do is focus on the controllable input metrics — the specific activities that the organization can directly influence — which, in aggregate and over time, drive the output metrics. The discipline is recognizing which is which, being honest about what's in your control, and investing your attention in the things you can actually move.

The controllable input metrics at Amazon, for decades, have been the same small set: selection, price, delivery speed, in-stock rate, defect rate. Each of these is something a team can directly affect through its own work. Each of them, individually and in combination, drives output metrics that look like revenue and profit and market share. The team does not wake up trying to move share price; they wake up trying to add another thousand products to selection, or cut another day off delivery time, or reduce out-of-stock incidents by another percentage point. Those things they can do. When they do them, the share price eventually moves. When they try to move share price directly, they cannot — and the attempt usually produces either short-term manipulation or paralysis.

Finding the right input metrics is hard, and it takes patient trial and error. The signal you want is this: when the input metric moves, does the output metric eventually move in the expected direction? If yes, it's a real input metric. If no, it's a proxy — you found something you could measure, but it doesn't actually drive what you care about. The DMAIC cycle helps: Define, Measure, Analyze, Improve, Control. You are looking for the specific, controllable levers that actually connect to the outcome, and you are prepared to discard the ones that don't even when they're convenient to measure.

Input metrics are not immune to the proxy trap. A team that's been given an input metric to hit will sometimes optimize the metric while the outcome gets worse. The check is the same as with any proxy: when the input metric is up but the customer anecdotes are down, the anecdotes are usually right. Investigate. Either you're measuring the wrong input, or the team has found a way to hit the number without delivering the outcome the input was supposed to drive. Both are problems. Both are fixable. But you only see them if you're running both systems — metrics and anecdotes — side by side.

## How to Apply

1. **Separate inputs from outputs in every plan.** Name them explicitly. Outputs: revenue, profit, share, retention. Inputs: selection, price, delivery, in-stock, defects, conversion, NPS components, feature adoption. The list varies by business; the split always holds.

2. **Hold teams accountable for inputs, not outputs.** A team cannot directly move revenue. A team can directly move conversion rate, or average delivery time, or selection depth. Give them accountability for what they can control.

3. **Track the connection.** The input metric you chose is hypothesized to drive the output metric. Verify. Over time, does moving the input actually move the output? If yes, it's a good input. If no, find a better one.

4. **Work the inputs weekly, review the outputs quarterly.** Cadence matches controllability. Inputs change in days or weeks; outputs change in quarters or years. Confusing the cadences produces either anxiety (watching outputs daily) or complacency (reviewing inputs only annually).

5. **Combine metrics with anecdotes in every review.** Data is the baseline; individual customer stories are the audit. When they disagree, the anecdotes are usually right — your measurement has drifted from the reality.

6. **Be willing to change your input metrics.** The right inputs evolve as the business evolves. A metric that was the right input five years ago may not be now. Audit annually.

7. **Resist composite input metrics.** Single summary numbers that combine multiple inputs hide the information that lets you actually improve. Track each input individually. Read them together.

## Examples

**Situation:** Setting goals for an Amazon retail team. The output metrics are revenue and profit — numbers the team cannot directly move, because they're the result of thousands of individual customer decisions the team doesn't control.

**Application:** The input metrics the team is accountable for are: selection (how many products are available in their category), in-stock rate, price competitiveness, delivery time, and defect rate. These are things they can directly influence through their own work. They can add vendors. They can improve demand forecasting to reduce stockouts. They can negotiate lower costs. They can work with fulfillment to shave delivery time. Each of these, if moved, produces eventual movement in the output metrics.

**Result:** The team knows what it's doing every week. They are not trying to move revenue; they are trying to reduce out-of-stock incidents and speed up delivery. The output metrics follow.

---

**Situation:** The Weekly Business Review. The team has been hitting their input metric target — conversion rate is up. Customer complaint volume has also risen. The input says we're winning; the anecdotes say we're losing.

**Application:** Investigate. Usually the finding is one of two things. Either the input metric is wrong — conversion rate went up because we optimized the checkout flow in a way that hid a problem customers still felt later. Or the team found a way to hit the metric without delivering the outcome — the checkout converts, but the customer hits friction after the purchase. Either way, the anecdote is pointing at real failure that the metric is hiding.

**Result:** The team either redefines the input metric or finds the post-conversion problem and fixes it. The check — metrics plus anecdotes — catches the drift before the output metrics get hit.

---

**Situation:** A team wants a "team health score" that rolls up their input metrics into a single number. They argue that it would make reviews faster.

**Application:** Composite metrics are usually proxies. The single number would be easier to watch, but it would hide the information that lets the team actually improve. A team whose health score is down doesn't know what to fix; a team whose in-stock rate specifically dropped knows to investigate inventory. Keep them separate. Watch them together.

**Result:** The team tracks inputs individually. The WBR reads them as a group. When one moves unexpectedly, the team knows which one to investigate. Fast is not the same as useful.

## Anti-Patterns (tactical)

**Don't:** Hold teams accountable for output metrics they cannot directly move.
**Why:** A team that cannot affect the metric they're measured on will produce either anxiety or performative activity. Neither moves the metric. Give them inputs they can actually work.

**Don't:** Call something an input metric if moving it doesn't move the output.
**Why:** That's a proxy, not an input. The test is: when the input metric changes, does the output metric eventually change in the expected direction? If not, find a better input.

**Don't:** Track input metrics without a review cadence.
**Why:** A dashboard nobody reads is decoration. The cadence — WBR — is what turns tracking into action. Without the review rhythm, the metrics exist but don't drive behavior.

**Don't:** Build composite input metrics.
**Why:** Combining multiple inputs into a single score hides the underlying information. Teams optimize for the composite. The individual drivers drift. The score stays green. You've just built a new proxy.

**Don't:** Let input metrics substitute for customer anecdotes.
**Why:** Metrics are measurements. Anecdotes are direct customer signal. When they disagree, the anecdote is usually right. Run both systems in parallel; trust the anecdote when they conflict.

**Don't:** Assume the right input metrics stay the same forever.
**Why:** Businesses evolve. An input that was the right lever five years ago may not be now. Audit the inputs annually. Replace the ones that have stopped driving the outputs.

**Don't:** Use "we care about inputs, not outputs" to avoid accountability for outcomes.
**Why:** The philosophy is not "outputs don't matter." It is "outputs follow inputs, so work the inputs." If a team works the inputs and the outputs never move, something is wrong with the chosen inputs or with the execution, and accountability for outputs still applies — just on a longer cadence.
