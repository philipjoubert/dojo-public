---
triggers:
  - "user asks how to set a schedule or performance target without anchoring on the competition"
  - "user sets a goal by looking at what competitors ship and trying to match it"
  - "user asks how to know when a project is 'good enough' to stop optimizing"
  - "user is stuck in a parity race with a competitor and cannot break out"
  - "user asks about Nvidia's scheduling discipline for chip design"
use_when:
  - "you can decompose a project into well-defined tasks, each with a theoretical minimum time or cost"
  - "you want to benchmark against physics, not against a competitor's roadmap"
  - "you need to separate 'we are fast compared to them' from 'we are fast compared to the physics floor'"
fails_when:
  - "applied to fundamentally exploratory work where no physical baseline exists"
  - "used as a cudgel — if it becomes a way to abuse the team rather than a planning discipline, the team stops telling you the truth"
  - "the 'speed of light' estimate is sloppy — a lazy theoretical baseline gives you an unreachable or meaningless target"
  - "confused with moving faster than the competition — it is about the physics floor, not the competitive floor"
related:
  - "accelerated-computing.md"
  - "run-dont-walk.md"
  - "pain-and-suffering.md"
  - "intellectual-honesty.md"
---

# Speed of Light

## When to Use
- You are setting a schedule or a performance target for a concrete project with measurable tasks — chip tape-out, firmware release, model training run, manufacturing cycle time.
- You catch yourself benchmarking against what a competitor just announced and you want to break out of the parity race.
- You are deciding whether a team is "done" with an optimization pass, and you need a principled stopping criterion rather than "good enough."
- You want a language inside your company that makes it easy to ask "why aren't we going faster?" without it becoming a personal attack.

## Fails When
- **The project is exploratory.** If nobody yet knows what the answer looks like, you cannot estimate the speed of light for reaching it. Speed of light is a discipline for execution against a known destination, not for research against an unknown one.
- **The theoretical baseline is lazy.** If "speed of light" is just a gut estimate, it is not speed of light; it is a slightly more confident guess. The power of the discipline comes from forcing the engineer to write down the physics or first-principles bound — "this step takes N hours because it takes N hours of photolithography on an ASML machine, full stop" — and then measuring the gap between the bound and reality.
- **Used as a management cudgel.** If the team learns that telling you the honest speed-of-light estimate will be used to beat them, they will inflate the estimate to create slack. Now the discipline is dead. It has to be a shared tool for planning, not a weapon.
- **Applied where the competition is actually the constraint.** Occasionally — rarely — the relevant deadline is defined by a competitor's launch or a partner's dependency. In those cases, the speed-of-light target still matters, but the commercial deadline is the binding constraint. Do not confuse them.

## Core Concept

Speed of light is the discipline we use at Nvidia to set schedules and evaluate progress. The idea is simple: for any given project, there is a theoretical minimum time to completion bounded only by physics — the cycle time of the manufacturing steps, the serial dependencies of the work, the laws of nature. That theoretical minimum is the speed of light for that project. Once you have estimated it honestly, your current schedule can be compared to it. If you are running at 5x the speed of light, you are doing almost nothing right; there is enormous slack in the system and most of it is not technical, it is political, procedural, or just inattention. If you are running at 1.1x the speed of light, you are essentially at the physics floor and your effort is better spent on the next problem. That is the entire doctrine.

The important part of speed of light is what it excludes. It does not measure you against your competitor. It does not measure you against last year. It does not measure you against the industry standard cycle time. It measures you against physics. The reason that matters is that competitors are a terrible benchmark. If you benchmark against a competitor, you stop when you catch them. If they are at 3x the speed of light and you are at 3x the speed of light, you both stop, congratulate each other on parity, and neither of you ever gets to 1.5x. The market rewards the first person to hit 1.5x. So you can only get there by having a target that is not the competitor. The speed of light is the only target that will not let you stop while there is still real room to run.

I have a former executive who put it this way: speed of light gets you into the market faster and makes it really, really hard, if not impossible, for your competitors to do better. The question he said I would ask was always: how fast can you do it, and why aren't you doing it that fast? That is the whole discipline compressed into two sentences. The first sentence establishes the physics bound. The second sentence demands that we close the gap between the bound and reality, one source of friction at a time — a queue here, a review gate there, a handoff somewhere else. Most schedules are slow not because the work is hard but because the work keeps waiting in queues between people. Speed of light surfaces those queues ruthlessly because each one is a piece of the gap between the current schedule and the physics floor.

A concrete case: when we were designing the RIVA 128, I told my software lead that most graphics chips take two years from concept to market and we had nine months. I asked him what the main limiting factor was in getting a graphics card to market. The answer was the time it took for TSMC to fabricate the silicon and for us to test the chip afterward — each of those steps had a floor. Everything else in the schedule could be compressed if we applied enough attention. So we did. We built our own chip-testing lab in-house, bypassing the normal cycle time for external testing. We made it one of the greatest tests of the speed-of-light discipline. We shipped. Nvidia survived because we refused to accept the industry-standard two-year cycle as the speed of light. The industry-standard cycle was the industry's cycle, which is a competitive benchmark. The actual speed of light was much faster, and we found it by decomposing the project and attacking every queue between steps.

Some notes on what this is not. Elon Musk has a tool called the Idiot Index — the ratio of a finished part's cost to the commodity cost of its raw materials. That is his framework, a tool for manufacturing cost diagnostics. Our speed of light is about cycle time and physics, not cost and materials. Both are first-principles disciplines, but they answer different questions and should not be conflated.

## How to Apply

1. **Decompose the project into concrete steps.** Not a Gantt chart full of review meetings. Actual technical steps with inputs, outputs, and dependencies. Chip design, for example, decomposes into architecture, RTL, logic synthesis, physical layout, tape-out, fabrication, packaging, test. Each one has a cycle time. List them.

2. **Write the physics bound for each step.** For each step, write down how long it would take if it had zero delays, zero queues, zero rework, zero approvals. Just the physics. For photolithography, that might be four weeks at the fab. For RTL sign-off, maybe two weeks of actual engineer-hours. Do not pad. Do not round up. Write the honest minimum.

3. **Sum them up accounting for parallelism.** Some steps are serial; some can be done in parallel. Build the critical path. The length of the critical path, at physics rates, is the project's speed of light.

4. **Compare to your current schedule.** Take your actual schedule and divide it by the speed of light. If the ratio is 5x, your schedule has four parts out of five that are not physics — they are queues, handoffs, reviews, rework, politics, unclear ownership, vendor delays, approval hierarchies. You now have a target: attack those four parts.

5. **Ask the question: "how fast can you do it, and why aren't you doing it that fast?"** Ask this in front of the team. The first answer is usually wrong. The second answer — if you push — is closer. By the fourth or fifth question, you will get to the real bottleneck, which is usually something nobody wants to say out loud. That is the thing to fix.

6. **Stop when you are near the floor.** If you get the ratio down to 1.1x or 1.2x, you are near the physics floor. Further optimization is very expensive and will produce diminishing returns. Stop, declare victory on that project, and move the speed-of-light attention to the next project. The discipline is as much about knowing when to move on as it is about pushing harder.

## Examples

**Situation:** Mid-1990s. We were designing the RIVA 128. The industry standard cycle time for a graphics chip from concept to market was two years. Our cash position meant we had at most nine months before we ran out of runway. We could not afford to accept the industry cycle.
**Application:** I decomposed the schedule into steps and asked what the physics bound was on each one. Silicon fabrication at TSMC was roughly fixed. Packaging was roughly fixed. But the testing cycle, which normally involved shipping hundreds of thousands of chips back and forth between vendors, could be compressed by building a massive chip-testing facility in our own office, with dozens of engineers manually testing boards day and night. It was logistically absurd, but it took weeks out of the critical path. We also compressed the design verification cycle by investing in an emulation machine — I used half of our remaining cash to buy it from a company that promptly went out of business.
**Result:** We shipped RIVA 128 in nine months. The company survived. The broader principle — that you can compress any schedule by hunting down the queues in the non-physics part of the work — became a foundation of how Nvidia operates today. Every major chip since has been executed under some version of this discipline.

**Situation:** By the late 2010s, the company had grown and I was noticing slowness creeping in — meetings that ran long, approvals that took weeks, projects that missed by quarters. I was frustrated that even "speed of light" no longer felt fast enough given the pace of AI.
**Application:** In an e-staff meeting, I told the team we needed a metaphor faster than the speed of light — which is, of course, physically impossible. I turned to Rob Csongor and asked what the Star Trek: Discovery propulsion system was called, the one that allowed instantaneous travel. He said it was the Mycelium Spore Drive. I shouted that we needed to be like the Spore Drive. Everyone laughed. We kept "speed of light" because it was an easier concept to explain than Mycelium Spore Drive, but the point landed.
**Result:** The conversation reset expectations about acceptable pace at a company that had grown from 5,000 to 30,000+ people without, I felt, a proportionate increase in cycle time discipline. Speed of light was a vocabulary we all shared. When a leader said a project would take two quarters, somebody else in the room could ask, "why isn't it two months at the speed of light?" and the conversation could proceed from there without it being a personal attack.

## Anti-Patterns (tactical)

**Don't:** Declare a speed-of-light target without doing the decomposition work.
**Why:** "We should ship in three months" is not speed of light. Speed of light is derived from a decomposition and a physics bound. If you pull a number out of the air and call it speed of light, you have created an impossible target that will demoralize the team and destroy their trust in the framework. Do the decomposition. Write the bound. Then set the target.

**Don't:** Benchmark against the competition and call it speed of light.
**Why:** The competitor's schedule is the competitor's schedule. Maybe they are at 3x the speed of light and you can crush them by getting to 1.5x. Maybe they are already at 1.2x and matching them is impossible for anyone. You cannot know from the outside. Benchmark against physics, not against other companies, because the competitor is a moving target that tells you nothing about the physics floor.

**Don't:** Use speed of light to punish a team that tells you the honest estimate.
**Why:** The discipline requires that people tell you the truth about what the physics bound actually is. If they learn that telling you the real bound will be used against them ("you said this was the physics floor, why haven't you hit it yet?"), they will inflate their estimate and the discipline dies. The speed-of-light estimate is a shared planning tool, not a whip. Treat it that way or lose it.

**Don't:** Apply it to research.
**Why:** Research has no known destination, so it has no speed of light. If you try to put exploratory work on a speed-of-light schedule, you will either kill the exploration (because nothing ever meets the bound) or corrupt the discipline (because the bound keeps shifting). Use speed of light for execution. Use other disciplines — intellectual honesty, run don't walk — for the exploratory phase.

**Don't:** Stop the discipline once you are in the lead.
**Why:** The common failure mode is that a team that just shipped a winning product relaxes because they are ahead of the competition. But the speed-of-light benchmark does not care that you are ahead; it only cares that you are below the physics floor. The next project has its own physics floor, and if you do not push for it, you will return to industry-standard cycle times and lose your lead within a generation or two. The discipline is permanent.

**Don't:** Accept "that's how the industry does it" as a reason.
**Why:** Industry-standard cycle time is a statement about the politics and habits of the industry, not about physics. When someone tells you a step takes eight weeks because it always takes eight weeks, ask them what the physics bound is. Most of the time, it is two weeks, and the other six weeks are queues, handoffs, and reviews you can compress. "That's how the industry does it" is always the answer of a team that has stopped hunting for the speed of light.
