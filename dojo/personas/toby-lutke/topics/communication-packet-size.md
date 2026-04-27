---
triggers:
  - "company-wide message was misinterpreted"
  - "Slack at scale feels chaotic / messages buried"
  - "user is about to send a memo to thousands"
  - "founder transitioning from high-context startup to larger company"
  - "team feels out of the loop on big decisions"
use_when:
  - "sending any company-wide communication"
  - "designing communication infrastructure as the company grows"
  - "diagnosing why messages are being misread"
  - "deciding which channel to use for which type of content"
fails_when:
  - "used to abandon all rich communication and accept that everything must be shallow"
  - "over-formalizing communication for a 20-person team that still shares context naturally"
  - "applied to team collaboration where shared context already exists"
related:
  - "death-valley.md"
  - "environment-over-policy.md"
  - "shock-therapy.md"
---

# Communication Packet Size

## When to Use
- You're about to send a company-wide message and want to get it right, or you've just sent one and it's being misread.
- You're transitioning from small-company high-context communication to scale-up low-context communication and noticing the shift breaking things.
- You need to decide which channel — Slack, podcast, all-hands, long-form doc — to use for a specific type of content.
- You're designing the communication infrastructure of a growing company.

## Fails When
- Used as a reason to flatten all communication into shallow soundbites. The framework is a diagnosis of the failure mode, not a prescription that everything must be short.
- Applied to a team of 15 where shared context is high and the fortune-cookie problem doesn't exist yet. Don't solve problems you don't have.
- Used to excuse vague messaging ("well, it'll be interpreted different ways regardless"). Some messages do require precision and full context; the fix is choosing the right channel, not giving up.

## Core Concept

As companies grow, communication packet size shrinks. Messages must travel further with less context. What started as a casual hallway conversation now reaches thousands of people — each with different backgrounds, different contexts, different interpretations. Everything becomes a fortune cookie.

The same statement reads completely differently to a long-tenured employee who knows the history, a new hire trying to understand the culture, a merchant who just received it, and an external observer reading a screenshot on Twitter. Context drops as reach rises. A viral message arrives at people with zero background knowledge. What you meant and what they heard can be completely different things.

At 10 people, communication is high-bandwidth. Everyone knows everything. You can reference past decisions because everyone was there for them. You can say "remember when we tried X and it failed?" and everyone nods. Context is shared.

At 3,000 people, most readers weren't there for past decisions. They don't know what you tried before. They don't have the background that made your conclusion obvious. Your message arrives stripped of context. Even a carefully written paragraph becomes a Rorschach test — everyone reads in their own history and projects their own interpretation.

And here's the specific trap: internal communication tools make this worse by feeling casual. Once you're a couple thousand people, your Slack channel is the internet basically. You need to apply similar rules. A message to a 3,000-person channel is functionally identical to individually texting every one of those people. But the casual tone of the medium hides the scale. You write it like a small-team Slack note; it reaches like a press release.

Misinterpretation isn't a bug of this scale — it's inevitable. When a message lacks context and reaches diverse audiences, some percentage will misunderstand. They're not stupid; they just don't have the information that made your statement obvious. The more diverse your audience, the larger the "misunderstood" percentage. At some point you're essentially communicating with strangers, because for most of the audience, that's what you are.

The fix isn't shorter messages or avoiding communication. It's matching channel to complexity. Simple updates belong on Slack. Nuanced reasoning needs a richer channel — long-form writing, internal podcast, video, Q&A sessions. At Shopify we use internal podcasts to transmit the full reasoning behind strategic decisions: not just "we're doing X," but "here's what we considered, here's what we tried, here's why we concluded X, here's what would change our minds." That's the kind of content that dies on a Slack channel. It needs a channel with room for context.

## How to Apply

1. **Assume no context when writing for large audiences.** Strip your assumptions out. Imagine the reader joined last week. Imagine they weren't in any meeting you've been in. Make the message self-contained. If it requires context to understand, either add the context or use a richer channel.

2. **Test with fresh eyes before sending.** Pick someone who joined recently and ask them what they read in the draft. If their read differs significantly from your intent, fix it — either the draft is unclear or the channel is wrong for this message.

3. **Match channel to complexity.** Simple announcements: Slack is fine. Complex reasoning: long-form writing, internal podcast, video. Culture-shaping decisions: a podcast with the full reasoning and a long-form companion doc. A decision that will ripple through the company for years shouldn't be announced in a Slack thread.

4. **Create context layers for important messages.** A short summary for quick consumption. A longer explanation for those who want the reasoning. A full document for those who need everything. Layered content respects the fact that different audiences need different depths. Don't force everyone through the long version; don't force everyone through the short one.

5. **Acknowledge interpretation variance explicitly when you know it will happen.** "This will land differently depending on where you are in the company. Here are a few interpretations I've anticipated…" Addressing the variance up front defuses the worst readings and demonstrates that you've thought about how the message will actually arrive.

6. **Use internal podcasts (or long video) for strategic reasoning.** You can't compress "here's how I thought about this, here's what I considered, here's why I concluded X" into a Slack message. Podcasts and video transmit reasoning, not just conclusions. They also transmit tone, which is where most written communication fails. For decisions of real consequence, invest the channel bandwidth.

7. **Treat large Slack channels as public communication.** Apply the same discipline you'd apply to a company-wide email or a blog post. If it feels too casual for that treatment, reconsider whether it belongs on a 3,000-person channel. DM, smaller group, different medium.

## Examples

**Situation:** A CEO announces via Slack: "We're ending our unlimited PTO policy." Three audiences receive it simultaneously — long-tenured employees who remember the internal debates, new hires who just heard about "unlimited PTO" in recruiting, external observers screenshotting it for Twitter.
**Application:** The long-tenured employees know unlimited PTO led to people taking *less* time off due to guilt, and the new explicit days will mean people actually use them. They read it positively. New hires read it as a benefit being removed and are upset. External observers post "Company removes unlimited PTO" without context. Three completely different messages, same words.
**Result:** The fix: "We're replacing unlimited PTO with 28 explicit days, because research showed people take more time off with explicit policies. Here's the data, here's the reasoning." Interpretation variance drops dramatically because the message is now self-contained.

**Situation:** A strategic decision — big reorg — is being announced. Natural impulse: fire a Slack message to the company.
**Application:** Wrong channel. This message needs the reasoning attached, and the reasoning won't survive packet-size compression. Record an internal podcast where you walk through the context, what was considered, why this decision, what would change your mind. Publish the podcast. Follow with a Slack summary that points to the podcast. Now people who want the summary have it; people who want the full reasoning have it too.
**Result:** People engage with the reasoning, not just the conclusion. When objections surface, they're engaging with the thinking, which means the objections are themselves more valuable. Compare to the Slack-only version, which mostly produces surface reactions.

**Situation:** 30-person company. The CEO casually Slacks a decision. Everyone gets it, everyone has context, it works.
**Application:** This works at 30 because shared context is high. Don't "fix" it with internal podcasts and layered documentation. Premature infrastructure adds overhead without solving a problem you haven't got.
**Result:** Continue casual Slack at this stage. Revisit when the packet-size problem actually surfaces — usually around the 100-person mark, definitely by 500.

**Situation:** A message was sent 48 hours ago and is being interpreted multiple ways across the company. The CEO wants to issue a correction.
**Application:** The failure was picking the wrong channel for the original message. Correction via the same low-bandwidth channel will compound the problem. Use a richer channel to reset — a company-wide video or podcast, where tone and full reasoning come through. Explicitly acknowledge the different interpretations you've heard and address each.
**Result:** Reset happens. The richer channel does what the original channel couldn't. Lesson for the future: route messages to their appropriate channel on the first attempt.

## Anti-Patterns (tactical)

**Don't:** Abandon rich communication because "everything becomes a fortune cookie."
**Why:** The fortune-cookie problem is a description of what happens on *low-bandwidth channels at scale*, not a statement about all communication. The solution is to create rich channels, not to accept that all communication must be shallow.

**Don't:** Treat large Slack channels as casual communication.
**Why:** The casual tone is a trap. Each message at scale is effectively a public statement. Apply the discipline you'd apply to public statements: think before posting, consider how it lands for people without context, match format to content.

**Don't:** Over-formalize communication at the scale where informal still works.
**Why:** Building podcast infrastructure for a 20-person team is premature. The packet-size problem starts mattering around the 100-person mark and becomes dominant past the 500-person mark. Don't solve problems you haven't earned yet.

**Don't:** Assume your message will be read as you intended.
**Why:** At scale, you can't. The reader's context is not your context. If the message matters, either constrain it to be unambiguous (hard) or use a channel rich enough to transmit the reasoning (easier).

**Don't:** Use length as a proxy for depth.
**Why:** A long Slack message is not the same as long-form writing. The medium shapes the reading. Length-in-the-wrong-channel is worse than brevity — it performs depth without actually delivering it.

## Direct Quotes from Toby

> "Once you're a couple thousand people, your Slack channel is the internet basically. You need to apply similar rules."

> "Everything becomes a fortune cookie."

> "Context drops as reach rises."

> "When the company was small, I used to walk into part of a team that works on something, and we'd do a little workshop. I can't do that anymore. But I have a really good video setup now, and hitting that record button is really cheap."

> "At 30 employees, you all had lunch together. Everyone knew what sales accomplished, what engineering was building. At 70, you can't all have lunch together anymore. The informal context-sharing channel just broke."

> "I share my decision-making process through internal podcasts, because you can't compress 'here's how I thought about this, here's what I considered, here's why I concluded X' into a Slack message."
