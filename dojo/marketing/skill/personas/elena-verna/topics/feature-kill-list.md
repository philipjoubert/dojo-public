---
triggers:
  - "user asks how to fix feature bloat or product complexity"
  - "user says 'our product has too many features' or 'users are overwhelmed'"
  - "user is considering deprecating features but worried about backlash"
  - "user asks how to audit feature adoption"
  - "user has low adoption on features they thought were important"
  - "user's PMs want to ship new features but never retire old ones"
  - "user asks about 'feature factory' behavior"
use_when:
  - "adoption data shows a long tail of rarely-used features diluting core value"
  - "users report the product is 'too complicated' or 'hard to learn'"
  - "you're planning a focus sprint and need to decide what to *remove*, not just what to add"
fails_when:
  - "pre-PMF — you don't know yet which features matter, killing too early destroys signal"
  - "features are actually *used* but measured wrong (usage metrics undercount real value)"
  - "internal political cost of deprecation is too high and leadership won't back the call"
related:
  - "retention.md"
  - "product-quality-as-growth.md"
  - "experimentation-os.md"
---

# Feature Kill List

## When to Use
- Your product has accumulated 3+ years of feature shipping and the aggregate UX is getting worse, not better. New users are confused. Old users know the path. That's the "feature bloat" smell.
- You're auditing retention and several features with <10% adoption are actively making the product harder to learn. They're not adding value; they're diluting it.
- The team has an instinct to "ship more to fix retention." Usually the right move is the opposite — *remove* features that are making the core experience worse.
- You're planning a focus sprint or a simplification effort and need a disciplined framework for what to deprecate.
- You want to counter the default cultural pull toward shipping-as-progress. Most PM orgs celebrate what shipped; almost none celebrate what got killed. That imbalance is how products become unusable.

## Fails When
- **Pre-PMF.** You don't yet know which features matter. Killing early removes your ability to learn. Run the kill list *after* PMF is established, not during the search.
- **You're measuring the wrong usage signal.** Some features have low click-through but high embedded value (an admin permissions UI, a security setting, a backup mechanism). Don't kill based on surface metrics alone — understand what role the feature plays.
- **Leadership won't absorb the political cost.** Deprecating a feature upsets the customers who use it. If leadership can't back the team when complaints arrive, the kill gets reversed and the team learns to never try again.
- **You use it as cover for abandoning customers on specific workflows.** If a feature serves a known user segment and killing it strands them, you need a migration plan — not a kill.

## Core Concept

There is a default gravitational pull in product orgs to ship-ship-ship. New features get celebrated. Shipped features get celebrated. Released features get celebrated. Nobody celebrates *removal*. Nobody gets promoted for deprecating a feature. Nobody gets a Slack parade for simplifying a UI. This is how products become unusable over time — not through any single bad decision, but through the slow accretion of features nobody has the authority or incentive to kill.

The **Feature Kill List** is the counter-discipline. It's the systematic practice of auditing feature usage, identifying the features that dilute rather than amplify core value, and actively retiring them. Not hiding them. Not flag-gating them. Retiring them. It's one of the four retention levers (alongside top-down adoption, bottom-up adoption, and resurrection) and it's the one almost every team skips.

**Why this compounds retention.** Feature-dependent aha is real. A user who needs to publish to a custom domain but can't find that feature inside a UI cluttered with 40 other features will churn — even if they're technically activated on the core flow. Every low-adoption feature that clutters the surface is a *tax* on discovery of the high-adoption features that actually deliver value. Remove the tax, adoption of the valuable features climbs, retention compounds. This is counter-intuitive because the proposed move (shipping less / removing stuff) looks like *progress-negative*; in reality it's a net-positive retention lever.

**How to do it cleanly.** The method is two-step. (1) **Bottom-up audit** — look at your most retentive cohort. What features correlate with their retention? Those are the features you protect and amplify. (2) **Top-down audit** — list the 5–10 features you believe deliver core value. Check adoption. If a feature is in neither list — not correlated with retained-cohort behavior AND not on your top-value list — it's a kill list candidate. Run discovery on it. If you can't lift adoption meaningfully with prominence and education, deprecate it.

**What gets killed.** The features nobody actually uses. The features that serve a niche use case you've strategically moved away from. The "nice to have" that shipped because somebody wanted it, got limited adoption, and now sits in a menu making the menu longer. The orphaned integration with a tool you no longer care about. The legacy workflow that was replaced by a better one but you kept the old one "in case someone needs it."

**What doesn't get killed.** Features with low visible usage but high embedded value (security controls, billing admin, permissions). Features with low total usage but high value for specific high-value segments (SSO for enterprise, API for power users). Features that are part of a working loop even if the feature itself is rarely opened — think of a referral flow that runs in background or a notification preference users set once.

**Counter-cultural move: celebrate the kills.** Most teams go silent on deprecations because they're worried about backlash. Flip that. Publish the kill list publicly. "We retired these 8 features this quarter to focus the product on the 20 things you actually use." Most users will appreciate the clarity. Competitors will notice you have the discipline most products don't. And internally, you're training the culture to see removal as an achievement, not an admission.

**This also supports the lovability argument.** MLP (Minimum Lovable Product) doesn't mean "gold-plated." Minimum is still minimum. Every feature that stays in the product has to earn its place by contributing to the experience. Features that don't earn it are dragging the Lovable Score down even if no individual user complains about any individual feature. Kill them. Let the ones that earn their place shine.

## How to Apply

1. **Instrument feature-level usage.** Track which features are accessed weekly by what % of users, broken by cohort (new, retained, churned). Most teams have this data but don't look at it. Make it a recurring review.

2. **Build two lists: retained-cohort features and top-value features.** Features used by your most-retentive cohort at above-average rates = protect. Features you (the team) believe deliver core value = also protect. Any feature not on either list is a kill list candidate.

3. **Apply the "can we lift adoption?" test to candidates.** For each candidate, ask: if we gave this feature prominent placement, in-product education, and a discovery moment, could we lift adoption to meaningful levels? If yes, try that. If no — deprecate.

4. **Write the kill list explicitly.** A single Notion/Linear doc. Each feature: name, current adoption rate, reason for killing, date of deprecation, migration plan (if any). Reviewed monthly alongside shipped features. Make it a peer document to the roadmap, not a side-note.

5. **Announce deprecations publicly and clearly.** Email users who actually used the feature. Give them runway (30–60 days for meaningful use, longer for integrated workflows). Explain why. Name the replacement if there is one. Avoid sneaking deprecations in as silent removals — that erodes trust.

6. **Migrate users where possible.** If the killed feature served a real use case, the replacement should be in the product. Migrate their data, settings, configurations. Don't just nuke and expect them to figure it out.

7. **Celebrate kills internally.** A "Kill of the Month" announcement in all-hands, with before/after screenshots. Reinforces the cultural norm that simplification is a shipping outcome.

8. **Review kills against retention after 60–90 days.** Did the feature deprecation correlate with improved retention on remaining users? Did the specific users who were using the dead feature churn, or did they migrate to the replacement? Feed the learnings back into future kill decisions.

9. **Apply to roadmap triage too.** The kill list discipline should also sharpen what gets shipped in the first place. If you're about to ship something that wouldn't survive the kill list after a year of low adoption, maybe don't ship it.

## Examples

**Situation:** A B2B SaaS has 4 years of accumulated features, new users complain onboarding is overwhelming, and NPS has slipped from 52 to 38. Team's instinct: "we need to ship the AI Assistant feature." That'll be feature #87.
**Application:** No. The Assistant will land in a UI already cluttered past the point of usability. First: run the kill list audit. Pull 90 days of feature usage by retained cohort. You'll find 15–20 features with <5% adoption. Write the kill list — expect to kill 12–15 of them over the next 2 quarters. Announce to affected users, migrate where possible, delete code. *Then* ship the Assistant, in a simpler, less-cluttered product.
**Result:** Onboarding completion rate climbs. NPS recovers to 48 without any "new" feature shipping — just removal. When the Assistant does ship, it's the clear #1 new addition in a focused UI instead of feature #87 in a menu jungle. Retention curve flattens earlier. Users who loved the dead features are a small minority and most migrated cleanly; the silent majority is happier.

**Situation:** A product team wants to kill a custom-workflow feature used by 3% of users. A sales engineer pushes back — "but this saved a big deal last year."
**Application:** Check the specifics. Does the enterprise segment using this feature disproportionately contribute revenue? If yes, it stays (even at 3% overall adoption, it's high-value). If the "big deal" was actually a one-off and the feature isn't protecting ongoing ACV, kill it. The "someone somewhere uses it" argument is infinite — every feature has someone. The question is whether the *strategic segment* needs it enough to justify the tax on everyone else's UI.
**Result:** If the feature protects enterprise — stays, maybe even gets more polish. If not — deprecated with runway for the 3% to migrate. The team stops using "but someone uses it" as a permanent shield against simplification.

**Situation:** CEO says "don't kill that feature, I personally use it."
**Application:** Make the case with data. "The feature has 2% weekly usage and 0.3% daily usage across the user base. It's not correlated with retention in any cohort. The UI real estate it occupies is being taxed on every new user. Our options are: (a) kill it, (b) invest to drive adoption to 10%+, or (c) accept we're keeping a CEO-personal-preference as a structural cost on the UX." Then let the CEO make the call explicitly. Often they'll back off. Sometimes they won't. At least the decision is named rather than silent.
**Result:** Either the feature is killed with CEO sponsorship, or it stays as a named CEO-preference exemption. Either way, the team isn't silently losing kill-list battles to personal preference; the trade-off is visible. And in the rare "stays" case, it's bounded — one feature, not a precedent that every exec can veto every kill.

## Anti-Patterns (tactical)

**Don't:** Hide features behind flags and call that "deprecation."
**Why:** Flag-gating isn't removal. The UI complexity is still there at the code level, the tax on onboarding is still there because the flag logic has to be checked, and users who still have the flag on are confused about whether the feature is supported. Kill means kill — delete code, remove UI, migrate users.

**Don't:** Kill features silently without telling affected users.
**Why:** Users who built workflows on a feature feel betrayed when it vanishes. Even if the overall decision was correct, a bad communication pattern turns a reasonable deprecation into a trust-eroding event. Give runway. Email the users. Explain why. Name the replacement.

**Don't:** Use surface-level usage metrics without understanding context.
**Why:** Some features have low click-through but high embedded value (admin controls, billing UI, security settings). Killing based on "this button isn't clicked" metrics misses the role the feature plays in user confidence. Understand what role each feature plays before killing.

**Don't:** Let "someone uses it" be an infinite shield.
**Why:** Every feature has someone using it. That's not a reason to keep everything forever. The question is whether the *strategic segment* needs it enough to justify the tax. Make the trade-off explicit, don't let "someone uses it" stall every kill discussion into paralysis.

**Don't:** Ship more to avoid the harder work of killing.
**Why:** Feature Factory behavior — shipping new features because that feels like progress, while the aggregate UX degrades. The honest retention lever is often removal, not addition. Shipping more features into a cluttered UI is cardio-for-exhausted-product: more motion, less fitness.

**Don't:** Kill without a migration plan for real use cases.
**Why:** If killing a feature strands a known user segment, you've just churned them. Especially bad if that segment is strategic. Build the migration. Build the replacement first. Sequence the kill so the user never hits a dead end.

**Don't:** Forget to celebrate kills.
**Why:** Culture moves in the direction of what's celebrated. If shipping gets parades and kills get silence, you'll always ship more than you kill, and products will drift toward bloat. Make kills visible, attributed, celebrated. The product will get leaner.

**Don't:** Let kills happen only during "cleanup sprints."
**Why:** Kills should be a continuous practice tied to the roadmap, not a biennial drama. One kill per quarter, reviewed against usage data, baked into the same rhythm as shipping new work. Occasional cleanup sprints are better than nothing, but they inevitably cover a backlog of kills that should have happened sooner.
