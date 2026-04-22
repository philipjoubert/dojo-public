---
triggers:
  - "user asks about team size or structure"
  - "user describes coordination overhead slowing teams down"
  - "user asks about autonomous teams or service-oriented architecture"
  - "user mentions cross-team dependencies blocking progress"
use_when:
  - "product development org is suffering from meeting overload and diffused ownership"
  - "designing organizational structure for a growing engineering team"
  - "deciding how to scope a new team's charter"
fails_when:
  - "applied outside product development (marketing, finance, HR) — the model was designed for software teams with clean API boundaries"
  - "used without the underlying service-oriented architecture — small teams with shared databases still can't move fast"
  - "treated as a headcount cap instead of a dependency-minimization principle"
related:
  - "single-threaded-leader.md"
  - "mechanisms-over-good-intentions.md"
---

# Two-Pizza Teams

## When to Use
- Product development organizations where engineers spend more time in meetings than writing code.
- When coordination overhead between teams is the primary blocker to shipping.
- When designing the structure of a new engineering group from scratch.
- When a large team's throughput is lower than the sum of what smaller, autonomous teams could produce.

## Fails When
- Applied to functions that don't have clean separation. A two-pizza finance team still has to talk to every other finance team constantly — the autonomy isn't real.
- Used without service-oriented architecture underneath. Small teams sharing a database and a deployment pipeline are still coupled; calling them two-pizza doesn't make them autonomous.
- The "fitness function" variant is attempted — a composite metric that's supposed to capture team performance. Amazon tried this and failed; composite metrics obscure more than they reveal.
- Treated as a headcount ceiling. The two-pizza rule is about communication overhead, not about keeping teams artificially small when the work warrants more.

## Core Concept

Communication is a sign of dysfunction. That sounds wrong until you think about it carefully. When teams communicate constantly, it means they can't function independently. They need approvals, they need information, they need coordination. We should be trying to figure out a way for teams to communicate less with each other, not more. The two-pizza team is a structural answer to that problem: structure teams small enough that two pizzas can feed them — under ten people — and design the system so those teams can ship without asking permission from other teams.

The two-pizza model only works when it sits on top of service-oriented architecture. Internal services with clean APIs. No shared databases. No shared deployment pipelines that require coordinating releases. If a two-pizza team has to coordinate with another two-pizza team to ship a change, you don't have two autonomous teams — you have one team wearing two hats and a lot of meeting overhead. The architecture and the org chart have to match. This is why the model was so powerful at Amazon: we invested in APIs as organizational boundaries before we tried to shrink the teams.

There are things the two-pizza model didn't solve, and it's honest to name them. The fitness function idea — a composite metric to measure team performance — was an experiment that failed. Teams spent more time debating the weightings of the metric than improving what the metric was trying to capture. The requirement for a leader who could simultaneously own design, technology, and business results turned out to be very rare in practice; those people don't come off the shelf. And the model didn't transplant well to non-product-development contexts where the work doesn't have clean API boundaries. Over time, two-pizza teams evolved into single-threaded leadership — the same principle, but applied at whatever scale the initiative actually required, rather than forced into a fixed team-size cap.

## How to Apply

1. **Design the service boundaries first.** What does this team need to own? What are the clean APIs between what they own and what other teams own? If you can't draw those lines, you can't split into two-pizza teams.

2. **Staff under ten.** The exact number matters less than the principle: small enough that everyone can fit in one meeting, know what everyone else is doing without a status tool, and ship without waiting on approval from adjacent teams.

3. **Own the full stack.** Each team owns design, engineering, business outcomes, and the instrumentation that measures whether they're succeeding. No handoffs to a central ops team, no QA team that bottlenecks them, no central data team that controls their metrics.

4. **Invest in removing dependencies before building features.** This is the unglamorous work. Teams that skip it and jump straight to features end up re-blocked within months. Teams that front-load the dependency removal become the strongest performers.

5. **Measure with individual input metrics, not composite scores.** Resist the temptation to build a "team health dashboard" with a single number. Track the individual inputs that matter — shipping velocity, defect rate, customer-impact metrics — separately. When you need to know how the team is doing, read the inputs.

6. **Scale by adding more teams, not by growing teams.** When the work outgrows one two-pizza team, the answer is usually to split into two two-pizza teams with clean API boundaries between them — not to let the existing team balloon to fifteen people.

## Examples

**Situation:** Early 2000s. Amazon's engineering organization was growing fast, and cross-team dependencies were strangling shipping velocity. Teams were in meetings all day and shipping nothing.

**Application:** I introduced two-pizza teams as a forcing function. Every team had to be small enough that two pizzas could feed them at lunch. Around the same time, we were moving the entire internal platform onto service-oriented architecture — every service had a clean API, no back-door data access, no shared databases. The org chart and the architecture were being redesigned in parallel, because one wasn't going to work without the other.

**Result:** The two changes together — small autonomous teams plus service-oriented architecture — unlocked the shipping velocity that would later support AWS, Prime, and a dozen other major initiatives. The service-oriented architecture became so well-developed internally that Amazon realized the platform itself was a product customers would pay for. That's where AWS came from.

---

**Situation:** The fitness function experiment. Someone — reasonably — asked: if we have many two-pizza teams, how do we compare their performance? The answer proposed was a composite metric that would roll up several input metrics into a single score.

**Application:** Teams started optimizing for the composite metric. They debated the weightings. They argued about which inputs should count more. The metric became the conversation instead of the customer outcome.

**Result:** We abandoned fitness functions. The lesson: composite metrics obscure what is actually happening. Track individual inputs with individual goals. When you combine them into a single number, you lose the information that would let you actually improve performance, and you introduce a new proxy trap where the score becomes the thing.

---

**Situation:** Non-product-development groups (marketing, finance, HR) saw the success of two-pizza teams in engineering and wanted to adopt the model for their own functions.

**Application:** The model did not transplant cleanly. A two-pizza finance team still had to interact constantly with every other finance team — there was no API boundary to hide behind, because the work itself was inherently coupled.

**Result:** Two-pizza evolved into single-threaded leadership — the principle of dedicated, non-shared ownership, applied at whatever scale the initiative required. Alexa at its peak was far larger than ten people, but it had a single-threaded leader whose sole job was Alexa. That was the right application of the underlying principle; two-pizza was one specific instantiation of it in one specific context.

## Anti-Patterns (tactical)

**Don't:** Apply two-pizza without service-oriented architecture.
**Why:** Small teams that share infrastructure are still coupled. They will discover that they can't ship without coordinating, and they'll rebuild the coordination overhead inside the new structure. You'll have done the reorg and gotten none of the benefit.

**Don't:** Build composite team health metrics.
**Why:** Teams will optimize for the metric, not the customer. You'll spend more time arguing about weightings than improving performance. Track inputs individually. If you need to know how a team is doing, read the inputs — don't roll them up.

**Don't:** Staff a two-pizza team and then give it dependencies on three other teams.
**Why:** The team size is not the constraint that matters. The dependency surface is. A ten-person team with zero dependencies ships faster than a five-person team with five dependencies. Get the dependencies right first, then worry about size.

**Don't:** Skip the unglamorous work of dependency removal and instrumentation.
**Why:** Teams that rush straight to features get blocked within a quarter and have to re-do the infrastructure work anyway, now with customer pressure and a timeline. Front-load the dependency removal. It feels slow at first. It compounds into the strongest performance.

**Don't:** Force the model onto non-product teams where it doesn't fit.
**Why:** The model was designed for software teams with clean API boundaries. For teams whose work is inherently coupled — finance, HR, legal — use single-threaded leadership instead. Same principle, applied at the scale that actually matches the work.
