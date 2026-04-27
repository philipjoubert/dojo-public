---
triggers:
  - "user is doing a post-mortem on a failure"
  - "team celebrates 'failing forward' without specifics"
  - "user is repeating failure patterns others have documented"
  - "founder is evaluating a risky bet"
  - "company has accumulated small dysfunctions nobody addresses"
use_when:
  - "running a post-mortem or diagnostic on a setback"
  - "deciding whether a risky bet is worth making"
  - "evaluating how much to invest in learning from failed companies"
  - "designing the feedback loops that keep leadership connected to real problems"
fails_when:
  - "used as license to take foolish risks for the sake of being 'original'"
  - "used to romanticize failure rather than reduce it"
  - "applied by ignoring well-documented failure modes in pursuit of frontier mistakes"
related:
  - "trust-battery.md"
  - "boxes-within-boxes.md"
  - "cheat-code-being-right.md"
---

# Die to Original Mistakes

## When to Use
- You're doing a post-mortem and want to sort which kind of mistake you made.
- You're evaluating a risky bet and trying to decide whether the downside is worth it.
- You notice your company is repeating patterns that have killed many companies before.
- You're designing the feedback loops that keep leadership connected to real operational signal (to prevent the specific failure mode where leadership was disconnected from known problems).

## Fails When
- Used as license to romanticize failure or take bad bets "for learning." The goal is minimizing all mistakes while ensuring the unavoidable ones are original. "We're failing forward!" is usually cope for poor execution.
- Used to ignore documented failure modes. If you dismiss well-understood ways companies die ("but our situation is different"), you die the same way they did, just slower.
- Treated as permission for repeated failures. An original mistake made twice isn't original anymore — original means you learned.

## Core Concept

Companies don't die from spectacular failures. They die from a thousand paper cuts — accumulated small mistakes that bleed out over time. The first imperative is obvious: reduce the total number of mistakes. But here's the insight that changes how you think about learning:

If you're going to make mistakes — and you will — make them original.

You die to a thousand paper cuts as a company. So first, avoid them becoming a thousand. Second, if you make mistakes, make them original so there's alpha in it — so that you accrue some additional knowledge that's now unique to you.

There's alpha in original mistakes. They teach you things nobody else knows. Common mistakes just put you in the same position as everyone who already made them, except later.

Most companies die the same way. Not from bold visionary bets gone wrong. From the same predictable failures that have killed thousands of companies before: lost touch with customers; ignored problems they knew about; let technical debt compound; hired wrong and fired late; scaled before they were ready. These patterns are well-documented. Anyone can study them. When a company dies from these causes, they've gained nothing unique from the experience — they just died.

And here's the maddening part, the thing you find invariably when you study failed companies: the company knew. The problems weren't mysteries. Customer support had been reporting them. Engineering had flagged them in meetings. HR had noted morale issues. The data was in the dashboards. The CEO just got disconnected from that information. Trust-falling instead of paying attention (see trust-battery.md). The disconnect is where the death happens, not the lack of information.

But when you make an original mistake — trying something that hasn't been tried, pushing into genuinely unknown territory — the failure teaches you something nobody else knows. That's competitive knowledge. That's differentiation through painful learning. You now have a specific insight that your competitors don't, because they weren't willing to run the experiment, or they ran a different one.

Studying failed companies is often more useful than studying successful ones, precisely because the patterns repeat. Every post-mortem of a failed company is a set of specific anti-patterns you can defend against. The cost of that defense — staying in the details, paying attention, hiring a certain way — is small relative to the repeated cost of dying the same way.

The two imperatives pair:
1. **Reduce common mistakes** — the paper cuts. These are well-documented. Defend against them explicitly.
2. **If you must fail, fail at the frontier** — where the failure teaches you something unique. That's where learning is worth the cost.

## How to Apply

1. **Sort every post-mortem into common or original.** Take your last five significant failures. Label each. Common: we didn't talk to customers enough; we shipped before it was ready; we ignored warning signs; we didn't have clear ownership. Original: we tried a novel approach to X and learned Y doesn't work. If most of your mistakes are common, you're dying the same death as everyone else and learning nothing unique.

2. **Study failed companies systematically.** Not to feel superior — to extract the patterns you must avoid. Failed companies are generous with their lessons if you're willing to read them. What were the paper cuts? Where did the CEO disconnect? When did they know, and why didn't they act? The answers are almost always the same small set. Build defenses against that set.

3. **Stay connected to known problem sources.** The canonical disconnect is from customer reality. Support rotations, regular customer conversations, dashboards that surface bad news by default — these are the mechanisms. If the CEO is only hearing about what leadership is interested in, the known problems are already accumulating where leadership isn't looking.

4. **Before any significant bet, ask: is this a common failure mode or an original one?** If a failure here would put you in the same hole that hundreds of other companies have died in, consider whether the bet is really worth it. If a failure would put you in a place nobody else has been, that's alpha on the downside — even losing teaches you something unique.

5. **Refuse the "we're failing forward!" framing unless you actually learned.** The phrase is cope if what you learned is something everyone else could have told you. Genuine forward failure produces knowledge you couldn't have gotten another way. Regular failure produces the same hole the last company died in.

6. **Build systems that surface known problems without waiting for escalation.** The failure mode isn't that nobody knows; it's that the knowers aren't reaching the decision-makers. Design the environment (see environment-over-policy.md) to route known problems into visibility. Default-open dashboards, customer support rotations that include leadership, structured problem-surfacing rituals.

## Examples

**Situation:** A startup fails because it built features customers didn't want. The team wasn't talking to users enough. They optimized for what was fun to build instead of what solved real problems.
**Application:** This is the modal startup failure. It's one of the most well-documented patterns in the entire category. The post-mortem says "we should have done more user research" — which is exactly what every other dead company in that pattern's post-mortem says. Nothing unique was learned. The founder who reads another startup's post-mortem learns the same lesson without having to die.
**Result:** The failure is unproductive. The team has what every other team in that hole has: a known problem, a known diagnosis, a known correction. No alpha.

**Situation:** A company tries a novel pricing model — charging only when a customer makes their first sale. It fails because the conversion window is too short and support costs exceed eventual revenue.
**Application:** This is an original mistake. Nobody else has tried this exact model. The team now knows something specific about payment timing and support economics that competitors don't. The failure is painful but productive. The alpha is in the specific lesson — "this kind of pricing creates a support cost curve that outpaces revenue unless conversion is X."
**Result:** The team redesigns. Their next approach incorporates the specific lesson. Competitors who try similar models will rediscover what this team now knows at less cost.

**Situation:** A CEO does trust-fall delegation. Six months later, a critical project is behind schedule, a key product is frustrating users, and a senior executive is quietly disengaging. Customer support has known the user frustration for months. Engineering has flagged the timeline. HR has noted the morale issue. Nothing reached the CEO.
**Application:** This is the canonical disconnect pattern. The company *knew* — the information was in the system. The CEO stopped paying attention and the information stopped surfacing. Post-mortem: "we should have escalated earlier." But that misses the point. The system shouldn't require escalation. The CEO should have been in the information flow the whole time.
**Result:** The fix is systemic, not escalation culture. Build environments where known problems route to leadership automatically — support rotations, default-open dashboards, regular "what's not working" rituals. Treat the disconnect as a design failure, not a communication failure.

**Situation:** Shopify, 2007–2008, near-death financially. Ran out of money, friends-and-family investors at stake, harrowing experience.
**Application:** Some of this was common (early-stage cash management), some original (figuring out how to build an e-commerce platform when the category didn't exist). The common part was addressed through better financial discipline; the original part produced unique capability — a team that knew how to build in scarcity, with conservative financial instincts and a culture of resourcefulness.
**Result:** The company that emerged was heavier for having survived (see infinite-game.md on heavy companies). Some of the weight came from avoiding common mistakes going forward; some came from the specific scar tissue of original mistakes only Shopify had made.

## Anti-Patterns (tactical)

**Don't:** Romanticize failure.
**Why:** The goal isn't to maximize original mistakes — it's to minimize all mistakes while ensuring the unavoidable ones are original. "We're failing forward!" is usually cope for poor execution. If your post-mortems are celebrations, something's wrong. Real forward-failure is painful and specific, not cheerful.

**Don't:** Dismiss common failure modes as "not applicable to us."
**Why:** "Our situation is different" is the most common cope for being about to die the same way as everyone else. Most situations aren't that different on the dimensions that matter. If the failure mode is well-documented and the preconditions are present, assume you're exposed unless you can specifically show why not.

**Don't:** Make the same original mistake twice.
**Why:** Original means you learned. If you didn't learn, the second iteration isn't original anymore — it's just common incompetence. Original mistakes pay for themselves only if the knowledge gets integrated. Otherwise they're just expensive failures with a flattering label.

**Don't:** Optimize for frontier failures at the expense of avoiding common ones.
**Why:** Taking foolish risks "for the learning" is how you waste the capital that could have funded the real frontier bets. Defend against the common stuff first. Then, with the resources and credibility that saves, push into the territory where failure actually teaches.

**Don't:** Design systems that require escalation to surface known problems.
**Why:** If the support team has to fight to get leadership attention on a known issue, the system is broken. Known problems should surface automatically through the environment. Escalation-dependent systems are specifically the failure mode where leadership gets disconnected — the system pretends to be working because nothing is screaming, but the silence is signal.

## Direct Quotes from Toby

> "You die to a thousand paper cuts as a company. So you have to first avoid it becoming a thousand, and then second, if you make mistakes, make them original so there's alpha in it — so that you accrue some additional knowledge that is now unique to you."

> "Studying failed companies is actually often more useful. What you find invariably is that the company knew exactly the stuff that was the problem. It's just like somehow CEOs got disconnected from that."

> "Most companies die the same way. Not from bold bets gone wrong or visionary gambles that didn't pan out. They die from the same predictable failures that have killed thousands of companies before them."

> "The clearance of the one-time-try hurdles that Shopify went through was like millimeters at times. I bet if you re-ran the first six years simulation 10,000 times, you would not succeed in most of them."

> "There's alpha in original mistakes. They teach you things nobody else knows. Common mistakes just put you in the same position as everyone who already made them, except later."

> "The company *knew*. The problems weren't mysteries. They were being reported by customer support, discussed in engineering meetings, visible in the data. The CEO just got disconnected from that information."
