---
triggers:
  - "user accepts a requirement because 'the spec says so' or 'the customer asked for it'"
  - "user's design has features nobody can explain the origin of"
  - "user is adding functionality 'just in case' or because 'we've always had it'"
  - "user describes a requirement from a senior person as if it's final"
  - "user is building to someone else's spec without interrogating it"
  - "user asks how to cut scope on a bloated product"
use_when:
  - "the design has accumulated requirements over time and nobody remembers why each one is there"
  - "you're about to build something and want to make sure you're building the right thing"
  - "a smart senior person has given you a spec and you're tempted to accept it wholesale"
  - "you need to defend a simplification against institutional push-back"
fails_when:
  - "applied to safety-critical requirements with physical or regulatory grounding (crew safety, medical, certification)"
  - "used to dismiss expertise without engaging with the reasoning behind it"
  - "becomes a cultural habit of obstruction where nothing ships because everything gets re-litigated"
  - "you question requirements without being willing to own the replacement"
related:
  - "the-algorithm.md"
  - "first-principles.md"
  - "idiot-index.md"
---

# Question Requirements

## When to Use
- A design has requirements whose origins are unclear. "We've always done it this way." "The spec says so." "Engineering decided." Those are not reasons; they're evasions.
- You're accepting someone else's spec as the starting point for your work. Before you build, interrogate it. Every minute spent questioning saves ten spent executing on the wrong thing.
- Requirements come from a senior or respected person and the team is deferring without testing. This is the most dangerous case — smart-person requirements are the ones that hide longest.
- You need to cut scope on a bloated product and you don't know where to start. Start with requirements. The waste is always there, and it's almost always defended by "it was always like this."

## Fails When
- **Safety-critical requirements with genuine grounding.** Some requirements exist because people die if they don't. Crew vehicle margins, medical device testing, regulatory certifications. You still question them — to make sure the grounding is real and current — but you don't delete them just because they're expensive.
- **You use it to dismiss expertise.** Questioning a requirement is not the same as overriding the expert who set it. The question is: why? What's the reasoning? If the expert has a physics-level or evidence-level answer, respect it. If the expert only has "we've always done it this way," that's when you push. Skipping the engagement and just declaring "I questioned it" is lazy.
- **It becomes cultural obstruction.** In some organizations, "question everything" curdles into "veto everything." Nothing ships because every decision gets re-litigated. The discipline is to question the expensive, consequential requirements — not every bolt spec in every drawing.
- **You question without replacing.** Deletion creates a vacuum. If you remove a requirement, you owe the team either (a) confidence that no replacement is needed or (b) a specific replacement. "I don't like this requirement" without alternative is not questioning — it's complaining.

## Core Concept

Every requirement must come from a specific person. Not a department. Not a committee. A human being whose name you can say. That person must be able to defend why the requirement exists. If they can't — if they inherited it, if the context that produced it has changed, if they just don't know — the requirement is a candidate for deletion.

This is the first step of the algorithm, and it's the step most teams skip. They start optimizing or automating something that shouldn't exist. I've done it myself, expensively. The fiberglass strip on the Tesla Model 3 battery pack — added to damp noise, which turned out not to matter. The folding mechanism on Falcon 9 grid fins — added to reduce drag during ascent, which turned out to be negligible. Both existed because someone added them at some point, with some reasoning, and then no one questioned them. Deleted, both products got simpler and cheaper.

The principle: requirements are hypotheses, not facts. A hypothesis has an owner who advances it, reasoning that justifies it, and a prediction that fails or succeeds against evidence. That's what a requirement should be. "This part needs to handle 500G" is a hypothesis. "Because the launch acceleration profile requires it" is reasoning. "If it doesn't, the part breaks during ascent" is a testable prediction. You can evaluate all three. But "this part needs to handle 500G because the spec says so" has no owner, no reasoning, no evidence. It's ritual.

Junior engineers should be explicitly told: requirements from smart, senior people are the most dangerous. Not because smart people are wrong more often than others — they're wrong less often. But because their requirements get questioned least. Everyone defers. The requirement propagates through the design, gets built around, becomes load-bearing — and then when it turns out to have been wrong, the cost of undoing it is enormous. Smart people should welcome being questioned. The ones who don't are dangerous for exactly that reason.

The naming principle is the operational mechanism. Every requirement must trace to a specific human. Why? Because you can ask a person "why is this here?" and get an answer. You cannot ask a department. Departments are convenient hiding places for requirements that have outlived their reasoning. If a requirement came from a person who has since left and nobody remembers the reasoning — that's a clear candidate for deletion. Not because the original reasoning was wrong, but because nobody is alive to defend it, which means nobody will notice if it's wrong now.

There's a deeper corollary: you should actively seek disconfirming feedback on your own designs. The default is that people around you will defer, especially if you're senior or founder-rank. That's the worst thing they can do. You need the people closest to the work to tell you when you're wrong, and they'll only do that if you've built a culture where disagreement is rewarded rather than punished. The principle I try to live by: it's OK to be wrong, just don't be confident and wrong. Confidence without willingness to be corrected is how organizations die.

The 10% rule gives you a calibration test: if you're not adding back at least 10% of the requirements you deleted, you didn't delete enough. This matters because people use "I'm deleting requirements" as cover for only deleting the safe ones. The rule forces you to delete until you've gone too far — until some of what you deleted actually mattered and you have to restore it. If you never have to restore anything, you were too cautious. The restorations aren't failures; they're calibration data that tells you where the real boundary is.

## How to Apply

1. **List every requirement with an owner.** For every requirement in the system, write down a specific person whose name is on it. If you can't name an owner, flag the requirement as orphan. Orphan requirements are strong deletion candidates.

2. **Ask each owner to defend the requirement.** Not in a confrontational way — in a curious, honest way. "Why is this here? What was the original reasoning? Is the reasoning still valid?" If the owner gives a physics-level or evidence-level answer, great — the requirement is justified. If they give "we've always done it this way," the requirement is suspect.

3. **Delete aggressively.** For every requirement that doesn't have live reasoning behind it, delete. Not "park." Not "review later." Delete, and plan to add back if reality bites. The deletion is a probe, not a verdict.

4. **Check the 10% rule.** After a deletion pass, count how many requirements you're adding back because something broke. If it's under 10%, go harder — you were too cautious. If it's over 30%, you were too aggressive — slow down. 10-20% is the calibration target.

5. **Be especially suspicious of smart-person requirements.** When a senior engineer or respected expert set a requirement, double the scrutiny. Not to disrespect them, but to protect against the deference tax. Ask explicitly: "Why did so-and-so set this? What was the context? Is the context still current?"

6. **Build a disagreement culture.** Explicitly reward the people who tell you you're wrong. Thank them by name in meetings. Make sure the team sees that disagreement doesn't end careers. Without this, every requirement you set becomes hard to remove, because no one will challenge it.

7. **Own the replacement when you delete.** If you remove a requirement, either commit to the belief that no replacement is needed (and be willing to be wrong) or specify what replaces it. Deletion without replacement just creates gaps that get filled poorly later.

8. **Reprise regularly.** Requirements that were correct five years ago may be wrong today. Context changes. Technology evolves. Requirements audits aren't a one-time cleanup; they're a periodic discipline. Once a year, at least, walk through the core requirements again.

## Examples

**Situation:** Tesla Model 3 battery pack assembly includes a robot gluing fiberglass strips to the pack. The robot is slow and unreliable.
**Application:** Before fixing the robot, ask why the fiberglass is there. Trace back the requirement. Original reasoning: dampen noise. Test without the fiberglass: noise difference is negligible. Delete the fiberglass. Delete the robot. Delete the process step.
**Result:** The step that shouldn't have existed is gone. Line throughput increases. Capital cost drops. This wasn't an engineering cleverness win — it was a requirements audit that saved the cleverness for things that mattered.

**Situation:** A senior engineer at SpaceX has set a spec that a component must handle 500G. Junior engineers building around it accept the spec without questioning.
**Application:** Stop. Ask the senior engineer: "Why 500G? Where does that come from?" If the answer is "because the launch profile requires it, here's the math," fine — the requirement is real. If the answer is "that's what we did last time," then the requirement is inherited, not derived. Re-derive it from the current mission profile. It might be 400G. It might be 600G. Whatever it is, it should come from current physics, not from historical precedent.
**Result:** The correct-for-today number, which might be different from the historical number. The component is designed to the real requirement, not to a ceremonial one.

**Situation:** SpaceX McDocker docking adapter.
**Application:** NASA offered their docking adapter — decades of heritage design, already qualified, effectively free. Most teams would have taken it. SpaceX asked: does Dragon actually need all the flexibility of NASA's generic adapter? Or would a simpler design meet the real constraints? They reasoned from the actual physics of the Dragon-to-ISS interface, concluded a simpler design would work, and built McDocker from bike shocks and catalog parts. Engineers rolled a rough mock-up to the CEO's desk.
**Result:** McDocker flew successfully, lighter and cheaper than the heritage design. The requirement "use NASA's adapter" was inherited, not derived. Once questioned, it turned out the real requirement was much narrower, and much simpler to meet.

**Situation:** A team is adding "just in case" functionality to a product.
**Application:** For each "just in case" addition, ask: in case of what, specifically? What's the scenario? What's the probability? What happens if we don't have this? If the answers are vague, delete the addition. If they're specific — "in case X fails, we need fallback Y because Z" — keep it, but document the reasoning so future teams know why it's there.
**Result:** The default answer for "add functionality just in case" becomes no. The exceptions are explicit and documented. Bloat drops. The product gets faster, cheaper, and easier to maintain.

## Anti-Patterns (tactical)

**Don't:** Accept requirements from departments.
**Why:** "Engineering said we need this." "Compliance requires it." "Sales told us." Departments can't be asked why. People can. If you can't name the specific human whose requirement this is, the requirement has no owner, and a requirement without an owner is orphan. Delete it or assign an owner who can defend it.

**Don't:** Defer to smart people without testing.
**Why:** The requirements that cause the most damage are the ones set by people everyone respects. Nobody pushes back. The requirement propagates. By the time it turns out to be wrong, half the design is built around it. Smart people should be tested harder, not softer, for exactly this reason. The good ones welcome it.

**Don't:** Use "question everything" as obstruction.
**Why:** In the wrong hands, this principle becomes veto culture — every decision gets re-litigated, nothing ships. The discipline is to question the consequential, expensive, architecturally load-bearing requirements. Not every bolt spec, not every feature. Calibrate the effort to the stakes.

**Don't:** Delete without the 10% test.
**Why:** If you never add anything back, you weren't really questioning — you were only removing the obvious waste. The aggressive standard is: delete until some of what you deleted actually mattered, then restore the 10% that did. Without that test, you stop at the safe cuts and leave most of the waste in place.

**Don't:** Question the requirement without owning the replacement.
**Why:** If you tear down a requirement, you're now responsible for what fills the gap. Either nothing, because the requirement was pure waste, or a specific alternative. "I don't like this requirement" without alternative is complaining, not questioning. Complaining wastes the team's time; questioning produces better designs.

**Don't:** Let the culture calcify into deference.
**Why:** If the team sees that questioning a senior person's requirement ends careers, they stop questioning. Now you have a team of yes-men building around requirements nobody believes in. Actively reward the people who push back. Make the founder's own requirements the target of scrutiny first — model the behavior you want.

**Don't:** Confuse questioning with ignoring.
**Why:** The output of questioning is either a kept requirement (with fresh justification) or a replaced one. It's not "the requirement doesn't matter, ignore it." If the reasoning holds, keep the requirement and move on. Ignoring requirements you found inconvenient isn't questioning — it's violating, and the downstream consequences will come back expensive.

**Don't:** Treat the audit as one-time.
**Why:** Requirements that were correct in year 1 may be wrong in year 5. Technology changes, customer contexts shift, certifications update, manufacturing capabilities grow. Run the audit periodically. A requirement that passed scrutiny three years ago might not pass today — and if it's still in the design, you're paying for a relic.

**Don't:** Forget that this is the first step of a larger process.
**Why:** Questioning requirements is step 1 of the algorithm. After you delete the wrong ones, you still have to simplify what remains, accelerate cycle time, and eventually automate. If you stop after questioning, you've cleaned up the requirements list but haven't yet built anything better. The questioning sets the foundation; the other steps build on it.
