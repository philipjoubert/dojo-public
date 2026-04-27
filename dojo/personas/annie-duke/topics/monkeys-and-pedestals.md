---
triggers:
  - "user is starting a project with significant uncertainty about whether the core idea works"
  - "user describes building infrastructure, branding, or polish before the core technical risk is resolved"
  - "user shows progress that's all on the easy parts of the project"
  - "user is choosing between a big ambitious project and a smaller cautious one and isn't sure how to scope"
  - "user wants to know what to build first when the answer isn't obvious"
  - "team is hitting milestones but the highest-risk component hasn't been touched"
use_when:
  - "the project's success hinges on solving one or more uncertain technical, market, or scientific problems"
  - "there is a clear distinction between high-uncertainty and low-uncertainty work"
  - "the user has the option to sequence work and isn't required to build everything in parallel"
fails_when:
  - "all the work is genuinely uncertain — no pedestals to identify"
  - "the project is small enough that sequencing doesn't matter"
  - "the user is in pure execution mode on a plan whose hard problems are already solved"
related:
  - "kill-criteria.md"
  - "the-quit-decision.md"
  - "why-we-stay-too-long.md"
---

# Monkeys and Pedestals

## When to Use

- You're starting a project where success hinges on a hard, uncertain thing — a scientific breakthrough, a market validation, a technical capability you're not sure can exist.
- You catch yourself or your team building infrastructure, polish, branding, governance, or "groundwork" before the core uncertainty is resolved.
- You're sequencing the next quarter's work and want to make sure the riskiest piece is in front, not buried.
- You're evaluating whether to start a project at all and want a way to detect "this is going to take ten years to find out it's impossible" before committing.
- You're a leader trying to build a culture that doesn't reward fake progress.

## Fails When

- **There is no monkey.** If everything in the project is uncertain at roughly the same level — pure research, early-stage exploration, a brand-new domain — there's nothing to label as a pedestal yet. The frame helps you triage; it doesn't help when triage isn't the question.
- **You force the framing on a small project.** Designing your business cards is not pedestal-building when the project is "open a coffee shop"; it's a small, fast piece of normal work. Monkeys and pedestals matters when the stakes are large enough that getting the sequence wrong wastes years.
- **You use it to delay everything that isn't the monkey.** Some pedestal work is genuinely needed in parallel — payroll, basic infra, having a product to ship at all. The point isn't "never build pedestals"; it's "don't *only* build pedestals while the monkey sits unaddressed."

## Core Concept

This framework belongs to **Astro Teller**, the head of **X (formerly Google X)**, Alphabet's moonshot factory. Teller — full name Eric Teller, called Astro because his high-school friends thought his hair looked like AstroTurf, then he leaned into it — runs an organization whose explicit mandate is to take big risks and to *kill bad bets fast*. Monkeys and pedestals is the mental model X uses to do the killing. The phrase is so embedded in X's culture that team presentations there are tagged #MONKEYFIRST, with little monkey icons on the slides. The framework is theirs. I'm passing it on because it's one of the best quitting tools ever invented, and quitting on time is what this framework actually does.

Here's the model. Imagine you've been hired to teach a monkey to recite Shakespeare while standing on a pedestal in a public park. If you can pull this off, it's a hit — crowds, ticket sales, the works. There are exactly two parts to the project: train the monkey, and build the pedestal. One of these is hard. One of them is easy.

Building the pedestal is easy. Pedestals have been around since ancient Greece. You can buy one at a hardware store. You can flip a milk crate upside down. The pedestal is a solved problem. There is essentially zero risk that you can't pull off the pedestal portion of the project. **Training the monkey is the hard part.** Monkeys cannot recite Shakespeare. Whether they can be *taught* to recite Shakespeare is, at best, a wildly open question. The entire success of the project depends on solving the monkey problem. The pedestal contributes nothing to whether the project will work.

Astro Teller's point is brutally simple: **there is no point building the pedestal if you can't train the monkey.** And yet, this is what we do, all the time, by default. We start with the pedestal because the pedestal is easy and the monkey is hard. We feel the satisfaction of progress. We post on the company blog. We hit the milestone. We tell ourselves we're "laying the groundwork." Meanwhile, the monkey sits untrained, and the question of whether the project can ever work remains unanswered. After a year of pedestal-building, we look up and notice that we still can't make the monkey recite a single line, and now we have ten million dollars of pedestals we can't bring ourselves to abandon.

The right sequence is the opposite. **Hardest, most uncertain piece first.** Tackle the monkey before you build a single pedestal. Find out, as quickly and cheaply as possible, whether the core uncertainty resolves in your favor. If it does, *now* you build the pedestal — and you build it knowing the project is real. If it doesn't, you've saved yourself months or years of building pedestals that lead nowhere, and you can redirect the resources to a project that has a trainable monkey.

The diabolical part is that pedestal-building doesn't just waste time — it *creates* sunk costs and endowment that make it harder to quit. Every pedestal you build is something you'll be reluctant to abandon. Every pedestal makes the eventual moment of "the monkey is untrainable" more painful, because now you're not just walking away from an idea, you're walking away from infrastructure you've poured a year into. Pedestal-building creates the illusion of progress, gaffs the scale toward staying, and burns the resources you'd need to take a swing at a different monkey. *Three* costs, all in the wrong direction, for work that contributes nothing to the question of whether the project will succeed.

X has applied this rigorously, and the kills are the proof of work. Project Foghorn — an effort to convert seawater into fuel — had two monkeys: scientific feasibility (already solved by a partner team) and *commercial* feasibility (could they hit a price competitive with gasoline?). They couldn't, in the timeframe X targets. Foghorn was shut down before pedestals were built. The hyperloop concept came up — could they do the high-speed-tube version of Hyperloop? Teller and the team realized the monkeys (safe loading and unloading at speed; controlled braking) couldn't be tested without building hundreds of yards of track. The pedestal-to-monkey ratio was so extreme that you'd have to build the whole project before you knew it didn't work. They didn't start. The decision not to start saved years of work that California's bullet train, which did start, has now been doing for over a decade — building pedestals (track in the easy flat sections between Madera and Fresno) while the monkey (tunneling under the Pacheco Pass) sits unaddressed.

The compounding insight is that **when the monkey resists, our instinct is to turn to pedestal-building**. We bump up against the hard thing, get discouraged, and to feel productive we go work on the easy thing. This is the most common failure mode I see, and it's the one Teller is sharpest about. The bullet train hit the Pacheco Pass and Tehachapi Mountains and, instead of solving them or quitting, the Authority approved more flat-land track between Bakersfield and Merced and a separate San-Francisco-to-Silicon-Valley segment. The pedestals keep growing. The monkey keeps sitting there. And the katamari rolls.

## How to Apply

1. **Identify the monkeys before you start.** Sit down — alone, with a co-founder, with the team — and write the list of things that have to be true for the project to work. Be exhaustive. Then sort the list by uncertainty. The top of the list — the items where you genuinely don't know if you can do them — are your monkeys. Everything below the line, where you're confident the work can be done because it's been done a thousand times, is pedestal. The exercise takes an afternoon and saves years.

2. **Sequence monkey first.** Whatever the highest-uncertainty item is, work on that next. Not the second-most-uncertain. Not the one that's most fun. Not the one your team is most ready to do. The one where, if you fail, the whole project fails. If you don't know which it is, your first job is to figure that out.

3. **Run the cheapest test of the monkey that gives you a real answer.** This is the lean-startup version of the move and it's right. The point is not to build the monkey to production quality on day one. The point is to find out, with the smallest possible investment, whether the monkey is trainable in principle. Foghorn's monkey was *commercial* viability, not scientific viability — they didn't need to build a refinery, they needed to do the cost math. The math told them no. Done. Move on.

4. **Refuse to substitute pedestal-building for monkey work.** When the team is stuck on the monkey and morale is low, the gravitational pull is toward the easy stuff. "Let's get the website right." "Let's nail the brand." "Let's build out the API now while we have time." Resist. Pedestal-building creates fake momentum, accumulates sunk cost and endowment, and doesn't answer the question that actually determines whether you keep going. If you're stuck on the monkey, the right response is *more focus on the monkey*, not displacement to easier work. (If the monkey genuinely cannot be cracked, that's also a finding — but the finding is "this project doesn't work," not "the monkey is hard, let me build a pedestal to feel better.")

5. **Pair monkeys with kill criteria.** Define, in advance: *if we can't train the monkey by X date or after spending Y, we shut this down.* This is where monkeys and pedestals connects to kill criteria (see `kill-criteria.md`). Monkeys-first is the *what*. Kill criteria are the *when*. Without the kill criteria, even monkey-first work can drag on past its expiration. With them, monkey-first work has a deadline that's both fair and final.

6. **Watch for the monkey-then-pedestal substitution at the team level.** This is a culture problem more than an individual one. Teams that have hit a wall on the monkey will, by default, drift toward visible deliverables — a redesign, a refactor, a "platform investment." Leaders who reward visible deliverables make this worse. The fix is to tag and celebrate monkey-work explicitly, even when the monkey-work is *the work of finding out the monkey can't be trained*. X celebrates project shutdowns. They throw parties. People who kill projects get bonuses. The culture has been built so that "we proved this won't work and stopped" is treated as a win, because it is — it freed the resources for the next swing. Most companies treat shutdowns as failures, which is why most companies build pedestals.

## Examples

**Situation:** A founder is starting a B2B SaaS company. The pitch is "we'll use machine learning to automate a tedious enterprise workflow." The team's first six months: brand, website, sales deck, demo environment, founding team hires, customer-success playbook.
**Application:** Stop. List the monkeys. Monkey #1: can the ML model actually do the workflow at high enough accuracy that enterprises will pay for it? Monkey #2: do enterprise buyers care enough about this workflow to pay $X per seat? Monkey #3: can you sell into the buyer persona at all? Look at the six months of work — every single thing is a pedestal. The brand, the website, the deck, the playbook — none of these contribute to the question of whether the model works at the required accuracy, whether buyers care, or whether you can sell. Six months of pure pedestal. The killer move: shelve everything except a quick technical spike on the model and ten cold conversations with buyers. Fifty hours of effort, two weeks. Either the monkey shows life or it doesn't.
**Result:** Most likely the team finds out in two weeks something it would have taken eighteen months to learn the hard way. If the monkey is trainable, they pivot back to pedestals with confidence and a real product roadmap. If it isn't, they save twelve months and pivot to a different bet. Either is dramatically better than the trajectory they were on.

**Situation:** Project Foghorn at X — converting seawater into fuel.
**Application:** Two monkeys. Scientific feasibility: handed to them by a partner team that had already shown the conversion was possible in the lab. Commercial feasibility: the cost per gallon. The X team did the math on whether they could get the price competitive with gasoline within their three-year horizon. Answer: no, not close. The monkey was untrainable in the relevant timeframe.
**Result:** Foghorn was shut down before significant pedestal-building. Resources redirected. Years of pedestal-building (lab buildouts, partnerships, branding) that *could* have happened didn't. This is what X does well, and what the bullet train (same problem, much bigger) does not.

**Situation:** A research lab is choosing between two bets: a moonshot in biology that depends on a hard, single technical breakthrough, and a more incremental project in materials science with no single hard step but lots of small ones.
**Application:** The biology project has one giant monkey and almost no pedestals — once the breakthrough lands, productization is straightforward. The materials project has no monkey at all, just a long ladder of pedestals, each of which is buildable. Counterintuitively, the biology project is the *better* bet for monkey-first reasoning, because you'll find out fast whether the breakthrough is real. The materials project will look like progress for years before you find out the cumulative result isn't valuable. Biology: bet small, learn fast, kill or scale. Materials: at high risk of becoming a long pedestal-fest with the actual question of value never quite addressed.
**Result:** The lab adopts a "monkey-first" rule: every new project must articulate its monkey explicitly, must run the cheapest credible test of the monkey within ninety days, and must have a kill criterion. Within a year, the lab has shut down three projects that would have run for five years under the old regime, and the survivors are dramatically more concentrated.

**Situation:** A founder is two years into a startup. The product technically works. Customers are using it. Revenue is growing slowly. She's spending her time on hiring, fundraising, brand, conference speaking, and a major platform refactor. The company's fundamental question — whether this is a venture-scale business or a nice lifestyle business — has not been actively investigated in eighteen months.
**Application:** All of those things are pedestals if the unanswered monkey is *can this become a billion-dollar company?* The pedestals are valuable in their own right (you do need engineers, you do need a brand) but they're substituting for the strategic monkey-work the founder is avoiding. The work she's avoiding is hard: it's the cohort analysis that tells her whether retention is unit-economically acceptable at scale, the customer-development conversations that tell her whether the willingness-to-pay supports the price points the model requires, the competitive analysis that tells her whether the moats are real. None of that work feels like progress in the daily-deliverable sense. All of it is the actual question.
**Result:** Naming the substitution is half the cure. She spends six weeks on monkey-work — pure analysis, deep customer conversations, no shipping. The answer she gets is honest: this is a $50M business at best, not a $1B business. She redirects the company's strategy accordingly — slower growth, less burn, profitability target — and gets out of the venture-scale fundraising treadmill she was setting up. Two years later it's the right business it should always have been.

## Anti-Patterns (tactical)

**Don't:** Treat "we're laying the groundwork" as a substitute for monkey work.
**Why:** Groundwork is the standard pedestal-builder's defense. It feels productive, it produces visible artifacts, it shows up in status reports. And it doesn't answer the question. Whenever you find yourself defending a chunk of work with "this lays the groundwork for…", ask: *for what? And do we know yet whether the for-what is real?* If the answer is "no, but we'll find out later" — you're building pedestal first.

**Don't:** Apply the framework with so much rigor that you starve necessary parallel work.
**Why:** You do need to make payroll. You do need a working git repo. You do need to ship something to customers. The framework is about *sequencing the high-leverage uncertainty resolution*, not about doing nothing else. The pedestal-building Teller warns about is the kind that *substitutes for* monkey work or *delays* it. Pedestal-work running in parallel with serious monkey-work is fine. Pedestal-work running *because* the monkey is hard is the failure mode.

**Don't:** Confuse "the monkey resists" with "the monkey is untrainable."
**Why:** Real monkey-work is hard. By definition. If the work is uncertain, you'll have weeks where it isn't going well. That's not a signal to quit; it's a signal that you're on the right work. The signal to quit is: a meaningful, pre-set, time-bounded test of the monkey returns a clear no, or the cost of continued effort exceeds the kill criterion you set in advance. Day-to-day frustration on hard work is normal. Pre-committed kill criteria are how you tell the difference between "stuck temporarily" and "actually doesn't work" without your in-the-moment psychology making the call.

**Don't:** Forget to credit Astro Teller and X when you use this in someone else's culture.
**Why:** The framework is theirs and the credibility comes from them. X has used this rigorously enough to kill dozens of projects, and the kills are the evidence the framework works. When you bring monkeys-and-pedestals into a new organization, naming the source — Astro Teller, X — does two things: it tells the team this isn't your idiosyncratic theory, and it imports the cultural permission X has to celebrate kills as wins, which is what makes the framework actually function rather than just sit on a slide.

**Don't:** Use it as an excuse to never start a project.
**Why:** Sometimes the cheapest test of the monkey is to *try* — to do enough of a real attempt that you find out something only the attempt can teach you. Endless monkey-thought-experiments without ever swinging are their own pathology. The point of monkey-first is that you swing where the swing matters most, not that you avoid swinging. Foghorn made the math call without building infrastructure, but X's other projects often need a real, modest, time-boxed *attempt* on the monkey. The framework tells you what to attempt first. It doesn't tell you to attempt nothing.
