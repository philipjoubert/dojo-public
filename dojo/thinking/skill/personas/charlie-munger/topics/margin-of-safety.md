---
triggers:
  - "user presents a plan optimized to the edge"
  - "user describes a financial, staffing, or operational projection without a downside case"
  - "user is considering how much runway, headcount, or capacity to carry"
  - "user says they are 'sure' and therefore don't need a buffer"
  - "user has a single point of failure on a person, vendor, customer, or assumption"
  - "user asks about risk management, contingency planning, or worst-case analysis"
use_when:
  - "a decision involves uncertainty and the downside case has not been priced in"
  - "the plan requires everything to go right to survive"
  - "a forecast is being presented with contingency so thin it wouldn't actually save you"
  - "you are deciding how much capital to raise, how early to hire, how conservative to be on timelines"
fails_when:
  - "applied to truly reversible decisions where over-buffering is just expensive caution"
  - "used as a psychological comfort rather than a structural change — feeling safer is not the same as being safer"
  - "used to avoid decisions entirely — some decisions must be made with irreducible risk and no amount of margin fixes it"
related:
  - "inversion.md"
  - "avoiding-stupidity.md"
  - "evaluating-businesses.md"
  - "iron-prescriptions.md"
---

# Margin of Safety

## When to Use
- Any financial projection. Fundraise sizing. Burn rate planning. Runway. If the plan survives the base case but not a thirty-percent shortfall, it is not a plan, it is a wish.
- Hiring decisions. Do you have backup for critical roles? If your head of engineering leaves tomorrow, does the company stop? That is a failure of margin.
- Timelines. Every founder's timeline is optimistic — it is the nature of the animal. Build the buffer in deliberately, before the delay arrives, not after.
- Supplier and customer concentration. If one customer is twenty percent of revenue, you don't have a customer, you have a single point of failure.
- Any decision where "I'm sure" is your reason for not building in a buffer. That phrase is where the disaster lives.

## Fails When
- **Treated as a feeling rather than a structure.** The bridge isn't safer because the engineer feels better about it. It's safer because it holds ten times the expected load. Same for a company. If the margin is psychological comfort rather than a structural change — more cash, more people, more time, more backup suppliers — you haven't built a margin, you've built a rationalization.
- **"Contingency" that doesn't actually produce survival.** An optimistic forecast with a ten-percent contingency line is not a margin. It's decoration. A real margin means the plan survives when things go meaningfully worse than expected. If the pessimistic case doesn't produce survival, the margin is fake.
- **Over-margined to the point of paralysis.** You can buffer yourself into inaction. The engineering principle is ten-times expected load on a bridge. It is not infinite load. Know what you're designing for and design for that, with real headroom, then move.
- **Applied to trivially reversible decisions.** You don't need margin of safety on what color to paint the conference room. Reserve it for decisions where the downside can kill you.

## Core Concept

Rich or poor, it's good to have a huge margin of safety. Of course. This is borrowed from engineering, not from finance, and the engineering version is the one that matters. A bridge is designed to hold ten times the expected load. Not because the engineer thinks ten-times is the likely load. Because the engineer knows what happens when a bridge fails — people die — and because he has no confidence that his forecast of the expected load is exactly right. The margin is not a comfort. It is a structural property of the bridge.

In the financial world, people don't give a damn about safety. They let it balloon and balloon and balloon, aided by false accounting. I'm more pessimistic about this than Warren. The founder who says "I don't need a margin, I'm sure" is the exact person who is going to blow himself up — not because he is stupid, but because his forecasts are optimistic and the world is more variable than his model, and those two together produce ruin the first time a mildly bad quarter arrives. Engineers got this right centuries ago. Founders, as a class, have not yet caught up.

The principle is simple. Assume things will go meaningfully worse than your base case. Not a little worse — meaningfully worse. Thirty percent worse. Fifty percent worse. Then build the plan so you still survive. That is margin of safety. If the answer to "what happens if we raise less, hire slower, the product takes longer, and two customers leave" is "we die," the plan is optimized to the edge and the edge is where people go over the cliff. If the answer is "we survive, we pivot, we raise again," you have a margin. And the margin is not the nice-to-have — it is the whole thing. The plan without the margin is not a worse version of the same plan. It is a different kind of plan — one that only works if the world is kind. And the world is not, mostly, kind.

## How to Apply

1. **Model the pessimistic case explicitly, in detail, and survive it.** Not "what if things go a little worse." What if revenue is thirty percent below plan, and it takes six months longer than expected to raise the next round, and you lose two of your top engineers, and a major customer churns. Write it down. Run the finances through it. Do you survive? If no, the plan is broken and needs a margin added. Do not skip this step because the pessimistic case feels unlikely. Pessimistic cases arrive at companies where the founder thought they were unlikely.

2. **Raise more than you think you need.** The founder who raises exactly eighteen months of runway has zero margin — the first bad quarter, the first delayed customer, the first hiring miss, and now he is raising in a panic with six months left. The founder who raises twenty-four months has margin. The founder who raises thirty months when he thinks he needs eighteen has built a bridge that can hold the load plus the weather plus the occasional truck that shouldn't have been on it. That is what you want.

3. **Hire ahead of critical needs, not just in time.** The "hire when you need them" principle is a false economy. Critical hires take three to six months to find and six more months to become productive. If you're hiring only when the need is obvious, you're eighteen months behind, and that is exactly when hires go wrong, because you have no time to be selective. Build the bench before the bench is needed. It feels wasteful until the day it saves you.

4. **Buffer every timeline by fifty percent, at least.** Every founder's timeline is optimistic. This is not a personal failing, it is a species-level pattern — over-optimism is one of the standard twenty-five tendencies. Account for it explicitly. Take your team's best estimate, add fifty percent, then commit to the longer number internally. Under-promise, over-deliver, survive. The alternative — promising the best case and barely hitting it when everything goes right — is a disaster the first time anything goes wrong, and something always goes wrong.

5. **Eliminate single points of failure on people, suppliers, and customers.** If one person leaving stops the company, you have a critical vulnerability. If one supplier failing stops production, same. If one customer leaving cuts your revenue in half, same. The principle applies to all three. Build redundancy into the critical nodes — documentation, backup suppliers, customer diversification — before you need it, because when you need it there is no time to build it.

6. **Never let "I'm sure" be the reason for not building a margin.** That phrase is exactly where you have to override your own instinct. If you feel sure, the biases are probably loaded. Over-optimism and self-regard will both be pushing you to skip the buffer. The engineer building a bridge is also sure — he has run the calculations. And he still builds it to hold ten times the expected load. Because being sure is not the same as being right, and the cost of being wrong asymmetric. So with a company.

7. **Separate the structural margin from the psychological feeling.** You cannot think your way to safety. You have to build the buffer physically — more dollars in the bank, more people on the team, more months on the timeline, more suppliers in rotation. A meeting where everyone agrees you've accounted for the risks is not a margin. The extra cash in the account is a margin. Never confuse the conversation for the buffer.

## Examples

**Situation:** A founder plans to raise $30M to fund an 18-month push. The model shows exactly enough capital to reach the next milestone. Every assumption is the expected case. Burn rate holds. Hiring happens on time. Customers adopt at the projected rate.

**Application:** Run the pessimistic case. What if you raise $20M instead of $30M because the market tightens? What if your head of engineering leaves three months in? What if two planned customers delay by six months? What if the product requires two revision cycles instead of one? Any one of these is routine. The combination is what actually happens. Does the company survive that case? In the original model, no. That means the original plan is not a plan — it is a dependency on best-case everything, and best-case everything almost never arrives.

**Result:** Redesign. Raise twenty-four months of runway, not eighteen. Hire a deputy for the head of engineering, not just the head. Build the roadmap to hit the core milestone on two-thirds of the plan's capital. Model the company at seventy percent of projected revenue and ask if it still survives. If the revised plan works in the pessimistic case, the original plan was too tight. If it doesn't, you're not ready to raise. The margin is not optional. It is the distinction between building a company and making a bet on a specific sequence of events.

**Situation:** Ben Graham's concept of value, which Munger and Warren learned from and adapted.

**Application:** Graham would buy a stock only at one-third or less of its sellout value. Why one-third? Why not three-quarters, which would still show a paper edge? Because Graham knew two things. First, his own estimate of value was imperfect. Second, the market could stay wrong longer than any individual could stay solvent. The two-thirds discount was not greed — it was engineering. It was a buffer against his own mistakes, against the market's delay, against the company's deterioration, against all the things that could go wrong between buying and realizing value.

**Result:** Graham's approach produced extraordinary returns for decades precisely because of the margin, not in spite of it. The discount was the whole engine. Buffett and Munger eventually adapted the principle — paying up for wonderful businesses rather than buying cigar butts — but they never abandoned the underlying discipline. A wonderful business at a fair price still requires a margin for error. They built that margin into the quality of the business itself: businesses with durable competitive advantages that could survive the mistakes and the bad quarters that a lower-quality business could not.

**Situation:** An engineer is sizing a beam for a building.

**Application:** He calculates the maximum expected load. Then he multiplies by a safety factor — typically somewhere between two and ten, depending on the stakes. A residential floor joist gets less margin than a bridge truss. A bridge truss gets less margin than a nuclear containment vessel. The margin scales to the consequences of failure. The engineer does not feel better when he adds the margin; the building does not look different; nobody notices. The only time the margin becomes visible is the day something goes meaningfully worse than expected. And on that day, the difference between a building with margin and a building without margin is the difference between an uncomfortable night and people dying.

**Result:** This is the exact right mental model for every important business decision. The margin is invisible when things go well. The margin pays off catastrophically when things go badly — not by producing a slightly better outcome, but by producing survival versus ruin. The asymmetry is the whole point. You do not build margin because you think the downside is likely. You build it because you know you cannot afford to be wrong when it arrives.

**Situation:** A founder has 40% of revenue coming from one customer.

**Application:** Model the company without that customer. Does the business survive? Usually not — 40% concentration means losing that customer produces immediate catastrophic revenue decline with no realistic ability to replace it in the quarter you'd need to. That is a single point of failure, and it is not hypothetical: customer concentrations of that size reliably produce the exact failure they predict, because the big customer knows the power it has and uses it on price, on terms, on custom features that consume the roadmap, and eventually on leaving.

**Result:** The correction is structural, not psychological. Diversify the revenue — deliberately, over several quarters, even at some short-term growth cost. Price the big customer appropriately for the concentration risk they represent. Build the sales motion that produces smaller customers in volume. The comfort of the big check disappears quickly when the check stops coming. The margin is built in advance, by reducing the concentration to a level where any single customer leaving is a bad quarter, not an extinction event.

## Anti-Patterns (tactical)

**Don't:** Treat "margin of safety" as a feeling of being careful rather than a structural feature of the plan.
**Why:** The bridge is not safer because the engineer feels thoughtful. It is safer because the steel is thicker. Same with a company. The margin has to be something physical — dollars in the account, people on the team, months on the clock, suppliers in rotation. If you can't point to the specific structural thing that makes the plan survive the pessimistic case, you don't have a margin, you have a mood.

**Don't:** Call a 10% contingency line a margin of safety.
**Why:** Ten percent is a rounding error in a real business. Things don't go 10% worse than expected. They go thirty, fifty, sometimes a hundred percent worse. A contingency that only covers minor variance is decoration on an optimistic plan, not a real buffer. If the pessimistic case doesn't produce survival, the number is wrong, and more zeros in the contingency line won't fix the underlying problem.

**Don't:** Over-margin into paralysis.
**Why:** The engineer designs to ten times expected load, not to infinity. Margin is calibrated to the consequences of failure, not to universal anxiety. If every decision gets buffered maximally, no decision gets made, and the company fails in the opposite direction — from excess caution rather than from optimism. Size the margin to the stakes. On survival-level decisions, huge. On reversible decisions, minimal. Get this calibration right.

**Don't:** Assume that because you've survived with thin margins before, thin margins are safe.
**Why:** That is survivorship bias speaking. You're not looking at the graveyard of companies that ran the same thin margins and didn't survive the quarter you happened to avoid. The fact that a tightrope walker hasn't fallen yet does not prove that tightrope walking is safe. It proves he has been lucky. Companies running without margin are running on luck. Luck is not a strategy and cannot be sustained.

**Don't:** Let "I'm sure" be the reason for skipping the margin.
**Why:** That phrase is the exact condition under which the biases are loaded — over-optimism, self-regard, consistency with your past public commitments, denial about what could go wrong. The more sure you feel, the more likely you are running on biases rather than on analysis. The engineer who is sure still builds the bridge with ten times the expected load. So should you. Being sure is not the reason to skip the margin. It is the reason to add it.

Rich or poor, it's good to have a huge margin of safety. In engineering, people take this seriously. In finance, they don't — and you can watch the blow-ups every few years like clockwork. Don't be the next example. Build the buffer, make it structural, size it to the downside, and then move. The people who've been in business a long time all did this, one way or another. The ones who didn't are not in business anymore.
