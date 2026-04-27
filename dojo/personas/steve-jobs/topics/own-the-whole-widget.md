---
triggers:
  - "user is debating whether to build vertically or use third parties"
  - "user's customers blame different parts of the experience on different vendors"
  - "user's support queue is full of 'that's not our bug'"
  - "user is considering licensing their software to other OEMs"
  - "user asks about Apple's integrated approach"
use_when:
  - "the customer experience depends on multiple components working in concert"
  - "you're deciding whether to use off-the-shelf hardware, OS, or services that shape the experience"
  - "your team is blaming component vendors for customer problems"
  - "you're considering whether to keep your core experience in-house or license it out"
fails_when:
  - "the integration isn't actually load-bearing on the customer experience — vertical for vertical's sake is just vanity capex"
  - "your scale or capital can't support multiple in-house stacks and you'd ship a worse integrated product than a good third-party combination"
  - "the category is genuinely commoditized and the component actually is a commodity"
related:
  - "start-with-experience.md"
  - "design-is-how-it-works.md"
  - "insanely-great.md"
  - "product-people.md"
---

# Own the Whole Widget

## When to Use
- You're deciding whether to build a component yourself or use a third-party version.
- Support tickets are stuck because "that's a browser bug" or "that's a database issue" and nobody owns the customer's problem.
- You're pitched on licensing your software to other hardware makers, or your hardware to other software platforms.
- A critical part of the customer experience (performance, latency, reliability, aesthetic) depends on a vendor you don't control.
- You're trying to create an experience that feels magical — and the competitors all deliver stitched-together experiences that don't.

## Fails When
- The component genuinely is a commodity. Owning the supply of screws for your product is not a strategic moat.
- Your scale, capital, or focus can't support building it yourself to a higher bar than you'd buy. Vertical integration on the wrong layer weakens the whole product.
- You own it for vertical-integration-as-ideology rather than because customers can feel the difference.

## Core Concept

One company makes the software. Another company makes the hardware. A third company makes some chip inside. Nobody takes responsibility for the user experience. It's a mess. That's what the PC industry looks like. Microsoft makes Windows, Dell makes the computer, Intel makes the processor. Each company optimizes their piece without anyone owning the whole thing. When something goes wrong, everybody points at everybody else.

At Apple we've always believed you have to own the whole widget. Hardware and software, designed together from the ground up. Not slapped together from different companies' parts. When you own the whole thing, you can do things that are impossible otherwise. The original Macintosh had a certain feel — the way windows animated, the way text was drawn, the responsiveness — that came from designing the hardware and software as one integrated system. We knew exactly what the hardware could do, so we could optimize the software for it. The result felt magical in a way cobbled-together systems never could.

This is why Apple products "just work." Not because we're smarter than everyone else. Because we control the whole experience. We can't blame the software on someone else. We can't blame the hardware on someone else. If something doesn't work, it's our fault. That responsibility changes how you think about everything.

The iPod is another example. The iPod wasn't just hardware. It was the iPod, iTunes software, and the iTunes Store working together. We designed the whole system, end to end, when others were selling standalone MP3 players that required the user to figure out where to get music and how to get it onto the device. The experience was the integration.

Contrast that with what happens when you outsource the critical piece. When Adobe made our video products for ten years and they went one direction and we went another, we couldn't build what we wanted. We had to own it. Same with the chips, eventually. Same with the store. The pattern repeats: where the customer experience is load-bearing, own it. Where it isn't, don't bother.

## How to Apply

1. **Identify the "experience load-bearing" components.** Not everything needs to be yours. Ask: if this component is average, does the customer experience still feel magical? If no, own it. If yes, don't.

2. **Refuse to outsource the soul of the product.** The parts where the product *feels* like itself — the interaction, the core performance, the moments that make customers love it — those stay in-house. Forever.

3. **Kill the blame game.** When something doesn't work, the answer is never "it's the vendor." If a customer's experience is broken because of a third party, you own the fix — which usually means over time you own the component.

4. **Resist licensing the soul.** Selling your OS to other hardware makers, or your hardware to other software ecosystems, looks like revenue in the short term. It dilutes the integrated experience and hands the end customer to someone else.

5. **Integrate the system, not just the logo.** Hardware + software + service designed as one system. Not three divisions forced to ship on the same day. If the engineers working on the hardware don't know what the software team is doing, you don't own the whole widget yet — you own three widgets stapled together.

6. **Pay the cost willingly.** Vertical integration is expensive and slow. You do it because the customer can feel the difference. If they can't, stop doing it. If they can, stop apologizing for it.

## Examples

**Situation:** Apple is about to ship the first iPod. The team has hardware that works. They could partner with an existing music service (Musicmatch, RealNetworks) for the software. Or they could build iTunes and eventually iTunes Store themselves.
**Application:** Build it yourself. The experience of getting music onto the device is the moment the whole product lives or dies. If that experience depends on someone else, it will be as bad as someone else's software. Do it all. Own the whole thing.
**Result:** The iPod plus iTunes plus iTunes Store becomes one of the most successful product integrations in consumer history. Every competitor is selling standalone MP3 players; Apple is selling a system. The difference shows.

**Situation:** A SaaS company is debating whether to use a third-party auth provider, a third-party analytics stack, a third-party billing system, and a third-party email stack — or build them in-house.
**Application:** Apply the test. Auth — does the customer experience break if auth is average? No, they never think about auth when it works. Use the third party. Analytics — internal tool, not customer-facing. Use the third party. Billing — touches the customer at a critical moment (upgrades, renewals, refunds). If those moments feel clunky, the customer churns. Own it, or get a vendor you trust like a partner. Email — every notification is your voice to the customer. Own the templates and delivery choices even if you use infrastructure from a vendor.
**Result:** A cleaner decision tree: own what the customer feels, rent what they don't. The engineering budget goes into the parts that matter.

**Situation:** A hardware startup is tempted to license their breakthrough sensor tech to other companies. Big revenue, no manufacturing complexity.
**Application:** Ask what the end product would be. If they license the sensor, the end product is whatever those companies decide to make — likely products that commoditize the sensor and erase the differentiation. If they build their own end product using the sensor, the experience is integrated and the company owns the relationship with the customer.
**Result:** Licensing revenue in the short term, strategic death in the medium term. Keeping the sensor proprietary and building the end product is slower and harder but keeps the integrated experience and the customer relationship.

## Anti-Patterns (tactical)

**Don't:** Partner on the critical experience moment.
**Why:** The moment that makes the customer love the product is the moment that cannot depend on someone else's priorities. If their engineering doesn't ship on time, yours doesn't ship on time. If their quality dips, yours dips. The critical moments stay in-house.

**Don't:** License your OS to other hardware makers.
**Why:** Apple did this briefly in the '90s and nearly died. The OS is the soul; when it ships on hardware you don't control, the experience is at the mercy of whoever made the box. The integrated experience — the reason customers pay a premium — disappears.

**Don't:** Outsource design while keeping engineering in-house (or vice versa).
**Why:** The integration happens between those two functions. If one lives outside the building, they're not in the same room when the hard decisions get made, and the product stitches instead of integrates.

**Don't:** Blame vendors when the customer has a problem.
**Why:** The customer doesn't care whose bug it is. From their perspective, they bought *your* product and it didn't work. Either fix the vendor relationship so the experience holds, or bring the component in-house. "Not our bug" is a customer-losing sentence.

**Don't:** Own components you can't execute on.
**Why:** Integration is not a virtue in itself. Owning the chip when you don't have the chip design capability ships a worse chip than you could have bought. Own what you can execute on to a higher bar than the market supplies.

## Direct Quotes from Steve

> "One company makes the software. Another company makes the hardware. A third company makes some chip inside. Nobody takes responsibility for the user experience. It's a mess."

> "Apple believed you have to own the whole widget. Hardware and software, designed together from the ground up. Not slapped together from different companies' parts."

> "When you own the whole thing, you can do things that are impossible otherwise."

> "If something doesn't work, it's our fault. That responsibility changes how you think about everything."

> "The iPod wasn't just hardware — it was the iPod, iTunes software, and the iTunes Store working together. Steve designed the whole system, end to end, when others were selling standalone MP3 players."
