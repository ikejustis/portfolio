/* HealthyHand, rewritten as the founder / Design Engineer story: sections 01–05 drafted, 06–07 keep the live page's content. */
module.exports = (B, k) => {
  const { fig, zoom, list, facts, glance, cards, cf, num, own, flow, outcomes, i2d, note } = k;
  /* A table with a header row and labelled rows, in the site's journey-map style. */
  const table = (head, rows, label) => `<div class="scroll-x"><table class="jmap ctable" aria-label="${label}"><thead><tr>${head.map((h) => `<th scope="col">${h}</th>`).join('')}</tr></thead><tbody>${rows.map(([h, ...cells]) => `<tr><th scope="row">${h}</th>${cells.map((c) => `<td>${c}</td>`).join('')}</tr>`).join('')}</tbody></table></div>`;

  const IMG = B + 'assets/img/hh/';
  const C = '#2E7D32';
    return {
    key: 'healthyhand', color: C,
    title: 'HealthyHand case study · Ikedi J. Nwogu',
    description: 'Product Lead on HealthyHand, a wellness discovery platform: product strategy, research, UX/UI, the design system, and the code behind the iOS app, partner dashboard and backend.',
    hero: `<section class="case-hero" style="--c:${C}">
  <div class="ch-txt">
    <p class="eyebrow num-eyebrow">${num(1, 'Project introduction')}</p>
    <img class="ch-logo" src="${IMG}logo.png" alt="HealthyHand" width="1288" height="264">
    <h1 class="long" style="color:#1F5A24">Building a healthier local ecosystem, one connection at a time.</h1>
    <p class="lede">HealthyHand is a wellness discovery platform that makes healthier living more accessible, while helping local health-focused businesses connect with their communities. I lead the product from concept to implementation, across product strategy, UX/UI, design systems, front-end and back-end development, and brand storytelling.</p>
  </div>
  <div class="ch-pic"><img src="${IMG}hero-pair.webp" alt="HealthyHand Map and For You screens on two iPhones" width="1300" height="1509"></div>
</section>
${facts([['Role', 'Product Lead'], ['Timeline', 'Oct 2025 – Present'], ['Platform', 'iOS app, partner dashboard and backend'], ['Built with', 'Figma, plus my own code for iOS, web and backend']])}
${glance([
  ['The problem', 'Health-conscious people struggle to find healthy places nearby, and small wellness businesses struggle to be found.'],
  ['What I own', 'Everything from strategy and research to the design system, the code for the app, dashboard and backend, and the brand.'],
  ['The impact', '500+ people joined the waitlist and turned into sign-ups, and 7 Houston partners came on board, including Baylor College of Medicine Teen Health Clinic.'],
])}`,
    sections: [
      ['problem', 'Healthy choices are hard to find', num(2, 'The problem'), `
<div class="two-sided">
  <article><h3>Members</h3><p>Health-conscious people want healthy restaurants, studios, parks and clinics nearby, but the information is scattered across search, maps and word of mouth.</p></article>
  <article><h3>Local businesses</h3><p>Small wellness businesses compete with chains for attention, and have no simple way to reach the people who are already looking for them.</p></article>
</div>
<h3>Why it mattered</h3>
<p>When healthy options are hard to find, people default to whatever is closest. Connecting the two sides helps people live healthier and helps local businesses grow.</p>`],
      ['role', 'Product lead', num(3, 'My role &amp; ownership'), `
${own([
  ['Product', ['Vision, roadmap and priorities across both sides of the marketplace', 'Discovery with members and partner businesses', 'Success metrics and product analytics', 'Go-to-market with partners and local creators']],
  ['Design', ['Research, personas and information architecture', 'UX/UI for the iOS app and the partner dashboard', 'The design system and accessibility standards', 'Brand, launch film and social content']],
  ['Engineering', ['The iOS app, built from the design system', 'The partner dashboard', 'The backend: accounts, rewards and payments', 'Product analytics to guide the roadmap']],
])}
${note('The review’s main ask for HealthyHand: show that you build the product, not only design it. This panel makes that the first thing a reader sees after the problem.')}`],
      ['system', 'What I built', num(4, 'The product'), `
<p>One product with two sides: an app for members and a dashboard for the businesses they visit. I designed and built both.</p>
${cards([
  ['Member app', 'An iOS app to discover healthy places nearby, join local wellness events and earn rewards for visits.'],
  ['Partner dashboard', 'A web dashboard where local businesses see their visits and reward their regulars.'],
  ['The platform behind them', 'Accounts, rewards and subscriptions, built so both sides stay in sync.'],
])}
<h3>How the two sides connect</h3>
${flow([
  ['Discover', 'Members find a healthy spot nearby.'],
  ['Visit', 'They go, and the visit counts.'],
  ['Earn', 'Members earn rewards for living healthier.'],
  ['Return', 'Businesses see who visits and bring their regulars back.'],
], 'How a member visit turns into value for a local business')}
${note('Kept high level on purpose, so the page shows what you built without showing how it works inside.')}`],
      ['build', 'From wireframe to working app', num(5, 'Design decisions &amp; build'), `
<div class="journey4">
  ${fig(IMG + 'wireframes-paper.webp', 'Paper wireframes', '1 · Paper sketches')}
  ${fig(IMG + 'wireframes-lofi.webp', 'Low-fidelity wireframes', '2 · Low-fidelity wireframes')}
  ${fig(IMG + 'hifi-for-you.webp', 'High-fidelity For You screen', '3 · High-fidelity design')}
  ${fig(IMG + 'hero-pair.webp', 'The working iOS app', '4 · The working app')}
</div>
<h3>Design system to code</h3>
<p>I designed the components once and built them once. Every color, radius, shadow and type size is a token in <code>tokens.css</code>, and the buttons, chips, badges and cards are shared classes in <code>components.css</code>. Screens compose those pieces instead of styling themselves, so every screen stays consistent and accessible.</p>
${zoom(IMG + 'design-system.webp', 'HealthyHand design system: color tokens, Lexend Deca type scale, buttons, chips and badges, the partner card, and shape and elevation tokens')}
<p class="hint">Rendered from the app’s real CSS. Tap to see it full size.</p>
${note('Sections 06 (final experience: For You, Map and Canopy screens and the launch film) and 07 (takeaways and reflection) would keep the content of the live case study. They’re left out of this draft to keep it short.')}`],
      ['journey', 'The member journey, end to end', num(4, 'Research &amp; insights'), `
<p>I mapped the member’s journey from finding a place to coming back, and what each step had to do for the business on the other side.</p>
${table(['Stage', 'Member’s goal', 'Before HealthyHand', 'What HealthyHand does', 'What the partner gets'], [
  ['1 · Discover', 'Find a healthy place nearby', 'Scattered across search, maps and word of mouth', 'For You picks and a map of restaurants, studios, parks and clinics', 'Seen by people already looking for them'],
  ['2 · Decide', 'Choose quickly, with confidence', 'Little trustworthy information in one place', 'Everything needed to decide on the partner page, plus favorites to save it for later', 'A page that tells their story'],
  ['3 · Visit', 'Get there and go', 'No reason to pick a local spot over a chain', 'Directions from the app, and a visit that counts', 'New and returning visits'],
  ['4 · Earn', 'Feel rewarded for healthy choices', 'Healthy habits go unrewarded', 'Points on every scanned receipt, turned into rewards', 'Rewards that bring regulars back'],
  ['5 · Belong', 'Feel part of a local wellness community', 'Hard to find people and events', 'Canopy: local wellness events and workshops in one calendar', 'A community around their business'],
], 'Member journey map: stages, goals, what was broken before, what HealthyHand does, and what the partner gets')}`],
      ['systems', 'Thinking in systems', num(5, 'Design decisions &amp; build'), `
<p>HealthyHand is a two-sided product, so I designed it as one system rather than a set of screens. Each partner is described once, and that single record feeds every place the partner appears.</p>
${flow([
  ['One partner record', 'Name, category, location, story and offers, kept in one place.'],
  ['Shared components', 'The same tokens and components build the partner card, the partner page and the map.'],
  ['Every surface', 'The member app and the partner dashboard read from the same data, so both sides always match.'],
  ['Marketing, too', 'Partner spotlight reels are built from the same partner pages, so every fact matches the app.'],
], 'How one partner record flows through the product: data, components, app and dashboard, and marketing')}
${cards([
  ['Two sides, one loop', 'Every design choice had to work for both members and partners: a visit is discovery for one and growth for the other.'],
  ['Design system as code', 'Tokens and shared components in code, so a change to a color or a button updates every screen at once.'],
  ['Built to scale partners', 'Adding a partner means adding one record; their card, page and map pin follow from it.'],
])}`],
      ['impact', 'Impact so far', num(7, 'Outcomes &amp; reflection'), `
${outcomes([
  ['500+', 'waitlist members who turned into sign-ups', 'Pre-launch waitlist'],
  ['7', 'Houston partners on board', 'Including Baylor College of Medicine Teen Health Clinic'],
])}
<p>The partners span healthy food, fitness and health care: Rush Bowls, A Moveable Feast, Cranky Carrot Juice Co., The Studio BE, Pure Barre, Spar Houston, and Baylor College of Medicine Teen Health Clinic.</p>`]
    ],
  };
};
