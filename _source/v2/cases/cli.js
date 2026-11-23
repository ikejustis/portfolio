/* UT Health × CLI, rewritten: sections 01–05 drafted with anonymized visuals, because CLI's product visuals are restricted. */
module.exports = (B, k) => {
  const { list, facts, glance, cards, cf, num, own, flow, outcomes, i2d, note, todo } = k;
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
    <p><a class="btn" href="https://public.cliengage.org/" target="_blank" rel="noopener">View Site</a></p>
  </div>
  <div class="ch-pic"><img src="${IMG}hero-platforms.webp" alt="CLI Engage and TECPDS, the two platforms I designed for, in browser windows" width="1800" height="1251"></div>
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
<div class="screens"><figure class="fig"><img src="${IMG}institute-home.webp" alt="The public Children’s Learning Institute homepage" width="1600" height="866" loading="lazy" decoding="async"><figcaption>The Children’s Learning Institute at UTHealth Houston, which runs both platforms</figcaption></figure></div>
<div class="twofig screens">
  <figure class="fig"><img src="${IMG}engage-home.webp" alt="The public CLI Engage homepage" width="1200" height="657" loading="lazy" decoding="async"><figcaption>CLI Engage, for educators and families</figcaption></figure>
  <figure class="fig"><img src="${IMG}tecpds-home.webp" alt="The public TECPDS homepage" width="1200" height="647" loading="lazy" decoding="async"><figcaption>TECPDS, the Texas Early Childhood Professional Development System</figcaption></figure>
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
<dl class="facts in"><div><dt>Methods</dt><dd>Usability testing, feedback sessions, cross-team workshops, Help Center research</dd></div><div><dt>Participants</dt><dd>Educators, early-childhood professionals, clinicians and researchers</dd></div><div><dt>Workshops</dt><dd>75 participants across product teams</dd></div><div><dt>Platforms</dt><dd>CLI Engage and TECPDS</dd></div></dl>
<h3>Cross-team workshops</h3>
${flow([
  ['Map the journeys', 'Each team mapped its users’ key tasks and where they got stuck.'],
  ['Find the overlaps', 'We grouped the pain points shared across products.'],
  ['Agree on standards', 'Teams agreed on shared navigation, components and accessibility rules.'],
  ['Prioritize', 'Fixes ranked by impact on users and effort for engineering.'],
], 'How the cross-team workshops ran')}
<h3>Help Center research</h3>
<p>Research into how educators and families look for help, and where they get stuck. The clearest finding: people needed <b>clearer navigation</b> to reach the help they were looking for. That shaped the improvements, which focused on making the Help Center easier to find your way around.</p>
<h3>What we learned</h3>
${cards([
  ['The same task, different everywhere', 'Navigation grew product by product, so users had to relearn the same task on each platform.'],
  ['Patterns drifted between teams', 'Without shared standards, each team built its own buttons, forms and layouts.'],
  ['Accessibility gaps', 'Contrast, focus and keyboard support varied, which shut out users with diverse needs.'],
  ['Users vary widely', 'From educators with limited time and varied technical skill to clinicians whose study data must stay accurate.'],
])}
`],
      ['decisions', 'Simplifying navigation and standards', num(5, 'Design decisions'), `
${i2d([
  ['The same task worked differently on each platform.', 'One navigation model, with tasks grouped by what users are trying to do, not by which team built the feature.'],
  ['Patterns drifted between teams.', 'A shared WCAG 2.2 design system with documented usage, so every team builds the same way.'],
  ['Accessibility varied from screen to screen.', 'Contrast, focus states, keyboard navigation and readable type built into every component, not added per screen.'],
  ['People couldn’t find their way to help.', 'Clearer Help Center navigation, so educators and families reach the help they’re looking for.'],
  ['Clinicians and researchers need data they can trust.', 'Study workflows validated with engineers against backend logic, so the design never puts data integrity at risk.'],
], 'What research showed', 'What I designed')}
${note('Product screens and diagrams are left out to respect CLI’s confidentiality. 06 (final experience) and 07 (outcomes and reflection) follow the same pattern as Paraillel.')}
`],
      ['standards', 'Cross-team standards as a system', num(5, 'Design decisions'), `
<p>The biggest lever wasn’t one screen; it was how every team designs. I treated UX standards as a system that turns research into consistent products across teams.</p>
${flow([
  ['Shared research', 'Findings from every team pooled in one place, so no team learns alone.'],
  ['Agreed standards', 'Navigation, component and accessibility rules agreed in workshops with 75 participants.'],
  ['One design system', 'WCAG 2.2 components with documented usage, the single source for every team.'],
  ['Every product', 'CLI Engage and TECPDS built from the same parts, in every sprint.'],
], 'How cross-team standards work as a system: research, standards, design system, products')}
${cards([
  ['Built for adoption', 'Teams agreed on the standards themselves in the workshops, so they used them instead of working around them.'],
  ['Shared components, not one-off screens', 'Teams compose screens from documented components, so new work starts consistent and accessible.'],
  ['Kept alive in every sprint', 'Design ran inside Agile and Scrum, so the standards evolved with the products instead of going stale.'],
])}`],
      ['impact', 'Impact', num(7, 'Outcomes &amp; reflection'), `
${outcomes([['+20%', 'usability &amp; adoption', 'Research and usability testing with educators'], ['+30%', 'consistency &amp; usability', 'After the WCAG 2.2 design system'], ['75', 'workshop participants across product teams', 'Shared UX standards']])}`],
    ],
  };
};
