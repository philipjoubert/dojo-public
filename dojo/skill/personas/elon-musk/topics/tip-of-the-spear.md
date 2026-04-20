---
triggers:
  - "user has too many priorities and asks how to focus"
  - "user's team is spreading effort thin across multiple workstreams"
  - "user describes a program that's making progress on many fronts but not shipping"
  - "user is trying to allocate resources across competing projects"
  - "user says 'we have a bottleneck but I'm not sure where'"
  - "user describes a system-level goal that's blocked by one specific constraint"
use_when:
  - "there is a single dominant constraint whose removal would unlock everything downstream"
  - "the team has slack resources that could be concentrated on the constraint"
  - "the leader has authority to redirect effort and the credibility to do so"
fails_when:
  - "the constraint is misidentified — you redirect effort and still don't ship"
  - "there is no single constraint, only a portfolio of independent problems"
  - "the constraint is a person or team that cannot absorb more resources"
  - "you keep the focus pointed at the same constraint after it's been solved"
related:
  - "schedule-compression.md"
  - "the-algorithm.md"
  - "question-requirements.md"
---

# Tip of the Spear

## When to Use
- A program has 10 workstreams and none are shipping. That's a focus problem. Pick one.
- A system-level bottleneck exists and you can name it specifically — engine production, satellite mass, battery cost, a regulatory approval, a specific component's yield.
- The team is working hard but spreading effort. Hard work plus diffusion produces diffuse progress, which is indistinguishable from no progress at the system level.
- You have real resources — engineering attention, budget, time — that can be reallocated to the constraint. If everything is fixed, focus is an empty gesture.
- You're the leader and you can actually swing the hammer. Telling someone else to focus without having authority to redirect work is just a request.

## Fails When
- **You misidentify the constraint.** If you focus on X when the real limit is Y, you move effort in the wrong direction and the program stays stuck. Worse, the misdirection erodes trust — people worked hard on the wrong thing because you said so.
- **No single constraint exists.** Some programs are actually portfolio problems, not bottleneck problems. Ten independent customers, ten independent projects, no shared constraint. Focus doesn't help; execution capacity does.
- **The constraint is a person or team that can't absorb more resources.** If the bottleneck is one senior engineer's attention, throwing ten junior engineers at the problem makes it worse, not better. Know the shape of the bottleneck before applying force.
- **You hold the focus after it's been released.** Once a constraint is cleared, the next constraint becomes the new tip. If you keep pointing at the old one, you miss the rotation and the program stalls at the new bottleneck.

## Core Concept

At every level of scale, some single constraint dominates the system. Find it. Attack it. Ignore everything else until it moves.

This is Theory of Constraints in spirit, but the operational expression at SpaceX is sharper. Each site has a single dominating objective. Starbase has one goal: get to the Moon, then Mars. Everything at that site subordinates to that objective. When a bottleneck emerges inside it, resources concentrate on that bottleneck. When a NASA manager visited SpaceX, he observed that when a new problem appears, "it looks like a flash mob in the hallway." Twenty people converge on the issue, because they're not individually optimizing their own projects — they're all oriented to the system-level constraint.

When Starship development was bottlenecked on Raptor engine production, Raptor became the company's focus. Not heat shields. Not launch infrastructure. Not propellant loading. Raptors. Daily updates to me personally. Memos to the company. Resources redirected from elsewhere. Once Raptor production broke through, attention shifted. Now the bottleneck was something else, and the hammer followed.

This is hard to do for two reasons. First, organizations drift toward balanced portfolios — every team gets funding, every project gets attention, no one is explicitly told their work is secondary. That feels fair and is usually wrong. If the bottleneck is in engine production, the heat shield team working at 100% doesn't help the system — the finished rocket still can't fly. Their work is not more valuable for being diligent. Second, you have to identify the constraint correctly, which requires enough technical depth to see past the organizational chart. The bottleneck is rarely where the loudest complaints are. It's where the system queue is longest.

The way to find the real constraint: look at what's waiting on what. Throughput analysis. Which team is ahead of schedule (constrained by something upstream)? Which team is behind (either is the constraint, or is waiting on one)? Where is work-in-progress piling up? What specific component, if it shipped tomorrow, would unblock the most downstream activity? That's the tip of the spear. Point the company at it.

When you point, don't point softly. This is the "large hammer" pattern, as Andrej Karpathy described it from his Tesla years. When there's a blocker — Raptor production, GPU supply, a regulatory delay — I intervene personally. Personal phone calls to other CEOs. Daily updates on the specific constraint until it's resolved. Engineers reassigned. Budget moved. Offices relocated. The hammer is blunt on purpose — subtle pressure on bottlenecks doesn't work, because the organizational antibodies are strong. Blunt pressure does.

The hammer only works because the signal is clear. If you don't know exactly where the bottleneck is, you're just swinging in the dark, which damages everything you hit instead of moving the constraint. So identification precedes force. Spend the time to figure out what the real constraint is before you swing.

Two more points. First, once the constraint clears, rotate. The next bottleneck will be different. A team that was subordinated to Raptor production becomes the new priority when the next constraint emerges. Teams need to understand this is the pattern, not a personal verdict — "you weren't important" is wrong; the correct reading is "the system's constraint wasn't with you that month." Second, the tip-of-the-spear pattern is recursive. At the company level, one constraint. Within the constrained team, one sub-constraint. Within the sub-team, one constrained person or tool. All the way down. Each level identifies its own tip and attacks it.

## How to Apply

1. **Map the system.** Draw the pipeline from inputs to shipped product. Every major subsystem, every team, every handoff. You can't find a constraint without a map.

2. **Identify where work piles up.** Inventory waiting on something. Teams idle because their upstream is late. Meetings dominated by one topic. Missed milestones clustering around one function. That's where the constraint lives.

3. **Verify with throughput analysis.** If the constraint cleared tomorrow, how much faster would the system ship? If the answer is "a lot," you've found the tip. If the answer is "not much," keep looking — the real bottleneck is elsewhere.

4. **Name the constraint specifically.** Not "engine stuff." Not "supply chain." Specifically: "Raptor 2 turbopump production is limiting us to four engines per week; we need twelve." The more specific, the more actionable.

5. **Redirect resources.** Pull engineers from secondary projects. Move budget. Relocate offices if needed. This is visible and uncomfortable, which is the point — it signals to the whole company that this is the one priority right now.

6. **Be personally present at the bottleneck.** Daily. Walk the line, review the data, unblock the specific issues that the team can't unblock alone. Call CEOs of supplier companies. Do things that aren't scalable because the situation isn't a scalable situation.

7. **Monitor for clearance.** The signal is that the bottleneck stops limiting throughput. Production hits target. The queue drains. A new constraint appears elsewhere. That's success.

8. **Rotate.** Shift the focus to the new constraint. Resources can come home or redeploy. The team that was subordinated gets its own focus back. The company's rhythm is not "always attack Raptor" — it's "always attack the current tip, whatever it is."

9. **Communicate explicitly.** The team needs to understand why their project just got deprioritized. "The system-level constraint is X. Until X clears, everything else is secondary. When X clears, priorities rotate." Without explicit communication, people take deprioritization personally and morale suffers.

## Examples

**Situation:** Starship development is making broad progress but not reaching orbit. Engineering is working hard on heat shield tiles, avionics, fueling systems, flap dynamics.
**Application:** Trace the critical path. Raptor engine production is the binding constraint — without enough engines, you can't build enough vehicles, so you can't iterate fast enough to learn. Every other workstream is downstream of engine availability.
**Result:** Raptor becomes the company's focus. Daily updates. Resources redirected from elsewhere. Engine production ramps. Once engines are available, the bottleneck rotates — maybe to heat shields, maybe to infrastructure. The hammer moves with it.

**Situation:** Tesla Model 3 production hell, 2018. Line is slow. Cash is bleeding.
**Application:** Identify the constraint: battery pack assembly is limiting throughput. Specifically, a robot applying fiberglass is dropping parts and misapplying glue. I sleep at the factory. I'm in the line every day. Decisions that would take weeks in normal management cadence get made in minutes because I'm physically present at the bottleneck.
**Result:** The bottleneck shifts — first the battery line, then the final assembly, then the logistics. Each time, attention moves with it. The infamous tent in the parking lot was a tip-of-the-spear response to a specific final-assembly bottleneck. Not a general strategy, a specific surgical move on a specific constraint.

**Situation:** Your engineering org has 15 projects running in parallel. All are 60% done. None are shipping.
**Application:** Pick one. Not the favorite project, not the one with the best political support — the one whose shipping would most unblock the company. Put your best engineers on it. Pause or slow the others. Tell the leadership team clearly that this is the one priority until it ships. Ship it. Then rotate to the next.
**Result:** You go from 15 projects 60% done to one project 100% done, then the next, then the next. Cumulative shipped output is higher because each project now has the focus it needs to actually complete. The perceived unfairness of deprioritizing 14 projects is outweighed by the reality of actually shipping.

**Situation:** A supplier is late on a critical component. Your team is emailing them weekly.
**Application:** Weekly email is not tip-of-the-spear. If this is truly the constraint, call the supplier's CEO personally. Fly there if you have to. Sit in their office until you understand their specific constraint and help them solve it. This is dignified, not desperate — treating a real constraint with real presence rather than polite paperwork.
**Result:** The specific sub-constraint that's limiting the supplier becomes visible. Maybe they're short on a part you can source. Maybe they need an engineer you can lend. Maybe they need cash up front. Whatever it is, you can only find it by being there.

## Anti-Patterns (tactical)

**Don't:** Try to attack every problem equally.
**Why:** Balanced portfolios feel fair and produce nothing. If the system has a bottleneck, non-bottleneck work doesn't move the system. Accept the unfairness. Focus is a choice to be temporarily unfair in service of system-level output.

**Don't:** Misidentify the constraint.
**Why:** Focus applied to the wrong bottleneck moves effort away from the real one. This is worse than diffusion, because now you're concentrated on the wrong thing. Spend real time on identification — throughput analysis, queue inspection, honest conversations about where work is stuck. Don't just attack the loudest complaint.

**Don't:** Swing the hammer on a person.
**Why:** Large-hammer attention on a bottleneck is fine when the bottleneck is a component or a workstream. On a person, it's just bullying. If the constraint is one individual's capacity, the answer is to add resources around them, simplify their work, or replace them — not to beat them harder. Know the difference.

**Don't:** Hold the focus after the bottleneck clears.
**Why:** Constraints rotate. Once Raptor production breaks through, the next constraint is somewhere else. If you keep pointing at Raptor, you're over-resourcing a solved problem while the new constraint starves. Monitor for clearance and rotate.

**Don't:** Apply this without authority.
**Why:** Tip-of-the-spear requires redirecting resources. If you can't actually move engineers, budget, and attention, you can't execute. A middle manager who says "we should focus on X" without authority is just making noise. Either get the authority or escalate to someone who has it.

**Don't:** Skip the communication.
**Why:** Deprioritization without explanation feels like rejection. People assume their work doesn't matter. Morale drops. The correct framing is: "the system's constraint is elsewhere right now; your work matters and will be the focus when the constraint rotates." Say this out loud, repeatedly.

**Don't:** Conflate focus with permanent priority.
**Why:** "Focus" at SpaceX scale is a month-to-quarter phenomenon, not a permanent hierarchy. It's responsive to where the system queue is longest. Don't build organizational structures that assume the current tip is the permanent most-important thing — when the constraint rotates, your rigid structure will actively resist the new focus.

**Don't:** Stop at company-level focus.
**Why:** The pattern is recursive. Within the focused team, there's a sub-tip. Within the sub-team, another. Every level should be doing this analysis. A company that focuses at the top but has diffused teams underneath doesn't capture the full benefit. Teach the pattern down the org.
