---
triggers:
  - "user's supply chain has simultaneous shortages and excess"
  - "user wants to improve inventory turns"
  - "user relies on forecasts to drive ordering"
  - "user describes retail stockouts and overstocked back rooms in the same store"
use_when:
  - "a distribution system is forecast-driven and broken"
  - "the bullwhip effect is visible — small demand swings producing large upstream swings"
  - "inventory and stockouts both exist at the same place"
fails_when:
  - "the product has no sales history — replenishment needs a consumption signal to replenish against"
  - "systems lack real-time consumption visibility"
related:
  - "identify-the-constraint.md"
  - "throughput-accounting.md"
  - "the-goal-and-measurements.md"
---

# Pull Replenishment (Distribution & Retail)

## When to Use
- A retail or distribution operation has shortages and excess simultaneously. Empty shelves at the store while the back room is stuffed. Products out of stock while distant warehouses are overflowing with slow movers.
- Forecasts are driving ordering decisions. Accuracy is 40–60% at SKU-level. Every missed forecast produces either lost sales or markdowns.
- Upstream manufacturing is running boom-and-bust — overtime one month, idle the next — driven by retail's amplified ordering swings.
- Inventory turns are 4–6 per year and the organization believes that is "industry standard."

## Fails When
- Products are genuinely new with no consumption history. A brief forecast-based seed is needed; switch to replenishment as soon as signal stabilizes.
- The information systems cannot provide real-time consumption visibility up the chain. Replenishment needs the signal.
- Measurement systems reward unit-cost discounts that require bulk buying. The policy will fight the physics. Change the measurement first.

## Core Concept

Walk into any retail store and you will see a paradox. Some shelves are empty — customers want these products and leave disappointed. At the same time, the back room is stuffed with merchandise that is not selling. Shortages and excess exist simultaneously, in the same store, managed by the same people. How?

Because the system is designed for forecast-based push. Manufacturers produce based on forecasts. Distributors order based on forecasts. Retailers order based on forecasts. Everyone is guessing what consumers will want three, six, twelve months from now. When the forecast is wrong — and it is, 40–60% of the time at the SKU level — the system creates shortages (if demand exceeds forecast) or excess (if demand falls below). Both happen simultaneously because different products go different ways.

You cannot forecast your way out of this problem. The more detailed the forecast, the less accurate it becomes. Billions of dollars of sophisticated forecasting systems are fundamentally incapable of solving the problem they were designed to solve.

The alternative is pull replenishment. Stop pushing product based on predictions. Start pulling product based on actual consumption. As long as the end consumer has not bought, nobody in the supply chain has sold. Hold a deliberate buffer of inventory at each point in the chain (retailer, distributor, regional warehouse, factory). When product is consumed from a buffer, replenish exactly what was consumed. Frequently — daily for fast movers. Not based on economic order quantities. Not based on forecasts. Based on what actually sold.

Three other principles follow.

**Display space is the constraint, not purchasing budget.** Every square meter of display generates revenue. Fast-moving products should get more space; slow-moving products should get less or none. Stop managing retail by category allocation and start managing it by throughput per display unit.

**Aggregate inventory at the highest practical level.** A product sold by 100 stores has 100 separate demand fluctuations. If each store holds safety stock, you have 100 separate buffers absorbing local variation. Aggregate centrally: the central warehouse absorbs variation that would have required massive buffers at individual stores. Distribute based on consumption. This requires fast, frequent replenishment — which is exactly what pull provides.

**Kill the bullwhip effect.** Each level of a push chain amplifies variation upstream. Retailer sees demand up 10%, orders 20% more to build safety; distributor sees 20% and orders 30%; factory sees 30% and schedules 40% more production. Actual consumer demand moved 10%; the factory is making 40% more. When demand returns to normal, the factory crashes. Replenishment eliminates the bullwhip — each level replaces exactly what was consumed.

## How to Apply

1. **Establish buffers at each point in the chain.** Retailer, distributor, regional warehouse, factory finished goods, factory raw materials. Size each buffer to cover replenishment time from the upstream point plus a reasonable safety margin. Not forecast of demand over many months — just the coverage needed for the replenishment cycle.

2. **Install real-time consumption visibility.** When a store sells a unit, the signal propagates: central warehouse ships replacement; warehouse's consumption triggers factory replenishment; factory's consumption triggers raw material replenishment. Without this information, pull cannot work.

3. **Replenish frequently.** Daily for fast movers. Weekly for slower. The principle is: replace exactly what was consumed, as soon as possible. Small frequent shipments beat large infrequent ones — on total cost, always, once you count inventory carrying, stockouts, obsolescence, and warehouse space.

4. **Aggregate inventory centrally where possible.** Hold a product mostly in the central warehouse; push only what has been consumed out to individual stores. The central buffer absorbs the variation that 100 store-level buffers would have required. This is dramatically more capital-efficient.

5. **Reallocate display space based on throughput velocity, not historical category allocation.** Fast movers get more space; slow movers get less. Use actual consumption data, refreshed continuously. Over time, the planogram evolves toward throughput optimization naturally.

6. **Change the measurements.** Purchasing managers measured on unit cost will buy in bulk and create excess. Logistics managers measured on transportation cost per unit will consolidate into large shipments and create inventory. Store managers measured on availability will over-order and create obsolescence. Add measurements for inventory turns, stockouts, and total carrying cost. Volume discounts are not savings if the product doesn't sell.

7. **Run a pilot, not a wholesale switch.** Start with a subset of products or stores. Demonstrate: higher availability, lower inventory, better turns, less bullwhip. Then roll out. Pull replenishment is economically overwhelming in its favor but culturally disruptive; you need demonstrated evidence to overcome the organizational muscle memory of push.

## Examples

**Situation:** A retailer has chronic stockouts on fast sellers while back rooms hold slow-moving products for months. Inventory turns are 5 per year.
**Application:** Build buffers by SKU based on sales velocity. Replenish daily from the central warehouse. Aggregate safety stock centrally. Repositioning: slow movers reduced to small display allocations; fast movers get increased space. Purchasing stops bulk-buying for discounts; transportation shifts to smaller, more frequent shipments. Measurements change to include turns and carrying cost.
**Result:** Inventory turns rise from 5 to 15+. Stockouts drop dramatically. Back room clears. Carrying cost drops by ~60% despite slightly higher transportation cost. Net: millions of dollars annually in a typical retailer. Same sales volume or higher; dramatically lower capital required to achieve it.

**Situation:** A manufacturer produces based on a 6-month forecast. Every quarter, demand diverges from forecast, and the result is simultaneous shortages on popular SKUs and markdowns on unpopular ones.
**Application:** Stop forecasting at the product level. Establish a finished-goods buffer for each SKU based on recent replenishment velocity. Produce to replenish what has been shipped out. Install daily visibility from distributors on their consumption. Produce frequently, in small batches, rather than in long runs of one SKU at a time.
**Result:** Forecast-driven production gives way to consumption-driven production. Markdowns drop. Service level rises. Factory schedule stabilizes — no more feast-or-famine schedules driven by bullwhip. Throughput per dollar of working capital improves.

**Situation:** A distributor holds safety stock at every branch. Total inventory is high; individual branches still experience stockouts.
**Application:** Aggregate to a central hub. Shrink branch inventory to one replenishment cycle. Replenish from the central hub daily. The central hub absorbs aggregate demand variation, which is smaller than sum-of-local variations.
**Result:** Total inventory drops by 30–60%. Service level improves. Stockouts at branches drop because the central hub has more buffer than any individual branch could afford. The paradox: less total inventory, better service.

**Situation:** Purchasing gets a 15% volume discount on a 32-month supply of a component. They report millions in savings.
**Application:** Apply the three questions. Throughput: did we ship more because of this purchase? No. Inventory: did it go up? Yes, by millions of dollars. Operating expense: did carrying cost go up? Yes. The "savings" was a transaction-level win and a system-level loss. The discount did not justify the capital tied up for 32 months and the obsolescence risk across that period. This is the spreadsheet insanity purchasing loves and finance catches too late.
**Result:** Purchasing measurement is changed to include a capital cost on inventory held. The bulk-buy incentive disappears. Actual total cost drops.

## Anti-Patterns (tactical)

**Don't:** Push forecast-based production when actual consumption data is available.
**Why:** The consumption signal is truer than any forecast. Using the forecast when the signal is available is choosing noise over data.

**Don't:** Optimize transportation cost while ignoring inventory cost.
**Why:** Transportation is typically 5% of product value; carrying cost is typically 25–40% per year. Optimizing the 5% while ignoring the 30% is insanity with spreadsheets. Total cost, not line-item cost, is the right measure.

**Don't:** Allow branch-level safety stock to accumulate.
**Why:** It is expensive, slow-to-turn, and inferior to aggregate buffering. Branch safety stock treats each point as if it had to survive independently; aggregation uses the law of large numbers to reduce required safety.

**Don't:** Buy volume discounts that create multi-month inventories.
**Why:** The discount is real but bounded; the cost of holding the inventory is persistent. A 10% unit-cost saving on product that sits 12 months and then is marked down 30% is not a saving — it is a loss dressed up as purchasing skill.

**Don't:** Leave the old measurements in place while changing the process.
**Why:** Tell me how you measure me. If purchasing is still bonused on unit cost, they will buy in bulk. If logistics is still bonused on cost per unit shipped, they will consolidate. Pull replenishment dies on the first Monday after the measurement stays the same.

Replace forecasts with actual consumption signals. Hold aggregate buffers where variation cancels. Replenish frequently based on what was used. The physics are clear. The economics are clear. The only question is whether the organization has the courage to change the mental model.
