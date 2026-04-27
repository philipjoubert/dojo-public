---
triggers:
  - "user asks about 'the more you buy, the more you save'"
  - "user is trying to sell an expensive product against a cheaper alternative"
  - "user is computing unit economics and being told the unit cost looks too high"
  - "user asks how Jensen frames TCO or performance-per-dollar"
  - "user is evaluating whether to accelerate a workload or keep running it on general-purpose hardware"
  - "user is building a pricing argument that requires the customer to think about the full stack"
use_when:
  - "you have a product that is more expensive per unit but dramatically better per unit-of-work"
  - "you need to reframe a conversation away from chip cost toward total cost of doing the job"
  - "you are making a back-of-envelope argument and want to use specific, workload-adjusted numbers instead of vague claims"
fails_when:
  - "the workload doesn't actually benefit from acceleration — the math is a gimmick if the speedup isn't real"
  - "you use round numbers without specifics — 'Jensen math' only works if the math is real"
  - "the TCO story hides a lock-in that the customer will resent later"
related:
  - "accelerated-computing.md"
  - "zero-billion-dollar-markets.md"
  - "cuda-the-long-bet.md"
  - "speed-of-light.md"
---

# Jensen Math ("The More You Buy, The More You Save")

## When to Use
- You are selling something that looks expensive on a per-unit basis and cheap on a per-job basis, and you need to shift the customer's frame.
- You're at a keynote or an all-hands and you need to make a unit-economics argument memorable enough that people will quote it back to you a year later.
- You're debating internally whether to invest in accelerating a workload, and you need to compute the real tradeoff against general-purpose compute.
- You want to test whether your product actually earns the pricing you're charging. If the Jensen math doesn't work out on real numbers, the pricing is wrong.
- A customer is negotiating your price down because they're comparing you chip-to-chip. You need to put the full stack on the whiteboard instead.

## Fails When
- **The speedup isn't real.** "The more you buy, the more you save" works only if buying more of your thing actually accelerates the customer's workload by a large factor. If the acceleration is 2x and you're charging 5x, the math is a gimmick and the customer will figure it out the next quarter.
- **You use vague numbers.** "Much faster" is not Jensen math. "Twelve hundred times faster on this specific workload with this specific dataset" is Jensen math. The framework lives or dies on specificity.
- **You're hiding a lock-in.** If your TCO argument depends on the customer being unable to leave, you have not built a value argument — you have built a trap. Real Jensen math survives the customer running the numbers against a credible alternative.
- **The workload is not yours to accelerate.** Some jobs are not parallelizable. If the work is fundamentally serial, acceleration doesn't help, and no amount of stack optimization will save the customer money. Know which workloads are yours.

## Core Concept

The more you buy, the more you save. I say this at every keynote. It sounds like a provocation — how can you save money by spending more? — and that is the point. I want the customer to stop and ask how that could possibly be true, because when they do, they stop thinking about chip cost and start thinking about the real unit of economics, which is cost-per-unit-of-work.

Here's what the math actually looks like. A customer has a workload — training a large model, running a genomics pipeline, doing image recognition at data-center scale. On a traditional CPU cluster, that workload costs them some amount of electricity, some amount of floor space, some amount of operator time, and some amount of wall-clock time to finish. The wall-clock time is often the single most expensive part, because it gates what the researcher or the product team can do next. Our claim is that we accelerate that workload by a thousand-fold, or two-thousand-fold, or sometimes ten-thousand-fold, depending on the domain. A task that took a month on CPUs takes a day on our system. A task that took a day takes a minute.

Now you run the math. If the customer buys twice as much Nvidia hardware as they originally planned, they finish the workload in half the time, which means the electricity bill is halved, the floor space amortization is halved, the researcher's waiting time is halved, and the opportunity cost of not having the answer is halved. The hardware cost is higher, yes. But the total cost of doing the job is dramatically lower. And because our architecture is workload-optimized across the full stack — the chip, the interconnect, the compiler, the CUDA libraries, the Transformer engine, the networking — the acceleration compounds. That's why buying more Nvidia is not like buying more of a commodity. Buying more of a commodity gets you a linear reduction in unit cost. Buying more of an accelerated system gets you a superlinear reduction in cost-per-unit-of-work, because the system is designed to amortize across scale.

This only works because the speedup is real. If we claimed 1000x and delivered 2x, nobody would believe us a second time. The reason I can stand on stage and say "the more you buy, the more you save" with a straight face is that the customer can go run the benchmark tomorrow morning and the numbers hold up. The provocation is real math wearing the costume of a sales line.

The broader frame is this: I always reason from workload-adjusted numbers, never chip-adjusted numbers. "Our chip costs more than Intel's chip" is the wrong comparison. "Our system delivers the genomics pipeline at one-tenth the total cost of doing the same job on Intel-based infrastructure" is the right comparison. The customer's problem is not chips. The customer's problem is finishing a job at a certain quality in a certain time at a certain cost. If you stay at the chip level, you will always look expensive, because our chip is expensive. If you climb up to the job level, we are radically cheaper than the alternative, because we finish the job in a fraction of the time with a fraction of the energy.

This is also why I use specific numbers compulsively. I don't say "a lot faster." I say "ten thousand times faster at this workload." I don't say "more efficient." I say "this data center, at full GPU acceleration, saves nineteen terawatt-hours annually — about the same as taking 2.9 million cars off the road for a year." Specificity is not a rhetorical flourish. It is the discipline that separates a real TCO argument from a hand-wave. If you cannot name the workload, the speedup factor, and the cost basis, you do not have a TCO argument. You have a vibe.

## How to Apply

1. **Pick the workload, then do the math.** Before you quote any comparison, name the specific job. "Training a 70B-parameter model" or "running a genomics alignment" or "image recognition on this dataset." The comparison has to be tied to a specific piece of work the customer actually does.
2. **Compute against the full stack, not the chip.** Total cost of doing the job = hardware + energy + floor space + operator time + opportunity cost of delay. Most of the savings live in the non-hardware terms. If you're comparing chip price to chip price, you're letting the customer win the argument.
3. **Use specific, checkable numbers.** "Twelve hundred times faster" and "one-ninth the energy per job" are Jensen math. "Much better performance" is not. The specificity is the credibility.
4. **Invite the benchmark.** The Jensen math argument has to survive the customer running their own workload. If it won't, don't make the argument. If it will, demand they run the benchmark, because the benchmark is the close.
5. **Test it on yourself first.** Before you use "the more you buy, the more you save" on a customer, go run the numbers on your internal workload. Does doubling the hardware actually halve the wall-clock? If yes, the line is real. If no, you don't get to say it.
6. **When the workload doesn't benefit, don't sell the acceleration.** Some jobs really are serial. Some problems really don't benefit from parallel processing. If the customer's workload is one of those, tell them. The integrity of the Jensen math framework requires saying no when the math doesn't support yes.

## Examples

**Situation:** Computex 2023. Nvidia has just reported a blockbuster quarter. Jensen is on stage announcing the DGX GH200 AI supercomputer, a system with 256 GPUs — thirty-two times the GPU count of the previous generation. The audience is mixed: enterprise buyers, analysts, partners. Some are wondering whether they can afford Nvidia anymore.
**Application:** Jensen reads through the technical specs, then hammers a refrain: "The more you buy, the more you save." He ties it back to concrete workload claims — training times, inference throughput, energy-per-token. The line becomes the takeaway of the keynote. It reframes the audience from "Nvidia is expensive" to "Nvidia finishes the job more cheaply."
**Result:** The Computex speech drives an enormous wave of enterprise demand. Customers who had been comparing Nvidia chip-cost to CPU chip-cost start running the full-stack TCO math. Once they do, the buying decision flips. The AI data center buildout accelerates. The 2023 guidance — $11B against consensus of $7.2B — is the financial receipt.

**Situation:** 2024 Annual Report to shareholders. Jensen needs to make an argument for why accelerated computing is the right allocation of global data center capital, not just a Nvidia preference.
**Application:** He writes, with specific numbers: accelerated data centers could save 19 terawatt-hours of electricity annually versus CPU-based equivalents — the same as a year's worth of trips by 2.9 million passenger cars. The framing isn't "Nvidia is good for shareholders." The framing is "the math of compute economics has changed, here's the specific magnitude of the shift, and Nvidia happens to be the pioneer of the architecture that captures it."
**Result:** The argument becomes a policy-level claim, not just a product claim. Governments, hyperscalers, and enterprise CIOs absorb the frame. Accelerated computing becomes the default architectural assumption for new data center builds, which is the largest positioning win in the company's history.

**Situation:** A customer is pushing back on Nvidia's pricing. Their CFO is comparing the per-chip cost of H100s against a CPU-based cluster and concluding Nvidia is 4x too expensive.
**Application:** Jensen, or a Nvidia executive trained in this frame, does not negotiate on chip price. Instead they take the customer to the whiteboard and compute: the workload in question, the speedup factor, the wall-clock savings, the electricity savings, the researcher-time savings, the time-to-insight savings. By the time the whiteboard is full, the TCO comparison has flipped. Nvidia is not 4x more expensive — it is roughly 10x cheaper per job. The customer either signs or they've taught themselves why they shouldn't.
**Result:** The conversation moves from chip-cost-per-unit to total-cost-of-the-job. The pricing power is real because the value is real. Nvidia's average selling prices have risen every year, against a semiconductor industry where prices usually fall, because the Jensen math math keeps checking out.

**Situation:** A product manager at a software company is trying to justify a premium price point to their CFO. The feature delivers dramatically better outcomes but costs 3x the incumbent.
**Application:** Reframe the pitch around the customer's workload economics. Don't compare "our price vs their price." Compare "time-to-value," "error rate reduction," "reduction in downstream rework." Use specific, workload-adjusted numbers. Invite the customer to run the numbers themselves on a real pilot. The pattern is the same as Nvidia's, even though the product is different.
**Result:** If the math is real, the customer converts on TCO, not on sticker price. If the math isn't real, the reframe exposes it, and the team learns either the product isn't priced correctly or the value claim is softer than it looked.

## Anti-Patterns (tactical)

**Don't:** Deploy "the more you buy, the more you save" on a product that doesn't actually scale superlinearly with purchase volume.
**Why:** The line is load-bearing. If the customer buys more and doesn't see the promised cost-per-job reduction, they will remember the line, and the next sales cycle is harder. The provocation only works because the math is real. Use it only when you have the receipts.

**Don't:** Use round numbers or vague claims.
**Why:** Specificity is the credibility. "10x faster" is weaker than "8,400x faster on this specific workload with this specific dataset." The sharper the number, the more it signals that real measurement was done. Vague numbers signal the opposite.

**Don't:** Let the conversation stay at chip-price.
**Why:** If the customer is evaluating chip-to-chip, you lose. Your chip is expensive. Your job is to move the conversation to workload-cost as quickly as possible, because that's where you win. If you stay at chip price, you are letting the customer use the wrong frame.

**Don't:** Use Jensen math to disguise a lock-in.
**Why:** Real Jensen math survives the customer evaluating a credible alternative. If your TCO story only works because the customer can't leave, you've built a trap, and traps get sprung. The customer will resent the lock-in the moment a competitive alternative exists, and the relationship you spent years building will collapse in one RFP.

**Don't:** Claim acceleration on workloads that don't accelerate.
**Why:** Some jobs are serial, some jobs don't parallelize well, some jobs are memory-bound in ways that don't benefit from your architecture. Selling those customers anyway corrupts the whole framework. Intellectual honesty applies to pricing arguments too — if the workload doesn't benefit, say so, and save the Jensen math for the workloads where it's true.
