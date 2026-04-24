---
triggers:
  - "founder asks how to think about what a company fundamentally is"
  - "user treats their company as an organism that 'just grows'"
  - "user wants to design organizational structure from first principles"
  - "user is cargo-culting someone else's org design"
  - "team is debating mission vs. extraction"
use_when:
  - "designing organizational structure / operating model"
  - "diagnosing why a company is underperforming despite talented people"
  - "framing the purpose of a company to a team or stakeholder"
  - "deciding whether to take mission seriously"
fails_when:
  - "used to over-engineer small companies into complex systems"
  - "treated as license to ignore the human side of the business"
  - "applied without real software-design literacy — the analogy needs substance"
related:
  - "environment-over-policy.md"
  - "infinite-game.md"
  - "top-and-bottom.md"
---

# Companies as Social Technology

## When to Use
- A founder asks what a company fundamentally *is* — and the answer is going to shape every downstream decision about structure, mission, and operating model.
- You're designing organizational structure from scratch, or redesigning it, and want a first-principles lens rather than borrowed templates.
- You're diagnosing why a company with talented people is underperforming — usually the software-equivalent metaphor reveals where the system is broken.
- You're deciding how seriously to take mission, and whether "it's just a job" or "we're really running the counterfactual" is the right frame.

## Fails When
- Used to over-engineer small companies into elaborate systems. At 10 people, you don't need a full organizational design exercise; you need to ship.
- Treated as license to ignore the human side — companies are technology *for humans to coordinate*, and the humans matter as much as the design. The technology frame doesn't dissolve that.
- Applied by someone without software-design literacy. The frame is load-bearing because debug-the-system-like-code is a real methodology, not a metaphor. If you don't actually know how to design software systems, the analogy adds confusion.

## Core Concept

Companies are technologies. Not metaphorically. Literally. Companies are social technology — a specific kind of tool that humans invented to enable collective action at scale.

Most people think of technology as hardware and software. That's too narrow. Any tool that extends human capability is technology. Writing is technology. Money is technology. The limited liability corporation is technology. Each of these inventions unlocked new forms of coordination that were previously impossible.

The company, specifically, is technology for *concentrated effort*. It's the mechanism by which a group of people can spend eight — really fourteen — hours a day singularly pursuing one thing. That's remarkable if you think about it. The only time you're socially allowed to obsess over one problem for years is when you call it a company. The moment you call it a company, it's not tinkering anymore with your ideas. People accept it. Your family accepts it. Society accepts it. "It's a company" is the magic phrase.

What a company fundamentally allows you to do is run the counterfactual to the world you see around you. You think the world should include thing X. You build thing X inside the legal and social container called a company. You means-test it against the market. If the market says yes, money flows back to you and you do more of the thing. If the market says no, you update.

That's the actual mechanism. Everything else — the org chart, the HR policies, the KPIs, the quarterly plans — is implementation detail stacked on top of "run the counterfactual of the world you'd rather live in." If your organizational structure fights that counterfactual, the structure is wrong.

And because companies are technology, you should *design them like software*. Think about inputs, outputs, feedback loops, failure modes. Where does energy get created? Where does it get dissipated? What information flows well? What gets blocked? When something isn't working, don't get frustrated — diagnose it like a bug. Trace the root cause through the incentive structure, the information flow, the decision rights, the environment.

This is why all companies are terrible, including mine. In twenty years we'll look back at what we're doing now and be embarrassed. That should be seen as joyous — the difference between what you did then and what you do now is the progress. We don't know how to build companies yet. They're a technology we're still learning to use.

One more load-bearing implication: *mission is part of the design*. Mission-driven companies outperform mercenary ones not because mission is morally superior but because the social technology was designed around "go all in on a problem worth solving." When the tool is oriented around a compelling problem, it creates sustained energy. When it's oriented around financial extraction, the tool malfunctions — natural energy dissipates rather than compounds. Companies are a technology for going all-in on a mission; when they're not doing that, they're an expensive, inefficient way to pay people.

## How to Apply

1. **Design your company as you'd design software.** Explicit inputs and outputs. Visible feedback loops. Thoughtful failure modes. When something doesn't work, treat it as a bug report, not as individual failings. Most "people aren't doing the right thing" problems are system design problems.

2. **Recognize maintenance obligations.** All technology requires maintenance. Companies require constant tuning — cultural interventions, structural changes, removal of accumulated dysfunction. Neglect this and the tool degrades. Treat "reorg" and "retro" like software updates, not like crises.

3. **Invest in company infrastructure the way you invest in software infrastructure.** Just as software has databases, deployment pipelines, and observability, companies have hiring systems, onboarding, communication channels, decision logs. Under-investment in company infrastructure creates exactly the problems that under-investment in technical infrastructure creates.

4. **Debug social systems.** When something isn't working, trace it: Is it the incentives? The information flow? The decision rights? The environment? Most "people issues" are actually system issues. Don't get frustrated; diagnose.

5. **Build for iteration.** Good software is designed for change. Good companies are designed for change. Rigid companies fail for the same reason rigid codebases fail — the environment changes faster than the system adapts. Don't build "set and forget" structures.

6. **Match the tool to the mission.** The technology works best when oriented around "go all in on a problem worth solving." If your company is a mission-less extraction machine, you're using a tool designed for mission-oriented concentrated effort in a way it was never meant to be used. Friction is the predictable result.

## Examples

**Situation:** A founder is frustrated that their company "just feels off" despite talented hires. They keep trying to fix it with culture initiatives and motivational speeches.
**Application:** Debug the system. What are the incentives actually rewarding? What information is reaching whom? Where are decision rights located? Is the company's stated mission aligned with what the operating system actually produces? Nine times out of ten, the culture problem is a design problem — the system was configured (often accidentally) to produce the behavior that's now frustrating everyone.
**Result:** Specific system changes — incentive restructure, information-flow fix, decision-rights clarification. The "culture problem" resolves not through speeches but through design fixes.

**Situation:** Shopify's IPO prospectus included the word "shit" — "we value people who get shit done." Believed to be the only company to get that word into a prospectus.
**Application:** This is social technology design in the wild. The value phrasing creates a filter. A certain type of person reads that and thinks "these are my people." A different type reads it and self-selects out. The prospectus is infrastructure for hiring, not just a compliance document. Done deliberately.
**Result:** The filter works. The people who join are self-selected for alignment with the operating style. The people who would have caused cultural friction never applied.

**Situation:** A company's stated mission is ambitious, but the operating system rewards short-term revenue extraction. Mission and machinery don't match.
**Application:** The company is using a mission-oriented tool in a mercenary configuration. The social technology was designed around concentrated effort on a problem worth solving; the current config is "extract value from customers." Predictable result: natural energy dissipates, great people leave, the mission statement becomes lip service.
**Result:** Either redesign the operating system (incentives, decision rights, what gets rewarded) to actually match the mission, or redesign the mission to match what the company actually does. Running them at cross-purposes is a slow-motion dysfunction.

**Situation:** A 30–70 person company is losing coordination (see Death Valley). Informal communication is breaking, formal isn't built.
**Application:** This is exactly the same shape as a software system under load. The architecture worked at the old scale; new load has exposed bottlenecks. Fix it like an engineering problem: identify the bottlenecks, design new components (Unicorn-style tooling, structured meeting cadences, cross-team channels), deploy. Don't mythologize what's happening. Ship the fix.
**Result:** Company survives the valley because the founder treated it as a systems design problem, not as an unsolvable cultural malaise.

## Anti-Patterns (tactical)

**Don't:** Treat "companies are technology" as a cold excuse to dehumanize.
**Why:** Companies are social technology — tools that humans use to coordinate. The humans are load-bearing. The frame is useful for *designing* the system; it doesn't give you license to reduce people to components. Design with humans, for humans.

**Don't:** Copy-paste org designs from other companies.
**Why:** Every company is a unique solution to a unique set of constraints. Importing Amazon's two-pizza teams or Shopify's functional org without understanding *why* they work in those contexts is cargo-culting — as dumb as copying another company's codebase and expecting it to run your business. Understand the design; don't copy the artifact.

**Don't:** Set the structure once and forget it.
**Why:** Technologies require maintenance and upgrade. A structure that worked at 50 people will break at 500. Companies that treat the operating system as static fail the same way companies that treat their codebase as static fail — both accumulate entropy and eventually collapse.

**Don't:** Optimize for individual productivity at the expense of system productivity.
**Why:** The company is the tool. Individual productivity matters less than system productivity. A well-designed company makes average people productive. A poorly designed one makes exceptional people ineffective. If your best engineers are burning out while output is stagnant, the system is broken — not the people.

**Don't:** Ignore the mercenary-vs-mission configuration of the system.
**Why:** The technology works best when oriented around a compelling problem. If the company is configured for extraction rather than mission, it's consistently under-performing its potential. The frame "companies are technology" makes this legible — you can *see* the misconfiguration, rather than vaguely feeling the culture is wrong.

## Direct Quotes from Toby

> "Companies are technologies themselves. Companies are social technology in the sense that they allow us to go all in."

> "The only time you're really allowed to spend eight — really fourteen — hours a day just singularly pursuing a thing."

> "What a company fundamentally allows you to do is run the counterfactual to the world you see around you."

> "If it wouldn't exist for some reason, and someone would propose the whole idea now, it would sound insane. From first principles none of this makes sense, really."

> "We don't know how to build companies yet. All companies are terrible, including mine."

> "In twenty years we'll look back at what we were doing right now and be embarrassed by it. That should be seen as the most joyous thing — the difference between what you did then and what you do now is the progress."

> "Falling in love with being on a mission with people you really care about, doing difficult things for worthy people is an incredibly fun thing to do. In fact, I think it's a kind of optimal way to spend your life really."
