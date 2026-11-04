/* UT Health × CLI, rewritten: sections 01–05 drafted with anonymized visuals, because CLI's product visuals are restricted. */
module.exports = (B, k) => {
  const { list, facts, glance, cards, cf, num, own, flow, outcomes, note, todo } = k;
  const IMG = B + 'assets/img/cli/';
  const C = '#B5643C';
  return {
    key: 'cli', color: C,
    title: 'UT Health × CLI case study · Ikedi J. Nwogu',
    description: 'Senior UX Designer and Researcher at UTHealth Houston’s Children’s Learning Institute: UX strategy, research, accessibility and cross-team standards across CLI Engage and TECPDS.',
    hero: `<section class="case-hero" style="--c:${C}">
  <div class="ch-txt">
    <p class="eyebrow num-eyebrow">${num(1, 'Project introduction')}</p>
    <img class="ch-logo" src="${IMG}logo.webp" alt="Children’s Learning Institute and UTHealth Houston" width="707" height="168">
    <h1 class="long" style="color:#1d1d1d">Making complex education and research platforms easier to use.</h1>
    <p class="lede">At UTHealth Houston’s Children’s Learning Institute, I led UX strategy, research and design across education and clinical research platforms. I simplified complex workflows, set consistent UX standards, improved accessibility, and helped cross-functional teams deliver more intuitive experiences for educators, clinicians, researchers and families.</p>
  </div>
  <div class="ch-pic"><img src="${IMG}laptop.webp" alt="The Children’s Learning Institute website on a laptop" width="1800" height="1251"></div>
</section>
${facts([['Role', 'Senior UX Designer – UX Researcher'], ['Timeline', 'Jun 2024 – May 2025'], ['Platforms', 'CLI Engage and TECPDS'], ['Team', 'Several product teams, with PMs, researchers and engineers']])}
${glance([
  ['The problem', 'Educators, clinicians and researchers had to work through complex, inconsistent workflows across platforms.'],
  ['What I owned', 'UX strategy, research and usability testing, a WCAG 2.2 design system, and cross-team workshops.'],
  ['The outcome', 'Usability and adoption up 20%. The design system improved consistency and usability by 30%.'],
])}`,
    sections: [
      ['context', 'CLI Engage and the people who use it', num(2, 'The problem'), `
<p>The Children’s Learning Institute advances learning and health outcomes for children through research, resources, clinical programs and services. I worked across two of its platforms: <b>CLI Engage</b>, for early-childhood educators and families, and <b>TECPDS</b>, the Texas Early Childhood Professional Development System.</p>
<div class="two-sided">
  <article><h3>CLI Engage · educators &amp; families</h3><p>Needed to find training, resources and progress information quickly, often with limited time and varied technical skill.</p></article>
  <article><h3>TECPDS · professionals, clinicians &amp; researchers</h3><p>Early-childhood professionals needed to keep their training and records in order. Clinicians and researchers needed workflows that match how studies run, with data that stays accurate and trustworthy.</p></article>
</div>
<h3>What wasn’t working</h3>
${list([['Navigation and information architecture', 'grew product by product, so the same task worked differently in different places.'], ['No shared UX standards', 'across teams, so components and patterns drifted.'], ['Accessibility gaps', 'for users with diverse needs and abilities.']])}`],
      ['role', 'What I led across teams', num(3, 'My role &amp; ownership'), `
${own([
  ['I led', ['UX strategy for both platforms', 'Research and usability testing with educators, early-childhood professionals, clinicians and researchers', 'The WCAG 2.2 design system and UX standards', 'Workshops with 75 participants across product teams']],
  ['I partnered with', ['Product managers on priorities and roadmaps', 'Researchers and clinicians on study workflows', 'Engineers, validating designs against backend logic and data integrity', 'Business analysts on requirements']],
  ['How we worked', ['Agile and Scrum, with design in every sprint', 'Shared components instead of one-off screens', 'Research findings shared across teams, not kept inside one']],
])}`],
      ['research', 'Research that informed every team', num(4, 'Research &amp; insights'), `
<h3>Cross-team workshops</h3>
${flow([
  ['Map the journeys', 'Each team mapped its users’ key tasks and where they got stuck.'],
  ['Find the overlaps', 'We grouped the pain points shared across products.'],
  ['Agree on standards', 'Teams agreed on shared navigation, components and accessibility rules.'],
  ['Prioritize', 'Fixes ranked by impact on users and effort for engineering.'],
], 'How the cross-team workshops ran')}
<h3>Help Center research</h3>
<p>Research into how educators and families look for help, and where they get stuck. The clearest finding: people needed <b>clearer navigation</b> to reach the help they were looking for. That shaped the improvements, which focused on making the Help Center easier to find your way around.</p>
`],
      ['decisions', 'Simplifying navigation and standards', num(5, 'Design decisions'), `
${cards([
  ['One navigation model', 'Tasks grouped by what users are trying to do, not by which team built the feature.'],
  ['A shared design system', 'WCAG 2.2 components with documented usage, so every team builds the same way.'],
  ['Accessibility built in', 'Contrast, focus states, keyboard navigation and readable type in every component.'],
])}
${note('Product screens and diagrams are left out to respect CLI’s confidentiality. 06 (final experience) and 07 (outcomes and reflection) follow the same pattern as Paraillel.')}
${outcomes([['+20%', 'usability &amp; adoption', 'Research and usability testing with educators'], ['+30%', 'consistency &amp; usability', 'After the WCAG 2.2 design system']])}`],
    ],
  };
};
