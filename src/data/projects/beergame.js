export const beergame = {
  slug: 'beer-game-bullwhip',
  tag: 'Bullwhip Effect / Supply Chain Simulation',
  title: 'Beer Game: Diagnosing the Bullwhip Effect',
  subtitle: 'Beer Distribution Game Simulation — Texas A&M ISEN 645',
  headline: '523-Unit Demand Blip → 1,000-Unit Order Swings',
  role: 'Retailer — Samyak Jain (team: Archit, Praveen, Zhaoyu)',
  company: 'Texas A&M University, ISEN 645 (Lean Engineering)',
  summary:
    'A 24-week run of the classic Beer Distribution Game, played across four serial roles — Retailer, Wholesaler, Distributor, Brewery — with no shared demand visibility beyond the order quantity passed upstream. One real demand shock in Week 2, consumers ordering 523 units instead of 100, rang through the chain as order swings from 0 to 1,000 units by the time it reached the Brewery. I played Retailer; this breaks down what each role did wrong, why, and what lean/OM principles would have kept the chain stable.',
  heroStats: [
    { value: '100 → 523', label: 'Week 2 Consumer Demand Spike' },
    { value: '1,000', label: 'Peak Wholesaler Order (Week 10)' },
    { value: '$7.8K vs $20–32K', label: 'Target vs. Actual Cost' },
    { value: '4', label: 'Supply Chain Roles Diagnosed' },
  ],
  slides: [
    {
      type: 'stats',
      eyebrow: 'Situation',
      title: 'One small demand blip, simulated through four echelons',
      body: 'The Beer Distribution Game puts four players — Retailer, Wholesaler, Distributor, Brewery — in a serial supply chain with order lead times and zero communication beyond the order quantity passed upstream. Week 1 ran stable at 100 units. Then consumer demand jumped once, in Week 2, and the chain never fully settled back down for the rest of the 24-week run.',
      stats: [
        { value: '24 wks', label: 'Simulation Horizon' },
        { value: '100 → 523', label: 'Week 2 Consumer Demand Jump' },
        { value: '4', label: 'Serial Echelons (Retailer→Brewery)' },
        { value: 'Zero', label: 'Direct Demand Visibility Upstream' },
      ],
    },
    {
      type: 'diagram',
      eyebrow: 'Order Amplification',
      title: 'One shock, compounding at every handoff',
      body: 'A single 523-unit demand week at the consumer level rang through the chain as a wave that grew larger the further upstream it traveled — the textbook bullwhip signature.',
      diagram: [
        { label: 'Consumer', state: 'flow', note: 'Demand jumps 100→523 in Week 2, then fluctuates ~400–600 — the only real signal in the system' },
        { label: 'Retailer', state: 'flow', note: 'Peaks at 700 orders (Week 7) after reacting late, then overcorrecting' },
        { label: 'Wholesaler', state: 'flow', note: 'Peaks at 1,000 orders (Week 10) — the largest swing in the chain' },
        { label: 'Distributor', state: 'flow', note: 'Peaks at 900 orders (Week 8), ranging as low as 0' },
        { label: 'Brewery', state: 'flow', note: 'Peaks at 900 orders (Week 9), swinging 700→500→200→900→500' },
      ],
      footnote: 'Order magnitude roughly doubled from the retail to the wholesale tier — none of it driven by a second real demand signal.',
    },
    {
      type: 'checklist',
      eyebrow: 'Bullwhip Effect',
      title: 'How a 523-unit week became a 1,000-unit swing',
      items: [
        { title: 'Where It Started', note: 'At the Retailer, Week 2, when consumer demand rose to 523 and the order response lagged behind it.' },
        { title: 'Why It Happened', note: 'Lead-time delays, backlog panic, and every echelon forecasting that demand would keep climbing.' },
        { title: 'How It Started', note: 'The Retailer faced an immediate backlog and ordered aggressively; each upstream player reacted to the panic below it, not to real demand.' },
        { title: 'How It Escalated', note: 'Retailer→Wholesaler 400–700, Wholesaler→Distributor 400–1,000, Distributor→Brewery 500–900 — amplifying at every handoff.' },
      ],
    },
    {
      type: 'twocol',
      eyebrow: 'Retailer Analysis — Samyak',
      title: 'Reacted late, then overcorrected for good',
      left: {
        heading: 'Failures',
        items: [
          'Overreacted to the first backlog, creating unnecessary order spikes',
          'Ignored falling customer demand in later weeks',
          'Cleared the backlog in one large correction instead of gradually',
          'Held inflated orders (fixed at 599) long after demand had settled',
        ],
      },
      right: {
        heading: 'Should Have Done',
        items: [
          'Smoothed orders with a 3-week moving average',
          'Cleared backlog gradually, not in a single shot',
          'Adjusted to real demand trends, not short-term noise',
          'Shared demand signals upstream with the Wholesaler',
        ],
      },
    },
    {
      type: 'twocol',
      eyebrow: 'Wholesaler Analysis — Archit',
      title: 'Orders swinging from 850 to 350 to 1,000',
      left: {
        heading: 'Failures',
        items: [
          'Amplified retailer fluctuations instead of dampening them',
          'Ignored pipeline inventory already in transit',
          'Tried to clear an entire backlog in a single week',
          'Order pattern swung from spikes to zero and back',
        ],
      },
      right: {
        heading: 'Should Have Done',
        items: [
          'Smoothed retailer demand noise with a moving average',
          'Kept a minimum baseline order to avoid starving the chain',
          'Cleared backlog incrementally to avoid surge costs',
          'Coordinated inventory visibility with Retailer & Distributor',
        ],
      },
    },
    {
      type: 'twocol',
      eyebrow: 'Distributor Analysis — FreeHal',
      title: 'Too slow early, too fast late — surplus went +400 to −167',
      left: {
        heading: 'Failures',
        items: [
          'Underreacted early: ordered 0→100 instead of ~200–300',
          'Overreacted later, jumping to 500–900 by Week 8',
          'No smoothing or stabilization of weekly orders',
          'Reacted only to wholesaler orders, never actual consumption',
        ],
      },
      right: {
        heading: 'Should Have Done',
        items: [
          'Kept orders stable and predictable, capped near +20%/week',
          'Recovered backlog slowly, not all in one week',
          'Monitored pipeline inventory and lead times directly',
          'Separated real demand from backlog correction',
        ],
      },
    },
    {
      type: 'twocol',
      eyebrow: 'Brewery Analysis — Alex',
      title: 'Highest cost, most inconsistent production in the chain',
      left: {
        heading: 'Failures',
        items: [
          'Overreacted to downstream demand instead of absorbing it',
          'Tried to clear backlog immediately, ignoring true consumption',
          'Production swung 700→500→200→900→500 across five weeks',
          'Never stabilized — amplified variability instead of buffering it',
        ],
      },
      right: {
        heading: 'Should Have Done',
        items: [
          'Adopted a fixed production baseline early',
          'Increased production slowly — never jumped',
          'Trusted the pipeline instead of reacting to every backlog',
          'Thought systemically about the whole chain, not just its own tier',
        ],
      },
    },
    {
      type: 'twocol',
      eyebrow: 'Full Supply Chain Diagnosis',
      title: 'The same six failures, repeating at every tier',
      left: {
        heading: 'What Went Wrong',
        items: [
          'Poor information flow — everyone assumed demand would rise forever',
          'Long lead times — every extra week worsened the panic',
          'Safety-stock overreaction — every stage over-ordered "just in case"',
          'Backlog panic ordering once inventory went negative',
          'Zero coordination — four players operating independently',
          'Orders became random, disconnected from real demand',
        ],
      },
      right: {
        heading: 'What Should Have Been Done',
        items: [
          'Share consumer demand upstream — avoid panic at every tier',
          'Use smoothing forecasts — moving average, exponential smoothing',
          'Fix lead times — cut the delay between ordering and receiving',
          'Apply an order-up-to strategy tied to target inventory',
          'Set maximum order limits, e.g. no more than +300/week',
          'Hold weekly cross-team coordination on pipeline inventory',
        ],
      },
    },
    {
      type: 'stats',
      eyebrow: 'Expected Results',
      title: 'What stabilizing the chain would actually buy',
      body: 'Modeling the same 24 weeks with the fixes above applied — smoothing, order-up-to logic, and shared demand visibility — brings the simulation back near its target cost instead of 2.5–4x over it.',
      stats: [
        { value: '400–500', label: 'Stabilized Order Range (vs. 0–1,000)' },
        { value: '≥ 0', label: 'Backlog Floor — No Negative Surplus' },
        { value: '$7.8K vs $20–32K', label: 'Target Cost vs. Actual Cost' },
        { value: '0', label: 'Zero-to-Spike Order Swings' },
      ],
    },
    {
      type: 'close',
      eyebrow: 'What This Project Demonstrates',
      title: 'Reading a systemic failure, not just four bad decisions',
      items: [
        'Root-cause discipline — traced one 523-unit demand week to a 1,000-unit upstream swing, tier by tier',
        'Systems thinking over local optimization — each player’s "rational" reaction made the whole chain worse',
        'Lean/OM fluency — order-up-to logic, moving-average smoothing, Heijunka, and Kanban as the actual fix, not just a label',
        'Cost translation — connected order variability directly to a 2.5–4x cost overrun against target',
      ],
    },
  ],
}
