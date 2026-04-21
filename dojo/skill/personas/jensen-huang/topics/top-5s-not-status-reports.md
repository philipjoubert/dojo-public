---
triggers:
  - "user asks how to stay informed as a CEO without drowning"
  - "user frustrated that status updates are sanitized and useless"
  - "user trying to replace status reports with something better"
  - "user wants a lightweight way to hear weak signals from the edges"
  - "user asks about bottom-up information flow"
  - "user wants to know what good direct reports should send upward"
use_when:
  - "you're scaling past the point where you can walk the floor"
  - "your current reporting cadence produces happy talk instead of real signal"
  - "you need a way to detect problems before they become visible in the metrics"
  - "you want junior employees to have a direct line to the top without a middle layer sanitizing it"
fails_when:
  - "leaders treat T5s as a status update — they describe completed work instead of current observations"
  - "the CEO doesn't actually read them, so they become theater"
  - "responses reveal weak signals but nobody acts on them — the sender stops sending honest ones"
  - "the format degrades into a rehash of the OKR or the project plan"
related:
  - "flat-org-60-direct-reports.md"
  - "no-recurring-one-on-ones.md"
  - "whiteboard-problem-solving.md"
  - "learn-in-public.md"
  - "pilot-in-command.md"
  - "intellectual-honesty.md"
---

# Top 5 Emails (T5s), Not Status Reports

## When to Use
- You're the CEO or a senior leader and you need a direct, unfiltered channel from every level of the organization.
- You've noticed that formal status reports have been sanitized of anything useful — the problems, the competitor noises, the delays, the customer pain.
- You want to detect weak signals — the stuff that's obvious to a junior employee on the ground but invisible to the e-staff.
- You want to replace a bloated reporting cadence with something that takes ten minutes to write and thirty seconds to read.

## Fails When
- The format becomes status instead of observation. "I shipped X, Y, Z" is a status report. The T5 is what's on your mind, what you're watching, what's changed, what's worrying you.
- The CEO doesn't read them. The practice lives on the reader as much as the writer. If nobody reads them, they stop being honest — people write what looks good instead of what's true.
- The first word of each bullet isn't an action word. Bullets that start with "ongoing" or "continuing" or "status" are filler. Bullets that start with "finalize," "build," "secure," "escalate" have a shape.
- The feedback loop is broken. If someone sends a weak-signal observation and nothing ever happens, the signal shuts off. People stop sending real ones. They send safe ones. Now you're blind.

## Core Concept

Most companies rely on formal status updates — the PowerPoint deck, the quarterly business review, the monthly report. I don't believe in those. What I've noticed about formal status reports is that they tend to consist of information that has been sanitized so thoroughly that it's useless. Anything smacking of controversy — current problems, expected roadblocks, personnel issues — gets removed in favor of presenting a cheerful picture of harmony to those in charge. That's not what I need. I need the weak signals, not the strong ones. The strong signals are easy to pick up. By the time they're strong, it's too late. I want to intercept them when they are weak.

So at Nvidia we do Top 5 emails. Every senior person — and really, people at every level of the organization — sends an email to their immediate team and to executives with the top five things they're working on and what they've recently observed in their markets. Customer pain points. Competitor activities. Technology developments. Potential delays. The ideal Top 5 email is five bullet points where the first word is an action word. It has to be something like "finalize," "build," "secure." Not "status of X." Not "continuing Y." An action word. Five of them. Tagged in the subject line so I can filter — cloud service provider, OEM, healthcare, retail — and search them like a database.

I read about a hundred Top 5 emails a day. On Sundays I dedicate a longer session. I drink a scotch and I do emails. It's the thing I do for fun. You might think that's a lot of input. It's much less than most CEOs take in — because most CEOs are reading carefully-crafted decks that took someone a week to produce, and they're still missing the actual information. Top 5s take ten minutes to write because there's no formatting, no narrative arc, no "how do I present this to the CEO." Just five bullets. Because there's no performance layer, the signal is closer to the truth.

Don't take this the wrong way, but the executive staff may not have the brainpower or the wherewithal to detect something I think is pretty significant. The person closer to the customer, closer to the silicon, closer to the code — that person has the signal. I want to hear it from them, not after it's been translated through two layers. The Top 5 email is a way for the information to arrive intact. It's a feedback channel. When I see the same theme across five Top 5s from five different parts of the company — "this machine-learning thing is moving fast, we're hearing it from customers, the research community is shifting" — I know we're not moving fast enough, and I go do something about it. RAPIDS got built that way. Multiple Top 5s flagged the opportunity before the executive strategy deck did.

## How to Apply
1. **Ask for five bullets, starting with action words.** Not a narrative. Not a status. Five bullets. First word of each: finalize, build, secure, escalate, investigate, kill, ship, decide. Verbs that presume the writer is accountable for something moving.
2. **Ask for observation, not completion.** What's on your mind. What's changed in your market this week. What the customers said. What the competitor did. What you're worried about. What you're excited about. Not "things I finished." Observations.
3. **Tag by topic in the subject line.** So it's searchable and filterable — cloud service providers, auto OEMs, hyperscalers, supply chain, whatever the meaningful axes are in your world. This turns the inbox into a live market-intelligence database.
4. **Read them.** Actually read them. A hundred a day. The whole practice is built on the reader actually reading. If you skim, the writers know within a week, and the honesty rate drops.
5. **Respond with action, not acknowledgment.** When a T5 surfaces a weak signal that matters, act on it. Quote it in a staff meeting. Spin up a project. Page the PIC. The writers need to see that the channel is real. Otherwise they stop sending anything but safe bullets.
6. **Do not replace the T5 with a dashboard or a form.** A form is a sanitization device. The T5 is prose from a person who knows something. The whole point is to skip the intermediation.

## Examples

**Situation:** Jensen is reading Top 5 emails on a Sunday evening with a glass of Highland Park. Across a handful of emails from different engineers and sales folks, a theme appears: something called machine learning is pulling unusual attention from researchers, customers are asking about compute for a "training workload" nobody has named yet, the research community is using CUDA in a new way.

**Application:** Jensen doesn't wait for the strategy committee to notice. On Monday he tells his staff: "I keep seeing this. I don't think we have enough invested in this technique called RAPIDS." He directs more software engineers to a CUDA library for data science. The weak signals from the T5s have just bent the resource allocation of the company.

**Result:** Nvidia shows up early to a market that only becomes obvious to everyone else years later. The decision was not made by the e-staff. It was made by the CEO reading bullets from people three, four, five levels below him who saw something first.

**Situation:** A senior VP writes a T5 that reads like a status report: "Continuing work on Q3 OKR. Ongoing discussion with customer X. Status of partner integration is on track." Five bullets, zero signal.

**Application:** Jensen responds — publicly, or by flagging it back to the e-staff — with a note on what a T5 is actually for. "These are observations, not status. What's on your mind? What's changed? What are you worried about? Give me action words. Give me weak signals. Otherwise this is wasted for both of us."

**Result:** The format tightens. The VP writes sharper T5s. The e-staff sees the correction happen in the open and nobody else drifts into the bad format either.

## Anti-Patterns (tactical)

**Don't:** Let T5s turn into OKR updates.
**Why:** OKR updates are backward-looking. T5s are forward-looking and real-time. If your T5 could have been copy-pasted from your project plan, it's the wrong artifact. Ask: what did you learn this week that your project plan doesn't know yet?

**Don't:** Treat the T5 as the place to report achievements for your performance review.
**Why:** The T5 is a detection instrument, not a publicity instrument. If you write it to look good, the signal-to-noise ratio collapses. The senior reader needs honesty. The writer needs to trust that honesty won't be punished. Both sides protect that by keeping the T5 boring and observational rather than triumphant.

**Don't:** Skip reading them when you're busy.
**Why:** The practice lives on the reader. The writers know within a week whether the CEO is actually reading. If they feel the emails vanish into a void, they start sending filler — or they stop sending at all. The channel closes. You are now a CEO who believes they have a listening apparatus and actually doesn't. Every Sunday. A hundred of them. Not negotiable.

**Don't:** Forward T5s to middle management for "rollups."
**Why:** A rolled-up T5 is a sanitized T5. The whole design premise is that the CEO reads what the engineer wrote, unfiltered. Middle management can absolutely read the ones below them — that's a feature — but the CEO should see the raw signal too. Never let a rollup replace the originals arriving in your inbox.

**Don't:** Use the T5 to ambush people at the staff meeting.
**Why:** If writing a real T5 becomes the thing that gets you yelled at in front of everyone, people stop writing real T5s. There is a version of accountability that kills honesty. Surface the issue, yes. But frame it as "I saw this in three T5s this week — what's going on? Let's work it" — not "so-and-so admitted in their T5 that they're falling behind." The staff meeting is for problem-solving, not for punishment-by-quotation.

**Don't:** Scale the T5 by hiring a team to read them for you.
**Why:** You've just built the filtering layer the whole practice was designed to eliminate. Read them yourself. A hundred a day is less time than one deck-driven QBR. If you genuinely can't absorb them, your problem isn't the T5 — it's that you're in too many other meetings. Cancel those.
