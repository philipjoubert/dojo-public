---
triggers:
  - "user is choosing what to build / what idea to pursue"
  - "user asks how to find a problem worth solving"
  - "user has no idea yet but wants to start a company"
  - "user asks if Mom Test works pre-product"
  - "user is choosing between several possible ideas"
use_when:
  - "the founder is pre-idea or has multiple candidate ideas with no clear winner"
  - "the founder has an idea but no anchored customer and is looking for one"
  - "the founder is exploring a customer segment looking for a 'hair on fire' problem"
fails_when:
  - "the founder has already committed to a specific product spec — discovery now is too late, validate instead"
  - "the founder uses 'discovery' as an excuse to defer building forever (analysis paralysis)"
related:
  - "the-mom-test.md"
  - "choosing-customers-segmentation.md"
  - "trap-patterns.md"
---

# Idea Discovery (Pre-Product Mom Test)

## When to Use
- You don't have an idea yet. You're trying to find a problem worth solving.
- You have several candidate ideas and you don't know which to chase.
- You have one idea but it's vague, and you suspect the *better* version of it is going to come from talking to people, not from another whiteboard session.
- You're early enough that almost everything about the eventual product is still negotiable — that's exactly when discovery has the most leverage.

## Fails When
- **You've already committed.** If you've raised on a specific spec, hired around it, and announced it publicly, "discovery" at this point is theatre. You're now in validation territory — using customer conversations to confirm or deny a defined hypothesis, not to wander.
- **You skip the constraint.** If you go in talking to "everybody about everything," you'll end up talking to people who are easy to find (which is mostly people like you), and you'll latch onto a generic problem in a generic segment. Discovery without a customer constraint produces generic ideas.
- **You use it to defer forever.** Some founders use discovery as an excuse to never build. Five months of "talking to customers" with no shipping is a stall. Discovery is supposed to be fast — a few weeks, not a year.

## Core Concept

The Mom Test is most often described as a tool for *validating* an idea — but it's actually most powerful when you use it before you have the idea. Pre-product is the highest-leverage moment in a startup, because every decision is still up for grabs. The more you've committed (product spec, code, hires, money), the less customer discovery can change. So the earlier you do it, the more it shapes.

The way it works pre-product is: **don't talk to everybody about everything.** That fails. You need a constraint. The most useful constraint is a *customer choice* — pick the customer first, then go find their hair-on-fire problem. The reverse (pick the problem, then look for who has it) usually devolves into arguments about market sizing.

For me, three filters decide whether a customer is worth picking:

1. **I care about them.** Building a product takes years. I find it discouraging to work for the benefit of customers I'm cynical about. My first business served advertisers. I didn't care about advertisers. The market looked good on paper and the work was joyless. Now I refuse to pick a segment I don't enjoy spending time with.

2. **They can spend money.** School teachers in America have huge problems and basically no budget. To serve them, you'd have to be incredibly creative about *who pays* — parents, administrators, government — and the model gets complex fast. Complexity isn't always bad (Stripe took on payments complexity deliberately), but enter it intentionally, not by accident.

3. **There's a way to reach them.** Some customers self-educate constantly (programmers, marketing professionals) — content marketing reaches them. Others spend zero percent of their time self-educating, and reaching them requires paid media or weird partnerships. Both are doable, but the second is much harder. Pick a segment whose existing media diet you can plausibly enter.

Once you have your customer, the discovery conversation is *easy* — *because you have nothing to pitch yet.* You can't accidentally bias them with your idea because you don't have one. You just ask them about their life: *"Tell me about your worst frustrations. Walk me through your day. What's the thing you complain about most? Why isn't this already better?"* Listen. Look for the places where they're emotional. Look for the workarounds they've already cobbled together. Look for the budget they're *already* spending on duct-tape solutions.

Two traps to navigate:

- **Local maxima.** You find a real problem for a real customer and rush in — but the problem is too small to support the kind of business you want. Not every problem can become a venture-backed hyper-growth business. If you have small goals, small problems are fine. If you have big goals, you need big problems. Match the problem size to your ambition.

- **Air-quote problems.** People love complaining. They'll cheerfully tell you about how email security is "a nightmare" — but they won't change anything to fix it. Same with "going green," "worker satisfaction," "exercise more." These are problems people *talk about*, not problems they *spend money on*. The diagnostic is the classic sales question: *"What are the implications of that?"* If they shrug and say *"we mostly just ignore it"*, the problem isn't real for this person — it's an air-quote problem.

The big win of pre-product discovery: you can change *everything*. Customer, segment, problem, solution, business model. After product, your degrees of freedom collapse. So if you're early, this is the most valuable customer development time you'll ever have.

*Rule of thumb: There's no better time for pure Mom Test discovery than when you're still picking an idea.*

## How to Apply

1. **Pick the customer first, not the idea.** Choose 1–2 specific customer types using the three filters: do I care about them, can they spend money, can I reach them? If you fail any of the filters, you're either picking the wrong customer or signing up for a much harder business than you realised.

2. **Narrow the segment with sub-slicing.** *"Programmers"* is too broad. *"Programmers building data pipelines for B2B SaaS"* is sharp. (See `choosing-customers-segmentation.md` for the slicing technique.) Without slicing, your conversations will scatter and the ideas you discover will be too generic to act on.

3. **Open the conversation by asking about their life — not your idea (because you don't have one).** This is the easiest possible Mom Test conversation: you literally cannot pitch them, because there's nothing to pitch. Just ask:
   - *"Tell me about your work — what does a typical day look like?"*
   - *"What are the worst parts? What frustrates you most?"*
   - *"What are you trying to achieve right now?"*
   - *"What problems have you complained about three times in the last month?"*
   - *"What workaround have you cobbled together to deal with X?"*

4. **Look for emotional intensity.** Where does the person get angry, embarrassed, exasperated, animated? That's where the real problems are. People rationalise away small problems but can't help expressing big ones.

5. **Apply the implications test to every problem they mention.** *"What are the implications of that?"* / *"How does that affect you?"* / *"How much time/money does that cost you?"* If they shrug, it's an air-quote problem — they'll complain about it but won't change behaviour or pay to fix it. Move on. If they get more animated and start describing the cascade of consequences, that's the hair-on-fire signal.

6. **Look for active workarounds.** The single best signal pre-product is: *they've already cobbled together their own makeshift solution.* Spreadsheets, Slack channels, hired interns, paid agency, bought competing tool and worked around its limitations. Active workarounds tell you they care enough to invest current resources. That's earlyvangelist territory.

7. **Match the problem size to your ambition.** If you want a venture-scale business, the problem you find needs to support one — enough customers, enough budget per customer, defensible unit economics. If you want a lifestyle business, a smaller problem is fine. Don't accidentally pick a small problem and expect a big business, or vice versa. Either is fine; mismatch is fatal.

8. **Move quickly. A few weeks, not a year.** Discovery is meant to be a sprint. Pick a customer, talk to 10–20, identify the hair-on-fire problem, take your visionary leap to a candidate solution, and start validating it. If discovery is dragging into months, you're either using it as a stall or you've picked a customer you don't actually want to serve (and the cynicism is making the work joyless).

## Examples

**Situation:** A founder asks me whether the Mom Test works for idea generation, before any idea exists.

**Application:** Yes — but with constraint. Pick a customer first using the three filters (care, spend, reach). Then talk to them about their life, look for hair-on-fire problems, and use the implications test to weed out air-quote problems.

**Result:** Without the customer constraint, the founder ends up talking to "everybody about everything" — usually defaulting to the people easiest to reach (university students, friends, fellow founders) and producing generic, low-conviction ideas. With the customer constraint, even bad early conversations narrow the search space fast.

---

**Situation:** A founder thinks email security is a hot opportunity. Tons of think-pieces, lots of people claim it's a problem, big market on paper.

**Application:** Run the implications test. *"You mentioned email security is a nightmare — what's the actual impact?"* / *"How is this affecting your business right now?"* / *"What's it costing you?"*

**Result:** Most people shrug. *"Yeah, we kind of just ignore it. We know we should care more, but we haven't had an incident yet."* Air-quote problem. People will complain about it on Twitter and won't spend a dime to fix it. The "huge market" was a market of complainers, not buyers. Discovery saves the founder from a 12-month detour into vapour-demand.

---

**Situation:** A founder thinks they want to serve "school teachers." Big problems, sympathetic group, feels meaningful.

**Application:** Apply filter 2 (can they spend money). Teachers have basically no discretionary budget — to monetise, the founder would need to design around parents, administrators, or government grants. That's possible but it's a fundamentally different (and much harder) business than direct B2C or B2B. Filter 3 (reach) compounds — teachers don't self-educate the way developers or marketers do.

**Result:** The founder either (a) commits to the multi-stakeholder complexity intentionally, knowing it's a 5-year build, or (b) pivots to an adjacent customer (e.g. teacher-mentor platforms that *administrators* buy) where the buyer can actually spend, or (c) realises the gap between their goal-size and the segment's economics and picks a different customer. All three are better than discovering this 18 months in.

## Anti-Patterns (tactical)

**Don't:** Talk to "everybody about everything" because you're "just exploring."
**Why:** Without a customer constraint, you'll default to the easiest-to-reach people (friends, fellow founders, students), and you'll latch onto a problem that exists for them but doesn't generalise. The constraint *creates* the productive search.

**Don't:** Pick the problem first, then look for who has it.
**Why:** This is how you end up at "everybody hates traffic" → Segway. The problem might be huge in aggregate and small for any individual customer, or it might be technically real but emotionally irrelevant to the people who'd buy. Picking the customer first forces you to confront *whose* problem matters in *what* way, which is a much higher-fidelity starting point.

**Don't:** Use "exciting market" as a reason to pick a customer you don't care about.
**Why:** Your motivation is a structural input. Years of customer conversations, product iteration, and crisis response are sustainable only if you actually like the people you're serving. The "exciting market" lights up at month 1 and the cynicism kicks in around month 18. The customers you'd want to be friends with sustain the work.

**Don't:** Skip the implications test.
**Why:** Without it, you'll latch onto the first plausible-sounding complaint and start solving it. Most complaints don't survive the implications test. You want the small set that do — those are the hair-on-fire problems.

**Don't:** Stay in discovery once you've found the problem.
**Why:** Discovery has a clear exit point: you've identified a customer, a hair-on-fire problem, an active workaround they're paying for, and an emotional intensity signal. Once you've got those, take your visionary leap to a candidate solution and start validating. Continuing to "do more discovery" at this point is procrastination — you're avoiding the harder part, which is committing to a solution.

**Don't:** Mistake "lots of conversations" for "good discovery."
**Why:** Five great conversations beat fifty shallow ones. The metric isn't conversation count — it's whether you've identified a customer + problem + workaround that meets your ambition. If 50 conversations haven't produced that, the issue isn't volume; it's that the questions, the customer, or the segment is wrong. Re-plan, don't grind.
