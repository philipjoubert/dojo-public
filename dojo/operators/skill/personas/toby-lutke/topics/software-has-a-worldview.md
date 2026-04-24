---
triggers:
  - "user is choosing new software for the company (CRM, HR, project mgmt, etc.)"
  - "user is asking build vs. buy"
  - "team complains a tool doesn't fit how they work"
  - "process has been shaped to match the tool instead of the intent"
  - "user says 'we can't do that, the software doesn't support it'"
use_when:
  - "making a significant software adoption decision"
  - "diagnosing why a process feels wrong after a tool change"
  - "deciding whether to build an internal tool vs. adopt an off-the-shelf one"
  - "evaluating why your company and the tool seem to be fighting each other"
fails_when:
  - "used to justify never buying any software"
  - "used to dismiss legitimate features that meet your needs"
  - "applied to commodity tools where worldview is effectively minimal (log shipper, DNS)"
related:
  - "environment-over-policy.md"
  - "craft-and-giving-a-damn.md"
  - "companies-as-social-technology.md"
---

# Software Has a Worldview

## When to Use
- Choosing a major piece of software your team will live inside — CRM, HR system, project management, communication tool.
- Deciding build vs. buy and trying to weigh the tradeoffs honestly.
- Diagnosing why a process feels wrong *after* a tool change. Often the tool's worldview is pulling the process in a direction you didn't choose.
- Noticing your team saying "we can't do that because [tool] doesn't support it." Worldview constraints masquerading as reality.

## Fails When
- Used to justify never buying anything. Every software has a worldview; that's not a reason to build everything yourself.
- Applied to commodity tools where the worldview is basically non-existent — a log shipper has almost no worldview. Save the analysis for tools your team will live inside daily.
- Deployed to dismiss a legitimate feature match because the worldview isn't 100% aligned. Perfect worldview fit is rare; "close enough" is often correct.

## Core Concept

When you buy software, you don't just buy functionality. You buy a worldview. You adopt the creator's vision of how things should work.

This is crucial and underappreciated. Software isn't neutral. Every piece of software embeds assumptions about how work should be done, what matters, what trade-offs are acceptable, and who the real user is. When you adopt the software, you adopt these assumptions whether you realize it or not. And then the software quietly pulls your processes toward its worldview until your team's way of working is really the software's way of working.

There's a structural problem built into how most software gets adopted: the people who *buy* software are often not the people who *use* software. The buyer evaluates on features and price. The user inherits a worldview they didn't choose. Over time, the worldview wins — either the organization adapts to the tool, or it fights the tool forever at high friction cost.

Concrete examples of what "worldview" actually means:
- **Workday** has a worldview about HR — what data matters, what processes are important, what "an employee lifecycle" looks like. Adopt Workday and you adopt that worldview. It might be fine, or it might not match what you actually want HR to do.
- **Salesforce** has a worldview about customer relationships — pipelines, stages, opportunities, accounts. It treats relationships as funnel stages. If that's how you think about customers, great. If you think about customers as long-term craft relationships, the tool will constantly pull you toward the funnel frame.
- **Jira** has a worldview about how engineering should be planned and tracked. If your worldview of engineering is "small teams with autonomy and high trust," Jira will fight you, because its worldview is "elaborate workflow tickets, formalized statuses, audited handoffs."

Once you notice this pattern, it's everywhere. Every meaningful tool is a worldview. And worldview mismatch is invisible until one day you realize you've rebuilt your entire company around a shape you wouldn't have chosen.

The deeper point, connecting to environment-over-policy: software *is* environment. Because environment shapes behavior more than policy does, and because internal tools are a software company's most editable environment layer, the choice of software is strategic, not operational. Treat it that way.

And because of the accumulation problem: the longer you use software, the more its worldview shapes your processes, your data schema, your habits, your hiring. Switching costs aren't just migration — they're unlearning embedded assumptions. This is why early software choices matter so much more than people realize.

## How to Apply

1. **Make buyers and users the same people, especially for tools your team lives inside.** The CFO shouldn't pick the engineering tools. The CPO shouldn't pick the finance system. The people who will live inside the worldview should be the ones evaluating it. They'll notice the mismatches that detached buyers will miss.

2. **Audit your current stack for worldview.** What does your CRM assume about customer relationships? What does your project management tool assume about how work happens? What does your communication tool assume about information flow? These assumptions are shaping your company. Name them so you can decide whether they match what you actually want.

3. **Evaluate software on worldview fit, not just features.** Features are what software does. Worldview is what software assumes. Features can be added over time; worldview is fundamental and rarely changes after the architectural decisions are baked in. If the worldview is wrong, the features don't save you.

4. **Build when worldview matters.** If the worldview of the available software genuinely conflicts with your core strategy, build your own. The cost is high, but the alternative is fighting your environment constantly. Shopify builds many of its own internal tools — expensive, but ensures the tools' worldview matches the company's. Unicorn (the internal tooling that helped Shopify through Death Valley) is the canonical example.

5. **Treat "we can't do that because [tool] doesn't support it" as a yellow flag.** It might be true — every tool has real limitations. But more often it's a worldview constraint that's been internalized as a reality constraint. Ask: is this the software, or is this actually impossible? The distinction matters because software constraints can be changed and reality constraints can't.

6. **Run the counterfactual: would you build this the same way if starting fresh today?** If you wouldn't, you're paying worldview tax on accumulated software decisions. That tax compounds. The first-principles redesign doesn't have to happen today, but noticing the tax tells you where to push.

## Examples

**Situation:** Yahoo! Stores, circa 2004. Toby is selling snowboards. He gets a custom design made and can't get it to work — Yahoo! Stores barely lets him change the background color of the top frame.
**Application:** Yahoo! Stores had a worldview: merchants are template-fillers, not designers. That worldview was embedded in the software. When Toby's needs conflicted with that worldview, there was no path forward inside the tool. The only option was to build something with a different worldview — merchants as designers, merchants as actual business operators with real aesthetic intent. That became Shopify.
**Result:** One of the most consequential worldview-driven build decisions in software history. Shopify's worldview — that merchants are serious people doing serious work, who should have real agency — is baked into every corner of the platform and directly opposes the "template filler" assumption of its predecessors.

**Situation:** A fast-moving startup adopts a major project-management tool beloved by enterprise. Three months later, standups feel like audits, everyone is formatting tickets instead of shipping, and the team can't articulate why.
**Application:** The tool's worldview is "work is a series of formalized, auditable tickets tracked through defined statuses." That's how enterprise engineering organizations work. It's not how the startup works — or should work. The tool's worldview is dragging the team toward processes that match the tool, not the strategy.
**Result:** Either rip the tool out, scope it hard to a few narrow use cases, or rebuild internal tooling that matches the actual worldview of how the team operates. The hard lesson: the buyer's case ("we need a project tracker") didn't surface the worldview. The users felt the mismatch immediately.

**Situation:** A company needs to pick an HR system. The CFO runs the evaluation on features, price, and integration. They pick Workday.
**Application:** Workday's worldview of HR is deep, specific, and built around a particular model of workforce management (large, compliance-focused, process-heavy). If your company is also that — great fit. If your company treats HR as a small, judgment-driven, culture-first function with light process — Workday will pull you toward its worldview anyway, because that's what the software is for.
**Result:** Either make the buyer the user (put HR, not finance, in charge of the decision) or accept that the company is going to gradually reshape around Workday's assumptions. There's no neutral option — the tool will either fit your worldview or pull you toward its own.

**Situation:** An engineer says "we can't do continuous deployment because our tooling doesn't support it."
**Application:** That's a worldview constraint reported as a technical one. The tooling was presumably built assuming batched deployment. It *doesn't support* CD because nobody who built it thought CD was how this company would work. That's a worldview choice, not a law of physics. Investment in internal tooling is almost always justified here — the environment shapes every deploy, so an environment that doesn't match strategy is an ongoing tax.
**Result:** The team invests in the tooling change. The worldview of the environment now matches the worldview of the strategy. The constraint disappears.

## Anti-Patterns (tactical)

**Don't:** Refuse to buy software because "it has a worldview."
**Why:** Every software has one. Building everything yourself is a losing move at any meaningful scale. The right question isn't whether a tool has a worldview but whether that worldview is compatible enough with yours for the daily friction cost to be acceptable.

**Don't:** Let the buyer and user be different people for anything your team lives in daily.
**Why:** The buyer sees features and price. The user lives inside the worldview. These two decision layers evaluate different things. If the buyer makes the call alone, you'll get features at the cost of worldview mismatch, and the friction cost will show up slowly over quarters.

**Don't:** Accept "the software doesn't support it" as a final answer without asking why.
**Why:** Sometimes it's genuinely impossible. More often it's a worldview constraint that's been normalized into a reality constraint. Sorting the two is a major source of strategic capability — the things you think are impossible but actually aren't.

**Don't:** Assume your worldview is complete.
**Why:** Sometimes a piece of software reveals something worth learning — the creator thought carefully about this domain and their assumptions are better than yours in some dimensions. Don't reject worldviews just because they're different from yours. Evaluate; don't reflexively preserve.

**Don't:** Over-attribute every company problem to software worldview.
**Why:** Sometimes the problem is management, strategy, culture, or execution — not the tool. "Software worldview" is a legitimate diagnostic; it's not a universal explanation. Use it where it applies.

## Direct Quotes from Toby

> "If you use software by others, you have to buy into their vision. Software has a worldview. So you're adopting Workday's worldview when it comes to your HR, which may or may not be what you want to do."

> "The people who BUY software should be the people who USE the software, because they understand what needs to be accomplished."

> "The final straw was when I got a custom design made for my snowboard store and I couldn't get it to work. Yahoo! Stores barely allowed me to change the background colour of the top frame."

> "If this would have been possible from the beginning, we would have built this entirely different thing. So now our job is to get from here to there."

> "Shopify builds many of its own internal tools. This is expensive, but it ensures that the tools' worldview matches the company's worldview."
