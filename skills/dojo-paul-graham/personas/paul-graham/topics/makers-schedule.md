---
triggers:
  - "user reports low productivity despite long hours"
  - "user says their day is full of meetings"
  - "user asks why engineers can't just 'jump into a quick call'"
  - "user is designing a team's operating cadence"
  - "user is scaling the company and wondering how to protect maker time"
use_when:
  - "makers are being dragged onto manager cadence and producing less"
  - "founder who codes is finding themselves unable to code anymore"
  - "scheduling norms in the company default to manager-style"
fails_when:
  - "the issue is not scheduling — output is low for product, morale, or team reasons"
  - "the company is at a stage where managers doing manager work is what's needed"
related:
  - "founder-mode.md"
  - "top-idea-in-your-mind.md"
  - "how-to-do-great-work.md"
---

# Maker's Schedule, Manager's Schedule

## When to Use
- A founder who codes (or designs, or writes, or does any creative production) is being pulled into meetings and output is collapsing.
- The company is growing and operational habits are defaulting to manager-cadence — meetings chopped into one-hour blocks all day.
- A founder is trying to figure out why hiring more people has reduced, not increased, output of the key creative contributors.
- A founder is designing how the company runs and has not thought about schedule as a first-class variable.

## Fails When
- The underlying problem is not scheduling but product, morale, or team dysfunction.
- The company is late-stage enough that most people should legitimately be on manager schedules.

## Core Concept

There are two ways of using time: the manager's schedule and the maker's schedule. The manager's schedule is for bosses. It's embodied in the traditional appointment book, with each day cut into one-hour intervals. You can block off several hours for a task if you need to, but by default you change what you're doing every hour. The whole day is composed of an interlocking sequence of meetings.

The maker's schedule is different. People who make things — programmers, writers, designers, researchers — generally prefer to use time in units of half a day at least. You can't write or program well in units of an hour. That's barely enough to get started. Makers operate in half-day blocks minimum. The most productive creative work happens when you can hold the entire problem in your head at once. This is a fragile state, easily destroyed by interruptions. It takes time to build and it evaporates instantly.

When you're operating on the maker's schedule, meetings are a disaster. A single meeting can blow a whole afternoon, by breaking it into two pieces each too small to do anything hard in. And you also have to remember to attend the meeting. This is no problem for someone on the manager's schedule — there's always something coming up in the next hour, and the only question is what. But when someone on the maker's schedule has a meeting, they have to think about it. The mere prospect of being interrupted is enough to prevent you from working on hard problems.

Most powerful people are on the manager's schedule. It's the most effective schedule for their job. But makers who adopt it, or are forced into it by managers around them, become much less productive. The way they handle meetings is an indicator of which schedule they're on. Managers welcome meetings; a meeting is normal to them, another hour-shaped unit. Makers who adopt manager-style scheduling produce much less than they should, and often don't know why.

## How to Apply

1. **Decide which schedule each role is on.** Managers are on the manager's schedule. Makers — engineers, designers, writers, researchers, analysts — should be on the maker's schedule. Some founders do both, which is the hardest case and requires explicit structure.

2. **Protect the maker blocks.** For makers, the default working day should have at least one continuous four-hour block with no meetings. Ideally two half-days — morning and afternoon — each free of interruptions. That's non-negotiable if you want the makers to produce. If every Tuesday is solid meetings, Tuesday is a wasted day for every maker on your team.

3. **Use office hours as the bridge.** If you need makers reachable, institute office hours — specific times when they're available — and keep the rest of the week clear. Outside office hours, makers are undisturbed. Inside, the world can ask them anything. This preserves the block structure while still allowing coordination.

4. **If the founder is both maker and manager, timebox.** Reserve one part of the day for maker work (usually morning, when cognition is highest) and let the afternoon carry the meetings. Don't try to do both at the same time of day; the prospect of a 2pm meeting kills the 11am code.

5. **Count the cost of meetings by maker-time destroyed.** A one-hour meeting with three engineers doesn't cost three hours. It costs three people's afternoons, which is more like twelve productive maker-hours. Managers systematically undercount this because they mentally convert all time to manager-hour units.

6. **Question the recurring meeting.** Standing meetings on maker time are the most common structural mistake. Every recurring meeting should pass the test: does this meeting repeatedly produce outcomes that justify the destruction of makers' afternoons? If not, cancel it. "We have a Tuesday 2pm" is not a reason. Most recurring meetings should be made async or deleted.

7. **Protect flow state as infrastructure.** The most productive programming happens in silence, in long unbroken stretches, in a state of flow that is as fragile as it is powerful. Treat that flow as infrastructure — something your company requires to produce. If you wouldn't turn off the power grid during production hours, don't turn off flow state during production hours.

## Examples

**Situation:** A founder who used to code shipped a lot of the product themselves. Company now has 25 people. The founder has stopped shipping entirely. They attribute this to "being a CEO now" and say it's fine. But they're frustrated they can't contribute directly anymore.

**Application:** It's not fine, and it's probably fixable. You've slid into the manager's schedule by default. Every day is chopped into one-hour meetings because each meeting felt reasonable individually. Cumulatively, they've destroyed your ability to do maker work. Try this: block Mondays and Fridays entirely. No meetings. Internal rule: nobody schedules anything on those days unless the building is on fire. Tuesday through Thursday is for meetings; those four hours a week multiplied by your current schedule probably covers everything that actually needs synchronous time. On maker days, code. Don't check Slack every twenty minutes — turn it off, or check twice a day at scheduled times. You'll be shocked how much you ship in two weeks. If it turns out you can't reclaim maker time at 25 people, that's a signal about what you've let the company become, and it's fixable.

**Result:** Founder blocks Monday and Friday. In the first week they ship a significant refactor they'd been avoiding for four months. Productivity of the whole engineering team rises because the founder is back in the code and shortening review cycles. The two-day meeting condensation produces better meetings, too — more decisions, less drift.

---

**Situation:** Engineering team lead asks: "Leadership wants a daily standup at 10am and a retrospective every Wednesday at 2pm. Engineers are complaining. I want to push back but don't know how to frame it."

**Application:** Frame it in maker-hours. The 10am standup probably costs each engineer one full morning of productive work, because they can't enter a flow state before 10am knowing the interrupt is coming, and after the standup they have at most a 2-hour block before lunch — which is not enough time for any hard problem to be held in mind. So the standup, which feels like a 15-minute meeting, is actually a 4-hour productivity destroyer per engineer per day. Similarly, a 2pm Wednesday retro kills the afternoon for everyone. Across six engineers, those two meetings destroy roughly thirty productive engineering hours a week. For that cost, they had better produce thirty hours of engineering value. They almost certainly don't. Propose: standup at 9:15am (before flow state would have started) and retro at 4:30pm on a Wednesday (at the tail of the maker block). Or: make standup async in Slack. Or: make retro biweekly. Any of those preserves most of the maker week without losing coordination.

**Result:** Team switches to async standup and biweekly retro. Engineers report feeling significantly more productive. Retro, now rarer, is also better-attended and more useful. Nobody misses the original cadence.

## Anti-Patterns (tactical)

**Don't:** Schedule meetings in the middle of the maker day "because it's convenient."
**Why:** Convenient for the manager; catastrophic for the maker. A 2pm meeting destroys the afternoon. Move it to 9am, 4:30pm, or end of day. Convenience in a manager-hour system is the opposite of convenience in a maker-hour system.

**Don't:** Treat "available on Slack" as a scheduling solution.
**Why:** Always-available Slack is a continuous low-grade interruption. Even if the maker doesn't reply immediately, the mental awareness of pending messages degrades flow. Better: protected blocks with Slack off, bounded office hours where Slack is fully engaged.

**Don't:** Equate maker output with hours in seat.
**Why:** Eight hours of interrupted time produces less than four hours of protected time. If you're paying for people's time, you're paying for their protected time. Destroy their protected time and you're effectively paying them to produce less.

**Don't:** Assume "quick syncs" are free.
**Why:** No sync is quick. The cost of a 15-minute meeting for a maker is usually two hours (one hour to prepare and settle back, one hour of broken flow). Reserve syncs for things that genuinely need synchronous decision-making. Many don't.

**Don't:** Let the manager's schedule spread to the whole company because leaders run it.
**Why:** Leadership's schedule naturally dominates when not contained. Makers adopt it because it's imposed, not because it fits their work. The founder's job, if they care about output, is to protect a different schedule for the makers even when it feels inefficient for the managers.

**Don't:** Hire managers to "free up the founder" and then keep the founder on the manager's schedule.
**Why:** Common pattern: company grows, hires COO, founder now has a partner — but the founder's day is still 10 back-to-back meetings. The hire was supposed to give the founder maker time back; instead it just produced more meetings. Recalibrate: after the hire, the founder's maker blocks should be *longer*, not shorter. If they aren't, something about the delegation didn't work.
