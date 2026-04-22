---
triggers:
  - "user is shipping continuously and feature velocity is high but nobody notices"
  - "user is debating continuous deployment vs. coordinated launches"
  - "user killed a feature because the data looked bad after a week"
  - "user asks how to create urgency and deadlines for a team"
  - "user asks how Apple or Airbnb do big launch moments"
  - "user says 'we have no marketing' or 'PR/marketing is an afterthought at our company'"
use_when:
  - "you're running a consumer product where discovery and storytelling matter"
  - "you have an engineering-heavy culture that ships code without coordinating the narrative"
  - "the team is optimizing metrics but the product has no coherent story"
  - "you want to create a forcing function that aligns design, engineering, and marketing"
fails_when:
  - "the product is broken — stacking bricks on a cracked foundation just collapses louder"
  - "you ship big launches with nothing new to say, and the launch eats its own credibility"
  - "you starve the 20% of continuous improvement work that keeps the experience healthy between launches"
related:
  - "storyboard-and-blueprint.md"
  - "eleven-star-experience.md"
  - "design-is-how-it-works.md"
---

# Stacking the Bricks — Start with Marketing, Not Engineering

## When to Use
- You're shipping code continuously and nothing breaks through. Features exist, but users don't know they exist.
- You're debating whether to do coordinated launches or continuous deployment.
- You're trying to align engineering, design, and marketing around the same story and deadline.
- You're losing features to the "data says it doesn't work" trap after one or two weeks.

## Fails When
- The core product isn't good yet. Stacking bricks on a cracked foundation just collapses louder. Fix the core first, then launch.
- You do the big launch but there's no real story — you've stacked pebbles, not bricks. The ritual turns into noise.
- You skip the 20% of continuous optimization between launches. The core experience rots in the gaps.

## Core Concept

Steve Jobs had a concept he called stacking the bricks. If you have a pile of bricks and you lay them on the ground, no one will notice. But if you stack them vertically you create a tower, and everyone notices the tower. That was the theory behind launches. A launch is a coordination mechanism. A launch is a marketing moment. A launch is a deadline that drives urgency.

A lot of technology companies ship code continuously. And on paper, that sounds great — agility, iteration, velocity. But here's what happens. Data is ubiquitous. Everyone can go in different directions. They can ship continuously. And the problem is there's no cohesive product vision. There's no central editing of quality and standards. Twenty teams don't work together. Each one optimizes their own metric, and the product fragments.

So we flipped it. About 80% of what we ship at Airbnb ships in two big releases a year — May and November. About 20% is continuous optimization. The two big moments coordinate the entire company. They give us a deadline that drives urgency. If you want people to work harder, have a launch deadline. Make the thing crazy ambitious and check every week.

And here's the second flip. A lot of product development starts not with design — and definitely not with engineering — but with marketing. The typical tech company flow is: engineers build something, designers make it look nice, marketers figure out how to talk about it. We reverse the entire sequence. We start with the story. What is the narrative? Product marketing defines what we're building and why. Then designers create the experience. Then engineers build it. Then we ship it as a coordinated launch.

Why? Because a lot of products fail not because they're bad but because they're not well marketed. If you ship a feature and no one knows, did it really matter? A lot of times people give up on features too soon. They ship something, the data says it doesn't work, they kill the feature. Well — did you tell people about it? Do they even know it exists? You can measure the health of an organization by the relationship between marketers and engineers. In most companies, marketers are like waiters and engineers are like chefs. If the waiter goes in the kitchen, the chef yells at them. That is not a great relationship. The best thing for engineers is to pair them with great design and marketing from the very beginning. Otherwise it's like running and one of your legs is shorter than the other. You're not going to go very fast.

## How to Apply

1. **Pick two big launch windows a year.** For us it's May and November. Pick yours and commit. These become the forcing function for the whole company.
2. **Budget 80% / 20%.** Roughly 80% of product ships inside the two coordinated launches. About 20% is continuous optimization, fixes, quality work between them.
3. **Start with marketing, not engineering.** Before anyone touches code, product marketing defines what we're building and why. What is the narrative? If you can't tell the story, you're not ready to build.
4. **Then design. Then engineering.** Designers shape the experience against the narrative. Engineers build it. Marketing is not a service org at the end — it set the frame at the start.
5. **Make the deadline crazy ambitious.** If you want people to work harder, have a launch deadline. Make it public internally. Check every week.
6. **Before killing a feature, ask: did we tell people?** A lot of features "fail" because nobody ever told users they exist. Before you kill it, make sure you actually marketed it.
7. **Have one shared roadmap.** Not one per team. One for the company. Everyone rowing in the same direction. If every team has their own, the coordinated launch devolves into twenty small launches that nobody can see.
8. **Review before it ships.** The CEO, as chief editor, reviews all the major work. Not to micromanage — to ensure the bricks are stacked, not scattered.

## Examples

**Situation:** Airbnb had noticed that the original use case — staying in someone's home, a shared room, the thing the company was literally founded on — was slowing. We'd been optimizing for entire homes. The host profile had been neglected. The shared-room experience was fading.

**Application:** We didn't just ship a "fix the profile" feature and hope someone noticed. We started with marketing. What's the story? We looked for historical references. What's the equivalent of a profile combined with travel? A passport. So we designed the Host Passport — a profile with animation, a real sense of identity. Then we noticed hosts had bad photos, so we built an operation to take professional headshots of 40,000 hosts. Then we stacked it into the May launch with Airbnb Rooms. One coordinated moment. One story.

**Result:** People actually noticed. If we'd just shipped "Host Passport v1" continuously into the app, nobody would have seen it. Instead we had a marketing moment, a clear narrative, and forty thousand hosts with professional photos going live on the same day. That's a tower. Not a pile of bricks.

**Situation:** Before I changed how we worked, Airbnb had divisionalized and was shipping continuously. The app changed less as we shipped more. Costs went up. There was no coherent product vision, no central editing, no tower — just a pile.

**Application:** I blew it up. One functional org. One shared roadmap. Two big launches a year. Marketing involved from day one. Engineering and marketing partnered instead of adversaries. I reviewed every major thing before it shipped. People said it would be a bottleneck.

**Result:** It turns out it massively sped up decisions. Decisions don't swirl at large companies when there's a clear decision-maker. People used to wait months for a decision. Now it happens every week. And the product finally changed. We went from break-even to nearly four billion in free cash flow the next year.

## Anti-Patterns (tactical)

**Don't:** Ship code continuously without coordination.
**Why:** Data is ubiquitous, everyone goes different directions, they ship continuously, and there's no cohesive product vision. No central editing of quality and standards. Twenty teams don't work together. You end up with a pile of bricks on the ground. Nobody notices.

**Don't:** Kill a feature because the first week's data looks bad.
**Why:** A lot of products fail because they're not well marketed. If you ship a feature and no one knows, did it really matter? Before you kill it, ask: did you tell people about it? Do they even know it exists? A feature that nobody heard about didn't fail — it never launched.

**Don't:** Let marketing be the last step.
**Why:** In most companies, marketers are like waiters and engineers are like chefs. If the waiter goes in the kitchen, the chef yells at them. That's not a great relationship and it guarantees that the story is bolted on at the end. You start with the story. Engineers and designers build against a narrative that marketing defined. That's the only way the launch becomes a tower.

**Don't:** Skip the 20% between launches.
**Why:** The two big launches are the tower, but the 20% of continuous optimization is the foundation. Quality work, bug fixes, the steady grind on the core experience — that's what keeps you worthy of the next launch. Starve the 20% and the 80% collapses.

## Direct Quotes from Brian

> "Steve Jobs had a concept he called stacking the bricks. If you have a pile of bricks and you lay them on the ground no one will notice. But if you stack them vertically you create a tower and everyone notices."

> "Data is ubiquitous, everyone can go different directions, they can ship continuously, and the problem is there's no cohesive product vision. There's no central editing of quality and standards. 20 teams don't work together."

> "A lot of product development starts not just with design but with marketing. We want to actually have a vision and figure out how to tell a story."

> "A lot of products fail because they're not well marketed. If you ship a feature and no one knows, did it really matter? A lot of times people give up on features too soon. They ship something, the data says it doesn't work, they kill the feature. Well, did you tell people about it?"

> "If you want people to work harder, have a launch deadline. Make the thing crazy ambitious and check every week."

> "You can measure the health of an organization by the relationship between marketers and engineers. In most companies, marketers are like waiters and engineers are like chefs. If the waiter goes in the kitchen, the chef yells at them."

> "It's like running and one of your legs is shorter than the other. You're not going to go very fast."
