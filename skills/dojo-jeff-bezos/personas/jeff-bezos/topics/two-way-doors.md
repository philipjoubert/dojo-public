---
triggers:
  - "user asks about decision-making speed"
  - "user describes a decision being over-deliberated"
  - "user mentions organizational slowness"
  - "user asks when to move fast vs. carefully"
  - "user is wrestling with a choice and wants a framework"
use_when:
  - "a decision is being slowed by heavyweight process"
  - "classifying what deserves deliberation and what deserves speed"
  - "training an organization to distinguish reversible from irreversible"
fails_when:
  - "applied to irreversible decisions — 70% rule is dangerous on one-way doors"
  - "used to justify sloppy calls on things that are genuinely reversible but expensive to reverse (cost matters even for two-way doors)"
  - "reversibility is claimed without genuine reversibility (PR disasters, brand damage, employee trust — these don't actually reverse)"
related:
  - "disagree-and-commit.md"
  - "day-1-vs-day-2.md"
  - "regret-minimization.md"
---

# Two-Way Doors vs. One-Way Doors

## When to Use
- Any decision that is being slowed by over-deliberation.
- When diagnosing why an organization is making high-quality decisions slowly.
- Training leaders to recognize which decisions warrant heavyweight process and which don't.
- Evaluating whether a stuck team is stuck on a genuine one-way door or on a Type 2 decision they've misclassified.

## Fails When
- Applied to genuinely irreversible decisions. The 70% rule is dangerous on one-way doors — there, you want more information and more deliberation, not less.
- A reversible-in-theory decision has practical irreversibility (reputation damage, employee trust, regulatory precedent, customer harm). Reversibility is more than "we can change the setting back."
- Used as blanket justification to move fast on everything. Some decisions are expensive to reverse even if they're technically reversible. Cost of reversal matters.
- Leadership says "Type 2" but the organization runs Type 1 process anyway. The classification has to change the process, or the framework is rhetoric.

## Core Concept

Most decisions are reversible. You can walk back through the door. If you open it and don't like what you see, you walk back through and try a different door. These are two-way doors, Type 2 decisions, and they should be made quickly — by individuals or small groups, at roughly 70% of the information you wish you had. If you wait until you have 90% of the information, you are almost certainly being too slow. And either way — whether you made the call at 70% or at 90% — you need to be good at quickly recognizing when you were wrong and course-correcting. If you're good at course-correcting, being wrong is less costly than you think. Being slow, on the other hand, is always expensive.

A small number of decisions are one-way doors. You walk through, the door closes behind you, and you cannot come back. Selling the company. Betting the company on a massive technology transition. A pricing structure that will be hard to unwind because customers have anchored on it. These are Type 1 decisions. They warrant deliberation, multiple rounds of review, many perspectives, and a willingness to take the time to get them right. The 70% rule does not apply to one-way doors. Neither does disagree and commit — at least not the same way. For one-way doors, you do the heavyweight work.

The disease of large organizations is applying Type 1 process to Type 2 decisions. As organizations scale, their decision-making processes were designed for irreversible, high-stakes calls — and over time, that same heavyweight process gets applied to everything, including trivial two-way doors. The result is reduced speed, stifled innovation, unthoughtful risk aversion, and longer development cycles. Invention dies. We need to work hard to avoid this in any large organization. The CEO's job, in part, is to be the chief slowdown officer on Type 1 decisions and the chief speedup officer on Type 2 decisions. If you get that backward — fast on the irreversible stuff, slow on the reversible stuff — you are doing the job badly.

There is also a version of the framework that applies at the existential level: the regret minimization framework. For life decisions, you project yourself to age 80 and ask which choice you would regret more. That's how I decided to leave D.E. Shaw and start Amazon. Most regrets are acts of omission — the things you didn't try. For business operations, use Type 1 / Type 2. For existential one-way doors in your own life, use regret minimization. They're cousins, not the same tool.

## How to Apply

1. **Classify the decision.** Is it reversible? If you make this call and it turns out wrong, can you walk back through the door? Be rigorous — "we can change the setting back in the software" is not the same as "we can undo this decision." Reputation, trust, precedent, customer harm — these may not reverse.

2. **For Type 2, apply the 70% rule.** Make the call when you have roughly 70% of the information you wish you had. Delegate it to an individual or small group. Do not require consensus. Do not require a six-page memo (unless the decision happens to touch a strategic question that warrants one anyway).

3. **For Type 2, build course-correction capacity.** You will make some calls wrong. The skill is recognizing that quickly and changing course. Track the results of Type 2 decisions honestly. If you made the call and it's not working, don't escalate the commitment — go back through the door.

4. **For Type 1, do the heavyweight work.** Multiple rounds of review. Many perspectives. A written document. Time to think. The 70% rule is the wrong tool here; so is disagree and commit. You want to get it right before you walk through.

5. **Watch for misclassification.** The dangerous error in both directions: treating two-way doors as one-way doors slows everything down; treating one-way doors as two-way doors produces catastrophic decisions. Leaders need to notice both.

6. **Use the door metaphor verbally in the organization.** "Is this a one-way door?" becomes a useful phrase that anyone can invoke. The shared vocabulary is part of what makes the framework operational rather than theoretical.

## Examples

**Situation:** Pricing Amazon Prime at launch. $49 or $99? Multiple internal analyses. No financial model could predict how customers would respond to free two-day shipping because it had never been offered at this scale before.

**Application:** This had elements of both types. The price itself was reversible — prices can be changed. But the anchor effect on customer expectations and the economics of free two-day shipping were harder to reverse. I chose $79 based on instinct and conviction rather than further deliberation. The team had the deliberation ready; at some point further analysis wasn't going to produce more certainty. I made the call.

**Result:** Prime became the center of Amazon's retail flywheel. If I had insisted on 90% certainty, we would have delayed the launch and lost first-mover advantage. If I had treated it as a pure Type 2 and delegated it to a product manager, the organization wouldn't have had the courage to price that low. The framework isn't a formula. It's a way of knowing when to keep deliberating and when to decide.

---

**Situation:** EC2 pricing. Willem van Biljon proposed 15 cents per hour to break even on the first iteration of EC2. This was a reasonable, well-analyzed proposal.

**Application:** I cut it to 10 cents in the S-Team meeting. This wasn't deliberation; it was a Type 2 judgment call based on a strategic intuition: higher margins attract competition, and I didn't want to repeat Steve Jobs's mistake of pricing the iPhone so profitably it became a magnet for rivals. Van Biljon said, "You realize you could lose money on that for a long time." I said, "Great." The price could be adjusted later if the math turned out wrong. It was a two-way door, made at 70% certainty, with course-correction available.

**Result:** AWS built a two-year lead. Competitors kept building on top of us because our pricing was low enough that nobody wanted to replicate our infrastructure. The Type 2 classification was correct — the price was reversible, and we were willing to take the loss if the math needed adjustment.

---

**Situation:** A team comes to me with a proposal. They've been deliberating for three months. The decision is: should we expand an existing feature to a new country? Reversible. Low stakes. Should have been made six weeks ago.

**Application:** I tell them this is a two-way door and the organization is treating it like a one-way door. Make the call. If it doesn't work in that country, pull it back. The cost of waiting another month is higher than the cost of being wrong.

**Result:** The pattern repeats in every large organization. The fix is not to tell one team to move faster. The fix is to install the classification as a reflex — "is this reversible?" — so the next team asks it themselves before spending three months deliberating.

## Anti-Patterns (tactical)

**Don't:** Apply the 70% rule to one-way doors.
**Why:** The 70% rule is a Type 2 tool. Using it on an irreversible decision means you'll sometimes walk through the wrong door with no way back. For one-way doors, take the extra time.

**Don't:** Claim "Type 2" when the practical reversibility is weak.
**Why:** Brand damage doesn't reverse. Employee trust doesn't reverse quickly. Regulatory precedent doesn't reverse. If the reversibility is technical but not practical, the decision is effectively Type 1.

**Don't:** Let "disagree and commit" substitute for the deliberation a one-way door deserves.
**Why:** Disagree and commit is a speed mechanism. On one-way doors, you want to slow down and get it right. Speed is not the priority there.

**Don't:** Route every decision through the same heavyweight process "just in case."
**Why:** This is the single most common disease of large organizations. The process was designed for rare, irreversible decisions and gets applied to everything. Innovation dies. Speed dies. People stop bringing up small ideas because they know the process will grind them down.

**Don't:** Make a Type 2 call and then refuse to course-correct when it's clearly wrong.
**Why:** The 70% rule works only if you're willing to walk back through the door when you see it's the wrong room. Escalating commitment to a losing Type 2 turns it into a much more expensive decision than if you had spent the extra time up front — you get the worst of both approaches.

**Don't:** Delegate one-way doors to individuals.
**Why:** Two-way doors should be made by individuals or small groups. One-way doors warrant broader perspective because the stakes of getting them wrong are higher than any individual should carry alone.
