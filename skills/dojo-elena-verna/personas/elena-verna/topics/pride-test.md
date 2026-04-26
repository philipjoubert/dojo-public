---
triggers:
  - "user asks if a growth tactic is 'too aggressive' or feels shady"
  - "user wants to hide the cancel button, use confirmshaming, add fake urgency"
  - "user's team is debating ethical trade-offs in growth"
  - "user proposes dark patterns (hidden costs, forced continuity, fake scarcity)"
  - "user asks how to balance user experience and revenue"
  - "user is under revenue pressure and considering aggressive tactics"
use_when:
  - "evaluating any growth tactic before shipping — does it pass the Pride Test?"
  - "pushing back against 'revenue-at-all-costs' pressure from leadership or the board"
  - "the line between urgency and manipulation, paywalls and extortion, is getting blurry"
fails_when:
  - "the company is already in a revenue-addicted death spiral with no exec-team appetite for change — the Pride Test won't save a culture that's already rotted"
related:
  - "retention.md"
  - "activation.md"
---

# The Pride Test — Growth Without Dark Patterns

## When to Use
- Before shipping any growth tactic that leverages user psychology. Urgency banner, confirmshaming, aggressive cancellation flow, paywall placement — any of it. Run the Pride Test first.
- When the team is debating "how far is too far" on a monetization tactic. When you feel the wobble. When a stakeholder says "well, competitors do it." That wobble is the signal.
- When revenue pressure is making everyone's decisions shorter-horizon. Dark patterns are usually symptoms of pressure, not malice — which means the Pride Test is a defense against *systems* pushing good people toward bad choices.

## Fails When
- **The exec team is already revenue-addicted.** "If we can't measure revenue attribution, we're not doing it." If you hear that phrase, the company has already crossed over. The Pride Test is a decision framework for teams that can still make decisions. It's not an exorcism.
- **You're confusing friction with manipulation.** A 3-screen profiling flow is not a dark pattern. A clear paywall is not extortion. Not every tactic that costs a user something is unethical. The Pride Test isn't about removing every nudge — it's about drawing a line at the ones you can't stand behind.

## Core Concept

Growth work is applied psychology. A big part of our job is figuring out what makes people tick — loss aversion, FOMO, fear of being left behind, wanting a good deal, respecting authority, guilt. And then using those emotions to nudge people toward clicking, signing up, or upgrading. Used responsibly, these nudges highlight real value and help users make decisions they'd make anyway with better information. Crossed over, they become tricks — and tricks erode trust, and trust is the only moat left.

Let me be clear: **growth at the cost of user trust is not growth. It's borrowing from the future.** In a world of infinite alternatives and AI-generated noise, trust is the mechanism of distribution. High-trust brands get word-of-mouth, lower churn, pricing power, and organic acquisition. Low-trust brands get dark-pattern-driven short-term revenue followed by a customer exodus the moment a friendlier competitor shows up — and the barrier to entry has never been lower. You are one vibe-coded alternative away from losing the customers you scammed.

**My barometer is two questions:**

> **Am I proud of the experience we've created?**
> **Can I stand behind this decision?**

That's it. That's the whole test. If the answer is no, congrats — you've probably just found the line between solid growth and a dark pattern. Compromises are fine. Compromises I can't proudly stand behind are not.

**Where's the line? Let me draw it.**

- **Urgency banner saying "plan upgrade window closes Friday"** — fine if it's actually true. A countdown timer that resets on page refresh? Dark pattern. The rule: the thing you're telling the user has to be real.

- **Paywall at the feature level** — fine. Users should know what's free and what costs money. Burying the free plan so it's hard to find, making the "X" on the paywall modal a 4-pixel grey smudge, shrinking cancellation language to make it look scary? Extortion. The rule: clarity is not the enemy of monetization.

- **Cancellation flow with save offers, pause options, discount tier for late cancels** — fine. A cancellation flow that hides the final "cancel" button on page 5 of settings behind a phone call and a notarized letter? There are now literal *laws* against this. The rule: you can offer alternatives; you cannot trap.

- **Loss-aversion messaging ("you'll lose access to the 98GB of storage you're using")** — fine, and often more honest than alternatives. "Only 3 hours left!" with a fake timer — not fine. The rule: loss aversion based on real data is persuasion; fabricated urgency is manipulation.

- **Social proof ("12,394 people signed up this week")** — fine if it's true. Fake numbers — dark pattern. The rule: don't lie.

- **Confirmshaming ("No thanks, I hate saving money")** — dark pattern. Full stop. Nobody should feel bad for opting out of your upsell. Guilt-tripping into consent is not consent.

- **Hidden costs** — "processing fees" revealed at checkout, add-ons auto-bundled — full dark pattern. Bundled doesn't mean hidden. If the price on your pricing page is not the price the user pays, you've crossed the line.

- **Fake anchoring** — "Was $99, now $29!" when it was always $29. Dark pattern. Also probably illegal in most markets now.

- **Data hostage** — making it nearly impossible to export, download, or transfer data so users can't leave. Dark pattern and a retention strategy that backfires spectacularly the second a competitor offers seamless import from you.

**The dark patterns aren't usually born from malice.** They're symptoms of pressure. Aggressive growth targets, maximize conversion at all costs, retain users at any cost. When KPIs outrank long-term trust, things start to bend. That's why the Pride Test has to live at the individual decision level — because the system will push good people toward bad choices unless the individuals push back.

**The Lovable example.** At Lovable, we found our subscription-only model was misaligned with actual user behavior. The "revenue-first" move would have been to tighten the screws — make cancellation harder, hide the downgrade option, squeeze the free tier. Instead, we introduced top-ups alongside subscriptions at a 20% premium. Our paid upgrades dipped, but retention improved 7% and engagement — our actual north star (daily active apps, not revenue) — climbed. We collected more money in the long run *and* could stand behind the experience. That's what passing the Pride Test looks like in practice.

**The underlying principle: trust is the moat.** In the AI era, distribution channels are collapsing (search, social, everything), and products can be replicated by customers in an afternoon. The only moat that compounds instead of eroding is trust. Word of mouth, transparent pricing, delivering on promises, not screwing people over. Revenue-addicted companies can't build this moat because they're always borrowing from tomorrow's trust to hit this quarter's number. Friends don't let friends ship dark patterns. Not because it's morally pure — because it's the strategy that actually wins over 3+ years.

## How to Apply

1. **Before shipping any growth tactic, ask the two questions out loud.** *Am I proud of this? Can I stand behind this?* Say it in the meeting. Make it uncomfortable. If nobody can answer yes with conviction, you've found your signal.

2. **Write down what you're leveraging and whether it's real.** Is it loss aversion from real usage data (yes), or fabricated scarcity (no)? Social proof from real numbers (yes), or inflated testimonials (no)? Urgency based on a real deadline (yes), or a countdown that resets (no)? The test: is the psychological lever anchored to something true?

3. **Audit your cancellation flow against regulators, not competitors.** "Our competitors do it" is not a defense. There are now literal laws — in the US, EU, UK — against hidden cancellation flows and forced continuity. If your cancellation flow would make an FTC case study, redesign it. Offer pauses, offer discounts, offer downgrades, but always make the exit one click and unambiguous.

4. **Make price honest on the pricing page.** The number on the page is the number the user pays. Fees, bundled add-ons, "processing charges" revealed at checkout — those belong on the pricing page, not in the receipt. This one is so simple and so commonly violated.

5. **Separate friction from manipulation.** Profiling questions, feature walls, upgrade prompts, paywalls — all legitimate. The line is clarity vs. confusion. A clear paywall at a clear feature at a clear price is fine. A paywall that triggers after you've already invested an hour of work is punitive.

6. **When revenue pressure rises, double down on the Pride Test, don't abandon it.** Dark patterns are symptoms of pressure, not bad people. The test is *especially* needed when leadership is pushing for aggressive growth. Your job is to push back.

7. **Name the dark pattern out loud when you see it.** Hidden costs, forced continuity, confirmshaming, trick questions, misdirection, roach motel, data hostage, fake anchoring. If someone on your team is proposing one, call it by its name. Names have power. It's harder to ship a "confirmshaming flow" than an "engagement-optimized opt-out."

## Examples

**Situation:** A SaaS company's CFO wants the team to "tighten the cancellation flow" because voluntary churn is eating margin. Proposed: bury the cancel button, add a multi-step flow with dark-pattern guilt messaging, require a phone call to fully cancel.
**Application:** Pride Test. Can you stand behind "required a phone call to cancel"? Nope. Plus it's now illegal in several jurisdictions. Redesign: keep the multi-step flow but make every step an *offer*, not an obstacle. Show what they'll lose (with real data — "you're currently using 98GB, you'll lose access to all of it"). Offer a pause. Offer a discount tier based on their cancel reason and activity level. Make the final cancel one click. These moves *also* beat the dark-pattern version on recovery rate because users don't feel trapped.
**Result:** Voluntary churn recovery hits the 20% benchmark on early cancellers. Long-term trust metrics (NPS, review site sentiment) hold steady instead of plummeting. No regulatory exposure. No "we got caught hiding the cancel button" story on Reddit.

**Situation:** Revenue pressure from the board is pushing the growth team to propose hidden-cost pricing — advertise $29/mo but reveal $9/mo "service fees" at checkout.
**Application:** Name the dark pattern: hidden costs. Run the Pride Test. The real price is $38. Put $38 on the pricing page. The "lift" from hidden costs converts at checkout but tanks trust — users churn when they notice on their first invoice, leave one-star reviews, and the story spreads. Alternative: segment the pricing page, offer a $29 plan that genuinely lacks the $9 feature, and a $38 plan with it. Real choice, real price.
**Result:** Trust metrics hold. Short-term conversion dips slightly vs. the hidden-cost version but long-term LTV climbs because churn is lower and word-of-mouth stays positive. The Pride Test saved the brand from a class action in 18 months.

**Situation:** A subscription-only AI product is seeing engagement suppress because users feel trapped by the recurring commitment. The "revenue-addicted" move is to make cancellation harder. The Lovable move was the opposite.
**Application:** Introduce top-ups (one-time credit purchases) alongside subscriptions at a 20% premium — Amazon subscribe-and-save framing. Users get a clear choice: commit and save, or pay as you go at a premium. A/B test: same price cannibalizes subscriptions, 40% premium kills top-up take-rate, 20% is Goldilocks.
**Result:** At Lovable, 20%+ of bookings shift to top-ups in one week. Subscription revenue keeps growing. Paid retention improves 7%. Engagement (daily active apps, the real north star) climbs because users aren't dancing the upgrade-downgrade game anymore. Pride Test: passed. We found pricing that works for users AND the business, and we can stand behind the experience.

## Anti-Patterns (tactical)

**Don't:** Hide the cancel button, require phone calls, or make exits multi-step obstacle courses.
**Why:** Now literally illegal in many jurisdictions (FTC click-to-cancel rule, EU consumer protections). Also the story breaks on social media within weeks, your trust moat evaporates, and your competitors run a campaign called "easier to leave than they are." Short-term revenue, long-term catastrophe.

**Don't:** Use confirmshaming. "No thanks, I hate saving money." "I'll pass, I don't like learning."
**Why:** Guilt-tripping users into consent is not consent. It feels cheap to everyone who reads it, including the users who click through. You're teaching your customers that you see them as marks.

**Don't:** Fake urgency. Countdown timers that reset on refresh, "Only 3 hours left!" that come back tomorrow, fake anchoring ("Was $99, now $29!" when it was always $29).
**Why:** Fabricating scarcity is lying. It'll lift conversion for a quarter and then torch trust forever. Users can smell it now more than ever — and they talk.

**Don't:** Bury the free plan, shrink the "X" on upgrade modals, make cancellation text deliberately scary.
**Why:** These are the classic small-scale dark patterns that individually look harmless and collectively signal revenue addiction. "Hide the free plan! Make the Xs smaller! Make the cancellation language really scary!" — if your team is brainstorming at that level, the culture is already tilting. Pride Test every tactic individually. And zoom out and look at the pattern of tactics.

**Don't:** Hold user data hostage to prevent churn.
**Why:** Making export hard is a moat for exactly as long as it takes a competitor to build a one-click importer. Then your data-hostage becomes their acquisition strategy. "We import from [you] in one click" is a killer tagline. Be the product users stay with because they want to, not because they can't leave.

**Don't:** Let revenue pressure override the Pride Test.
**Why:** Dark patterns are almost always symptoms of pressure, not malice. When aggressive goals and shrinking horizons meet growth tactics, things bend. The Pride Test has to be *more* non-negotiable when pressure is high, not less. Otherwise you build a revenue-addicted company, and the only fix for that is usually scrubbing the exec team and starting over.

**Don't:** Confuse "friction" with "manipulation."
**Why:** Not every nudge is a dark pattern. Profiling questions, upgrade prompts, paywalls at clear feature boundaries, persistent banners to reactivate auto-renew — these are legitimate. Overcorrecting into "zero friction" just means you activate low-intent users who churn later. The line is *clarity*: the user understands what's happening and what they're choosing.
