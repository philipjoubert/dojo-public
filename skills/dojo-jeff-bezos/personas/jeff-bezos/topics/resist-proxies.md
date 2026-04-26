---
triggers:
  - "user describes a dashboard that's green while customers are unhappy"
  - "user asks why a company feels bureaucratic despite 'doing the right things'"
  - "user mentions process becoming more important than outcomes"
  - "user describes market research replacing customer contact"
use_when:
  - "diagnosing why a process that once worked has stopped producing results"
  - "auditing metrics against actual customer experience"
  - "spotting where good practices have drifted into self-serving bureaucracy"
fails_when:
  - "used to justify abandoning all process — proxies are process that drifted, not process itself"
  - "applied as a witch-hunt rather than a systematic audit"
  - "confuses genuine leading indicators with proxies (not every indirect measure is a proxy)"
related:
  - "day-1-vs-day-2.md"
  - "input-metrics.md"
  - "customer-obsession.md"
  - "mechanisms-over-good-intentions.md"
---

# Resist Proxies

## When to Use
- Auditing an organization that feels bureaucratic despite following "best practices."
- Diagnosing why a process that once drove outcomes has stopped.
- Reviewing a dashboard that's green while customers are visibly unhappy.
- Any time a team says "we hit the process on schedule" as if that were the outcome.

## Fails When
- Used as a blanket license to abandon all process. Process isn't the enemy; drifted process is.
- Applied as a witch-hunt rather than a systematic audit. The point is to upgrade the system, not to punish people running the system.
- Confuses legitimate leading indicators with proxies. Not every indirect measure is a proxy — some indirect measures are exactly how you should manage. The test is whether the indirect measure still predicts the outcome it was designed to predict.
- Used to attack individual mechanisms without looking at whether the mechanism still serves the outcome. Redesign, don't just demolish.

## Core Concept

As companies get larger and more complex, there's a tendency to manage to proxies. The process becomes the thing instead of serving the outcome. This is dangerous, subtle, and very Day 2. A proxy trap is when you hit the metric, follow the process, or complete the review, and the underlying reality — the customer's actual experience — has deteriorated without anyone noticing. The dashboard is green. The organization feels disciplined. The customer is angry. All three can be true simultaneously, and the combination is the signature of Day 2.

The most common proxies: processes that were designed to serve the customer now serve themselves; market research that was designed to understand customers now substitutes for direct customer contact; composite metrics that were designed to summarize health now hide the failures underneath; customer satisfaction scores that were designed to reflect reality now measure whether people fill out surveys. Each of these starts as a legitimate tool. Each of them, over time, drifts into being followed for its own sake. The drift is invisible in the moment. You only notice it when you audit.

Good process serves you so you can serve customers. But if you're not watchful, the process can become the thing. You stop looking at outcomes and just make sure you're doing the process right. That isn't so bad: it's not that rare that a junior leader can make a mistake in pursuit of a right outcome. What's worse is when senior leaders reject the idea that this happens at their level. They say, "Our process is working fine," and the customer says, "This sucks," and the senior leader dismisses the customer story because "the process says we're doing well." That's Day 2. That's the trap.

The defense is not to abandon process. Amazon runs on heavy process — PR-FAQs, six-page memos, WBRs, OP1, Bar Raiser. The defense is to constantly audit whether the process still produces the outcome it was designed to produce. When the data and the anecdotes disagree, the anecdotes are usually right. Not because the data is wrong, but because you're measuring the wrong thing. The metric moved up while the customer experience got worse. That should terrify you. It means your measurement system has drifted away from what it was supposed to be measuring.

## How to Apply

1. **Audit processes against outcomes annually.** For each significant mechanism in the organization: is this still producing the outcome it was designed to produce? Answer honestly. If no, redesign. If yes, keep.

2. **When metrics and anecdotes disagree, investigate the gap.** The anecdotes are usually right. The data isn't wrong; your measurement is wrong. Figure out what you're actually measuring and what the customer is actually experiencing.

3. **Be suspicious of composite metrics.** Single summary numbers that combine multiple inputs usually hide more than they reveal. Look at the underlying inputs.

4. **Be suspicious of market research as a substitute for customer contact.** Surveys, focus groups, and satisfaction scores are useful as one signal among many. They are not a replacement for reading customer emails, watching customers use the product, or talking to them directly.

5. **Name the proxies when you see them.** Public, specific, direct. "We have a proxy trap here — we're hitting the process and the customer is having a worse experience." Euphemism protects the proxy.

6. **Redesign the process, don't demolish it.** The process exists for a reason. Find the reason. Rebuild the process so that it actually serves the reason. Demolition without redesign means the original problem comes back in a new form.

7. **Accept that proxy-hunting is permanent work.** There is no final audit where you eliminate all proxies and you're done. The drift happens continuously. The audit has to be continuous too.

## Examples

**Situation:** Amazon had begun sending marketing emails to customers based on browsing patterns. The email metric was a proxy — it measured revenue from the channel. It did not measure the quality of the customer experience. One campaign sent emails about personal lubricants to customers who had browsed but not purchased.

**Application:** The metric said the channel was working. The customer experience said the channel was doing harm. I shut down email marketing for sensitive categories on the spot. "We can build a hundred-billion-dollar company without sending out a single fucking email." The metric was green; the customer trust was red. When they disagree, the customer is right.

**Result:** Revenue from that channel took a hit. Customer trust — a Day 1 asset — was protected. The lesson: a metric that hits while the customer gets hurt is a proxy, and resisting proxies sometimes costs real revenue.

---

**Situation:** A team reports that their customer satisfaction score has hit a new high. At the same time, the "?" emails I've been forwarding from individual customer complaints have intensified — specific, detailed descriptions of problems.

**Application:** The satisfaction score is a proxy; the customer emails are signal. When they disagree, the anecdotes are usually right. Not because the score was miscollected, but because what the score measures isn't what the customer is actually feeling. Investigate the gap. Usually the investigation finds that the survey is measuring whether customers could complete a task, not whether the task was pleasant.

**Result:** The team learns that the score is not the outcome. The anecdotes reveal what is. The satisfaction score stays on the dashboard, but its role in decision-making is demoted — it's one signal, not the signal.

---

**Situation:** Two-pizza teams had a proxy problem of their own. Someone proposed "fitness functions" — composite metrics that would roll up several input metrics into a single score so teams could be compared.

**Application:** Teams started optimizing for the composite metric. They debated the weightings. The metric became the conversation instead of the customer outcome. The fitness function was a proxy the moment it existed, because it summarized away the information that would let you actually improve the underlying drivers.

**Result:** Amazon abandoned fitness functions. The lesson: composite metrics obscure what is actually happening. Track individual inputs with individual goals. When you combine them into a single score, you introduce a new proxy trap where the score becomes the thing and the inputs stop mattering.

## Anti-Patterns (tactical)

**Don't:** Treat a green dashboard as proof the organization is healthy.
**Why:** A dashboard measures what you chose to measure. Over time, what you measure drifts away from what actually matters. A green dashboard with unhappy customers is a Day 2 signature.

**Don't:** Dismiss customer anecdotes when they contradict your data.
**Why:** The anecdotes are usually right. Not always — data still has value — but the instinct to privilege data over anecdotes is an inversion. The anecdote is a direct reading of customer experience; the data is a measurement of the reading. Measurements drift. Experiences don't.

**Don't:** Respond to proxy traps by eliminating all process.
**Why:** Process isn't the problem. Drifted process is. Amazon runs on heavy process, and the process works because we audit it constantly. Eliminating process to avoid proxies throws out the bathwater and the baby.

**Don't:** Build composite metrics that hide the underlying inputs.
**Why:** The composite becomes the proxy the moment it's built. Teams optimize for the composite; the inputs that actually matter become invisible. Use individual input metrics. Resist the elegance of a single score.

**Don't:** Let the senior leader say "our process is fine" when customers are saying it isn't.
**Why:** That's the most dangerous version of the trap. Junior people making this mistake is recoverable; senior people making this mistake is the definition of Day 2. If the senior leader dismisses the customer signal because the process signal is green, the organization is already in decline and just hasn't felt it yet.

**Don't:** Mistake "resist proxies" for "blame the people running the process."
**Why:** Proxies are a systemic failure, not a character failure. The people are usually running the process correctly. The problem is that the process no longer maps to the outcome. Redesign the process; don't scapegoat the team.

**Don't:** Audit once and declare victory.
**Why:** Proxy drift is continuous. Mechanisms that were outcome-serving last year can be proxies this year. The audit has to be a cadence, not a one-time event.
