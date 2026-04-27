---
triggers:
  - "user describes a recurring problem with no structural fix"
  - "user says they'll 'try harder' or 'remember next time'"
  - "user asks how to prevent a mistake from recurring"
  - "user describes blaming individuals for a system failure"
use_when:
  - "a problem has recurred after a team committed to do better"
  - "a failure is being attributed to insufficient effort or care"
  - "the CEO wants to encode a value so the organization enforces it automatically"
fails_when:
  - "mechanisms are built for problems that genuinely were one-off and don't warrant systematic process"
  - "the mechanism itself becomes a proxy and nobody notices it no longer serves the outcome"
  - "the mechanism is designed but nobody actually enforces it"
related:
  - "bar-raiser.md"
  - "resist-proxies.md"
  - "customer-obsession.md"
  - "working-backwards-pr-faq.md"
---

# Mechanisms Over Good Intentions

## When to Use
- A problem has recurred after the team committed to fixing it. This is the loudest signal that a mechanism is needed.
- A failure is being attributed to human error or insufficient effort — the diagnosis is wrong; the system is wrong.
- You want to encode a value so the organization enforces it automatically rather than relying on memory or willpower.
- A new process is being designed and you want to structure it against predictable failure modes.

## Fails When
- Built for genuinely one-off problems that don't warrant systematic process. Not everything needs a mechanism.
- The mechanism itself becomes a proxy. The team follows the process, the outcome degrades, and nobody notices because the dashboard is green.
- Designed but not enforced. A mechanism that exists on paper but isn't actually run is worse than no mechanism — it creates false confidence.
- Used to replace judgment rather than augment it. Some problems require human discretion. Mechanizing them strips out the judgment that was the actual value.

## Core Concept

Good intentions don't work. Mechanisms do. That sentence is the core of how I think about organizational behavior. No company can rely on good intentions like "we must try harder" or "next time remember to..." to improve a process, solve a problem, or fix a mistake. The reason is simple and a little humbling: people already had good intentions when the problem cropped up in the first place. If good intentions were going to prevent the failure, they would have. The failure is evidence that good intentions weren't enough. Changing nothing except "we'll try harder" is asking the same system to produce a different result — which is a definition of failed thinking.

A mechanism is a systematic process that makes the problem structurally harder to repeat. Not impossible — mechanisms aren't magic — but structurally harder. The Bar Raiser is a mechanism: it prevents hiring bias by giving veto authority to someone outside the hiring team. The Andon Cord is a mechanism: front-line customer service reps can instantly block a product from sale when they detect a defect, no manager approval needed. The PR-FAQ is a mechanism: it forces customer-backwards thinking before any engineering resources get committed. In each case, the mechanism doesn't ask anyone to try harder. It changes the structure so that the failure mode is harder to produce.

The work of designing a good mechanism is harder than the work of writing a "we'll do better" memo. That's why "we'll try harder" is so tempting — it feels virtuous, it's emotionally satisfying, and it's cheap. The mechanism requires actually rethinking the process, building the tool, changing the workflow, and sometimes removing the person whose judgment has been demonstrated to produce the failure. The asymmetry is why so many organizations keep responding to recurring failures with more sincerity instead of more design. The sincerity feels like work. It isn't.

The one warning that matters: mechanisms can themselves become proxies. A mechanism designed to serve an outcome can, over time, drift into being followed for its own sake. The Bar Raiser process is valuable if it keeps raising the bar; it becomes a proxy if people run the protocol correctly while the average quality of hires declines because the bar itself has drifted. The mechanism must be audited against the outcome it was designed to produce. When the two disagree, re-design the mechanism. Don't just keep running it.

## How to Apply

1. **Notice when a problem recurs.** Recurrence is the signal. One-off problems are sometimes just one-offs. Recurring problems are evidence the system is producing the failure.

2. **Reject "we'll try harder" as a solution.** It isn't a solution; it's a comfort. If you catch yourself writing that phrase in a postmortem, rewrite the postmortem.

3. **Ask: what mechanism would make this structurally harder to repeat?** Not "what will we remember?" — what will the system enforce automatically?

4. **Design the mechanism.** Usually it is one of: a checkpoint in a workflow (Bar Raiser), a tool that enforces a rule (Andon Cord), a document that forces a specific kind of thinking (PR-FAQ), or a review cadence that surfaces anomalies (WBR). Pick the form that fits.

5. **Embed the mechanism.** It has to be part of the workflow, not an extra step someone has to remember. Mechanisms that depend on willpower are a contradiction — the willpower is what failed.

6. **Audit the mechanism against outcomes.** Every year or so, check: is this mechanism still producing the outcome it was designed to produce? If yes, keep it. If no, redesign it. Mechanisms that drift become proxies.

7. **Accept that designing a good mechanism is real work.** It takes longer than writing "we'll do better." That is why it works. The difficulty is load-bearing.

## Examples

**Situation:** Amazon had to confront the fact that hiring quality was drifting downward over time. Teams under pressure kept making "just this once" exceptions. Individually, every exception seemed reasonable. In aggregate, the bar was declining.

**Application:** The response was not "let's remind everyone to hold the bar higher." The response was the Bar Raiser: a specially trained interviewer from outside the hiring team, with veto authority, whose only incentive is long-term quality rather than filling the seat. The mechanism made the failure mode structurally harder. The hiring manager's short-term urgency can no longer override the long-term incentive, because the authority lives with someone who doesn't feel the short-term urgency.

**Result:** Hiring quality stopped drifting. The mechanism didn't eliminate bad hires, but it made them structurally harder to produce. And when bad hires did happen, the postmortem could look at the specific mechanism and ask: what part of this process failed to catch it? That's a designable question. "Why didn't we try harder?" isn't.

---

**Situation:** Front-line customer service reps at Amazon would occasionally see a pattern of complaints about a defective product. In the old system, the rep would flag it, a manager would review, the review would take days, and customers kept buying the defective product in the meantime.

**Application:** The Andon Cord — adapted from Toyota's manufacturing line — gave every customer service rep a virtual button. When they pushed it, the product was instantly blocked from sale. No manager approval. The issue had to be resolved before sales resumed. The front-line employee, who was closest to the customer signal, had the authority to stop the harm.

**Result:** Defective products stopped reaching customers for days while approvals worked through the system. The heartfelt "I'm sorry you had this problem; we'll try harder to meet your needs" does not result in the improvement of a flawed system. The Andon Cord did.

---

**Situation:** A team keeps building products that customers don't want. The postmortems blame market misunderstanding or timing.

**Application:** The mechanism is Working Backwards and the PR-FAQ. Before any engineering resources are committed, the team writes the press release and the FAQ as if the product had shipped. The document forces them to articulate the customer, the benefit, the economics, and the feasibility. Most PR-FAQs get killed — that is a feature, not a bug. The mechanism prevents building the wrong thing by making the thinking happen before the building.

**Result:** The organization builds fewer bad products. Not because people are trying harder, but because the structure now requires proof of customer value before commitment. The mechanism is the proof-gate.

## Anti-Patterns (tactical)

**Don't:** Accept "we'll do better next time" in a postmortem.
**Why:** Good intentions were present the last time, and the failure happened anyway. Intentions aren't the lever. The mechanism is. A postmortem that doesn't produce a structural change is a ritual, not a fix.

**Don't:** Build a mechanism for every one-off problem.
**Why:** Not every failure recurs. Some are genuinely one-offs. Mechanizing them produces process overhead without preventing anything. Wait for recurrence — or a high-enough stakes projection of recurrence — before building a mechanism.

**Don't:** Let the mechanism drift into becoming a proxy.
**Why:** Mechanisms that are followed correctly while the outcome degrades are proxies. Audit annually. If the Bar Raiser is being run correctly but hiring quality is still declining, the bar itself has drifted and the mechanism needs redesign.

**Don't:** Design a mechanism that depends on memory.
**Why:** Memory is the thing that failed. A mechanism that requires someone to remember to apply it is the problem dressed up as a solution. Good mechanisms are embedded in workflows — the workflow doesn't proceed without them.

**Don't:** Replace judgment with a mechanism where judgment was the value.
**Why:** Some problems require human discretion. Over-mechanizing them strips out the judgment that was producing the outcome. The test: is the failure structural (repeats across people and conditions) or is it judgment-dependent (this person got this call wrong)? Mechanize the structural; keep the judgment-dependent.

**Don't:** Build the mechanism and not enforce it.
**Why:** A mechanism that exists on paper but isn't actually run is worse than no mechanism. It creates false confidence. The organization thinks the problem is solved while the failure mode is still live. If you're not going to enforce it, don't pretend to have it.

**Don't:** Treat mechanism design as HR work.
**Why:** The best mechanisms come from leaders who understand the operating reality deeply. HR can help implement, but the design has to come from people who know what good looks like in the actual work.
