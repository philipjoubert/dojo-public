---
triggers:
  - "user asks about DAU/MAU, engagement metrics, retention benchmarks"
  - "team is chasing DAU/MAU gains by sending more notifications"
  - "founder wants to know if their mobile app retention is normal"
  - "user asks about the L30 histogram or power user curve"
  - "team is benchmarking against Facebook's engagement numbers and losing"
  - "user asks how to measure engagement for an episodic product"
use_when:
  - "a team is reporting DAU/MAU as their North Star and missing heterogeneity in user behavior"
  - "a product with episodic value is being evaluated with daily-frequency benchmarks"
  - "a mobile app founder is panicking about retention numbers without knowing the reference class"
  - "deciding whether to fight for retention with notifications or with first-session activation"
fails_when:
  - "the team has no instrumentation and can't actually produce cohort data, let alone an L30 histogram"
  - "the product is B2B enterprise with 10–20 seat licenses where individual-user engagement matters less than logo-level health"
  - "'DAU/MAU doesn't matter' becomes an excuse to ignore engagement entirely in categories where it does matter"
related:
  - "consumer-pmf.md"
  - "next-feature-fallacy.md"
  - "trough-of-sorrow.md"
---

# The Power User Curve — L30 Smile, Mobile Churn Reality, and Where DAU/MAU Lies

## When to Use
- A team is reporting DAU/MAU as their single engagement metric and celebrating (or panicking) based on a ratio that doesn't fit their product category.
- A founder is chasing DAU/MAU gains by shipping more notifications — and wondering why the ratio isn't moving.
- A mobile startup's retention looks "bad" and they want to know whether it's catastrophic or normal for the category.
- Someone is benchmarking a new consumer app against Facebook's 70% DAU/MAU and concluding they've failed.
- A team needs to pick the right engagement metric for an episodic product (Airbnb, Uber, Workday) instead of defaulting to the social-app default.

## Fails When
- The team can't actually produce cohort data — no event instrumentation, no per-user activity logs. The L30 histogram requires clean per-user daily-activity data over a rolling 30-day window.
- The product is B2B enterprise with 10–20 seat licenses where logo-level retention and expansion matter more than per-user engagement. Per-user DAU/MAU on 15 seats is noise.
- "DAU/MAU doesn't matter" becomes a blanket excuse to ignore engagement in categories where engagement actually does drive the business (social, messaging, content, creator platforms).

## Core Concept

DAU/MAU (daily active users as a percentage of monthly active users) became the default engagement metric because Facebook popularized it. The benchmarks everyone quotes — 20%+ is "good," 50%+ is "world-class," WhatsApp at 70% — come from the social-communication category where daily use is the product. **Outside that category, DAU/MAU actively misleads.** And even inside it, the ratio hides heterogeneity among users: your most-engaged 5% and your least-engaged 50% average together into a blended number that tells you nothing about whether you have a business.

**The Power User Curve — the L30 (or L7 for workplace products) histogram — replaces DAU/MAU as the primary engagement view.** It was coined by the Facebook growth team. Plot the X axis as "days active in the last 30" from 1 to 30. Plot the Y axis as "number of users at each level of activity." Read the *shape*.

- **Smile (U-shape)** = healthy. There's mass on both ends: some light-touch users, *and* a rising right-hand tail of power users who come back almost every day. Facebook's L30 shows a very right-leaning smile, with 60%+ of MAUs coming back daily.
- **Left-leaning decay** = no power users. Fine for LinkedIn, Wealthfront, mattress e-commerce — if monetization doesn't require daily use. Not fine if you're building an ads business.
- **Cohort-over-cohort drift right** = product is getting stickier. You can overlay August–November cohorts and see the smile deepening as network density grows.

The beauty of the Power User Curve over DAU/MAU is that it shows heterogeneity among your user base, reflecting the nuances of different user segments (and therefore what drives each of those segments). Power User Curves show if your product is hitting a nerve among a super-engaged core group of users, even if perhaps the overall blended DAU/MAU is low. Your hardcore tail is your business. The front of the curve is where you earn the right to have more users. **Customize the action.** L30 doesn't have to be "app open"; for a content platform, plot "days with a post." The 1% rule still applies: a small core creates, everyone else consumes.

**DAU/MAU fails for episodic-but-valuable products.** Uber's highest-margin rides are airports, business travel, Black Car — not daily commute. Uber's DAU/MAU was never above 50%. LinkedIn is used primarily by recruiters and job-seekers in spurts. Airbnb and Booking — travelers book a few times a year. Workday, Salesforce, Dropbox, Google Analytics — used 1–2x per week at most, and all are multi-billion-dollar businesses. E-commerce products for mattresses, sunglasses, watches have near-zero DAU/MAU and huge TAM. All of these would fail a naive DAU/MAU test, and all of them are correct to. **The rule of thumb:** if you're low-frequency/episodic, then you have to generate enough dollars or data per use that it's valuable. If you're high-frequency, you have a higher chance of growing virally and building an audience business that monetizes via ads. Pick the metric that matches your category's nature; don't try to force the product to fit the metric.

**Why notifications *lower* DAU/MAU.** Counterintuitive but consistent result: notifications tend to increase MAU (casual users coming back once) faster than DAU (regular users who would have come back anyway). The ratio goes *down*, not up. I've also not seen a 10% DAU/MAU product, through sheer effort, become 40% DAU/MAU. There seems to be a natural cadence to the usage of these product categories that doesn't change much over time. It's impossible to battle nature.

Now the mobile reality check. The **Quettra 2015 dataset** — 125M Android devices, excluding Google's own apps, apps with 10K+ installs only — is the canonical benchmark for mobile-app retention. **The average app loses 77% of its DAUs within 3 days of install. 90% within 30 days. Over 95% within 90 days.** The average app mostly loses its entire userbase within a few months, which is why of the more than 1.5 million apps in the Google Play store, only a few thousand sustain meaningful traffic.

Top apps do much better, but not because their slope is shallower — because they start higher. The data is stark:

| | D0 | D1 | D7 | D30 | D90 |
|---|---|---|---|---|---|
| Top 10 | 100 | 74.7 | 67.4 | 59.8 | 50.9 |
| Next 50 | 100 | 64.9 | 54.1 | 44.8 | 34.5 |
| Next 100 | 100 | 48.7 | 35.9 | 25.5 | 19.0 |
| Next 5000 | 100 | 34.3 | 21.6 | 13.6 | 9.0 |
| Average | 100 | 29.2 | 17.3 | 9.6 | 4.0 |

The key insight from Ankit Jain at Quettra: **the falloff from D1 to D30 is about the same as all the other apps.** Top apps hook users in the first week — their slope doesn't flatten later, they just start higher. **Users try out a lot of apps but decide which ones they want to "stop using" within the first 3-7 days. For "decent" apps, the majority of users retained for 7 days stick around much longer. The key to success is to get the users hooked during that critical first 3-7 day period.**

Which leads to the retention prescription. **You bend the curve with activation in days 3–7, not with notifications.** Product-specific first-visit goals matter: a blogging product should force "pick theme, name, write first post"; a social service should force "import address book, connect friends"; a SaaS analytics tool should force "install JS tag"; an enterprise collab tool should force "start a project, add coworkers." *Sending a shitload of spammy email notifications with the subject line "We Miss You" is unlikely to bend the curve significantly. I hate those, and you should too.*

## How to Apply

### Replace DAU/MAU with the L30 shape
1. **Build the L30 histogram.** X = "days active in last 30." Y = "number of users at that activity level." Customize the action — for a content platform, use "days with a post." For a marketplace, "days with a transaction."
2. **Read the shape, not the average.** Smile (U-shape) = healthy tail of power users plus light-touch base. Left-leaning decay = no power users (fine if your monetization doesn't require them). Right-leaning smile = Facebook-class daily-use product.
3. **Compare cohorts over time.** Overlay the L30 for August, September, October. If the curve drifts right cohort-by-cohort, the product is getting stickier. If it drifts left, you're losing engaged users faster than you're adding them.
4. **If DAU/MAU is low but the L30 has a real right-side tail, the tail is the business.** Show investors the histogram, not the average. "What % of your users are active every day last week? What are they doing? How are you going to produce more of them?" Showing this group exists goes a long way.

### Don't fight your category's natural cadence
1. **Ask what the product actually is.** Daily-use social? Episodic transactional? Weekly productivity? Seasonal?
2. **Pick the right metric.** Daily-use social → DAU/MAU and L30 smile. Episodic transactional → dollars per transaction × transactions per year. Weekly productivity → L7 smile. Seasonal → cohort revenue per year.
3. **Don't try to force DAU/MAU up through sheer effort.** A 10% DAU/MAU product doesn't become a 40% DAU/MAU product with more notifications. There's a natural cadence.

### Use the mobile reference class honestly
1. **Baseline against the Quettra table.** If your app is pulling 30/20/15/10/6 at D1/D7/D14/D30/D60, you're average. That isn't a target to celebrate — it's a baseline to escape.
2. **Recognize the slope is roughly the same for winners and losers; winners start higher.** Top-10 apps retain 75% on D1; average apps retain 29%. The difference is made in the first 3–7 days, not at D30.
3. **Compute your D3 and D7 retention separately.** If D3 is <40% and D7 is <20%, the leverage point is the first week of activation — not re-engagement six months later.

### Bend the curve with activation, not notifications
1. **Define the first-visit goal.** What is the single action that correlates with retention? For Facebook it was "7 friends in 10 days." For your product it's something specific — pick a theme, import contacts, install the tag, start a project.
2. **Force the goal in the first session.** Don't leave it as optional post-onboarding. If the product needs connections, make the signup flow produce them. If the product needs content, force the first post.
3. **Measure activation rate as a leading indicator.** % of new users who complete the activation goal in days 1–7 is the metric that predicts D30+ retention.
4. **Treat notifications as a hierarchy, not a lever.** Personal + relevant (friend messaged you, someone commented on your post) is acceptable. Company-driven ("Try feature X!", "Top videos this week!", "Update your photo!") is spam in slow motion. Avoid the latter; they lower DAU/MAU, not raise it.

## Examples

**Situation:** A consumer creator-tool has 450K MAU, 38K DAU, so a DAU/MAU of 8.4%. The board is worried the product isn't engaging. The founder builds the L30 histogram for the first time and finds a clear smile: there's a solid mass of 1-to-3-day users, a dip in the middle, and a strong right-side tail of users active 20+ days out of 30. That tail is 6% of total users but generates 58% of the content on the platform.
**Application:** DAU/MAU is hiding the business. The blended 8.4% looks mediocre. The L30 shape tells the actual story — the product has a super-engaged hardcore creator base doing most of the work, exactly the structure the 1% rule predicts. The fix is not to "raise DAU/MAU" across the board; it's to (a) grow the hardcore tail (what % of your users are active 20+ days, what are they doing, how do we produce more?) and (b) accept that the left side of the curve is light-touch users who won't become daily-actives and don't need to. Report to the board with the histogram, not the ratio.
**Result:** The board understands the business for the first time. Product roadmap pivots to tools that help the hardcore tail create more, which is the actual leverage point. DAU/MAU doesn't change materially — and it doesn't matter. Revenue per power user and power-user retention become the North Star.

**Situation:** A marketplace startup is six months into life, pulling D1 of 31%, D7 of 18%, D30 of 10%, D90 of 4%. The founder is convinced retention is catastrophic and wants to ship a daily re-engagement notification sprint.
**Application:** Benchmark against Quettra. The numbers are roughly average — D1 29%, D7 17%, D30 10%, D90 4% across the long tail of the Play Store. You're not catastrophic; you're in the reference class. The right move is not to chase retention with notifications (which typically lower DAU/MAU and don't bend the curve). The right move is to bend the D3–D7 slope by rebuilding the activation experience — what is the single action in the first session that correlates with D30 retention? Force it. Top-10 apps retain 67% at D7, not because their slope is flatter but because they start higher. You raise your D7 by winning the first week, not by poking users at week four.
**Result:** The team kills the re-engagement notification sprint and instead ships a redesigned first-session flow that forces the core activation action (a listing view + a message to a seller). D1 moves from 31% to 38%, D7 from 18% to 27%, D30 from 10% to 16%. None of it came from notifications.

**Situation:** A travel startup reports DAU/MAU of 3%. An investor passes on the round citing "weak engagement." The founder is trying to figure out how to frame the metric for the next pitch.
**Application:** Travel is an episodic product. Average consumer travels ~2x per year. Booking, Airbnb, and every other multi-billion-dollar travel company has DAU/MAU in the low single digits because that's the nature of the category. The right framing is not to apologize for the ratio but to replace the metric. Bookings per user per year, revenue per booking, repeat-booking rate at 12 and 24 months, and cohort revenue over time are what define a great travel business. If the numbers there are strong, DAU/MAU of 3% is fine — Booking is worth tens of billions. The investor who passed is applying the wrong reference class.
**Result:** Next pitch leads with the episodic-value metrics. Repeat-booking at 12 months is 40%, revenue per user per year is $340, cohort revenue is flat not decaying. The right investors see the real business instead of the misapplied ratio.

## Anti-Patterns (tactical)

**Don't:** Rely on notifications for retention.
**Why:** Notification-driven retention means your product has failed to embed itself in the user's life. They're not coming back because they want to; they're coming back because you poked them. This works briefly, but engagement decays — push CTRs drop, email opens fall, spam folders eat more of your volume, and users mute or uninstall. Worse, notification-heavy strategies often juice MAU without moving DAU, meaning your DAU/MAU ratio *falls* even as vanity metrics look healthy. "It'll actually lower your DAU/MAU to focus on notifications because you'll grow your MAUs more highly than your DAUs." The correct retention strategy is building a product users directly navigate to because they value it, or because friends naturally mention it — pull, not push. The first 3–7 days is where the leverage is, not week four.

**Don't:** Equate DAU/MAU with engagement or value.
**Why:** DAU/MAU measures frequency, not value. A product used twice a year (Airbnb, TurboTax) can be enormously valuable and have DAU/MAU near zero. A product used daily can be low-value junk. The metric tells you something about category, not about product quality. Trying to force DAU/MAU up through notifications typically *lowers* it (MAU rises faster than DAU). And products that shouldn't have high DAU/MAU waste years chasing a number that's structurally unreachable for their category. Worse: boards and investors who misapply the metric can kill good companies by demanding an impossible ratio. If you're low-frequency/episodic, generate enough dollars or data per use that it's valuable. If you're high-frequency, grow virally and build an ads business. Pick the right metric; it's impossible to battle nature.

**Don't:** Compare your blended DAU/MAU to Facebook and conclude you've failed.
**Why:** Facebook's 60%+ DAU/MAU is one of the highest in tech, and it's for a daily-use messaging and feed product. Every other benchmark in the reference class is lower. Worse, the blended number hides the Power User Curve shape — you can have a 10% DAU/MAU with a strong right-side tail that represents a great business, or a 25% DAU/MAU that's entirely middle-of-the-curve users about to churn. Look at the L30 shape, not the single-number comparison.

**Don't:** Benchmark your mobile retention without knowing the Quettra table.
**Why:** Founders panic about mobile retention because they don't know what normal looks like. Normal is bad. The average app loses 77% of DAUs in 3 days and 90% in 30 days. Top-10 apps retain 60% at D30. If your D30 is 10%, you're in the Next-5000 band — that's not great, but it's not catastrophic either, it's the reference class. Know where you sit before you decide what to fix.

**Don't:** Chase DAU/MAU gains by shipping re-engagement notifications.
**Why:** Notifications typically grow MAU faster than DAU, lowering the ratio. The curve also can't be meaningfully bent after the first 3–7 days — users decided whether to keep the app in that window. Spammy "We Miss You" emails bend no curves; they just increase unsubscribes and uninstalls. If you want to raise retention, raise D3 and D7 activation, not D30 re-engagement.

**Don't:** Report DAU/MAU as your only engagement metric to the board.
**Why:** It's a single blended number that hides heterogeneity. The L30 histogram — or L7 for workplace products — tells the actual story: whether there's a hardcore tail, whether the middle is growing or collapsing, whether cohorts are drifting the smile rightward over time. "Show me your hardcore userbase. What % of your users are active every day last week? What are they doing? How are you going to produce more of them?" That's the question that reveals the business. DAU/MAU doesn't.
