---
triggers:
  - "user asks about growth loops"
  - "user asks about CAC, LTV, or the 1:3 ratio"
  - "user is drawing a funnel and asking how to improve it"
  - "user asks how to make paid marketing 'work' without it becoming a money pit"
  - "user asks about Dropbox / Pinterest / SurveyMonkey growth mechanics"
  - "user says 'we have no growth engine, we just keep buying ads'"
use_when:
  - "designing or auditing an acquisition or retention system"
  - "evaluating whether a channel is sustainable or a treadmill"
  - "a team is about to double paid spend without a payback model"
fails_when:
  - "the product has no PMF yet — loops compound zero as well as they compound anything else"
  - "the team treats 'loop' as a buzzword and slaps the word on a funnel"
related:
  - "growth-matrix.md"
  - "squad-sequencing.md"
---

# Growth Loops (not Funnels)

## When to Use
- When a team is drawing a funnel and asking how to pump more into the top. That's the signal you need to reframe the entire conversation.
- When paid marketing "works" this quarter and you want to know if it'll still work next quarter. Payback velocity tells you. CAC and LTV don't.
- When leadership is about to optimize a CAC:LTV ratio of 1:3 and congratulate themselves on the math.
- When a team claims they have no growth engine — they mean they have no loop. They definitely have funnels; everyone has funnels. Loops are what they're missing.
- When you need to explain to a finance team why giving product away for free is a marketing expense, not a cost center.

## Fails When
- **No product-market fit.** Loops compound zero just as efficiently as they compound one. If retention is garbage, the loop amplifies garbage. Fix PMF before designing loops.
- **The team slaps the word "loop" on what is clearly a funnel.** A funnel with a referral tacked on the end is still a funnel. The test: does *output* feed back as *input* without additional external spend? If no, it's a funnel wearing a costume.
- **Loops are underfunded at the start.** Product loops take ~6 months to reach meaningful contribution. If leadership expects week-three returns, they'll kill the loop in month two.

## Core Concept

Friends don't let friends run funnels. Funnels are f-words.

Here's what a funnel actually is: a linear, leaky bucket. You pour visitors in the top, some fraction survives to sign-up, a smaller fraction activates, a smaller fraction converts, and whatever's left out the bottom is your "revenue." To keep the bottom number flat, you have to keep pouring more water in the top — which means more budget, more ads, more content, more effort, forever. Funnels aren't engines. Funnels are *fuel*. Fuel is great to overcharge your engine. But fuel on its own is not a sustainable growth engine.

A loop is an engine. A loop is a closed system where the output *is* the input. New user uploads content → shares content with a recipient → recipient becomes a new user → they upload content → they share with a recipient. Nobody paid for step two through five. That's 60% of Dropbox acquisition right there, powered by a product loop, not a marketing budget. Or take a dollar-rotating loop: spend $100 on ads → those users pay back $500 in three months → reinvest $100, keep $400. The dollars rotate. The engine runs itself. Your marketing budget becomes a flywheel instead of a firehose.

Three things can rotate in a loop: **users, dollars, or salespeople.** That's the whole taxonomy. User loops are product-led (Dropbox sharing, Miro boards invited out, Lovable projects shared). Dollar loops are paid acquisition where payback velocity is fast enough that the money recycles (which, by the way, is how you *should* be evaluating paid marketing — not CAC). Salespeople loops are the revenue that funds the next AE hire who generates the revenue that funds the next hire. Three rotors. That's it.

Now let me be clear about CAC:LTV, because this is where teams lose the plot. Everyone optimizes for the infamous 1:3 CAC:LTV ratio — spend up to a third of LTV on acquisition. Wrong! LTV is 60–70% back-weighted in terminal value. In a B2B subscription business where true LTV materializes over 5–15 years, spending 1/3 of it means you might wait *five years* to see a return on this year's budget. Nobody can afford that. Well, maybe Adobe can. You can't. Stop optimizing CAC:LTV and start optimizing **payback period** — the velocity at which you recoup the money. If you spend $100K and earn it back in under a year, it's a loop. More than a year? It's a hungry funnel that will require more money forever. May the short payback period be ever in your favor.

## How to Apply

1. **Name your current system out loud.** Draw what you think is happening. If it has an input at the top and revenue at the bottom with arrows only pointing down, it's a funnel. If some output arrow loops back and becomes an input, it's a loop. Most companies have funnels pretending to be loops — be honest.

2. **Identify the rotor.** Is this a *user* loop (users acquire users), a *dollar* loop (revenue funds more acquisition), or a *salespeople* loop (sales quota funds next sales hire)? If you can't name the rotor, you don't have a loop.

3. **Measure payback period, not CAC and not LTV.** Take the annual budget for a channel — say $100K — and ask: how many months until that $100K came back as profit? Under 12 months for B2C/SMB, under 24 months for enterprise. If you're outside that, stop spending and go fix the product or the motion.

4. **Start loops early — they take ~6 months to matter.** Product loops don't light up overnight. A referral mechanism, a sharing flow, a casual contact loop (watermarks on shared artifacts, "Made with Lovable" footers) — these all take months to compound. Plant them when you have the product, not when you're desperate for growth.

5. **Categorize the loop types you *could* build.** Most companies have capacity for more than one. Viral loops (sharing the core artifact), content loops (user-generated content indexed for SEO), paid loops (payback-fast acquisition), sales loops (AE productivity funds the next AE), casual contact loops (brand exposure every time the product is used in public). Audit which you have, which you don't, and which are dormant.

6. **Use fuel on top of the engine, not instead of it.** Paid marketing, campaigns, PR bursts — these are fuel. They're fantastic *accelerants* for a working engine. They are *not* engines themselves. If your strategy is "pour fuel forever," you don't have a company, you have a subscription to Google's stock performance.

## Examples

**Situation:** A founder brags about a CAC of $100 and thinks they're crushing it compared to a competitor with a CAC of $1,000.
**Application:** Ask about payback period. Founder A's $100 CAC pays back over three years with no expansion. Founder B's $1,000 CAC pays back in three months with another $2,000 in expansion over the next 18. Founder A has a dreaded long funnel and should stop spending. Founder B has a beautiful paid marketing loop and should pour more money in, even at 10x the CAC.
**Result:** The CAC religion dies. The conversation moves from "can we get our CAC down?" to "can we get our payback period under 6 months?" which is the actual question. Founder B doubles paid spend; Founder A discovers activation is the problem.

**Situation:** Dropbox, circa early days. No marketing budget to speak of. Product loop: new user uploads a file, shares it with someone not on Dropbox, that person has to sign up to receive it, now they're a new user with files to share.
**Application:** The referral program ("give storage to get storage") was bolted on top as an amplifier. But the core loop — sharing — was the engine. Every file shared is an acquisition event. Nobody paid for that acquisition. Nobody was *ever* going to pay for that acquisition, because it's structurally free.
**Result:** "60% of Dropbox acquisition is powered by this product loop." The referral program took them to their first billion in revenue with almost zero paid marketing expense. That's a loop. The funnel version of this company would have cost them an extra $500M in ads and lost the race.

**Situation:** Pinterest, SurveyMonkey, Lovable — three different loops, all compounding.
**Application:** Pinterest runs an SEO content loop — users pin content, Pinterest indexes it, Google serves it to new searchers, new searchers land, some sign up and pin more content. SurveyMonkey runs a respondent-to-creator loop — a user creates a survey, sends it to 100 respondents, some fraction of those respondents decide they also need to send a survey and sign up. Lovable runs a casual contact loop — users build projects, share them publicly, "Made with Lovable" branding creates awareness among non-users who then sign up.
**Result:** Each of those businesses doesn't have to buy a single new customer through paid channels to grow. They do buy customers — because fuel on top of an engine is great — but the engine runs on its own output. That's what you're building toward.

**Situation:** A SaaS team is arguing in a meeting: "Freemium is killing our margins, over half of our expense is free usage."
**Application:** Reframe. That free usage isn't a cost center — it's your marketing budget. At Lovable, over half of expense comes from freemium, and leadership doesn't look at it as a cost. They look at it as the cost of distribution. "We'd rather give our product away to every single one of you to give it a go, as opposed to making Google richer."
**Result:** The team stops trying to clamp down on free usage (which would kill the loop) and starts measuring the *ROI of freemium* in brand awareness, word-of-mouth, and product-led acquisition. The free tier becomes a loop asset, not a line-item cost.

## Anti-Patterns (tactical)

**Don't:** Optimize for a CAC:LTV ratio of 1:3.
**Why:** LTV is an investor metric and a useful *output*, but it's a terrible operating metric. It's 60–70% back-weighted in terminal value you can't verify for 5–15 years. "Past performance does not guarantee future results" — 2019 was five years ago and it was a whole different world. Setting acquisition budgets against a fantasy number is how you get running-your-acquisition-into-the-ground. Optimize payback period instead. It's real, it's fast, and it doesn't require you to forecast the next decade.

**Don't:** Treat "no decision" in paid marketing as "we just need more budget."
**Why:** If your payback period is over 18 months in SMB or 24 months in enterprise, the answer is not more budget — the answer is fix activation, fix monetization, fix the product. Pouring more money into a long funnel just means you go broke faster. A $3 CAC on Facebook isn't going to save a broken B2B motion.

**Don't:** Build a referral program without a product loop underneath it.
**Why:** Referral programs are amplifiers. They amplify a working loop. Bolt a referral program onto a product where users don't want to tell anyone about the experience and you just paid a bunch of people $20 to spam their friends, who churn in a week. The loop comes first. The amplifier comes second.

**Don't:** Count "organic" traffic as a loop.
**Why:** SEO traffic that isn't structurally generated *by users of your product* is a funnel. It's a great funnel, but it's still a funnel — because every new piece of content costs effort or money. A UGC-driven SEO loop (Pinterest, Miro Miroverse, Canva templates) where *users* generate the indexed content is a loop. Your content team writing blog posts is a funnel. Don't confuse them.

**Don't:** Kill a high-CAC channel because the headline number looks bad.
**Why:** Cheap acquisition is often cheap *because* it's low intent, low activation, low expansion. A $1,000 CAC channel that pays back in three months and produces expansion-heavy customers is a better business than a $5 CAC channel that churns in 30 days. The CAC headline is a trap. Payback period and expansion revenue tell the truth.

**Don't:** Expect product loops to produce meaningful revenue in the first quarter.
**Why:** Product loops take ~6 months to compound to a level that shows up in revenue. If leadership is looking at the loop's contribution in month two and calling it "not working," they'll kill it before it matters. Set expectations. Plant the seed early, protect it, let it compound.
