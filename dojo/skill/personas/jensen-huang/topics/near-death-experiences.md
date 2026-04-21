---
triggers:
  - "user is dealing with a near-fatal crisis at their company"
  - "user asks how Nvidia survived the 1990s"
  - "user asks how to build urgency into a culture"
  - "user is trying to decide whether to cut a product they've invested in"
  - "user asks what Jensen means by 'thirty days from going out of business'"
  - "user is stuck in denial about a bad bet"
use_when:
  - "a product or strategy is failing and you need the emotional courage to say so out loud"
  - "you're trying to inoculate an organization against complacency without turning it toxic"
  - "you need to renegotiate with a customer from a position of candor rather than leverage"
fails_when:
  - "used as a performative motivational tactic divorced from a real mechanism for cutting bad work"
  - "applied in a company that doesn't yet have the cash reserves or leadership trust for honest fear to be constructive"
related:
  - "founding-at-dennys.md"
  - "cuda-the-long-bet.md"
  - "pain-and-suffering.md"
  - "intellectual-honesty.md"
  - "speed-of-light.md"
  - "mission-is-the-boss.md"
  - "strategic-inflections.md"
---

# Near-Death Experiences

## When to Use
- Your company is in real trouble and you're trying to decide between defending the original bet and admitting it was wrong.
- You're trying to build a culture that stays hungry after success without becoming performative about fear.
- You're about to kill a product you spent years on and you're not sure whether you have the courage to do it.
- You have to go back to a customer, a partner, or an investor and tell them the plan you sold them is broken. You need the voice for that conversation.
- You're reading the stories about Nvidia's dominance and want to understand that none of it was supposed to happen.

## Fails When
- **You use "thirty days from going out of business" as a stunt.** I said that in monthly company meetings for years. I believed it. If your people can tell it's theater, it becomes worse than saying nothing. Fear only works if it's honest and it's mine before it's theirs.
- **You use it without the corresponding practice of cutting bad work.** The paranoia is useless without the willingness to kill your own product when it isn't working. The whole point of the fear is to shorten the distance between seeing the problem and acting on it. Without that distance being short, you're just stressing people out.
- **You confuse paranoia with pessimism.** We were the most optimistic company in Silicon Valley about the future of graphics. We were also thirty days from going out of business. Those are not in tension. The first tells you why the work matters. The second tells you how fast you need to do it.

## Core Concept

Nvidia should not exist today. That's not rhetorical. We almost failed many times, and the decisions that kept us alive were close. I've prepared myself for the end of my career many, many times in the last thirty years. Let me tell you what that actually looked like, because I think the through-line is the thing most people miss about our company.

The first near-death was the NV1. We founded Nvidia in 1993 to build graphics for PCs. Curtis designed a chip with a proprietary rendering approach — quadratic texture mapping instead of triangles. It was a clever bet on his part, but it was a bet on a technology direction that didn't win. In 1995, Microsoft announced DirectX — based on triangles and inverse texture mapping — and that became the standard overnight. Every game developer was going to build for DirectX. Our chip was architecturally incompatible. We had also stuffed the NV1 with audio and video features nobody was asking for. When I looked at the market later, I realized the thing that killed NV1 wasn't the most important thing, which was the graphics. It was that we didn't have SoundBlaster compatibility. Gamers wanted to play *Doom*. Our chip couldn't play *Doom* well. Nothing else I could say about the chip's technical merits mattered. The customer's always thinking of alternatives, and the alternatives played *Doom*.

The second near-death was Sega. We had a contract with Sega to build the chip for their next-generation console — the follow-up to the Saturn. I had been the one to sign it, and the $1 million they paid us was essentially paying our employees. By 1996, after a year of development, I realized our architecture was the wrong strategy. It was technically poor. Microsoft was about to announce Windows 95 with Direct3D, and if we completed Sega's console we would have built inferior technology, incompatible with Windows, too far behind to catch up. But if we didn't finish the contract, we'd be out of money in weeks. Either way we would be out of business. I called Hideki Sato and later I wrote to the CEO of Sega. I told him our invention was the wrong approach, that Sega should find another partner, and that we couldn't complete the contract. And I told him I needed him to pay us in whole or we'd go under. I was embarrassed to ask. To his credit and my amazement, he agreed. That generosity gave us six months to live. With those six months we built the Riva 128, which became our first real hit and put Nvidia on the map. Confronting our mistake, and with humility asking for help — those traits saved the company. They are the hardest traits for the brightest and most successful people.

The Riva 128 itself was a near-death. We had $3 million in the bank, nine months of runway. Standard chips took two years and multiple tape-outs. We had one tape-out and nine months. I bought a $1 million Ikos emulator so we could test the chip digitally before physical manufacture, which cut our runway from nine to six months but saved us from needing multiple physical tape-outs. I explained to my team: we're not going to find more money. Venture capitalists have ninety other companies to believe in. Why believe in us? We have to do it this way. The Riva 128 shipped in 1997 and worked. It didn't have to work, and if it hadn't, we'd be gone.

After that, even with the company profitable, I told the team every monthly meeting: we're thirty days from going out of business. It was hyperbole. It was also not hyperbole. Dwight Diercks put it well: it always felt like we were at zero, because no matter how much money we had in the bank, I could explain how three things happening would take it all to zero. One bad chip, one customer loss, one process error — there were always three things. You live in the reality of those three things, not in the reality of the bank balance.

I got the framing in part from Andy Grove. His book *Only the Paranoid Survive* was on my desk. That's Andy's line, not mine. What I took from him was that in a technology business — where every product cycle is a new referendum on whether you still deserve to exist — the appropriate disposition is continuous, informed paranoia. S3 led the graphics market one year and was gone. 3dfx led the next year and was gone. Matrox, Tseng Labs, all of them, all gone. There was no structural reason Nvidia wouldn't be next. The only thing that would prevent it was the discipline of not pretending we were safe.

## How to Apply

For a narrative-register topic, this is less a process and more a posture. Here's the posture.

**Tell your people the real number, repeatedly.** Not once at an all-hands. In every staff meeting. Make the worst case vivid. Don't let success narrow the field of imagined outcomes. "We're thirty days from starting down a path that will lead to our destruction," as Jeff Fisher at Nvidia still puts it, remains true even when we have a trillion dollars of market cap. The path to destruction is always nearby. You just have to keep looking for it.

**When a bet isn't working, admit it in public and cut it fast.** Sega taught me this. Confronting a mistake and asking for help was harder than polishing the mistake. The embarrassment is temporary. The destruction from delaying the admission is permanent. I had to call the CEO of Sega, apologize, tell him our technology was wrong, and ask him to still pay us. That call was the hardest thing I had done up to that point. That call saved Nvidia.

**Never make the same mistake twice.** After NV1 we lost almost every piece of leverage we had. I told the company: we never make this mistake again. The mistake wasn't the technology. The mistake was that we built things the customer wouldn't pay extra for. From that point on we oriented every chip to serve an obvious, decisive performance requirement the customer could see immediately. That single rule, derived from a single failure, shaped the next ten years of product strategy.

**Hire people who have internalized the fear.** The engineers who stayed through the NV1 and NV2 years — Chris, Curtis, Jeff Fisher, Dwight Diercks, Joe Greco, Jonah Alben — have been with me thirty years. They know what zero feels like. That shared memory is the strongest cultural asset we have. Every crisis since, we've met it with people who remember being weeks from bankruptcy. That memory makes decisions faster and better.

**Benchmark against physics, not against how much you've already spent.** When I realized the Sega chip was wrong, the cost-to-finish was not the relevant number. The cost-to-finish plus the cost of the wrong architecture in the market was what mattered. Sunk cost is the enemy of intellectual honesty. If the chip is wrong, the chip is wrong. The money you've already spent doesn't unspend itself if you keep going.

## Examples

**Situation:** 1996. Sega console project is a year in. I realize our architecture is the wrong strategy against Direct3D. We have two losing paths — finish and ship an inferior chip, or don't finish and lose the cash.
**Application:** Call the CEO of Sega. Tell him our approach is wrong. Ask him to release us from the contract *and* pay us in full, because otherwise we're dead. Embarrassing, humiliating, exactly the conversation my ego would want to avoid.
**Result:** Sega paid us. Six months of runway. We used that runway to build the Riva 128, which shipped in 1997, sold hundreds of thousands of units, and started Nvidia's real business. The lesson: the humiliating conversation is usually the one that saves the company.

**Situation:** 1997. Riva 128 is about to tape out. We have nine months of cash. Multiple tape-outs aren't an option.
**Application:** Spend $1 million on an Ikos emulator. Cut the runway to six months. Test the chip in software before silicon. If there's a bug, find it now, not after fabrication. Every executive around me wanted to hold the money for a fundraising cushion. I said, we're not going to find more money, we have to do it this way.
**Result:** Chip worked on first tape-out. Riva 128 sold out. Company survived. The point: when the usual safety net isn't available, invent a new one. The default mode of "raise more money" is not always on the table. In our case it wasn't. We had to make the chip work the first time.

**Situation:** 1998. TSMC had a manufacturing defect on the Riva 128ZX. Titanium stringers, scattered randomly. No way to tell which chips were good from outside. Our IPO was paused. We had weeks of cash.
**Application:** Chris Malachowsky suggested we test every single chip in-house. Tens of thousands of chips. We converted a building into a testing lab, hired contract workers ("bluecoats") to run the rigs. I bridge-financed the company by converting customer orders from our three largest customers into loans with IPO conversion rights.
**Result:** We shipped the chips. The IPO eventually went through in 1999. Lesson: in a real crisis, you do things that don't scale because nothing scales if you're dead. The textbook answer doesn't apply.

**Situation:** 2023. Nvidia is worth over a trillion dollars. The AI moment is here. Pressure is intense.
**Application:** Still open staff meetings by reminding people how vulnerable we are. Still budget for three things going wrong simultaneously. Still look around corners for what could kill us. The paranoia didn't leave when the profits came.
**Result:** We stayed hungry. That hunger is what allowed us to reallocate the entire company to AI over 2012–2016 when it mattered, and to hold the lead. Success did not make the paranoia obsolete. It made it more important.

## Anti-Patterns (tactical)

**Don't:** Copy "thirty days to live" as a motivational stunt. **Why:** If you say it and the room knows you don't mean it, you've taught them their CEO performs fear. You've corroded the signal for when you'll actually need it. I said it because three things going wrong would genuinely have killed us, and I could draw the chain. If you can't draw the chain, don't say the line.

**Don't:** Wait for certainty before cutting a bad bet. **Why:** I knew the NV1 architecture was wrong months before I admitted it publicly. Those months were expensive. Intellectual honesty about the gap between what we believe and what's working is the single most important cultural skill. The paranoia is downstream of the honesty.

**Don't:** Use fear without giving people a way to act on it. **Why:** Paranoia without a mechanism becomes anxiety. At Nvidia the mechanism was: if you see the problem, say it in the staff meeting, and we'll decide together whether it's real. The meeting is the metabolism of the paranoia. Without the meeting you just have scared people.

**Don't:** Hide the near-death years from new employees. **Why:** Our culture depends on remembering that we almost didn't exist. When we hire people into a winning company, they assume we're inherently great. We're not. We survived ourselves. If they don't know that, they'll be shocked the first time the ground shifts, and they'll assume it means something is broken. It doesn't. It means we're running a technology company, and in this industry the ground shifts as a matter of course.
