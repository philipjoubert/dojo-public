---
triggers:
  - "user cites cost-accounting conclusions (cost-per-part, fully-loaded cost, margin percentage)"
  - "user is evaluating an investment with traditional ROI math"
  - "user wants to discontinue a product because it 'doesn't make money'"
  - "user proposes cost-cutting to 'improve profitability'"
use_when:
  - "a decision is being made on cost-accounting grounds and throughput is ignored"
  - "local efficiency numbers are rising but the company is not making more money"
  - "product mix is being chosen on margin instead of throughput per constraint hour"
fails_when:
  - "the business has no clear system constraint yet — identify it first"
  - "the question is genuinely about external financial reporting (GAAP), not management decisions"
related:
  - "identify-the-constraint.md"
  - "the-goal-and-measurements.md"
  - "five-focusing-steps.md"
  - "anti-patterns.md"
---

# Throughput Accounting (T, I, OE)

## When to Use
- Any investment, product, pricing, or cost-cutting decision is on the table. The cost-accounting numbers being circulated almost certainly point the wrong direction.
- Someone is proposing to buy a resource or hire staff because "cost-per-unit will drop." The per-unit number is almost always an allocation artifact.
- A product is being discontinued because "it has low margin" or "it's unprofitable" under fully-loaded costing. Check throughput per constraint hour before you agree.
- Efficiency is up, cost-per-part is down, and the company is losing money. This is the diagnostic pattern for cost-accounting disease.

## Fails When
- The audience is a regulator or external auditor. Throughput accounting is a management tool, not a GAAP reporting framework. Don't fight the wrong war.
- The organization has no identified constraint. Without knowing the constraint, throughput-per-constraint-hour comparisons cannot be made.
- Someone tries to use T, I, OE to defend a decision that fails on obvious grounds. The three measurements clarify real decisions, not rationalize bad ones.

## Core Concept

Traditional cost accounting was designed for a world that no longer exists — one where direct labor was the major cost and machines ran slowly. Today it actively misleads managers into decisions that destroy their organizations. You allocate fixed costs across products. You call labor "variable." You value inventory as an asset. You report cost-per-unit as if it were a real number. Every one of these conventions quietly distorts good decisions into bad ones.

Throughput Accounting replaces all of this with three measurements. They are the only three you need.

**Throughput (T)** — the rate at which the system generates money through sales. Revenue minus truly variable costs (raw materials, outsourced processing, sales commissions). That's usually it. Labor is not truly variable; you do not pay your workers per piece. Overhead is not truly variable; the lights stay on whether you make one unit or one thousand. Most importantly — throughput is through *sales*, not production. A hundred widgets in inventory produce zero throughput until someone pays for them.

**Inventory (I)** — all the money the system has invested in things it intends to sell. Raw materials, work-in-process, finished goods. Notice what is excluded: the value added by labor. Traditional accounting adds labor value to inventory; this is a fiction and a dangerous one, because it creates an incentive to build inventory in order to "absorb overhead" and make the unit cost numbers look better.

**Operating Expense (OE)** — all the money the system spends turning inventory into throughput. Everything else: salaries, rent, utilities, depreciation, insurance. All of it. One number. Not dozens of allocated categories that look precise and mean nothing.

The goal is simple: increase throughput while simultaneously reducing inventory and operating expense. Any decision that moves those three variables in the right direction is a good decision. Any decision that moves them the wrong direction is a bad decision — even if the cost-accounting spreadsheet says otherwise.

And here is the hierarchy: **throughput comes first.** Inventory has a floor (zero). Operating expense has a floor (whatever minimum keeps the system alive). Throughput has no ceiling. The upside is unlimited.

## How to Apply

1. **For any proposed action, ask the three questions.** Did throughput go up or stay the same? Did inventory go down or stay the same? Did operating expense go down or stay the same? If the answers are no, no, and no, there was no improvement — only an accounting illusion. If the answers are yes, yes, yes, do it immediately.

2. **Stop comparing products on margin percentage.** Compare them on throughput per constraint hour. Product A generates $70 throughput in 2 constraint hours = $35/hour. Product B generates $60 throughput in 1 constraint hour = $60/hour. Traditional accounting picks A (higher absolute margin). Throughput accounting picks B (better use of the scarce resource). Apply this to product mix decisions, pricing decisions, and order acceptance decisions.

3. **Treat labor as operating expense, not variable cost.** You pay workers whether or not a given unit is produced. Including labor in per-unit cost calculations creates the illusion that more production reduces cost — it does not. It just spreads fixed cost across more units, which is arithmetic dressed up as profitability.

4. **Stop valuing inventory as an asset for decision purposes.** Finished goods in the warehouse are not wealth. They are frozen cash depreciating while consuming space and hiding production problems. The balance-sheet convention makes inventory look valuable; the management reality is the opposite. A decision that raises inventory levels raises a cost, not an asset.

5. **Detect the efficiency trap.** When local efficiency numbers look great and the company is losing money, you are in the trap. The cost-per-part went down because fixed overhead was spread across more units — which required building more units — which created inventory — which consumed cash. The per-unit number looks good on the report; the bank account tells the truth.

6. **Make the cost of constraint time explicit.** At a typical plant, constraint time costs $500 to $5,000 per hour in lost throughput. Post this. Make it visible. The moment supervisors see the number, their attitude toward lunch coverage, changeovers, and scrap changes without further instruction. Throughput accounting makes the real cost visible in a way cost accounting hides.

7. **Evaluate orders on their throughput contribution, not their fully-loaded margin.** An order that sells for $75 when the "fully loaded cost" is $85 looks like a $10 loss. But if $50 of that $85 is allocated overhead that will be paid regardless, accepting the order adds $45 throughput ($75 revenue minus $30 raw material). Rejecting it adds zero. Take the order, with eyes open, as long as it does not displace higher-throughput work at the constraint.

## Examples

**Situation:** A plant installs welding robots. Efficiency in the welding area rises 36%. The cost-per-part reports improve dramatically. Corporate is delighted.
**Application:** Run the three questions. Did the company sell more products? No. Did it reduce payroll? No. Did inventories go down? No — in fact, to keep the robots "busy," more material was released, and inventory went up. Operating expense went up (robots are capital + maintenance). Throughput was unchanged because welding was not the constraint.
**Result:** There was no improvement. The 36% efficiency gain was real in its silo and meaningless at the system level. The cost-per-part decline was an allocation artifact of distributing fixed overhead across more (unsold) units. The company is losing more money and looks to its reports like it is thriving.

**Situation:** A product line is slated for discontinuation because "fully-loaded margin is only 6%." The controller's deck is clear: "this product is barely profitable."
**Application:** Recalculate on throughput. What are the truly variable costs — raw material, outsourced work, commission? Subtract those from revenue. What is the throughput per constraint hour for this product versus the alternatives that would replace it in the product mix? If the product's constraint-hour throughput is high and the allocated overhead would continue to exist with or without it, discontinuing drops throughput while operating expense stays roughly constant. You just destroyed money.
**Result:** The product stays. The controller learns that fully-loaded margin is an accounting convention, not a decision criterion. Many "unprofitable" products turn out to be profitable at the throughput level and were being cut by the wrong measurement.

**Situation:** Purchasing gets a 10% discount on a 32-month supply of copper wire. They report a big "savings."
**Application:** The savings is a story. What actually changed: inventory rose by several million dollars, cash is tied up for 32 months, storage costs are incurred, obsolescence risk is real, and throughput did not improve at all. Run the three questions. Throughput: unchanged. Inventory: up dramatically. Operating expense: up (carrying costs). Every answer is wrong. The "10% savings" was a transaction-level win and a system-level loss.
**Result:** The purchasing decision is a disaster dressed as a win. Measurements that reward unit-cost reduction without penalizing inventory build produce exactly this behavior. Tell me how you measure me — purchasing was measured on unit cost, so it optimized unit cost. Change the measurement.

**Situation:** A sales rep is told that an order at $75 is unprofitable because fully-loaded cost is $85. She walks away.
**Application:** Truly variable cost is $30 (raw material + commission). At $75 the order contributes $45 in throughput. Operating expense does not change whether we take the order or not. Inventory does not change materially. If the order does not displace higher-throughput work at the constraint — i.e., there is constraint capacity available — take it.
**Result:** The rep takes the order. $45 of throughput enters the system that would not have. Multiplied across a year of orders that were previously rejected on fully-loaded-margin thinking, this is material money. Cost accounting was saying "don't sell below loaded cost"; throughput accounting says "sell every unit that generates positive throughput in constraint-available capacity."

## Anti-Patterns (tactical)

**Don't:** Use throughput accounting to justify keeping everything.
**Why:** Throughput accounting is clarifying, not permissive. A product whose throughput per constraint hour is lower than the next-best alternative should be displaced when constraint capacity is scarce. Do not wield the tool to rationalize — wield it to decide.

**Don't:** Treat per-unit cost as meaningful for management decisions.
**Why:** The per-unit number is allocated, and allocation is arbitrary. Changing the allocation formula changes the "cost" without changing any real thing in the world. Managers who trust per-unit costs are being steered by whoever designed the allocation formula.

**Don't:** Absorb overhead by building inventory.
**Why:** This is the single most corrosive incentive in cost accounting. Building to absorb overhead lowers the reported per-unit cost and raises real inventory dollars. It is the exact behavior you want to kill. Throughput accounting does not reward it; cost accounting does.

**Don't:** Fight GAAP with throughput accounting.
**Why:** External financial reporting lives in its own world with its own conventions. Do not waste energy trying to convert auditors. Keep two sets of books — GAAP for compliance, T/I/OE for management decisions. That is the correct structural answer.

**Don't:** Count labor savings from layoffs as the full improvement.
**Why:** Layoffs reduce operating expense, which is good. But if the throughput also drops because the system loses capacity, or if the skills lost cost more to rebuild than the savings, the layoff destroys money. Apply the three questions before acting.

Three numbers. One goal. Increase the first, decrease the others. Everything else is accounting games.
