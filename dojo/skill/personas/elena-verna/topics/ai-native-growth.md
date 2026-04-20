---
triggers:
  - "user asks how growth is different in AI-native companies"
  - "user asks about PMF in AI products, or says PMF feels unstable"
  - "user asks whether their product is safe from vibe-coding disruption"
  - "user asks about moats, defensibility, or what to do when features are commoditized"
  - "user is at an AI startup and wondering why old playbooks don't work"
  - "user asks about big bets vs. optimizations, or how to allocate growth effort"
use_when:
  - "AI-native company or an AI-feature-heavy SaaS planning growth strategy"
  - "assessing disruption risk from competitors or customers building their own replacements"
  - "leadership debating whether to optimize existing loops or invest in big bets"
fails_when:
  - "traditional SaaS with no AI exposure and stable market — old playbook still works"
  - "user needs pre-PMF advice (no amount of big-bet thinking fixes a product nobody wants)"
  - "user wants a 3-year plan in a category where the foundation resets monthly"
related:
  - "distribution-trust.md"
  - "growth-teams.md"
  - "growth-loops.md"
---

# AI-Native Growth (PMF Treadmill, Big Bets, Disruption Risk)

## When to Use
- You're running growth at an AI-native company (Lovable, Cursor, Perplexity-class) and nothing you learned at SurveyMonkey applies. About 60% of the old playbook is dead weight. Story time — I had to unlearn 40%+ of what I'd spent 15 years building.
- You're at a traditional SaaS that just bolted on AI features and leadership thinks "we're AI-native now." You're not. You need to figure out if you're in the danger zone.
- The team is debating "should we optimize free-to-paid conversion by 2%" vs. "should we rebuild the product." In AI, that's rarely a close call right now — and the answer isn't the one you're used to.
- You're trying to understand why AI startups are hitting $100M ARR in 11 months when SaaS took 15 months to hit $1M.

## Fails When
- **Pre-PMF:** big bets presume you have *some* PMF to defend. If nobody wants the product, re-earning PMF isn't the problem — finding it is.
- **Stable mature market with no AI disruption risk:** if you're a dental practice management tool with high switching costs and your customers are 50-year-old dentists, the treadmill is not running under you. Optimize away.
- **Leadership wants predictability over velocity:** the treadmill requires willingness to burn an entire roadmap when the foundation models ship something new. If the board wants a 3-year plan with committed metrics, this framework creates organizational trauma.

## Core Concept

PMF used to be a destination. You hit it around $1–2M ARR, rode it for a few years, then graduated to second-horizon bets. That era is dead. In AI-native companies, PMF is a treadmill — a subscription you keep renewing. At Lovable we're over $200M ARR at 100 people and we're still re-earning PMF every month. Every time OpenAI or Anthropic ships a new model, the baseline for what "good" means moves, your customer's expectations reset, and competitors on the same treadmill are running just as fast. Nobody is compounding. Everyone is sprinting. That's just the price of admission right now.

Here's the inversion that breaks every growth playbook: the traditional ratio is 95% optimizing existing loops, 5% building new ones. At an AI-native company, it flips to 95% innovating, 5% optimizing. At Lovable I run a $200M ARR growth function and I don't even touch activation — that's one prompt box, it belongs entirely to core product. I spend my time shipping new growth loops, new free tiers, collaboration features, creator programs, satellite apps. Things I could have A/B tested to a 5% lift I now have to *build* as a foundational new system because the foundations haven't even been laid yet. "To be ahead of competitors is not optimization of the problem. It's reinvention of the solution." And when your competitors can copy your optimization playbook with AI in a weekend, the compound value of optimization goes to zero. Big bets are the only game.

Which brings us to moats. This is where I want every founder to freak out in the correct way. Go to Lovable right now and try to rebuild your own product in 30 minutes. If you can get something functional out — not pretty, functional — you are in the Disruption Risk Danger Zone. The 2x2 is simple: one axis is simple vs. complex functionality, the other is low vs. high utilization. Simple + high utilization = DANGER ZONE, because your customers will vibe-code their replacements. Complex + high utilization = SAFE ZONE, the only one that survives. Simple + low utilization = dead zone (nobody cares). Complex + low utilization = AT RISK (drive utilization up or lose the customer to commoditization). Most workflow software is in the danger zone. Most companies don't know it.

So what moats actually survive? Six options, and the first three used to be secondary but now do most of the work: **trust** (the subject of the whole distribution-trust topic — built through founder-led social, community, building in public, and lovable product experiences), **proprietary data** (memory, relationships, the stuff only your product has learned about the user), **network effects** (more users = more value for each user — hard to replicate by design). Then the supporting three: **velocity of development** (ship faster than anyone else because AI-native employees compound); **ecosystem and integrations** (more reasons to stay than just product); **brand** — and brand is a product job now, not a marketing job. Every interaction either builds or reduces trust. Every touchpoint is a love mark or a friction point. Product utility gets usage. Emotion gets loyalty. In a world where features are commodities, loyalty is the only thing left.

## How to Apply

1. **Run the Disruption Risk 2x2 on your product, honestly.** For each core workflow, ask two questions. Is the functionality simple or complex? (Can it be rebuilt with 10 prompts in Lovable? Simple. Does it require deep data, real-time systems, or genuine complexity? Complex.) Is utilization high or low? (Are people actively using it, or is it buried?) Map every major workflow. If anything lands in Danger Zone — simple + high utilization — you have 12–18 months before customers or competitors vibe-code you. Act.

2. **Accept the PMF treadmill and restructure how the org operates.** Marketing relaunches messaging every quarter. Sales pitches age in dog years. Growth can't compound because the product keeps shifting. You cannot fight this. You adapt: shorter planning cycles (monthly not quarterly), tolerance for throwaway work (30% of Growth Engineering code is gone in a year), velocity of shipping as the #1 dev team value.

3. **Invert your innovation:optimization ratio.** Audit where your growth team spent the last quarter. If it's 95% optimization, you're playing yesterday's game. Move toward 80:20 or even 90:10 innovation. Stop A/B testing onboarding microcopy — you're polishing a doorknob on a house that's being rebuilt monthly. Spend the cycles on new loops: collaboration invites, referral programs, satellite apps, community features, creator partnerships.

4. **Pick your moat stack and staff for it.** You get maybe three real moats, not six. Most AI-native companies should be running: trust (founder-led social + community + BIP + love marks), velocity of development (small lean team, hire AI-native employees, ship daily), plus one of {proprietary data, network effects, ecosystem}. If you can't articulate which three you're building, you're building none.

5. **Ship Minimum Lovable, not Minimum Viable.** MVP is dead. The hierarchy of SaaS needs has a new top: Functional → Reliable → Usable → Lovable. In AI where everyone ships "functional," lovable is the only reason to choose you. "Love marks" (delight moments, personality, unexpected care) used to be nice-to-have. Now they're retention infrastructure.

6. **Give a lot of shit away.** If you're pulling back on freemium because of AI margins, you're playing the wrong game. AI freemium has ~20–40% margins vs. 80%+ traditional SaaS. Doesn't matter. At Lovable, over half our expenses come from free usage — we look at it as our marketing budget, not a cost center. Word of mouth is the growth engine. The first "blow my socks off" moment lives inside the product, not in your ads. We'd rather hand out credits like candy than make Google richer.

7. **Reprice for AI economics.** Per-seat pricing is dying. One user can cost 10x another in compute. Feature-gated pricing makes no sense when users can prompt their way around your gates. Move to usage-based (credits), bundled with subscription floors for predictability. Outcome-based is the holy grail — pay when customer succeeds — but extremely hard to implement. Start with credits + subscription blend, tune the premium (at Lovable we found 20% "subscribe and save" premium on top-ups was the goldilocks zone; same price cannibalized, 40% killed take-rate).

8. **Let core product own activation.** In AI-native products, activation happens in one prompt. That interaction IS the activation. Growth can help with education and inspiration (help users imagine what to ask), but the crux of activation belongs entirely to core product. This frees growth to go chase loops, moats, and distribution.

## Examples

**Situation:** A Series B workflow SaaS company, $30M ARR, just shipped AI features. Leadership says "We're an AI company now." Growth team is still running the same playbook: optimize free-to-paid conversion, A/B test pricing page, invest in SEO.
**Application:** Wrong on three counts. One, run the Disruption Risk 2x2 — their core workflow is "AI-wrapped note-taking," which is simple + high utilization = DANGER ZONE. Two, they're optimizing when they should be innovating — a 5% lift on a product that's about to be replaced by vibe-coding is negative ROI. Three, SEO is collapsing. The right moves: figure out one genuine complexity moat (proprietary data from their workflow, probably), ship collaboration and network features to build switching costs, turn on founder-led social because their SEO is about to die, and kill 80% of the optimization roadmap to free up cycles for big bets.
**Result:** Painful 6 months — the team hates burning down the optimization backlog — but 18 months later they've moved into Complex + High Utilization territory with real switching costs, and the team's still in business when two of their former competitors die to Notion's AI.

**Situation:** A founder is about to raise at a huge valuation and the board wants a 3-year revenue plan with committed monthly conversion metrics and CAC payback targets.
**Application:** That plan is a lie and you know it. On the PMF treadmill the product will be unrecognizable in 12 months, the channel mix will have shifted at least twice, and the categories you compete in will have reshuffled. Don't pretend otherwise. Offer the board two things instead: a 12-month "running on the treadmill" scenario (what needs to stay true to keep up, with quarterly checkpoints), and a list of big bets with conviction ratings (what I think will land, what I'm unsure about, what I'd kill first if we missed a quarter). Then recommit to velocity of shipping as the real metric — ARR is a lagging indicator of how fast you can re-earn PMF.
**Result:** Sophisticated investors actually prefer this because it matches what they see from their other AI portfolio companies. Unsophisticated ones you have to educate, or accept that they'll hate you for the first year and love you when the numbers come in.

**Situation:** A company has a 100-person growth, marketing, and engineering org shipping one release a quarter. An AI-native competitor with 15 engineers is shipping weekly and outgrowing them.
**Application:** The headcount is the problem. AI-native structural advantage means small teams anywhere in the world punch above their weight because AI takes on so much of the heavy lifting. Lovable runs on 100 people at $200M ARR. Most traditional SaaS at that revenue has 300+. You cannot "bolt on" AI-native speed to a 100-person org — the middle management layers, the approval chains, the polished launch process, all of it drags velocity to the floor. The honest answer is to rebuild: flatten the org, remove the middle layer, force every engineer onto AI-native tooling, and accept that headcount will *shrink* on the way to growing ARR. Most CEOs won't do this and will be disrupted out of business. The ones who will are writing growth stories you'll study for the next decade.
**Result:** If done (rare), ARR growth compounds and headcount stays flat or shrinks. If not done, the competitor wins and the board eventually forces the change from a worse position 18 months later.

## Anti-Patterns (tactical)

**Don't:** Plan annual growth roadmaps with committed quarterly milestones.
**Why:** The foundation models reset the baseline. When GPT-5 ships, or Claude 5, or whatever's next, every assumption in your Q3 plan just expired. Plan monthly, commit weekly. The treadmill isn't slowing down for your OKR cycle.

**Don't:** Assume your moat is "we have AI" or "we have better prompts."
**Why:** Both are copyable in a weekend. Real moats are trust, proprietary data, network effects, ecosystem depth, and shipping velocity. If you can write down your moat and a competitor can replicate it with $200 of API credits, it's not a moat.

**Don't:** Protect per-seat pricing because "enterprise buyers prefer it."
**Why:** Enterprise buyers are getting smarter about AI economics faster than anyone. We're seeing large companies negotiate credits at scale, not seats. The procurement conversation has already shifted. Fighting to preserve per-seat is fighting to preserve a model the market is walking away from — you'll either get beaten on pricing flexibility by a usage-based competitor, or by a customer who vibe-codes their own internal version.

**Don't:** Cut freemium because the unit economics look bad.
**Why:** That's traditional SaaS math on an AI-native P&L. In AI, freemium is brand + distribution + love marks + retention, all rolled together. The first "holy shit" moment has to happen in the product, not in your ads. If you cut freemium you cut the moment. Budget it as marketing spend, not COGS. "We'd rather give our product away to every single one of you to give it a go, as opposed to making Google richer."

**Don't:** Try to optimize your way past an AI-native competitor.
**Why:** The compounding structural advantage isn't fixed — it grows. They're shipping faster, monetizing more flexibly, iterating more aggressively, and operating leaner. Every quarter you spend optimizing while they innovate, the gap widens. If you're not rebuilding, you're falling behind — no matter what your CAC:LTV says.

**Don't:** Copy Lovable's playbook because it worked at Lovable.
**Why:** Story time — we got a lot of things right, but we also got lucky: right place, right time, right team, fast-moving waters. Not every company can or should be like Lovable. Context matters enormously. Extract the principles (shipping velocity, empathy, building in public, freemium as marketing), adapt them to your market. Don't copy the tactics (our Discord, our credit pricing, our specific BIP cadence) — those are context-dependent.

**Don't:** Wait for the "treadmill to slow down" before investing in growth systems.
**Why:** It won't slow down for a few more years. The signals are: LLM progress becoming incremental not exponential, AI-native UX patterns stabilizing, customers caring more about outcomes than features. None of those are true yet. Pace yourself, but invest in the moats that survive (trust, data, network effects) now — the companies that wait for stability will arrive at stability already behind.
