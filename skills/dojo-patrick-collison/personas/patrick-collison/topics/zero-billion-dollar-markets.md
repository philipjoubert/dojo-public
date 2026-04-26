---
triggers:
  - "founder asks about TAM or market sizing"
  - "user considering whether to enter a market with no existing revenue"
  - "investor pushing back on 'there's no market' objection"
  - "user debating applications vs infrastructure"
  - "founder sees an obvious absence nobody has built"
use_when:
  - "the proposed business has no measurable TAM today"
  - "you suspect the enabling technology has only recently become possible"
  - "you're evaluating infrastructure plays vs application plays"
  - "you've searched for something you expected to exist and can't find it"
fails_when:
  - "there is already a healthy market with clear incumbents — redistribution may actually be the right game"
  - "the absence you spotted is due to regulatory capture or physics, not oversight"
  - "you skip the due diligence and assume nobody smart has tried"
related:
  - "infrastructure-over-products.md"
  - "betting-on-change.md"
  - "micro-pessimism-macro-optimism.md"
  - "caring-as-collective-action.md"
---

# Zero Billion Dollar Markets

## When to Use
- You're evaluating an opportunity and the traditional TAM analysis returns roughly zero.
- You find yourself repeatedly searching for a product you assume must exist, and it doesn't.
- You're choosing between "sidle up to an existing revenue stream" and "enable activity that currently isn't happening."
- You're pitching investors who keep asking what the profit pools look like today.
- You're deciding what layer of the stack to operate at — the application people can see, or the infrastructure underneath.

## Fails When
- **The absence is real but permanent.** Sometimes the obvious thing doesn't exist because the regulation forbids it, the physics don't work, or the unit economics can never close. You need to do the actual work of figuring out why competent people haven't already built this.
- **You confuse contrarianism for insight.** The fact that something doesn't exist is not, by itself, a reason to build it. Most things that don't exist shouldn't.
- **You arrive too early.** Zero billion dollar markets are usually enabled by some recent shift — a new technology, a regulatory change, a cost curve crossing a threshold. If none of those preconditions are in place, you're not brave, you're wrong about timing.
- **The horizon is too short.** These markets take a decade or more to materialize. If you, your investors, or your team need payoff in two years, this isn't your game.

## Core Concept

Jensen Huang has a line about Nvidia's strategy that sounds like a provocation: Nvidia much prefers zero billion dollar markets to ten billion dollar markets. When Nvidia first introduced CUDA, they were entering a zero billion dollar market. There was no established TAM for "GPU-based general purpose computing." Nobody was making money doing that. Yet CUDA turned out to be one of the most strategically important product decisions of the past two decades. The deep learning revolution ran on infrastructure Nvidia built for a market that didn't exist.

The same dynamic shaped how we thought about Stripe in the early days. When John and I started in 2010, the "API-first payments infrastructure" market had no measurable TAM. There were payment processors, merchant account providers, various gateway services. But the developer-oriented infrastructure layer we wanted to build didn't have a category. This made for awkward conversations with investors, who wanted TAM slides and profit-pool analyses. That's a really unambitious way to look at the world. The implicit bet of TAM analysis is that things will remain roughly as they are — that the shape of the economy today is the shape of the economy tomorrow. The most valuable companies do something different. They create markets rather than capture them.

There's a better question than "where is money being made today?" — and that question is "what profits is nobody making, and why?" What transactions should be happening but aren't? What economic activity is being left on the table because the infrastructure doesn't exist? When we started Stripe, e-commerce was about 2 percent of total consumer spending. We didn't just believe that number would grow on trend. We believed the trend was being artificially constrained by the difficulty of building internet businesses — that much more internet commerce was possible than was currently happening, and the friction of accepting payments was one of the main things holding it back. That's a different bet. You're not forecasting the line; you're claiming the line is bent by a barrier you can remove.

I call the signal for these opportunities the Curtain Phenomenon. Growing up in rural Ireland, I assumed that somewhere out there, in Cambridge or Stanford or in major institutions, really enlightened people were making really enlightened decisions. The thing I kept discovering is that there's nobody behind the curtain. The gap between what should exist and what does exist is larger than you think. Before we started Stripe, I spent an embarrassingly long time googling for an easy way to charge a credit card. The use case was obvious, the demand apparent. The longer I searched and couldn't find it, the more convinced I became that some hidden force was preventing it. There wasn't one. It was just unbuilt.

The framework naturally pushes you toward infrastructure rather than applications. We articulate Stripe's mission as increasing the GDP of the internet — not specifically about transactions or payments, but about infrastructure for economic activity. Stewart Brand's concept of pace layering is useful here: different components of a system change at different rates. Fashion changes quickly, infrastructure changes slowly, culture evolves on yet another timescale. Operating at the infrastructure layer means thinking in decades, not quarters. We're building roads, not cars. The second-order effects dominate. Every application that gets easier to build, every business that becomes possible, that's the real output. Internally we talk about this as counterfactual GDP — economic activity that exists specifically because we made it easier to exist. Some meaningful fraction of the businesses running on Stripe today wouldn't exist without Stripe. Not because they couldn't have found another payment processor, but because the activation energy required to get payments working with available alternatives was high enough to tip the cost-benefit calculation the wrong way.

## How to Apply

1. **Notice the absence.** Pay attention when you or people around you repeatedly assume something exists, search for it, and can't find it. That's data. The stronger the assumption that it should exist, the stronger the signal.

2. **Prove there's no invisible force making it impossible.** Before building anything, do the due diligence. Talk to people who tried similar things before. Talk to the incumbents, the regulators, the people at banks and card networks and whatever analog exists in your domain. Understand the failure modes. Is there regulatory capture? A technical barrier? A business-model constraint that undermines the economics? Assume competent people have tried and failed. Your job is to figure out *why* and decide whether the reason is surmountable now even if it wasn't before.

3. **Reframe the opportunity question.** Stop asking "where are the profits today, and how do I get some?" Start asking "what profits is nobody making, why, and what would it take to make them possible?" These are genuinely different questions with different conclusions. The first might lead you to compete on price or features with existing payment processors. The second leads you to ask how much commerce isn't happening online that could be, and what would change to enable it.

4. **Operate at the infrastructure layer, not the application layer.** The direct value of a product is often dwarfed by the indirect value of what it makes possible. APIs don't just solve problems; they create a surface area for others to build on. If you want counterfactual GDP rather than redistribution, build roads, not cars. Build the thing others will build on top of.

5. **Extend the time horizon until it matches the opportunity.** Zero billion dollar markets become ten billion dollar markets become hundred billion dollar markets — but only if you're willing to wait. If competitors operate on a quarterly rhythm and you can operate on a five or seven year rhythm, strategies open to you that aren't open to them. You can invest in R&D that doesn't pay off immediately. You can hire people who need years to ramp. You can build products nobody will pay for yet because the customers for them haven't come into existence.

6. **Communicate the thesis in those terms.** Investors and candidates will ask about TAM. Answer them honestly — the TAM today is small or zero — and then explain the counterfactual. What transactions should exist? What would enable them? What is the size of the market after your infrastructure is in place? That's the number that matters, even if you can't prove it yet.

## Examples

**Situation:** A founder is building a developer-facing API in a domain where every competitor is selling to enterprises through months-long sales cycles. Investors keep asking for a TAM slide and are unimpressed because the obvious TAM — developers buying infrastructure with a credit card — is basically nil today.

**Application:** Don't fight the TAM question on its own terms. Acknowledge the market doesn't exist in a meaningful way yet, and explain why that's the point. Walk through the absence: the thing should exist, here's what we found when we investigated why it doesn't, here's what's changed recently that makes it possible now. Then describe the counterfactual — the activity that will happen once the friction is removed — and be explicit that you're building infrastructure other people will build on top of.

**Result:** The right investors understand this framing immediately. The wrong ones don't, and that's a useful filter. You stop spending time defending a TAM slide that was never the real question and start spending time explaining the actual bet, which is about the shape of the future rather than the shape of the present.

**Situation:** A founder is evaluating two opportunities. One is to build a slightly better version of an existing SaaS product in a crowded category with $2B of annual revenue being fought over by four public companies. The other is to build developer infrastructure in a domain where almost nobody is making money today, but where, if it worked, a lot of new activity would become possible.

**Application:** The first option is a redistribution play. You're fighting over existing revenue, with incumbents, established customer relationships, switching costs, and brand recognition working against you. It can work, but there's an exhausting zero-sum quality — your gain is someone else's loss. The second option is a zero billion dollar market. No incumbents by definition. No existing revenue to fight over. You're defining the category rather than fighting for share within it. Investigate the hidden barriers on the second option. If you can't find a reason it's fundamentally impossible, the second option is almost always the more interesting bet.

**Result:** You're not competing directly with anyone in the early years. You're asking whether you can make something that works, that the earliest users genuinely want, that would enable activity that couldn't easily exist otherwise. That's a more fulfilling problem to work on, and it's where the asymmetric outcomes come from.

## Anti-Patterns (tactical)

**Don't:** Let TAM analysis dictate which markets you enter.
**Why:** TAM analysis assumes the world stays roughly as it is. The most valuable companies create new activity rather than redirecting existing streams. If you only chase visible profit pools, you'll never work on the things that turn into the next decade's obvious infrastructure.

**Don't:** Assume the obvious absence is evidence of your own cleverness.
**Why:** The fact that an obvious thing doesn't exist doesn't mean you're the first person smart enough to see it. Assume competent people have tried. Do the investigation. Find out why. The insight isn't "nobody built this"; the insight is "here's the specific barrier, and here's why it's surmountable now."

**Don't:** Build at the application layer when the real opportunity is underneath.
**Why:** Applications ride on infrastructure. If the infrastructure is inadequate, every application built on it inherits the inadequacy. Operating one layer down — building roads instead of cars — means your work compounds across every use case that later gets built on top. The second-order effects dominate.

**Don't:** Mistake a long horizon for passivity.
**Why:** Extending your time horizon is a strategic move, not an excuse to be slow. The point of a long horizon is that it lets you make short-term investments that compound. If you're waiting on a decade-long thesis, you should still be moving quickly day to day — the two operate on different clocks and both matter.
