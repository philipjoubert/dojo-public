---
triggers:
  - "user is hiring and can't tell who will actually get things done"
  - "user's team escalates blockers instead of solving them"
  - "user is trying to describe what makes certain people disproportionately effective"
  - "user is frustrated that reasonable-sounding employees keep accepting bad situations"
use_when:
  - "deciding between two candidates where one has better credentials and the other has a track record of unauthorized wins"
  - "diagnosing why an organization feels slow despite smart people working hard"
  - "designing interview questions that reveal disposition rather than credentials"
fails_when:
  - "you confuse high agency with recklessness and tolerate people who ignore real constraints without reasoning about them"
  - "you hire high-agency individuals into an environment that punishes initiative, which trains the agency out of them within a year"
  - "you encourage initiative without shared direction, which produces anarchy rather than high agency"
related:
  - "first-hundred-people.md"
  - "culture-as-tuning-fork.md"
  - "speed-as-strategy.md"
  - "caring-as-collective-action.md"
---

# High Agency Culture

## When to Use
- Hiring for a role where the job description cannot fully anticipate the problems the person will face.
- Diagnosing why good people in your organization are producing correctly-formatted reports about blockers rather than resolved problems.
- Evaluating whether your interview process selects for disposition toward action, or only for legibility and credentials.
- Building the first several dozen hires, where each person you add will shape what future hires consider normal.

## Fails When
- You mistake contrarianism for agency. The high-agency person is not someone who rejects convention reflexively; they are someone who asks whether each constraint is load-bearing or decorative, and then acts on the answer.
- The organization has no clarity about goals. Initiative without direction is not high agency, it is Brownian motion. People taking unconventional action in contradictory directions produces chaos, not progress.
- You punish intelligent failures. If people are burned when unconventional approaches do not work out, you will train initiative out of the organization in about one quarter. People are rational actors in their environments.
- You only select for it and neglect to cultivate it. Agency is a disposition people arrive with, but organizations either amplify or suppress it. Selection and environment are both required.

## Core Concept

The distinction between high agency and low agency is the most important filter in hiring and the most important quality to cultivate in an organization. It is also one of the hardest to articulate, which is perhaps why it gets discussed less than intelligence or experience. Intelligence you can test. Experience you can verify. Agency is a disposition toward the world, a fundamental stance about whether obstacles are things to be removed or things to be accepted. High agency is refusing to accept constraints that are merely conventional. It is asking "why not?" when told something cannot be done. It is solving problems rather than reporting them. The difference between employees who escalate blockers and employees who eliminate them.

The difficulty is that low-agency behavior often looks like reasonableness. The person who says "we can't do that because of regulatory requirements" sounds prudent. The person who says "we can't do that because that's not how our vendor works" sounds realistic. Sometimes they are right. But the high-agency person asks the next question: Is this constraint real? Is it physics? Or is it convention dressed up as physics? This is the question that distinguishes them, not bravado or willingness to break rules for the sake of breaking them. It is a refusal to let load-bearing walls and decorative walls be treated identically.

I keep returning to an observation from visiting the SpaceX facility at Starbase in Texas. There was a mosquito problem, not surprising given the geography. Rather than accepting the mosquitoes, or spraying pesticides everywhere, someone had started breeding dragonflies in paddling pools to eat the mosquitoes. When we asked about it, the person was confused by the question. "Well, you just figure it out and you just solve." No reference to a process that would need to be followed, no concern about whether this fell within someone's job description, no worry about whether dragonfly cultivation was an approved approach to pest management. Just a problem, then a solution, and the path between them taken as obvious. That is what high agency looks like in practice. It is not about being reckless or ignoring legitimate constraints. The dragonfly solution is elegant and environmentally sound. It is about refusing to accept that problems are permanent features of your environment when they could be solved features of your environment.

Tesla demonstrated the same disposition with automobile manufacturing. They were not satisfied with subcontracting all parts of the car in the traditional automotive model. They asked: Is this constraint real? Is vertical integration actually impossible in modern manufacturing? Or is it simply not done? The answer turned out to be that it was simply not done, and that not doing it was creating significant problems that vertical integration could solve. The constraint was convention, not physics. Most of the constraints that stop organizations are like this. They feel permanent because everyone treats them as permanent, and they remain permanent as long as no one checks whether they are.

## How to Apply

1. **Interview for past behavior, not hypothetical heroism.** Never ask "what would you do if." People can answer hypothetical questions with imagined courage they have never demonstrated. Ask "tell me about a time when" questions: tell me about a time you solved a problem nobody asked you to solve; tell me about a time you accomplished something without the authority or resources you would normally need; tell me about a time you questioned a process everyone else accepted. Low-agency candidates struggle to generate examples, or their examples involve correctly following procedures and being recognized for compliance. High-agency candidates have stories where they took initiative beyond their formal role.

2. **Watch the recruiting process itself for signal.** If candidates encounter logistical friction during recruiting, do they wait for you to resolve it or resolve it themselves? If a work sample has ambiguous instructions, do they ask three clarifying questions, or make reasonable assumptions and proceed? These micro-behaviors predict macro-behaviors in the job.

3. **Listen for locus of control in how they narrate their history.** Are they the protagonist of their career story, or a supporting character moved around by external forces? People who believe outcomes are determined by their own actions take action to change circumstances. People who believe outcomes are determined by luck or powerful others accept circumstances as given.

4. **Hold precedent and first principles in tension, and teach the organization to do the same.** Pure precedent thinking perpetuates the status quo indefinitely. Pure first-principles thinking wastes enormous effort rediscovering known truths. The high-agency person respects precedent enough to assume there is probably a reason for how things are, but does not worship it to the point of never questioning. They ask: Has the underlying situation changed? Are the original reasons still valid? The Ozymandias trap is believing you are the first to notice some obvious improvement; usually you are not. But pure precedent generates no novelty.

5. **Build the environmental conditions, not just the hiring bar.** Psychological safety for initiative is a prerequisite. If people who take unconventional actions are punished when those actions fail, regardless of reasoning, you will rapidly train initiative out of your organization. At the same time, coordinate on goals. High agency operates within an understanding of what the organization is trying to accomplish. Directed problem-solving, not random motion.

6. **Distinguish failures of judgment from failures of effort.** Failures of judgment are forgivable. Failures of effort are not. This distinction signals that you value the disposition even when the outcome did not land.

## Examples

**Situation:** A new engineer at Stripe discovers that the onboarding flow for a particular type of merchant takes twelve business days because of a legacy verification dependency nobody has questioned in four years. The engineer is three weeks into the job and outside the team that owns the flow.

**Application:** The conventional move is to file a ticket and escalate through their manager. The high-agency move is different. They find out who specifically on the verification team could unblock the dependency and ask directly. They look at whether the dependency is actually required for all merchants or just a subset. They write a small proof-of-concept that routes the common case around the bottleneck. They come to the product review with both the diagnosis and a working prototype. They are not their manager and not formally authorized to touch that system. They did it anyway, because the constraint was decorative and no one had checked.

**Result:** The flow goes from twelve days to two days for the majority of merchants. More importantly, the engineer has just taught everyone around them what the local definition of normal looks like. The next engineer who finds a similar blocker now has a template. Agency is contagious; when you put high-agency people together, they reinforce each other's disposition toward action.

---

**Situation:** A candidate with a beautiful resume, strong technical ability, and excellent references sits through the "tell me about a time you accomplished something without the authority or resources you would normally need" question. They pause. They produce an example about driving consensus across three teams on a process change. Everyone was aligned. The VP approved it. The rollout went smoothly.

**Application:** You notice the example involves correctly following procedures and being recognized for compliance. There is nothing in the story that required them to act outside their formal role. You probe: "Was there anything anyone initially said no to?" The candidate describes how they navigated around concerns by gathering more data and presenting it in the right meeting. Thoughtful. Professional. Low-agency. You pass, even though on every legible dimension they are qualified.

**Result:** You avoid a hire who would have reinforced a norm of over-process at a critical moment in the company's growth. The person would have done good work. They would not have done the specific kind of work the company needs from that seat.

## Anti-Patterns (tactical)

**Don't:** Treat high agency as a personality test you run once at hiring and forget about.
**Why:** Agency is a cultural property, not just an individual one. High-agency people hired into bureaucratic environments learn within months that initiative is not rewarded, and they either leave or adapt. You have to cultivate it in environment as well as select for it in hiring.

**Don't:** Confuse agency with ignoring constraints.
**Why:** The dragonfly solution works precisely because it is elegant and respects the actual constraints of the situation (pest control, environmental health, cost). Someone who just ignored the mosquito problem, or who sprayed pesticides carelessly, would not be high-agency; they would be negligent. The high-agency person asks which constraints are real, then honors those and ignores the fake ones. There is a difference.

**Don't:** Punish intelligent failures.
**Why:** People learn incredibly fast from implicit signals. If the organization teaches that the safe move is always the conventional move, that is what people will do. They are not being cowardly; they are being rational. If you want initiative, you have to make the environment actually safe for it, which means tolerating some outcomes that did not work and distinguishing them from failures of effort.

**Don't:** Let "high agency" become a cover for rigidity or contrarianism.
**Why:** The highest-agency people I have worked with are not the ones most willing to be wrong; they are the ones who find being wrong most interesting. They are confident enough to act on their beliefs and humble enough to revise those beliefs when evidence warrants. Rigid people who cannot change their minds either avoid unconventional action entirely or pursue it recklessly without course-correcting. Neither is what you want.

**Don't:** Assume initiative alone is sufficient.
**Why:** Some organizations, often young startups, have so little coordination that they fragment into chaos. Everyone is taking initiative, but initiatives contradict each other, effort is duplicated, nothing coherent emerges. That is not high agency; it is anarchy. The art is creating an environment where people feel both empowered to take initiative and connected to a shared purpose that gives their initiative direction. Harder than it sounds.
