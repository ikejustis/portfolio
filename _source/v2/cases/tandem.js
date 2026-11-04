/* Tandem, rewritten around the patient and clinician workflows: sections 01–05 drafted. */
module.exports = (B, k) => {
  const { fig, list, facts, glance, cf, num, own, beforeAfter, note } = k;
  const IMG = B + 'assets/img/tan/';
  const C = '#5F63B8';
  return {
    key: 'tandem', color: C,
    title: 'Tandem case study · Ikedi J. Nwogu',
    description: 'UX Designer and Researcher on Tandem Psychiatric Family Practice: research-led redesign of scheduling, provider messaging and patient records.',
    hero: `<section class="case-hero" style="--c:${C}">
  <div class="ch-txt">
    <p class="eyebrow num-eyebrow">${num(1, 'Project introduction')}</p>
    <img class="ch-logo" src="${IMG}logo.webp" alt="Tandem Psychiatric Family Practice" width="506" height="130">
    <h1 class="long" style="color:#23285E">Making mental health care easier to reach, for patients and the people who care for them.</h1>
    <p class="lede">Tandem is a psychiatric family practice treating addiction, anxiety, depression, bipolar disorder, ADHD and childhood mental health. I redesigned how patients schedule, reach their providers and find their records, while easing the load on the practice’s staff.</p>
  </div>
  <div class="ch-pic"><img src="${IMG}hero.webp" alt="The redesigned Tandem home page on a desktop monitor" width="1252" height="732"></div>
</section>
${facts([['Company', 'Tandem Psychiatric Family Practice'], ['Role', 'UX Designer – UX Researcher'], ['Users', 'Patients, caregivers, clinicians and practice staff'], ['Platform', 'Website + patient portal (Patient Fusion)']])}
${glance([
  ['The problem', 'Patients couldn’t easily book, reach their provider or find lab results, and staff absorbed the calls.'],
  ['What I owned', 'Research with 20 patients, journey mapping, a new information architecture and a WCAG-compliant redesign.'],
  ['What changed', 'Booking, provider messaging and records moved one click from the home page, on a WCAG-compliant site.'],
])}`,
    sections: [
      ['problem', 'Who Tandem serves, and what got in the way', num(2, 'The problem'), `
<div class="two-sided">
  <article><h3>Patients &amp; caregivers</h3><p>People managing anxiety, depression, ADHD and other conditions, often booking for themselves and a child. Every extra step or phone call is harder when you’re already struggling.</p></article>
  <article><h3>Clinicians &amp; staff</h3><p>Missed appointments, repeated calls about scheduling and lab results, and messages scattered across phone and email, all taking time away from care.</p></article>
</div>`],
      ['role', 'What I owned', num(3, 'My role &amp; ownership'), `
${own([
  ['I led', ['Patient surveys (20 patients) and stakeholder workshops', 'Personas and the patient journey map', 'The new information architecture', 'Wireframes, hi-fi design and WCAG compliance']],
  ['I partnered with', ['The practice’s clinicians and staff', 'Practice leadership on business goals', 'Stakeholders in workshops, to align product goals with patient needs']],
  ['Balancing both sides', ['Patients: fewer steps and direct contact', 'Practice: fewer calls and no-shows', 'Both: one place for records and messages']],
])}`],
      ['workflows', 'The three workflows I redesigned', num(4, 'Workflows'), `
${beforeAfter([
  ['Scheduling', 'Booking meant navigating a confusing site or calling the office, with no reminders.', 'Simpler booking through the patient portal, now one click away in the main navigation.'],
  ['Messaging & records', 'Patients waited on call-backs and couldn’t find lab results or visit notes.', 'A secure Contact Us message page, a direct phone number, and lab results and visit summaries one click away in Patient Fusion.'],
  ['Finding care', 'The site lacked clear navigation and provider information.', 'A simpler structure with services, the care team and the patient portal in the main navigation.'],
])}
`],
      ['decisions', 'The redesigned experience', num(5, 'Design decisions'), `
<div class="split">${fig(IMG + 'home-laptop.webp', 'The redesigned Tandem home page: clear navigation to services, the care team and the patient portal')}<div><h3>Finding care</h3><p>A simpler structure, with services, the care team and the patient portal in the main navigation, built to WCAG guidelines.</p></div></div>
<div class="split rev"><div><h3>Records &amp; scheduling</h3><p>Patient Fusion one click away, for lab results, visit summaries and booking.</p></div>${fig(IMG + 'fusion.webp', 'The Patient Fusion login, reached from Tandem’s main navigation')}</div>
<div class="split">${fig(IMG + 'contact.webp', 'The secure Contact Us message page')}<div><h3>Reaching a provider</h3><p>A secure Contact Us message page and a direct phone number, so patients don’t wait on call-backs.</p></div></div>
${note('06 (final experience) and 07 (reflection) reuse the live page’s next steps. The engagement and workload figures are removed, as you asked.')}`],
    ],
  };
};
