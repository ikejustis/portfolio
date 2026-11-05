/* HealthyHand, rewritten as the founder / Design Engineer story: sections 01–05 drafted, 06–07 keep the live page's content. */
module.exports = (B, k) => {
  const { fig, zoom, list, facts, glance, cards, cf, num, own, flow, note } = k;
  const IMG = B + 'assets/img/hh/';
  const C = '#2E7D32';
    return {
    key: 'healthyhand', color: C,
    title: 'HealthyHand case study · Ikedi J. Nwogu',
    description: 'Design Lead on HealthyHand, a wellness discovery platform: product strategy, research, UX/UI, the design system, and the code behind the iOS app, partner dashboard and backend.',
    hero: `<section class="case-hero" style="--c:${C}">
  <div class="ch-txt">
    <p class="eyebrow num-eyebrow">${num(1, 'Project introduction')}</p>
    <img class="ch-logo" src="${IMG}logo.png" alt="HealthyHand" width="1288" height="264">
    <h1 class="long" style="color:#1F5A24">Building a healthier local ecosystem, one connection at a time.</h1>
    <p class="lede">HealthyHand is a wellness discovery platform that makes healthier living more accessible, while helping local health-focused businesses connect with their communities. I lead the product from concept to implementation, across product strategy, UX/UI, design systems, front-end and back-end development, and brand storytelling.</p>
  </div>
  <div class="ch-pic"><img src="${IMG}hero-pair.webp" alt="HealthyHand Map and For You screens on two iPhones" width="1300" height="1509"></div>
</section>
${facts([['Role', 'Design Lead'], ['Timeline', 'Oct 2025 – Present'], ['Platform', 'iOS app, partner dashboard and backend'], ['Built with', 'Figma, plus my own code for iOS, web and backend']])}
${glance([
  ['The problem', 'Health-conscious people struggle to find healthy places nearby, and small wellness businesses struggle to be found.'],
  ['What I own', 'Everything from strategy and research to the design system, the code for the app, dashboard and backend, and the brand.'],
  ['Where it is', 'A working iOS app, partner dashboard and backend, piloting with local partner businesses in Houston.'],
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
    ],
  };
};
