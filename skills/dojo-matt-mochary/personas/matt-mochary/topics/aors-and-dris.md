---
triggers:
  - "user describes work falling through the cracks or 'nobody owned that'"
  - "user has multiple people loosely sharing a function or project"
  - "user asks how to organize the company by responsibility, not job title"
  - "user wonders why projects, metrics, or goals are underreported and stalled"
  - "user is preparing an org chart, a hiring plan, or a quarterly planning session"
  - "user asks what an AOR list is, or what a DRI is"
  - "team is over ten people and information has started getting lost between them"
use_when:
  - "the company is past 10–20 people and silent failures have begun"
  - "a project, metric, or goal has no obvious answer to 'who owns this?'"
  - "two or more people each think someone else is on it"
  - "the founder is the de-facto DRI for everything because no one else is named"
fails_when:
  - "the user wants AORs as job descriptions — they aren't; they're functions and ownership"
  - "the user assigns multiple co-owners to one area to be 'fair' — that re-creates the problem"
  - "the named DRI has no path to escalate when blocked — they need Clean Escalate or it stalls"
related:
  - "goal-cascade.md"
  - "turn-the-ship-around.md"
  - "decision-making.md"
---

# Areas of Responsibility (AORs) and Directly-Responsible Individuals (DRIs)

## How it relates to its source

The phrase **Area of Responsibility** and the practice of one-name-per-function were pioneered at **Apple** in Silicon Valley. Apple also coined **Directly-Responsible Individual (DRI)** as the named-owner pattern. Credit Apple for both terms. What Mochary contributes is the *operating discipline* around them — the AOR list as a living company directory, the rule that *every* metric, OKR, project, meeting, and decision gets a DRI, and the pushback-by-pushback playbook for the objections you'll hear when you try to install it.

## When to Use
- Past about ten people, when the all-in-one-room information flow stops working and silent gaps appear.
- Any time you catch yourself saying "I thought *they* were doing that" — that's the symptom.
- Quarterly planning, before you set OKRs. AORs come first; OKRs are assigned to DRIs of the relevant areas.
- Onboarding a new exec or department head: the first thing they should do is write their AOR.
- After every reorg, acquisition, or significant hire — anything that shifts who owns what.
- When a project or metric has been "in flight" for weeks and nobody can give you a status update.

## Fails When
- **Two or more co-owners.** "Tragedy of the commons." If two people share a function, the function doesn't get done. Even if it gets done sometimes, it doesn't get *reported on*. One name. Always.
- **The DRI has no escalation path.** If a junior DRI can't compel resources and there's no Clean Escalate route to the apex manager, the area looks owned but isn't moving. Pair every junior DRI with a written escalation route.
- **The list isn't living.** An AOR list created in an offsite and never updated rots within a quarter. New functions appear; people change roles. If nobody updates it, the list is fiction.
- **You confuse it with a job description.** A job description is what one person does day-to-day. An AOR list is a map of every function in the company, with one name beside each. A single person can be the DRI for many AORs — and many AORs is fine, as long as one human is named.

## Core Concept

There is one organizational failure mode that hits almost every startup the moment it crosses ten or twenty people: a function — recruiting analytics, vendor renewals, security reviews, customer-success handoffs — that was being done loosely-by-everyone in the early days quietly stops being done by anyone. The CEO finds out three months later, when something breaks. The diagnosis is always the same: nobody was directly responsible.

> "Tragedy of the commons. When several people share responsibility for an action or process, often that action doesn't get done well or at all. To prevent this from happening, group tasks into categories and assign each category to one — and only one — person. These are your Areas of Responsibility."
> — *articles/aors.md*

The fix is laughably simple, and a surprising number of CEOs resist it because it feels too rigid: build a document that lists every function in the company, and put exactly one name next to each function. That's the **AOR list**. It is the company's directory; it is the canonical answer to "who owns this?"; it is the single most useful piece of organizational hygiene a sub-200-person company can install.

The companion practice is **DRI** — the Directly-Responsible Individual. Every metric you track, every OKR you set, every project you fund, every meeting you hold, every decision you flag for resolution — each gets a DRI. The DRI is responsible for two things: *reporting status* on a fixed cadence, and *pushing toward the goal line.* The DRI is not always the decision-maker. They are the named human who, when you ask "where is this?", has the answer and is moving the ball.

> "If you run your company with actions, projects, goals (OKRs), and decisions, you also need DRIs … someone as DRI is better than no one, even if that person doesn't have full authority to influence. If they cannot influence, they can Clean Escalate to the Apex Manager, who has full authority."
> — *articles/dris-directly-responsible-individuals.md*

The two practices interlock. AORs map the *territory* — every function in the company. DRIs assign *named owners* on top of that map for the moving things — projects, metrics, goals, decisions. AORs are stable; they shift only when the org shifts. DRIs rotate as projects start and end. Together they are the bridge between strategy (where the company is going) and structure (who actually does what). Without them, OKRs cascade onto a void and the founder spends their week chasing status updates from people who didn't realize they were the one supposed to have one.

## How to Apply

1. **Write your own AOR first.** As CEO, list every function *you* personally cover. Use a Google Doc. Share it with the exec team so they have a worked example. Don't wait for someone else to go first — they're waiting for you.

2. **Block 45 minutes in the next exec meeting or offsite.** Don't try to do this asynchronously. People will get stuck, won't know what to do, won't ask, and will quietly not-do it rather than risk doing it wrong. Live, with you in the room, takes one block of time. Async takes a quarter and never lands.

3. **Have every exec write their AOR in the same template, in real time.** Fifteen minutes. Same shared format. Side-by-side.

4. **Cross-review for conflicts.** Fifteen minutes. Each exec reads the others' AORs and flags overlaps — places where two people have claimed the same function, or where a function has fallen between two adjacent areas. If the conflict resolves in two minutes, resolve it. If not, write an Issue / Proposed Solution to settle in the next exec meeting.

5. **Cascade.** Once the exec team has clean AORs, each exec runs the same exercise with their team. Then each team with their reports. Within two to three weeks, every function in the company should have a name beside it.

6. **Publish the list and link it from the company wiki.** The whole company needs to be able to find it without asking. New functions get added as they appear; ownership changes get edited the day they happen.

7. **Now layer DRIs onto everything that moves.** Every metric, every OKR, every project, every recurring meeting, every open decision: one human's name. Add a reporting cadence — weekly for projects, monthly for metrics, quarterly for OKRs — and a place where the written status report lives.

8. **For projects specifically: no resources without a DRI and a defined intended impact.** Short-term pain (projects take a few days longer to start). Long-term joy (no orphaned projects clogging the system). Set a kill cadence too — review projects quarterly and ruthlessly retire the ones that aren't priority or aren't working.

9. **Pair every AOR with a backup person.** This is the *no single point of failure* discipline. For each function, name a second human who can perform it. Have the backup co-work with the primary until they can run it. This is how you survive someone getting sick, going on parental leave, or leaving the company.

10. **Have your team write down processes as they execute.** Anything done twice gets a written process linked off the AOR list. After a year of this discipline, every function in the company is documented. New hires onboard themselves.

## When the DRI Is Junior

The objection you'll hear most: *"If we make a junior person the DRI, they don't have authority. The senior people are already overloaded."* The answer:

- A named DRI without full authority is still better than no DRI. A junior DRI who cannot compel a peer can **Clean Escalate** to the apex manager — the person who *can* fire and hire — and that's the path. The DRI is responsible for noticing the block and routing it; they don't have to bulldoze through it personally.
- The DRI reports regularly: *what I did, current status, what I plan to do.* Their manager reads the report. The manager remains the decision-maker on direction. This is the recruiter pattern — the recruiter is DRI for finding candidates; the hiring manager is decision-maker on which to hire.
- The supposed downside (DRIs over-optimize for their narrow area) is real but small. The actual downside (no DRIs → universal apathy and silent failure) is much larger. Fix the over-optimization with Clean Escalates from people whose resources are getting pulled.

## Examples

**Situation:** A 40-person Series B company. The CEO notices that recurring vendor renewals (security tools, Notion, AWS reserved instances) keep going past their renewal date with auto-renewals at higher prices, and nobody catches it. He'd assumed Finance was on it; Finance assumed Ops was on it; Ops assumed it was distributed across whoever owned the tool.

**Application:** No AOR for "vendor contract calendar." The CEO writes the function into the AOR list, names a single DRI in Ops, sets a monthly reporting cadence ("here are renewals in the next 60 days, with action recommended"), and gives the DRI the authority to escalate to the CFO if a renewal needs sign-off above threshold. Backup person: the Ops Manager.

**Result:** Within a quarter, three renewals are renegotiated downward instead of auto-renewing, saving roughly $40K. More importantly, the CEO stops thinking about vendor calendars at all — the function is named, owned, and reporting itself.

---

**Situation:** A 12-person Seed company has set quarterly OKRs but two months in, half the OKRs have no recent status update. The founder feels like they're chasing everyone for information and the team feels micromanaged.

**Application:** The OKRs have no DRIs. Every OKR gets a single name attached, plus a weekly traffic-light update (Green / Yellow / Red) that the DRI writes themselves into a shared Notion page. Far-off-track OKRs (Red) require the DRI to write a brief Issue / Proposed Solution before the next exec meeting.

**Result:** The founder stops chasing — DRIs report themselves on a known cadence. Yellow / Red OKRs surface earlier (the DRI flags them rather than hides them), and Issues come pre-loaded with proposed solutions. Exec meetings shorten by 30%.

---

**Situation:** A 25-person company runs an offsite. The CEO spends 45 minutes asking each exec to write their AOR live. Two heads — the VP Eng and the VP Product — both list "release process ownership" in their AORs.

**Application:** Live conflict, surfaced in the room. They cannot resolve it in two minutes — they have genuinely different mental models of who calls a release. The CEO has the VP Eng write a one-page Issue / Proposed Solution: *the release manager DRI sits in Eng; Product is the decision-maker on what ships in each release; Eng is the decision-maker on when it ships.* The CEO reads it that night and confirms it the next day.

**Result:** The boundary that had been quietly causing six weeks of slipped releases is named and decided in 24 hours. The AOR list now reflects it, and any future ambiguity routes back to the written decision.

## Anti-Patterns (tactical)

**Don't:** Make two people co-own an AOR because you can't decide between them.
*Why:* This is the failure pattern the framework exists to prevent. If neither candidate is right, pick one and watch what happens — you can change it next quarter. If you genuinely need two people working on a function, one is the DRI and the other has a different, narrower AOR within it. Co-ownership is the disease, not a compromise.

**Don't:** Treat the AOR list as a one-time exercise.
*Why:* The list rots faster than the org chart. New functions appear monthly in a growing company. If the list isn't updated as roles shift, within two quarters it's fiction and people stop trusting it. Designate a DRI for the AOR list itself (usually Exec Ops / Chief of Staff). Yes — the list of who owns what gets its own owner.

**Don't:** Hide the AOR list inside a private exec folder.
*Why:* A new hire's most common question is "who do I talk to about X?" If the AOR list is public and findable from the wiki home page, they answer themselves in five minutes. If it's behind permission requests, they ask their manager, who asks the CEO, and the CEO becomes the human router for the company.

**Don't:** Use AORs to avoid hard decisions about who's actually the right person for a function.
*Why:* The framework reveals — sometimes uncomfortably — that a person occupying a role is not actually doing the function. The right move is then a conversation about fit, not a quiet edit to the list to remove what they were supposed to do. AORs surface the truth; they don't replace the conversation about it.

**Don't:** Skip DRIs on metrics because "we all care about the metric."
*Why:* If everyone cares, no one reports. The metric needs one named human who writes the weekly update. If the DRI is junior and the metric is critical, that's still better than a senior person who doesn't report — and it's a great development opportunity. Pair them with a manager who reviews the report.

**Don't:** Let projects live forever just because a DRI is assigned.
*Why:* A DRI without a quarterly live-or-die review becomes the proud owner of a stalled project. Build the review into the calendar. Kill projects ruthlessly when they aren't priority or aren't working. The DRI's job is to push the project forward — and to flag when the project should die.
