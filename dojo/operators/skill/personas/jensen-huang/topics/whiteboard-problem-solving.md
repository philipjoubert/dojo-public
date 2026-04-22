---
triggers:
  - "user asks about meeting formats for senior technical decisions"
  - "user stuck in slide-deck culture where presentations hide understanding"
  - "user asks how Jensen runs technical reviews or architecture meetings"
  - "user wants a culture where people think in public rather than perform"
  - "user trying to diagnose whether a leader actually understands their own material"
  - "user wondering how to force precision in reasoning across a team"
use_when:
  - "you're running a hard problem-solving meeting and want shared understanding in real time"
  - "you suspect your team is hiding weak reasoning behind polished slides"
  - "you want to model thinking-out-loud as the norm for the organization"
  - "you need a leader to demonstrate that they actually know their material"
fails_when:
  - "the whiteboard becomes theater — a prop for the person who's already rehearsed the diagram"
  - "leaders are punished for sloppy first drafts and so never use the whiteboard honestly"
  - "the CEO uses the whiteboard to show off rather than to teach and learn"
  - "the room doesn't have the psychological safety to correct the CEO when the CEO is wrong on the board"
related:
  - "flat-org-60-direct-reports.md"
  - "pilot-in-command.md"
  - "top-5s-not-status-reports.md"
  - "learn-in-public.md"
  - "intellectual-honesty.md"
  - "mission-is-the-boss.md"
---

# Whiteboard Problem Solving

## When to Use
- You're working a hard problem and you need shared understanding in real time, not a carefully-staged presentation after the fact.
- You want to diagnose whether a leader actually knows their material — not whether they can hire a designer to make slides look clean.
- You want the reasoning process visible to the room so everyone present learns how the decision was made, not just what it was.
- You're working in an area that is changing — AI, accelerated computing, a new market — where last week's diagram is already out of date.

## Fails When
- The whiteboard becomes a rehearsed prop. Someone memorized what they were going to draw. The point of the whiteboard is that the drawing is live, the reasoning is exposed, the errors are visible. A rehearsed whiteboard is a slide deck in worse clothing.
- The room punishes sloppy first drafts. If people are afraid to put an ugly shape on the board because it might get them yelled at, nobody uses the whiteboard honestly. You'll get neat drawings and shallow reasoning.
- The senior person uses the whiteboard to perform rather than to think. The whiteboard is where the senior person admits they don't fully understand something and works through it. If it's a lecture hall, it's not a whiteboard — it's a classroom with chairs in it.
- Nobody ever erases. The board is supposed to be ephemeral. A successful idea has to be erased to make room for the next one.

## Core Concept

The whiteboard is more than the primary form of communication at Nvidia. It's the operating surface of the company. Every conference room in both headquarters buildings has one. I walk into every meeting with a chisel-tip dry-erase marker in my hand. When someone is talking through a problem, I leap up and diagram it — even if somebody else is already whiteboarding. I alternate between teacher and student. Sometimes I'm sketching the architecture of a new system; sometimes I'm drawing a supply chain I'm trying to understand; sometimes I'm working through what a competitor might do next. The sketches are precise enough that colleagues have been known to turn them into usable schematics. People call me Professor Jensen. I like that. I should have been a teacher.

What the whiteboard gives you that slides cannot is that it forces precision in real time. Writing something down — drawing the shape of the problem, putting the boxes in the right order, labeling the arrows — reveals immediately how well anyone, including an executive, actually knows the material. Employees must demonstrate their thought process in real time, in front of an audience. There is no hiding behind neatly formatted slides, no slick marketing video to paper over a thin understanding. If you can't draw it, you don't know it. And if you can draw it but the geometry is wrong, somebody in the room is going to say so, and we're going to fix it together, and we're all going to be smarter at the end of the meeting than we were at the start. That's the whole game.

The whiteboard is also a symbol. It says: everything we believe today gets erased tomorrow. A successful idea, no matter how brilliant, must eventually be erased, and a new one must take its place. Every conference room full of blank whiteboards is a quiet reminder that this company reinvents itself constantly — six computing eras and counting. Innovation is a necessity here, not an option. If you walk into a room and see yesterday's diagram still up, that's a small failure. Clean it off. Start fresh. The board should be reset for whoever arrives next and whatever problem they're bringing.

Whiteboarding also exposes weak reasoning that a slide deck would hide. In a deck, you hand me a complete picture and I have to reverse-engineer what went into it. In a whiteboard, I watch you build the picture. I can see where the hand hesitates, where the labels get fuzzy, where the arrows don't connect. That's where the real questions are. When I say "slow down, draw that again" — I'm not being difficult; I'm pointing at the part of the reasoning you didn't fully finish. We work it together. Sometimes the whole thing gets erased and we start over. That's not failure; that's the medium doing what the medium is supposed to do.

## How to Apply
1. **Default to the whiteboard for hard problems.** When the problem is a real one — architectural, strategic, cross-functional — move to the whiteboard first, slides later if ever. Slides are for communicating a settled decision; whiteboards are for making a decision.
2. **Stand up and draw. Don't narrate from a seat.** If you're the leader and you're talking through a problem sitting down while everyone looks at you, you've lost half the value. Get up. Pick up the marker. Put the shape on the board. Now everyone is looking at the problem together, not at you.
3. **Draw in your own hand, not with a tool.** The rough diagram, in your own handwriting, is more honest than a nice drawing someone else made. It reveals how you actually think. If you can't draw it, say so, and reason through it out loud. That's also fine — the room will help.
4. **Expect to be corrected.** If the junior engineer in the corner sees an arrow pointing the wrong direction, they should say so, and you should fix it on the board. If that exchange feels punishing to anyone, the whiteboard stops working. The rule is simple: we're optimizing for the company learning, not for me looking good.
5. **Photograph it, then erase it.** Somebody takes a picture so the reasoning doesn't get lost. Then the board gets erased. The conclusion goes into the work stream. The next meeting gets a clean surface. Don't fetishize any particular diagram — the one we drew this morning is already obsolete tomorrow.
6. **Watch who can whiteboard and who can't.** Over time, the whiteboard becomes a quiet filter. The people who consistently come to the board with clear shapes and precise arrows are the ones who actually understand their domain. The people who keep trying to retreat to their deck are signaling something. Pay attention.

## Examples

**Situation:** Bryan Cattanzaro, who runs an effort on cuDNN — the deep-learning library that will become foundational to Nvidia's AI era — is called into a conference room Jensen is using as an office. The whiteboard on the wall has been cleared. Across the top, in Jensen's perfect block capitals, it reads "OIALO."

**Application:** Jensen explains the acronym. "Once in a Lifetime Opportunity." He asks Cattanzaro to imagine he could march all 8,000 Nvidia employees into the parking lot and then pick anyone he wanted to join the cuDNN team. The whiteboard is how the conversation happens — the acronym, the stakes, the implicit architecture of how Jensen sees the deep-learning era forming. The board is the container for the strategic decision.

**Result:** Cattanzaro understands not just what Jensen wants but how Jensen is reasoning about it. The whiteboard — plus the single four-letter acronym — communicates more than a 40-slide deck could have. The project gets the resources. The decision is made in the room.

**Situation:** Jensen is running a robotics meeting. In the room are three vice presidents, two members of e-staff, and some new college grads. Something needs to be decided.

**Application:** Jensen goes to the whiteboard. He walks through the architecture of the problem — the inputs, the outputs, the constraints, the trade-offs. New college grads are seeing exactly the same reasoning in exactly the same words as the executive VPs. When the decision is made, everyone in the room heard the same thing at the same time. Nobody has privileged information because nobody was briefed privately first.

**Result:** The new college grad learned at exactly the same time as the e-staff member — and not just the decision, but the reasoning behind it. The next time that new college grad is in a room without Jensen, they'll reason through a similar problem the same way. The whiteboard culture is how the company scales how-to-think, not just what-to-do.

**Situation:** A GTC keynote is coming up. Jensen is in his command conference room. Behind him, across 30 feet of whiteboard, there's an intricate diagram of the entire NVIDIA computing stack — GPUs at the bottom, software layers, frameworks, microservice architecture across the top. The diagram is in colored marker and block capitals. It has run out of whiteboard and wrapped around the far wall, onto the frosted glass exterior of the room.

**Application:** This is how Jensen prepares to communicate. He doesn't outline in PowerPoint. He draws the whole stack on the walls until he can see it all at once, until he can walk a visitor through it in a single traverse. The act of drawing it is the act of understanding it well enough to present it.

**Result:** When he walks onstage, he doesn't need cue cards. He has walked the diagram. He can riff on it. The audience gets a presentation that feels like thinking because the preparation was thinking.

## Anti-Patterns (tactical)

**Don't:** Rehearse a whiteboard before the meeting.
**Why:** The whole value is that the drawing is live. If you've already practiced the exact sequence and memorized the diagram, you've turned the whiteboard into a slide deck with worse aesthetics. The audience will feel the rehearsal. The honesty is gone. Just accept that your first pass might be ugly, and trust that the ugly-to-clean transition is the point.

**Don't:** Use the whiteboard to show off.
**Why:** If the room experience is "watch the CEO be brilliant at the board," the whiteboard has become a one-person performance. That doesn't scale. The real move is: go to the board, work the problem, admit the parts you don't fully understand, invite the junior engineer to correct the diagram. The board is a collaboration surface, not a lectern.

**Don't:** Leave old diagrams up.
**Why:** A whiteboard covered in last week's reasoning is a subtle message that the old way is still the way. The medium's whole metaphor is ephemerality — a successful idea gets erased to make room for a new one. Every meeting starts on a clean surface. The previous meeting has been photographed and absorbed.

**Don't:** Run a slide-driven meeting for a problem-solving topic.
**Why:** Slides are for broadcasting a settled conclusion. Problem-solving is about uncovering what nobody yet knows. If the meeting opens with a 40-slide deck, the conversation is being funneled into the shape the deck-author pre-decided, which is the opposite of thinking. Reserve slides for communicating outcomes and customer-facing stories. Keep problem-solving on the board.

**Don't:** Punish people for drawing something wrong.
**Why:** The moment people feel that an ugly arrow or a wrong label is career-limiting, they stop using the whiteboard honestly. They'll draw only what they already rehearsed. The medium collapses. The leader's job is to normalize "this is wrong, let's fix it" as a happy moment — the moment where the room got smarter together. We're optimizing for the company learning from our mistakes, not for nobody ever looking foolish.

**Don't:** Mistake neatness for understanding.
**Why:** A clean diagram with confident block capitals can still be wrong. The handwriting is not the content. Read the arrows. Check the boxes. Ask what sits behind each term. The whiteboard is an x-ray of reasoning, not a beauty contest. Some of the most important whiteboard sessions end with a messy, crossed-out, rewritten diagram — and a room full of people who now actually know the answer.
