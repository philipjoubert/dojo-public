---
triggers:
  - "user asks how to evaluate a new market with no customers yet"
  - "user says the TAM is too small to justify the investment"
  - "user is weighing whether to enter a nascent market versus fighting for share in an established one"
  - "user asks how Nvidia picked CUDA, robotics, autonomous vehicles before they were markets"
  - "user describes being kicked out of a market and looking for the next bet"
use_when:
  - "the problem is real and the physics of the solution is defensible, even if no buyer exists today"
  - "you have enough runway and conviction to evangelize a market into existence"
  - "you already have a platform or technology asset that is being priced at zero by the public market"
fails_when:
  - "you mistake 'no customers' for 'no problem' — there has to be a real problem, just no buyer yet"
  - "you cannot afford the patience; zero-billion markets often take 10 years to become real"
  - "you use it as an excuse to avoid the discipline of talking to actual users and understanding their pain"
  - "you stop evangelizing once the early believers arrive — adoption has to be manufactured, not waited for"
related:
  - "accelerated-computing.md"
  - "cuda-the-long-bet.md"
  - "strategic-inflections.md"
  - "pain-and-suffering.md"
---

# Zero Billion Dollar Markets

## When to Use
- You are looking at a problem where general-purpose tools are running out of gas, and the physics of a better answer is clear to you, but nobody is buying the better answer yet.
- Your existing markets are being closed to you by platform owners, partners, or competitors, and you need to find somewhere to go that isn't already contested.
- You have a platform asset — a chip, a compiler, a library, a distribution channel — that Wall Street is valuing at zero, and you want to find the problem that will reprice it.
- You keep hearing "the market is too small" from analysts and board members, and you suspect they are confusing "the market today" with "the market ever."

## Fails When
- **There is no real problem, just no customer.** A zero-billion dollar market has to have a genuine unmet need at the bottom of it. If the problem is imaginary, no amount of patience will summon a market.
- **You cannot afford the wait.** CUDA took us ten years to pay off, and robotics is still paying off. If you need a return in 18 months, this is not the strategy for you. The zero-billion dollar market is a strategy for people who can tolerate a decade of looking stupid.
- **You treat it as an excuse to not listen.** The discipline of zero-billion dollar markets is that you have to hunt for the one or two customers that do exist — the mammogram researchers, the molecular dynamics professor, the computer vision postdoc — and serve them like they are your most important customer in the world. If you use "no market" as a reason to stop talking to users, you have missed the point.
- **You mistake a hobby for a market.** Some things are zero billion and will stay zero billion. Pizza thermal simulation for General Mills was zero billion. We did it, we learned from it, we moved on. Not every zero-billion problem becomes a trillion-dollar market. You still need taste about which problems will matter.

## Core Concept

The best markets we've ever entered started as zero billion dollar markets. I mean that literally. When we committed to CUDA in 2006, the commercial market for GPU computing was effectively zero. Our first two customers for CUDA on a medical imaging project were two breast cancer researchers at Massachusetts General Hospital who had written to us about upgrading their mammogram scanners. We invested several million dollars in that pilot and sold exactly two graphics cards out of it. I loved it. I loved it because that's what the zero billion dollar market looks like from the inside — a real problem, a real user, and no industry around it yet.

The logic runs like this. If there are already customers in a market, there are already competitors. If there are already competitors, you are entering a game of percentage points where you win by grinding your rival down on price, features, and channel. That is a fine game to be in if you are defending a franchise. It is a terrible game if you are trying to build something new, because the returns on being slightly better than an existing company are small, and the energy it takes to get there is enormous. So we made it a discipline at Nvidia to go where there are no customers, because where there are no customers, there are also no competitors, and nobody cares about you — which means nobody will try to kill you while you figure things out. That is a gift. Most companies would see it as a problem. We saw it as cover.

When AMD bought ATI and no longer needed our chipset, we pivoted to Intel. When Intel cancelled our license, we pivoted to Apple and built what became the first MacBook Air. When Apple moved on, we pivoted to mobile with a system-on-chip. When Qualcomm wouldn't connect us to their modems, we were effectively kicked out of mobile. This happened roughly on a one-year rhythm. Each time we built something great, and each time one year later, we were kicked out of the market. By the end of that cycle, we decided to go somewhere nobody could kick us out — because nobody else wanted to be there. That market was robotics. We built the world's first robotics computer, running an algorithm nobody understood at the time called deep learning, for a market of zero. That was over ten years ago. Today it is the backbone of autonomous vehicles, humanoid robots, and AI factories.

The gaming market we are famous for — the $60 billion gaming market today — was a zero billion dollar market when we started. Thirty years ago there were a few hundred PC gamers and a handful of badly made 3D cards. We did not enter a market. We evangelized a market into existence. The lesson I took from that is that the size of the market today tells you almost nothing about the size of the market in ten years, and the question worth asking is not "how big is this market?" but "is the problem real, and is the physics of our solution honest?" If both of those things are true, you can work on it for ten years with a few believers and come out the other side with a trillion-dollar business. If either of them is false, no amount of TAM analysis will save you.

## How to Apply

1. **Find a real problem, not a real market.** The distinction matters. A real problem is a pain that a user describes to you in specific, operational terms — "my mammogram scan takes six hours, I can only do three a day, and the image quality isn't good enough to catch early tumors." A real market is a P&L line from Gartner. Look for the first one. The second comes later, or it doesn't.

2. **Price your platform at zero for the first users.** When we launched CUDA, the software was free. It only ran on our hardware, but the tools, the libraries, the compiler, the documentation — all of it free. Early believers do not have budgets. What they have is time and curiosity. Charge them nothing and be grateful they showed up.

3. **Saturate, don't segment.** We insisted that CUDA ship on every GeForce card, including the consumer gaming cards. Our gross margin fell from 45 percent to 35 percent. Our board asked why we were punishing every gamer with the overhead of a scientific computing feature they would never use. The answer was: we wanted every computer science student in the world to be able to learn CUDA on hardware their parents had already bought. If you ship only to the high end, you will only ever have a high-end market. If you ship everywhere, you can eventually have everyone.

4. **Evangelize like a religion.** When we were trying to seed CUDA in academia, David Kirk flew from Colorado to the University of Illinois every other week for a full semester to co-teach the first CUDA course, because no professor in the country would teach it on their own. He gave more than a hundred talks in a single year. Eventually he and Wen-mei Hwu wrote the textbook, because no textbook existed. The zero-billion dollar market becomes a real market only when you personally carry the knowledge from your lab into a hundred universities. There is no marketing shortcut for this.

5. **Measure progress in believers, not revenue.** For the first three years of CUDA, we did not measure success in dollars. We measured it in downloads, in research papers citing our platform, in professors teaching courses, in PhD students writing their theses on our hardware. Revenue was a trailing indicator by ten years. If you try to measure a zero-billion dollar market by a revenue chart, you will kill it inside of six quarters.

6. **Keep your day job.** The zero-billion dollar market is a side bet funded by a real business. CUDA was funded by GeForce. Robotics was funded by CUDA. If you don't have a profitable core to pay for the exploration, the exploration will starve. One of the great things about a well-run company is that the core keeps the future alive.

## Examples

**Situation:** 2007. We had shipped CUDA on every GeForce card. Our gross margin had collapsed. Our stock was down 80 percent. Fifty Wall Street analysts came to our headquarters demanding to know when the margin pain would end. Our only serious CUDA customers were two mammogram researchers, a molecular dynamics professor, and a handful of quants at hedge funds. The market Nvidia was projecting for GPU computing was near zero at that moment, with a line on a slide reaching six billion dollars in some unspecified future year.
**Application:** I kept the commitment. Every chip stayed CUDA-compatible. Every GeForce stayed CUDA-compatible. We kept giving away cards to professors. We kept hiring compiler engineers for a platform with no paying customers. I told the analysts the truth: short-term margin was going to stay under pressure, and long-term margin would expand once the market we were seeding actually emerged. Most of them did not believe me, and that was fine.
**Result:** AlexNet hit in 2012 on GPUs we had already shipped into academic labs because we had refused to segment CUDA away from them. The machine learning revolution that followed ran on top of an installed base we had paid dearly to build. The zero-billion dollar market of GPU computing became the trillion-dollar market of AI infrastructure. The board members who had pushed me to hire a COO and rationalize the product line would not have built that installed base.

**Situation:** 2013-ish. Our chipset, mobile, and smart-device businesses had been systematically closed to us by AMD's acquisition of ATI, Intel's cancellation of our license, and Qualcomm's refusal to connect us to their modems. In roughly three years we had been kicked out of three large, lucrative markets in succession. The board wanted us to retrench to gaming.
**Application:** Instead, we went looking for a market where nobody could kick us out — because nobody else wanted to be there. We chose robotics. At the time, robotics was a zero-billion dollar market for general-purpose computing. We built the world's first robotics computer, which processed an algorithm nobody understood yet called deep learning. We shipped it knowing we would sell almost none of them for years.
**Result:** That robotics computer became the Jetson and then the Drive platform and then the core of our autonomous systems business. More importantly, the culture lesson we took from it — that a market with no customers is a market with no competitors — became a foundational Nvidia discipline. Today we have three or four zero-billion dollar markets running in parallel at any given time.

## Anti-Patterns (tactical)

**Don't:** Confuse a zero billion dollar market with a bad idea.
**Why:** A zero billion dollar market can be the best idea you will ever have or the worst one. The distinguishing feature is whether the problem underneath it is real. If the problem is real, zero billion today does not mean zero billion forever. If the problem is imaginary, zero billion today means zero billion forever, plus the cost of your wasted years. Do not use "it's a zero billion dollar market" as a signal of bravery — use it as a signal that you need to be extra rigorous about whether the problem is real.

**Don't:** Starve the core business to fund the exploration.
**Why:** A zero-billion dollar market takes years to develop. If you kill the cash flow that feeds it, the exploration dies before the market arrives. The first job of the zero-billion dollar market strategy is to protect the boring franchise that pays for it. CUDA would not have survived without GeForce profits underneath it. We never forgot that.

**Don't:** Announce the market before it is a market.
**Why:** In the early years of CUDA we were careful about how we talked about "the market." We talked about applications, about users, about specific problems. Announcing a $30 billion scientific computing market before anyone is buying scientific computing is how you get your credibility killed. Let the market define itself through the customers that arrive. When the reporters start asking you how big it is, that means it is starting to exist. Until then, talk about the work.

**Don't:** Let "the TAM is too small" be the final word in a board conversation.
**Why:** TAM is a measurement of the present. It cannot see zero-billion markets because by construction those markets have no data yet. If your investors are running a TAM-gated process, you will systematically underinvest in exactly the opportunities that produce outsized outcomes. Explain this to them in advance, or find investors who understand that the size of the market today is not an estimator of the size of the market tomorrow.

**Don't:** Wait for the market to come to you.
**Why:** "If you build it, they will come" is wrong by itself. The correct formulation is: "If we don't build it, they can't come." Building is necessary but not sufficient. Evangelism — teaching, writing textbooks, running workshops, personally flying to universities, personally walking into laboratories — is the part that actually summons the market. Founders who think their job ends at shipping the product do not see zero-billion dollar markets turn into real markets. The market is a product of your willingness to drag it into existence, one believer at a time.
