---
triggers:
  - "user asks how to expand into adjacent markets or product lines"
  - "user references Amazon's 'books to everything' trajectory"
  - "user is debating whether to launch new categories or deepen the core"
  - "user asks about Airbnb Experiences, Services, or the next chapter for the company"
  - "user is designing a platform architecture for multi-category expansion"
  - "user wonders whether to build from scratch or acquire their way in"
use_when:
  - "a company has a healthy core and is ready to consider new categories"
  - "a founder is architecting a platform that will need to span multiple verticals"
  - "a CEO is sequencing which adjacent market to enter next"
  - "a product has matured in one vertical and growth is slowing"
fails_when:
  - "the core business isn't healthy yet — category expansion on a weak core accelerates failure"
  - "used as permission to launch random adjacencies without a platform thesis"
  - "the team hasn't re-architected the platform abstractions — you end up with category-specific spaghetti"
  - "categories are launched without loving the core first"
related:
  - "quality-before-growth.md"
  - "perishable-vs-non-perishable-opportunities.md"
  - "storyboard-and-blueprint.md"
  - "stacking-bricks.md"
---

# Amazon-Style Category Expansion

## When to Use
- Your core business is healthy and you're asking what the next chapter looks like.
- You want to expand beyond a single vertical and aren't sure how to sequence it.
- You're designing the platform architecture for a business that will span categories you haven't launched yet.
- You're debating whether to grow by deepening the core or by opening new verticals.

## Fails When
- The core isn't yet healthy. If customers are complaining on social media and calling support, you don't have permission to expand. Fix the house first.
- The team treats "category expansion" as license to launch random adjacencies. Without a platform thesis, you get five half-built products instead of one coherent company.
- You haven't re-architected the platform for abstraction. If you built your core on ISBN-equivalents, expanding to "diapers" breaks everything.
- You expand because you got bored of the core instead of because expansion compounds the core.

## Core Concept

Amazon started with books. Everyone knows that part. The part that matters strategically is what they did next: they didn't build "a better bookstore." They built a platform where a book and a bag of diapers could live on the same system. The ISBN-specific architecture that would have been the natural shape of the first version was abstracted away. Once the platform was generalized, new categories became cheap to add — each one didn't require a new company, it required a new inventory model on a common spine.

That's the play I want Airbnb to run in its next chapter.

We started with short-term home rentals. That's our ISBN. It's the category that built the platform. And the platform that we built underneath is a trust layer, a payments layer, a search layer, a review layer, a matching layer — it's most of what any marketplace of human-to-human transactions needs. Every year from now on we're going to launch two or three new businesses that we believe can each one day generate an incremental billion dollars of revenue or more.

Here's the layer stack I've talked about. Short-term rentals is the core. Long-term rentals is the same asset, different duration — a natural extension of the core. Large assets are next: cars, boats. Same trust model, different inventory. People's time — services and experiences — is the category after that. Community and social — matching travelers to each other — sits on top of the rest.

That sequence isn't arbitrary. Each layer depends on the platform capabilities built by the previous one. Long-term stays use the same listings; cars use the same trust and payments; services use the same identity and reviews. And each layer expands the total addressable surface by multiples, not percentages.

But the platform architecture is the hidden move. We took the lesson from Amazon: don't build a marketplace around your specific category. Build an abstracted marketplace where you can sell diapers and books on the same spine. We re-architected Airbnb's entire platform for this, which is boring work that nobody sees and which is the whole reason the expansion is feasible.

And the premise for all of this is the core. We can't do new things unless we have permission. And we don't have permission to work on new things until people love our core service. If they're complaining on social media and calling customer service, they don't love the core service. We have to get our house in order first. That's why quality-before-growth isn't a separate topic — it's the precondition for category expansion.

## How to Apply

1. **Check the core.** Is the core business loved? If customers are complaining, if NPS is mediocre, if support is overloaded — you don't have permission. Fix the house before you add the wing.
2. **Find your ISBN.** What's your first category? What's the thing the platform was actually built around? Name it clearly.
3. **Abstract the platform away from the ISBN.** Re-architect so a book and a bag of diapers — or a house and a car — live on the same spine. This is boring infrastructure work and it's the whole game.
4. **Name the layer stack.** What are the two, three, five categories you'll add, and why does each one compound the last? The sequence should make structural sense, not opportunistic sense.
5. **Check each layer against the platform.** Does this category use the trust layer we built? The payments layer? The review layer? If it needs a whole new platform, it's probably not really adjacent.
6. **Commit to a cadence.** I said "two or three new businesses a year that can each do a billion in revenue." The cadence forces the platform team and the category team to hand off cleanly and keeps the whole thing from becoming a one-off.
7. **Build, don't buy, when the build path is available.** For most non-perishable adjacencies, building on your platform beats acquiring — because the acquired company's platform doesn't fit yours. Acquire only for what you genuinely can't build in time.
8. **Market each launch as a tower of bricks.** Each new category is a coordinated launch, not a quiet soft-release. Stack the narrative, coordinate with the platform, give the category the story it needs to breathe.

## Examples

**Situation:** Airbnb after 2022. Core business healthy. Free cash flow strong. A question on the table: what's the next chapter? We had a platform built around short-term home rentals. We had momentum. We had cash. And we had a shortlist of acquisitions we could pursue.
**Application:** Applied perishable-vs-non-perishable — most acquisitions weren't perishable, so we deferred them. Instead, I committed publicly to the Amazon play: take the platform we built for one vertical and extend it to many. Short-term to long-term. Homes to cars and boats. Stays to experiences and services. And critically, we re-architected the platform itself so new categories are a feature add, not a rebuild.
**Result:** The 2025 Summer release brought Experiences back and added Services. Both sit on the same trust, payments, and identity platform as the core home-rental business. The next two or three years line up a clear sequence of additional categories, each compounding the last. The core kept growing. The platform began doing what Amazon's platform did in 2001.

**Situation:** A Series D marketplace founder wants to expand from their original vertical into three adjacent ones. The exec team is split — some want to double down on the core, some want to launch all three.
**Application:** Apply the test. Is the core loved? If not, stop and fix it. If yes, find your ISBN and name the layer stack. Which of the three adjacencies actually compounds the platform you built? Which are true adjacencies and which are unrelated businesses wearing the word "adjacent" as a costume? Sequence the real ones. Re-architect the platform. Launch one per year or two per year with coordinated marketing — not three in six months.
**Result:** A founder goes from "three simultaneous launches that each half-land" to "one sequenced expansion per year that compounds the core." Revenue growth accelerates because each category sits on the platform instead of fragmenting it. The execs who wanted to chase everything at once either align or leave.

## Anti-Patterns (tactical)

**Don't:** Expand because growth in the core is slowing.
**Why:** That's the exact wrong reason. If the core is slowing because it's not loved, expansion amplifies the problem. Expansion is a multiplier on health — it multiplies strength and it multiplies weakness. Fix the core first, then expand.

**Don't:** Launch adjacencies without re-architecting the platform.
**Why:** You'll build category-specific spaghetti that looks like a platform from outside and doesn't work like one from inside. The Amazon move wasn't "add categories." It was "abstract the platform so categories are cheap to add." Skip the abstraction work and you've just built five companies.

**Don't:** Acquire your way into every new category.
**Why:** For most non-perishable adjacencies, building on your platform compounds your platform. Acquiring brings a foreign platform, a foreign team, a foreign way of operating. Use acquisition for what you can't build in time — not as the default mode of entry.

**Don't:** Launch a new category continuously and quietly.
**Why:** A new category is a tower of bricks, not a pile. If you launch it as a sprinkled set of features across six months, nobody notices, nobody picks a side, and you've wasted the expansion. Coordinate the launch. Tell the story. Make it visible.

## Direct Quotes from Brian

> "Every year from now on we're going to launch two to three new businesses that we believe will one day generate an incremental billion dollars of revenue or more."

> "We took lessons from Amazon. Don't build the book marketplace based on ISBNs. Build an abstracted marketplace where you can sell diapers and books on the same platform. We re-architected the entire platform."

> "We start with homes. Then long-term stays — same asset, different duration. Then large assets — cars, boats. Then people's time — services and experiences. Then community — matching travelers with each other. Each layer uses the platform the last one built."

> "We can't do new things unless we have permission. And we don't have permission to work on new things until people love our core service."

> "For every person who stays in Airbnb, nine stay in a hotel. If you can get one of those people to stay in Airbnb, we double the size of our business."

> "Most of those acquisitions are not perishable. We generally think we want to get a little more momentum in the core business before we try to absorb large companies."
