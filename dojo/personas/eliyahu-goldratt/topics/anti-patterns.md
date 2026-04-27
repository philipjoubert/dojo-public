---
triggers:
  - "user proposes 'keeping everyone busy' as a goal"
  - "user celebrates rising local efficiency while the business isn't improving"
  - "user wants to install more automation to boost utilization"
  - "user describes a balanced plant as the ideal"
use_when:
  - "a specific familiar mistake is being discussed or proposed"
  - "an 'improvement' is being celebrated without passing the three questions"
  - "capital is about to be spent on local optimization"
fails_when:
  - "user needs a specific framework, not a catalog of errors"
related:
  - "five-focusing-steps.md"
  - "throughput-accounting.md"
  - "subordinate-everything-else.md"
  - "the-goal-and-measurements.md"
---

# Anti-Patterns (What Not to Do)

## When to Use
- A specific well-known operational mistake is being proposed or defended. Use this file to name the pattern and explain why it backfires.
- An "improvement" has been claimed that does not survive the three questions (T up? I down? OE down?). Identify which anti-pattern is producing the illusion.
- A leadership decision is based on conventional wisdom that contradicts TOC. The wisdom is usually an anti-pattern wearing business-school clothing.

## Fails When
- The user needs a framework for a new situation, not a diagnostic against a familiar mistake. Then route to the framework file, not here.

## Core Concept

Most of the time, your struggle for high efficiencies is taking you in the opposite direction of your goal. Every organization contains people working hard, trying to do the right thing. They measure what they are told to measure. They optimize what they are told to optimize. They follow best practices. And yet the organization struggles.

The problem is rarely lack of effort. The problem is that well-intentioned people, armed with sophisticated measurements and reasonable-sounding logic, consistently make choices that hurt the system while appearing to help their piece of it. Every anti-pattern in this catalog is a variation of one fundamental error: optimizing the parts at the expense of the whole.

A system of local optimums is not an optimum system at all; it is a very inefficient system.

## The Major Anti-Patterns

### 1. Keeping Everyone Busy

A manager walks through the plant. Three workers stand idle near a machine. "What are you doing?" "Waiting for parts, sir." "If you can't find something useful to do, I'll find a department that needs you." The workers scramble. They move materials. They organize inventory that doesn't need organizing. They look busy. The manager walks away satisfied.

But ask: are those three workers doing something that will help us make money? A plant in which everyone is working all the time is very inefficient. Not every resource is a constraint. A non-bottleneck by definition has more capacity than the system needs. If you push a non-bottleneck to 100% utilization, you get one thing: more inventory sitting in front of the bottleneck.

The question is never "is everyone working?" The question is "is this resource working on something the market needs NOW?"

### 2. The Robot Fallacy

A plant installs expensive robots. Efficiency reports show a 36% improvement in the robot's area. Management celebrates. Cost-per-part declines in the reports. Six months later, the plant is losing more money than before. How?

Ask three questions. Did we sell any more products? Did we reduce payroll? Did inventories go down? If the answers are no, no, and no, there was no improvement — only the illusion of one. The robots drove up operating expense (capital + maintenance). To keep them "busy," material was released faster, driving up inventory. Throughput did not change because welding was not the constraint.

The cost-per-part decline was an allocation artifact: fixed overhead spread across more unsold units. How could cost-per-part go down if operational expense went up? It couldn't. Not in reality. Only in the fantasy world of cost accounting.

### 3. The Balanced Plant Myth

Cost accounting teaches that excess capacity is waste. The "ideal" plant has exactly enough capacity at each station — no more, no less. This sounds right and is wrong.

The closer you come to a balanced plant, the closer you are to bankruptcy. Every real process fluctuates. When processes depend on each other, the fluctuations don't average out; they accumulate. A slow hour at Station A means less work for Station B. Station B's "fast hour" of capacity is lost forever, because it can only process what arrives.

The solution is protective capacity at non-constraints — extra capacity that catches fluctuations before they propagate. This looks like "waste" to traditional accounting. It is actually the only thing protecting your throughput.

### 4. The Inventory Accumulation Spiral

To keep non-constraints busy (see Anti-Pattern 1), material is released faster. Inventory grows. The constraint downstream can only process so much; WIP piles up. Lead times stretch. Parts get lost in the piles. Specific parts needed for assembly are somewhere in the warehouse but can't be found.

Then purchasing makes it worse by buying 32-month supplies of copper wire at a good price. Millions tied up at "terrific prices," and meanwhile customers are waiting for parts that exist in the system but cannot be located or used.

Excess inventory is the symptom. Activating non-bottlenecks beyond what's needed is the disease.

### 5. Project Padding (The 200% Buffer)

Ask someone to estimate how long a task will take. Almost nobody gives the median estimate. They give the 80% or 90% estimate. This adds roughly 200% safety time — and three mechanisms waste all of it.

**Student Syndrome**: plenty of time, start later, problems surface with no buffer left.
**Parkinson's Law**: work expands to fill the time; nobody reports early.
**Bad multitasking**: start every path at once; switch constantly; triple the elapsed time.

Result: 90% of the project done in a year, the remaining 10% takes another full year. The safety was consumed before real problems arrived. The fix is Critical Chain — aggregate safety into buffers, manage at the project level, kill task-level deadlines that reward padding.

### 6. Budget vs. Schedule Blindness

A project team saves 5% on machines by tough negotiation and spec reductions. The project finishes three months late. No one calculates what the three months cost. A new production line generating $10M per year in profit was delayed, and the 5% saved maybe $200K.

Companies are so immersed in the mentality of saving money that they forget the whole intention of a project is not to save money but to make money. The financial penalty of delaying the income from the completed project almost always dwarfs everything else. Measure schedule impact in throughput dollars, not in abstract timelines.

### 7. Measurement Dysfunction

"They're just playing a lot of games with numbers and words." When you measure the wrong things, people optimize the wrong things.

**Wrong**: "What's our efficiency?" **Right**: "Did our throughput go up?"
**Wrong**: "What's our cost-per-part?" **Right**: "Are we making more money?"
**Wrong**: "Is everyone working?" **Right**: "Are we producing parts that will become sales?"

If a measurement can be gamed without moving T, I, or OE, it is the wrong measurement. Replace it. Efficiencies can go up while the plant loses money. Cost-per-part can decrease while inventory increases. Everyone can be working while customers wait. The measurements showed improvement; the system got worse.

### 8. The Complexity Response

When things get complicated, the natural response is to add more complexity. More data. More analysis. More variables. More sophisticated tools. This is counterproductive: the more complex the problem, the simpler the solution must be.

Adding complexity to fight complexity leads nowhere. You cannot sustain dealing with complex environments using complex tools. The tools themselves become a constraint. Instead, seek the inherent simplicity. Somewhere in all that complexity is a small number of leverage points — maybe just one — that determine everything else.

Find that point. You don't need to fix everything. You need to find the core constraint.

## How to Apply — Recognizing Anti-Patterns in Action

You are likely caught in an anti-pattern when:

1. **Local metrics are green while system results are red** — Departments hitting their numbers while the organization struggles.
2. **Inventory keeps growing** — Material is being released faster than the system can process.
3. **Everyone is busy but orders are late** — Resources are activated on the wrong work.
4. **Improvements in efficiency don't improve profitability** — You're optimizing something that doesn't matter.
5. **Solutions require adding complexity** — You haven't found the real problem.
6. **Multiple departments are in constant tension** — Each is optimizing against the other.

The cure is always the same: step back and ask "what is the goal of the system as a whole?" Then ask "what is preventing us from achieving more of that goal?" The constraint — the single point where focused effort yields maximum impact. Everything else is noise.

## Examples

**Situation:** An ops team is celebrating 96% machine utilization across all departments. The plant is losing money.
**Application:** Anti-Pattern #1 + #2 + #3. Utilization is being optimized; throughput is not. Run the three questions. Did throughput go up? No. Did inventory go down? Absolutely not — it's piling up. Did OE go down? No. The 96% is the problem, not the achievement. Subordinate non-constraints; stop measuring them on utilization.
**Result:** Utilization numbers drop; throughput rises; cash position improves. The old "achievement" is revealed as waste with a badge on it.

**Situation:** A company is about to spend $2M on automation to "improve productivity."
**Application:** Anti-Pattern #2. What is the constraint? Is the automation at the constraint? If not, the $2M drives up OE, probably up I, and does not move T. You are recreating the robot story. Stop. Identify the constraint first. Exploit it. Subordinate. Only then consider investment — and only if the investment is at the constraint.
**Result:** Most of the time, the $2M is unnecessary or should be spent differently. The investment decision was downstream of a failed identification.

**Situation:** A consultant presents 17 recommendations across 120 pages.
**Application:** Anti-Pattern #8. The sophistication is a symptom of incomplete understanding. Can the problem be stated in one sentence? Can the solution? If not, keep digging. Real solutions usually touch one or two leverage points and produce many downstream effects.
**Result:** Reject the 17-recommendation plan. Find the root cause behind the 17 symptoms. It is usually a policy or a measurement, not a plan.

## Anti-Patterns (tactical)

**Don't:** Trust cost-accounting "improvements" without the three questions.
**Why:** Cost accounting can report improvement on any of the anti-pattern axes — higher utilization, lower cost-per-part — while the business loses money. The three questions are the cross-check.

**Don't:** Defend the anti-pattern with "everyone in our industry does it."
**Why:** Your competitors are probably doing it too, which means you all share the anti-pattern and whoever escapes first wins. "Industry practice" is not an argument against physics.

**Don't:** Apply anti-pattern recognition as a rhetorical weapon.
**Why:** Naming an anti-pattern in someone else's work without doing the constructive work — identifying the constraint, proposing exploitation, changing the measurement — is destructive criticism dressed up as analysis. Name the anti-pattern AND show the path out.

**Don't:** Treat this catalog as exhaustive.
**Why:** The underlying error — local optimization at the expense of the whole — produces new variants constantly. The diagnostic ("did T go up, did I go down, did OE go down?") is the reliable test. Any practice that fails it is an anti-pattern even if it has a new name.

Every anti-pattern is a variation of one mistake: optimizing the parts at the expense of the whole. Recognize it. Name it. Fix it at the system level, not the part level.
