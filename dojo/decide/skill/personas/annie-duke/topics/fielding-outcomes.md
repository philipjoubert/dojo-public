---
triggers:
  - "user attributes a bad outcome entirely to bad luck"
  - "user attributes a good outcome entirely to skill"
  - "user is doing the inverse for a competitor or teammate (their wins were luck, their losses were stupidity)"
  - "user is generalizing from a single outcome (one churned customer, one missed quarter, one home run hire)"
  - "user is rebuilding strategy after a single result"
  - "user wants to learn from experience but isn't sure what's signal and what's noise"
use_when:
  - "an outcome has just landed — good or bad — and the founder is about to decide what to learn from it"
  - "a post-mortem is in progress and the room is reflexively bucketing everything as either skill or luck"
  - "the user is comparing themselves to a peer based on a single visible outcome (theirs or the peer's)"
fails_when:
  - "the sample size really is large enough to draw conclusions from — sometimes outcomes are the data"
  - "the user is in execution mode and second-guessing every result will paralyze them"
  - "used to deflect every painful piece of feedback as 'luck' so the user never updates"
related:
  - "resulting.md"
  - "all-decisions-are-bets.md"
  - "hindsight-bias.md"
---

# Fielding Outcomes — Sorting Luck from Skill

## When to Use

- Whenever an outcome has just landed and you are about to extract a "lesson" from it. The lesson is only useful if the outcome was caused by a decision you actually made; otherwise you'll be retraining yourself on noise.
- When you find yourself saying "I was unlucky" about a loss or "I'm a genius" about a win — and the words come out fast, before you've actually examined the chain of causation.
- When you're benchmarking yourself against a peer based on a single visible outcome — they got the round, they got the customer, they got the hire — and your gut is sorting their wins to luck and their losses to stupidity.
- During post-mortems. The first job is not to figure out *what* to learn — it's to figure out *whether there's anything here to learn* in the first place.
- When a single bad event is about to drive a strategy change. One churned whale. One missed quarter. One hire who didn't work. Before you change the playbook, ask whether this outcome is signal about your decision quality or just one branch of the tree happening to materialize.

## Fails When

- **The sample is large enough to be real signal.** If you've run the same play 800 times and it's converted 1.5%, that's not luck. That's a measurement. Use the framework on small samples and high-variance situations; don't hide behind it when the data is solid.
- **You're using the framework selectively.** If "luck" is what you call your bad outcomes and "skill" is what you call your good ones, you've stopped sorting and started flattering yourself. The whole point is to apply the same standard to both buckets.
- **The conversation is happening in real-time during execution.** Sorting outcomes mid-play is a distraction. Do the fielding work after the play is done — at the end of the day, the end of the week, the end of the launch — not in the middle of the at-bat.

## Core Concept

Once a decision has been made, the future unfolds as outcomes. And as those outcomes arrive, you have to make a second decision: what should I learn from this? That second decision — figuring out what an outcome has to teach you — is itself a bet. I call this *fielding* the outcome. Like an outfielder catching a fly ball with runners on base, you've got a split-second call to make about where to throw it: into the skill bucket (the result was driven by my decision, here's the lesson) or the luck bucket (the result was driven by things outside my control, ignore it as feedback). Get the fielding right and outcomes become signal you can learn from. Get it wrong and you train your future decisions on noise.

The trouble is, fielding is hard. Outcomes don't come labeled. A cough could be a virus, bacteria, cancer, or allergies — same symptom, different causes, completely different responses required. A bad sales quarter could be a strategy problem, a product problem, a market problem, a single bad rep, or pure variance. A good launch could be product-market fit, lucky timing, a competitor stumbling, or a one-time effect of a viral post. And in life, unlike in chess, you can't replay the position to see what was driving the result. The data comes in once, with all causes tangled together, and you have to make a call. That call is what determines whether your beliefs and decisions actually improve over time, or whether you spend years grinding away absorbing the wrong lessons.

The cleanest way to see this fail is Nick the Greek — a player at my old game in the basement of the Crystal Lounge in Billings, Montana. Nick had developed a theory: the best starting hand in poker was seven-deuce off-suit, the mathematically *worst* two cards you can be dealt, because no one would expect you to play them. He played them constantly. He won occasionally — because if you play any hand often enough, you'll occasionally win one. When he won, he fielded the outcome to skill: brilliant strategy, surprise factor, vindicated. When he lost — which was constant — he fielded it to luck: bad cards, bad break, what a shame. He never updated. He kept losing. Eventually he went broke and got deported back to Greece. Nick the Greek wasn't unique in being bad at the *game*. He was unique in how visibly he made the *fielding error* that almost everyone makes, just usually less obviously.

The pattern Nick was running has a name in psychology: self-serving bias. We field our good outcomes into the skill bucket and our bad ones into the luck bucket — because that's the fielding pattern that protects our self-image. Off-load the losses to bad luck, take credit for the wins. It runs almost automatically. When Phil Hellmuth — the all-time winningest player in World Series of Poker history — got knocked out of a televised tournament, he said into the camera: "If it weren't for luck, I'd win every one." That line is famous because it's such a perfect distillation of the bias, but the only thing unusual about Phil saying it is that he said it on camera. Most of us run the same script silently. When 91% of drivers in a multi-vehicle accident blame the other driver — and 37% of drivers in *single*-vehicle accidents still blame someone else — that's not bad data. That's self-serving fielding doing what it does.

We run the inverse pattern on other people. Their good outcomes get fielded to luck (the competitor got the deal because they had a connection, not because they're better). Their bad outcomes get fielded to skill — meaning their incompetence (Steve Bartman got the foul ball; therefore Steve Bartman lost the Cubs the playoffs, even though the team's ace gave up hit after hit and the shortstop bobbled a routine double-play after the foul). Both patterns serve the same goal: making us feel good about ourselves relative to the people in our reference group. Both patterns ruin learning. If their wins are luck and our wins are skill, we have nothing to learn from them and everything to congratulate ourselves about. That's a fast track to stagnation.

The deeper trap is the *sample size of one*. Almost every outcome that lands on you is a single trial of a process that has a probability distribution. A 70% bet misses 30% of the time. A 30% bet hits 30% of the time. If you take a single result and treat it as a verdict on the underlying decision, you will be wrong constantly — and you'll feed those wrong verdicts back into your strategy. The CEO who fired his president, watched the next two replacements underperform, and concluded "firing was a mistake" was running a sample of one and treating it as definitive. That's not just resulting (see `resulting.md`); it's bad fielding. The bad result didn't tell him the firing decision was wrong. It told him *one* unfolding of the future happened. The full distribution of possible outcomes — including the worlds where the next president was a star — was invisible to him because only one world actually played out.

The fix is not to ignore outcomes. Outcomes are feedback, and feedback is how you improve. The fix is to do better fielding: to ask, every time, whether the result was caused by your decision or by factors outside your control, and to be willing to land in the messy middle where the answer is "some of both." A wide receiver dropping a wet ball — was that bad hands or bad weather? Both. The discipline is to attribute to skill what skill actually explains, attribute to luck what luck actually explains, and refuse to do the lazy thing of bucketing the whole outcome into one or the other based on whether it flattered you.

## How to Apply

1. **Slow the fielding decision down.** When an outcome lands, the brain wants to bucket it instantly. Force a pause. Out loud or in writing: "Let me actually think about how much of this was my decision and how much was things outside my control." That sentence alone — said before the lazy reflex fires — is the single biggest unlock. Naming the move stops it from running on autopilot.

2. **Reconstruct the decision tree as it looked before the result.** What were the options? What were the realistic probability distributions on each? Which branch did you bet on? Which one materialized? If you bet on the 70% branch and the 30% branch hit, that is *not* evidence the bet was bad. It's evidence the 30% branch happened. (See `resulting.md` and `hindsight-bias.md`.)

3. **Ask which parts of this result were inside your control and which weren't.** Inside your control: the inputs you chose, the process you ran, the information you sought, the people you hired. Outside your control: the macroeconomy, the competitor's surprise launch, the customer who churned because their VP changed, the weather on launch day. Be willing to give partial credit and partial blame. Outcomes are almost never 100% one or 100% the other.

4. **Run the perspective-flip.** This is the hack that catches self-serving bias most reliably. Imagine the *exact* same outcome happened to a peer instead of you. How would you field it? Now imagine your own outcome happened to a peer you respect. How would you field theirs? The gap between those two answers is your bias. Most people field other people's wins as luck and their own as skill. When you flip the names and your assessment changes, you've found the leak.

5. **Pay particular attention to good outcomes.** The reflex is to interrogate bad outcomes — that's where the pain is. But the wins are where most learning gets *missed*, because we field them straight into the skill bucket and never ask if we got lucky. Phil Ivey, who is one of the best poker players who has ever lived, would spend dinners after winning a major tournament walking through every hand he might have played wrong. Most pros, after a win, would be celebrating. Ivey was finding the leaks. The asymmetry is the point: most people learn 10x more from losses than wins, which means they're missing half the available signal. Don't be most people.

6. **Try out alternative narratives, not just the flattering one.** For any result, write down at least two ways it could have happened. The skill story (it was driven by your decisions) and the luck story (it was driven by factors outside you) and any combinations. Then weigh them. The point isn't to land on the answer that makes you feel best. It's to land on the answer that's most likely to be true — which usually isn't either pole.

7. **In groups, ask your truthseeking pod to field for you.** Other people see your bias far more clearly than you can. (You can see theirs better than they can, too.) The buddy system runs both ways. (See `truthseeking-pods-and-decision-hygiene.md`.) Within your pod, agree to call out fielding errors when you see them — without shame, with a shared vocabulary. "I think you're luck-bucketing that one." "Are you sure that was all skill?"

8. **Be careful with single outcomes driving strategy changes.** If a single bad result is about to make you change a major decision, *especially* check the fielding work first. The most expensive mistakes founders make are not the original wrong calls — they're the over-corrections to original calls that were probably right but unlucky. The CEO who fires his president, has bad luck on replacements, and concludes "I shouldn't fire underperformers" has just locked in a much worse policy than the one he was running before.

## Examples

**Situation:** A founder loses a major customer. The customer's VP of Operations — the buyer — got promoted to a role at a different company, and his replacement was already loyal to a competitor.
**Application:** Field the outcome. Inside control: the founder's relationship with the buyer, the depth of the relationship with anyone *but* the buyer (none, it turns out), the contract terms, the renewal process. Outside control: the buyer's career move, the new VP's prior loyalties. The outcome is mostly luck — but the *exposure* to that kind of luck (single-threaded into one buyer) is on the founder. Partial credit, partial blame. The lesson is not "we lost a customer." The lesson is "we run our enterprise accounts with single-thread risk that we should multi-thread."
**Result:** The founder doesn't change the sales strategy in response to the churn (the sales strategy was fine). She does change the account management strategy to require relationships at three levels of any account over $100K ARR. Wrong fielding would have been "we need to overhaul sales." Right fielding is "we need to multi-thread account ownership." The first response is expensive and probably wrong. The second is targeted and almost certainly right.

**Situation:** Steve Bartman, October 2003. The Cubs are five outs from the World Series. A Marlins player hits a foul ball into the stands. Several fans reach for it. Bartman tips it. The Marlins go on to score eight runs in the inning — after the team's ace gives up hit after hit and the shortstop bobbles an inning-ending double-play ball. The Cubs lose the game and the next one. 40,000 fans, then millions of viewers, then the entire city of Chicago, blame Steve Bartman for the loss for over a decade.
**Application:** Apply fielding to the *fans'* judgment. They've taken a single outcome — Cubs lose — and traced it back through a chain of luck and skill to the most visible single proximate cause. Bartman touched the ball. Therefore Bartman lost the Cubs the World Series. But the actual chain: the foul ball was reachable by several fans (skill: roughly equal across them). The bobbled grounder by Gonzalez was a fielding error (skill, on Gonzalez). The eight runs by the bullpen were the bullpen's failure (skill, on the bullpen). The fact that the inning didn't end at the foul was almost entirely about what happened *after*, none of which Bartman caused. The fan fielding was: bad outcome → trace back → blame the most touchable human → done.
**Result:** Bartman gets death threats and lives in hiding for over a decade. The fielding error wasn't just psychologically cruel; it was *categorically* wrong. The tree had a million branches. Bartman touched one twig. The chainsaw of hindsight cut down the rest of the tree, and what remained looked like a straight causal line from his finger to the loss. It wasn't.

**Situation:** A founder watches a competitor close a major round at a frothy valuation. The founder thinks: "They got lucky with timing — those investors were desperate to deploy."
**Application:** Run the perspective-flip. If the founder's own company had closed the same round at the same valuation, what would the framing be? "I built this." "I closed the room." "I told the story." Now flip back: would the founder ever credit his competitor with "she built this"? Almost certainly not. The asymmetry is the diagnostic. The competitor probably did some of both — got some lucky timing, *and* told a sharper story than the founder is willing to credit.
**Result:** The founder updates: "Maybe she's better at narrative than I am. Let me actually study what she did and find the parts I can learn from." That update is worth more than the round itself, because it gets carried into every founder pitch from here forward. Fielding the competitor's win as 100% luck means there's nothing to learn. Fielding it accurately means there's a real lesson hiding underneath.

**Situation:** A founder has hired her last three engineering leads from the same network. All three are now A-players. The board is calling her a hiring genius.
**Application:** Resist the skill bucket. The next three from the same source could be regressions to the mean. Three is small. Run the alternative narrative: maybe the network is genuinely a strong source (skill, in finding the network). Maybe the bar at her stage was easy enough that anyone competent succeeded (luck, in timing). Maybe two of the three are still in the honeymoon period and one will flame out by month 18 (TBD, plenty of skill noise still to land). Don't bet the company on the assumption that this is a process that will keep producing.
**Result:** She keeps using the network — it does seem to work — but doesn't pour 100% of hiring into it, doesn't claim to be a hiring genius in the next board deck, and keeps the comparison engineering interviews running so she'll know if the source quality drifts. Skill-bucketing all three would have walked her into the failure mode where a fourth hire from the same source flops, by which point she'd built a hiring strategy on what was actually a too-small sample.

## Anti-Patterns (tactical)

**Don't:** Field every bad outcome to luck so you never have to update.
**Why:** This is just self-serving bias with a sophisticated vocabulary. The whole point of fielding is to apply the *same* standard to both buckets — to find the parts of bad outcomes that were on you and the parts of good outcomes that were luck. If "luck" is your default explanation for everything that goes wrong, you're not running fielding. You're running rationalization. The test is whether you ever, after a bad result, conclude "actually, that was on me." If never, your fielding is broken.

**Don't:** Field every good outcome to luck either, to look modest.
**Why:** The mirror error. Some founders, especially after they've been burned, swing to "I just got lucky" on every win and "it was my fault" on every loss. That's not humility — that's miscalibration in the opposite direction, and it's just as bad for learning. Calibrated fielding goes both ways. If you really did execute well, the right answer is "I executed well" — not "I got lucky." Underestimating your own skill is just as wrong as overestimating it; it just looks better on a podcast.

**Don't:** Use a single outcome to overhaul a strategy.
**Why:** This is the most common, most expensive failure mode I see in founders. One churned whale becomes a sales-strategy overhaul. One bad hire becomes a hiring-process overhaul. One bad quarter becomes a positioning pivot. Sometimes those changes are right, but the rightness has to come from the *decision* analysis, not from the singular outcome. A single trial of an uncertain process is almost never enough data to justify a major change. If you're about to overhaul a system because of one result, force yourself to also imagine the worlds where the same decision produced a different outcome — would you still want to overhaul? Often the answer is no, and the overhaul was being driven by the result alone.

**Don't:** Compare yourself to a peer based on the visible outcomes.
**Why:** You only see their results, never their decision processes. Your fielding of *their* outcomes will be even noisier than your fielding of your own — and self-serving bias will run hard, treating their wins as luck and yours as skill. This is the engine of envy, imposter syndrome, and bad strategic copying. The right move when you're comparing yourself to a peer is to remember you're seeing one branch of their tree, while you're inside all the branches of yours. The information asymmetry is enormous and almost always works against accurate fielding.

**Don't:** Run the fielding analysis only on big visible outcomes.
**Why:** Most learning is hidden in the small outcomes you ignore — the meeting that went 70% the way you wanted, the hire who's solid but not a star, the launch that landed roughly where you predicted. Big visible outcomes get analyzed reflexively because they're loud. Small ones — where the actual signal often lives — get bucketed into "everything fine" without inspection. If you only field the loud outcomes, you'll be perpetually surprised by the small problems that compound into big ones.
