---
triggers:
  - "user asks how to get their first users"
  - "user says they launched and nobody came"
  - "user resists recruiting users manually because it 'doesn't scale'"
  - "user wants to automate user acquisition before they have users"
  - "user asks about growth hacking or paid acquisition at zero users"
  - "user is waiting for users to arrive via viral loop"
use_when:
  - "startup has zero to a few hundred users and growth is stalled"
  - "founder is embarrassed by the smallness of manual efforts"
  - "founder thinks 'that's not how the big companies did it'"
  - "B2B startup is waiting for inbound demand at v1"
fails_when:
  - "startup is past product-market fit and the unscalable work is actually preventing them from building the scalable version"
  - "manual work has become a business model rather than a bootstrap phase (service disguised as product)"
related:
  - "make-something-people-want.md"
  - "how-not-to-die.md"
  - "well-not-crater.md"
---

# Do Things That Don't Scale

## When to Use
- Startup just launched or is about to launch and has zero or very few users.
- Growth has stalled at tens or low hundreds of users and the founder is waiting for a viral loop.
- Founder is building automation for a problem they haven't yet solved manually.
- Founder says "we'll figure out growth once we finish the product."
- B2B startup is waiting for inbound leads to show up.

## Fails When
- You're past product-market fit and the unscalable work is now preventing you from scaling — time to systematize.
- The "unscalable" work has become a consulting business hiding inside a startup — you're getting paid hourly instead of shipping product.
- You're using manual work to avoid doing the real thing (fixing a broken product, firing a bad cofounder, facing the schlep).

## Core Concept

Startups take off because the founders make them take off. A few grow by themselves; usually it takes a push. The metaphor is the crank that car engines had before electric starters. Once the engine was going it kept going, but there was a separate and laborious process to get it going.

The most common unscalable thing founders have to do at the start is recruit users manually. Nearly all startups have to. You can't wait for users to come to you. You have to go out and get them. Stripe is the canonical story: the problem they were solving was urgent enough that if anyone could have waited for users, they could. But the Collison brothers weren't going to wait. When someone agreed to try Stripe, they'd say "right then, give me your laptop" and set them up on the spot. We called it the Collison installation. More diffident founders ask "will you try our beta?" and when the prospect says yes, they reply "great, we'll send you a link." That email gets buried. The Collison installation does not.

There are two reasons founders resist going out and recruiting users. One is shyness and laziness — they'd rather sit at home writing code than go talk to strangers and be rejected by most of them. The other is that the absolute numbers seem small. "This can't be how the big famous startups got started." Actually, that is exactly how they got started. The founders underestimate compound growth. If you have 100 users and get 10 more this week, you've grown 10%. 110 may not seem much better than 100, but at 10% a week you'll have 14,000 users in a year and 2 million in two years.

The surprising rule from observing hundreds of startups: *the unscalable things you do at the beginning aren't just a way to get the engine started. They're often the very things that teach you what to build, how to build it, and who to build it for.* The founder who recruits users one by one learns something the founder waiting for a viral loop never will: what those users actually want.

## How to Apply

1. **Recruit manually. Ideally in person.** Airbnb went door-to-door in New York recruiting users and helping them improve their listings. When I remember the Airbnbs during YC I picture them with rolly bags, because when they showed up for Tuesday dinners they'd always just flown back from somewhere. That intensity of engagement for thirty days was the difference between Airbnb succeeding and dying.

2. **Do the Collison installation.** Don't say "we'll send you a link." Sit down with the user, set up the product with them, watch them use it, fix what's broken in real time. You'll learn more in one hour of that than in a month of analytics.

3. **Delight — disproportionately.** Your first users should feel that signing up with you was one of the best choices they ever made. For as long as Wufoo could, they sent every new user a handwritten thank-you note. Engineers often resist this because customer service isn't part of their training — they want to build robust and elegant things, not grovel at individuals. But engineering's aversion to handholding comes from an era when engineers were Scotty, not Kirk. You can be ornery when you're Scotty. Not when you're Kirk. I have never once seen a startup lured down a blind alley by trying too hard to make initial users happy.

4. **Be your own software.** When you only have a few users, you can often do by hand what you plan to automate later. This lets you launch faster, and when you do automate, you'll know exactly what to build because you'll have muscle memory from doing it yourself. The way Stripe delivered "instant" merchant accounts to its first users was that the founders manually signed them up for traditional merchant accounts behind the scenes. It felt disreputable. It was the right move.

5. **Consult-for-one.** For B2B startups, pick a single user and act as if you're consultants building something just for that one user. The initial user serves as the form for your mold; keep tweaking till you fit their needs perfectly, and you'll usually find you've made something other users want too. The trap to avoid: being paid by the hour. The moment they're paying for your time, they'll expect you to solve all their problems. Stay a product company that is merely being unusually attentive.

6. **Contain the fire.** Pick a deliberately narrow market at first. Facebook at Harvard. Keep the fire hot. Don't add logs (expand audience) until the first log is burning intensely.

7. **Think of the startup as a vector.** Stop thinking of startup ideas as scalars. Think of them as pairs: what you're building, plus the unscalable thing you're going to do to get it going. In the best case, both parts contribute to your DNA permanently. If you have to be aggressive about acquisition when you're small, you'll probably still be aggressive when you're big. If you have to delight users when there are five of them, you'll keep doing it when there are five million.

## Examples

**Situation:** A founder shipped v1 three weeks ago. 40 signups. The product is a B2B tool for ops teams. The founder is writing copy for paid Google ads and debating which growth channel to try. "The landing page isn't converting."

**Application:** Close the ad account. Your problem isn't the landing page. Your problem is that you have 40 signups you have not personally met. Pick the 10 most active. Email each one personally and ask for 20 minutes on a call. On the call, screenshare and watch them use the product. Ask them what made them sign up. Ask them what made them stop using it. Take notes. At the end, for the ones who want it, set up the next thing they need personally — import their data, write the integration, whatever it is. The Collison installation. You will learn more in ten of those calls than in a year of A/B testing copy. And you'll probably come out of it with three evangelists, because nobody else in their job is doing this for them.

**Result:** Of the ten calls, three users become champions who bring in their colleagues. Two tell the founder that the product solves a different problem than the founder thought. The landing-page copy problem turns out to have been a positioning problem, and the positioning changes based on the actual user language. Net: the next twelve weeks of growth are driven by this one week of unscalable work.

---

**Situation:** A solo technical founder has built a niche developer tool. "I'm an introvert. I can't go door to door. Paid ads aren't working. I'm thinking of shutting down."

**Application:** You don't need to go door-to-door physically. But you do need to go out and get users, and that means talking to humans. Find the ten developer communities where your users hang out. Go into each one and help somebody — not pitch, help. Answer questions. Write tutorials. Ship fixes when users complain about something in those threads. When one of them asks about your tool, get on a call and sit with them while they try it. Write the integration for them. Ship the feature they need before they finish asking. If you're an introvert, fine — do it over Discord and Zoom. But you cannot delegate this to a funnel while you have 40 users. Nobody is going to do it for you. And "shutting down" is not the alternative to going out and talking to users. Shutting down is the alternative to having a company.

**Result:** The founder picks three communities, spends two months helping without pitching, and ends up with 120 power users who actively evangelize. The tool grows to ramen profitable within a year.

## Anti-Patterns (tactical)

**Don't:** Plan the Big Launch — eight publications, Tuesday, embargoed.
**Why:** Launches don't matter. Think of successful startups you know — how many of their launches do you remember? All you need from a launch is some initial core of users. How well you're doing a few months later depends on how happy you made those users, not how many there were of them. Founders who believe startups are projectiles rather than powered aircraft think they only make it if they're launched with sufficient initial velocity. They're wrong, and they usually spend three weeks polishing launch theater instead of doing the one thing that works: talking to users.

**Don't:** Pursue partnerships with big companies to kickstart growth.
**Why:** Partnerships especially don't work as a way to get growth started. Six months later you will be saying the same sentence every other partnership-reliant founder says: "that was way more work than we expected, and we ended up getting practically nothing out of it." Any strategy that replaces your direct effort with somebody else's distribution is ipso facto suspect.

**Don't:** Start a consulting business disguised as a startup.
**Why:** Consulting is the canonical work that doesn't scale. It's safe so long as you're not being paid for it. When you start getting paid by the hour, you stop being a product company and start being a services firm. Services firms have much worse economics and no compounding. Stay on the product side of the line.

**Don't:** Wait for word-of-mouth to happen on its own.
**Why:** Word-of-mouth does happen, but only after you've given it something to work with — a critical mass of users who love the product enough to tell their friends. You create that critical mass by delighting the first few users past all reason. The viral loop is the output, not the input.

**Don't:** Let the smallness of the numbers discourage you.
**Why:** The big danger at the larval stage is that you'll dismiss your own startup. I've seen it happen. Microsoft can't have seemed impressive as a couple guys in Albuquerque writing Basic for a market of a few thousand hobbyists. In retrospect it was the optimal path. The question to ask is not "is this company taking over the world?" but "how big could this get if the founders did the right things?" The right things often seem laborious and inconsequential at the time. That's the shape of the work.
