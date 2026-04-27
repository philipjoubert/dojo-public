---
triggers:
  - "user asks how to improve a process, product, or manufacturing line"
  - "user wants to automate something"
  - "user says they're optimizing a process"
  - "user describes a bloated system with lots of 'just in case' parts"
  - "user asks how to cut costs systematically"
  - "user mentions a production bottleneck or slow build cycle"
use_when:
  - "there's a real process or design to improve, not a greenfield strategy question"
  - "the team is adding complexity to solve problems, or jumping straight to automation"
  - "optimization efforts feel scattered or are attacking symptoms"
fails_when:
  - "you skip steps or do them out of order — automating before deleting is the classic failure"
  - "applied to things that should not exist at all — you're polishing garbage"
  - "used on safety-critical systems where conservative margin matters more than speed (Dragon crew capsule, not Starship)"
related:
  - "question-requirements.md"
  - "first-principles.md"
  - "design-manufacturing-coupling.md"
---

# The Algorithm

## When to Use
- You have an actual process, product, or design to improve — not an abstract strategy question.
- The team is adding parts, process steps, checkpoints, or features faster than they're removing them.
- You're tempted to jump straight to automation because it feels like the modern answer.
- A production line is slow and you don't know why.
- A design has accumulated "just in case" components and nobody can explain why specific pieces are there.

## Fails When
- **You do the steps out of order.** This is the single most common failure. Automating a process before deleting the unnecessary parts means you build robots to do things that shouldn't exist. I spent tens of millions at the Tesla Fremont factory automating steps I later realized should have been deleted. Order matters. Don't skip.
- **You apply it to high-margin-of-safety systems.** The algorithm optimizes for speed and cost. That's what you want for development hardware, factories, software. It's not what you want for crew vehicles or medical devices. Know which mode you're in.
- **You delete without being willing to add back.** If you're not adding back 10% of what you deleted, you didn't delete enough. But if you refuse to add anything back, you just broke the thing. The deletion is a probe, not a verdict.
- **You stop at deletion.** The algorithm is five steps, not two. Simplify, accelerate, automate — they're all real work. But they come in that order, always.

## Core Concept

There is a specific five-step process. It has to be followed in order. This is not a menu. Doing them out of order is how most engineering efforts waste their time.

The steps:

**1. Make the requirements less dumb.** The requirements are definitely dumb. It doesn't matter who gave them to you. It is particularly dangerous if the requirements came from a smart person, because you will question them less. Everyone's wrong. No matter who you are, everyone is wrong some of the time. All designs are wrong; it's just a matter of how wrong. Every requirement must come from a person, not a department. You cannot ask a department why a requirement exists. You can ask a person.

**2. Try very hard to delete the part or the process step.** If you are not adding back at least 10% of what you deleted, you are not deleting enough. The bias in every organization is strongly toward "let's add this in case we need it." You have to fight that bias actively. The best part is no part. The best process is no process.

**3. Simplify and optimize.** This comes *after* step two. The most common mistake a smart engineer makes is to optimize something that should not exist at all. If you try to optimize first, you lock in the wrong thing. So: delete, then simplify what remains.

**4. Accelerate cycle time.** Every process can be sped up. But only after you have done the first three steps. If you speed up a process with unnecessary steps still in it, you are just running the wrong race faster.

**5. Automate.** This comes last. The big mistake at Tesla's Nevada Gigafactory and Fremont was that I began by trying to automate every step. We should have waited until all the requirements had been questioned, the parts and processes deleted, and the bugs shaken out. We ended up sawing robots out of the production line and throwing them in the parking lot. Don't repeat that.

The algorithm has corollaries that matter as much as the steps:

- **Every technical manager has hands-on experience.** Software managers spend at least 20% of their time coding. Solar roof managers spend time on actual roofs. A cavalry officer who can't ride a horse is a joke. Same here.
- **Comradery is dangerous.** It makes people unwilling to challenge each other's work. Engineers don't throw colleagues under the bus. That has to be actively resisted.
- **It's OK to be wrong. Just don't be confident and wrong.** Confidence and wrongness together is how companies die.
- **Never ask anyone to do something you wouldn't do yourself.** If you won't sleep at the factory, don't ask them to.

The deepest point of the algorithm is the ordering. Most organizations want to jump to step 5 because automation feels like progress. It isn't. Automation amplifies whatever's underneath it. Amplify a bloated process and you get a more expensive bloated process. Delete first. Simplify second. Speed third. Automate last.

## How to Apply

1. **List every requirement by name.** For each requirement, identify a specific human who owns it. Not a department. A person. If nobody can name the owner, flag the requirement as suspicious. If the owner can't defend it, the requirement is a candidate for deletion. If the owner explains it and the reason no longer applies, delete it.

2. **Delete aggressively.** For every part, process step, approval, form, meeting, feature — ask: what breaks if we remove this? If you can't list specific breakage, delete it. If you can list breakage but it's small, delete it anyway and plan to add it back if reality bites. If you're not adding back at least 10% of what you deleted, go back and delete more. You haven't gone hard enough.

3. **Only now, simplify.** Take what remains. For each surviving part or step: can it be done with fewer materials, fewer sub-processes, fewer handoffs? Can two steps be combined? This is the step where clever engineering pays off, and it only works because steps 1–2 made sure you're not optimizing garbage.

4. **Accelerate cycle time.** Look at the clock. Where is time being spent? Queueing, handoffs, waiting for approvals, serialized steps that could parallelize, batch processes that could flow continuously. Compress the cycle. Don't compress quality — compress waste.

5. **Automate.** Now, and only now, decide what to automate. The rule: automation is expensive and brittle. It's worth it only for processes that will run many times, whose requirements are stable, and whose failure modes are well understood. Processes that are still being iterated shouldn't be automated — you'll just build jigs for designs you're about to change.

6. **Re-enter the loop.** The algorithm isn't one-shot. Every time the product changes, or volume changes, or a new bottleneck appears, start again at step 1. Requirements that were correct at one scale are wrong at another.

## Examples

**Situation:** Tesla Model 3 assembly line is slow. A robot is gluing fiberglass strips to the battery pack, dropping the strips with its suction cups and applying too much glue.
**Application:** Ask why the fiberglass is there. Turns out nobody's sure. Trace it back: it was added to dampen noise. Test a pack without the fiberglass — noise difference is negligible. Delete the fiberglass, delete the robot, delete the process step entirely. The problem wasn't a bad robot. It was a process step that shouldn't have existed.
**Result:** Line speeds up. Capital cost drops. A $30M robot budget gets returned. This is why you delete before you automate.

**Situation:** Falcon 9 grid fins are designed to fold during ascent, like traditional rocket grid fins. The folding mechanism reduces drag.
**Application:** Step 1: is the "reduce drag during ascent" requirement actually worth the mass and complexity of a folding mechanism? Simulate fixed fins. Drag penalty is small. Step 2: delete the folding mechanism entirely. Now you've saved mass, failure modes, and cost.
**Result:** Fixed grid fins. Simpler, lighter, fewer failure modes. The mechanism that "obviously had to be there" didn't.

**Situation:** SpaceX's booster landing program is blocked on Raptor engine production.
**Application:** Apply the algorithm to the Raptor production line. First, question every requirement on the engine — Raptor 2 is visibly cleaner than Raptor 1 because plumbing was aggressively deleted. Then simplify what remained. Then accelerate cycle time on the factory. Automation comes last, once the engine design is stable.
**Result:** Raptor production cost dropped by roughly half between Raptor 1 and Raptor 2, with fewer parts and higher thrust.

**Situation:** An engineer on your team is excited about automating a QA step.
**Application:** Before approving the automation, force them through the algorithm. What is the QA step testing for? When was the last time it caught a failure? If it's catching failures, what requirement is upstream failing? Fix the upstream requirement, delete the QA step if possible, and only automate what's left if the volume justifies it.
**Result:** Either the QA step vanishes (best case), or what gets automated is something minimal and durable (second best). You don't build expensive automation around a test that shouldn't exist.

## Anti-Patterns (tactical)

**Don't:** Start with automation. Ever.
**Why:** Automation amplifies whatever is underneath it. If the underlying process is bloated, you build a more expensive bloated process. Automating before deleting is how I wasted tens of millions at Tesla. It's the single most expensive mistake in the playbook.

**Don't:** Accept requirements anonymously.
**Why:** A requirement with no named owner is a requirement no one will defend — which means when the context changes, no one knows whether it's still needed. Every requirement must trace to a specific person. If the person is unreachable, gone, or can't articulate why, the requirement is a candidate for deletion.

**Don't:** Be afraid to delete something a smart, senior person insisted on.
**Why:** Smart-person requirements are the most dangerous. People defer to them. "Engineer X said we need this" becomes a shield against further thinking. It's specifically the requirements from smart people you have to interrogate hardest.

**Don't:** Delete without being willing to add back.
**Why:** The deletion is a probe, not a verdict. You delete to test whether it was necessary. If reality bites and you need it back, that's fine — that's why the 10% rule exists. You're calibrating. A refusal to add back means you were never really testing; you were just stripping.

**Don't:** Confuse "simplify" with "skip."
**Why:** Simplify means fewer parts, fewer steps, fewer handoffs — for the same function. Skip means the function is gone. Delete deletes functions. Simplify optimizes the remaining ones. Don't mush them together.

**Don't:** Apply the algorithm to crew vehicles or safety-critical systems without adjusting.
**Why:** The algorithm trades margin for speed and cost. That's the right trade for development hardware, factories, and software. It's not the right trade for something where a single failure kills people. Dragon capsule engineering is conservative — tons of margin, exhaustive testing, nothing deleted aggressively. Know which mode you're in. The algorithm is a tool, not a religion.

**Don't:** Stop after step 2.
**Why:** Deletion is the famous part, but it's not the whole algorithm. Simplification, acceleration, and automation each compound the gains from deletion. A team that deletes aggressively but never completes the cycle ships less than one that runs the full loop. Finish the work.
