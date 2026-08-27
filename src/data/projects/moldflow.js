export const moldflow = {
  slug: 'moldflow-dfm-feasibility',
  featured: true,
  datePublished: '2022',
  tag: 'Moldflow / DFM / NPI',
  title: 'Hot-Runner DFM Feasibility Study',
  subtitle: '50+ Parts, Uno Minda Limited',
  headline: '80% Not Recommended, 20% Converted Clean',
  role: 'Quality & Process / NPI Engineer',
  company: 'Uno Minda Limited, Haryana, India',
  summary:
    'Molding Operations wanted to convert 50+ legacy parts from cold to hot runner tooling. Product Design pushed back over Class-A cosmetic and structural risk. I simulated every part under identical conditions in Moldflow and settled the standoff with data instead of authority.',
  heroStats: [
    { value: '50+', label: 'Parts Simulated' },
    { value: '80 / 20', label: 'Not Recommended / Feasible' },
    { value: '25%', label: 'Cycle Time Cut (converted)' },
    { value: '100%', label: 'Scrap Elimination (converted)' },
  ],
  slides: [
    {
      type: 'twocol',
      eyebrow: 'Core Conflict',
      title: 'Two functions, two legitimate positions',
      left: {
        heading: 'Molding Operations',
        items: [
          'Wanted to convert 50+ high-volume legacy parts to hot runner',
          'Real, quantifiable scrap-cost lever: eliminate sprue/runner scrap',
          'Cut cycle time by removing the cold-runner cooling step',
        ],
      },
      right: {
        heading: 'Product Design',
        items: [
          'Changing gate location means a full DFMEA rewrite',
          'Structural re-validation for every part, at scale',
          'Real risk of Class-A cosmetic surface failure on OEM parts',
        ],
      },
    },
    {
      type: 'checklist',
      eyebrow: 'Methodology',
      title: 'Six simulation checks, identical conditions',
      body: 'Every part was modeled in Autodesk Moldflow Insight under identical material rheology, thermal boundary conditions, and injection pressure limits — so a bad result meant risky geometry, not an inconsistent test setup.',
      items: [
        { title: 'Fill Time', note: 'Flow imbalance / short-shot risk' },
        { title: 'Melt-Front Velocity', note: 'Burn risk from new gate' },
        { title: 'Volumetric Shrinkage', note: 'Sink mark driver' },
        { title: 'Cooling Uniformity', note: 'Warp driver' },
        { title: 'Weld-Line Location', note: 'Structural weak point' },
        { title: 'Sink Mark Prediction', note: 'Direct cosmetic proxy' },
      ],
    },
    {
      type: 'diagram',
      eyebrow: 'Key Findings',
      title: 'Two dominant failure mechanisms',
      body: 'The 80% rejection rate wasn’t random — nearly all of it traced back to two physical mechanisms, both driven by the same root cause: a gate location change is a flow-physics change, not a cosmetic tooling swap.',
      diagram: [
        { label: 'Sink Marks on Class-A Faces', state: 'cause', note: 'Uneven cooling/shrinkage near the new hot-runner gate, on thick sections near visible surfaces' },
        { label: 'Weld-Line Relocation', state: 'cause', note: 'New gate shifts where melt fronts converge — into ribs/bosses instead of low-stress walls' },
      ],
      footnote: 'Framing rejections around two named, physical mechanisms — not just “the simulation flagged it” — is what made the 80% credible to Ops instead of feeling like an arbitrary veto.',
    },
    {
      type: 'stats',
      eyebrow: 'Business Impact',
      title: 'The 80% was risk mitigation, not failure',
      body: 'The alternative was converting all 50+ parts blind and discovering the failures on the shop floor — or worse, at OEM PPAP. The 20% that did convert delivered a real, provable, zero-compromise win.',
      stats: [
        { value: '25%', label: 'Cycle Time Reduction' },
        { value: '100%', label: 'Sprue/Runner Scrap Eliminated' },
        { value: '0', label: 'Cosmetic/Structural Compromise' },
        { value: 'Reusable', label: 'Matrix for future tooling cycles' },
      ],
    },
    {
      type: 'twocol',
      eyebrow: 'Cross-Functional Resolution',
      title: 'How both sides got to yes',
      left: {
        heading: 'Earning Design’s trust',
        items: [
          'Looped Design into defining feasibility thresholds before the study ran',
          'Every part ran under identical conditions — no cherry-picked setups',
          'Bounded the ask: DFMEA rework only on the verified 20%',
        ],
      },
      right: {
        heading: 'Keeping Ops bought in',
        items: [
          'Led with the 20% win before discussing the 80%',
          'Framed it as “right lever, wrong scope” — not a killed initiative',
          'Positioned the matrix as a reusable tool for future cycles',
        ],
      },
    },
    {
      type: 'close',
      eyebrow: 'What This Project Demonstrates',
      title: 'Data settles standoffs that authority can’t',
      items: [
        'Scaled a rigorous methodology across 50+ parts without sacrificing comparability',
        'Translated simulation output into the specific failure language each function cared about',
        'Converted a binary Ops-vs-Design fight into a defensible Go/No-Go dataset',
        'Quantified avoided cost, not just realized savings — the harder sell',
      ],
    },
  ],
}
