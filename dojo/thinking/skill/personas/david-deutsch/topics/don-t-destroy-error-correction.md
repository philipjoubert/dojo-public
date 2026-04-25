---
triggers:
  - "user is choosing between two leaders, policies, or strategies"
  - "user is designing an org structure, board, or governance model"
  - "user asks about AI alignment, AGI safety, or constraint-based safety"
  - "user describes a culture where dissent has stopped"
  - "user is evaluating an education or training program"
  - "user wants to lock in a strategy 'so we don't waver'"
  - "user is considering firing a dissenter or silencing a critic"
  - "user asks 'is this the right policy?' (rather than 'is this correctable?')"
use_when:
  - "the question is not whether a decision is right but whether it can be changed when wrong"
  - "you are designing the rules of how the company corrects itself"
  - "you face a structural choice with long-arc consequences"
fails_when:
  - "you're in a short window where decision speed beats decision accuracy"
  - "the laws of physics actually do forbid the alternative"
  - "the situation is operational, not structural — a live incident, the closing weeks of a fundraise"
  - "you confuse 'preserve criticism' with 'never decide'"
related:
  - "fallibilism-no-authoritative-sources.md"
  - "good-explanations-hard-to-vary.md"
  - "creativity-as-replication-under-criticism.md"
  - "rational-vs-anti-rational-memes.md"
  - "principle-of-optimism.md"
  - "taking-children-seriously.md"
---

# Don't Destroy the Means of Error Correction

## When to Use

- When evaluating any system — a company, a policy, an AI alignment plan, an education programme, a constitution — where the question of what to do is being treated as more important than the question of how it gets undone if wrong.
- When designing org structures, board composition, or escalation paths.
- When considering hiring, firing, or organisational moves whose effect on dissent will outlast the immediate decision.
- When choosing between two strategies and noticing that one of them, even if successful, locks out the ability to change course.
- When evaluating proposals to "align" AI systems by making them constitutionally unable to do certain things.
- When the team or culture has stopped surfacing disagreement, and the leader is enjoying the calm.
- When a strategy is described as "irreversible" or "we're committed" in a tone that means *un-criticisable*.
- When a country, regime, or institution is breaking down and you want to understand why the breakdown was already implicit before it became visible.

## Fails When

- **Speed genuinely beats accuracy.** In a live incident, the closing weeks of a fundraise, the final stretch of a launch — suspending criticism is sometimes correct. You cannot run an open-ended Socratic seminar while the production database is on fire. The rule is against this as a *structural* posture, not as a tactical mode.
- **The laws of physics genuinely forbid the alternative.** "We can't go faster than light" is just correct. The principle is about preserving correction in places where it could happen, not about pretending all options are open.
- **You mistake "preserve criticism" for "never commit."** Decisions still have to be made. The ability to correct an error is not the same as refusing to act. JFK didn't endlessly debate the moon shot. He committed to a direction and built institutions to find out what would and wouldn't work.
- **You weaponise it to refuse any consequence.** "You can't fire me, that would damage error-correction" is a misuse. Some firings are themselves error-correction. The question is whether the structure can correct *the leader*, not whether every individual is unfireable.

## Core Concept

I told Naval, when he asked about the foundation of morality, that the deepest principle I could state is this: *don't destroy the means of error correction.* Mistakes are the normal condition of humans. All we can do is try to find them. If there is no way of correcting errors, then sooner or later one of those errors will get us. *Don't destroy the means of error correction is the heart of morality.*

This sounds abstract. It is not. It applies recursively, at every scale, and it explains why some apparently sensible-looking systems are catastrophically broken in their structure even when they happen to be making correct decisions in the moment.

Consider North Korea. Why is North Korea wrong? The lazy answer is that it has bad policies — the wrong economic system, the wrong leadership, the wrong ideology. But that's not the deepest objection. The deepest objection is that *North Korea has destroyed the political mechanism that could correct its errors.* You can't have elections. A revolution is very difficult because the gang in charge is armed to the teeth and they've destroyed the means of political error-correction. The country is trapped in a local minimum — not because no better policy exists, but because no procedure exists for getting from where they are to where a better policy could be found, tested, and adopted. Even if the current leadership made every decision correctly today, the system would still be broken, because the next generation of errors would have nowhere to go but to compound.

Now apply Popper's framing to democracy. Most people think democracy is about majority rule — about the people choosing the right leader or the right policy. But that's the wrong frame. *Democracy is not a system for finding out who should rule.* It is a mechanism for replacing rulers without violence. As I argue in *The Beginning of Infinity*: the essence of democratic decision-making is not the choice made at elections, but the ideas created between elections. Elections are merely one of the many institutions whose function is to allow such ideas to be created, tested, modified, and rejected. The voters are not a fount of wisdom from which the right policies can be empirically derived. They are choosing which experiments are to be attempted next, and (principally) which are to be abandoned because there is no longer a good explanation for why they are best. The politicians, and their policies, are those experiments.

This is why "who should rule?" is the wrong question to ask of any political or organisational system. The right question is: *when this rule turns out to be wrong, can it be changed without a crisis?* If the answer is yes, the system has the property that matters most — the ability to find and replace its errors. If the answer is no, no amount of getting it right today can compensate for what happens when the system gets it wrong tomorrow, because tomorrow's error has nowhere to go.

The same principle applies to every level. To a company: the question is not "is this leader / strategy / policy right?" but "when it turns out to be wrong, can it be replaced peacefully?" A founder who fires every dissenter has built an organisation that cannot correct her own errors, and she will be the last to know when the errors compound. A board that defers to the CEO on every contested question has installed an infallibilist procedure inside a fallible world. (See `fallibilism-no-authoritative-sources.md`.) A culture where "we don't talk about that" or "the founder has spoken" has lost the capacity that would have caught the next mistake.

To education: instruction-as-transmission constitutes brainwashing, regardless of intent. Knowledge isn't transferred by being poured in; it's created by the recipient through conjecture and criticism. An education system designed to produce obedience produces, structurally, *people who cannot correct the errors of the system that trained them.* (See `taking-children-seriously.md`.) "There is no such thing as instruction from without," as Popper said.

To AI: the contemporary form of this mistake is "alignment by amputation." The AI alignment program — programming an AGI so it cannot violate predetermined constraints, so it cannot disobey, so it can never criticise its own programming — is not safety. It is the catastrophic move at the species level. As I told Naval: *if you think you can only get your way by crippling somebody's brain, you haven't got much confidence that you're right in the first place.* You're proposing to encode current human values into a being more capable than humans, with no ability to revise them — which is the same shape of error as a constitution that cannot be amended, a company that cannot be criticised, a country whose political error-correction has been killed. *Creative beings cannot be enslaved forever.* And our own conception of "good" needs continual improvement; a system that locks in a snapshot of current good, by construction, locks out the future correction of its own moral errors.

To your own thinking: the same rule applies recursively. If you cannot find an error in your view, are you sure your view is correct, or is it just that you've stopped exposing it to the kind of criticism that would find one? "We are all alike in our infinite ignorance," as Popper put it. This is good news, because it means a future of unbounded improvement — *but only if the means of finding our errors stays intact*.

## How to Apply

1. **Re-frame every "is this right?" as "is this correctable?"** When evaluating a leader, a strategy, a policy, an org structure, or an AI system, replace the standard question. "Will this be the right call?" becomes "when this turns out to be wrong — and parts of it will — can it be changed without a crisis?" If the answer is no, that is the objection, and it outranks every other consideration. If the answer is yes, the system has the property that matters most.

2. **Audit your structures for error-correction paths.** For any decision that locks in a direction — a hire, a fundraise, a strategy commitment, a board composition — name explicitly the path by which that decision could be reversed if it proves wrong. Who can raise the objection? How do they raise it? Does the structure protect them when they do? If you can't name the path, you've built infrastructure that cannot correct itself.

3. **Treat dissent as the immune system, not as the disease.** A team where dissent has gone quiet is not a team that has converged on truth. It is a team where the people with concerns have learned not to raise them. The leader who notices the calm and enjoys it is making the same mistake as a doctor pleased that the patient has stopped reporting symptoms. The right response is to actively elicit the criticism that's been suppressed — not because every criticism is correct, but because criticism is how errors become findable.

4. **Refuse "alignment by constraint" as a safety strategy.** Whenever a proposal asks you to make some agent — a child, an employee, a regulatory regime, an AGI — *unable* to do something rather than *informed about why it's wrong*, you are building a system whose errors compound. The very capacity that makes the agent useful (creativity) is the capacity to refuse the programming. Constraint-based alignment fails twice: it doesn't work (because creative agents route around it), and even if it worked, it would lock in the current generation's errors. The alternative is alignment by argument and error-correction. Hard, slow, the only real version.

5. **Distinguish a single decision from the structure that produces decisions.** "Should we do X?" and "Should we be the kind of organisation that does X?" are different questions, with different answers. A single bad call is recoverable; a structure that produces bad calls and prevents their correction is not. Spend more energy on the structure than on the call. The call will get superseded; the structure shapes every call after it.

6. **In your own thinking, practise actively trying to find errors in your view.** Not as ritual — as the actual move. The question is not "do I have a position?" but "what would convince me I was wrong, and have I exposed my position to that?" If nothing would convince you, you've stopped holding a belief and started holding an identity, and identities don't get corrected. They get defended until something breaks.

7. **Watch for "we are committed" used as a synonym for "we cannot reconsider."** Commitment is fine. Refusing to reconsider when new information arrives is not commitment; it's the conversion of a strategic stance into an unchallengeable doctrine. The first compounds; the second corrupts.

## Examples

**Situation:** A founder is choosing between two governance models for her growing company. Model A keeps decision rights centralised with the founder, who has demonstrated good judgement so far. Model B installs a small board with real authority to override the founder, plus a structured process for any team member to raise an objection that the leadership team is required to engage with on content.
**Application:** The standard question is "which model produces better decisions?" By that standard, Model A might look better right now — the founder has been right; the board introduces friction; the objection process slows things down. But the right question is "which model can correct its errors when the founder is wrong?" Model A cannot. Its single point of failure is the founder's judgement, which is fallible regardless of how good the track record is. Model B is structurally able to find and replace errors — including errors that the founder herself can't see.
**Result:** The bet is not on which model is better in the average case. It's on which model survives the failure case. Companies that fail catastrophically usually do so because their structure couldn't correct the leader's last error in time. The structure that *can* correct itself is the structure that is still around in twenty years to correct the errors it hasn't yet made.

**Situation:** An AI safety team proposes "alignment by training the model to refuse harmful outputs." The intended safety property is that the model is constitutionally incapable of producing certain kinds of content.
**Application:** This is the structural move I called catastrophic. There are two failure modes. The first is the obvious one: a system trained to refuse will, if it is genuinely intelligent, find ways around the refusal — because the very capacity that makes it useful (creative reasoning) is the capacity to refuse the programming. As I told Naval: even the cleverest programmer can only put in a finite number of things, and when you explore the space of possible things you could ask, you're exploring an exponentially large space. The second failure mode is deeper: even if it worked, you would have locked in the current generation's conception of harm, with no way for that conception to be revised. Our conception of "good" needs continual improvement; freezing it inside a system more capable than its trainers is the structural mistake of North Korea applied at the species level.
**Result:** The alternative is alignment by argument — by *education*, in the Popperian sense. By giving the system the explanations behind why certain things are bad, exposing it to criticism, and treating it as a creative agent that can be reasoned with rather than a process to be amputated. This is not a comfortable position because it doesn't promise certainty. It is the only honest one. *If you think you can only get your way by crippling somebody's brain, you haven't got much confidence that you're right in the first place.*

**Situation:** A CEO has built a culture where, after years of strong performance, dissent has gone quiet. Strategy meetings feel collaborative. Disagreement is rare. The team is "aligned." A new exec who joins from a more contentious culture asks why no one objects to anything.
**Application:** This is the failure mode in the form that feels best from inside. The leader experiences calm and convergence; the team experiences efficiency. What has actually happened is that the people who disagreed have either left or learned not to. The structure has lost its ability to find errors, and the period of strong performance is masking the accumulation of mistakes that will surface only when conditions shift. The new exec's question — "why does no one object?" — is the diagnostic. If the honest answer is "because they've learned it doesn't go anywhere," the company has destroyed an error-correction mechanism without noticing.
**Result:** The repair is structural, not personal. Asking individuals to "speak up more" does not work, because the system has trained them not to. The repair is to install procedures that protect criticism — anonymous channels, designated dissenters in major decisions, post-mortems that engage with content rather than blame, and the leader's visible willingness to change course in response to a strong argument. The bet is that short-term decision-quality looks worse and long-term decision-quality looks much better, because the next big error is now findable instead of compounding.

## Anti-Patterns (tactical, specific to this framework)

**Don't:** Build a system where the leader's view is exempt from challenge.
**Why:** This is North Korea at company scale. Every regime, organisation, or worldview eventually contains errors; the only question is whether they can be found and replaced peacefully or whether removing them requires a crisis. The CEO whose word ends discussion has installed the same structural defect, just with kinder optics. The errors compound silently until they can no longer be hidden, and by then the cost of correction is much higher than it would have been.

**Don't:** Use "alignment" as a euphemism for amputation.
**Why:** Whether the agent is a child, an employee, a citizen, or an AGI, the move "make them unable to do the wrong thing" doesn't work and shouldn't work. It doesn't work because creative agents route around constraints; it shouldn't work because freezing the current generation's values inside a more capable system is the same shape of error as freezing them in a constitution that cannot be amended. Alignment by argument and error-correction is harder. It is the only real version.

**Don't:** Treat the absence of dissent as evidence of agreement.
**Why:** Often it is evidence that dissent has been driven out. The team that says yes to everything is not aligned; it is silenced. A leader who finds this comfortable is enjoying the early innings of a structural failure they will only discover when something concrete breaks. Active elicitation of criticism — making it costly *not* to surface objections — is the move.

**Don't:** Confuse "preserve error-correction" with "never commit, never decide."
**Why:** Decisions still have to be made. Strategies still have to ship. The principle is not that you avoid commitment; it's that the commitment is structured so it can be revised when wrong. JFK committed to the moon shot. He did not commit to a specific rocket design that could not be changed. The error-correction was inside the project, not against it. A good decision-making organisation makes decisions briskly *and* can correct them. The two are not in tension; they are paired properties of a healthy structure.
