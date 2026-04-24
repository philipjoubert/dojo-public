---
triggers:
  - "user asks about production scheduling"
  - "user has WIP piling up and chaotic lead times"
  - "user says their MRP schedule is obsolete the minute it prints"
  - "user is trying to 'schedule every workstation'"
use_when:
  - "the operation has a clear bottleneck and uncontrolled material release"
  - "lead times are unpredictable and expediting is constant"
  - "scheduling attempts have grown elaborate and still don't work"
fails_when:
  - "the constraint hasn't been identified yet"
  - "there is no mechanism to control material release — DBR needs the rope"
related:
  - "identify-the-constraint.md"
  - "exploit-the-constraint.md"
  - "subordinate-everything-else.md"
  - "five-focusing-steps.md"
---

# Drum-Buffer-Rope

## When to Use
- Production or operational flow is chaotic. Work-in-process is spread everywhere. Lead times are unpredictable. Expediting is constant. Schedules go obsolete the moment they are printed.
- A sophisticated MRP or scheduling system is in place and failing. Floor supervisors ignore the printouts and run by gut.
- A bottleneck is known but not protected. Minor upstream problems starve it. Downstream chaos is the rule.
- Management has been trying to solve scheduling by making it more detailed. DBR is the opposite: manage by simplicity, control the release point, let the drum set the pace.

## Fails When
- The constraint has not been identified, or has been misidentified. DBR applied to the wrong drum is worse than no DBR at all.
- There is no enforced mechanism to control material release. The rope is not a suggestion. It is the physical discipline that makes DBR work.
- The measurement system still rewards non-constraint utilization. Operators will obey the measurement over the rope, and DBR will collapse quietly.
- The organization treats DBR as a scheduling tool separate from culture. It is a scheduling tool AND a cultural shift — subordination is not negotiable.

## Core Concept

Every plant is a Boy Scout hike. A line of dependent operations. Each with its own fluctuations. Any shortfall upstream starves downstream. Any surplus upstream piles inventory. The line stretches out across the trail. Nobody arrives together.

DBR organizes the troop. Three elements.

**The Drum** — the bottleneck sets the pace. It is the slowest kid; it is the drummer in a marching band. The rest of the orchestra must follow the drum. The bottleneck's schedule becomes the master schedule. Everything else subordinates to it.

**The Buffer** — a time buffer of work staged in front of the constraint. Not inventory for inventory's sake — insurance against upstream disruption. Murphy lives on the shop floor: machines break, workers call in sick, quality issues arise. Without a buffer, any upstream problem starves the constraint, and time lost at the constraint is lost forever. Size the buffer at roughly half your current lead time to start; adjust based on consumption patterns.

**The Rope** — material release is tied to constraint consumption. When the constraint processes a unit, a signal goes back to the release point: "release one more unit of raw material." Not earlier. Not faster. Not based on how much upstream machines can do. Based on what the constraint will need, offset by the buffer time. The rope is what prevents the plant from becoming a scattered line across a mile of trail. It ties the first worker in the process to the pace of the bottleneck, like a rope between the first scout and Herbie.

This is simpler than MRP. Much simpler. And it works because it matches the physics. MRP tries to schedule every workstation; DBR only schedules the constraint. MRP releases work based on time horizons; DBR releases work based on consumption. MRP assumes you can predict fluctuations; DBR absorbs them with buffers. MRP reschedules constantly as reality diverges from the plan; DBR has a plan that reality cannot derail, because reality is absorbed in the buffer.

## How to Apply

1. **Identify the drum.** The bottleneck. The one resource whose capacity is at or below demand. Use the Identify-the-Constraint diagnostic: where does inventory pile up, where do expeditors go, what does everyone wait for. There is only one drum at any moment.

2. **Build the master schedule at the drum.** Sequence the drum's work to maximize throughput per constraint hour. Prioritize orders by due date, revenue, and strategic importance — in a way that makes sense for *throughput*, not for batch efficiency. Non-constraints will be scheduled backward from this.

3. **Size and position the buffer in front of the drum.** Time-based, not inventory-based. If normal lead time through upstream operations is 8 hours, release work 8 hours + buffer ahead of when the drum needs it. The buffer absorbs the normal upstream fluctuations without starving the drum.

4. **Install the rope.** Material release is authorized only when the drum has consumed a unit. This is a physical discipline — a kanban card, a signal, a consumption-triggered release. It is not a suggestion to "release when there's space." If you don't install the rope, the floor floods with WIP, and the drum is still the constraint, but now buried in noise.

5. **Stop scheduling non-constraints in detail.** Non-constraints do not need their own schedule. They work on whatever the rope releases, in the order it arrives. When the drum's buffer is full, the non-constraint slows or stops. When the buffer runs low, the non-constraint speeds up. The non-constraint's measurement shifts from utilization to on-time delivery to the drum.

6. **Manage by buffer consumption.** The buffer is a reservoir. When it is at normal level, everything is fine — green. When it drops to one-third, yellow — a problem is brewing, prepare a response. When it drops below one-third, red — act now, expedite, fix the upstream problem before the drum starves. This is management by exception: watch the buffer, not every workstation.

7. **Secondary buffers where appropriate.** A shipping buffer at the end protects against downstream fluctuations affecting on-time delivery. Assembly buffers may be needed where paths merge. But keep buffers minimal and at the right places — not scattered everywhere.

8. **Change the measurements to match.** Non-constraint utilization must come off the board. On-time delivery, buffer health, total lead time, and throughput must go on it. If the old measurements remain, operators will defy the rope in favor of the bonus.

## Examples

**Situation:** A plant runs a heavy MRP system. The schedule is regenerated nightly. Every morning the supervisors ignore it and run by priority cards. Lead times vary between 3 and 8 weeks. Expediting is constant.
**Application:** Stop scheduling every workstation. Identify the drum (NCX-10, probably). Build a schedule for NCX-10 and only NCX-10 — throughput-maximized, clearly prioritized. Install a time buffer in front of NCX-10, sized at half the current average lead time. Tie material release to NCX-10 consumption. Non-constraints work what the rope releases. Measure buffer health daily; respond to yellow and red.
**Result:** Lead times collapse — often from weeks to days. WIP drops dramatically. On-time delivery rises to 95%+. Expediting stops because the system is stable. Throughput holds or increases even though the non-constraints are "less efficient" by the old measurement. Throughput is the real measurement; it improved.

**Situation:** A contract manufacturer with 30 workstations has 90% average utilization across all of them and routinely misses delivery dates. Management is considering hiring a sophisticated APS (Advanced Planning and Scheduling) system.
**Application:** The APS is the wrong investment. The real problem is that the release policy floods the floor — every workstation being kept at 90% utilization means the system is being fed at the rate of the fastest operation, not the constraint. Install DBR: find the constraint, schedule only the constraint, tie release to its consumption. Non-constraints drop to whatever utilization matches the drum; some will run at 55%, some at 75%. Total throughput goes up.
**Result:** The APS purchase is cancelled. The floor is organized around one simple schedule instead of thirty complex ones. Lead times drop; cash frees up. The "more software" instinct was a symptom of the real problem — scheduling philosophy — not a solution.

**Situation:** A bakery has a single oven (the drum). Dough preparation, proofing, and finishing are non-constraints. WIP sits everywhere; some batches over-proof and go in the trash.
**Application:** Schedule only the oven. Time buffer: a small tray of proofed dough ready to go in when the oven finishes a batch. Rope: the next dough is made only when a signal returns from the oven that it has started the previous batch. Prep and proofing slow or stop when the tray is full.
**Result:** Waste drops to near zero. Throughput rises because the oven is never starved. The bakers are occasionally idle between cycles — that is correct subordination; idle bakers are cheaper than tossed bread.

**Situation:** A software deployment pipeline. "Drum" is the production-deploy approval step (limited reviewers). Engineers are encouraged to finish PRs at maximum speed regardless of the queue.
**Application:** Install DBR at the deploy step. Buffer: a sized queue of ready-to-deploy PRs. Rope: engineers don't start new non-urgent feature work when the deploy buffer is full; they move to pay down debt, write tests, or help with review. Schedule deploys at the drum's pace, with throughput-per-deploy-slot as the priority.
**Result:** The deploy queue stabilizes. Context-switching cost for reviewers drops. Throughput of shipped features rises. The old "start everything at once" instinct is the scattered Boy Scout pattern; DBR reorganizes the pipeline into a troop.

## Anti-Patterns (tactical)

**Don't:** Release based on upstream machine availability.
**Why:** This is the old regime. It floods the floor. It produces inventory. It means the constraint is buried in WIP rather than protected by it. The rope must replace forward-release thinking entirely.

**Don't:** Size the buffer by gut.
**Why:** Too small and the buffer empties on normal fluctuation; the drum starves. Too large and WIP sits for days, lead times stretch, cash is tied up. Start at half the current lead time; adjust based on how often you hit yellow and red zones. Under-buffering causes throughput loss; over-buffering causes cash loss; get the balance right.

**Don't:** Schedule non-constraints in detail once DBR is in place.
**Why:** You don't need to. They are subordinated to the drum. Detailed non-constraint scheduling invites re-optimizing locally and reintroduces the problem DBR just solved. The only detailed schedule is the drum's.

**Don't:** Leave old utilization metrics in place.
**Why:** Operators obey measurements over instructions. If you measure utilization on a non-constraint, the operator will run it regardless of the rope. DBR fails without matching measurements. Change both together.

**Don't:** Treat DBR as a scheduling product.
**Why:** DBR is a scheduling approach and a cultural shift. Buy a DBR tool and install it without changing the release discipline or the measurements and you will have spent money to configure the tool for failure. The physical discipline is the point.

The bottleneck is the drum. The buffer is insurance. The rope is the material discipline. Three elements. One system. Radical simplification — and it works because it matches the physics.
