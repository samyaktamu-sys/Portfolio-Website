import fpyTrend from '../../assets/charts/fpy/fpy_trend.png'
import xbar from '../../assets/charts/fpy/xbar_before_after.png'
import pareto from '../../assets/charts/fpy/pareto_baseline.png'
import cpk from '../../assets/charts/fpy/cpk_before_after.png'

export const fpy = {
  slug: 'fpy-spc-improvement',
  featured: true,
  datePublished: '2023',
  tag: 'SPC / DMAIC',
  title: 'First-Pass Yield Recovery',
  subtitle: 'Pipe Bending Line, Utility Power Systems',
  headline: '80% → 99.4% First-Pass Yield',
  role: 'Senior Engineer — DMAIC / SPC',
  company: 'Utility Power Systems, Delhi, India',
  summary:
    'A high-volume pipe hot-bending line was scrapping 1 in 5 parts. I led the DMAIC investigation, found two verified physical root causes, and built a closed-loop digital SPC system so the fix would hold after I rolled off the project.',
  heroStats: [
    { value: '80% → 99.4%', label: 'First-Pass Yield' },
    { value: '0.46 → 1.49', label: 'Cpk' },
    { value: '$150K/yr', label: 'Scrap & Rework Eliminated' },
    { value: 'n=5 hourly', label: 'SPC Subgroups' },
  ],
  slides: [
    {
      type: 'stats',
      eyebrow: 'Situation',
      title: 'A high-volume line, bleeding money quietly',
      body: 'Seamless alloy pipe, packed with sand for internal support, heated and bent to tight tolerances. At mass-production volume, first-pass yield settled around 80% — about $150,000/year in scrap and offline rework, on a line that runs at a fixed rate whether it’s making good parts or not.',
      stats: [
        { value: '80%', label: 'Baseline FPY' },
        { value: '0.46', label: 'Baseline Cpk' },
        { value: '$150K/yr', label: 'Scrap + Rework Cost' },
        { value: '100%', label: 'Offline Inspection (contained)' },
      ],
    },
    {
      type: 'twocol',
      eyebrow: 'Measure — Contain First',
      title: 'Rigor before action',
      left: {
        heading: 'What we did first',
        items: [
          'Quarantined affected batches for 100% offline inspection',
          'Froze uncontrolled parameter changes on the floor',
          'Ran an MSA before trusting any measurement data',
          'Pulled a cross-functional team: me, line techs, maintenance',
        ],
      },
      right: {
        heading: 'Why it mattered',
        items: [
          'Stopped the bleeding without guessing at a fix',
          'MSA confirmed gauge error was negligible vs. real process variation',
          'Meant every downstream chart could be trusted',
          'Prevented the team from chasing a moving target',
        ],
      },
    },
    {
      type: 'diagram',
      eyebrow: 'Root Cause — Analyze',
      title: 'Six candidates, two verified causes',
      body: 'A formal Ishikawa (6M) session laid out every candidate branch — Man, Machine, Method, Material, Measurement, Milieu. 5-Why and direct shop-floor observation tested each one rather than taking the loudest opinion at face value. Measurement was cleared early and concretely by the MSA.',
      diagram: [
        { label: 'Sand Compaction', state: 'cause', note: 'Material / Method — manual, no standard vibration/pressure → density voids → ovality' },
        { label: 'Non-Uniform Pre-Heat', state: 'cause', note: 'Machine / Method — operator-dependent cycles → thermal gradient → wall thinning' },
        { label: 'Measurement', state: 'ruled-out', note: 'Cleared by MSA — gauge error negligible' },
        { label: 'Man / Milieu', state: 'ruled-out', note: 'No consistent signal under observation' },
      ],
      footnote: 'A defect Pareto on baseline data showed ovality + wall thinning were ~94% of baseline defects — the vital few that justified where the team spent its time.',
    },
    {
      type: 'image',
      eyebrow: 'Results',
      title: 'Baseline defect Pareto',
      image: pareto,
      caption: 'Ovality and wall thinning dominate the baseline defect mix — the two categories the root-cause investigation targeted.',
    },
    {
      type: 'stats',
      eyebrow: 'Statistical / SPC Deep Dive',
      title: 'Stable is not the same as capable',
      body: 'The baseline process was arguably stable — consistent, predictable variation hour to hour, no special-cause signals. But it was not capable: its natural spread was simply too wide relative to the 0.35mm ovality spec. That distinction is why the fix targeted variation reduction (compaction pressure, heat uniformity), not just recentering the mean.',
      stats: [
        { value: 'n=5', label: 'Rational Subgroup Size' },
        { value: 'Hourly', label: 'Sampling Cadence' },
        { value: '0.35mm', label: 'Ovality USL' },
        { value: '1.33', label: 'Industry “Capable” Threshold' },
      ],
    },
    {
      type: 'image',
      eyebrow: 'Results',
      title: 'X̄ control chart, before / after',
      image: xbar,
      caption: 'Subgroup means before and after the corrective actions, on the same scale — the variation reduction is the story, not just a mean shift.',
    },
    {
      type: 'diagram',
      eyebrow: 'Control System',
      title: 'The closed loop that keeps the fix in place',
      body: 'Legacy bending machines had no integrated IoT sensors, so a capital project to instrument them wasn’t realistic on the timeline. I engineered a pragmatic digital layer around the existing equipment instead.',
      loop: true,
      diagram: [
        { label: 'Hourly n=5 Sample', state: 'flow', note: 'Pyrometer temp, compaction resistance, ovality' },
        { label: 'Shop-Floor Tablets', state: 'flow', note: 'Operators log readings in real time' },
        { label: 'Engineering Dashboard', state: 'flow', note: 'Auto-calculates X̄ / R, plots Shewhart charts' },
        { label: 'Rule Detection', state: 'flow', note: 'Western Electric / Nelson run rules' },
        { label: 'OCAP', state: 'flow', note: 'Halt line → verify assignable cause → resolve' },
      ],
      footnote: 'The loop closes back to sampling — the fix and the system that keeps the fix in place are two separate deliverables.',
    },
    {
      type: 'image',
      eyebrow: 'Results',
      title: 'Cpk before / after',
      image: cpk,
      caption: 'Cpk moved from 0.46 to 1.49, clearing the 1.33 “capable” threshold with margin — driven mostly by cutting variation, not shifting the mean.',
    },
    {
      type: 'image',
      eyebrow: 'Results',
      title: 'FPY trend, phase-shaded',
      image: fpyTrend,
      caption: 'Baseline → Transition → Control. Yield ramped as compaction and thermal parameters were progressively locked down — not an overnight jump.',
    },
    {
      type: 'close',
      eyebrow: 'What This Project Demonstrates',
      title: 'Root-cause discipline that holds after you leave',
      items: [
        'Root-cause discipline — containment first, MSA before trusting data, Pareto-prioritized investigation',
        'Statistical fluency — rational subgrouping, Cpk vs. stability, control limits that mean something',
        'Systems thinking — built the control loop, not just the fix',
        'Business framing — translated 20% yield loss into a defensible $150K/yr number',
      ],
    },
  ],
}
