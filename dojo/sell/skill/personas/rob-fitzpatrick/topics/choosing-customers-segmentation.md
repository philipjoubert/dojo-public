---
triggers:
  - "user asks who their customer is"
  - "user reports inconsistent feedback from interviews"
  - "user has a 'broad market' (e.g. 'small businesses', 'students', 'sales teams')"
  - "user asks about customer segmentation"
  - "user can't decide between two customer types"
use_when:
  - "the founder is getting wildly different feedback from different prospects and can't make sense of it"
  - "the founder describes a segment with a single noun ('students', 'advertisers', 'sales teams')"
  - "the founder is choosing an idea and needs to anchor it to a specific customer"
fails_when:
  - "the founder already has product-market fit with a defined segment — over-slicing now is a distraction"
  - "the founder uses slicing to defer building/talking ('I just need to nail my segment first') — at some point you have to talk to a real person"
related:
  - "idea-discovery.md"
  - "finding-conversations.md"
  - "running-the-process.md"
---

# Choosing Customers: Segmentation

## When to Use
- Whenever you describe your customer with a single broad noun (*"students", "sales teams", "small businesses", "advertisers", "vineyards"*).
- When you've run a bunch of conversations and the feedback is all over the map — different problems, different priorities, contradictory feature requests.
- Before any new round of customer conversations, when the segment definition will determine who you reach out to and what you'll learn.
- When picking an idea and you don't yet have a customer attached to it.

## Fails When
- **You already have a working product with a clear segment.** At that point, over-slicing is just navel-gazing. Segmentation matters most early; once you're shipping to real customers, the data tells you who works.
- **Slicing becomes procrastination.** "I just need to nail my segment before I can start interviewing" is sometimes true and sometimes a stall. If you've made one plausible best guess and have findable people who match, go talk to five of them. The slice can sharpen as you learn.

## Core Concept

They say startups don't starve, they drown. You never have too few options. You have too many. Good customer segmentation is your best friend for getting unstuck.

When you describe your customer with one broad noun, you actually have *many* customer segments masquerading as one. *"Students"* — okay, but a PhD student, a prep-school kid, a homeschooling mom, a rural Indian village kid sharing one computer, and an African student on a 2G connection are all "students." They have nothing in common. If you build for "students," your roadmap will tear in five directions and your sale will land for none of them. Same trap with "sales teams" (countless types, with fundamentally different workflows), "advertisers" (everyone advertises somehow), or "vineyards" (mom-and-pops, hobbyists, premium producers, corporate roll-ups — all "vineyards").

The fix is **Customer Slicing.** Start with the broad category and keep slicing off finer sub-sets until you have a concrete sense of who you're talking to and where to find them. The sliced segment should pass two tests:

- **You can name 5 people who fit.** Not types — actual people, or at least specific enough that you could realistically meet 5 of them in a week.
- **It's a who-where pair.** *"Non-native-speaking PhD students about to give their first conference talk"* — you find them via the admissions office and department advisors. *"Mom-and-pop cafe owners trying to differentiate on bean origin"* — you find them by walking into independent cafes and asking. If you can't say where to find them, slice further.

Two more things matter, both of which violate the standard MBA-textbook approach:

- **Segment by goals and worldview, not demographics.** Two universities of identical size might be utterly different segments — top-tier ones invent best practices, mid-tier ones follow them, lower-tier ones just survive. That difference matters for what you can sell and to whom; the size doesn't. Same with vineyards: the one wanting to sell the business in 5–10 years is a different segment from the one running it as a passion hobby, regardless of acreage. **Worldview hooks beat demographic boxes.**

- **Pick someone you'd want to be friends with.** This is hard to overstate. Customer development is a grind. You'll spend years with these people. If you don't actually like them, respect them, or find their problems interesting, you'll cynically half-ass the work and the company will starve. My first company served advertisers. I didn't care about advertisers. The market looked good on paper. The work was joyless. *Care about the customer* is not soft — it's a structural requirement for staying motivated long enough to win.

The third filter is the practical one: **can they spend money?** School teachers in America have huge problems and basically no budget — to serve them you need to engineer a multi-stakeholder business model with parents, administrators, or government grants. That's not impossible (Stripe deliberately took on payments complexity because regulation became a moat) but you should enter complexity intentionally. If your segment can't directly buy, your model just got 10x harder. Decide whether the moat is worth it.

*Rule of thumb: Good customer segments are a who-where pair. If you don't know where to find them, keep slicing.*

## How to Apply

1. **Write down your current segment in one phrase.** *"Sales teams."* / *"Students."* / *"Vineyards."* If it's one word, that's the warning sign.

2. **Run the slicing questions.** For your current segment:
   - Within this group, who would want this most?
   - Would *everyone* in the group buy/use it, or only some?
   - Why do they want it? What's their motivation or goal?
   - Does everyone share that motivation, or only some?
   - What other types of people share that motivation?
   You now have two sub-lists: more specific demographic groups, AND a list of motivations. Take the still-generic ones and slice again.

3. **For each candidate sub-segment, run findability:**
   - Where can I find these people physically or online?
   - What are they already doing to cope with the problem? (You can find them by tracking those behaviours — e.g., people Googling for wedding-speech examples; new authors on Amazon's upcoming-release list.)
   If a candidate sub-segment has no findable habitat, slice further.

4. **Pick the best who-where pair using three criteria:**
   - **Profitable.** Can they actually pay? Is the unit economics workable?
   - **Reachable.** Can you find dozens or hundreds of them without it requiring weird partnerships?
   - **Personally rewarding.** Would you actually enjoy spending years serving these people?
   You're not picking the *biggest* segment. You're picking the *best entry point.*

5. **Segment by goal, worldview, or situation when demographics don't separate them.** *"Vineyards"* is too broad. *"Vineyards selling within 5–10 years"* is sharp — that's a worldview filter. *"Universities that view themselves as best-practice creators"* is sharp; *"universities with >10,000 students"* is not, because size and self-concept don't correlate. Worldview filters are usually the most powerful slice you can make, and they're invisible from outside — you only find them by talking to people.

6. **Cast a slightly wider net early than your final segment justifies.** Pre-validation, talking to *some* people who aren't your ideal segment is fine and useful — multiple reactions help you benchmark, you discover non-consumption (people who don't engage at all), and you understand adjacent worldviews. Once you've validated a segment, narrow ruthlessly. The initial wideness is for discovery; precision comes later.

7. **Test against the "5 names" rule.** Can you write down the names (or sufficiently specific descriptions to find specific people) of 5 humans who fit this segment? If yes, go. If you can only describe types in the abstract, slice further.

8. **Don't worry about the eventual market — worry about the entry point.** Google was for PhD students looking up obscure code. eBay was for Pez collectors. Evernote was for moms saving recipes. Those weren't the eventual markets — they were the wedge. A great wedge segment beats a vague big market every time, because a great wedge gives you focus and the big market gives you confusion.

## Examples

**Situation:** A founder has a powdered superfood condiment. She tells me it has *"countless uses — moms can sneak it into kids' meals, restaurants can put it on tables as a healthy sugar alternative, bodybuilders can mix it into protein shakes."*

**Application:** Three different segments with completely different needs. Bodybuilders want one thing, restaurants want another, moms want a third. Making one happy disappoints the others. Slice: who would be most likely to buy *first*? Health-conscious moms with young kids who already shop at independent health-food stores. Where to find them: the stores. The store owners are also a partner segment — slice further: small independent health-food stores (not chains).

**Result:** She walks into independent stores asking for a few bottles of shelf space beside the breakfast foods (commitment ask), commits to come back in a week to ask about results (advancement). Specific, findable, and the slice gives her a clear next step. Without slicing, she'd have spent another six months trying to make every audience happy and shipping nothing.

---

**Situation:** I tell you my customer segment is *"advertisers."* Everyone advertises somehow! Huge market!

**Application:** Trap. I talked to mom-and-pop shops, e-tailers, big brands, creative agencies, SMEs, music labels — all "advertisers." Every feature was someone's favourite; if I tried to cut anything, someone would scream. *"We can't drop that — those guys would love it."* Reverse argument prevented dropping anything else. The product became a swiss-army-knife nobody loved.

**Eventual fix:** Strong unsolicited signals from creative agencies trying to be edgy. We re-segmented to that wedge specifically. Cut features. Suddenly we could tell what was working and what wasn't. The market hadn't been "advertisers" — it had been one specific kind, surrounded by noise from a dozen unrelated kinds we shouldn't have been listening to.

---

**Situation:** A team is exploring ideas in the wine market. Their data is all over the place — small mom-and-pops with no margin, big ones being rolled up by corporates, hobbyists, premium producers. Same industry, totally different feedback. How do they find an idea?

**Application:** Stop thinking of the segment as *"vineyards."* Start thinking of it as a shared goal or worldview. From their notes: *"a vineyard owner wants to sell the business in 5–10 years."* Sharp. That person is motivated to make changes that increase enterprise value. The hobbyist running the vineyard for passion is not — same demographic, completely different worldview, completely different appetite for buying a product.

**Result:** The slice isn't *"large vineyards"* (demographic) — it's *"vineyards positioning to sell"* (worldview). Or *"award-aspiring producers"* vs *"established premium producers"*. These segments look identical from outside but have totally different motivations. Talking to one type with a product designed for the other guarantees mixed signals. The team's job is to pick a worldview-defined slice and concentrate the next 10 conversations there.

## Anti-Patterns (tactical)

**Don't:** Define your segment by what they have in common with each other (demographics) instead of what they share that *matters for buying behaviour* (goals, worldview, situation).
**Why:** "All sales teams of 25–250 people" is a demographic filter. It groups together companies that have absolutely nothing else in common — different workflows, different sales motions, different problems. Worldview filters ("sales teams transitioning from outbound to PLG", or "founders running their first sales process") slice the same population by something predictive. That's the slice that actually clusters useful feedback.

**Don't:** Pick a segment you don't enjoy serving.
**Why:** Customer development takes years. If you find your customers boring, cynical, or unpleasant, your work will slowly degrade. You'll do less of it, less well. The most effective customer segments are ones you genuinely want to spend time with — both because the work is sustainable and because you'll naturally build community and trust with them. The "biggest market" doesn't beat "the market I can stomach for 5 years."

**Don't:** Stop slicing because the segment "feels narrow enough."
**Why:** Test against the *5-names rule* and the *who-where pair*. If you can't list 5 specific people who fit, or can't say where you'd find more of them, the segment isn't sharp enough yet. Founders almost always stop slicing too early because narrow feels limiting. It isn't — narrow is what makes you findable to people who'll *love* you, and once you have those, you expand outward.

**Don't:** Bunch multiple roles into one "customer" when the buying process involves several stakeholders.
**Why:** If you're selling to schools, the teachers, students, administrators, parents, and tax payers all matter — and they have different goals. Treating them as one segment ("schools") makes the feedback contradictory. Slice each stakeholder, talk to each separately, and build a model of how they interact in the buying decision.

**Don't:** Defer building or talking until your segment is "perfect."
**Why:** Segmentation is iterative. You make a best guess, talk to 5–10 people, see whether the feedback clusters or scatters, and re-slice. If it scatters, slice further; if it clusters, you've got your beachhead. Five conversations beats five months of MBA analysis. Treat the segment as a hypothesis to be tested, not a strategy doc to be finalised.

**Don't:** Optimise for the most-senior or most-impressive contacts.
**Why:** I once spent months talking to advertising executives in suits about a product whose actual users were teenagers. I never talked to a single teenager. *"I successfully talked to ten kids this week"* didn't sound like an impressive board update. It would have been the most valuable thing I could have done. Talk to people who are representative of your *users*, even if they're less impressive on paper than the people who control the budget. The best meetings combine both.
