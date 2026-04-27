---
triggers:
  - "user is reasoning entirely from their own situation without checking what's true in general"
  - "user says 'we're different' or 'our case is special' about something with a clear base rate"
  - "user is forecasting how a decision will go without referencing how similar decisions have gone for others"
  - "user is making a pros-and-cons list to defend a conclusion they've already reached"
  - "user is judging their own past decisions and either taking all the credit or blaming all luck"
  - "user is confident in a forecast that conflicts with the reference class data"
use_when:
  - "the user has access to or could look up base rates for the kind of decision they're making"
  - "the user is anchored in their own narrative and hasn't considered how an outsider would see the situation"
  - "a smart, experienced person is more confident than the data warrants and you need a way to discipline that"
fails_when:
  - "the situation is genuinely a one-of-a-kind for which no defensible reference class exists — forcing a base rate then is fake precision"
  - "the user is in execution and needs to act, not deliberate further about whether their plan is calibrated"
  - "the inside view is correct and the base rate is the wrong reference class — your particulars genuinely override it"
related:
  - "three-ps.md"
  - "premortem-and-backcasting.md"
  - "resulting.md"
---

# Inside vs. Outside View

## When to Use
- A founder is forecasting their startup's odds and the number sounds nothing like the base rate (90% confidence on a 5%-base-rate outcome).
- Someone is sketching pros and cons to support a conclusion they already want to reach.
- A team is planning a project and every plan assumes the median execution. Nobody has looked up how similar projects have actually gone.
- A smart person is reasoning fluently and confidently from inside their own experience, and you can feel the gravity of their narrative pulling everything in line.
- After a bad outcome, the user is blaming luck. After a good outcome, the user is crediting their own brilliance. (Same blind spot, opposite direction.)

## Fails When
- **No good reference class exists** — If you're forecasting the first-ever something, "base rate of similar things" is a category dispute, not a number. Don't fake it.
- **Mid-execution** — Once the plan is running, ripping it open to compute base rates again is friction, not insight. Use the outside view *before* you commit and *after* in the post-mortem, not in the middle.
- **The reference class is wrong** — "60% of restaurants fail in year one" is a real number, but it includes a lot of restaurants that aren't yours. The outside view is a discipline; it's not a verdict. Use it to anchor, then defend any departure from it on specifics.

## Core Concept

The "outside view" isn't mine — that's Daniel Kahneman and Dan Lovallo's term, from their work on planning. The idea is simple and the application is everything. When you reason about a decision from inside your own perspective — your beliefs, your facts, your experience, your hopes — that's the *inside view*. It feels like the truth because it's *your* truth. The problem is that your beliefs are in the driver's seat, and they're driving toward whatever conclusion keeps the fabric of your identity intact. That's why over 90% of professors rate themselves as better-than-average teachers. It's why 90% of Americans rate themselves as better-than-average drivers. It's why nearly 50% of marriages will end in divorce but only 5% of couples have prenuptial agreements. The inside view is doing exactly what it's built to do — protecting you from the discomfort of being statistically ordinary.

The outside view is what's true of the world independent of your perspective. The way someone else would see your situation. The base rate. The reference class. It's the antidote, and the easiest way to get to it is to ask: *what is true of people in situations like mine, in general?* That's a base rate. The divorce rate. The startup failure rate. The percentage of January gym sign-ups who've quit by June. (Eighty percent, by the way.) Your forecast doesn't have to *equal* the base rate — your specifics matter, the inside view matters — but your forecast had better be in the *orbit* of the base rate. If you're estimating 90% confidence on something the world tells you happens 40% of the time, you have work to do. Either you have private information that justifies the gap, or your inside view is doing what inside views always do: telling you you're special.

Here's the move I want you to make a habit. *Anchor to the outside view first.* Sketch the situation entirely as an outsider would see it — base rates, what's true of the world, how a friend with your facts would describe it back to you. *Then* layer in the inside view — what's particular to your situation, what you know that the reference class doesn't. The marriage between the two is where accuracy lives. Most people skip the outside view entirely and go straight to spinning the inside view into a pros-and-cons list, which is the same trick with extra steps. A pros-and-cons list is generated entirely from your perspective, infected by what you want the answer to be. If you wanted to design a decision tool to *amplify* bias, it would look exactly like a pros-and-cons list.

## How to Apply

1. **Before you reason about your own situation, find the base rate.** What is true of people in situations like yours, in general? *In general* is the operative phrase. If you're considering joining a gym, the relevant numbers are: 80% of January members have quit by month five; 82% of members go once a week or less; 77% of those memberships go completely unused. That's not a verdict on you — it's the gravity well your forecast had better account for.

2. **Describe your situation as if it weren't yours.** Pretend you're hearing a friend tell you the story you're telling yourself. What advice would you give them? What would you flag as the obvious problem? You see your friend's KICK ME sign immediately. Yours is just as visible — you just can't see it because your eyes only point forward. Borrow someone else's eyes. (This is also the move behind the wedding thought experiment: nobody at their own wedding gives a 50% divorce probability, but standing in the receiving line of a stranger's wedding, almost everyone does. Same data. Different chair.)

3. **Then — and only then — layer in the inside view.** What's actually particular to your case? Why might you legitimately depart from the base rate? Be specific. "We have a stronger founding team" is not specific. "Our team has shipped two prior B2B SaaS products to exits, in this exact market, with two of these same engineers" is specific. The departure from the base rate has to be earned with named reasons, not vibes.

4. **State your forecast as a number, anchored to the base rate.** Not "we're going to crush it." Not "I'm confident." A number. If the base rate is 10% and you're saying 25%, defend the 2.5x premium with specifics. If you can't, your forecast is 10%.

5. **Ask other people what they see — and make it safe for them to disagree.** A lot of the outside view lives in other people's heads. They will not volunteer it if disagreeing feels rude. Most spinach-in-teeth situations come from people trying to be kind. Tell them you want the disagreement. Then say thank you when you get it, even if it stings. Disagreement is the kindness; nodding is the cruelty.

6. **For past decisions, do the same dance backwards.** When something worked, the inside view will hand you all the credit. When it didn't, the inside view will hand you all the bad luck. Outside view first: *what is true of decisions like the one I made, in general? What did the data say at the time?* The bad-outcome version of this is what protects you from learning. The good-outcome version is what protects you from learning *more*. Both matter.

## Examples

**Situation:** A founder pitches you and says "we're 90% confident we'll close our Series A this fall."
**Application:** Outside view first. The base rate for raising a Series A within six months of starting a process, in this market, is somewhere around 25–35% depending on whose data you use. Ask: what specifically about your case justifies a 90% number against that 25–35% base rate? If the answer is "we have a strong team and a great product" — that's the inside view repeated back, not a justification. If the answer is "we have three term sheets sitting on the table and a lead committed pending a final reference call" — now you're in the orbit of 90%. The base rate is the gravity. Your particulars are the lift.
**Result:** The founder either (a) realizes their 90% is really 30%, which changes the entire run-rate calculation, or (b) names the specific reasons their case departs from the reference class, which makes the forecast actually defensible. Either outcome is better than the founder fundraising for six months on a number that was always 30%.

**Situation:** A founder is agonizing over whether her first hire isn't working out. "But she was so excited at the offer stage. She just needs more time."
**Application:** Outside view: what does the data say about how often a hire who's struggling at month four turns it around versus continues to struggle? In a startup, the honest answer is most of these don't turn around — and the time spent waiting is time you don't have. Now do the perspective flip: if a friend told you this story exactly as you're telling it, what would you say to her? If you'd say "let her go" to a friend, the question stops being whether she'll work out and starts being why you're judging your own situation by a different standard.
**Result:** The decision gets unstuck. Maybe she still keeps the hire — but now it's an explicit bet against the base rate, with a specific thesis ("she's going to turn it around in six weeks because of X, Y, Z") and a specific kill criterion. That's a defensible bet. "She just needs more time" is not.

**Situation:** A team is building a three-year strategic plan. They're forecasting they'll double market share, from 5% to 10%.
**Application:** Outside view. How often, in this market, has a company at this size doubled market share inside three years? Pull the data. If it's happened maybe twice in the last decade, your team's plan is asking to be one of those twice-a-decade events. That's not impossible — but the plan needs to be the kind of plan that makes a twice-a-decade outcome plausible, not a normal plan with optimism dialed up. Layer in the inside view: what specifically about your team, your product, your market timing makes you one of the two? Be honest. If the answer is "we just have a great team," your number is the base rate, not your fantasy.
**Result:** Either the plan tightens — different go-to-market, different resource allocation, different milestones — or the goal moves to something defensible against the data, like 7% over three years. Both are wins. Setting a goal you have an 8% chance of hitting and calling it a plan is how you end year one demoralized.

**Situation:** A founder reviewing a year of decisions tells you "the year went badly because the market turned and our biggest customer got acquired. Pure bad luck."
**Application:** Outside view. The market turning and a customer getting acquired are the kinds of things that happen to a percentage of companies every year. Smart founders price that in. So: was your plan resilient to a 30% probability that one of those things happened? If not, the bad outcome wasn't pure bad luck — it was a thin plan colliding with predictable variance. The inside view is offering you the easy escape hatch (it's the world, not me). The outside view forces you to see the part you can change: how much of your plan was leaning on conditions that were never guaranteed.
**Result:** The lesson the year actually has to teach gets unburied. Maybe next year the plan accounts for customer concentration risk. Maybe the team learns to keep options open longer. The inside view said "nothing to learn." The outside view says "here are the three things to do differently next year."

## Anti-Patterns (tactical)

**Don't:** Skip the base rate because "every situation is unique."
**Why:** Every situation is technically unique, and that's the trick the inside view runs on you. The fact that no two situations are *identical* doesn't mean reference classes don't exist. Most decisions sit comfortably inside a category — startup raising a Series A, person joining a gym, couple getting married, executive hiring a VP of Sales. The category has data. Refusing to look it up because your case is "different" is exactly what someone whose case isn't actually different would say.

**Don't:** Use the outside view as an excuse to be uniformly pessimistic.
**Why:** Calibration runs both directions. If the base rate for new restaurants surviving year one is 40% and yours is opening with a celebrity chef, a proven concept, a great location, and pre-launch waitlist demand, your forecast might genuinely be 70%. The outside view isn't "always assume you're average." It's "anchor to average and earn any departure with specifics." Departing with specifics is allowed. Departing with hopes is not.

**Don't:** Reach for the outside view only after a bad outcome.
**Why:** That's resulting in disguise. People love the outside view when it explains away their failures ("most startups fail, what can you do") and ignore it when they're succeeding ("don't jinx it, we're on a roll"). Use it both directions or you're using it to feel better, not to think better. The outside view that survives a good outcome is the one that earns your trust.

**Don't:** Rely on a pros-and-cons list as a substitute for the outside view.
**Why:** Pros-and-cons lists are inside-view machines. You generate the pros and the cons, you weight them, you decide if it's enough. The whole exercise lives between your ears, infected by the conclusion you're already heading toward. If you wanted to design a decision tool to amplify bias, you'd design a pros-and-cons list. Use base rates and other people's perspectives — those are the ones that don't agree with you on command.

**Don't:** Ask for outside-view feedback in a way that signals what answer you want.
**Why:** "Don't you think this is going to work?" is not a request for the outside view. It's a request for affirmation, dressed up as a request for input. Ask the question without the lean: "What's the case against this?" "What would have to be true for this not to work?" "If you saw this exact pitch from someone else, what would you flag?" Make it easy for the other person to give you the disagreement that's the whole reason you asked.

**Don't:** Confuse "smart" with "calibrated."
**Why:** Being smart correlates positively with motivated reasoning, not negatively. Smart people are better at constructing convincing arguments, including ones that confirm what they already believe. They have more confidence in the truth of their beliefs because they are, in fact, often correct. That's exactly why the smartest people in the room often have the worst-anchored forecasts. The smarter you are, the more vigilant you have to be about the outside view. Otherwise your intelligence becomes a tool for spinning a more fluent inside view, which is the opposite of what you want.
