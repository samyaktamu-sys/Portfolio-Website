export const pilotline = {
  slug: 'pilot-line-launch',
  featured: true,
  datePublished: '2022',
  tag: 'NPI / APQP / Line Design',
  title: 'Pilot Assembly Line Launch',
  subtitle: 'Motorcycle Switch Assemblies, Uno Minda Limited',
  headline: 'Ran About 30% Faster Than the Required Line Speed',
  role: 'Manufacturing Engineer · line design, APQP Phase 3 deliverables, PPAP elements',
  company: 'Uno Minda Limited, Haryana, India',
  summary:
    'Uno Minda builds high-volume motorcycle switch assemblies for OEMs including Yamaha, Suzuki, and Piaggio. I designed a new pilot production line to the plant’s internal standards and IATF 16949 process requirements, turning design specs into repeatable workstations and the documents that keep them that way. The line ran about 30% faster than the speed it was required to hit.',
  heroStats: [
    { value: '~30%', label: 'Faster Than Required Line Speed' },
    { value: 'IATF 16949', label: 'Process Requirements Met' },
    { value: '7, 14–17', label: 'PPAP Elements Owned (17 in part)' },
    { value: '30+', label: 'Operators on the Skill Matrix' },
  ],
  slides: [
    {
      type: 'twocol',
      eyebrow: 'Scope',
      title: 'What I owned on the line',
      left: {
        heading: 'APQP Phase 3 deliverables',
        items: [
          'Process flow chart (PFC)',
          'Floor plan layout (FPL)',
          'Routing for the line',
          'SOPs and work instructions',
          'Error-proofing, operator training, and the operator skill matrix',
        ],
      },
      right: {
        heading: 'Working inside the plant system',
        items: [
          'Designed to Uno Minda’s internal standards and IATF 16949 process requirements',
          'Two-bin Kanban and sequenced delivery were plant standard; I built them into the line',
          'Pneumatic assembly equipment at the stations',
          'Planned line readiness with the plant’s standard launch templates',
        ],
      },
    },
    {
      type: 'diagram',
      eyebrow: 'Line Design',
      title: 'From value stream to workstation',
      body: 'I used value stream mapping for the line’s flow and Yamazumi charts to balance work across the stations, separating value-added from non-value-added time at each one.',
      diagram: [
        { label: 'Value Stream Map', state: 'flow', note: 'Flow and waste across the whole line' },
        { label: 'Yamazumi Charts', state: 'flow', note: 'Value-added vs. non-value-added time by station' },
        { label: 'Workstations', state: 'flow', note: 'Repeatable setups from the design specs, with 5S at every station' },
        { label: 'Line Speed', state: 'flow', note: 'About 30% faster than the required speed' },
      ],
    },
    {
      type: 'stats',
      eyebrow: 'Material Flow',
      title: 'Kanban sized station by station',
      body: 'The plant ran two-bin Kanban: two bins per station with a fixed part count, a button to signal an empty bin, and a milk-run handler refilling every station. I built it into the pilot line, set the bin quantity for each station, and managed the line-side floor-stock list.',
      stats: [
        { value: '2-Bin', label: 'Kanban at Every Station' },
        { value: 'Button', label: 'Replenishment Signal' },
        { value: 'Milk Run', label: 'Refill Route' },
        { value: 'Per Station', label: 'Bin Quantities I Set' },
      ],
    },
    {
      type: 'checklist',
      eyebrow: 'Error-Proofing',
      title: 'Inspection and interlocks written into the PFMEA',
      body: 'Uno Minda’s lines had vision inspection at almost every station and a serial-number scan on each part. On my line, I chose which stations got vision checks and wrote those checks and the NG-bin scan interlock into the PFMEA and control plan.',
      items: [
        { title: 'Vision Checks', note: 'Part presence and orientation, plus the result of each station’s process: soldering, screwing, placement.' },
        { title: 'NG-Bin Interlock', note: 'A station would not scan the next part until the NG part was in the reject bin.' },
        { title: 'NG Ranking', note: 'Ranked stations by NG count, reviewed them with the line team daily, and took high-NG stations to root cause.' },
        { title: 'Traceability', note: 'Each serial number carried every station’s result; I used it to look up part history and scope containment.' },
        { title: 'End-of-Line Test', note: 'Read CAN and LIN bus messages to diagnose units that failed end-of-line functional tests.' },
      ],
    },
    {
      type: 'twocol',
      eyebrow: 'Launch',
      title: 'PPAP, pilot builds, and launch reviews',
      left: {
        heading: 'PPAP elements I owned',
        items: [
          'Element 7: Control plan',
          'Element 14: Sample production parts',
          'Element 15: Master sample',
          'Element 16: Checking aids',
          'Element 17: Customer-specific requirements (in part)',
        ],
      },
      right: {
        heading: 'Builds and reviews',
        items: [
          'Ran the first sample and pilot builds myself before launch',
          'Hand-assembled and soldered switch and harness units during the pilot builds',
          'Presented NPI, PPAP, line-readiness, and start-of-production status for my parts in OEM launch reviews',
          'Applied 4M change-point control after changes',
        ],
      },
    },
    {
      type: 'close',
      eyebrow: 'What This Project Demonstrates',
      title: 'A line designed to run, not just to pass launch',
      items: [
        'Line design end to end: value stream, Yamazumi balancing, PFC, FPL, routing, and standard work',
        'Error-proofing built into the PFMEA and control plan from the start, not added after launch',
        'Launch discipline: PPAP elements, pilot builds, and status in OEM launch reviews',
        'Result: a line that ran about 30% faster than the speed it was required to hit',
      ],
    },
  ],
}
