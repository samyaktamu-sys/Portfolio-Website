import forecastSkill from '../../assets/charts/m5/fig_forecast_skill.png'
import forecastExample from '../../assets/charts/m5/fig_forecast_example.png'
import safetyStockCurve from '../../assets/charts/m5/fig_safety_stock_curve.png'
import portfolioTradeoff from '../../assets/charts/m5/fig_portfolio_tradeoff.png'

export const m5 = {
  slug: 'demand-forecasting-safety-stock',
  featured: true,
  datePublished: '2026',
  tag: 'Demand Forecasting / Safety Stock / S&OP',
  title: 'Demand Forecast to Safety Stock Policy',
  subtitle: 'Walmart M5 Daily Sales, 36 SKU-Store Series',
  headline: 'Better Forecast, 20% Less Carrying Cost at 95% Service',
  role: 'Self-directed · Python pipeline built with AI agents (Claude Code)',
  company: 'Public data: M5 Forecasting competition (Walmart)',
  summary:
    'A forecast is not a plan. Most forecasting projects stop at an error table, but an S&OP team can’t: forecast error sets how much safety stock it takes to hit a service level, and that is a cost decision. This project carries the forecast through to an inventory policy and its carrying cost, on real Walmart daily sales.',
  heroStats: [
    { value: '35 / 36', label: 'Series Where Gradient Boosting Beat Seasonal-Naive' },
    { value: '−20%', label: 'Carrying Cost from the Better Forecast' },
    { value: '$756 → $1,372', label: 'Carrying Cost/yr, 90% → 99% Service' },
    { value: '+95%', label: 'Buffer Gap: Empirical vs. Normal, Lumpy SKUs' },
  ],
  slides: [
    {
      type: 'stats',
      eyebrow: 'Situation',
      title: 'Real sales, deliberately small subset',
      body: 'M5 is daily unit sales for 30,490 SKU-store series across 10 Walmart stores in California, Texas, and Wisconsin from 2011 to 2016, with calendar events and weekly prices. The project models 36 of them: nine category-by-state cells, each with two high-volume and two intermittent series, chosen on data the forecasts never see.',
      stats: [
        { value: '30,490', label: 'Series Available' },
        { value: '36', label: 'Series Modeled' },
        { value: '3 × 28 days', label: 'Rolling Origins × Horizon' },
        { value: '≥ 28 days', label: 'Feature Lag (No Leakage)' },
      ],
    },
    {
      type: 'diagram',
      eyebrow: 'Method',
      title: 'From forecast error to dollars',
      body: 'Each step feeds the next, so the cost figures at the end trace straight back to forecast error.',
      diagram: [
        { label: 'Forecast', state: 'flow', note: 'Seasonal-naive vs. a global gradient-boosting model' },
        { label: 'Residuals', state: 'flow', note: 'Per-series forecast errors across 3 rolling origins' },
        { label: 'Safety Stock', state: 'flow', note: 'Error spread to buffer at 90/95/99% service, three ways' },
        { label: 'Carrying Cost', state: 'flow', note: '25%/yr holding cost at each item’s latest sell price' },
      ],
    },
    {
      type: 'image',
      eyebrow: 'Forecast Accuracy',
      title: 'Gradient boosting vs. seasonal-naive, per series',
      image: forecastSkill,
      caption: 'Each dot is one series; points below the line favor gradient boosting. It wins on 35 of 36 by MASE (32 of 36 by RMSE).',
    },
    {
      type: 'image',
      eyebrow: 'Forecast Accuracy',
      title: 'What the win looks like',
      image: forecastExample,
      caption: 'On a high-volume series the model tracks the weekly pattern. On an intermittent series it essentially predicts the base rate: its win there comes from not chasing noise, not from predicting spikes.',
    },
    {
      type: 'image',
      eyebrow: 'Safety Stock',
      title: 'Service level gets expensive fast',
      image: safetyStockCurve,
      caption: 'Safety stock as a share of lead-time demand climbs steeply past 97.5% service, and the intermittent item needs far more buffer relative to its demand than the high-volume one at every level.',
    },
    {
      type: 'image',
      eyebrow: 'Cost',
      title: 'What service and forecast quality cost',
      image: portfolioTradeoff,
      caption: 'Across the 36 series, going from 90% to 95% service costs $214 a year more; 95% to 99% costs $402 more, 1.9x steeper for the same four points. At a fixed 95%, buffers built on the gradient-boosting errors cost $970 a year vs. $1,218 on seasonal-naive: $247 (20%) saved by the better forecast.',
    },
    {
      type: 'twocol',
      eyebrow: 'Policy Findings',
      title: 'Two things a flat policy gets wrong',
      left: {
        heading: 'One service target fits nobody',
        items: [
          'At 95%, the median high-volume item needs safety stock of about 29% of its lead-time demand',
          'The median intermittent item needs about 92%',
          'A single target over-buffers smooth items and under-serves lumpy ones',
        ],
      },
      right: {
        heading: 'The normal formula under-sizes lumpy demand',
        items: [
          'Empirical 95% buffers run a median 44% above the textbook normal buffer for high-volume items',
          'And 95% above it for intermittent items',
          'Check the empirical quantile before trusting the formula',
        ],
      },
    },
    {
      type: 'checklist',
      eyebrow: 'Limits',
      title: 'What the numbers do and don’t say',
      body: 'Stated up front, so the results aren’t read as more than they are.',
      items: [
        { title: 'Assumed Lead Time', note: 'M5 has no replenishment data, so lead time is fixed at 7 days with no variability term.' },
        { title: 'Small Dollars', note: '36 items at $2-$10 each. The percentages and the policy carry over; the dollar totals scale with assortment size.' },
        { title: '“Intermittent” Here', note: 'Low volume with frequent zero days, not truly sparse demand, which would need a count model.' },
        { title: 'One Model Family', note: 'A second family (ARIMA or Prophet) would make the beat-naive test stronger.' },
      ],
    },
    {
      type: 'close',
      eyebrow: 'What This Project Demonstrates',
      title: 'Taking a forecast all the way to a policy',
      items: [
        'Turned forecast error into a safety-stock and carrying-cost decision, the part an S&OP team actually uses',
        'Validated forward: rolling origins and lagged features, so no forecast saw its own future',
        'Showed where textbook rules break: one service level for every item, and normal buffers for lumpy demand',
        'Put a price on forecast quality: 20% less carrying cost at the same service level',
      ],
    },
  ],
}
