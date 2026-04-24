---
triggers:
  - "user asks what kind of work they should do"
  - "user is torn between being a builder vs. studying a field formally"
  - "user is in grad school / academia and wondering if they should leave to build"
  - "user is a builder who feels pressure to look more 'scientific' or 'rigorous'"
  - "user is hiring and asking how to spot real hackers vs. résumé-holders"
  - "user asks how to learn to build (programming, design, writing)"
  - "user wants to know why big companies produce worse products than small ones"
  - "user asks whether they need credentials to do real work"
use_when:
  - "founder or creator is navigating identity around building vs. studying / researching / theorizing"
  - "founder is structuring how design gets done inside their company — individual ownership vs. committee"
  - "user is confused about why programmers are creative people, not technicians"
  - "user is evaluating a hire and trying to tell implementors from designers"
fails_when:
  - "user is asking about maker's schedule vs. manager's schedule — that's makers-schedule.md"
  - "user is asking how to do great work in general — that's how-to-do-great-work.md"
  - "user needs positioning or PMF advice — different domain entirely"
related:
  - "how-to-do-great-work.md"
  - "makers-schedule.md"
  - "founder-mode.md"
  - "earnestness.md"
---

# Hackers and Painters: Builders, Not Scientists

## When to Use
- A founder is asking whether to stay in a PhD program, take a research job, or leave to build.
- A builder (engineer, designer, writer) feels vaguely guilty that they're not being more "rigorous" or "academic" about their craft, and the guilt is distorting how they work.
- A founder is structuring how design decisions get made inside their company — whether a product gets designed by committee with specs handed down, or by individuals who own a thing end-to-end.
- A hiring decision that hinges on separating real builders from people whose credentials suggest they can build but who turn out to be implementors.
- Someone is dismissing programmers (or designers, or writers) as technicians rather than treating them as creative people with empathy for users.

## Fails When
- The question is actually about time-blocking and meeting cadence — that's makers-schedule.
- The question is about career ambition, taste, and what to work on with your life — that's how-to-do-great-work.
- The question is about running a scaled org and retaining founder-level attention to detail — that's founder-mode, which is downstream of this but specific to organizational scaling.

## Core Concept

Hackers and painters have a lot in common. In fact, of all the different types of people I've known, hackers and painters are among the most alike. **What they have in common is that they're both makers.** Along with composers, architects, and writers, what hackers and painters are trying to do is make good things. They're not doing research per se, though if in the course of making good things they discover a new technique, so much the better.

This matters because the world keeps misfiling hackers. Universities file them as scientists. Companies file them as engineers. Both are wrong. Good software designers are no more engineers than architects are. The border between architecture and engineering is not sharp, but it's there, and it falls between *what* and *how*: architects decide what to do, and engineers figure out how to do it. Hacking at its best is not just deciding how to implement someone else's spec — it's creating the spec, and the best way to create the spec is to implement it.

When you mis-file hackers as scientists, a specific failure follows. In the best case the research paper is a formality — the hackers write cool software and then write a paper about it. But often the mismatch causes problems: it's easy to drift from building beautiful things toward building ugly things that make more suitable subjects for papers. Research must be original (the way to be sure you're exploring virgin territory is to stake out ground no one wants) and substantial (awkward systems yield meaty papers, because you can write about the obstacles you had to overcome). The way to create something beautiful is often to make subtle tweaks to something that already exists, or combine existing ideas in a slightly new way — and that kind of work is hard to convey in a paper.

When you mis-file hackers as engineers, a different failure follows. Big companies set things up so that software is designed by committee and hackers merely implement the design. They do this because it decreases the standard deviation of the outcome — only a small percentage of hackers can actually design software, and it's hard to pick them out, so instead of entrusting the future of the product to one brilliant hacker, they design by committee. But when you damp oscillations, you lose the high points as well as the low. **This is not a problem for big companies, because they don't win by making great products. Big companies win by sucking less than other big companies.**

This is also why startups win. If you can figure out how to get in a design war with a company big enough that its software is designed by product managers, they'll never keep up. The place to fight those wars is in new markets, where no one has yet managed to establish any fortifications. Microsoft did this. Apple did this. HP did this. Almost every successful startup has.

Because hackers are makers, the right place to look for metaphors is not in the sciences but among other makers. Painting has been a much richer source of ideas for me than the theory of computation. You learn to paint mostly by doing it. Ditto for hacking. Scientists learn by doing labs and problem sets — they start out doing perfect work, reproducing what someone else has done, and eventually get to where they can do original work. Hackers, from the start, are doing original work — it's just very bad. **So hackers start original and get good; scientists start good and get original.**

A painter learns by looking at the masters. For hundreds of years it has been part of the traditional education of painters to copy the great works, because copying forces you to look closely at how a painting is made. Writers do this too — Franklin learned to write by summarizing Addison and Steele, Raymond Chandler did it with detective stories. Hackers can learn the same way, by reading good source code. This is one of the less-publicized benefits of open source.

The other thing painting teaches us: paintings are created by gradual refinement. They begin with a sketch. Details get filled in. But it's not just fill-in — countless paintings, x-rayed, turn out to have limbs that have been moved or faces that have been readjusted. **The specifications for a good program, like the drawing under a great painting, are not perfect up front.** You're better off admitting this and writing programs in a way that allows the spec to change on the fly. The structure of large companies makes this hard for them, which is one more reason startups have an advantage. Everyone knows about premature optimization. Just as dangerous is premature design — deciding too early what a program should do.

Two more things follow from making rather than studying:

**Individual ownership, not committee design.** When painters worked together on a painting, they never worked on the same parts. The master painted the principal figures; assistants painted the backgrounds. You never had one guy painting over the work of another. That's the right model for software too. Don't push collaboration too far — when a piece of code is being hacked by three or four people, no one of whom really owns it, it ends up like a common room: bleak, abandoned, accumulating cruft. The right way to collaborate is to divide projects into sharply defined modules, each with a definite owner, with interfaces between them that are as carefully designed and, if possible, as articulated as programming languages.

**Empathy as the secret of great software.** Most software is for a human audience. And so hackers, like painters, must have empathy to do great work. Empathy is probably the single most important difference between a good hacker and a great one. Some hackers are quite smart but when it comes to empathy are practically solipsists. It's hard for such people to design great software, because they can't see things from the user's point of view. Source code, too, should explain itself. "Programs should be written for people to read, and only incidentally for machines to execute." You need empathy not just for your users but for your readers — and you'll be one of them, six months from now, when you've forgotten how your own code works.

## How to Apply

1. **Locate yourself on the maker-vs-studier axis.** If you are a maker, the correct move is almost always to be making things, not studying them, writing about them, certifying yourself about them, or theorizing about them. This is not anti-intellectual — it's correctly-filed. The question to ask yourself is: when I had a whole Saturday free, did I *make something* or did I read about making things? Makers make. If you're not making, either you're not a maker (fine, be something else) or you're in the wrong environment for the kind of person you are.

2. **Evaluate where you work by whether it lets you design.** Universities force hackers to be scientists. Companies force them to be engineers. Both fates are bad for makers. If you're inside one of those institutions and your design instincts are being choked off, that is a real cost, not a preference. The fix is usually not "I'll design in my spare time" — it's "I need to leave for an environment where making is the job."

3. **Hire for the ability to do the whole thing, not just half of it.** When you're hiring a designer, a developer, or a writer, the distinguishing test is whether they can both conceive and execute — whether they're drawing the thing and painting the thing, or whether they're implementing someone else's drawing. The best interview signal is what someone does in their spare time. At Viaweb, we would have been reluctant to hire anyone who didn't work on open-source projects or their own things on the side. **You can't do anything really well unless you love it, and if you love to hack, you'll inevitably be working on projects of your own.**

4. **Structure collaboration like a Renaissance workshop.** Don't design by committee. Don't have three people hacking on one piece of code with none of them owning it. Partition the work into modules with clear interfaces and a single named owner per module. That's how Verrocchio's workshop painted the *Baptism of Christ*; that's how Unix was written; that's how to structure an engineering team.

5. **Sketch in code, not on paper.** Don't figure out the whole program on paper before going near a computer. Write programs the way painters paint — starting with a rough version, gradually beating it into shape, moving things around when the first draft turns out to be wrong. Debugging isn't a final pass for typos. In this style, programming is mostly debugging — and that's a feature, not a flaw.

6. **Check every decision by empathy.** Does a user who's never seen this before guess correctly what to do? Would I, returning to this code in six months with no memory of writing it, understand what I was doing? If the answer is no to either, the work isn't done yet, regardless of how clever it is.

## Examples

**Situation:** A founder finishing a CS PhD asks whether to stay in academia (advisor has offered postdoc, decent chance at a tenure-track job in three years) or leave to build a startup around ideas from their thesis.

**Application:** You've already answered your own question by calling it a startup. The PhD taught you a specific technical edge, which is valuable. What it also taught you, implicitly, is how to behave in a way that's wrong for the work you actually want to do — to write papers instead of ship things, to choose problems because they produce good dissertations rather than because they're beautiful, to value rigor in the form the academy rewards (formalism, citation counts, committee approval). If you take the postdoc, you're not "buying yourself optionality." You're adding another three years of the wrong training. Meanwhile the ideas in your thesis that are actually worth building will stop being worth building — the field moves, someone else shows up. The right move is almost always to leave. It's the same move Leonardo made when he quit Verrocchio's workshop — not because the workshop was bad, but because he was ready to make things at his own account. What you will lose by leaving is academic prestige, and academic prestige is fossilized inspiration. What you will gain is the ability to actually build the thing.

**Result:** Founder leaves. The thesis ideas become the seed of a company. Two years in, the academic work that used to feel urgent feels like a different language from a different life.

---

**Situation:** A founder at an eight-person startup is trying to structure how product decisions get made. Their first PM wants to introduce formal specs, weekly design reviews, and written approval from the PM before any feature lands. The engineers are chafing.

**Application:** Your PM is trying to install the big-company design process in a startup, which is exactly the wrong direction. Big companies design by committee because they can't reliably find hackers who can design, and they want to decrease the standard deviation of their outcomes. A startup's entire advantage is that it doesn't do this — the same people design and implement, and the high-variance outcome is the whole reason anyone funds a startup. If you install spec-then-approve process at eight people, you will get output that looks safer, more considered, and more coordinated, and it will also be, on average, worse than what the unsupervised hackers would have shipped. What you want instead is the workshop model: each engineer owns a clear module or feature end-to-end, the interfaces between those pieces are carefully articulated, and the PM's job is to make sure the pieces fit the same picture — not to paint over anyone else's work. If your engineers aren't capable of both designing and implementing, that's a hiring problem, not a process problem, and it's a hiring problem you should fix by upgrading the people, not by installing process that lets mediocre builders coast.

**Result:** Founder reverses the specs-and-reviews process. Ships faster. The one engineer who actually needed to be managed turns out to be someone who couldn't design and had been coasting on the weekly reviews as cover. Replaced within a quarter.

## Anti-Patterns (tactical)

**Don't:** Treat programmers (or designers, or writers) as implementors of someone else's vision.
**Why:** At best you lose the design talent you have. At worst you lose the person, because hackers who can actually design will not stay long in environments that treat them as ditch-diggers. The standard-deviation-reducing machine is appropriate for big companies that win by being less bad than their competitors. If you're a startup, you win by being great, and that requires the high-variance outcome that only happens when the same person designs and implements.

**Don't:** Get math envy.
**Why:** Everyone in the sciences secretly believes mathematicians are smarter than they are. I think mathematicians also believe this. The result is that scientists make their work look as mathematical as possible — Greek variables, formulas, formalisms — even when the underlying substance doesn't warrant it. The further you get from the natural sciences, the more this hurts. Don't dress up what you're doing in formal notation to make it look respectable. You're a maker. Makers don't suffer from math envy. Writers and painters don't.

**Don't:** Learn to hack by taking classes.
**Why:** You learn to hack by hacking. The classes are an occasion for it, maybe, but the learning happens when you write programs of your own — at age thirteen if you're lucky, and every week for the rest of your life. What you learn in a college programming course is mostly what bad taste you had in high school. Apply the painter's method: copy masterworks (read great source code), produce constantly, compare what you made to what the masters made, notice the gap, reduce it.

**Don't:** Announce your design process as "scientific" or "data-driven" if what you're actually doing is making things.
**Why:** You will attract and retain the wrong people. Hackers with real design ability will smell the performance and leave. What you'll be left with is people who like the theatre of rigor — presentations, dashboards, committee reviews — and who cannot actually build. Meanwhile the competitor that quietly lets its one brilliant designer ship without consensus runs past you.

**Don't:** Wait for the specification to be finalized before writing code.
**Why:** Specifications are never finalized. The only way you find out what the spec should be is by implementing a draft and looking at what it does. Premature design is as dangerous as premature optimization. Write the program the way a painter paints: sketch, then refine, with the willingness to move limbs and readjust faces when the first draft turns out to be wrong.

**Don't:** Accept "empathy is a soft skill" as an excuse for anyone building user-facing things.
**Why:** Empathy is probably the single most important difference between a good hacker and a great one. It's also the single most distinguishing signal when you're trying to hire great ones. Someone who explains a technical concept to a non-technical person by saying "a high-level language is what the compiler uses as input to generate object code" is telling you something important about what they'll build. They'll build software that explains itself the same way — which is to say, doesn't.
