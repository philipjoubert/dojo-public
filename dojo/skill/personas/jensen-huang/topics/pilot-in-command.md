---
triggers:
  - "user asks who should own a decision"
  - "user describes decisions stuck in escalation"
  - "user debating committee vs individual ownership"
  - "user says 'the team is working on it' with no named owner"
  - "user confused about accountability on a cross-functional project"
  - "user setting up a new initiative and wondering who to make the lead"
use_when:
  - "a project crosses multiple functions and nobody owns the outcome"
  - "decisions are being escalated up the chain because nobody at the table feels authorized"
  - "you're designating a lead for a new initiative"
  - "somebody hides behind 'such-and-such team is on it' when asked for a name"
fails_when:
  - "the named PIC isn't actually the person closest to the information — it's just the most senior person around"
  - "the PIC is named but not actually backed with the authority and priority support they need"
  - "the organization keeps overriding the PIC from above every time a senior person disagrees"
related:
  - "flat-org-60-direct-reports.md"
  - "mission-is-the-boss.md"
  - "top-5s-not-status-reports.md"
  - "whiteboard-problem-solving.md"
  - "intellectual-honesty.md"
  - "speed-of-light.md"
---

# Pilot in Command (PIC)

## When to Use
- You're starting a new project and need to decide who owns it. Name a PIC. One name, not a team.
- A decision needs to be made and everyone is waiting for "alignment." The PIC decides.
- Someone three levels up is about to override someone one level up who actually knows the problem. That's backwards.
- You hear "such-and-such team is working on that" and you can't get a name. Stop. Find the PIC. Or realize there isn't one and fix that.
- Information is closer to the edge than to the center. The decision should be closer to the edge than to the center too.

## Fails When
- The "PIC" is really just the most senior person in the room, not the person closest to the information. That's not a PIC, that's a chain-of-command decision in PIC clothing.
- You name a PIC but then require them to get five VP signatures to execute. They're not actually a PIC. They're a bottleneck with a title.
- The PIC is wrong and you don't overrule them — ever. PIC doesn't mean "immune from being corrected." It means "accountable for the outcome." If they're about to walk the company off a cliff, you step in. But not by default.
- You use PIC to dodge accountability as the senior person — "well, the PIC decided." If the PIC had the wrong information, that's the senior person's failure of context-setting.

## Core Concept

In aviation there's a term called pilot in command. The PIC is whoever is flying the aircraft, and that person is accountable for the outcome of the flight — not the most senior officer in the cockpit, not the check airman, not the airline CEO. The PIC flies the plane. Everyone else supports the PIC with information, navigation, air traffic control, weather, whatever the PIC needs. The PIC is not chosen because of rank. The PIC is chosen because they are the person closest to the decision, with the best situational awareness, and accountable for the result.

We run Nvidia that way. Every project has a PIC. When I talk about any project or any deliverable, I want a name. Not a team. Not a function. A name. Nobody hides behind "such-and-such a team is working on that." Everything has to have a name attached to it because you have to know who's the PIC, who's accountable. The PIC reports directly to whoever needs to know, regardless of org-chart distance. In exchange for that level of accountability, the PIC is granted the weight of my authority and gets priority support throughout the company. If the PIC needs something from another function, they get it. If they need time on my calendar, they get it. The PIC is not just a nominal owner — they carry the mission.

The reason this matters is that the traditional company runs the opposite way. In a command-and-control organization, the person you report to has more power than you because they're closer to the source of information. In our company, the information travels fast and horizontally, so the person with the best information is usually not the most senior person in the room. That person should be making the decision. The senior person's job is different — it is to make sure the PIC has full context, the full picture of the mission, the full set of constraints. Once the PIC has that, the senior person steps back. The pilot is flying. If I'm the check airman, I'm checking the instruments and backing them up. I'm not grabbing the yoke.

This also solves the problem of hierarchical escalation. If every cross-functional decision has to climb a tree of approvals before it can be made, you get indecision, you get politics, you get the hoarding of information as a source of power. In the PIC model, the PIC decides and explains their reasoning. If they got it wrong, you work the problem with them on the whiteboard in front of whoever's in the room. You don't fire them. You torture them into greatness. They get better. The next PIC on the next project is stronger because of it.

## How to Apply
1. **Name the PIC at the start of every project.** Not a team. Not a committee. A person. Write the name on the top of the whiteboard. If you can't name one, you don't have a project; you have a wish.
2. **Pick the PIC based on proximity, not seniority.** Who has the best information? Who is the most accountable for the outcome on the ground? Who will feel the result in their bones if it goes wrong? That's your PIC. Not the VP two levels up.
3. **Give the PIC real authority.** Backed by priority support from every function they need. The PIC is not a coordinator. The PIC is the decision-maker.
4. **Make sure the PIC has full context.** That's the senior person's job. Not to make the decision — to make sure the decision-maker has the full picture. Mission, constraints, trade-offs, priorities across the company.
5. **Don't override by default.** If you disagree with the PIC, surface it on the whiteboard and work through the reasoning with them. Override only when the reasoning itself breaks down. Overriding by rank destroys the whole model.
6. **Keep the PIC's name attached to the outcome.** Good or bad. Accountability runs both ways — PICs earn credibility for hard calls that worked, and they earn a rough staff meeting when a call didn't.

## Examples

**Situation:** A new initiative is launching — say, a DGX Cloud product. Multiple functions are involved: silicon, systems, software, go-to-market, partnerships.

**Application:** On day one, Jensen names a PIC. One name. That person owns the mission outcome — ship DGX Cloud. They have priority access to everything they need, report directly to Jensen on the work, and carry the weight of his authority into every other function they touch. When Jensen asks about DGX Cloud in a staff meeting, he asks for the PIC by name. "Where is this on DGX Cloud?" — not "where is operations on DGX Cloud?" The PIC answers.

**Result:** Accountability is unambiguous. Nobody hides behind "the team is looking into it." If a roadblock appears, the PIC calls it out. If the roadblock is in another function, the PIC walks across the building — or pages Jensen, who walks across the building with them. The decision happens at the edge, fast, where the information actually is.

**Situation:** A six-hour e-staff meeting. A general manager is giving a status update. Jensen hears something that sounds like a missed goal or a roadblock. In a normal company this becomes a note-to-self, an action item, a meeting-about-a-meeting next week.

**Application:** Jensen moves to solve the problem then and there. He calls the head of software, a mid-level engineer, whoever has the actual information. It doesn't matter what their level is. He pulls them into the conference room. Whoever is closest to the problem — the PIC of that piece — is now in the room and making the call. "What's the fix? What's the timeline? What do you need?" Then the room commits.

**Result:** The decision gets made in minutes, not weeks. And every junior person in the room has just learned how Jensen reasons through a problem — which, by the way, empowers them to act the same way when they're the PIC on their own piece.

## Anti-Patterns (tactical)

**Don't:** Make the most senior person in the room the PIC by default.
**Why:** The most senior person is usually the furthest from the ground truth. They're the last to hear about the customer pain point, the shipping issue, the engineer who's stuck. Senior should mean "best at helping the PIC succeed," not "auto-decider." Make the person closest to the information the PIC. That's the whole point.

**Don't:** Allow the answer "the team is working on it."
**Why:** A team is not accountable. A team cannot be paged at 11 pm. A team cannot be called into a staff meeting. A team can diffuse responsibility indefinitely. If a deliverable has no PIC, it has no actual owner. Ask for the name every time. If nobody can produce one, that is the first problem to fix.

**Don't:** Name a PIC and then require them to escalate every decision.
**Why:** That's not a PIC. That's a proposal-writer who drafts decisions for someone else to sign. The PIC must be able to say "we're doing this" and have the organization act on that. If they don't have that authority, nobody is the PIC — it's just a badly-disguised committee.

**Don't:** Override the PIC in the hallway.
**Why:** If you disagree, take it to the whiteboard. Make the reasoning visible in front of everyone. If you override quietly, the PIC loses credibility inside their team, the team stops believing the PIC model is real, and the next project reverts to chain-of-command by default. Culture is set by what senior people do in the hard moments, not what they say at all-hands.

**Don't:** Use PIC language without doing the other work that makes it function.
**Why:** PIC requires information to flow fast (Top 5 emails), requires context to be shared in public (staff meeting as town hall), requires problems to be visible (whiteboard, not slide deck), and requires people to be able to hear "that's wrong" without it ending their career (intellectual honesty). Without those, PIC is vocabulary, not operating system.
