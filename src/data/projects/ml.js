import lassoCoef from '../../assets/charts/mask/lasso_coef_paths.png'
import lassoCv from '../../assets/charts/mask/lasso_cv_mae.png'
import rfImportance from '../../assets/charts/mask/rf_var_importance.png'
import xgbImportance from '../../assets/charts/mask/xgb_var_importance.png'
import aicBic from '../../assets/charts/mask/aic_bic_comparison.png'
import testPred from '../../assets/charts/mask/test_true_vs_pred.png'

export const ml = {
  slug: 'mask-wearing-model-selection',
  datePublished: '2025',
  tag: 'Statistical Learning / Model Selection',
  title: 'Mask-Wearing Model: Lasso vs. RF vs. XGBoost',
  subtitle: '151 Survey Predictors, LOOCV-Driven Model Comparison — Texas A&M ISEN 613',
  headline: 'Phase I Pick Reversed by the Test Set',
  role: 'Team of 2, built in R · I did the data prep, modeling, tuning, and evaluation; Advait Pisal wrote the report',
  company: 'Texas A&M University, Statistical Learning',
  summary:
    'A classic wide-and-short dataset: 151 predictors, 172 rows. Lasso, Random Forest, and XGBoost were compared on leave-one-out cross-validation error and overfitting gap, not just training error, and the documented Phase I choice was revised when 59 held-out students disagreed with it.',
  heroStats: [
    { value: '151 → 29', label: 'Predictors → Lasso-Selected' },
    { value: '172 / 59', label: 'Train / Held-Out Test' },
    { value: 'LOOCV', label: 'Driven Model Comparison' },
    { value: '79.7%', label: 'Final Test Accuracy (RF)' },
  ],
  slides: [
    {
      type: 'stats',
      eyebrow: 'Situation',
      title: 'Wide-and-short: 151 predictors, 172 rows',
      body: 'Raw data was 177 rows × 161 columns; header and 9 empty columns dropped, outcome recoded into 3 ordered classes (Rarely / Most of the Time / Always), 4 rows with missing outcomes dropped. Plain OLS would badly overfit with more predictors than degrees of freedom to spare.',
      stats: [
        { value: '172', label: 'Complete Student Records' },
        { value: '151', label: 'Survey-Question Predictors' },
        { value: '2.51', label: 'Sample Mean (1–3 scale)' },
        { value: '59', label: 'Held-Out Test Rows' },
      ],
    },
    {
      type: 'text',
      eyebrow: 'Cross-Model Agreement',
      title: 'The same handful of items surface everywhere',
      body: 'Whether the model is linear or a tree ensemble, the same predictors kept surfacing: personal responsibility (top RF importance, nonzero in Lasso), perceived risk (large Lasso coefficient, top-5 in RF & XGBoost), and social/normative belief items. Cross-model agreement is itself evidence — stronger than any single model’s output alone.',
    },
    {
      type: 'stats',
      eyebrow: 'Model 1 — Lasso',
      title: 'L1-regularized linear model',
      body: 'Predictors standardized to mean 0, SD 1. Tuned λ via LOOCV — λ = 0.0383 minimized MAE, and only 29 of 151 predictors survived with nonzero coefficients.',
      stats: [
        { value: '0.4003', label: 'Train MAE' },
        { value: '0.4875', label: 'LOOCV MAE' },
        { value: '29 / 151', label: 'Nonzero Predictors' },
        { value: '0.0872', label: 'Overfit Gap' },
      ],
    },
    {
      type: 'image',
      eyebrow: 'Model 1 — Lasso',
      title: 'Coefficient shrinkage paths',
      image: lassoCoef,
      caption: 'As λ grows, coefficients shrink toward zero; 29 remain nonzero. Standardization makes them directly comparable, and penalization eases multicollinearity as a bonus.',
    },
    {
      type: 'image',
      eyebrow: 'Model 1 — Lasso',
      title: 'LOOCV error vs. λ',
      image: lassoCv,
      caption: 'λ = 0.0383 minimizes LOOCV MAE — the tuning point used for the final Lasso model.',
    },
    {
      type: 'stats',
      eyebrow: 'Model 2 — Random Forest',
      title: '500 trees, bootstrap-aggregated',
      body: 'Built to capture nonlinear interactions Lasso can’t. mtry tuned via LOOCV; mtry=10 minimized error. Train MAE drops sharply, but LOOCV barely improves over Lasso — a classic overfitting signature.',
      stats: [
        { value: '0.2062', label: 'Train MAE' },
        { value: '0.4599', label: 'LOOCV MAE' },
        { value: '10', label: 'Best mtry' },
        { value: '0.2537', label: 'Overfit Gap (~3× Lasso)' },
      ],
    },
    {
      type: 'image',
      eyebrow: 'Model 2 — Random Forest',
      title: 'Variable importance',
      image: rfImportance,
      caption: 'Top predictor: personal responsibility (Q11_6), followed by perceived risk and normative-belief items — the same signal Lasso found, extracted differently.',
    },
    {
      type: 'stats',
      eyebrow: 'Model 3 — XGBoost',
      title: 'Highest capacity, highest overfit risk',
      body: 'A 27-configuration grid search across 172 LOOCV folds — 4,644 total fits. Best setting: depth 3, eta 0.05, nrounds 100. Lowest train error of all three models, but LOOCV essentially ties Random Forest.',
      stats: [
        { value: '0.1454', label: 'Train MAE (lowest)' },
        { value: '0.4608', label: 'LOOCV MAE (~tied w/ RF)' },
        { value: '4,644', label: 'Model Fits Run' },
        { value: '0.3154', label: 'Overfit Gap (largest)' },
      ],
    },
    {
      type: 'image',
      eyebrow: 'Model 3 — XGBoost',
      title: 'Variable importance',
      image: xgbImportance,
      caption: 'The gradient-boosted model converges on the same top drivers as Lasso and Random Forest — reinforcing that the signal, not the modeling choice, is what’s real.',
    },
    {
      type: 'image',
      eyebrow: 'Model Comparison — Phase I',
      title: 'AIC / BIC vs. LOOCV error',
      image: aicBic,
      caption: 'Similar LOOCV error across all three. Phase I pick: Lasso, for the smallest overfit gap while staying interpretable. A caveat on this chart: AIC and BIC are likelihood-based, so they are only well defined for Lasso. The fair comparison for the tree models is LOOCV error and the held-out test, which is where the pick changed.',
    },
    {
      type: 'image',
      eyebrow: 'Phase II — Held-Out Test',
      title: 'Predicted vs. true, 59 new students',
      image: testPred,
      caption: 'Lasso misclassified 15 of 59 new students, fewer than its LOOCV error suggested, so it held up on unseen data rather than collapsing. Every miss was to an adjacent class: no Rarely↔Always jumps.',
    },
    {
      type: 'twocol',
      eyebrow: 'Phase II — Reconsidering the Model',
      title: 'The test set changed the answer',
      left: {
        heading: 'Lasso (Phase I choice)',
        items: [
          '15 of 59 test errors',
          'Test MSE: 0.254',
          'Test accuracy: 74.6%',
          'Strongest on Rarely & Most classes',
        ],
      },
      right: {
        heading: 'Random Forest (revised choice)',
        items: [
          '12 of 59 test errors, vs. 15 for Lasso',
          'Test MSE: 0.203 — a 20% reduction',
          'Test accuracy: 79.7%',
          'Gains specifically on the hardest adjacent calls',
        ],
      },
    },
    {
      type: 'close',
      eyebrow: 'What This Project Demonstrates',
      title: 'Willing to revise a documented decision',
      items: [
        'Rigorous comparison — LOOCV error and overfit gaps, not just training error',
        'Revised a documented Phase I decision when held-out data disagreed, while noting 12 vs. 15 errors on 59 students is a small gap',
        'Comfortable across linear and ensemble methods',
        'Weighed interpretability vs. accuracy explicitly, instead of picking one by default',
      ],
    },
  ],
}
