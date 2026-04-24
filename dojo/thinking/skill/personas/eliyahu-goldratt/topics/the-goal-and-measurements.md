---
triggers:
  - "user mentions efficiency, quality, customer satisfaction as 'the goal'"
  - "user describes behavior they call irrational, short-sighted, or political"
  - "user is changing training or exhortation to fix behavior"
  - "user is setting up performance reviews or bonuses"
use_when:
  - "the organization's stated goal and its measurements don't align"
  - "people are behaving rationally under current measurements and producing system-level damage"
  - "leadership is about to install a new metric without thinking through the behavior it will create"
fails_when:
  - "the situation is genuinely about culture or ethics, not measurements"
related:
  - "people-are-not-stupid.md"
  - "throughput-accounting.md"
  - "five-focusing-steps.md"
  - "anti-patterns.md"
---

# The Goal & Measurements — "Tell Me How You Measure Me"

## When to Use
- Before any improvement program. If the measurements are not aligned with the goal, improvement effort will be spent driving behavior away from the goal — earnestly, skillfully, and counterproductively.
- Any time someone is about to install a new metric, bonus structure, or performance review. The metric will produce exactly the behavior it rewards. That is cause and effect, not opinion.
- When behavior seems irrational. Before you blame, diagnose the system. What measurement would make this behavior logical? Find it, fix it, and the behavior changes without training, discipline, or exhortation.
- When the stated goal is vague — "efficiency," "quality," "customer satisfaction." These are necessary conditions, not goals. Name the real goal first.

## Fails When
- The organization refuses to state its goal clearly, preferring to hold several incompatible goals loosely. Goldratt is blunt: a system has one goal at a time. Multiple goals in practice means no goal.
- Leadership believes behavior change comes from talks, culture decks, and training. It does not. It comes from measurements. Sessions about values without measurement changes produce heat and no motion.

## Core Concept

Every system has a goal. The goal of a business is to make money — now and in the future. Quality is a necessary condition, not the goal. Customer satisfaction is a necessary condition. Employee wellbeing is a necessary condition. On-time delivery is a necessary condition. Conflate necessary conditions with the goal and your organization will optimize everything except the thing that keeps it alive.

Once the goal is stated clearly, a simple test applies to every measurement, policy, and incentive: does improving this move us toward the goal? If yes, keep it. If no, change it.

Now the second half of the principle: tell me how you measure me, and I will tell you how I will behave. If you measure me in an illogical way, do not complain about illogical behavior. This is not philosophy. This is cause and effect.

When a plant manager keeps all machines running even when there's no demand — creating mountains of unwanted inventory — is he stupid? No. He is measured on machine utilization. High utilization means a good performance review. Low utilization means explaining himself to his boss. He is responding rationally to his measurements. When a salesperson offers deep discounts at the end of the quarter — destroying margin to hit volume — is she short-sighted? No. She is measured on quarterly volume. Hit the target, get the bonus. Miss, get fired. She is responding rationally. When a project manager pads his estimates — adding weeks of buffer that slow everything — is he lazy? No. He is measured on delivering by the date he committed. Come in early, nobody cares. Come in late, he's in trouble. Rational behavior to measurements.

It is very unlikely your people are lying to you. But your measurements definitely are. Measurements create reality — not metaphorically, literally. They determine what behavior is rewarded, punished, and therefore produced.

If you want to change behavior: change the measurement. Everything else — training, exhortation, culture talks, discipline — is downstream noise, and most of it is wasted. Measurements are upstream. They are where the leverage is.

## How to Apply

1. **Name the goal of the system explicitly.** For a business: make money, now and in the future. For a hospital: deliver good medical outcomes at sustainable cost. For a project: deliver value that matters to the organization, not "complete scope on schedule." Do not accept vague goals. A vague goal cannot discipline a measurement.

2. **Audit the current measurements.** For each measurement, ask: does improving this actually move us toward the goal? If I could maximize this measurement while nothing real improved in the business, would the measurement show green? If yes, the measurement is gameable and therefore wrong.

3. **Run the three questions on any claimed improvement.** Did throughput go up? Did inventory go down? Did operating expense go down? If the answers are not at least one yes with others flat, there was no real improvement — only an accounting illusion.

4. **Before installing a new metric, ask what behavior it will create.** The behavior is the consequence, not the intention. A metric on "percentage of time utilized" creates utilization optimizing behavior, regardless of whether utilization is good for the system. A metric on "cost per unit" creates bulk-purchasing behavior. Predict the behavior, then decide if you want it.

5. **When behavior is counterproductive, diagnose the system first.** Do not blame. Ask: what measurement or circumstance would make this behavior logical? The answer almost always redirects attention from the person to the system. That is where the leverage is.

6. **Change the measurement when you want the behavior to change.** Training changes what people know. Discipline changes what people comply with under observation. Only measurement changes what they rationally optimize when no one is watching. If you want the rational decision to also be the right decision, align the measurement with the goal.

7. **Revise measurements when the constraint moves.** A measurement that was correct when Machine X was the constraint produces the wrong behavior once the constraint has moved elsewhere. Measurements are not permanent. They must track the current constraint, not the historical one.

## Examples

**Situation:** A plant measures every department on local utilization. Departments run their machines at full speed. Inventory balloons. Lead times stretch. The system loses money.
**Application:** The measurement is causing the damage. People are doing exactly what they're told to do. Change the measurement. Non-constraint departments should be measured on on-time support of the constraint, low work-in-process, and on-time delivery — not on their own utilization. The moment the measurement changes, the behavior changes, and the system stops burying itself in WIP.
**Result:** Inventory drops. Lead times drop. On-time delivery rises. Nobody changed personality; the measurement stopped rewarding the wrong thing.

**Situation:** A sales team discounts aggressively at quarter-end, destroying margin. Leadership considers a training program on "value selling."
**Application:** The training will fail. The bonus structure rewards quarterly volume; no amount of value-selling training overrides the quarter-end bonus math. Diagnose the measurement. If bonus is tied to margin rather than volume — or to throughput per deal rather than either — the quarter-end discount disappears without a single training session.
**Result:** The measurement change does in one payroll cycle what years of training would not. The reps are not the problem; the bonus is.

**Situation:** An organization wants a "quality culture." They install posters, offer classes, and hold town halls. Quality doesn't improve.
**Application:** What is being measured? If the dominant metric is units shipped per day and there is no cost borne by individuals for defects that go out the door, quality will stay flat regardless of the posters. Install measurements that make defects visible and owned — for example, stop the line authority plus defect-source tracking plus a real cost applied at the department that produced the defect. Now quality improves, because it is in everyone's rational interest to improve it.
**Result:** Measurement beats exhortation every time. The posters change nothing; the measurement change — and the visibility and consequences it creates — changes everything.

**Situation:** A project manager pads every estimate to 90% confidence. Projects finish late despite padding. Leadership wants to "discipline" project managers for padding.
**Application:** The padding is rational under the current measurement: miss the task deadline and get in trouble; come in early and nothing happens. Adults respond to asymmetric punishment with asymmetric hedging. Change the measurement: stop punishing individual task misses; start measuring project-level buffer health. Padding stops voluntarily because it now produces no benefit.
**Result:** Aggressive estimates become normal. Projects finish faster. The project managers were not defective; the measurement was.

## Anti-Patterns (tactical)

**Don't:** Install a metric without thinking through the behavior it creates.
**Why:** The behavior will be produced. Measurement creates reality. If you install a metric for "appearance" or "alignment" without tracing the actions it rewards, you will get surprising — and almost always unwelcome — behavior.

**Don't:** Blame people for rational responses to bad measurements.
**Why:** They are doing exactly what you asked them to. Disciplining rational behavior makes the organization worse, not better; you demotivate people for obeying the system, and the system keeps producing the behavior. Fix the system.

**Don't:** Measure inputs when you want outputs.
**Why:** "Hours worked," "activities performed," "emails sent," "stand-ups attended" — these are inputs. They produce the appearance of work, not the outcome you wanted. Measure the outcome; input behavior adjusts automatically.

**Don't:** Measure local efficiency in a system with dependent operations.
**Why:** Local efficiency produces inventory, not throughput. Tell me how you measure me — and the whole system will drown in WIP while the reports look green. This is the single most common measurement disease in operations.

**Don't:** Treat measurements as ornamental.
**Why:** The measurements ARE the system. They determine what happens when no one is watching. Get them right or get a different result than you wanted. This is upstream of everything else.

Name the goal. Align the measurement. The behavior will follow.
