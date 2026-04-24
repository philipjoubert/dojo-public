---
triggers:
  - "user is about to commission a focus group or run survey-based product research"
  - "user is debating whether a user-research finding should override a design decision"
  - "user asks 'what does the market want?' in a breakthrough product context"
  - "user is justifying a product direction by pointing to customer interviews"
  - "user asks about Henry Ford's 'faster horse' quote, or the IBM PCjr vs. the Mac"
  - "user is being pressured by a board or CFO to validate a vision with market research"
use_when:
  - "the product is a non-incremental jump and market research can't credibly describe it yet"
  - "a team is using customer surveys as a substitute for product vision"
  - "a designer or founder is being overruled by a focus-group result and it feels wrong"
  - "you're building something customers haven't seen before and don't yet know they want"
fails_when:
  - "you're iterating inside a well-understood category where user research really does have signal — onboarding flow of an established SaaS, copy testing, pricing elasticity in a commodity market"
  - "'people don't know what they want' becomes a license to ignore every signal including the ones that are correct"
  - "used by a founder who isn't actually close to customers to justify building whatever they personally want"
  - "you're doing confirmatory research (will people pay $X for the thing we've already designed?) which is different and legitimate"
related:
  - "start-with-experience.md"
  - "insanely-great.md"
  - "design-is-how-it-works.md"
  - "product-people.md"
---

# People Don't Know What They Want — The Rejection of Market Research as Product Direction

## When to Use
- Your team is about to commission focus groups to decide what the next product should be.
- A user-research finding is being used to overrule a design decision you know is right.
- Your board or CFO is demanding survey-backed validation before you can build something new.
- You're in the early stage of a breakthrough product and every spec discussion keeps retreating to "well, what are customers asking for?"
- Sales has brought you a list of features customers requested and wants them on the roadmap.
- You're defending a product direction that no customer has ever described, because no customer has seen it.

## Fails When
- You're iterating inside a mature, well-understood category. Research genuinely helps with onboarding flows, copy, pricing elasticity, and incremental improvements. This doctrine applies to product *direction* — especially breakthrough direction — not every decision in a product's life.
- "Customers can't tell us what they want" becomes a slogan that lets the founder ignore every signal, including the ones that are correct. Contempt for users is not vision; it's self-indulgence dressed up.
- The founder invoking it isn't actually close to customers. If you're not personally using your product, watching people use it, and feeling the pain of its failures, you don't have standing to overrule what research is telling you. "People don't know what they want" is not a license to build whatever you personally want.
- You're doing confirmatory research after a vision is set — "will people pay $X for this" — which is different, useful, and legitimate. Don't conflate the two.

## Core Concept

A lot of times, people don't know what they want until you show it to them.

That's the thing. Market research can tell you what customers think of something you show them, or what they want as an incremental improvement to something they already have. But very rarely can your customers predict something they don't quite know they want yet. The leap — the non-incremental jump — isn't something you get from a survey. It's something you have to imagine, build, and then hand to them. Then they tell you whether you were right.

There's a great quote I remember from Henry Ford. He said, *If I'd asked my customers what they wanted, they would have told me "a faster horse."* That isn't a put-down of customers. It's a description of how breakthroughs actually arrive. Your customer is an expert on their life as it is now. They are not an expert on what their life could be when a technology they haven't seen yet enters it.

No market research could have led to the Macintosh. No market research could have led to the iPhone. In 1984, if you'd gone out and asked people "what kind of computer do you want?" the answer would have been "a cheaper version of the one I saw at work" — a DOS box with a better green-and-black display. Nobody would have said *a desktop with a graphical interface, a mouse, overlapping windows, and a trash can icon, please.* They couldn't. The vocabulary didn't exist yet.

That's not a criticism of customers. It's a description of what customers can and can't do. They are experts on the experience of the present. You, the product person, are supposed to be the one who figures out what they will want in the future and builds it for them.

### The Mac vs. the PCjr

The clearest case I ever saw was the contrast between the Macintosh team and the IBM PCjr team in the early 1980s.

IBM designed the PCjr on the basis of market research for a specific market segment, for a specific demographic type of customer. They hoped that if they built this thing, lots of people would buy it and they'd make lots of money. The PCjr was designed to hit a demographic at a price point with a feature set the research said that demographic wanted.

We weren't doing that. We weren't going out and doing market research. We didn't hire consultants. We just wanted to build the best thing we could build. We were the group of people who were going to judge whether it was great or not. We built it for ourselves — for people like us, because we *were* the customer we understood best, and we were relentlessly honest about what we wanted.

The PCjr was a commercial failure. It had bad keyboards, weird constraints, a split personality between home and business. It came out of committee demographics instead of vision.

The Mac changed the world.

That's the difference. One group built for a demographic research described. The other group built what they thought was insanely great. Market research can optimize within the frame you're already working in. It cannot tell you that the frame is wrong.

### The Three Legitimate Uses of User Research

This doctrine is not "ignore users." That's a caricature. It is specifically about *product direction* — the non-incremental leap. User research has three legitimate uses, and I used all three at Apple:

1. **Watching people use a prototype.** Not asking them what they want. *Watching* them, silently, use the actual thing. Where do they hesitate? Where do they smile? Where do they get lost? The body tells the truth that the survey can't. This is closer to behavioral observation than to market research, and it is a completely different activity from asking "what would you buy?"

2. **Confirmation after vision is set.** Once you've decided what to build — once the experience is defined and the demo is working — user research can tell you whether the thing resonates, whether the price point works, whether the messaging lands. That's legitimate. It's a check on your vision, not a replacement for it.

3. **Being your own best user.** The most reliable form of user research is being the customer you're building for. The Mac team built the Mac because they wanted to use the Mac. I built the iPhone because I wanted a phone that didn't infuriate me. Intimate use is not the same as a focus group, but it is the most direct contact with the user problem. If the founder is not the user, find a founder who is, or get the founder into the user's life intensively.

Notice what's not on this list: *asking people what they would buy in the future*. That's where market research fails. People describe the present and extrapolate linearly. Products that matter almost never come from linear extrapolation of the present.

### Why Companies Fall Back on Research Anyway

Focus groups and survey-driven product direction are easier than vision. They are easier in two ways. First, they let the executive off the hook — "we built what the research told us to build, so if it flops, the research was wrong." Second, they're easier for the board, the CFO, and the risk-averse parts of the organization to accept. A slide that says "seventy percent of respondents said they would buy this" feels safer than a slide that says "I think people will love this."

But safer isn't actually safer. Research-driven products in a category where breakthrough is possible lose to vision-driven products every time — because the research products are optimizing against the past while the vision products are building for the future. IBM had far more research than Apple. It had vastly more market data. It had the PCjr.

The job of the CEO of a product company is to have the taste, the intuition, and the conviction to make the non-incremental call. If you outsource that to research, you are not the chief product officer. You are a well-paid intermediary between the focus-group facility and the engineering team.

## How to Apply

1. **Separate the question you are asking into two categories.** Is this a *direction* question — what should we build, what's the shape of the product — or an *execution* question — how should we word this button, what price resonates? Research can help a lot with the second. Research cannot answer the first.

2. **For direction, go watch people, don't ask them.** Sit with ten customers, silently, while they use whatever they use today. Don't ask them what they want. Watch what they struggle with. The struggles are information; the wishes are mostly folklore.

3. **Be your own best customer when possible.** If you're building for a user you don't understand intimately, you have a problem no focus group can fix. Close the gap — live with the problem yourself, recruit co-founders who do, spend a month shadowing the user. Distant founders build distant products.

4. **Show, don't survey.** When you need to validate a direction, build the demo. Let people react to the thing, not describe the absence of the thing. You will learn more from five people using a rough prototype than from five hundred filling out a survey.

5. **Defend the vision past the midway research.** Breakthrough products always test poorly at the midway point. People don't have the context to evaluate them. If you kill every direction that polls weakly, you kill every breakthrough you ever had. The willingness to push through the midway bad score is the difference between a product person and a research-managed product.

6. **Confirm after you're built, not before.** Once the product is designed and the demo works, then go test. Does it resonate? Is the price right? Is the messaging clear? That's when research earns its money. Before you've built anything, research is mostly a way to defer the decision.

7. **Notice the asymmetry of the asks.** When customers ask for features, they're describing the product they have with small improvements. "Make it faster." "Add this button." That's real, and you should hear it — but realize it's *linear*. The product they haven't asked for, which would actually change their life, is the one you have to imagine. Nobody asked Ford for a car. They asked for a faster horse.

## Examples

**Situation:** It's 1984. The Mac team is building a personal computer with a graphical user interface, a mouse, and a desktop metaphor. Nobody has asked for this. Every consumer survey says people want a cheaper DOS machine.
**Application:** Ignore the survey. Build the Mac for the team that understands what it could be — the engineers, designers, and Jobs himself. Treat the team as the user. Ship it and see.
**Result:** Initial sales are mixed because customers have no framework for what the Mac is. Over the following decade every serious personal computer adopts the GUI, the mouse, and the desktop metaphor. The research in 1983 was perfectly accurate about what people thought they wanted; it was perfectly useless for predicting what they'd actually want once they saw the thing.

**Situation:** It's 2005. The Apple executive team is discussing whether to build a phone. Every market research firm will tell you the phone market is mature — dominated by Nokia and RIM, segmented by form factor, driven by carrier distribution. No research says "consumers are waiting for a phone with no buttons and a full touchscreen."
**Application:** Don't ask. Build the thing. The experience question is: what would a phone be like if it were designed by people who thought phones were infuriating? No buttons. Direct manipulation. Real web browser. Real music player. Then ship it and let people react to the product, not to the hypothetical.
**Result:** The iPhone on launch is derided by people who know the phone industry — the CEO of Microsoft laughs at the price, the BlackBerry CEO dismisses the on-screen keyboard. Within five years the entire industry has copied it. The research firms were accurately describing a market that was about to no longer exist.

**Situation:** A SaaS founder is deciding between two product directions. They commissioned a study; customers overwhelmingly prefer Direction A. The founder's gut says Direction B — which customers rated lower — is actually where the product needs to go, because Direction A is incremental on what exists while Direction B is non-obvious.
**Application:** Recognize that the research is likely telling you what customers can evaluate today, which is Direction A. Direction B is a bet on what they'll want when they see it. Ask: am I close enough to these customers to make that bet? Am I my own user, or do I understand the user intimately? If yes, go with B — and build a prototype fast, so you can test the instinct by showing rather than asking. If no — if the gut is not backed by close user contact — it's not vision, it's preference, and you should probably listen to the research.
**Result:** Either you make a breakthrough move that research couldn't describe, or you discover your gut wasn't actually grounded in user understanding. Both outcomes are better than the false safety of following survey data into Direction A's incremental optimization.

**Situation:** A board is pushing the founder to validate a major product direction with customer research before funding the next stage. They want survey numbers, focus group results, a market sizing.
**Application:** Redirect the conversation. Offer to build a prototype and put it in twenty customers' hands. Propose a behavioral test — do they keep using it? do they tell other people? — rather than an opinion test. Explain, clearly, that customers cannot tell you whether a product they've never seen will work; they can only tell you whether a product they *have* seen is working. Then commit to running the behavioral test, which is real.
**Result:** Either the board accepts the behavioral test (appropriate research), or you learn the board doesn't trust you to make product calls, which is a different problem you need to address. A board that demands focus-group validation for direction is a board that fundamentally doesn't understand how breakthrough products get made.

## Anti-Patterns (tactical)

**Don't:** Use a focus group to decide what to build.
**Why:** Focus groups are optimized for groupthink. One loud participant sets the tone, others agree, the moderator leads, and you end up with the median of a mediocre sample's ability to describe a future they haven't seen. Even when the raw data is interesting, the synthesis layer almost always misleads.

**Don't:** Treat "customers asked for it" as sufficient justification.
**Why:** Customers ask for the product they already have, slightly better. That's useful information, but it's linear. The job of the product person is to translate between what customers ask for and what they will actually love. Those are often different things.

**Don't:** Hide behind research when the product fails.
**Why:** "The research said it would work" is an executive's way of avoiding responsibility for the product decision. Own the decision. If you made the call based on research, the call is still yours. Research is advisory; leadership is accountable.

**Don't:** Confuse being close to customers with running focus groups.
**Why:** Being close to customers means using the product yourself, watching real users struggle, reading support tickets, going to installations, picking up the phone when somebody is frustrated. Focus groups are a substitute for customer intimacy, not an expression of it. Founders who run lots of focus groups often know their customers less than founders who use the product daily.

**Don't:** Assume because one doctrine is right, its inverse is right everywhere.
**Why:** This topic is about *direction* — especially breakthrough direction. It is not a license to ignore every quantitative signal. Retention, engagement, funnel data, observed user behavior — those are real signal. "People don't know what they want" applies to stated preferences about hypothetical products, not to the empirical behavior of people using real products.

**Don't:** Substitute your own preference for customer intimacy.
**Why:** The founders who can invoke "I build for myself because I am my own customer" are the ones who actually use the product. If you build a tool for accountants and you are not an accountant and have no accountant friends, building for yourself is not vision — it's misalignment. Close the gap first, then trust your taste.

## Direct Quotes from Steve

> "A lot of times, people don't know what they want until you show it to them." — Bloomberg Businessweek, May 25, 1998

> "We have a lot of customers, and we have a lot of research into our installed base. We also watch industry trends pretty carefully. But in the end, for something this complicated, it's really hard to design products by focus groups." — Bloomberg Businessweek, May 25, 1998

> "It's not about pop culture, and it's not about fooling people, and it's not about convincing people that they want something they don't. We figure out what we want. And I think we're pretty good at having the right discipline to think through whether a lot of other people are going to want it, too. That's what we get paid to do. So you can't go out and ask people, you know, what's the next big thing? There's a great quote by Henry Ford, who said, 'If I'd have asked my customers what they wanted, they would have told me "a faster horse."'" — Fortune, February 2008

> "Market research can tell you what your customers think of something you show them, or it can tell you what your customers want as an incremental improvement on what you have, but very rarely can your customers predict something that they don't even quite know they want yet. No market research could have led to the development of the Macintosh or the personal computer in the first place." — 1990 interview outtakes

> "We weren't going to go out and do market research. We didn't hire consultants. We just wanted to build the best thing we could build. We were the group of people who were going to judge whether it was great or not." — 1985 Playboy interview

> "How come the Mac group produced Mac and the people at IBM produced the PCjr? We built Mac for ourselves. We were the group of people who were going to judge whether it was great or not. … They were designing the PCjr on the basis of market research for a specific market segment, for a specific demographic type of customer, and they hoped that if they built this, lots of people would buy them and they'd make lots of money. Those are different motivations." — 1985 Playboy interview
