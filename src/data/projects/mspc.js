import paretoPlot from '../../assets/charts/mspc/pareto_plot.png'
import screePlot from '../../assets/charts/mspc/scree_plot.png'
import mdlCurve from '../../assets/charts/mspc/mdl_curve.png'
import pc1Sigma from '../../assets/charts/mspc/pc1_3sigma.png'
import pc1Bonferroni from '../../assets/charts/mspc/pc1_bonferroni.png'

export const mspc = {
  slug: 'mspc-pca-monitoring',
  featured: true,
  tag: 'Multivariate SPC / PCA',
  title: 'Multivariate Process Monitoring',
  subtitle: 'PCA-Based Outlier Removal, 209-Variable Process — Texas A&M ISEN 614',
  headline: '209 Variables → 24 PCs → 494 Clean Samples',
  role: 'Co-author — Samyak Jain & Kaushik Sivakumar',
  company: 'Texas A&M University, Industrial Engineering',
  summary:
    '552 production records, 209 correlated and anonymized variables, no in-control/out-of-control labels. Univariate charts can’t handle that — this is a textbook case for PCA-based multivariate SPC: reduce with PCA, then monitor that space.',
  heroStats: [
    { value: '209 → 24', label: 'Variables → Principal Components' },
    { value: '552 → 494', label: 'Samples → In-Control Baseline' },
    { value: '±3.86σ', label: 'Bonferroni-Adjusted Limits' },
    { value: 'MDL', label: 'Objective Component Count' },
  ],
  slides: [
    {
      type: 'stats',
      eyebrow: 'Situation',
      title: 'Too wide for a univariate chart',
      body: '209 correlated characteristics, meaning withheld by design, with in-control and out-of-control runs mixed together and no labels. A univariate chart ignores correlation and misses joint shifts — the textbook signal for multivariate SPC.',
      stats: [
        { value: '552', label: 'Production Records' },
        { value: '209', label: 'Anonymized Variables' },
        { value: 'None', label: 'In-Control Labels' },
        { value: 'MSPC', label: 'Method Required' },
      ],
    },
    {
      type: 'text',
      eyebrow: 'Preprocessing',
      title: 'Standardize before anything else',
      body: 'Unknown, unlabeled scales meant ranges could differ by 100x for no real reason — an unscaled variable can hijack PC1 and hide the actual structure. Every variable was rescaled to zero mean, unit variance before PCA. A covariance heatmap and scatter-plot pass beforehand confirmed real correlation structure, not noise — exactly what makes PCA the right tool here.',
    },
    {
      type: 'image',
      eyebrow: 'Dimensionality Reduction',
      title: 'Variance explained: the subjective way',
      image: paretoPlot,
      caption: 'A cumulative-variance rule needs 33 PCs to reach 80% of variance — a threshold that’s a visual, subjective call.',
    },
    {
      type: 'image',
      eyebrow: 'Dimensionality Reduction',
      title: 'The scree plot’s “elbow”',
      image: screePlot,
      caption: 'The elbow suggests fewer components carry most of the signal — but reading an elbow off a plot is still a judgment call, not a rule.',
    },
    {
      type: 'image',
      eyebrow: 'Objective Component Count',
      title: 'Minimum Description Length',
      image: mdlCurve,
      caption: 'MDL balances model complexity against information loss, like AIC/BIC. The curve bottoms out at 24 PCs — more parsimonious than the 33 needed for 80% variance, and not a guess.',
    },
    {
      type: 'twocol',
      eyebrow: 'Control Limits',
      title: 'Why plain ±3σ breaks down at 24 charts',
      left: {
        heading: 'Traditional ±3σ',
        items: [
          'Per-chart false-alarm rate α = 0.27% — fine in isolation',
          '24 simultaneous charts compound that error',
          'Result: 36 out-of-control points flagged on the first pass',
        ],
      },
      right: {
        heading: 'Bonferroni-Adjusted ±3.86σ',
        items: [
          'Correction holds family-wise error at 0.27% overall',
          'New per-PC limit: z ≈ 3.86',
          'Effect: only 0–1 OOC points remain per PC',
        ],
      },
    },
    {
      type: 'image',
      eyebrow: 'Results — PC1 Example',
      title: '3σ vs. Bonferroni 3.86σ',
      image: pc1Sigma,
      caption: 'PC1 on the original 552-sample set under 3σ limits: 11 out-of-control points, clustered near sample indices 529–537.',
    },
    {
      type: 'image',
      eyebrow: 'Results — PC1 Example',
      title: 'After iterative cleaning',
      image: pc1Bonferroni,
      caption: 'PC1 on the cleaned, 516-sample iteration under Bonferroni-adjusted 3.86σ limits: zero out-of-control points remain.',
    },
    {
      type: 'diagram',
      eyebrow: 'Methodology',
      title: 'Out-of-control removal is a loop',
      body: 'Single-pass removal leaves residual OOC points that distort the baseline. Iterating converges on common-cause-only variation — the actual goal of Phase I.',
      diagram: [
        { label: 'Flag OOC Points', state: 'flow', note: 'Across all 24 PC control charts' },
        { label: 'Remove Flagged Samples', state: 'flow', note: 'Discard from the working dataset' },
        { label: 'Re-run PCA + Charts', state: 'flow', note: 'On the cleaned subset' },
        { label: 'Check for New OOC', state: 'flow', note: 'Repeat until convergence' },
      ],
      footnote: 'Pass 1: 36 OOC samples flagged, clustered in a few runs. Pass 2: Bonferroni 3.86σ confirms convergence, 0–1 OOC left. Final: a 494-sample baseline handed off for Phase II.',
    },
    {
      type: 'close',
      eyebrow: 'What This Project Demonstrates',
      title: 'Rigor over convenient defaults',
      items: [
        'Multivariate statistical fluency — 200+ correlated variables, not single-variable charts',
        'Objective methodology — MDL over a subjective scree-plot elbow',
        'Multiple-comparisons awareness — Bonferroni correction, not nuisance alarms',
        'Phase I as iterative convergence, not a single filter pass',
      ],
    },
  ],
}
