---
triggers:
  - "user asks how to price a SaaS or AI product"
  - "user has no one who owns pricing"
  - "user debates per-seat vs usage vs outcome pricing"
  - "user asks about AI credits or AI feature pricing"
  - "user wants to know what a good pricing page looks like"
  - "user says 'our CEO/founder just picked the price'"
  - "user hasn't raised prices in years and is nervous about it"
  - "user asks whether to show pricing on the website"
use_when:
  - "the team is debating a price change and nobody actually owns the decision"
  - "conversion or retention on a plan is underperforming and pricing is suspect"
  - "AI features are burning margin and the team is slapping on credits without thinking"
  - "designing or redesigning a pricing page"
fails_when:
  - "the company has no PMF yet — you cannot price your way out of a product problem"
  - "leadership refuses to test and will just pick a number again in six months"
related:
  - "reverse-trial.md"
  - "product-led-sales.md"
  - "freemium-as-marketing-budget.md"
---

<!-- Note: The freemium-as-marketing-budget topic covers the "freemium is a marketing expense, not a cost center" argument, freemium vs. free trial, partnership distribution, and AI freemium specifically. This topic focuses on pricing structure, value metrics, the Monetization Council, pricing-page anatomy, and price testing mechanics. When the question is about whether/how to run a free tier, load freemium-as-marketing-budget.md; when it's about setting the price or restructuring plans, stay here. -->



# Pricing & Monetization

## When to Use
- You are about to change price, plans, value metric, usage limits, packaging, or add-ons — any of the structural monetization levers.
- Your pricing has not been touched in 12+ months. If you haven't tested anything in a year, you are certainly falling behind the market, full stop.
- AI features are in the product and nobody has figured out how to charge for them, or worse, someone slapped credits on and called it done.
- Someone on the team asked "who owns pricing?" and the room went awkwardly silent.
- You're designing a new pricing page and your designer is pitching a "revolutionary design." (Kill it. Pricing page design is not where creativity belongs.)

## Fails When
- **There's no PMF yet.** Pricing cannot fix a broken product. If users aren't retaining, no price point will save you.
- **Leadership will not test.** If the CEO's "I picked the price and thought we'd make some money" is going to be the final word (cough, Sam Altman, cough), you're not running a monetization function — you're running a HiPPO appeasement program.
- **You're trying to price to a single point.** If you roll out one singular price with no variation, no contingency, no measurement framework — it's almost guaranteed to be wrong, no matter how you came up with it.

## Core Concept

Let me be clear: the price of your product is wrong. I don't need to know your company or your category to say that with confidence. Everyone gets pricing wrong. Even OpenAI gets pricing wrong — Sam Altman publicly admitted the $200 ChatGPT Pro plan is losing money because, and I quote, "I personally chose the price and thought we would make some money." HA. The infamous last words of every bad pricing decision.

There are three ways companies fail at pricing, and you have probably done at least two of them. Mode one: HiPPO makes the call. The highest-paid person picks a number, feels powerful, and the team executes. Mode two: over-reliance on qualitative data. You ran surveys, you did focus groups, users said they'd pay $100. Wrong! People spend theoretical dollars like drunken sailors and actual dollars like grandmothers at a swap meet. Surveys and focus groups assume zero friction — reality has friction. The equation you need tattooed on your forehead is: **Price < (Perceived Value – Friction)**. Quantitative data beats qualitative, always, in this context. Mode three: going to market with a single price point as if no further discussion is required. That's not a pricing strategy — that's a prayer.

Now, revenue is not a metric. Revenue is an outcome. The metrics that *lead* to revenue are conversion, churn, engagement, expansion, and cost impact. Your pricing page, your trials, your plans, your add-ons — those are the levers that move those metrics. Obsessing over the revenue number while ignoring the driver metrics is like staring at the weight scale while ignoring what you're eating. Good luck.

On ownership: monetization lives in the no-man's-land between Product, Marketing, Sales, and Finance. Everyone touches it, nobody owns it. PMM raises their hand, makes a deck, and then Sales and Product are left to execute and eat the fallout. This is how monetization goes stale while your product evolves. The fix is a **Monetization Council** — 5–7 decision-makers (Sales, Marketing, Product, Finance, and the CEO), meeting quarterly at minimum, weekly or bi-weekly if you're actively iterating. Split the work into two streams: **optimizations** (pricing page design, reverse trials, upgrade prompts, payment methods — teams own these autonomously, no red tape) and **model changes** (price, value metric, plans, features, usage limits, add-ons — these go to the Council). If you don't have this split, every pricing change turns into a 56-approval death march and growth teams end up chasing local maxima.

And let's talk about AI pricing, because every LinkedIn guru is telling you subscriptions are dead and outcome-based pricing is the future. The "everything is changing and we're never going back" crowd is rarely right. The zero-marginal-cost era of software ended the minute you touched an LLM API — that part is true. But the answer isn't credits. I hate credits. Customers don't know the price up front, prices don't feel fair, there's no apples-to-apples comparison across companies, Support becomes impossible, and companies with bad incentives will exploit the made-up metric. The real answer is hybrid — subscriptions with usage limits, AI as add-on for products where AI isn't existential, or full transformation (Intercom's $0.99-per-resolution Fin) for categories AI genuinely threatens. Credits are a necessary evil for now, until LLM costs come down. The companies that revert to clean, transparent models when costs drop will win. The ones married to credits will lose customers to pricing confusion.

## How to Apply

1. **Pick the right value metric first.** Not features. Not a vibes-based number. A value metric — what scales with customer value — is the foundation of the whole pricing structure. Slack: active users. Amplitude: monthly tracked users or events. Airbnb: a cut of successful bookings. Notion: number of guests (which approximates "is this a workspace or a side project?"). Your paywall should live where users get the most value, not where the compute cost is highest. Feature-based pricing is easy to understand and great for creating plan differentiation, but it tends to decouple payment from usage — customers pay and don't use, churn goes up. Usage-based aligns incentives but is harder for customers to grasp. Outcome-based is the holy grail when you can measure the outcome (deflected support tickets, successful bookings), but most products can't capture outcomes cleanly. Pick deliberately.

2. **Price is almost definitely wrong — accept it, then run price sensitivity tests.** Every few years, minimum. Three variations: current price, lower, higher. So if your price is $25, test $19 and $29. Measure conversion, churn, retention, expansion, and cost impact over a 3–6 month cohort window. Lower prices get more paying customers but attract lower intent and higher churn. Higher prices convert fewer but attract loyalists who expand. The question is 3-year projected revenue across the whole cohort, not first-month conversion.

3. **Test on new users first.** This is where I learned the hard way: never test price changes on the public pricing page with a mixed population of new and returning users. Returning users bounce when they see prices fluctuate — it feels like shopping for an airline ticket. Gross. Test on new users, keep existing users on the old price, and at SurveyMonkey we found users stopped checking the pricing page after ~3 months of usage — so we'd push changes live for new users and flip existing users 3 months later.

4. **Isolate pricing changes.** If you test prices, don't simultaneously rename plans, redesign the pricing page, and adjust features. I watched this happen at Dropbox — big bundled release, underperformed against forecast, and we spent months figuring out which change was the culprit. Pricing is sensitive. Change one variable at a time. If it's not possible, at least pre-test pricing first.

5. **Form a Monetization Council for model changes. Let teams own optimizations.** Optimizations: redesigning the pricing page, adding upgrade prompts, offering reverse trials, defaulting monthly-to-annual, adding currencies. Teams ship these without approval. Model changes: price, value metric, plans, plan names, features, usage limits, add-ons. Council reviews hypothesis + test plan, greenlights the experiment, then makes the final data-driven call after results land. 5–7 decision-makers: CPO (not a PM, sorry PMs), head of Sales, head of Marketing, Finance, CEO. Weekly/bi-weekly when actively iterating, quarterly at minimum when stable.

6. **Build a pricing page with the proven skeleton — no reinvention.** 3 plans is ideal, 5 is the maximum. Never more. Value metric obvious in the first 5 seconds. Clear CTA above the fold — it's a transactional page, not a hero-splash landing page. Annual/monthly toggle (default to annual in mature markets; monthly in emerging markets where you're optimizing conversion over LTV). Social proof. "Recommended" plan (not "Most Popular" on the highest-priced plan — let's not lie to customers). Cascading/waterfall feature list so the highest plan visibly loaded with more. Contact Sales option. Feature used by less than 30% of customers on a plan? Convert it to an add-on. Add-ons can drive ~30% of self-serve revenue.

7. **Benchmarks to hit.**
   - Sign-ups visiting pricing page: 25% (freemium).
   - Pricing-to-checkout conversion: 15–25%.
   - Checkout-to-paid: 50%+.
   - Free-to-paid: 3–5% freemium alone, 10–15% with reverse trial or trial on top.

8. **AI pricing: hybrid, not pure.** Bundled usage with clear limits works for uniform AI (Canva). Add-on works when AI isn't existential to the category (Slack, Notion). Credits are the current least-bad option when cost variance per task is massive — Monday, Manus, Lovable — but they're a temporary evil. Full transformation (Intercom's Fin at $0.99 per resolution) when AI is the category-killer. Do NOT just slap credits on everything because it's trendy. If you're going to use credits, work constantly to make each action cheaper — at Lovable we celebrate when our actions get 20–30% cheaper via codification. That's the behavior. Companies who raise credit costs to hit revenue targets are going to lose their customer base.

9. **Migrate existing users thoughtfully.** For users paying more than your new price: upgrade them to a higher-tier plan at their current price (they get more, you don't spook them). For users paying less: step them up a few percentage points at a time over time, framed as value enhancement, not price increase. Always give plenty of notice. Expect ~6% extra churn on a price-increase cohort — your increase needs to be more than 6% to come out ahead on LTV, or you need to load the cohort with discount offers to hold the base.

10. **Show pricing on your website. Yes, even B2B.** No, don't hide enterprise pricing. "Hide the price" tactics are dying. New buyers want transparency. Gen Z isn't sitting through three meetings before you tell them a number. Transparent enterprise pricing (Chili Piper, Sanity) is a competitive differentiator right now — that's how low the B2B bar is.

## Examples

**Situation:** A B2B SaaS wants to test a price increase. The CEO picked a new number. Engineering is nervous about maintaining legacy SKUs. Nobody really owns pricing.
**Application:** Form a Monetization Council — Sales, Product (CPO), Marketing, Finance, CEO. Treat the CEO's number as one hypothesis in a three-variation test ($19, $25, $29). Test on new users only. Measure conversion, retention, expansion, and cost impact over 6 months. Keep existing users on the old price. Isolate the change — no plan renames, no page redesign during the test window.
**Result:** After 6 months of cohort data, the Council picks the winning price. Existing users get stepped up 3–5% at a time with framed value enhancement. If the CEO's hypothesis wins, the CEO feels smart. If it loses, you have data that ends the argument. Either way, the org now has a standing body that owns monetization decisions instead of a one-time war room that dissolves after launch.

**Situation:** An AI-native product is burning margin on LLM calls. A finance exec suggests jacking credit costs up 30% to hit the revenue target.
**Application:** Refuse. That move buys one quarter and poisons the base. Instead: (a) invest in efficiency — at Lovable, ongoing engineering work has made actions 20–30% *cheaper* in credits, which is the right direction. (b) introduce top-up credits priced at a 20% premium over subscription credits (the goldilocks premium — 40% killed take-rate, 0% cannibalized subscription; 20% is the sweet spot). (c) plan the path off credits as LLM costs drop — the companies that revert to transparent, per-seat or usage-aligned pricing when costs fall will win the category.
**Result:** Short-term: margin improves through efficiency, not price-gouging. Bookings shift 20%+ to top-ups within weeks without cannibalizing subscription revenue. Paid retention improves. Long-term: when LLM costs drop (and they will), you're positioned to move to a cleaner model while competitors are trapped in credit systems their customers hate.

**Situation:** A B2B SaaS has a pricing page with 6 plans, tabs across the top, tabs down the side, colorful boxes everywhere, and enterprise pricing hidden behind "Contact Sales."
**Application:** Cut to 3–4 plans. Kill the tabs — users don't click them. Put pricing for the enterprise plan on the page (look at Chili Piper for a reference). Lead with the value metric in the summary table. CTAs above the fold. Waterfall the features so higher plans visibly include more. Feature used by <30% of a plan? Convert it to an add-on and display it Sanity-style in a dedicated section. Test on new users.
**Result:** Pricing-to-checkout conversion moves toward the 15–25% benchmark. In emerging markets, remove the enterprise plan entirely — 20–30% conversion lifts are common from that one change because the high number next to your entry-level plan was creating pricing anxiety by association.

## Anti-Patterns (tactical)

**Don't:** Let the HiPPO pick the price.
**Why:** They'll swing and miss 99% of the time. Not because they're dumb — because corporate culture positions execs as mythical all-knowing beings and pricing is a domain where hypothesis + data beats intuition every time. Include their number in the test. Let the data settle it.

**Don't:** Ask users what they'd pay.
**Why:** People spend theoretical dollars like it's Monopoly money. Willingness-to-pay surveys assume zero friction — reality is full of friction (switching costs, setup time, implementation). Qualitative research is fine as input before you run quantitative tests. It is garbage as the final word.

**Don't:** Ship a single-price-point rollout with no contingency and no variations.
**Why:** If you are settled on just a singular price point, it's almost guaranteed to be wrong. Not AB testing is still testing — just on 100% of your population without quantifiable results. You're going to test. The only question is whether you'll know what you learned.

**Don't:** Slap AI credits on your pricing and call it done.
**Why:** Credits are the monetization equivalent of a tarp over a leaky roof. Customers don't know the price up front. Prices don't feel fair. No comparison across companies. Support gets flooded. Companies with bad incentives will make credits more expensive or actions consume more credits to hit numbers — which customers see through fast. Use credits when you must (cost variance per task is massive), work constantly to make actions cheaper, and plan the exit.

**Don't:** Let pricing go untouched for more than 12 months.
**Why:** Your product evolves. Your costs evolve. Your competitors evolve. Your pricing doesn't move? You're drifting out of optimal. Netflix raises prices constantly at this point, and nobody flinches — because it's expected. The first time they raised, CNN covered it. Now? Crickets. Make your monetization model a living, breathing thing that customers expect to evolve.

**Don't:** Test pricing changes on a mixed population of new and returning users.
**Why:** Returning users notice when prices change and they hate it. They feel like they're shopping for airfare. Conversion drops on both the control and the test because existing users are confused, and you'll spend weeks debugging a phantom signal. Test on new users. Flip existing users later.

**Don't:** Change price, plan names, packaging, and pricing-page design in the same release.
**Why:** When the release underperforms — and it probably will, because you changed too much — you have no idea which variable caused it. I lived this at Dropbox. Months of forensic work. Isolate pricing changes. If you must bundle, at least pre-test pricing first.

**Don't:** Hide your pricing to "protect" the sales process.
**Why:** Hide-the-price tactics are dying. Transparent pricing is a B2B differentiator because the bar is that low. Customers who can't see your pricing go Google a competitor who shows theirs. Every enterprise buyer I know wants a number before they invest 30 minutes in a demo. Put the number on the page. Even the enterprise number.

**Don't:** Reinvent the pricing-page design.
**Why:** Pricing pages are transactional, not expressive. Your designer wants to do something "revolutionary." Don't let them. Close your eyes — you already know what a pricing page looks like. 3–4 plans, summary table, value metric, clear CTAs above the fold, waterfall features, social proof, recommended plan. Put the bells and whistles in the brand work, not in the pricing page. Also: no pop-ups. Chat pop-ups maybe if you test into them. Everything else, no.

**Don't:** Confuse optimizations with model changes in the approval process.
**Why:** If growth teams need Council approval to redesign the pricing page or ship a reverse trial, they'll stop shipping. That's not governance — that's a handbrake. Optimizations ship without approval. Model changes go to Council. Get this split right or you'll have a Council that meets quarterly, reviews three things, approves one, and a growth org that resents them.
