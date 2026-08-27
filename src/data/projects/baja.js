export const baja = {
  slug: 'baja-sae-brake-rollcage',
  datePublished: '2020',
  tag: 'CAE / FEA / Vehicle Design',
  title: 'BAJA SAE — Brakes & Roll Cage',
  subtitle: 'Collegiate Off-Road Vehicle Team, 2019–2020',
  headline: 'Full Brake System Design + Roll Cage FEA Sign-Off',
  role: 'Brake System Design & CAE',
  company: 'Guru Gobind Singh Indraprastha University, Delhi, India',
  summary:
    'An early hands-on engineering project: I owned the braking system for the team’s single-seat off-road car end to end, modelled it in SolidWorks, and used Ansys for the CAE work. I also ran the structural stress analysis that qualified the roll cage against the competition’s impact and rollover load cases. Detailed calculations and test data from that season are no longer in hand, so this is scoped to what I can still stand behind.',
  heroStats: [
    { value: 'End-to-end', label: 'Brake System Ownership' },
    { value: 'SolidWorks', label: 'CAD / Assembly Modelling' },
    { value: 'Ansys', label: 'CAE / Structural FEA' },
    { value: 'Roll Cage', label: 'FEA-Qualified Structure' },
  ],
  slides: [
    {
      type: 'twocol',
      eyebrow: 'Scope',
      title: 'What I actually owned on the car',
      left: {
        heading: 'Brake system — mine end to end',
        items: [
          'Full hydraulic braking system design for a single-seat off-road vehicle',
          'Component selection and sizing across the circuit',
          'Packaging and mounting worked out in the SolidWorks assembly',
          'Design driven by the requirement to lock all four wheels on demand',
        ],
      },
      right: {
        heading: 'Roll cage — structural CAE',
        items: [
          'Built the FEA model of the space-frame roll cage in Ansys',
          'Analysed it under the competition rulebook’s impact and rollover load cases',
          'Checked stress and deflection against allowable limits for the tubing',
          'Fed results back to the frame team to confirm the structure passed',
        ],
      },
    },
    {
      type: 'diagram',
      eyebrow: 'Method',
      title: 'CAD in SolidWorks, verification in Ansys',
      body: 'The workflow was the standard student-team loop: model the geometry, take it into FEA, read the result, adjust, repeat until the design cleared its load cases.',
      diagram: [
        { label: 'SolidWorks CAD', state: 'flow', note: 'Brake components and the roll-cage frame modelled as parts and assemblies' },
        { label: 'Ansys FEA', state: 'flow', note: 'Structural stress and deflection under the rulebook load cases' },
        { label: 'Read + Adjust', state: 'flow', note: 'Compare against allowable limits, revise geometry or member sizing' },
        { label: 'Sign-Off', state: 'flow', note: 'Roll cage qualified; brake system released for build' },
      ],
    },
    {
      type: 'close',
      eyebrow: 'What This Project Demonstrates',
      title: 'Where the CAD and CAE habits started',
      items: [
        'End-to-end ownership of a vehicle subsystem, not just a single part',
        'Working SolidWorks fluency built on real assemblies, not tutorials',
        'Structural FEA in Ansys tied to explicit pass/fail load cases',
        'Early exposure to designing against a written requirements spec',
      ],
    },
  ],
}
