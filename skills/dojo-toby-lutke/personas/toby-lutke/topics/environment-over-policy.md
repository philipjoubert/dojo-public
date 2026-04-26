---
triggers:
  - "team isn't following a policy you set"
  - "user wants to change behavior at scale"
  - "CEO is writing a memo to fix a behavioral problem"
  - "user asks about culture change / process design / workflow"
  - "someone is adding a rule / approval / process to solve a repeated problem"
use_when:
  - "a policy is in place but behavior hasn't changed"
  - "you have agency over the tools your team uses"
  - "you notice a pattern of small dysfunctions that no single rule would fix"
  - "you need to change behavior without adding bureaucracy"
fails_when:
  - "used for things environment can't reach (legal compliance, safety)"
  - "environments are fixed and can't be changed (legacy systems, leased offices)"
  - "used manipulatively to extract more without consent"
related:
  - "software-has-a-worldview.md"
  - "trust-battery.md"
  - "companies-as-social-technology.md"
---

# Environment Over Policy

## When to Use
- You've issued a policy and nobody's following it. Before doubling down on enforcement, consider whether the environment is fighting the policy.
- You want behavior to shift at scale and memos aren't landing.
- You're designing a new process and about to encode it as a written rule — check whether you could encode it as the default in a tool instead.
- You notice the same small dysfunction repeating (surprise escalations, missed deadlines, tone drift) and no one rule covers them — environment is probably the right layer.

## Fails When
- The problem is outside environment's reach: legal compliance, regulated safety procedures, explicit ethical boundaries. Those need policy and explicit enforcement.
- You don't actually have agency over the environment — legacy systems, leased infrastructure, existing tools you can't change. Then policy and incentives become relatively more important.
- Used manipulatively — engineering environments to extract more from people without their awareness is exploitative and backfires.

## Core Concept

People talk about incentives shaping companies, and then they talk about policies shaping companies. But there's something even more powerful: environment. The environment is everything around you that you interact with constantly but don't consciously notice. The tools you use. The physical space you occupy. The information that's visible vs. hidden. The friction involved in taking different actions. The default paths vs. the paths that require extra effort.

Policy says "you should do X." Incentives say "you'll be rewarded for doing X." Environment makes X the natural thing to do. Environment is more powerful because it operates constantly and unconsciously. You can resist a policy. You can discount an incentive. You can't resist an environment — it shapes you whether you notice or not.

As a software company with agency over your tools, you actually have more power over environment than over policy. Policy changes require town halls, documentation, training, enforcement. Environment changes deploy at the speed of software. If you can adjust the default behavior of the thing your team uses all day, that change compounds continuously from the moment it ships — with no enforcement needed. Nobody has to "remember" an environment. It just is.

The deeper insight: policies are consulted occasionally; environments are inhabited constantly. The cumulative influence of environment dwarfs the occasional influence of policy. A bad policy competes with whatever environment already exists and loses most of the time. A good environment enforces itself because the easy path and the right path are the same.

This is also why "copy-paste" culture-building fails. When people try to import another company's policies — their onboarding, their reviews, their Slack etiquette — without importing the environmental elements that made those policies work, the policies degrade to theatre. Culture isn't mostly policy. It's mostly environment plus a small amount of policy layered on top.

Concrete examples: the coffee machine placement that puts different teams into accidental contact, the default-open vs. default-private distinction in your documents, whether your stock price is visible on a screen in the lobby (at Shopify, anyone caught checking it has to buy Timbits for their team — environment design, not policy), whether Slack channels are searchable by default, whether PRs require a template or freeform descriptions, whether your CRM or your meeting-calendar tool quietly shapes which customers get attention. All of these are environment. All of them shape behavior whether you designed them or not. The question is whether you designed them deliberately.

## How to Apply

1. **Map your environment before you write another policy.** What tools does your team use every day? What information is visible by default? Which actions are frictionless and which require effort? This is the environment. If the behavior you want is fighting the environment, the policy is fighting a headwind.

2. **Design for desired behavior, don't mandate it.** Instead of a policy about transparency, make information visible by default. Instead of a policy about collaboration, make collaboration the path of least resistance. Instead of a policy about quality, make low-quality work embarrassingly visible in the environment.

3. **When you're a software company, treat internal tools as strategic.** A change to the default behavior of your internal CRM or deploy pipeline or code review tool can change behavior across the entire company instantly. That's leverage most companies don't use. If a policy lives forever in a wiki and a tool change ships to production in a week, you know which one is going to win.

4. **Audit environmental friction.** Where does your environment make good behavior hard? Where does it make bad behavior easy? Flip the asymmetry. The goal is to make the right thing the default and the wrong thing require extra effort.

5. **Design physical and digital spaces for happy accidents.** Daniel Weinand was obsessed with happy accidents — intentionally routing people through spaces in ways that created serendipitous encounters. Put the coffee machine where two teams will collide. Structure information flows so context surfaces automatically. No one will let themselves do work that underperforms their environment. Set the environment high and people follow.

6. **Stop using environment when you can't change it.** If you're living inside legacy systems, an office you can't redesign, or vendor tools whose defaults are fixed — accept that environment is exogenous for this problem and use policy and incentives to compensate. The framework is powerful where you have agency; it's inert where you don't.

## Examples

**Situation:** A company keeps having issues with people checking their stock price all day. Memos asking them to stop don't work.
**Application:** That's policy trying to reverse an environment (stock ticker visible, culturally rewarded to track it). Change the environment: anyone caught checking has to buy a box of Timbits for their team. That's an environment change — a tiny social friction attached to the behavior — not a policy change. The behavior drops because the environment no longer rewards it.
**Result:** The behavior drops. Nobody needed to police the policy; the environment polices itself, and it does so with humor rather than punishment.

**Situation:** A team keeps shipping code without tests. The engineering lead keeps writing "please write tests" memos. Nothing changes.
**Application:** The environment is fighting the memo. The deploy pipeline currently accepts untested code as easily as tested code. Change the default: deploys without tests require an explicit override. Tests become the path of least resistance. The policy is now the environment — no one needs to remember the rule.
**Result:** Test coverage goes from ~40% to ~90% within two sprints. Nobody needed a new policy; the tool enforces it by making the friction on the right side of the choice.

**Situation:** A growing company has inconsistent decision-making. Everyone makes decisions locally with different contexts. The natural policy fix is "document every decision." Nobody does.
**Application:** Rather than policy, change the environment. Make a shared decision log the default that opens when a team starts any major discussion. Use a template that prompts the context, options, and chosen path. The environment prompts the behavior; the policy becomes redundant.
**Result:** Decision documentation goes from near-zero to the default, because the environment makes it easier to document than to skip documenting.

**Situation:** Slack is becoming the internet at scale — 2,000+ people in channels, messages lost, important signals buried.
**Application:** Policy response: "please use channels thoughtfully." Environment response: create default channel conventions in the tool itself, change defaults on who gets notifications, archive channels on a schedule, use threads-by-default settings. The environment handles what no one will ever remember from a policy memo.
**Result:** Signal-to-noise improves without a culture fight. See also communication-packet-size.md for the adjacent framework.

## Anti-Patterns (tactical)

**Don't:** Use environment manipulation to extract more from people without their consent.
**Why:** There's a dark version of this where environments are engineered to drive behavior people wouldn't choose if they saw the engineering. That's exploitation, and it eventually gets noticed and creates deep distrust. Environment design should make the right thing easy, not smuggle in extraction.

**Don't:** Assume the environment is neutral.
**Why:** Every environment shapes behavior somehow. The question isn't whether your environment is shaping behavior — it is. The question is whether it's shaping it in directions you want. Unexamined environments shape behavior arbitrarily, which usually means in whatever direction was convenient when the tool was built.

**Don't:** Rely on policy when environment would work better.
**Why:** Policy has enforcement costs and memory costs. Environment has neither. If you can make the behavior you want into the default path in a tool, that's almost always a better solution than writing a rule.

**Don't:** Over-engineer every environment.
**Why:** Sometimes you just need to tell someone what to do. Not every behavior needs a tool change. Use judgment. Environment design is a leverage tool, not a universal solvent.

**Don't:** Confuse environment with vibes.
**Why:** "We have a great culture" is not the same as "we designed our environment well." Vibes emerge from environment but aren't directly editable. Environment — the tools, defaults, visibilities — is the load-bearing layer you can actually change.

## Direct Quotes from Toby

> "People talk about incentives shaping companies and then policies shaping companies… it's the environment that's even more powerful than all those."

> "As a software company, especially if you feel like you have agency over the tools, you actually have more power over the tools and therefore the environment than you have over policies."

> "Dave was obsessed with happy accidents — being intentional, putting people through a space. He always had this opinion that no one will let themselves do work that underperforms their environment."

> "Once you're a couple thousand people, your Slack channel is the internet basically. You need to apply similar rules."

> "If you use software by others, you have to buy into their vision. Software has a worldview. So you're adopting Workday's worldview when it comes to your HR, which may or may not be what you want to do."

> "The Timbits rule: anyone caught checking the stock price has to buy Timbits for their team. Even I had to buy a box once."
