---
triggers:
  - "user is excited about a technology and asking what to build with it"
  - "user is choosing between technical approaches before defining the experience"
  - "user is doing 'AI-first' or 'blockchain-first' or any-tech-first product development"
  - "user is explaining their product in terms of specs"
  - "user can't describe the customer experience without mentioning the tech stack"
use_when:
  - "you're at the start of a new product, feature, or company"
  - "an engineering team is building something cool in search of a customer"
  - "you're evaluating which technology to adopt for a product"
  - "you're reviewing a product spec that leads with implementation details"
fails_when:
  - "you're in a pure R&D or infrastructure context where the technology itself is the deliverable"
  - "the 'experience' is a fiction the team can't actually build with any technology — starting with experience still has to respect physics"
  - "used as an excuse to ignore technical constraints entirely; you still have to make electrons do what you want"
related:
  - "design-is-how-it-works.md"
  - "own-the-whole-widget.md"
  - "insanely-great.md"
---

# Start with the Customer Experience, Work Backwards to the Technology

## When to Use
- You're beginning any new product, feature, or service.
- An engineering team has built something interesting and is now looking for problems to solve with it.
- You're deciding which technology stack or platform to pursue and can't yet describe what the user will feel.
- You're reviewing a product spec that begins with "we'll use X technology" rather than "the user will experience X."
- Someone on your team is pitching a feature whose defense is technical elegance, not customer benefit.

## Fails When
- You're building pure infrastructure for developers, where the "experience" is another engineer's API call.
- You use the idea to paper over engineering constraints the team genuinely can't solve. You still have to make the physics work — you just don't start there.
- The team articulates an "experience" so vague it doesn't constrain the technical decisions. "Delightful" isn't an experience. Specificity matters.

## Core Concept

Here's a mistake I've made more than anybody: starting with the technology and trying to figure out where to sell it.

You've got to start with the customer experience and work backwards to the technology. Not the other way around. This sounds obvious, but almost everyone gets it wrong. Engineers get excited about a technology — a faster chip, a new material, a clever algorithm — and then go looking for problems to solve with it. That's backwards.

When we designed the original Macintosh, we didn't start by saying "let's use the Motorola 68000 processor and figure out what to do with it." We started by saying "what if using a computer could be as natural as pointing at something?" The graphical user interface wasn't a technology looking for a market. It was a customer need — the need for computers to be accessible to ordinary people — that we worked backward from until we found the technology that could deliver it.

The iPhone started the same way. We didn't look at the mobile phone market and say "how can we add features to compete?" We looked at every mobile phone and said: these all suck. They were hard to use. The buttons were in the wrong places. The software was confusing. So we asked: what would it be like to use a phone that was actually designed for humans? What if there were no buttons, just a beautiful screen you could touch directly? What if getting to your music or your photos or your email was simple and obvious? Start with that experience, then figure out the technology needed to make it real.

This isn't a preference. It's a sequence. The technology cannot tell you what to build. The customer experience has to tell you what to build, and the technology has to serve it. When it's the other way around — when engineering is trying to find uses for the thing they already built — you get products that are impressive on a spec sheet and forgettable in a customer's hand.

## How to Apply

1. **Define the experience in one sentence a customer would understand.** No technology in the sentence. "What if using a computer could be as natural as pointing at something?" "What if a phone had no buttons, just a beautiful screen you could touch?" If you can't write that sentence, you haven't started.

2. **Write the customer's first five minutes.** What does the box look like when they open it? What do they plug in? What do they see first? What do they try to do? What just works? Answer this before a single architecture decision is made.

3. **Work backwards to constraints.** Once the experience is clear, now ask: what does the hardware have to be? What does the software have to do? What can we eliminate because it doesn't serve the experience?

4. **Refuse technology-led decisions.** When someone says "we should use X because it's powerful," the right response is "what experience does it enable that we can't deliver another way?" Power in isolation is not a reason.

5. **When physics says no, wait or change technology — don't ship a compromise.** Sometimes the experience you want can't be delivered yet. The right answer is "not now" or "different technology" — never "the experience we actually wanted, minus 20%."

6. **Watch for backward rationalization.** Engineers are very smart. If you ask "what experience does this technology enable," they will produce an answer. It's your job to tell the difference between a real experience-first answer and a retrofitted one.

## Examples

**Situation:** A team has built a powerful ML model and is now trying to figure out what to ship with it. Every meeting starts with what the model can do.
**Application:** Stop the meetings about the model. Start a meeting about the customer. Who are they? What are they trying to do today? What is painful about doing it? What would it feel like if it were effortless? Now — does the model help deliver that effortless experience? If yes, build backwards. If no, either the customer is wrong or the model is.
**Result:** Either a real product emerges because the model actually enables an experience customers want — or you discover the model was a solution looking for a problem and the team pivots before shipping something nobody uses.

**Situation:** A startup wants to use a novel blockchain architecture for a consumer app. The pitch is entirely about the technical elegance.
**Application:** Ask: what is the customer experience that would be impossible without this architecture? If the answer is "lower transaction fees" or "no central server," those are infrastructure wins — describe them as experiences. Does the customer feel them? How? If the customer's experience is identical to a traditional app, you chose the technology for you, not for them.
**Result:** Either the team finds the real experience hook (and the architecture is load-bearing), or they realize they were building to impress other engineers, and rebuild around what the user will actually do.

**Situation:** The first iMac team. The question is "how do you get people online?"
**Application:** Describe the experience. You take the box home. You open it. You plug in one cable — power. You plug in one cable — internet. You turn it on. You're on the web. That's the experience. Now work backwards: the modem has to be integrated. The setup wizard has to know the ISP exists. The cable has to be easy to find on the back. Every part of the machine — hardware, software, packaging — has to be designed to deliver those first five minutes.
**Result:** The iMac ships with one of the most celebrated setup experiences in consumer electronics history. Because the experience was defined first, every engineering decision either served it or got killed.

## Anti-Patterns (tactical)

**Don't:** Lead the product review with architecture diagrams.
**Why:** The first conversation should be about the user's journey — what they see, what they feel, what just works. Architecture is the *result* of experience decisions, not the starting point. If the review starts with architecture, it'll end with a spec sheet, not a product.

**Don't:** Add features because the technology supports them.
**Why:** "We can, therefore we should" is how products get bloated. Every feature should earn its place in the customer's experience. "The AI could also do X" is not a reason for X to exist.

**Don't:** Ship a compromised experience to hit a date.
**Why:** The experience is the product. A compromised experience is a different product than the one you promised. Better to slip the date and ship the thing, or to redefine the experience to something you *can* deliver, than to ship something that approximately matches the vision.

**Don't:** Hide behind "the user research showed..."
**Why:** Users can't envision breakthrough products. They can describe incremental improvements to things that already exist. Research is a check on your vision, not a replacement for it. If your experience is something no one has seen before, no survey will tell you whether it works.

## Direct Quotes from Steve

> "You've got to start with the customer experience and work backwards to the technology. Not the other way around. … You can't start with the technology and try to figure out where you're going to sell it."

> "A lot of times people don't know what they want until you show it to them."

> "A computer is the most incredible tool we've ever seen. It can be a writing tool, a communications center, a supercalculator, a planner, a filer and an artistic instrument all in one, just by being given new instructions."

> "We didn't just want to help people do word processing faster or add numbers faster. We want to change the way they can communicate with one another."

> "Designing a product is keeping 5,000 things in your brain, these concepts, and fitting them all together and kind of continuing to push to fit them together in new and different ways to get what you want."
