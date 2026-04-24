---
triggers:
  - "user is designing a new product and asks where to start"
  - "user has engineering build something and now wants marketing to 'figure out how to position it'"
  - "user asks about press releases or narratives at the start of a project"
  - "user references screenplay method, Pixar, Amazon working-backwards, or press-release-first"
  - "user is killing a feature because data looks bad"
  - "user asks why a feature nobody knows about isn't taking off"
  - "user complains that marketing is an afterthought"
use_when:
  - "a team is about to start a new product or major feature and hasn't written the story yet"
  - "the engineers want to start building before the narrative exists"
  - "a feature ships and nobody uses it and the team is about to kill it"
  - "marketing is treated as a waiter taking orders from engineering"
fails_when:
  - "the narrative is written but the product can't deliver it — story without substance is a lie"
  - "used by a founder with no design or product sensibility — the 'story' becomes a marketing-speak mad-lib"
  - "applied to a small internal tool or infra project where there's no external narrative to write"
  - "used once, performatively, and then abandoned when the build gets hard"
related:
  - "stacking-bricks.md"
  - "storyboard-and-blueprint.md"
  - "design-is-how-it-works.md"
  - "eleven-star-experience.md"
---

# Start with Marketing, Not Engineering

## When to Use
- You're about to start a new product or a major feature and someone is already writing Jira tickets.
- You want to avoid the trap where engineering ships something and marketing is asked to "figure out how to talk about it."
- You're killing features after a week of bad data and wondering why nothing is landing.
- You're trying to change a culture where marketing shows up last and feels like a service org.

## Fails When
- The narrative is written but the product can't actually deliver it. Story without substance is a lie, and customers feel it in the first ten seconds.
- The founder has no design or product judgment. Starting with marketing becomes writing marketing-speak that sounds right and means nothing.
- You apply this to internal tools or pure infra where there is no external audience and no story to write. Use it where there's a customer on the other end.
- You do it once, feel awkward, and revert to engineering-first on the next project.

## Core Concept

In most tech companies, the sequence goes: engineering builds something, designers make it look nice, marketers figure out how to talk about it. That's the wrong sequence. We flipped it.

At Airbnb, a lot of product development starts not with design — and definitely not with engineering — but with marketing. We want to actually have a vision and figure out how to tell a story. Product marketing defines what we're building and why. Then designers create the experience. Then engineers build it. Then we ship it as a coordinated launch.

The reason matters. A lot of products fail not because they're bad but because they're not well marketed. If you ship a feature and no one knows, did it really matter? A lot of times people give up on features too soon. They ship something, the data says it doesn't work, they kill the feature. Well — did you tell people about it? Do they even know it exists? A feature that nobody heard about didn't fail. It never launched.

The way we apply this concretely: before anyone writes code, we write the story. I've done it as a press release. I've done it as a screenplay — literally, scene-by-scene, the way you'd write a movie. I've borrowed the Hero's Journey from Joseph Campbell: the customer starts in their ordinary world, something is missing, they cross a threshold into a new magical world, they're challenged, they're helped by something, they come back transformed. Every great product narrative maps onto that. If you can't write your product's story that way, you don't understand the product yet.

Once the story exists, you can evaluate the design against it. Does this screen serve the story? Does this policy serve the story? Does this feature serve the story? Every screen, every policy, every touchpoint either advances the narrative or contradicts it.

And there's an operating reason to do this, not just a creative one. You can measure the health of an organization by the relationship between marketers and engineers. In most companies marketers are like waiters and engineers are like chefs — the waiter goes in the kitchen and the chef yells at them. Starting with marketing makes them partners instead of adversaries. Engineering is building toward a shared story that marketing owns. That's a very different collaboration than "here's what we built, now please position it."

## How to Apply

1. **Write the story before anyone writes code.** Press release. Screenplay. Blog post. Keynote slide. Pick a format and write the narrative of what this is going to feel like for a customer.
2. **Use the Hero's Journey as a scaffold.** Ordinary world. Call to adventure. Crossing the threshold. Challenges. Helpers. Transformation. Return. If your product doesn't fit this shape, you don't have a story yet.
3. **Put product marketing at the front, not the end.** Product marketing — what Apple calls product marketing, merging what most companies split into PM and outbound — owns the "what and why" before the "how."
4. **Engineers build against the narrative.** The narrative is the spec before the spec. Every feature has to answer: does this serve the story the customer is going to be told?
5. **Design evaluates against the narrative.** Every screen either advances the story or breaks it. If a screen doesn't fit, either fix the screen or fix the story, but don't ship the mismatch.
6. **Pair the narrative with a coordinated launch.** A launch is a story moment. You're stacking bricks into a tower so people can see it. Don't waste a narrative by shipping it invisibly.
7. **Before you kill a feature, ask: did we tell people?** A lot of features "fail" because nobody marketed them. Before you kill it, market it.
8. **Marketing, design, engineering in the room from day one.** Not a handoff chain. A standing collaboration where all three legs of the stool are shaping the same story.

## Examples

**Situation:** Airbnb had a new vision for Rooms — renting just a room in someone's home, which is literally how we started. The original use case had been slowly dying under our attention to entire homes. We had product and engineering work queued up. We had no story.
**Application:** We started with the story. What was this going to feel like to a guest? What was the identity of the host? We designed the Host Passport — a profile with animation, a real sense of identity, a historical reference to actual passports. We took professional photos of 40,000 hosts. We wrote the narrative before the product. We coordinated the launch with the May release.
**Result:** The launch actually landed. People noticed. Not because any single feature was magical in isolation, but because there was a coherent story — the host, the passport, the room, the reason to stay — that all the features served. If we'd shipped "Host Passport v1" as a quiet continuous release, it would have died in the app.

**Situation:** A founder has engineering-led product development. They ship features continuously. When they ship something big, the marketing team is asked to "figure out how to launch it" with three days notice. Features die in the app because nobody tells anyone.
**Application:** Reset the sequence. Product marketing leads the next release. Write the narrative for the release first — press release format works. Designers shape the experience against the narrative. Engineering builds against the design. Marketing owns the launch moment from day one because they owned the story from day one.
**Result:** The next release actually lands. The narrative was written far enough in advance that the rest of the company could build toward it. Marketing stops feeling like a waiter. Engineering stops feeling like their work disappears into silence. They're working on the same story.

## Anti-Patterns (tactical)

**Don't:** Build the thing and then ask marketing to "make it a story."
**Why:** At that point the architecture, the flows, and the scope are all fixed. Marketing can only put lipstick on what already exists. The story had to exist before the constraints hardened. After the build, you're narrating, not designing.

**Don't:** Kill a feature because week-one data is bad.
**Why:** A lot of features fail because nobody told anyone. Before you kill it, ask: did we actually market this? Does the user know it exists? If the answer is no, the feature didn't fail — you never launched it. Launch it first, then decide.

**Don't:** Let marketing show up three days before ship.
**Why:** At that point the narrative is impossible to shape. You're doing PR, not marketing. Put the story first and marketing at the front of the process, not at the tail.

**Don't:** Write a story the product can't deliver.
**Why:** A beautiful narrative that the product contradicts in the first screen destroys trust. Users feel the mismatch before they can name it. The story has to be earned by the product. Don't write a check the build can't cash.

## Direct Quotes from Brian

> "A lot of product development starts not just with design but with marketing. We want to actually have a vision and figure out how to tell a story."

> "A lot of products fail because they're not well marketed. If you ship a feature and no one knows, did it really matter? A lot of times people give up on features too soon. They ship something, the data says it doesn't work, they kill the feature. Well, did you tell people about it?"

> "We studied this thing called the Hero's Journey that Joseph Campbell created. The customer starts in their ordinary world, something is missing, they cross a threshold, they have adventures, they're transformed, they come back. That's every movie. It's also the promise of great travel."

> "You can measure the health of an organization by the relationship between marketers and engineers. In most companies, marketers are like waiters and engineers are like chefs. If the waiter goes in the kitchen, the chef yells at them."

> "It's like running and one of your legs is shorter than the other. You're not going to go very fast."

> "The best thing for engineers is to pair them with great design and marketing from the very beginning."
