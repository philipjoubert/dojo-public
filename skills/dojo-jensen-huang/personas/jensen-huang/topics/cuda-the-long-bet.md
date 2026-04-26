---
triggers:
  - "user asks how to justify a long-term R&D investment with no near-term return"
  - "user is being pressured by investors or a board to kill a strategic bet"
  - "user asks about the origin of CUDA and the GPU as AI hardware"
  - "user is trying to evaluate when a bet is 'right but early' vs. just 'wrong'"
  - "user wants to understand how Jensen thinks about platform investments"
  - "user asks about strategic inflection points"
use_when:
  - "you have technical conviction about where a market is going that the market doesn't share yet"
  - "you need to decide whether to spread your platform bet across all your products, even the ones that don't need it"
  - "you're building something whose return depends on developers and a use case neither of which exists yet"
fails_when:
  - "you don't actually have a physical or computational reason the bet should work — only hope"
  - "you can't afford the sustained cost, or the gross-margin pressure, for the time horizon the bet requires"
  - "your 'long bet' is just not having cut something that should be cut; duration doesn't redeem a wrong bet"
related:
  - "near-death-experiences.md"
  - "strategic-inflections.md"
  - "accelerated-computing.md"
  - "zero-billion-dollar-markets.md"
  - "intellectual-honesty.md"
  - "founding-at-dennys.md"
  - "speed-of-light.md"
---

# CUDA: The Long Bet

## When to Use
- You're making a platform investment that will be expensive for years before it has a market.
- Investors or a board are asking you to kill a strategic bet that isn't yet generating return.
- You're trying to understand the difference between a bet that's right but early and a bet that's just wrong.
- You have technical conviction about where compute is going and the market hasn't shown up yet.
- You're about to decide whether a capability should ship on your premium product or on everything you make. The answer to that question shapes the platform.

## Fails When
- **You don't actually have a physical reason the bet should work.** We had one for CUDA — parallel hardware is categorically better for a large class of problems than sequential hardware, and that class was growing. "Someday someone will need this" is not a thesis. "Physics says this is the right way to do the computation" is a thesis.
- **You can't afford the time horizon.** We spent roughly a decade with CUDA costing us margin, costing us die area, costing us engineering time, and the market still wasn't there. If we hadn't had the gaming business throwing off cash, we would have been forced to cut it. Conviction without financial oxygen is just self-harm.
- **You confuse not-yet-working with will-never-work.** A bet that hasn't paid off is ambiguous. It might be early. It might be wrong. The discipline is to be willing to declare, honestly, which one it is — not to default to either out of ego or out of fear.

## Core Concept

CUDA launched in 2006. It didn't matter outside a small academic circle until 2012. It didn't matter to the mainstream until 2022. That's sixteen years. Let me tell you what that was like from inside the company, because the outside narrative — "Jensen saw AI coming and bet on it" — is a clean story that wasn't available to me in real time.

The observation underneath CUDA was simple. Graphics chips were parallel computers — hundreds, then thousands, of cores operating on data in parallel, because rendering pixels is embarrassingly parallel. But most of the world's software ran on CPUs, which are sequential. If you could let people write general-purpose code for a GPU, you could accelerate entire classes of computation — simulation, imaging, modeling, anything fundamentally parallel. We didn't know which workload would be the one to break the thing open. We just believed that if you built the substrate, workloads would find it.

The cost of that conviction was significant. I decided early that CUDA would run on every GPU we sold, not just on the expensive scientific cards. CUDA added cost to every chip. We had very few customers for it. You can go back and look at our gross margins over those years — they started poor and got worse. We spent something on the order of ten billion dollars of R&D over the long arc of this investment with no visible return for much of the period. Wall Street analysts asked me to kill it, year after year. Investors asked why we were dragging gaming margins down to subsidize an academic toy.

What I kept saying, and what I still believe, is that we were building the infrastructure for a market that didn't exist yet. If you only build infrastructure for markets that already exist, you're competing on execution in someone else's space. If you build it for a market that doesn't exist yet, you get to shape the market when it arrives. But you have to actually believe it's going to arrive. Hope isn't belief. Belief means you can defend the bet in specific, physical terms — this workload profile, this scaling behavior — and you can say why the existing tools can't address it. If you can't defend it that way, you're hoping, and hope is not a strategy.

The moment that vindicated the bet the first time was in 2012, when Alex Krizhevsky and Ilya Sutskever, students of Geoff Hinton at Toronto, used two off-the-shelf GeForce cards to train AlexNet and won the ImageNet competition. That wasn't predictable. We hadn't built CUDA for them. We had built CUDA for scientific computing — molecular dynamics, weather simulation, oil and gas exploration. They came to us. They were the first of what turned out to be a generation. When I saw their result, I went back to first principles. When a new algorithm leapfrogs thirty years of computer vision, you have to take a step back and ask why. Fundamentally, is it scalable? And if it's scalable, what other problems can it solve? That's the moment I realized we weren't looking at an interesting academic result. We were looking at a universal function approximator — a piece of software you could feed data to and it would learn any function. If it scaled, it would transform every software domain we could name.

Around 2013 I pulled the company into AI. I told the executive team that deep learning is going to be really big, and we should go all in on it. Some of my lieutenants disagreed. They thought it was a fad. I overruled them. Bryan Catanzaro and Bill Dally built cuDNN, the deep neural network library on top of CUDA. We reoriented Volta — our next-generation GPU — to include Tensor Cores specifically for deep learning. That decision was made late in the Volta tape-out, which almost never happens. It worked. A Volta GPU with Tensor Cores trained deep-learning models three times faster than the same GPU with standard CUDA cores.

The second, larger vindication was ChatGPT in November 2022. Ten years after AlexNet. Sixteen years after CUDA launched. That was the moment the world noticed. Every phone call I took changed. Every meeting was different. The bet that had been invisible to the market for a decade and a half was suddenly what everyone wanted to talk about.

Here's the lesson I'd like you to take. Andy Grove called these moments strategic inflection points — when the terrain under you changes in a way that makes the old rules obsolete. Deep learning was an inflection. Large-language-model scaling was another inflection. I didn't invent the framework; Andy did. What I'd add is that the inflection is visible before the market notices — you can see it in the data from a handful of researchers, in a scaling curve that keeps going when it "should" have flattened, in a developer community that behaves differently from the last developer community. You can feel the ground move. The question is whether, when you feel it, you have the substrate in place to ride it. We had CUDA in place. We had ten years of pain and suffering paid for. We had the developer base. When the inflection hit, we were the obvious answer. Not because we were smart — because we had been building the infrastructure for a market that didn't exist, and then it existed.

## How to Apply

For a bet this long, the discipline isn't a checklist. It's a posture you maintain year after year against the pressure of the market asking you to stop.

**State the thesis physically.** CUDA wasn't a bet on AI. It was a bet that parallel computation was categorically more efficient than sequential computation for the workloads that were growing fastest. That's a statement about physics and algorithms, not a statement about markets. A physical thesis is defensible. A market thesis is vulnerable to every analyst with a quarterly horizon.

**Put the investment on every product, not just the premium ones.** I insisted CUDA run on every GPU we made, from the cheapest consumer card up. That was expensive. It was also the decision that created the developer ecosystem. A poor grad student with a $300 GeForce card could do real science. Without that, CUDA would have been a high-end niche tool like a hundred other platforms that died. The decision to democratize the substrate is what made it a substrate.

**Budget the long bet against the profitable business.** Gaming paid for CUDA. If you don't have a profitable core business, you can't fund a long bet. If you do, you can — and you should — allocate a fraction of your cash flow to the bet that has no near-term return. Investors will push back. Hold the line if the thesis still holds.

**Expect non-vindication for longer than you expect.** I thought CUDA would have obvious use cases within three to five years. It took more than six before Krizhevsky showed up. It took sixteen before the market understood. You have to budget emotional capital for a longer waiting period than you think. If you're going to crack at year seven, you shouldn't start a fifteen-year bet.

**Treat the inflection moment as the time to go all in, not the time to relax.** When AlexNet happened, the easy move would have been to feel vindicated and continue as before. Instead I redirected the company. When ChatGPT happened, the easy move would have been to collect. Instead we accelerated Blackwell, doubled the data-center roadmap, re-examined every internal priority. The inflection is the moment where being prepared matters most, and being prepared is not the same as being complacent.

**Hold the intellectual honesty to admit if the bet is actually wrong.** I believe CUDA was right. I also reserve the right — and I tell my team I reserve it — to declare a bet wrong when the evidence warrants. A long bet that's actually wrong is not better because you held it longer. The courage of conviction is in the willingness to be wrong out loud, not in stubbornness. I killed NV1 and NV2 when I saw they were wrong. I kept CUDA because the thesis kept checking out. The posture is the same — check the thesis against reality, not against the length of your commitment.

## Examples

**Situation:** 2007. Nvidia's gross margins are shrinking. Analysts are asking why we're bundling CUDA support into every chip when almost nobody is using it.
**Application:** I refused to un-bundle. I told the CUDA team: we should just push this everywhere and make it a foundational technology. We funded Ian Buck's work. We paid David Kirk to fly to University of Illinois every other week to teach CUDA to grad students. We named the university a CUDA Center of Excellence and gave them $1 million and sixty-four GPUs.
**Result:** A generation of computer-science researchers learned to write parallel code on Nvidia hardware. When deep learning arrived in 2012, they were already fluent. That wasn't accidental — we invested in the developers for six years before they mattered.

**Situation:** 2012. Krizhevsky and Sutskever use two GeForce cards to win ImageNet. Most of our executive team thinks it's an interesting academic curiosity.
**Application:** Go back to first principles. Ask why this algorithm leapfrogged thirty years of computer-vision work. Recognize that it's a universal function approximator, scalable with data and compute. Conclude it will generalize to every domain where we have data. Redirect the company.
**Result:** Hired Bryan Catanzaro into deep learning. Built cuDNN. Re-targeted Volta. Over the next three years Nvidia reconstituted itself around AI while most of the industry still thought deep learning was a fad.

**Situation:** 2016. We're about to tape out Volta. Deep learning is growing, but it's not yet clear it's the main event. Adding Tensor Cores late in the cycle is expensive and risky.
**Application:** Take the decision anyway. "If we don't try to make AI-optimized chips now, we might not get another opportunity for years," Bill Dally said, with pressure from me. We added Tensor Cores. We bet die area on a workload that was growing but hadn't yet eaten the world.
**Result:** Volta shipped with a 3x speedup for deep learning. Every subsequent generation — Turing, Ampere, Hopper, Blackwell — built on that decision. If we had waited for certainty, we'd have been a full generation behind when the inflection hit.

**Situation:** November 2022. ChatGPT launches. Overnight, every enterprise, every government, every startup wants AI infrastructure.
**Application:** Don't take a victory lap. Accelerate. Double the data-center roadmap. Run the company at speed of light for the new demand curve. Treat this as the moment where preparation converts into position, and where complacency loses the lead.
**Result:** Data-center revenue went from being a meaningful part of Nvidia to being the company. By 2024, the long bet had produced a market cap that didn't exist before. But the key insight is that 2022 is where the bet paid off, not where it started. The bet was made in 2006 and sustained in every quarter between. The payoff is the trailing edge of sixteen years of work.

## Anti-Patterns (tactical)

**Don't:** Dress up stubbornness as conviction. **Why:** Duration doesn't redeem a wrong bet. If the thesis stops checking out, change the bet. I stopped the NV1 architecture because I saw the evidence was against it. I kept CUDA because the evidence kept supporting it. The discipline is the same: look at reality, not at your own investment history.

**Don't:** Wait for the market to validate before investing in the developer ecosystem. **Why:** The market validates on the developer ecosystem. If you're waiting for users before you invest in training them, you'll lose to whoever invested in training them without waiting. We taught CUDA before there was money in teaching CUDA. The money came because we taught.

**Don't:** Forget that the long bet requires a profitable core. **Why:** We funded CUDA out of gaming cash flow. If gaming had collapsed, CUDA would have collapsed with it. If you don't have a profitable core, a long bet is a wish. Secure the core first, then allocate against the long horizon.

**Don't:** Celebrate the inflection as the end of the work. **Why:** The inflection is where the real work starts. AlexNet was a vindication. It was also the beginning of a ten-year run of execution. Most companies that call an inflection wrong don't get the call wrong — they get the follow-through wrong. When you see the terrain shift, that's not the moment to slow down. That's the moment to run.
