export const secondmachine = {
  slug: 'second-machine-capacity-case',
  featured: true,
  datePublished: '2024',
  tag: 'Capacity Modeling / FlexSim / FAT & SAT',
  title: 'Second Pipe Bender: Capacity Case to SAT',
  subtitle: 'Plant Relocation, Utility Power Systems',
  headline: 'About 70% More Capacity at the Bottleneck',
  role: 'Project Engineer · built the capacity case; wrote, ran, and signed off the FAT and SAT',
  company: 'Utility Power Systems, Delhi, India',
  summary:
    'During a plant relocation, pipe bending was already the line’s bottleneck at 80-85% utilization, and the new site was expected to add another 25-30% of demand. Management’s attention was on the new in-house operations, not on an existing process that was working, and they weren’t convinced a second machine was needed. I built a FlexSim model against realistic demand to make the case, then followed the approved machine through RFQs, installation, and factory and site acceptance.',
  heroStats: [
    { value: '~70%', label: 'Capacity Added at the Bottleneck' },
    { value: '80–85%', label: 'Utilization Before' },
    { value: '+25–30%', label: 'Demand Projected at the New Site' },
    { value: 'FAT + SAT', label: 'Written, Run & Signed Off' },
  ],
  slides: [
    {
      type: 'stats',
      eyebrow: 'Situation',
      title: 'A bottleneck about to get busier',
      body: 'Pipe bending was already the constraint at the old site, with work-in-process queued in front of it. The new site sat within reach of seven major industrial hubs, which opened up business the company had previously had to turn away, so the extra demand was real. A process near its ceiling was about to absorb another 25-30%.',
      stats: [
        { value: '80–85%', label: 'Pipe-Bending Utilization' },
        { value: 'WIP', label: 'Queued at the Bottleneck' },
        { value: '+25–30%', label: 'Projected Demand Increase' },
        { value: '2', label: 'Machines Proposed' },
      ],
    },
    {
      type: 'diagram',
      eyebrow: 'The Model',
      title: 'FlexSim against realistic demand, not a theoretical maximum',
      body: 'I built a discrete-event simulation of layout, buffer, and staffing scenarios. I modeled demand at the market-constrained projection for the new site rather than the theoretical maximum: a constraint already near its ceiling didn’t need an inflated number to make the case.',
      diagram: [
        { label: 'Utilization Data', state: 'flow', note: '80-85% from the line’s operator-logged tracking' },
        { label: 'Risk Session', state: 'flow', note: 'Failure modes and downtime risks, worked through with maintenance and quality' },
        { label: 'FlexSim DES', state: 'flow', note: 'Layout, buffer, and staffing scenarios' },
        { label: 'Demand Scenario', state: 'flow', note: '+25-30%, the market-constrained projection' },
        { label: 'Result', state: 'flow', note: 'About 70% more capacity with a second machine' },
      ],
    },
    {
      type: 'twocol',
      eyebrow: 'Result',
      title: 'A conservative case that got approved',
      left: {
        heading: 'What the model showed',
        items: [
          'A second machine adds about 70% capacity at the bottleneck',
          'Enough to absorb the 25-30% demand increase',
          'And to relieve the WIP queued in front of the constraint',
          'Could reach about 100% if demand grew further; noted, but not used to sell it',
        ],
      },
      right: {
        heading: 'The decision',
        items: [
          'Presented the case to management',
          'Approved: one of the two machines proposed',
          'Issued the RFQs for the machine',
          'Planned the install in MS Project, using critical path analysis to prioritize at-risk tasks',
        ],
      },
    },
    {
      type: 'checklist',
      eyebrow: 'Qualification',
      title: 'FAT at the OEM, SAT at the plant',
      body: 'I wrote the factory and site acceptance checklists, ran the checks and recorded the results, and signed off the machine.',
      items: [
        { title: 'Bend Accuracy', note: 'Trial bends on sample parts, checked for angle, ovality, and dimensions.' },
        { title: 'Machine Safety', note: 'Guarding, emergency stops, and interlocks.' },
        { title: 'Hydraulics & Controls', note: 'Hydraulic system and control functions, checked against the checklist.' },
        { title: 'Installation', note: 'Visited the OEM and worked with them on installation and validation, end to end.' },
      ],
    },
    {
      type: 'stats',
      eyebrow: 'The New Site',
      title: 'Layout built around flow and safety',
      body: 'At the new site I decided equipment placement, space per area, the material-flow layout, and equipment quantities, and used FlexSim with demand volumes and shift patterns to size the material handlers and overhead cranes. I designed the pipe flow as a straight line so pipes never had to be rotated between operations, which sped up movement, made handling safer, and needed about 800 sq ft less floor space than the alternative layout.',
      stats: [
        { value: '~800 sq ft', label: 'Less Floor Space Than the Alternative Layout' },
        { value: '0', label: 'Pipe Rotations Between Operations' },
        { value: 'FlexSim', label: 'Crane & Material-Handler Sizing' },
        { value: 'Zoned', label: 'Separate Pedestrian & Crane Areas' },
      ],
    },
    {
      type: 'close',
      eyebrow: 'What This Project Demonstrates',
      title: 'Data that changed a decision, then follow-through',
      items: [
        'Made a data case that convinced management, who weren’t sold on a second machine at first',
        'Modeled realistic demand instead of the theoretical maximum, so the case held up to questions',
        'Followed the machine through: RFQs, install planning, FAT at the OEM, and SAT sign-off at the plant',
        'Designed the layout around flow and safety: straight-line pipe flow, marked walkways, and evacuation routes',
      ],
    },
  ],
}
