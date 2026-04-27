---
triggers:
  - "user asks how to manage a startup team"
  - "user is considering adding middle managers"
  - "user is thinking about team structure, headcount, or coordination"
  - "user says they need to 'scale the team'"
  - "user is struggling to get their team to ship"
  - "user is hiring early engineers"
use_when:
  - "user is building an early-stage team (1-20 people)"
  - "user is about to introduce process or middle management"
  - "user is over-indexed on team size as a success metric"
fails_when:
  - "user is running a genuinely large, complex operation where flat structure won't scale (pharma research, aircraft manufacturing, regulated finance) — the principles still apply but with modifications"
  - "user is asking how to run a mature company — this framework is opinionated for early-stage, builder-heavy teams"
related:
  - "leverage.md"
  - "intelligence-energy-integrity.md"
  - "accountability.md"
  - "wealth-equation.md"
  - "principal-agent-problem.md"
---

# Build a Team That Ships

## When to Use
- The user is building or running an early-stage team and thinking about structure, process, or headcount.
- The team isn't shipping fast enough and the instinct is to "hire a manager to fix coordination."
- The user is over-proud of headcount as a signal of progress.
- The user has more than one person on any given project and isn't sure where accountability lives.
- The user is about to hire their first engineer and wondering how to set the terms.

## Fails When
- The operation is genuinely large-scale and multi-layered (say, 500+ people on a regulated product) — the flat-structure bias from this framework won't map directly.
- The user is a solo founder and the team question is premature. Ship something first.

## Core Concept

I started my first company fifteen years ago. I still can't manage. I suspect very few people can.

Management is the art of getting people to do things they don't want to do. It's organizational friction dressed up in process. What I want instead: a team of self-managing people who ship code.

No managing. Just shipping.

Here's what we do at AngelList:

- **Keep the team small.** All doers, no talkers. Absolutely no middle managers. All business development via APIs.
- **Outsource everything that isn't core.** Resist the urge to pick up that last dollar. Founders do customer service.
- **People choose what to work on.** Better they ship what they want than not ship what you want.
- **No tasks longer than one week.** Ship something into live production every week — worst case, two weeks. If you just joined, ship something.
- **Peer-management.** Promise what you'll do in the coming week publicly. Deliver — or publicly break your promise — next week.
- **One person per project.** Get help from others, but you and you alone are accountable.

If they can't ship, release them. Our environment is wrong for them. They should go find someplace where they can thrive. There's someplace for everyone.

Is it perfect? No. We ship too many features, many half-baked. The product is complex, with blind alleys. It's hard to integrate non-engineers — they aren't valued enough. But we ship. That's the point.

## Small Teams Beat Big Teams

The nature of human beings: you join a company, work like a dog, get tired, and hire someone to do your job. It always takes two new hires to do your job. Repeat ad nauseam and you end up with five thousand people at a web app company.

Look at the leverage:

- YouTube: $24M per employee at acquisition
- Instagram: $70M per employee
- WhatsApp: $290M per employee
- Bitcoin: $1B per employee (if Satoshi is one person)

The winners are small teams with massive leverage. They don't have armies of middle managers optimizing their organizational charts. They ship.

Scaling product reduces external coordination costs. Scaling team increases internal coordination costs. The ratio of the two is leverage.

Big teams kill startups. Keep yours small. When you feel the pressure to add headcount, first ask: what can we automate? What can we outsource? Can this be replaced by software or a contractor? Only add the person if the honest answer to all those is no.

## No Middle Managers

Absolutely no middle managers. I can't stress this enough.

A middle manager is someone who has reports but doesn't build things. Their job is communication, coordination, and supervision.

In a small team, this is pure overhead. Every middle manager adds a layer of indirection. Information degrades as it passes through them. Decisions slow down. People optimize for pleasing their manager rather than shipping product. Middle managers accumulate reports because having reports is how middle managers signal importance — and the org chart grows in exactly the direction that adds no output.

The founders should be the only "managers." And they shouldn't really manage either — they should work alongside the team, ship code, talk to customers, and set direction. If you need a manager to coordinate, your team is too big.

This framework fails gracefully at scale — there are sizes at which some coordination layer is genuinely required. But the failure mode you should watch for is adding the layer too soon. Almost every startup that dies had more middle managers than it needed for longer than it needed them.

## One Person Per Project

This is counterintuitive. Don't teams need collaboration?

Collaboration is overrated. What matters is accountability.

When two people own a project, no one owns it. If it fails, each can point at the other. If it succeeds, both take credit. There's no skin in the game.

One owner means clear accountability. You succeed or fail on your own. You can ask for help — help is fine, expected, encouraged — but the outcome is on you.

This doesn't mean working alone. It means one person makes the decisions, one person is responsible, one person ships. Others contribute. But the buck stops with one name, and that name is written down publicly.

The shift is subtle but enormous. Project meetings go from "what should we decide" to "here's what I've decided, what do I need from you." Reviews go from "how do we think this is going" to "here's where I am on my commitment." Promotions go from "who had the idea" to "who shipped."

## Peer Pressure and Public Promises

We use peer pressure to drive productivity.

Every week, each person publicly commits to what they'll ship. Next week, they report back. Did you ship it or not?

If you didn't ship, everyone knows. You broke your promise publicly. That's uncomfortable. Good — that discomfort is useful. It replaces top-down management with peer accountability. No one wants to be the person who consistently breaks promises, especially to people they respect. The team self-regulates.

It also creates useful data. Who consistently ships? Who consistently doesn't? The patterns reveal themselves without manager oversight.

This works only if:
- Commitments are specific (what, by when).
- Commitments are public to the whole team.
- Broken commitments are visible, not buried.
- There's no face-saving allowed — if you didn't ship, say so plainly, no elaborate excuses.

The system is harsh by design. It has to be, because the alternative is manager oversight, which has its own costs and doesn't actually work.

## Ship Every Week

Ship something into live production every week.

Not "work on" something. Not "make progress on" something. Ship something. Into production. That real users can see.

This forces small tasks. If you can't ship it in a week, break it down until you can. No six-month projects. No "we'll ship when it's ready."

Half-baked features that ship beat perfect features that don't.

I know what you're thinking: "But our product needs more polish. We can't ship incomplete work." You're wrong. Ship it. Get feedback. Iterate. The feedback loop is more valuable than the polish.

We ship too many features. Many are half-baked. The product has blind alleys. But we ship. And we learn. And we improve. The teams that optimize for polish over shipping build elegant things that nobody ever gets to use because they never ship.

## First Hires Are Late Founders

Your first two engineers aren't employees. They're late founders. Treat them as such. Expect as much.

This means founder-level equity. Not 0.25%. Real ownership. 2%, 3%, 5%.

This means founder-level commitment. They should care as much as you do. They should be all in.

This means founder-level judgment. You're not hiring them to follow instructions. You're hiring them to make decisions.

If you can't offer real equity, you can't attract real talent. Pre-traction companies have no business hiring at market salaries with token options. There isn't a shortage of developers and designers. There's a surplus of founders. The cost of starting a company has collapsed — desks are free, hosting is free, marketing is online, company setup is cheap. Raising $25K is easy. Raising $100K is easy. Building a product is easy. Getting traction is hard. Building a sustainable company is hard.

Post-traction companies can use the old cap tables. Pre-traction companies can't. Close the equity gap and hiring gets a lot easier.

## People Choose What to Work On

Better they ship what they want than not ship what you want.

This violates most management instincts. You, the founder, have a prioritized list. They, the engineers, have their own interests. Surely your list is better? You've thought about it more? You know the customer?

Maybe. But here's the trade:

- If you assign the work and they do it, they do it at agent speed — competently, methodically, unenthusiastically.
- If they pick the work and do it, they do it at principal speed — 10x output, better quality, more creativity, deeper ownership.

The 10x multiplier on the thing they wanted to build is almost always worth more than the gap between their priority and yours. And surprisingly often, their priority turns out to be close to yours — because if you've hired well (intelligence-energy-integrity), they're attuned to the business and picking good problems.

The founder's job is to set the direction — here's the North Star, here's what matters, here's what I see from my seat. The engineers' job is to pick the specific problems that move the company toward the star. Let them pick. The motivation gain swamps the coordination loss.

## Outsource Everything That Isn't Core

Resist the urge to pick up that last dollar. Founders do customer service.

Translation: focus the team on the one or two things nobody else can do as well as you — your specific insight, your product advantage, your founder-market fit. Everything else: outsource, automate, delegate to contractors, or defer.

Founders doing customer service isn't about humility. It's about proximity to the customer. The founder hearing the customer's pain directly is worth more than ten customer service hires summarizing it in a weekly report.

The rule that emerges: ruthlessly narrow the team's scope to the absolute core of your edge. Outsource the rest. Every minute spent on non-core is a minute not spent building the thing only you can build.

## The Illusion of "Culture"

Most culture discussions are nonsense. Values on a wall. All-hands presentations. Offsites with trust falls.

Real culture is who you hire, fire, and promote. That's it.

If you hire people who ship, you have a shipping culture. If you keep people who don't ship, you have a political culture.

If you promote people with integrity, you have an integrity culture. If you promote people who manage up well, you have a political culture.

Culture is actions, not words. Look at what actually gets rewarded. That's the real culture, no matter what the wall posters say.

## How to Apply

1. **Keep the team under 20 for as long as you possibly can.** Every new hire is a coordination cost. Hire only when the honest answer to "can we do this with fewer people, software, or contractors" is no.

2. **One owner per project.** Write down the owner's name on every project. If you can't write one name, the project isn't ready to exist. If you write two, cross one out.

3. **Ship every week.** Every team member ships something to production every week. If they can't, break the task down until they can. No exceptions, no "it's a bigger project."

4. **Public weekly commitments.** Everyone says what they'll ship next week, everyone reports what they shipped this week. Transparency replaces oversight.

5. **No middle managers.** The founders coordinate. If the team is big enough that founders can't coordinate, the team is too big. Cut, don't add a layer.

6. **First engineers get founder-level equity.** 2-5% at pre-traction. Not a token grant. If you can't afford that, you can't afford to hire yet.

7. **Fire fast when it's not working.** If someone can't ship, your environment is wrong for them. Release them kindly and quickly. Keeping a non-shipper for an extra six months destroys more team morale than the bad hire itself does.

8. **Watch the culture you're actually building.** Not the one you say you want. Look at who got promoted, who got fired, who's respected in hallway conversation. That's the real culture, and if it isn't the one you want, your hiring or firing criteria are wrong.

## Examples

**Situation:** A founder at ten people is thinking of hiring a VP Engineering because coordination is getting hard.

**Application:** The VP Engineering is a middle manager, and middle managers slow things down at this scale. The real question is why coordination is getting hard. Usually the answer is that the team is working on too many projects simultaneously, or the ownership isn't clear, or the weekly ship cadence has slipped. Fix those first. Name one owner per project. Shrink the project list to the top three. Require public weekly commitments. If after three months coordination is still the problem, the diagnosis was wrong — but usually it was right, and the VP Engineering hire was a way of avoiding a harder conversation about focus.

**Result:** Don't hire the VP Engineering yet. Fix the actual coordination problem, which is usually a focus problem masquerading as a headcount problem.

---

**Situation:** An early-stage founder is offering a strong senior engineering candidate 0.5% equity over four years with a $200K salary. The candidate has declined, and the founder is frustrated that "good engineers don't want to join startups."

**Application:** The engineer is correct to decline. 0.5% at a pre-traction company is not founder-level equity — it's employee equity, which doesn't match the role (first engineer, building the core product, taking career risk on a pre-traction company). The founder is asking for principal behavior at agent compensation. The engineer knows this instinctively: for the same career risk, she can join a post-traction company with better pay and similar equity, or co-found something where she gets 25%. The 0.5% offer sits in the worst square of that matrix.

**Result:** Either raise the equity offer to 3-5% for a first engineer role, or stop trying to hire at this stage and find a real co-founder instead. Don't keep searching — the problem is the offer, not the market.

---

**Situation:** A founder has had two engineers working jointly on the auth system for four months. It's still not done. They keep "unblocking each other" in meetings and producing little.

**Application:** Two people, one project, no owner. Classic diffused accountability. They're each doing half the work and pointing at each other for the other half. The fix is not another meeting. The fix is to name one of them the owner, give the other a different project, and restart the clock with a one-week shippable unit.

**Result:** Pick an owner (whichever of the two is more senior, or more aligned with the work). Move the other engineer to a separate project they own. Within two weeks, auth will ship or the issue will be with the person, not the structure.

## Anti-Patterns (tactical)

**Don't:** Hire middle managers to "scale the team."
**Why:** They slow things down. They make decisions via committee. They filter information. The actual problem is almost always that the team is working on too many things without clear ownership. Fix that instead.

**Don't:** Brag about headcount.
**Why:** Headcount is not an output. It's a cost. The companies people envy have huge per-employee productivity, not huge teams. If someone at a party asks "how many people work there?" and you feel proud to say "four hundred," you've started using headcount as a status signal. That's the wrong signal.

**Don't:** Offer employee-level equity to early hires.
**Why:** Pre-traction, the equity has to reflect the founder-level risk and responsibility. Skimping on early equity is the single most common reason founders can't hire, and most of them don't realize that's the cause. They blame "the talent market." The talent market is fine. The cap table is wrong.

**Don't:** Keep non-shippers because firing feels mean.
**Why:** It's not kind to anyone to let someone drift in a role where they can't succeed. The team loses morale. The non-shipper loses confidence and time. Release them fast and kindly — they should go find the environment where they can thrive. There's someplace for everyone. It just isn't here.

**Don't:** Confuse "collaboration" with diffused ownership.
**Why:** Healthy teams collaborate intensely — asking for help, sharing ideas, reviewing each other's work. Unhealthy teams diffuse accountability — nobody owns the outcome, everybody has an opinion, decisions don't get made. The distinction: one owner per project, many contributors; not many owners.

**Don't:** Introduce process to fix a people problem.
**Why:** If a specific person isn't shipping, don't build a process that forces everyone to document more. Address the person. Process calcifies the workaround for a person-problem into a permanent tax on everyone. The correct response to one non-shipper is usually not more process. It's a direct conversation and, if the conversation doesn't fix it, a parting.
