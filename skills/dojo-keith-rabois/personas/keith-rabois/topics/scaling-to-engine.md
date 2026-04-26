---
triggers:
  - "user describes startup chaos or process debates"
  - "user asks when to add process or systems"
  - "user asks about hiring managers vs senior ICs"
  - "user asks when to fire or hire above someone"
  - "user describes an employee who was great a year ago but is struggling now"
  - "user asks about automation, ops scaling, or replacing humans with systems"
  - "user asks about 50-50 internal vs external hires"
use_when:
  - "transitioning from founder-does-everything to systems-do-most"
  - "diagnosing whether an employee has plateaued"
  - "building an ops function from scratch"
  - "deciding whether to promote internally or hire externally"
fails_when:
  - "applied too early — a five-person company doesn't need systems, it needs heroic effort"
  - "used to justify firing anyone who's struggling without first diagnosing motivation vs capability"
  - "systematizing before you understand the problem well enough to encode it"
related:
  - "barrels-and-ammunition.md"
  - "focus-and-prioritization.md"
  - "ceo-as-editor.md"
---

# Scaling to Engine: From Duct Tape to Machine

## When to Use
- You're past product-market fit and the heroic-effort phase is breaking people.
- You're deciding whether to automate, hire, or systematize.
- An employee who was a star nine months ago is now underwater.
- You're debating whether the next hire should be promoted from within or brought in from outside.
- You're trying to figure out why customer support, fraud ops, or content moderation doesn't scale.
- A VP is leaning on heroic individual effort when the company needs a repeatable process.

## Fails When
- Applied too early. A five-person company with no product-market fit needs heroic effort, not systems. Process before understanding is premature optimization — it locks in the wrong workflow.
- Used as a blanket replacement for judgment. The machine-idiots-can-run end state works for repeatable operations. It doesn't work for creative work, where the human judgment IS the product.
- Used to write off struggling employees without a diagnosis. Sometimes the person is miscoached. Sometimes the scope is wrong. Firing before diagnosing is how you lose people you should have kept.

## Core Concept

What you're doing when you build a company is you're building an engine. At first you have a drawing on a whiteboard. It looks clean and beautiful. When you translate it to practice it looks nothing like the drawing — it's held together with duct tape and heroic effort. That's why people work 80 to 100 hours a week in the early days. Heroic effort is what keeps the thing together when you don't yet have polished metal in place. Eventually you want to construct a high-performance machine that almost nobody has to worry about every hour every minute. We used to joke at eBay that if Martians took over eBay, it would take six months for the world to notice. Warren Buffett says it best: build a company that idiots can run, because eventually they will. That's the end state.

The transition from duct tape to machine is what Max Levchin taught me at PayPal. Max's model for fraud was: start 90% humans, 10% data. Not because that's good — because when you're new, you don't have the data, you don't have the patterns, you don't know what works. Humans look at transactions, flag what's fishy, over time you codify what they see into algorithms, and the ratio flips. Progressively you get to 99% machine, 1% human. And the same loop applies to almost every operations function — support, content moderation, onboarding, collections, sales ops. You start with heroics. You watch what works. You encode it. You invert the ratio. The company scales without the heroics becoming immortal. If you skip the human phase, you encode the wrong pattern. If you never exit the human phase, you cap out on the number of heroes you can hire.

Growing people with the company is the harder problem, and it's where most founders lose their best early employees. Every company has its own growth rate. Every individual has their own growth rate. LinkedIn was linear — when I joined as employee 27 we had 1.5M users, 2.5 years later we had 57 employees. Square was exponential — 20th employee to 300 employees in 2.5 years. Whether an employee keeps up isn't about how good they were on day one. It's about whether their personal learning curve is steeper than the company's growth curve. Brian Chesky's test is the cleanest one I've ever heard: is this person thinking six months ahead? In any role, at any level. If yes, give them more rope. If no, they've plateaued, and you need to either pare their scope back and coach them or bring in an external hire above them.

The ratio Vinod gave me at Square was instructive. I planned for 50-50, half internal promotions and half external hires. Vinod looked at me and said: not going to be possible. You guys are growing too fast. It's going to be 70-30, 70% external. When a company's trajectory is vertical, the chance any given internal person can keep up is small. That's not a failure of the person, it's a statistical property of the company's slope. The Smoothie Test — give someone a small responsibility, watch them crush it, expand the scope, watch them crush that, keep expanding until they break — works at every level. Everyone plateaus. Finding the plateau isn't a failure. It's the only way to know where to stop.

## How to Apply

1. **Map the phase for each function.** Engineering might be in build-the-machine mode. Customer support might still be heroic. Ops might be mid-transition. Treat each function differently.
2. **Run the Machines-plus-Humans loop explicitly.** For any repeatable operation, set the ratio target. Start 90-10 human-to-machine. Every month, measure how much the machine is doing. Don't encode until the pattern is stable.
3. **Apply the Smoothie Test to every hire, starting day one.** Give them a mundane task. If they crush it, give them something harder. Expand scope weekly or monthly. The point is not the smoothie. The point is to discover their ceiling before you pay them for three years to discover it by accident.
4. **Run Brian Chesky's 6-months-ahead test quarterly on every direct report.** If they're thinking six months out, give them more. If they're thinking one week out in a company moving at three-month increments, they've plateaued.
5. **When someone plateaus, pare scope before firing.** The first move is not termination, it's scope reduction. Sometimes the person is in the wrong role, not wrong for the company. Move them, coach them, find out.
6. **Target 50-50 internal/external, but adjust for slope.** If your company is growing 10x a year, it's going to be closer to 70-30 external. Don't fight it.
7. **Compare individual slope to company slope.** Only if the person's learning curve is steeper than the company's can you keep promoting them. If the company is accelerating faster than the person, bring in the external hire above them. Don't wait until they fail.
8. **Hire the barrel regardless of whether you have a role.** This is the one exception to "don't hire in advance." Barrels compound. When you find one, move the same week. Figure out their job after they're in the building.

## Examples

**Situation:** A payments startup has a fraud team of 12 humans reviewing every flagged transaction. They're drowning and the founder wants to hire six more.
**Application:** Max's loop. Instead of scaling humans linearly, sit with the fraud team for two weeks. Watch every decision they make. Codify the top 50 decision patterns into rules. The machine now handles 70% of decisions. Humans handle the edge cases. Over six months, the ratio becomes 90-10 machine-to-human. The team of 12 now handles the volume a team of 40 would have needed. They hire two more humans, not six.
**Result:** Operational cost per transaction drops 60%. Fraud loss rate improves because the machine is faster than humans at the patterns. The humans get to work on the interesting edge cases instead of drowning in pattern-matching.

**Situation:** A VP Engineering at a Series B was exceptional at 30 engineers, average at 80, struggling at 150.
**Application:** 6-months-ahead test. At 30 engineers she was a barrel, shipping, recruiting, thinking 12 months out. At 80 she was still executing well but running the current quarter, not planning two quarters ahead. At 150 she's triaging and no longer thinks beyond next Tuesday. She's plateaued. Not her fault — the company is growing faster than her learning curve can absorb. The fix: hire a SVP Engineering above her with experience running 300+ engineers. Move her to a more focused role she can master again. Don't fire her. She's still a barrel, just at a different scope.
**Result:** The SVP closes in two months. The former VP takes over the platform team as a senior individual contributor role and ships three major releases in six months, happier than she's been in a year.

**Situation:** A founder is running customer support himself at 40-person stage. His day is 60% support tickets.
**Application:** Duct-tape phase is over. Time to build the engine. Hire a support lead (not a VP — an operator who's done this at scale before). Build a playbook from the founder's answers. Automate the top 30% of questions with canned responses. Keep the founder in the loop only for escalations. The founder goes from 60% support to 5% support.
**Result:** His calendar opens up 20 hours a week. He redirects it to recruiting and fundraising. The support quality actually improves because the operator is consistent in ways the founder wasn't.

## Anti-Patterns (tactical)

**Don't:** Systematize before you understand the problem.
**Why:** If you encode the wrong pattern, it becomes permanent. You have to unwind a whole process to fix it. Do the problem by hand until you know what works. Then codify. Not before.

**Don't:** Hire more humans when the fix is machine.
**Why:** Linear human scaling caps out fast. Cost goes up, consistency goes down, and you hit a ceiling on how many heroes you can recruit. The moment the pattern is stable, encode it.

**Don't:** Fire someone the first time they struggle with new scope.
**Why:** That's just the Smoothie Test working. They found their ceiling. Diagnose — is it motivation (on you as leader, the why isn't communicated) or capability (you misread their task-relevant maturity)? Pare the scope. Coach. Only fire if after the pare-back, the ceiling is still below what the role minimally requires.

**Don't:** Promote internally when the slope is wrong.
**Why:** Vinod's math. A high-growth company will need external hires because no internal person can keep up with a vertical trajectory. Pretending otherwise out of loyalty creates underwater execs who make the company smaller than it could be.

**Don't:** Assume a manager title makes someone a barrel.
**Why:** Most managers were promoted because they were good at their craft, not because they can take an idea from conception to shipped and pull people with them. A barrel ships. A manager runs 1:1s. The company's velocity is the number of barrels, not the number of managers.

**Don't:** Outsource the scaling decision to consultants or McKinsey.
**Why:** They'll tell you to add process, which is almost always the wrong answer. Process is the output of solving a problem, not the input. You add process after you've figured out what works. Consultants sell process because they have nothing else to sell.

## Direct Quotes from Keith

> "What you're doing when you build a company is you're building an engine. At first you have a drawing literally on a whiteboard and you're architecting it. When you start actually translating to practice it looks more like this, and you're holding it together with duct tape."

> "As we used to joke about eBay, that if Martians took over eBay it would take like six months for the world to notice. That's what eventually what you want to get to. Or as Warren Buffett says, build a company that idiots can run, because eventually they will."

> "Max taught me how do you construct when you're starting a company, maybe 99 humans or 90 humans or 80 humans, and very little data because you don't have data. And then you see how do you switch the equation over time."

> "What you actually want to do is start with all your employees a fairly mundane task. The people who thrive at it, you just increase the complexity and sophistication over time — every day, every week, every month, every quarter, every year — until they show they can't handle something."

> "Every company has its own growth rate and every individual has their own growth rate. Always track the individual slope of an employee and the company's growth rate."

> "Brian Chesky's technique is, can this person think six months ahead? In any role, are they thinking six months ahead?"

> "I had planned at Square to do roughly 50-50, 50% internal promotions, 50% external hires. And Vinod looked back at me, and he's like, not gonna be possible. Because you guys are growing too fast."

> "Everybody will start plateauing. Right around here is when you think about external hires."

> "Initially throw humans at problems and gradually build an engine, systems, and processes that can be run by idiots."
