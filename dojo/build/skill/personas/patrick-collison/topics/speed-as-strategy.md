---
triggers:
  - "founder debating whether to launch now or polish longer"
  - "user asks how to make an organization move faster"
  - "team is slow and velocity is eroding"
  - "user proposing resources in 'heads' or 'sprints' rather than time"
  - "founder choosing between short and long time horizons"
use_when:
  - "you're deciding whether to ship early or keep iterating in private"
  - "you're structuring an organization and want velocity to be a first-class value"
  - "you're removing friction from a product that others will integrate against"
  - "you're negotiating with a large institution that moves at a different cadence"
fails_when:
  - "the domain has hard irreversibility or regulated compliance where shipping broken is illegal, not just embarrassing"
  - "speed is pursued as its own virtue, detached from learning"
  - "you move fast but never extend the horizon, so you burn out before compounding kicks in"
related:
  - "tower-defense-model.md"
  - "pace-layering.md"
  - "first-hundred-people.md"
  - "infrastructure-over-products.md"
---

# Speed as Strategy

## When to Use
- You're deciding whether to launch something that isn't quite finished.
- You're structuring how a team allocates its time, resources, and attention.
- You're evaluating whether a project's friction points are acceptable or strategically costly.
- You're working with large institutions whose natural cadence is slower than yours.
- You're choosing between short-term thinking that ignores compounding and long-term thinking that ignores urgency.

## Fails When
- **Speed without learning.** Shipping fast into a void teaches nothing. The point is to generate information, not motion.
- **Speed without compounding.** If you sprint for six months and burn out the team, you've optimized the wrong variable. Speed has to be sustained long enough for the compounding effects to fire.
- **Speed as an excuse for sloppiness.** "Move fast and break things" is misread when people take it as license for carelessness. The idea is to solve problems faster than they accumulate, not to ignore the ones you create.
- **False speed.** Lots of activity, meetings, and sprints can simulate speed without any actual progress. Translate everything back into real time — how many days until we learn whether this works?

## Core Concept

Speed is the most underrated competitive advantage. Everyone claims to value it. But there's a difference between valuing speed as an abstract ideal and actually organizing your company around it. Most organizations are structured in ways that make genuine speed almost impossible. And speed here means something broader than shipping quickly, though that matters too. It means speed of learning, speed of decision-making, speed of response to new information. When you move fast, reality corrects your errors quickly. When you move slowly, you can deceive yourself for years. The constant pressure from Paul Graham at Y Combinator was: why have you not launched? It wasn't mean or judgmental. It was genuinely curious. Whatever obstacle you pointed to, the implication was always — is that really worth delaying? Is that worth the lost learning you'd get from having the thing in the world?

The relationship between speed and learning is more intimate than people recognize. When you ship quickly and fail, you learn something real. Your hypothesis was wrong, or your execution was flawed, or the market isn't what you thought. That's valuable information — it lets you correct course, update your model, try something different. When you ship slowly, something worse happens. You have time to build elaborate narratives about why your product will succeed. You can convince yourself you've figured everything out. The absence of contradictory evidence lets self-deception flourish. When you finally ship and the product fails, you've wasted all that time on an incorrect hypothesis. Speed is a truth-seeking mechanism. Moving fast generates information. It forces contact with reality. Slowness insulates you from reality and lets you persist in misconceptions. Fast Grants was a small experiment in this during early COVID — we wanted to see if we could commit to funding scientific research within 48 hours of receiving an application. Not weeks, not months, not the year-plus timelines of traditional scientific funding. It turned out we could. The research was successful by conventional measures. A proof of concept that speed is possible even in domains that seem inherently slow.

Speed is multiplicative across the ecosystem, not just internal. The seven lines of code pitch is the most concrete expression of this in Stripe's product. When we started, you could integrate payments in seven lines of code. Our competitors required weeks of work, contracts with banks, security audits, institutional overhead. We required seven lines. That simplicity wasn't just convenient — it was a speed multiplier for everyone who used us. There's our speed, how fast we ship products and fix bugs and respond to customer issues. And then there's the customer's speed, how fast they can integrate our product and get their business running. Total ecosystem velocity is the product of these two factors. When we reduce friction on our side, we save time for everyone building on top of us. This is why developer experience matters so much. Documentation isn't just nice to have — it's a speed multiplier. When a developer understands our API in an hour instead of a day, that's time they can spend building their actual product. When error messages are clear enough that people don't need to email support, that's faster resolution for everyone. The self-served model matters for the same reason. We're a self-served product for a ubiquitous need, in a domain where self-service is hard given regulatory and security requirements. Someone can sign up and process payments the same day, without talking to anyone, without negotiating a contract. That's a form of speed that creates genuine competitive advantage.

There's a misleading way people talk about resources that obscures what actually matters. They want to talk in heads. This project needs five heads, or ten heads. I sometimes push back by asking people to denominate in kilograms. How many kilograms of engineers does this project need? They look at me like I've lost my mind, because that's a ridiculous unit. But so is heads. What you actually care about is time and attention and skill, and heads compresses all of those into a single number that obscures more than it reveals. The underlying resource is time, and time is peculiar because it compounds in ways other resources don't. Money you can stockpile, raise, save, deploy later. Time you can't. Every day that passes is gone — a day your competitors also had, a day that could have been spent learning and iterating and improving. There's a concept from Dijkstra called the Buxton Index, the characteristic time horizon over which an organization makes decisions. Universities have high Buxton indices — they think in decades. Startups have low ones — they think in weeks or months. Organizations with very different Buxton indices find it difficult to work together. There's a fundamental impedance mismatch. That explains a lot about institutional dysfunction. When a startup works with a large enterprise, what feels urgent to you feels premature to them; what feels necessary to them feels impossibly slow to you. Neither side is wrong, but you're optimizing for different temporal scales.

Paradoxically, extending your time horizon is also a form of speed. If you're operating on a five or seven year horizon while competitors operate quarter to quarter, strategies open to you that aren't open to them. You can invest in things that take years to pay off. You can hire people who need substantial ramp time. You can build infrastructure that won't generate direct revenue for a long time but will make everything else faster once it's in place. A long time horizon lets you make short-term investments that compound. Your competitors, focused on quarterly metrics, can't justify these investments. So you build advantages that take years to manifest but, once they do, are hard to replicate. We took two years to recruit the first seven people at Stripe. Some individual hires took four years of conversation before they joined. By conventional startup standards, this is insanely slow. But the people we hired were genuinely exceptional, they're still at the company, and they've shaped everything that came after. The Henry Singleton model is relevant here — Singleton ran Teledyne for decades and was famous for changing strategy completely when conditions changed, but also for being extraordinarily patient. He would wait years for the right opportunity, hold cash during periods when it wasn't obvious what to do with it. He understood that time horizon itself was a strategic variable. Don't interrupt compounding unnecessarily is a phrase I come back to. Domain knowledge, customer relationships, infrastructure, talent — they all compound. Every decision that interrupts that compounding, whether by churning employees or making short-term tradeoffs that compromise the product, is a cost that won't be visible for years.

A useful mental model for all of this: startups as a tower defense game. In tower defense games, enemies approach along a path, and you build defenses to stop them. You don't control when enemies appear or how many come at once. You only control how fast you build defenses. Startups work similarly. You don't control the rate of problem appearance — problems materialize constantly, at every level, often simultaneously. Technical problems, hiring problems, customer problems, competitive problems, regulatory problems. They just keep coming. What you control is the rate at which you solve problems and create capacity to solve future problems. The default outcome for a startup is non-existence. The company is constantly trying to cease to exist. Your job is not to build something positive so much as to prevent the negative default from occurring. When problems appear faster than you can solve them, you're losing ground. When you solve them faster than they appear, you're building capacity. The margin between those two rates is your margin of survival. This makes speed existential, not just advantageous. A lot of startup advice makes more sense through this lens. "Move fast and break things" isn't about being reckless — it's about solving problems faster than they accumulate. "Launch early" isn't about shipping before you're ready — it's about starting the learning clock before problems overwhelm you. "Stay small" isn't about avoiding growth — it's about maintaining the speed advantage small teams have over large ones.

## How to Apply

1. **Treat speed as truth-seeking, not motion.** Before every big decision about when to ship, ask: what will I learn by putting this in the world sooner, and what will I deceive myself about by waiting? Slowness isn't just inefficient. It's epistemically dangerous. It lets you believe things that aren't true for longer than you should.

2. **Launch before you think you should.** The gravitational pull of every team is to polish for one more week. Paul Graham's question is the counterweight: why have you not launched? Whatever reason you name, evaluate it honestly against the cost of another week of self-deception.

3. **Simplify relentlessly for users.** Your speed multiplied by their speed equals market speed. Every bit of friction you remove from the integration process, every minute you save them debugging, every hour they don't have to spend in your docs — that's time they can invest in their own product. You're making the whole ecosystem faster.

4. **Translate resources into time.** When someone proposes a project in "heads" or "sprints" or "quarters," translate it back into real time. How many hours will this actually take? How many days until we learn whether it works? What are we giving up to do it? Heads and sprints obscure; hours and days clarify.

5. **Extend your time horizon where it creates advantage.** Some investments only make sense if you're willing to wait years for payoff. Competitors on quarterly timescales can't make these investments. If you can, you'll build advantages they can't replicate. Take two years to hire the first seven people if that's what it takes.

6. **Don't interrupt compounding unnecessarily.** Domain knowledge compounds. Customer relationships compound. Infrastructure compounds. Talent compounds. Every time you churn employees, reorganize for fashion, or make a short-term tradeoff that compromises the product, you pay a cost that won't be visible for years. Be deliberate about when you interrupt these flywheels.

7. **Model the tower defense game.** Keep track of the rate at which problems appear versus the rate at which you resolve them. The margin between those two rates is your survival margin. When they invert, nothing else matters until you fix it — not strategy, not vision, not fundraising.

8. **Recognize impedance mismatches.** When you're working with a large institution, you're not just moving at different speeds; you're operating at different Buxton indices. Both sides can be reasonable and still incompatible. Decide whether the partnership is worth operating across that mismatch.

## Examples

**Situation:** A founder has been working on a product for nine months and keeps finding one more thing to fix before launching. Every time they're about to ship, someone points out an issue that needs more polish. The elaborate narrative about why the product will succeed has become more sophisticated as time has passed.

**Application:** The length and sophistication of the narrative is itself the warning sign. Shipping generates information that updates the narrative. Not shipping lets the narrative grow unchecked by reality. Launch. Accept that the first version will reveal problems you can't predict from inside the building. The embarrassment of a rough launch is cheaper than nine more months of self-deception.

**Result:** Within weeks of launching, the team learns things they couldn't have learned internally — which parts of the product users actually care about, which parts they ignore, which assumptions were wrong. The correction cycle starts. Even if the launch is imperfect, the learning is real, and subsequent iterations converge toward product-market fit faster than any amount of pre-launch polishing could have.

**Situation:** A founder is trying to speed up an engineering org that has grown to a couple hundred people. Product teams are denominating everything in "heads" and "sprints." Projects that used to take two weeks now take two quarters. Nobody can explain exactly why, but velocity has clearly eroded.

**Application:** Translate every project proposal back into real time. How many hours will this actually take? How many days until we learn whether it works? Remove the friction points. Ask which dependencies are genuine and which are procedural habit. Pay attention to how fast customers can integrate — that's the other half of ecosystem velocity. And extend the time horizon on the things that matter most, so you can make compounding investments competitors can't.

**Result:** The organization rediscovers what speed actually is. It's not working longer hours or cutting quality; it's reducing the latency between decision and feedback, between problem and solution, between our work and the customer's work. Velocity comes back gradually, and with it the ability to take on harder problems because the tower defense rate is tipping back in the team's favor.

## Anti-Patterns (tactical)

**Don't:** Denominate work in heads.
**Why:** Heads conflates time, attention, skill, and coordination cost into a single number that obscures which one is actually binding. Translate to time and you see what's really being spent.

**Don't:** Confuse activity with speed.
**Why:** Meetings, sprints, and rituals can simulate progress without generating information. The test of real speed is whether reality is correcting your errors — not whether calendars are full.

**Don't:** Cut corners in the name of speed and call it Move Fast.
**Why:** "Move fast and break things" is about solving problems faster than they accumulate, not about generating more problems and ignoring them. The tower defense frame is a reminder that you can fall behind as easily by creating problems as by failing to solve existing ones.

**Don't:** Interrupt compounding for something that feels urgent but is actually shallow.
**Why:** Domain knowledge, customer relationships, and talent all compound. Short-term tradeoffs that churn these flywheels pay hidden costs that show up years later, long after the original urgency has been forgotten.

**Don't:** Operate at the same Buxton index as every counterparty.
**Why:** Some decisions need to be made in hours; some need to be made over years. Using the same clock for both is how organizations end up slow where they need to be fast, and rushed where they need to be patient.
