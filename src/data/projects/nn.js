import operatingPoint from '../../assets/charts/nn/fig_cnn_operating_point.png'
import gradcamExamples from '../../assets/charts/nn/fig_gradcam_examples.png'
import gradcamPointing from '../../assets/charts/nn/fig_gradcam_pointing.png'
import protocolGap from '../../assets/charts/nn/fig_secom_protocol_gap.png'

export const nn = {
  slug: 'neural-networks-inspection-yield',
  featured: true,
  datePublished: '2026',
  tag: 'Neural Networks / Visual Inspection / Model Validation',
  title: 'Neural Networks for Inspection & Yield',
  subtitle: 'Two Manufacturing Problems, Two Different Answers',
  headline: 'One Model Works. One Shouldn’t Ship.',
  role: 'Self-directed · Python pipeline built with AI agents (Claude Code); SECOM study rerun by hand in JMP',
  company: 'Public datasets: magnetic tile defects (Huang, Qiu & Yuan) and UCI SECOM',
  summary:
    'Two manufacturing problems, two neural networks, two different answers. A CNN inspecting magnetic tiles for surface defects reaches an inspection-grade operating point, and a check against defect masks it never trained on shows it is looking at the defects themselves. A semiconductor yield model looks publishable under standard cross-validation and falls apart when tested the way it would be used. Telling those two apart is the point of the project.',
  heroStats: [
    { value: '0.986', label: 'ROC-AUC, Tile Inspection (Held-Out)' },
    { value: '6.4% / 6.3%', label: 'Escape / False-Alarm Rate' },
    { value: '0.714 → 0.575', label: 'Yield Model AUC: Textbook CV → Rolling-Origin' },
    { value: '104', label: 'Failure Events: the Real Constraint' },
  ],
  slides: [
    {
      type: 'stats',
      eyebrow: 'Chapter 1 · Situation',
      title: 'Pass or divert: inspecting magnetic tiles',
      body: 'Sintered magnetic tiles, the curved magnets inside DC motors, are inspected for surface defects before assembly, and the station makes one call: pass the tile or divert it. The dataset is 1,344 images of real production tiles across five defect types. Each image comes with a pixel-level defect mask, which was kept out of training and used only to audit the model afterward.',
      stats: [
        { value: '1,344', label: 'Production Tile Images' },
        { value: '5', label: 'Defect Types' },
        { value: '269', label: 'Held-Out Test Tiles' },
        { value: 'Withheld', label: 'Defect Masks (Audit Only)' },
      ],
    },
    {
      type: 'image',
      eyebrow: 'Chapter 1 · Operating Point',
      title: 'Judge an inspection model by escapes and false alarms',
      image: operatingPoint,
      caption: 'The threshold was picked on the validation set, never the test set, to cap missed defects. The pixel-based control model only reaches zero escapes by pulling 92.7% of good tiles. ResNet18 transfer learning holds 6.4% escapes at a 6.3% false-alarm rate. The 2% escape target set on validation came out at 6.4% on test, a reminder that a threshold tuned on 202 images doesn’t transfer exactly.',
    },
    {
      type: 'image',
      eyebrow: 'Chapter 1 · Is It Looking at the Defect?',
      title: 'Where the network looks vs. where the defect is',
      image: gradcamExamples,
      caption: 'High accuracy alone doesn’t prove a detector works: good and bad parts are often photographed in different sessions, and a model can learn the lighting instead of the defect. Grad-CAM shows where the network looked; the teal outline is the true defect mask it never saw in training.',
    },
    {
      type: 'image',
      eyebrow: 'Chapter 1 · Audit Result',
      title: 'Strongest on the defects that are hardest to see',
      image: gradcamPointing,
      caption: 'Peak attention lands inside the true defect 70.1x more often than chance on blowholes, which cover a quarter of one percent of the tile. Pooled across all five types the lift is 3.0x. Chance is measured against each image’s own mask area, so the small defects aren’t buried in a pooled average.',
    },
    {
      type: 'stats',
      eyebrow: 'Chapter 2 · Situation',
      title: 'Predicting yield from 590 sensors',
      body: 'SECOM is 1,567 semiconductor production lots, each with 590 in-line sensor readings and a pass or fail from final test. After removing stuck sensors and ones too sparse to fill in honestly, 442 remain. Only 104 lots fail. A model that says “pass” every time is 93.4% accurate and catches nothing, so accuracy is never the metric here.',
      stats: [
        { value: '1,567', label: 'Production Lots' },
        { value: '442', label: 'Usable Sensors (of 590)' },
        { value: '104', label: 'Failed Lots' },
        { value: '6.6%', label: 'Failure Rate' },
      ],
    },
    {
      type: 'image',
      eyebrow: 'Chapter 2 · The Finding',
      title: 'Most of the textbook score comes from the split',
      image: protocolGap,
      caption: 'Stratified 5-fold cross-validation lets a model train on October and test on August. Rolling-origin validation trains only on earlier lots, the way the model would be used. Gradient boosting drops from 0.714 to 0.575, and its 95% confidence interval crosses chance. Only the neural net’s interval clears 0.50, at 0.596.',
    },
    {
      type: 'twocol',
      eyebrow: 'Chapter 2 · Checking the Result',
      title: 'Two checks before accepting it',
      left: {
        heading: 'Was it an unlucky split?',
        items: [
          'The first time-based holdout had only 17 failures to score, too few to tell models apart',
          'Rolling-origin validation over five blocks pools 39 failures across 941 lots',
          'Block-to-block spread was still larger than the gap between models',
          'That pattern points to too few failures, not a bad split',
        ],
      },
      right: {
        heading: 'Would SPC-style features rescue it?',
        items: [
          'Fab tools drift, so a raw sensor reading means different things in July and October',
          'Built rolling robust z-scores of each sensor against its own recent baseline, using only past lots',
          'ROC-AUC stayed at chance for every model',
          'Reported as a negative result rather than dropped',
        ],
      },
    },
    {
      type: 'checklist',
      eyebrow: 'Chapter 2 · Hands-On in JMP',
      title: 'Rebuilt by hand in JMP, same conclusion',
      body: 'I reran the SECOM study myself in JMP from the raw files: import, join the labels, screen out stuck and sparse sensors, build a time-ordered validation column, and fit JMP’s Neural platform.',
      items: [
        { title: 'Unstable Training Fit', note: 'Same architecture, seed, and penalty gave a training AUC anywhere from 0.510 to 0.850, depending only on the number of tours.' },
        { title: 'Noisy Validation', note: 'With only 17 failures to validate on, the time-ordered validation AUC moved between 0.712 and 0.737 across near-identical runs.' },
        { title: 'A Silent Bug, Caught', note: 'With Informative Missing off, JMP quietly dropped 589 rows. Caught and fixed before any result was trusted.' },
        { title: 'Same Call', note: 'Do not deploy. The limit is failure events, not the model.' },
      ],
    },
    {
      type: 'close',
      eyebrow: 'What This Project Demonstrates',
      title: 'Can build it, and can tell whether it’s real',
      items: [
        'Chose the operating point on validation to bound missed defects, instead of the threshold that maximizes accuracy',
        'Audited the model against evidence it never saw, the withheld defect masks, before trusting its accuracy',
        'Matched validation to use: rolling-origin, not random folds, for a model that has to predict forward',
        'Made a go/no-go call: don’t deploy until there are several hundred failure events, then rerun the same harness',
      ],
    },
  ],
}
