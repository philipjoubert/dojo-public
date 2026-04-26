---
triggers:
  - "user asks about annual planning"
  - "user describes planning cycles or OKRs"
  - "user asks about WBRs or weekly business reviews"
  - "user mentions reconciling bottom-up plans with top-down targets"
use_when:
  - "designing or diagnosing annual and weekly operating cadences"
  - "reconciling bottom-up team plans with top-down expectations"
  - "setting up a review rhythm for a growing organization"
fails_when:
  - "annual planning becomes a theatre that produces binders no one reads"
  - "WBRs become status theater — everything green, no real investigation"
  - "top-down targets are imposed without reconciling to bottom-up narratives"
related:
  - "six-pager.md"
  - "input-metrics.md"
  - "mechanisms-over-good-intentions.md"
---

# OP1 / OP2 and the Weekly Business Review

## When to Use
- Designing the operating cadence of an organization past the founding-team stage.
- Diagnosing why annual planning produces binders that nobody uses operationally.
- Setting up a weekly review rhythm that actually drives improvement rather than serving as status theater.
- Reconciling bottom-up team plans with top-down financial expectations.

## Fails When
- OP1 becomes a binder exercise that produces documents nobody consults after January.
- WBRs become status theater — every metric green, no real investigation, everyone performing competence.
- Top-down targets get imposed without reconciling against the bottom-up narratives. The planning process then turns into negotiation rather than thinking.
- The review presenter also prepares the deck. Bias contaminates the numbers they present.

## Core Concept

Planning and review are different problems, and they need different cadences. The annual planning process — at Amazon we call it OP1 and OP2 — is for deciding what to do over a year. The weekly business review is for seeing what's actually happening this week. Both are mechanisms, not ceremonies. Both have to serve the customer outcome rather than become a thing the organization performs at itself.

OP1 starts in the summer, four months before year-end. Each group writes a narrative operating plan — six-page memo, same discipline as any other important document at Amazon. The team states accomplishments, misses honestly, tenets, proposals, P&L, and an FAQ. Finance provides top-down growth expectations based on the overall business. The S-Team reviews all OP1 narratives and identifies gaps between the bottom-up proposals and the top-down targets. Those gaps must be explained: what investments, features, or programs would close them? The back-and-forth is the point. Bottom-up alone is wishful — teams ask for what they want. Top-down alone is imposed — leadership dictates without knowing the operating reality. Neither produces a good plan. The reconciliation does. OP2 happens after the new year begins, revising plans with fresher data and finalizing the year's commitments.

The Weekly Business Review is a different tool. The deck is prepared by finance or analytics, not by the team being reviewed. This is deliberate — a team that prepares its own review deck naturally narrates the numbers in the most favorable light. When an independent group prepares the deck, the story the numbers tell is the honest one. Charts show trailing data with the most current point on the right, year-over-year trends, weekly and monthly views on a single graph. The meeting focuses on exceptions and anomalies — not reviewing every metric, but digging into the ones that look wrong. Combine metrics with anecdotes. When metrics and anecdotes disagree, the anecdotes are usually right: it's not that the data is being miscollected; it's that you're measuring the wrong thing.

The right relationship between planning and review is that planning sets the commitments and review reveals whether reality is matching them. A plan that's never revisited is fiction. A review that isn't grounded in a real plan is noise. You need both cadences, you need them to connect, and you need each of them to follow their own discipline without bleeding into the other.

## How to Apply

1. **Separate planning from review.** Annual planning decides what; weekly review sees what. Don't run them on the same cadence or with the same tools.

2. **Run OP1 as a narrative process, not a spreadsheet process.** Every group writes a six-page operating plan. Read it in silence. Discuss line-by-line. The narrative forces clarity that slide decks hide.

3. **Require reconciliation, not negotiation.** Bottom-up narrative + top-down target. If there's a gap, the team's job is to explain what investments would close it. The S-Team's job is to decide what's worth funding to close gaps.

4. **Have a WBR.** Weekly. Same day, same time. Same format. The consistency is part of what makes it work.

5. **Have finance or analytics prepare the WBR deck, not the presenting team.** This is the structural defense against bias. The team being reviewed should not be the team shaping the story.

6. **Focus the meeting on exceptions and anomalies.** Don't review every metric. Review the ones that moved unexpectedly. Dig deeper on the ones that look wrong. "Why did this number change? What does the customer anecdote say? Where does the data and the anecdote disagree?"

7. **Track input metrics, not just output metrics.** Share price, revenue, and profit are outputs. You can't directly control outputs — you control the inputs that drive them. WBRs should center on the inputs.

8. **When metrics and anecdotes disagree, investigate.** The anecdotes are usually right. Not because the data is wrong, but because you're measuring the wrong thing.

## Examples

**Situation:** Amazon's OP1 cycle each summer. Each business unit writes its operating narrative. Finance lays out the top-down growth expectations for the year. S-Team reviews.

**Application:** The narratives are read in silence. Gaps between bottom-up proposals and top-down targets are identified. A unit that proposes 15% growth but where the top-down target is 25% has to explain: what would close the gap? New products? Additional investment? Pricing changes? The conversation is operational, not political — it's focused on what investments would change the trajectory.

**Result:** OP1 produces plans that are neither bottom-up fantasy nor top-down imposition. The reconciliation forces each unit to articulate the operating mechanism behind the number. The S-Team makes funding decisions with that mechanism in view. The plan survives contact with the year.

---

**Situation:** A WBR at Amazon. Finance team has prepared the deck. The trailing week's metrics are up on the screen. The conversation starts.

**Application:** Most of the metrics are boring — they are where they're expected to be. The meeting does not spend time on those. The conversation goes to two metrics that moved in unexpected ways. Someone asks: why? Someone else has an anecdote from a customer email: the customer described the problem in their own words. The data shows a 3% dip; the customer describes it as a full-experience failure. The anecdote is usually right. Investigation follows.

**Result:** The WBR produces specific follow-ups. Someone owns the investigation. The next week's WBR checks whether the investigation produced an action. The cadence is what makes the investigation happen — without the standing meeting, the anomaly would have been noticed once and forgotten.

---

**Situation:** The "?" email. I see a customer complaint email forwarded to jeff@amazon.com. I forward it to the relevant executive with nothing but a "?" at the top.

**Application:** The "?" is not a question. It is a trigger for the team to drop everything and investigate. The WBR process will cover the aggregate metric. The "?" email handles the specific anecdote — the one customer whose experience reveals what the aggregate is missing. Both systems run in parallel. Neither is a substitute for the other.

**Result:** Teams learn that individual customer anecdotes matter. They learn that aggregate metrics don't excuse a terrible individual experience. They learn that the CEO is reading the customer email. The combination — metrics in the WBR, anecdotes via the "?" email — is more powerful than either alone.

## Anti-Patterns (tactical)

**Don't:** Let OP1 become a PowerPoint exercise.
**Why:** The discipline is narrative. Slides flatten the thinking and hide the connections between investments and outcomes. Run OP1 as a six-page memo process. Read in silence. Discuss line by line.

**Don't:** Let the team prepare its own WBR deck.
**Why:** The team naturally narrates its numbers favorably. An independent data team preparing the deck produces an honest view. The bias elimination is structural, not a matter of effort.

**Don't:** Review every metric at the WBR.
**Why:** Most metrics are boring. The meeting should focus on exceptions and anomalies. A WBR that reviews everything has no time to investigate anything, and nothing actually changes as a result.

**Don't:** Treat the gap between bottom-up and top-down as political negotiation.
**Why:** The gap is a diagnostic, not a debate. The question isn't "whose number wins?" It is "what investments would close the gap?" Once you answer that question, the number follows from the mechanism, not from negotiation.

**Don't:** Run WBRs on output metrics alone.
**Why:** Output metrics are lagging. By the time they move, the underlying cause has been in place for weeks. Input metrics — the things you actually control — are where the leading signal lives. Focus WBRs there.

**Don't:** Let the "?" email and the WBR substitute for each other.
**Why:** They're different instruments. WBR captures aggregate patterns. The "?" email captures specific customer experiences. Aggregate patterns hide individual disasters. Individual disasters hide patterns. You need both.

**Don't:** Make WBRs optional for senior leaders.
**Why:** Senior attendance is what makes WBRs a real cadence rather than a delegated status meeting. When the CEO is in the WBR, the organization knows the review is real. When the CEO skips, the WBR becomes theater within one quarter.
