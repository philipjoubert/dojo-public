---
triggers:
  - "user asks whether to make something free, subsidized, or low-priced"
  - "user reports an internal resource is 'always in short supply'"
  - "user says 'customers won't pay what it's worth'"
  - "user considers removing a chargeback, fee, or internal pricing"
  - "user dismisses a price signal ('they're just irrational')"
use_when:
  - "a scarce resource is being underpriced or 'free'"
  - "shortage exists at current price but supply is plausibly available at a higher price"
  - "you're about to subsidize something to 'eliminate friction'"
fails_when:
  - "actual physical scarcity exists at any price"
  - "the resource is non-rivalrous (duplicating a file costs ~nothing)"
related:
  - "incentives-not-intentions.md"
  - "feedback-mechanisms.md"
  - "dispersed-knowledge.md"
---

# Prices as Information

## When to Use
- Proposals to make a resource "free" or "affordable" internally (engineering time, conference rooms, cloud compute, support tickets).
- Chronic shortages of something officially abundant. ("We always run out of conference rooms, and we have a lot of them.")
- Pricing strategy discussions that treat price as revenue only, not as signal.
- Founders resisting a price signal from the market ("customers don't understand the value").
- Free tiers, subsidized pricing, and the conclusion that "adoption is happening" — adoption at zero price tells you nothing about willingness to pay.

## Fails When
- The resource is genuinely not scarce (pure information goods with zero marginal cost). Pricing these may not carry useful signal.
- Signaling concerns override price concerns — sometimes free-as-signal is the right call (free-trial, samples), but only when explicitly reasoned, not as a default.

## Core Concept

Most people think of prices as costs or revenue — obstacles to overcome, or targets to hit. Prices are something more fundamental. Prices are messengers conveying news. They are an information system, aggregating knowledge that no individual possesses into signals that everyone can act on. Block the messenger and you lose the message.

A price conveys at least four things at once:

- **Relative scarcity.** A price tells you how much of something exists compared to how much people want. When copper prices rise, this communicates that copper is getting scarcer relative to demand. You don't need to know why — a mine strike in Chile, a battery factory in Nevada, a construction boom in Asia. The price tells you everything you need to act: economize on copper, consider zinc.
- **Opportunity cost.** A price tells you what else could be done with the same resources. The $50K salary of that engineer reflects what other employers would pay her. It is not arbitrary. It is the value she could create elsewhere — the thing you are pulling her away from.
- **Consumer valuations.** Prices aggregate millions of individual preferences into a single number. When customers pay $1,000 for your product, that number represents what they believe it is worth compared to alternatives. No survey captures this accurately.
- **Production efficiency.** Prices tell producers whether they are using resources well. If you cannot make something profitably at market prices, the market is saying: *those resources create more value elsewhere. Stop using them here.*

The remarkable thing about this system is that nobody needs to know the whole story. A brass manufacturer does not need to know that there was an earthquake in Chile that damaged copper mines. He just needs to see that copper prices rose, which tells him to economize on copper and use more zinc. The information is transmitted without the explanation. This is how millions of transactions coordinate without anyone directing them.

## Scarcity is Not Shortage

This is the single most useful distinction in the topic, and the one most people get wrong.

**Scarcity is inherent.** Wants exceed resources. There will never be enough beachfront property for everyone who wants it, enough time for everyone to do everything, enough of any limited good for unlimited desires. Scarcity is permanent.

**Shortage is a price phenomenon.** A shortage occurs when demand exceeds supply at the current price. Change the price, and the shortage disappears — though scarcity remains.

The concrete illustration: in 1906, an earthquake destroyed half of San Francisco's housing. Genuine scarcity. Rents rose, and no shortage emerged. People doubled up; some left the city; some postponed moving there. Capital flowed in to build new housing. The market adjusted. No waiting lists, no lines, no "crisis."

In contrast: during and after World War II, the U.S. had no more people per unit of housing than before. Same ratio. But price controls (rent control, wartime regulations) prevented rents from adjusting. Result: severe housing shortages. Americans spent weeks searching for apartments, resorted to bribes, slept in garages, bought military-surplus Quonset huts to live in. The physical supply had not changed. What changed was that the price was forbidden to carry information about scarcity.

The diagnostic is simple: *Can this problem be solved by changing the price?* If yes, you have a shortage. If no, you have true scarcity.

For founders this distinction matters constantly. You cannot hire enough engineers. Scarcity or shortage? If engineers would come to you at a higher wage, it's a shortage — you are not paying market. If no wage attracts them, it's scarcity. Different problems, different solutions. Your conference rooms are always booked. Scarcity or shortage? If the rooms are free to use, you have a shortage. Charge anything for them — even internal allocation, even as a soft chargeback — and you will discover that people combine meetings, use smaller rooms, or discover they did not need a room at all.

## What You Lose When You Block the Price

When you subsidize something, make it free, or cap its price, you lose the information the price would have carried.

A free tier or heavy discount blocks the price signal. You won't know whether customers value the product or just value "free." The product might be useful; or it might be merely without cost. These are different things. Pricing distinguishes them. When you give the product away, you don't know which applies.

Internal subsidies work the same way. Free snacks communicate that snacks have no value. Below-market internal service transfers communicate that the service costs nothing to provide. Generous travel policies communicate that travel is free to the organization. None of this is true — but the price, or absence of it, tells people to act as if it were.

There is a parallel principle about labeling. A supermarket whose canned goods have had their labels washed off must sell them at a fraction of their original price, even though the contents are identical. The contents haven't changed. The information has been lost. Prices work the same way — they are labels on transactions, telling you what you are getting and what it is worth. Remove the price signal and you remove the label.

## Reading Prices as Signals

Prices are not just revenue tools; they are information sources. When customers don't buy at your price, that is information. The market is telling you something about your value relative to alternatives. The information might be wrong — markets make mistakes — but it is still information. Ignoring it because "customers don't understand our value" is like ignoring a thermometer because you don't like the temperature.

There is a common pattern among founders who resist price signals. They believe their product is worth more than customers will pay. Perhaps it is. But the price signal still contains information: either customers don't perceive the value, or they perceive it and value it less than you do, or the alternatives are better than you think, or the switching cost makes your value inaccessible. Each of these is useful. The response to "customers won't pay what this is worth" is not to dismiss the signal but to decode it. *What is the market telling me that I don't want to hear?*

## How to Apply

1. **Before making anything "free" or heavily subsidized, ask: what information am I losing?** If a PM will no longer need to justify using engineering time, how will you know which product bets are worth the resource? If cloud compute is free to teams, how will you know which architectural choices are economically reasonable?

2. **Chronic internal "shortages" are almost always price problems, not resource problems.** Conference rooms, engineering cycles, support time, travel budget, executive attention. If it's free and always full, it's being overconsumed because the price is zero. Introduce a price — even a soft internal allocation or a chargeback — and consumption will drop to a much more honest level.

3. **When customers don't buy at your price, decode rather than dismiss.** Either your value prop is wrong, your customer segment is wrong, switching costs block access to your value, or the competitive alternative is better than you thought. Each is useful. Dismissing the signal is never useful.

4. **Distinguish "free for strategic reasons" from "free because pricing feels hard."** Free-as-signal (a freemium tier designed to demonstrate value before upgrade) can be a conscious choice. Free-because-I-don't-want-the-conversation is a failure of pricing discipline. Only the first is legitimate, and it requires you to state, explicitly, what information you are intentionally forgoing in exchange for what.

5. **Where costs are hidden, find them.** Costs do not disappear when you decline to charge. They land somewhere — often on the very group the "free" was supposed to help. Free internal service transfers show up as longer queues, lower quality, or a cross-subsidy from the team that produces the service to the team that consumes it. Follow the cost. It lands somewhere.

## Examples

**Situation:** A company announces "engineering is now free to all product teams — no more chargebacks."
**Application:** You have just made engineering a free good. Every team's demand for engineers is now effectively infinite. The chargeback was not friction; it was the information system that forced teams to economize. Removing it does not increase engineering supply; it only removes the signal that said "this is scarce." Expect every product team to show up with larger staffing requests, because they are no longer required to internally weigh cost against value.
**Result:** Either keep some form of pricing (explicit chargeback, or a transparent priority allocation) or face a persistent "engineering shortage" that is actually a pricing artifact.

**Situation:** A founder is told by the sales team "customers keep pushing back on our $40K list price; we need to lower it."
**Application:** Before lowering, decode. Is the pushback universal or from certain segments? If universal, your value prop is priced above perceived value. If segmental, you may be selling to the wrong segments. Are the competitive alternatives at $20K, making your $40K look high — or at $60K, making you undercut but distrusted? Is the switching cost making the $40K value inaccessible regardless of how attractive it looks on paper?
**Result:** The market signal is real; the appropriate response is to decode which of those channels it's traveling through. Blanket discount without decoding is the wrong move; so is stubborn refusal to consider that the signal might be telling you something you need to hear.

**Situation:** A startup debates making its support free ("we'll treat it as customer success investment") rather than charging $200/month.
**Application:** Ask what information is lost. At $0, every customer consumes support; you will not learn which customers actually find it valuable. At $200, the customers who subscribe have told you something — they value it at least $200/month. The price is not just revenue; it is a filter and a signal. Free support may also eliminate the feedback loop that tells your product team which support requests are the most expensive, because now every request costs the same (nothing) to the customer and is paid for invisibly by you.
**Result:** Usually the answer is "charge, but make the support actually good, and use the revenue and the customer signal to tune it." Free-support-as-retention-tool is occasionally right but requires you to name what you are giving up, not assume the decision is costless.

**Situation:** A government (or company) caps the price of a scarce good — gasoline, electricity, internal cloud compute — to "make it affordable."
**Application:** Scarcity doesn't disappear. Shortage appears. Lines, queues, rationing, declining quality. The people the cap was supposed to help often pay more, not less, because their time in queues is not zero-cost and because the supply contracts as producers flee an unprofitable market. During the California electricity crisis, wholesale prices signaled scarcity; retail price controls told consumers nothing had changed. Consumers demanded more than was available. Blackouts followed.
**Result:** If you wanted to help a specific population afford a specific thing, the right move is almost always a transfer (to the population) that preserves price signals, not a cap (on the thing) that destroys them.

## Anti-Patterns (tactical)

**Don't:** Treat "free" as equivalent to "cheap" or "abundant."
**Why:** Free is a signal that the thing costs nothing, which is untrue of almost everything. The moment you declare something free, demand rises to meet supply, the supply cannot respond (because the price that would have attracted more supply is forbidden to rise), and you get shortage. Free things are almost always in short supply.

**Don't:** Dismiss a market price signal as "customers are confused."
**Why:** Sometimes they are. Usually they are not. The phrase "customers don't understand our value" is where bad pricing strategy goes to hide. Decode the signal before dismissing it.

**Don't:** Confuse scarcity with shortage.
**Why:** The confusion produces the wrong intervention. Shortage can be fixed by changing the price. Scarcity cannot. If you treat a shortage as scarcity, you will waste effort "producing more" of something that will simply be over-consumed again at the artificial price. If you treat scarcity as shortage, you will change the price and be surprised when nothing happens.

**Don't:** Evaluate the success of a free tier by adoption alone.
**Why:** Adoption at zero price tells you people value the product at least at zero. That is nearly everyone. It does not tell you they would pay. Unless you have a downstream conversion metric that is actually hitting, free-tier adoption is a vanity signal.

**Don't:** Subsidize one group by hiding the cost in another.
**Why:** The cost lands somewhere. When you subsidize internally, the funding team eventually notices — often when their own budget is under pressure. The subsidy is unstable because it was never economic; it depended on the receiving team not being priced honestly. Make the transfer explicit or stop doing it.

Prices are messengers. They carry news about what is scarce, what is valued, and what trade-offs exist. When you block the messenger, you do not change the reality. You just lose the information about it. The scarcity remains. The decisions become uninformed. The consequences follow.
