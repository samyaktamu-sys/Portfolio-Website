export const forecasting = {
  slug: 'airline-passenger-forecasting',
  datePublished: '2025',
  tag: 'Time Series / Demand Forecasting',
  title: 'Airline Passenger Demand Forecasting',
  subtitle: 'Seasonal-Trend Model vs. Moving Averages — Texas A&M ISEN 615',
  headline: '12.06% MAPE → 4.76% MAPE',
  role: 'Individual — Samyak Jain',
  company: 'Texas A&M University, ISEN 615 (Production & Inventory Control)',
  summary:
    'The Box-Jenkins airline passenger series — 144 monthly observations from January 1949 through December 1960 — is a classic demand-forecasting test case: a clear upward trend riding a strong, repeating seasonal pattern. The assignment was to fit and compare five forecasting methods, then use the best one to forecast 1961.',
  heroStats: [
    { value: '144', label: 'Monthly Observations (1949–1960)' },
    { value: '12.06% → 4.76%', label: 'MAPE, 12-Mo MA → Seasonal-Trend' },
    { value: '+25.3%', label: 'Peak-Season Lift (Jul–Aug)' },
    { value: '616', label: '1961 Peak-Month Forecast (Aug)' },
  ],
  slides: [
    {
      type: 'stats',
      eyebrow: 'Situation',
      title: 'Five forecasting methods, one classic dataset',
      body: 'Monthly airline passenger counts, January 1949 through December 1960, with a clear upward trend and strong seasonal pattern. The assignment: fit and compare five forecasting approaches, then use the best one to forecast the next year.',
      stats: [
        { value: '144', label: 'Monthly Observations' },
        { value: '1949–1960', label: 'Historical Window' },
        { value: '104–622', label: 'Passenger Range' },
        { value: '5', label: 'Forecasting Methods Compared' },
      ],
    },
    {
      type: 'checklist',
      eyebrow: 'Methods',
      title: 'From smoothing to a combined seasonal-trend model',
      items: [
        { title: 'Moving Averages', note: '3-, 6-, and 12-month windows to smooth short-term fluctuations.' },
        { title: 'Linear Trend', note: 'y = 2.657x + 87.653 — a steady 2.66 passengers/month of underlying growth.' },
        { title: 'Exponential Smoothing', note: 'Tested α = 0.1, 0.3, 0.5; α = 0.3 performed best.' },
        { title: 'Seasonal Decomposition', note: 'Monthly seasonal indices — July/August 25.3% above average, November 16.9% below.' },
        { title: 'Seasonal-Trend Model', note: 'Combines the linear trend with the seasonal indices — the best-performing method.' },
      ],
    },
    {
      type: 'stats',
      eyebrow: 'Model Accuracy',
      title: 'Seasonality was most of the missing signal',
      body: 'Trend alone barely beat a 12-month moving average. Layering the seasonal indices on top of the trend line cut error by more than half.',
      stats: [
        { value: '12.06%', label: '12-Month MA — MAPE' },
        { value: '11.42%', label: 'Linear Trend — MAPE' },
        { value: '4.76%', label: 'Seasonal-Trend — MAPE (In-Sample)' },
        { value: '27.07', label: 'Seasonal-Trend — RMSE' },
      ],
    },
    {
      type: 'twocol',
      eyebrow: 'Seasonal Decomposition',
      title: 'Summer peaks, autumn trough',
      left: {
        heading: 'Peak Season',
        items: [
          'July–August run 25.3% above the monthly average',
          'Reflects seasonal summer travel demand',
        ],
      },
      right: {
        heading: 'Low Season',
        items: [
          'November runs 16.9% below the monthly average',
          'Seasonal index applied directly on top of the trend forecast',
        ],
      },
    },
    {
      type: 'stats',
      eyebrow: '1961 Forecast',
      title: 'Applying the model forward a full year',
      body: 'The seasonal-trend model was extrapolated 12 months past the training data, holding the 2.66/month trend and the same seasonal indices constant.',
      stats: [
        { value: '616', label: 'Peak Month — August' },
        { value: '399', label: 'Low Month — February' },
        { value: '2.66/mo', label: 'Underlying Trend Growth' },
        { value: '4.76%', label: 'In-Sample Fit MAPE' },
      ],
    },
    {
      type: 'close',
      eyebrow: 'What This Project Demonstrates',
      title: 'Choosing the right model, not just fitting one',
      items: [
        'Model comparison discipline — MAE/RMSE/MAPE scored across five methods before picking a winner',
        'Decomposition over blunt smoothing — isolating trend and seasonality beat a moving average by more than 2x',
        'Forecasting forward — extrapolated the winning model a full year; the 4.76% MAPE is in-sample fit, so scoring it on a held-out year is the natural next check',
      ],
    },
  ],
}
