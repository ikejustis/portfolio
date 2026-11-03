/* Builds the case study pages in projects/.  node projects.js
   Each case study is a list of sections; a section's html is written below. */
const fs = require('fs');
const path = require('path');
const { esc, head, nav, foot, moreCases } = require('./common');

const B = '../';
const IMG = B + 'assets/img/hh/';

/* Pieces used inside sections */
const fig = (src, alt, cap, cls = '') => `<figure class="fig ${cls}"><img src="${src}" alt="${esc(alt)}" loading="lazy" decoding="async">${cap ? `<figcaption>${cap}</figcaption>` : ''}</figure>`;
const todo = (what) => `<figure class="fig todo"><div>${esc(what)}</div><figcaption>Image to add</figcaption></figure>`;
const quotes = (qs) => '<div class="quotes">' + qs.map(([q, who]) => `<blockquote><p>“${esc(q)}”</p><footer>${esc(who)}</footer></blockquote>`).join('') + '</div>';
const facts = (rows) => '<dl class="facts">' + rows.map(([k, v]) => `<div><dt>${k}</dt><dd>${v}</dd></div>`).join('') + '</dl>';
const glance = (rows) => '<section class="glance" aria-label="At a glance">' + rows.map(([h, p]) => `<div><h2>${h}</h2><p>${p}</p></div>`).join('') + '</section>';
const cards = (items, cls = 'features', inner = 'feat') => `<div class="${cls}">` + items.map(([t, d]) => `<div class="${inner}"><h3>${t}</h3><p>${d}</p></div>`).join('') + '</div>';
const zoom = (src, alt, cls = 'wide') => `<a class="zoom" href="${src}" target="_blank" rel="noopener" aria-label="Open full size: ${esc(alt)}">${fig(src, alt, '', cls)}</a>`;
const list = (items) => '<ul class="pts">' + items.map(([b, t]) => `<li><b>${b}</b>${t ? (/[:.,]$/.test(b) ? ' ' : ' – ') + t : ''}</li>`).join('') + '</ul>';

/* The double diamond, drawn in SVG so it stays sharp and the labels stay readable.
   light/dark: the two diamonds' colors; top: the four phase labels; ends: the three labels under it. */
function diamond(light, dark, top = ['DISCOVERY', 'DEFINE', 'DEVELOP', 'DELIVER'], ends = ['PROBLEM', 'OPPORTUNITIES', 'SOLUTION']) {
  const tx = top.length === 2 ? [[270, top[0]], [730, top[1]]] : [[155, top[0]], [385, top[1]], [615, top[2]], [845, top[3]]];
  return `<figure class="fig diamond" role="img" aria-label="Design process: a double diamond. ${esc(top.join(', '))}: design objectives and goals, research, analysis and synthesis and ideation, then concept solution, prototype and test, iterate and evaluate, and finalize; from ${esc(ends.join(' to ').toLowerCase())}.">
<svg viewBox="0 0 1000 400" aria-hidden="true">
  <polygon points="40,200 270,40 500,200 270,360" fill="${light}"/>
  <polygon points="500,200 730,40 960,200 730,360" fill="${dark}"/>
  <g stroke="#ffffff" stroke-width="2" stroke-dasharray="5 6"><line x1="155" y1="120" x2="155" y2="280"/><line x1="270" y1="40" x2="270" y2="360"/><line x1="385" y1="120" x2="385" y2="280"/><line x1="615" y1="120" x2="615" y2="280"/><line x1="730" y1="40" x2="730" y2="360"/><line x1="845" y1="120" x2="845" y2="280"/></g>
  <g stroke="#C9D3D9" stroke-width="2"><line x1="40" y1="20" x2="40" y2="380"/><line x1="500" y1="20" x2="500" y2="380"/><line x1="960" y1="20" x2="960" y2="380"/></g>
  <g font-family="Urbanist, sans-serif" font-weight="700" font-size="15" letter-spacing="1.5" fill="#3E4A40" text-anchor="middle">
    ${tx.map(([x, t]) => `<text x="${x}" y="14">${esc(t)}</text>`).join('')}
  </g>
  <g font-family="Urbanist, sans-serif" font-weight="700" font-size="12.5" letter-spacing=".6" fill="#2b3540" text-anchor="middle">
    <text x="98" y="196">OBJECTIVES</text><text x="98" y="212">&amp; GOALS</text>
    <text x="212" y="205">RESEARCH</text>
    <text x="327" y="196">ANALYSIS &amp;</text><text x="327" y="212">SYNTHESIS</text>
    <text x="442" y="205">IDEATION</text>
    <text x="557" y="196">CONCEPT</text><text x="557" y="212">SOLUTION</text>
    <text x="672" y="196">PROTOTYPE</text><text x="672" y="212">&amp; TEST</text>
    <text x="787" y="196">ITERATE &amp;</text><text x="787" y="212">EVALUATE</text>
    <text x="902" y="205">FINALIZE</text>
  </g>
  <g font-family="Urbanist, sans-serif" font-weight="700" font-size="13" letter-spacing="1.5" fill="#8A97A0" text-anchor="middle">
    <text x="40" y="398" text-anchor="start">${esc(ends[0])}</text><text x="500" y="398">${esc(ends[1])}</text><text x="960" y="398" text-anchor="end">${esc(ends[2])}</text>
  </g>
</svg></figure>`;
}

const STATS = [
  [80, 'say improving their health is extremely or very important'],
  [88, 'look for healthy restaurants or cafés'],
  [76, 'look for fitness centers or gyms'],
  [52, 'look for parks or outdoor recreation'],
  [40, 'look for healthy grocery stores or markets'],
];

const PERSONAS = [
  { name: 'Hassan Ahmed', meta: '27 · Business Analyst', photo: 'persona-hassan.webp',
    bio: 'Hassan is a busy professional who spends long hours analyzing data and managing business insights for his company. He’s passionate about personal wellness, but his demanding schedule makes it hard to find health-conscious options quickly. He wants to make informed decisions about where to eat, exercise and access wellness services without spending hours researching.',
    goals: ['Find healthy dining options near his office or home', 'Locate gyms, yoga studios or wellness centers that fit his schedule', 'Read trusted reviews from like-minded people', 'Save favorite places for later'],
    pains: ['Struggles to find reliable, curated wellness spots in one place', 'Limited time to research health-focused businesses', 'Dislikes inconsistent or misleading online reviews'] },
  { name: 'Hannah Johnson', meta: '30 · Marketing Manager', photo: 'persona-hannah.webp',
    bio: 'Hannah is a health-conscious professional who prioritizes a balanced lifestyle. She enjoys organic food, boutique fitness classes and sustainable shopping. As a marketing manager, she keeps an eye on trending wellness businesses and enjoys sharing her experiences with others.',
    goals: ['Discover new health-conscious restaurants and cafés', 'Find holistic wellness services (acupuncture, mental health clinics, eco-friendly shops)', 'Support local, sustainability-focused businesses', 'Share reviews and recommendations with her network'],
    pains: ['Hard to discover lesser-known, high-quality wellness businesses', 'Generic review platforms don’t focus on health-conscious consumers', 'Wants a community of like-minded people to swap recommendations'] },
];

const LAWS = [
  ['Hick’s Law', 'Simplify decision-making', 'People can feel overwhelmed searching for health-conscious businesses, so each screen offers fewer choices at once (for example, progressive filtering), making decisions faster and more intuitive.'],
  ['Jakob’s Law', 'Familiar navigation patterns', 'People expect HealthyHand to work like the location apps they already use, such as Google Maps and Yelp. Familiar patterns like search, filters and an interactive map reduce the learning curve.'],
  ['Fitts’s Law', 'Optimized tap targets', 'Search, filters and map pins are large and easy to tap, which matters most on a phone.'],
  ['Miller’s Law', 'Chunking information', 'Business details, reviews and ratings are grouped into small sections with clear headings, so nothing feels like too much at once.'],
  ['Aesthetic-Usability Effect', 'Trust through visual appeal', 'A clean, modern, friendly interface feels easier to use, and makes people more likely to trust the platform.'],
  ['Doherty Threshold', 'Fast responses', 'Search and filters respond quickly, and loading states and skeleton screens keep people engaged when something takes longer.'],
];

const HIFI = [
  ['for-you', 'For You: discover healthy spots nearby and earn points every day.'],
  ['map', 'Map: explore every partner, park and clinic in the city.'],
  ['canopy', 'Canopy (events): community events, workshops and more in one calendar.'],
];

const TAKEAWAYS = [
  ['Real-world conversations shaped real-world design.', 'Talking directly with local business owners and health-conscious people surfaced real insights about accessibility, awareness and trust, so HealthyHand answers human needs rather than assumptions.'],
  ['Simplicity drove engagement.', 'Applying Fitts’s, Miller’s and Hick’s laws reduced friction and cognitive load. People could find their way easily, explore quickly and focus on discovery instead of decision fatigue.'],
  ['Community over convenience.', 'The biggest discovery wasn’t about finding healthy spots, it was about belonging. People wanted to feel connected to their local wellness community, which shaped Events, Favorites and Rewards and turned a directory into a lifestyle hub.'],
  ['Design as an ecosystem builder.', 'HealthyHand became a bridge between local businesses and the people they serve: visibility for businesses, meaningful choices for members. It connects, not just informs.'],
  ['Visual storytelling builds trust.', 'Calm colors, approachable type and warm imagery (the Aesthetic-Usability Effect) build credibility and emotional connection, which matters most for a health and wellness app.'],
];

const HEALTHYHAND = {
  key: 'healthyhand', color: '#2E7D32',
  title: 'HealthyHand case study · Ikedi J. Nwogu',
  description: 'Design Lead on HealthyHand, an iOS app that helps people discover healthy restaurants, studios, parks and clinics near them, and earn rewards for every visit.',
  hero: `<section class="case-hero" style="--c:#2E7D32">
  <div class="ch-txt">
    <img class="ch-logo" src="${IMG}logo.png" alt="HealthyHand" width="1000" height="230">
    <h1>Find healthy choices for you.</h1>
    <p class="lede">An iOS app that helps people discover healthy restaurants, studios, parks and clinics near them, and earn rewards for every visit.</p>
  </div>
  <div class="ch-pic"><img src="${IMG}hero-pair.webp" alt="HealthyHand app: the Map and For You screens on two iPhones" width="1100" height="1218"></div>
</section>
<dl class="facts">
  <div><dt>Role</dt><dd>Design Lead</dd></div>
  <div><dt>Timeline</dt><dd>2025 – Present</dd></div>
  <div><dt>Platform</dt><dd>iOS app</dd></div>
  <div><dt>Focus</dt><dd>Research, UX/UI, accessibility, brand</dd></div>
</dl>
<section class="glance" aria-label="At a glance">
  <div><h2>The challenge</h2><p>Healthy living is hard to find. People who want to eat better and move more can’t easily discover the healthy places around them, or a reason to keep coming back.</p></div>
  <div><h2>What I did</h2><p>Led design end to end: research, personas, information architecture, interaction and visual design for the iOS app, accessibility, and the brand, including the launch film.</p></div>
  <div><h2>The result</h2><p>A friendly, map-first app that puts healthy restaurants, studios, parks and clinics in one place, and rewards people for every visit.</p></div>
</section>`,
  sections: [
    ['overview', 'Overview', 'Project overview', `
<div class="split film-split">
  <div>
    <p><b>HealthyHand</b> is more than a locator app; it’s a movement toward better living. By connecting people with health-focused businesses and services, we’re building a culture of wellness and sustainability. As the Design Lead for HealthyHand, I shaped the app’s experience and functionality. My responsibilities included:</p>
    ${list([['User research & insights', 'interviews, surveys and usability testing to understand the needs of health-conscious people.'],
      ['Experience design', 'wireframes, prototypes and high-fidelity designs for a seamless, engaging journey.'],
      ['Information architecture', 'structuring navigation and layout so finding wellness services feels intuitive.'],
      ['Accessibility & usability', 'an inclusive, easy-to-use platform that follows UX best practice and WCAG guidelines.']])}
  </div>
  <figure class="fig film"><video id="film" src="${B}assets/video/hh-film.mp4" poster="${IMG}film-poster.webp" autoplay muted loop playsinline preload="metadata" aria-label="HealthyHand launch film: a phone falls through a sky of healthy-place stickers into a helping hand"></video>
    <button class="snd" type="button" aria-pressed="false" data-snd><svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M4 9h4l5-4v14l-5-4H4z"/><path d="M16 9l5 6M21 9l-5 6" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg><span>Sound on</span></button>
    <figcaption>The HealthyHand launch film, which I directed and scored.</figcaption></figure>
</div>`],
    ['problem', 'The problem', 'Project overview', `
<div class="callout">
  <p class="big">Health-conscious people struggle to find reliable, convenient resources for discovering healthy places that support their goals.</p>
  <p>They have trouble locating fitness studios, healthy restaurants, wellness centers and other places that fit their preferences and needs. This lack of easily accessible information keeps them from making informed choices and getting the most out of their efforts to improve their health.</p>
</div>`],
    ['solution', 'The solution', 'Project overview', `
<p class="big">A people-centered platform that makes it easy to discover and reach a wide range of healthy places that support each person’s goals.</p>
<p>Through a seamless, intuitive experience, the app offers complete, up-to-date information on fitness studios, healthy eateries, wellness centers and more, wherever people are. By meeting the need for reliable, convenient resources, it helps people make informed decisions and fit healthy places into their lives, supporting their journey toward better health and well-being.</p>`],
    ['process', 'Design process', 'Project overview', `
<p>I followed a structured, research-driven process that kept people at the center while aligning with business goals.</p>
<div class="scroll-x">${diamond('#E3F3DD', '#9FD88F')}</div>`],
    ['research', 'User research', 'Empathize', `
<p>To begin, I ran research to understand the challenges people faced finding healthy places:</p>
${list([['User surveys', 'to understand people’s day-to-day needs and frustrations.'], ['Stakeholder workshops', 'with internal stakeholders, to align product goals with user needs.']])}
<h3>User surveys</h3>
<p>An online survey explored the experiences and preferences of people looking for healthy places such as gyms, restaurants and recreational areas, with responses across age groups and locations.</p>
<div class="stats">${STATS.map(([n, t]) => `<div class="stat"><b>${n}%</b><span>${t}</span><i style="--w:${n}%"></i></div>`).join('')}</div>
<h3>What we learned</h3>
${list([['Health matters.', 'Improving health is highly important to participants, and healthy restaurants, cafés and gyms are where they look first.'],
  ['Search and word of mouth.', 'People rely on search engines and recommendations from friends and family; variety and a clean environment drive their choices.'],
  ['The gap.', 'Lack of information and limited options are the main challenges, and the opportunity for both people and local businesses.']])}`],
    ['personas', 'User insight & personas', 'Define', `
<p>From the research, I identified two core personas:</p>
<div class="personas">${PERSONAS.map((p) => `<article class="persona">
  <img class="pphoto" src="${IMG}${p.photo}" alt="" loading="lazy" decoding="async" width="480" height="813">
  <div class="pbody"><header><h3>${esc(p.name)}</h3><p>${esc(p.meta)}</p></header>
  <p>${esc(p.bio)}</p>
  <div class="pgrid"><div><h4>Goals</h4><ul>${p.goals.map((g) => `<li>${esc(g)}</li>`).join('')}</ul></div><div><h4>Challenges</h4><ul>${p.pains.map((g) => `<li>${esc(g)}</li>`).join('')}</ul></div></div></div>
</article>`).join('')}</div>`],
    ['insights', 'From insight to design', 'Define', `
<p>Every core feature traces back to something we heard in research.</p>
<div class="i2d">${[
  ['88% look for healthy restaurants and cafés; 76% for gyms.', 'For You leads with curated healthy picks, and the map filters by category in one tap.'],
  ['People rely on search and word of mouth.', 'A search bar at the top of home, and a rating, drive time and distance on every card.'],
  ['Lack of information and limited options.', 'One place for restaurants, studios, parks and clinics, including free places to stay active.'],
  ['Hassan has little time to research.', 'Everything needed to decide is on the card, and favorites save places for later.'],
  ['Hannah wants a like-minded community.', 'Canopy brings local wellness events and workshops into one calendar.'],
].map(([i, d]) => `<div class="i2d-row"><p class="i"><span>We heard</span>${i}</p><span class="arrow" aria-hidden="true">→</span><p class="d"><span>So we designed</span>${d}</p></div>`).join('')}</div>`],
    ['ideate', 'Concept development', 'Ideate', `
<p>I led brainstorming sessions with the cross-functional team to generate solutions to the pain points we found. Together we developed these key features:</p>
<div class="features">${[['Map locator', 'Narrow down healthy places with popular prompts like parks, healthy food or clinics, or by search, to find a local spot for your healthy needs.'],
  ['Personalized search & filters', 'Filter by category, such as organic food, mental health services, fitness, holistic wellness and eco-friendly stores.'],
  ['Reviews & ratings', 'A trusted review system where people rate and share experiences, for transparency and credibility.'],
  ['Save & favorite', 'Bookmark favorite places and build lists of go-to wellness spots.'],
  ['Community', 'A social space to review healthy places people have visited, giving the community confidence to make informed decisions.']].map(([t, d]) => `<div class="feat"><h3>${t}</h3><p>${d}</p></div>`).join('')}</div>`],
    ['laws', 'Applying UX laws', 'Ideate', `
<p>Six UX laws guided HealthyHand’s usability, engagement and overall experience:</p>
<div class="laws">${LAWS.map(([l, s, d]) => `<div class="law"><h3>${l}</h3><p class="sub">${s}</p><p>${d}</p></div>`).join('')}</div>`],
    ['prototypes', 'Prototyping', 'Design', `
<p>I created wireframes and interactive prototypes in Figma to bring the concepts to life, from paper sketches to high-fidelity designs with accessibility built in: adjustable font sizes, color contrast and screen reader support.</p>
<h3>Paper wireframes</h3>
<p>I started on paper to map the core journey quickly: home with local picks, the map with category filters, a place’s details, directions, and the community, favorites and account screens.</p>
${fig(IMG + 'wireframes-paper.webp', 'Ten hand-drawn phone wireframes: home, map with filters, place details, directions, arrival, community, favorites, account and a business page', '')}
<h3>Low-fidelity prototypes</h3>
<p>I then built grayscale prototypes in Figma to test the flow and structure before visual design: category filters on the map, a place’s hours and directions, turn-by-turn guidance, and a friendly arrival message.</p>
${fig(IMG + 'wireframes-lofi.webp', 'Grayscale Figma wireframes of the HealthyHand flow on a green board', '', 'lofi')}`],
    ['final', 'High-fidelity design', 'Design', `
<p>The final designs for the three core experiences, with the key parts of each screen called out.</p>
${HIFI.map(([k, c]) => `<a class="zoom" href="${IMG}hifi-${k}.webp" target="_blank" rel="noopener" aria-label="Open the ${esc(c.split(':')[0])} screen full size">${fig(IMG + 'hifi-' + k + '.webp', 'HealthyHand ' + c, '', 'wide')}</a>`).join('')}
<p class="hint">Tap an image to see it full size.</p>`],
    ['takeaways', 'Takeaways', 'Reflect', `
<ol class="takeaways">${TAKEAWAYS.map(([t, d]) => `<li><h3>${t}</h3><p>${d}</p></li>`).join('')}</ol>`],
    ['reflection', 'Next steps & reflection', 'Reflect', `
<div class="split rev">
  ${fig(IMG + 'next-pair.webp', 'HealthyHand welcome screen and For You screen on two iPhones')}
  <div><p class="big">HealthyHand is more than a local discovery app; it’s proof that design can shape culture by making healthy living visible, local and inspiring.</p>
  <p>Next, I’m refining the bridge between the digital experience and people’s physical lives, turning every healthy choice into an opportunity for connection.</p>
  <a class="btn" href="https://www.healthyhand.co" target="_blank" rel="noopener">Visit healthyhand.co</a></div>
</div>`],
  ],
};

function casePage(c) {
  const toc = c.sections.map(([id, t]) => `<a href="#${id}">${t}</a>`).join('');
  const body = c.sections.map(([id, t, eyebrow, html]) => `<section class="cs" id="${id}" aria-labelledby="${id}-h">
  <p class="eyebrow">${eyebrow}</p><h2 id="${id}-h" style="color:${c.color}">${t}</h2>${html}
</section>`).join('\n');
  return `<!doctype html>
<html lang="en">
<head>
${head({ base: B, title: c.title, description: c.description, path: 'projects/' + c.key + '.html' })}
</head>
<body class="case" style="--c:${c.color}">
${nav({ base: B, current: c.key, solid: true })}
<main id="main">
${c.hero}
<div class="case-body">
  <nav class="toc" aria-label="On this page">${toc}</nav>
  <div class="case-main">
${body}
  </div>
</div>
${moreCases({ base: B, current: c.key })}
</main>
${foot({ base: B })}
<script>
/* Launch film: starts muted; the button turns the score on and off. */
(function () {
  var v = document.getElementById('film'), b = document.querySelector('[data-snd]');
  if (!v || !b) return;
  b.addEventListener('click', function () {
    v.muted = !v.muted; if (!v.muted) v.play();
    b.setAttribute('aria-pressed', String(!v.muted)); b.querySelector('span').textContent = v.muted ? 'Sound on' : 'Sound off';
  });
})();
/* Highlight the section in view in the side contents. */
(function () {
  var links = {}; document.querySelectorAll('.toc a').forEach(function (a) { links[a.getAttribute('href').slice(1)] = a; });
  if (!('IntersectionObserver' in window)) return;
  var io = new IntersectionObserver(function (es) { es.forEach(function (e) { if (e.isIntersecting) { Object.values(links).forEach(function (a) { a.classList.remove('on'); }); var a = links[e.target.id]; if (a) a.classList.add('on'); } }); }, { rootMargin: '-35% 0px -60% 0px' });
  document.querySelectorAll('.cs').forEach(function (s) { io.observe(s); });
})();
</script>
</body>
</html>
`;
}

const CASES = [HEALTHYHAND, require('./cases/paraillel')({ B, fig, zoom, list, quotes, facts, glance, cards, diamond, esc }), require('./cases/helper-bees')({ B, fig, zoom, list, quotes, facts, glance, cards, diamond, esc }), require('./cases/cli')({ B, fig, zoom, list, quotes, facts, glance, cards, diamond, esc }), require('./cases/tandem')({ B, fig, zoom, list, quotes, facts, glance, cards, diamond, esc }), require('./cases/tudum')({ B, fig, zoom, list, quotes, facts, glance, cards, diamond, esc })];
for (const c of CASES) { fs.writeFileSync(path.join(__dirname, 'projects', c.key + '.html'), casePage(c)); console.log('wrote projects/' + c.key + '.html'); }
