---
triggers:
  - "user asks whether to hire for experience or potential"
  - "user debates seniority level for a new role"
  - "user is hiring a CFO, GC, compliance, finance, or legal role"
  - "user is hiring product, engineering, sales, or marketing"
  - "user says 'we need someone who's done this before'"
use_when:
  - "writing a job description"
  - "deciding the target profile for a role"
  - "calibrating interview standards"
  - "arguing with a board member or investor about a specific hire"
fails_when:
  - "applied as a binary when a role has mixed value-creation and value-protection aspects"
  - "used to justify not doing diligence on value-creators — 'we hire weird, so we don't check'"
  - "applied to late-stage companies where even growth roles have become value-protection"
related:
  - "barrels-and-ammunition.md"
  - "undiscovered-talent.md"
  - "hiring-process.md"
---

# Value Creation vs. Value Protection

## When to Use
- You're about to write a job description and want to calibrate the profile correctly.
- A board member is pushing you to hire someone "senior" and you aren't sure if that's right.
- You're deciding whether to settle for an A-minus candidate or keep searching.
- You're building out your first exec team and need to sequence the hires.
- You're assessing a candidate and can't tell if their lack of domain experience is a red flag or a feature.

## Fails When
- Applied as a pure binary. Some roles have both aspects — early-stage GC who has to invent the legal structure of a new financial product is partly value-creation. Figure out which half dominates.
- Used as an excuse to skip diligence on value-creators. "Weird is fine" doesn't mean "unvetted is fine." Reference checks still matter. Killer test still applies. The bar is high, just calibrated differently.
- Applied to a mature company. Once you're post-IPO, most of your roles become value-protection because the value has already been created. This framework is most useful at the stage where you're still forging the thing.

## Core Concept

There are two fundamentally different hiring profiles, and confusing them destroys companies in both directions.

Value creation roles are where you're trying to forge something that doesn't exist. Product. Engineering. Early sales. Marketing at the stage where you haven't figured out the motion yet. In these roles, experience is typically a handicap. Experience teaches you what worked before, and what worked before is almost never what works for the new thing. I had 254 people at PayPal. Exactly two knew anything about financial services. That's the right ratio. If I'd hired the other 252 out of banks and credit card companies, we would have built a slightly better bank. We built PayPal instead. Zero-defect hiring is wrong for value-creators. The best candidates have probably never held this exact role before. They have a spike — world-class on one dimension — and a screw loose somewhere else. If you filter out the screw loose, you filter out the spike.

Value protection roles are the opposite. CFO preparing the company for IPO. General counsel managing regulatory risk. Compliance in a financial services company. Finance operations. In these roles, zero-defect hiring is appropriate. You want the person who has done this exact job before. You want experience, because experience lets them see around corners and avoid the unforced errors that will kill the company. The downside is catastrophic and the upside is limited. You're not hiring for 10x. You're hiring to prevent going to zero.

The fatal mistake is putting a value-protector in a value-creation role, or a value-creator in a value-protection role. Put an experienced ex-bank VP in charge of product and you'll build incremental versions of what already exists. Put a 26-year-old first-time product person in charge of your SEC compliance program and you'll end up in a consent decree. Both are hires that look defensible and are actually lethal.

Stripe is the clarifying counterexample. They hired their general counsel among the first ten employees. That's typically value-protection. But at Stripe, regulatory risk was so central that the GC role became partly value-creation — they had to invent the legal architecture for something new. So they hired a specific kind of lawyer who could do both. The lesson: classify the role by what the role actually has to do, not by the job title convention.

## How to Apply

1. **Before you write the JD, classify the role.** Value creation or value protection? Which half dominates? If you can't answer this in one sentence, the role is poorly defined.
2. **Set the experience bar by category.** Value creation: experience is a nice-to-have at best, often a minus. Value protection: experience is table stakes. Non-negotiable.
3. **Set the defect tolerance by category.** Value creation: tolerate a screw loose. Demand a spike. Don't do zero-defect hiring. Value protection: zero-defect hiring is correct. Three clean references. No weird career gaps. No controversies.
4. **Sequence your exec hires accordingly.** Most of your first 10-to-50 hires are value-creation. Defer value-protection hires until the thing you're creating exists. Stripe is the exception, not the rule — only pull forward a value-protection hire when the regulatory risk is existential from day one.
5. **Don't let the board push you toward the wrong profile.** Boards love experienced hires because they pattern-match to "adult supervision." Adult supervision in a value-creation role is often company-killing. Push back with the framework, not with vibes.
6. **Interview differently by category.** Value protection: does this person have the specific domain expertise? Have they done this exact job before? References from direct peers in the industry. Value creation: does this person have a spike? A drive? Something to prove? Can they think independently? Ownership mentality? References from direct reports, not just bosses.
7. **Remember the exception clause: blow-up risk.** The only time you hire an A-minus value-creator is when the entire company blows up without someone in that seat immediately. Rare. Almost always false. Usually a symptom of bad sequencing, not a real exception.

## Examples

**Situation:** A Series A founder is hiring a Head of Marketing. They have two finalists. Candidate A: 15 years at major consumer brands, marketed products at scale, senior title at a FAANG. Candidate B: 3 years experience, did scrappy content and community work at two startups, ran a weird newsletter on the side that got 30k subscribers.
**Application:** This is a value-creation role. You haven't figured out the motion yet. Candidate A will import the playbook from her last company and it won't work, because your product isn't that product and your stage isn't that stage. Candidate B has a spike (the newsletter), something to prove, and no preconception of how marketing "should" work at your stage. Hire B. She won't be perfect. She'll create 10x more value than A.
**Result:** B invents a motion specific to your product. A would have built an org chart.

**Situation:** A fintech Series B company is hiring a General Counsel. The founder is considering a 29-year-old who was a fifth-year associate at a good firm and seems "scrappy and founder-friendly," versus a 50-year-old who was the deputy GC at PayPal.
**Application:** This is a value-protection role. You are in financial services. One regulatory mistake can kill the company. Hire the 50-year-old. Experience is the point. The "scrappy associate" may be a great hire in three years, but not for this role, not at this stage. Zero-defect hiring applies.
**Result:** The 50-year-old sees around corners. The 29-year-old would have been a cheaper hire and a much more expensive mistake.

**Situation:** A founder is told by her board to hire "an experienced VP of Product" before the next round. The implied profile is someone from a big tech company with 15+ years of product experience.
**Application:** Push back. VP of Product at Series A is a value-creation role. The experienced big-tech VP has never shipped from zero. They've only operated on top of existing distribution and existing product-market fit. They will bring a big-company playbook to a small-company problem. Hire a first-time VP with a spike and something to prove, or promote internally someone who has the scar tissue from actually building your product.
**Result:** You hire someone who actually moves the product forward. The board learns that "experienced" is not the right filter for every role.

## Anti-Patterns (tactical)

**Don't:** Default to experienced hires for value-creation roles.
**Why:** Experience teaches what worked before. What worked before isn't what works for the new thing. You'll get incremental improvements to an existing playbook instead of the breakthrough you need. PayPal would have been a slightly better bank.

**Don't:** Apply zero-defect hiring to value-creation roles.
**Why:** The most talented value-creators have a screw loose somewhere. If you filter for clean, consistent, defect-free candidates, you filter out the spike that makes them world-class. You'll end up with safe hires who ship nothing memorable.

**Don't:** Skip diligence on value-protection roles because they "seem obvious."
**Why:** This is where zero-defect matters most. A bad GC doesn't just underperform — they get you sued, indicted, or shut down. Three clean references. Domain-specific. Direct peers. Do the work.

**Don't:** Hire the cheap, scrappy option for your financial services compliance role.
**Why:** This is the exception-to-the-rule case where an A-minus can blow up the company. If you're in a regulated industry, get the experienced hire. The entire company depending on one compliance person means you should not be optimizing for cost.

**Don't:** Confuse "management experience" with the kind of experience that matters.
**Why:** For a value-creation role, I don't care if someone has managed 200 people. I care if they've shipped anything from zero to one. For a value-protection role, I don't care if they've managed people either — I care if they've done the specific domain work that the role requires.

**Don't:** Let investors or board members bully you into the wrong profile.
**Why:** Boards pattern-match. They see "Series B" and think "time for the experienced VP." If the role is value-creation, that pattern is wrong. Use the framework explicitly in board meetings. Make them argue against the framework, not against your vibes.

## Direct Quotes from Keith

> "Experience is not your friend, typically, when you're trying to create value. If I'm trying to create value, I probably don't want anybody who has experience."

> "I had 254 people at PayPal. There was exactly two people who knew anything about financial services. That's about the right ratio."

> "You do not want to have zero-defect hiring for value creators. The best candidates likely haven't held this exact role before."

> "Value protection roles — finance, legal, comms, operations — demand conservative, experienced operators with direct domain expertise. Zero-defect hiring is appropriate here."

> "If you're trying to create something and forge something from scratch, experience is often a handicap."

> "Some of the most interesting people that create the most innovation have a screw loose one way or the other, and if you over-react to that screw loose you're going to miss some of the most important, most talented people on the planet."

> "Most of the companies I work with that are thriving have basically skipped hiring senior people. It's mostly internally grown talent. It's definitely true of Ramp, definitely true of Trade Republic."

> "I've watched people use even chief of staff roles to groom talent. The CMO who's performing miraculously was his last chief of staff. His new head of product is his current chief of staff. He's created a factory where he can absorb ambitious talented people, and over one or two years by osmosis train them to be senior successful leaders."
