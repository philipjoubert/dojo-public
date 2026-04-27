---
triggers:
  - "company is growing through 30–70 employees and things are breaking"
  - "information isn't flowing like it used to"
  - "people are surprised by things that should have been obvious"
  - "duplicate work happening across teams"
  - "decisions made without consulting obvious stakeholders"
use_when:
  - "founder is wondering why the company feels more chaotic after growth"
  - "planning the next layer of organizational infrastructure"
  - "diagnosing coordination failures during a growth phase"
fails_when:
  - "applied rigidly by headcount — the numbers are approximate"
  - "used to justify premature heavy process at 15 people"
  - "used to explain all coordination issues when the real cause is management"
related:
  - "communication-packet-size.md"
  - "environment-over-policy.md"
  - "top-and-bottom.md"
---

# Death Valley (30–70 Employees)

## When to Use
- You're growing through the 30–70 employee band and things that used to work — informal lunch coordination, everyone-knows-everything, hallway decisions — have stopped working.
- You're surprised by things you should have known. Decisions are happening that you hear about afterward. Teams are doing duplicate work.
- You can no longer have lunch with the whole company. That specific thing just happened.
- You're planning organizational infrastructure investment.

## Fails When
- Applied rigidly to the specific numbers (30–70). Some companies hit the valley earlier (complex interdependent work), some later (independent teams, lighter coordination). The pattern matters; the exact thresholds don't.
- Used to justify heavy process at 15 people. Don't build the infrastructure for 100 people when you're 15 — that's premature bureaucracy, which will select out the people who made the early company work.
- Used as a universal explanation for coordination problems. Sometimes it's not Death Valley; it's bad management, unclear priorities, or toxic culture. The valley is specifically the phase-transition problem.

## Core Concept

There's a specific range — roughly 30 to 70 employees — where companies go to die. I call it Death Valley. Unicorn, our internal tooling, is what really helped us get through it. Many companies don't make it.

Here's the mechanism. Under 30 people, informal coordination works. Everyone knows everyone. You can all have lunch together. Decisions happen through conversation. Problems surface quickly because everyone talks to everyone. The company is effectively one brain in one room.

Above 70 people, formal systems are obviously necessary and accepted. Org charts, regular meetings, documented processes. People expect these. The infrastructure exists, and it's load-bearing.

Between 30 and 70? Informal is broken. Formal isn't built yet. People are still trying to run the old playbook, and they're failing in ways they can't articulate. Problems surface late or not at all. Decisions get made that contradict other decisions. Teams duplicate work because they don't know about each other. The company has *more* people than before, but it's shipping *less*.

The valley is invisible while you're in it. It doesn't announce itself. One day communication just breaks. Projects duplicate because teams didn't know about each other. Decisions happen that contradict other decisions. People are surprised by things that should have been obvious. Nobody can point to the moment it broke. That's because the old coordination mechanism — "we all have lunch together" — stopped being a mechanism at all.

Many companies die here. Not from running out of money. Not from losing to competitors. From coordination failure. From things falling through cracks. From the specific confusion that comes when the old system has stopped working and no new system has replaced it.

The danger is that at 40 people you can still run the old playbook and survive. The system is held together by heroics — heroic informal communication, heroic personal follow-up, the founder manually bridging gaps. But the slope is compounding: each added person makes heroic coordination exponentially harder, and at some point heroics fail suddenly rather than gradually. The companies that survive are the ones that build the bridge before they need to cross it.

One non-intuitive piece: the people at 25 who loved the informal intimacy will resist the infrastructure at 50. "We don't need process, we're a startup." They're wrong — what they mean is "I liked the old thing and I don't want the new thing," which is a real feeling but not a valid diagnosis. The infrastructure is needed, and you can build it *without* turning into the kind of bureaucratic company those people fled. Both things can be true. Your job is to hold both.

## How to Apply

1. **Recognize when you're entering the valley.** Signs: you're surprised by things you should have known; decisions happen that you didn't hear about until after; teams are doing duplicate work; people say "I didn't know that was happening"; you can't have lunch with everyone anymore. That last one is almost a literal threshold.

2. **Build formal systems before they're urgently needed.** The worst time to build coordination infrastructure is when things are actively on fire. Build the basics while informal still works, so the infrastructure is ready when organic coordination breaks. Think of it as insurance you expect to use soon.

3. **Lightweight formality, not enterprise process.** You don't need enterprise bureaucracy at 40 people. You need *minimum viable coordination*: regular cross-team syncs, documented decisions, a way for information to flow between groups. The goal is sufficient structure, not comprehensive process.

4. **Invest in tools that make coordination the default.** This is the environment-over-policy play applied to Death Valley. A shared decision log that opens when teams start planning. Cross-team Slack channels with actual conventions. A weekly all-hands with a consistent format. Whatever makes "the information is visible" the default path.

5. **Over-communicate during the transition.** When organic breaks and formal isn't fully built, err toward more communication, not less. Duplicate updates across channels. Share information people might not strictly need. The cost of over-communication is much lower than the cost of the silos that form in its absence.

6. **Address the resistance directly.** People will say "we don't need process, we're a startup." They're wrong. Name what they actually mean: "you liked the old version of the company, and this new version will feel different." Acknowledge it. Then explain that the infrastructure is how the company survives the next phase, and commit explicitly to keeping it lightweight — this isn't a pivot to enterprise bureaucracy.

## Examples

**Situation:** Shopify, in the low-triple-digits era. Informal communication has broken. Teams are tripping over each other. The old operating pattern — everyone in one building, everyone in the loop — no longer fits.
**Application:** Build Unicorn. An internal tool that creates visibility across teams. Information flows through a shared environment rather than requiring everyone to be in the same conversation. Formal coordination, lightweight — without heavy process layered on top.
**Result:** The company makes it through Death Valley. The internal tooling becomes part of what distinguishes Shopify's operating system; it was invested in before the crisis forced the issue.

**Situation:** A 45-person company. Sales and engineering used to overlap naturally — engineers overheard sales calls, sales knew what was shipping. Now they're in different parts of the office. Engineering ships a feature sales hasn't been trained on. Sales promises features engineering isn't building. Customer complaints start coming in.
**Application:** This is textbook Death Valley. The fix isn't "fire someone" or "add more 1:1s" — it's a lightweight weekly cross-team sync, a shared release doc, and a Slack channel where engineering pings sales as they ship. Minimum viable coordination, deployed immediately.
**Result:** The gaps close within two weeks. The failure wasn't malice or incompetence; it was the absence of the infrastructure that would have made the coordination natural.

**Situation:** A 30-person company invests in a weekly all-hands, a shared project tracker, and cross-team Slack channels. It feels like overkill — things are still mostly working.
**Application:** Build early. At 30 it's overkill; at 60 it's load-bearing. The infrastructure you build proactively becomes the bridge you cross. The infrastructure you reactively scramble to build at 60 is a bridge constructed during an earthquake.
**Result:** By 60, the valley feels like a bump rather than a cliff. Information flows. Decisions get the right input. The company continues shipping through the growth phase.

**Situation:** A 50-person company has grown without adapting. The founders still run things like a 15-person team. They're exhausted. Things fall through cracks constantly. They respond by working harder, not by changing the system.
**Application:** This is the denial death spiral. Working harder doesn't scale through the valley — the coordination cost grows faster than individual heroics can absorb. The answer is structural, not energetic. Either build the infrastructure or the company degrades continuously until something breaks badly.
**Result:** Usually not good, if founders stay in denial. The companies that recover are the ones where someone — founder or trusted lieutenant — says "we are not a 15-person team anymore, we need the next version of the operating system" and builds it.

## Anti-Patterns (tactical)

**Don't:** Romanticize "flat" and "informal" once you're clearly past the valley.
**Why:** Some companies stay informal long after it's killing them, because the founders associate structure with the bureaucracies they started companies to escape. But structure at the right level isn't bureaucracy; it's what lets the company keep operating. Refusing to adapt is not scrappy — it's failing.

**Don't:** Over-build infrastructure pre-valley.
**Why:** At 15 people you don't need enterprise process, and building it will repel the people who make 15-person companies work. The principle is "build before you need it" — not "build as if you're already there." The timing window is approximately 25–35, when you can feel the informal model fraying.

**Don't:** Confuse all coordination problems with Death Valley.
**Why:** Not every information-flow issue is phase-transition. Sometimes it's bad management, unclear strategy, or a specific bad hire. Use the framework as a diagnosis, not a default explanation.

**Don't:** Let the valley be explained only by "we grew fast."
**Why:** Growth speed isn't the issue; the absence of infrastructure that matches the new size is. Slow-growing companies hit the valley too — they just hit it later. The fix isn't slowing down; it's building the bridge.

## Direct Quotes from Toby

> "Unicorn is what really helped us get through this 30 to 70 employee Death Valley, which is very hard to get through."

> "It's the time when your company realizes, we can't all go to have lunch anymore and talk everything over. You don't know what the people in sales might have accomplished, especially if you are in development."

> "At 20 people, casual coordination works — everyone in the loop, decisions over lunch. At 40, that stops working. But the muscle memory remains. People keep trying to run the old playbook."

> "The valley is invisible. It doesn't announce itself. One day communication just breaks."

> "Many companies die here. Not from running out of money or losing to competitors. From coordination failure."

> "The worst time to build coordination infrastructure is when things are actively on fire. Build the basics while things still work."
