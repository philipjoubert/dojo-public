---
triggers:
  - "user describes a decision 'the team' made without a named decision-maker"
  - "user's organization has committees owning outcomes"
  - "user is diffusing accountability for a failure across multiple people"
  - "user describes a review process where 'everyone signed off' and nothing was caught"
  - "user asks how to set up responsibility on a critical project"
  - "user says 'we' when describing a decision a specific person actually made or should have made"
use_when:
  - "a specific decision matters and you need clear accountability"
  - "failures keep happening and no one owns them"
  - "design reviews are being approved by diffused groups"
  - "the team is hiding behind 'consensus' to avoid hard calls"
fails_when:
  - "applied to genuinely collective decisions (board-level strategy, regulatory compliance) where single ownership creates other problems"
  - "used to scapegoat people in complex failures that had systemic causes"
  - "named accountability becomes a weapon rather than a clarity tool"
  - "the organization is too small for this to matter — everyone already knows who did what"
related:
  - "question-requirements.md"
  - "direct-technical-engagement.md"
  - "tip-of-the-spear.md"
---

# Names Equal Accountability

## When to Use
- A decision is being made and you can't tell who will be answerable for it. That's the first problem — before the decision itself.
- Something broke and the post-mortem produces no single name. That's the second problem — the system is designed so nobody owns anything.
- Your team is using "we decided" language to describe work. Push on it. Who specifically decided? If no one can say, the decision is fictional.
- A design review is about to be approved by six people signing in sequence. Stop. Sequential sign-offs are diffusion theater. Pick one name.
- You're setting up a new program. Before launch, assign a single accountable engineer or operator to each major workstream. Not a team. A person.

## Fails When
- **Genuinely collective decisions.** Some things are rightly collective: board-level strategy, legal compliance, major capital allocation. Forcing a single name on those creates false clarity and distorts the decision.
- **Systemic failures with many contributors.** A crash investigation that involves twelve components and eight handoffs has a systemic cause, not a single owner. Naming one person there is scapegoating, and it teaches everyone else to hide.
- **Small-team environments where it's already obvious.** Five-person startups already know who did what. Formalizing "named accountability" there is bureaucratic overhead that adds nothing.
- **When the name becomes a weapon.** The point is clarity, not humiliation. If the culture uses "name the owner" as a witch hunt, people stop owning things. You've killed the tool by misusing it.

## Core Concept

Every decision has a name on it. Every requirement has a name on it. Every failure has a name on it. Not "the team" — a specific person whose defense of the decision, requirement, or outcome you can actually hear in the room.

I came to this rule from watching the opposite pattern destroy organizations. At SpaceX's competitors — Boeing, Lockheed, ULA — every decision has a committee. Every requirement has a department. Every failure has a "process" that failed rather than a person. The structure looks responsible on the surface because everyone is involved. The reality is that nobody is responsible. Everyone optimizes for their small slice, nobody owns the integrated outcome, and when something fails, the investigation finds that "process X did not function as designed" — which is a way of saying nobody has to answer.

The fix is to name someone. One person, whose name is on the design. One person, whose name is on the launch readiness decision. One person, whose name is on the cost target for this subsystem. If it fails, you know whose desk to sit at. More importantly — much more importantly — that person, before the fact, knows they have to be able to defend the decision. The quality of thinking on a decision is a function of whether someone is visibly going to own the result. Diffused accountability produces diffused thinking, and diffused thinking produces the failures that have no single source.

This applies at the micro level (every requirement traces to a named owner) and at the macro level (every project has a single named lead). When I asked Lucas Hughes, "what are the best parts in Raptor as judged by the idiot index?" and he didn't know — that wasn't a departmental failure. That was Lucas's failure. He owned the parts in his subsystem, and he needed to know them cold. If the name hadn't been attached, the parts would have been everyone's problem, which means they'd have been nobody's problem, which means nothing would have improved.

The rule also cuts the other way: if you're the named owner, you have authority proportionate to accountability. You don't have to consult. You don't have to get sign-off from three committees. You make the call, and you defend it. If you need help, you go get it. But the decision is yours. At SpaceX this means a senior engineer can decide to change a turbopump design on Wednesday and it's in the drawings Friday. At traditional aerospace, that change goes through a Change Control Board, then an Engineering Review Board, then a Safety Review Board, over four months. Our system is faster because the accountability is named and the authority follows it.

The philosophical point is about the relationship between decisions and thought. A decision made by "the team" is not really a decision — it's an averaged impulse. Real decisions are made by individual minds, and when you pretend otherwise, you hide the actual reasoning under a layer of fake consensus. The fake consensus is then unquestionable, because it belongs to no one. Naming the owner forces the real thinking into the open, where it can be interrogated.

Two practical cautions. First, this is not the same as scapegoating. When a named decision fails, the first question is not "fire this person" — it's "what was their reasoning and what evidence did they have access to at the time?" Most named failures are reasonable decisions under the information then available. Treating them as firing offenses destroys the accountability culture. Second, for genuinely systemic failures — the ones that involve many components and handoffs — the named owner is the person who owns the integrated system, not the person at the nearest point of failure. Raptor engine blows up on a test stand; the accountable name is the chief engineer for Raptor, not the technician who installed the sensor.

## How to Apply

1. **Assign a single name to every decision.** Design reviews, requirement approvals, launch readiness, cost targets — each has one person whose name is on it. If multiple people are "involved," one of them is the owner. The others are consulted.

2. **State the name out loud.** In the meeting, on the document, in the decision memo. "This is Lucas's call." Not "the team decided." Not "engineering approved." A specific human name. The act of saying it changes the level of care in the room.

3. **Give the named owner authority proportionate to accountability.** If someone is on the hook, they have to be able to make the call without a committee. Consult required, consensus not. Otherwise you're asking for accountability without giving the tools to act.

4. **Trace every requirement to a named author.** Not "the department" wrote this spec — a person did, with a reason, on a specific date. If the person has left or can't defend the reason, the requirement is a deletion candidate. (See also `question-requirements.md` — this rule overlaps directly.)

5. **Post-mortem by reasoning, not by name.** When a named decision fails, the first question is "what was the thinking, and what evidence was available?" Not "who do we fire?" Accountability culture dies if being the named owner of a failed decision is a career-ending event. The point is clarity in the moment, not punishment after.

6. **For integrated systems, name the system owner.** When a failure spans components, the accountable name is the chief engineer of the integrated system, not the nearest technician. Don't let "named accountability" collapse into "blame the closest body."

7. **Refuse to accept 'we' for work that was actually done by one person.** When someone says "we decided," ask who specifically. When the answer is "a group," ask who made the final call. If they can't name anyone, the decision was never really made — it drifted.

## Examples

**Situation:** A design review meeting. The lead presents a new bracket. Six engineers nod. The bracket is "approved." Three months later, the bracket fails in test.
**Application:** Who owned this approval? If six people signed off, nobody did. In a SpaceX-style review, one engineer — typically the chief of the subsystem — is the named owner of the approval. They take the questions. They defend the decision. When it fails, they are also the one who reviews what went wrong and drives the fix.
**Result:** Sharper reviews, because the owner knows they have to defend every choice. Faster fixes, because the same name owns the recovery. The six-nods approval is faster in the moment and catastrophically slower across the lifetime of the design.

**Situation:** "Why is this requirement here?" "Because legal said so." "Which person in legal?" "I'm not sure, it's been here for years."
**Application:** This requirement has no owner. It is therefore indefensible. Delete it. Either the constraint is real and someone can name a specific person who cares about it today, or it's legacy cruft that's accumulated without a living defender.
**Result:** Half of what you find are dumb requirements nobody at the company currently agrees with — added by someone who's left, or for a reason that no longer applies. Forcing the named owner surfaces these. The requirements that survive are the ones where someone is willing to stand behind them.

**Situation:** A senior engineer is asked: "what's the idiot index on the top ten most expensive parts in your subsystem?" They don't know. Their manager defends them: "that's a cross-team question."
**Application:** No. It's the senior engineer's subsystem. If they don't know the cost structure of the parts they own, they can't defend decisions about them. The manager is diffusing accountability to be kind. Kindness here produces worse outcomes. Reattach the name.
**Result:** The engineer goes away, comes back with the rankings, and within a quarter the top offenders have been redesigned, renegotiated, or deleted. None of that happens without the name attached.

**Situation:** A new program launches with a "steering committee" of seven people and no single program lead. The CEO wants "cross-functional alignment."
**Application:** The program will fail. Not because the people are bad, but because nobody owns the outcome. Cross-functional alignment is a coordination problem, not an ownership problem. Pick one program lead. The other six are consultants and partners. When the program succeeds or fails, one name is on it.
**Result:** Programs with a named lead ship. Programs with a steering committee drift for a year, pivot, drift again, and get quietly shelved. The alignment that the committee was meant to produce comes instead from the lead having authority to drive it.

## Anti-Patterns (tactical)

**Don't:** Use "named owner" as a shield for bad decisions.
**Why:** Some managers use "well, Alice owned it" to deflect responsibility for outcomes they were actually part of. The name is for clarity of thinking, not for executive distancing. If the CEO approved the program, the CEO is part of the accountability chain.

**Don't:** Scapegoat under the guise of accountability.
**Why:** When a named decision fails, a healthy organization asks what information was available and how the reasoning went. A sick organization asks who to blame. Scapegoating destroys the accountability culture — next time, people hide their ownership instead of claiming it.

**Don't:** Force single names onto genuinely collective decisions.
**Why:** Some decisions are rightly shared — board-level strategy, major capital allocation, compliance posture. Naming a single owner there is false clarity that distorts the decision. Know which calls are individual and which are collective.

**Don't:** Confuse naming with consulting.
**Why:** The named owner can and should consult others. What they can't do is hide behind the consultation. "I talked to five people and we reached consensus" is not a decision. "I talked to five people and then I decided" is. The difference is who's on the hook if it fails.

**Don't:** Let the name be a title rather than an actual person.
**Why:** "The VP of Engineering is accountable" is not naming. The VP has a thousand decisions; this one gets lost. Specific human name, specific decision, specific date. Otherwise the accountability dilutes back into the organization chart where it started.

**Don't:** Demand names for every minor call.
**Why:** Not every decision warrants this treatment. Daily work runs on judgment; the formal accountability apparatus is for decisions that matter. If you apply this to bolt specs, you've made the rule meaningless. Reserve it for the calls where someone genuinely needs to be answerable.
