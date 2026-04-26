---
triggers:
  - "user asks what 'accelerated computing' actually means"
  - "user is debating whether to stay on CPUs or move to GPUs for a workload"
  - "user confuses 'faster chips' with a new computing model"
  - "user asks why Nvidia invested in CUDA a decade before it paid off"
  - "user asks about Moore's Law ending and what replaces it"
use_when:
  - "the problem is computationally intense, structurally parallel, and hitting a wall on general-purpose CPUs"
  - "you have a specific domain — graphics, molecular dynamics, deep learning, SQL, weather — where a domain-specific algorithm would pay back a full-stack investment"
  - "you can afford to accelerate the full stack: the chip, the algorithm, the library, and the application"
fails_when:
  - "applied to serial, branchy, I/O-bound problems where a CPU is already near the physics limit"
  - "only the hardware is accelerated but the algorithm, library, and application are left unchanged — you get slower, not faster"
  - "used as a marketing label for 'our chip is faster than their chip' rather than a full-stack methodology"
  - "the domain is narrow enough that the CUDA-level investment will never amortize"
related:
  - "zero-billion-dollar-markets.md"
  - "cuda-the-long-bet.md"
  - "strategic-inflections.md"
  - "speed-of-light.md"
---

# Accelerated Computing

## When to Use
- You are staring at a workload that is growing exponentially in compute demand while the CPU underneath it is growing linearly at best — and you can see the gap opening into a cliff.
- You have a domain where the underlying math is parallelizable — matrix multiplication, ray tracing, N-body simulation, graph traversal — and you control enough of the software stack to rewrite it.
- You are committing to a decade-long investment in a full stack, not just a chip: architecture, ISA, compiler, libraries, application rewrites, developer community, textbooks, university courses.
- You need a word for the thing you are doing that is not "parallel computing," because parallel computing was a graveyard of failed companies in the 1980s and early 1990s. You are doing something different.

## Fails When
- **The problem is serial.** Some problems cannot be accelerated because the next step genuinely depends on the last step. A GPU will not make those problems faster; it will make them slower. Amdahl's Law is real. We always pair our GPUs with the best CPUs we can buy precisely because you cannot violate Amdahl's Law.
- **You only accelerate the hardware.** If you take CPU software, hand-written and sequential, and run it on a GPU, it runs slower. You have to reinvent the algorithms, rewrite the libraries, and refactor the application. Accelerated computing is a full-stack discipline. If you skip any layer, you lose.
- **You treat it as a chip sale.** Accelerated computing is not a product; it is a methodology. If you are selling accelerators to a customer who thinks they are buying a faster CPU, they will be disappointed and you will both lose. The customer has to sign up for the work of rewriting their application. If they are not going to do that work, sell them a CPU.
- **The domain is too narrow.** Accelerated computing requires a domain-specific library — cuBLAS, cuDNN, cuOpt, cuQuantum. Building those libraries is expensive. If the domain only has three users in the world, you will never amortize the investment. Pick domains where the library, once built, serves thousands of applications.

## Core Concept

Accelerated computing is not a faster CPU. That is the first thing to understand. A faster CPU is the same computing model with a higher clock speed, and we have been getting those for fifty years, and they are running out. Accelerated computing is a different computing model. It says: take the parts of an application that dominate the compute — inner loops, matrix operations, ray traversal, physics integration — and move them to a processor designed for exactly that shape of work. Leave the control flow, the branchy parts, on a CPU designed for control flow. You get 50x, 100x, 1000x speedup on the accelerated part, and the combined system does things the general-purpose computer cannot do.

We made this observation thirty years ago, when we started Nvidia. Dennard scaling stopped almost a decade ago — the phenomenon where you could shrink a transistor and get both more of them and faster ones for the same power budget. Transistor counts kept going up, which is still called Moore's Law, but transistor performance per watt flattened out. That's the physics. And yet computing demand kept climbing exponentially — more data, more pixels, more parameters, more agents. If you are a general-purpose computer, you are now staring at an exponentially widening gap between what people want their machines to do and what the CPU can deliver. Accelerated computing is the answer to that gap, and we are one of the only companies that saw it coming early enough to build the stack to serve it.

The key insight is that accelerated computing is a full-stack problem, not a chip problem. This is the part most people miss. When we started CUDA, we did not just ship a GPU with some extra cores and say "good luck." We wrote the compiler. We wrote the libraries — linear algebra, Fourier transforms, deep learning primitives, sparse matrix operations, ray tracing, physics, fluid dynamics. We wrote the programming model. We supported universities to teach the textbook. We ran developer conferences. We invested for ten years into a platform that almost nobody wanted at the beginning, because we knew that accelerated computing only works if the application developer can get a 50x speedup without also having a PhD in parallel programming. The hardware is the floor. The stack is what makes it usable. If you are trying to sell accelerated computing without the stack, you are selling a brick. That is why most of the parallel computing companies of the 1980s and 1990s died. They had good hardware and no stack.

The way to think about the discipline is: we accelerate whatever is important. Computer graphics was the first thing, because that was what we did. Then molecular dynamics, because the biologists asked us. Then financial computing, because the quants asked us. Then deep learning, because AlexNet proved it worked. Then generative AI, because ChatGPT made it obvious. Then SQL, because agents are now banging on databases and the database has to keep up with agents. Each one is a new CUDA library, a new set of algorithms, a new application rewrite. Thirty years of this compounding. The reason Nvidia is worth what it is worth is not that we built a good chip. It is that we built the only full-stack accelerated computing platform in the industry, one domain at a time, for thirty years.

## How to Apply

1. **Identify the workload that is eating your customer.** Not every workload benefits from acceleration. Go find the one that is dominating their compute, their power bill, their wall-clock time. Usually it is a hot loop doing matrix multiplication, or physics, or graph operations, or neural network inference. Accelerate that. Leave the rest on the CPU.

2. **Rewrite the algorithm, not just the code.** CPU algorithms assume you have one or a handful of threads and the cost of branching is low. GPU algorithms assume you have thousands of threads and the cost of branching is devastating. Do not port — reinvent. The most common mistake is to run CPU code on a GPU and wonder why it is slower. Because you did not rewrite the algorithm.

3. **Build the library, not just the kernel.** A single accelerated kernel helps one application. A library helps thousands. cuBLAS is why every linear-algebra workload accelerates on Nvidia. cuDNN is why every deep learning framework runs on Nvidia. If you are doing accelerated computing and you are not building a library that other developers will use, you have not built accelerated computing; you have built a science fair project.

4. **Pair the accelerator with the best general-purpose computer you can find.** We buy the most expensive CPUs we can get. Some people are confused by this because they think accelerated computing means we are against CPUs. We are not. Amdahl's Law says your system speed is bounded by the slowest serial part. If your CPU is slow, your serial part is slow, and your GPU sits idle. A slow CPU holds back millions of dollars of GPU. Always pair well.

5. **Commit to the decade.** Accelerated computing is not a quarter's worth of investment. The CUDA library portfolio has been accumulating for twenty years. Some domains (ray tracing, DLSS) took a decade to ship. Some (quantum simulation) are still in early stages. If you enter accelerated computing with a two-year horizon, you will quit before you get anything back. Enter it with a ten-year horizon, invest through the early quiet years, and compound.

6. **Evangelize in public.** Accelerated computing only pays off if developers adopt it. Developers only adopt it if they can learn it. We gave away GPUs to universities, paid engineers to co-teach courses, wrote textbooks, ran GTC as a free conference for years. That is not marketing. That is how you populate the developer base of a new computing model. If you hoard the knowledge, you slow your own flywheel.

## Examples

**Situation:** 2006. We were about to launch CUDA. The commercial market for GPU computing was near zero. Our board was skeptical. Wall Street considered CUDA a drag on margin. We had to decide whether to ship CUDA on only the high-end Quadro line — which would protect our gross margin — or ship it on every GeForce in the world.
**Application:** I insisted we ship CUDA on every chip. Every consumer gaming card. Every OEM. This made our gross margin fall from 45 percent to 35 percent because every chip now carried the die area, power, and design cost of a general-purpose computing feature that almost no gamer used. I told the team: if we want accelerated computing to be a category, we have to saturate the world with the hardware that supports it, so that every CS student, every researcher, every hobbyist can learn it without a budget. If we only ship it on Quadro, only workstations will learn it.
**Result:** Four years later, AlexNet was trained in two weeks on GeForce cards sitting in a Toronto grad student's basement. The deep learning revolution ignited on top of an installed base we had paid for, on purpose, against our margin, because we understood that accelerated computing is a platform play and platforms only work when the hardware is everywhere.

**Situation:** 2013 GTC. Bryan Catanzaro, one of our research engineers, pulled me aside and said deep neural networks were doing impossible things on GPUs. I had just given a keynote that morning about weather simulation and mobile graphics. I had not mentioned neural networks. Catanzaro showed me what the ImageNet results meant.
**Application:** I thought about it for a day, and then I sent an email on a Friday evening that said everything is going to deep learning and we are no longer a graphics company. By Monday morning, we had reorganized. We started work on what became cuDNN — the deep learning primitive library that every framework in the world now depends on. We built Tensor Cores into the silicon. We rewrote our roadmap around AI training workloads. We dedicated thousands of engineers across the next decade to the stack.
**Result:** That decision — and the stack discipline underneath it — is why every AI model in the world is trained on our platform. Not because our chip was the best, though it is. Because our stack was the only one ready for the workload when the workload arrived. If we had accelerated only the hardware and not the libraries, not the compilers, not the frameworks, the deep learning community would have had to start from scratch, and they would have gone wherever the tools were best. The tools were best at Nvidia because we spent ten years building them before anyone knew we would need them.

## Anti-Patterns (tactical)

**Don't:** Sell a GPU as "a CPU but faster."
**Why:** That framing sets your customer up to fail. They will port their CPU code to the GPU, see no speedup or worse, and conclude accelerated computing doesn't work. You have to sell the methodology — rewrite the algorithm, adopt the library, refactor the application. If your customer is not willing to do that work, they should stay on a CPU, and you should sell to the next customer.

**Don't:** Declare "accelerated" anything without owning the stack.
**Why:** The word has been diluted by vendors who ship a chip with a datasheet and call it accelerated. Accelerated computing is a chip plus an ISA plus a compiler plus a runtime plus a library portfolio plus an application ecosystem plus a developer community. If you are missing any of those layers, the speedup the customer actually experiences will be disappointing, and they will blame the category, not your specific implementation.

**Don't:** Treat accelerated computing as a subset of parallel computing.
**Why:** Parallel computing is a strategy for throwing many processors at a problem. Most of those companies died in the 1990s because they fought the CPU and lost. Accelerated computing does not fight the CPU. It augments the CPU for the parts where the CPU cannot keep up. The distinction matters. If you position yourself as "parallel computing," you will be compared to a thousand dead companies and judged by their track record. If you position yourself as "accelerated computing," you are describing a different methodology and a different outcome.

**Don't:** Skimp on the CPU.
**Why:** A great GPU paired with a bad CPU is a bad system. The CPU runs the serial part, the control flow, the dispatch. If the CPU chokes, the GPU sits idle, and GPU idle time is enormously expensive. We build Grace because we needed a CPU that was fast enough single-threaded to keep our GPUs fed. The system is the unit of performance. Not the chip.

**Don't:** Try to accelerate every workload.
**Why:** Some workloads are not accelerable. Pick the ones that are parallel, compute-bound, and amenable to rewriting. If your customer has a branchy, I/O-bound transaction processor, do not sell them a GPU; sell them a faster CPU. The discipline of knowing what to accelerate and what to leave alone is what separates a serious accelerated computing strategy from a bad pitch.

**Don't:** Abandon a library halfway.
**Why:** Once you ship a library and developers build on it, you own that library for a decade. The cost of deprecating a CUDA library is not the cost of the library team — it is the cost of every paper, every application, every PhD that depended on it. We have libraries in CUDA we shipped in 2008 that we still maintain. That is the commitment. If you are not willing to make it, do not ship the library in the first place.
