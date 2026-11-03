/* Builds the portfolio's home page from the project list below.
   node build.js → index.html. Case studies: node projects.js */
const fs = require('fs');
const path = require('path');

const { SITE, esc, head, nav, foot, livingSky } = require('./common');

/* meta: role · when · what. chips: outcomes and focus, only what the case study or resume backs up. */
const PROJECTS = [
  { key: 'healthyhand', tag: 'Startup', color: '#2E7D32', title: 'Lending a Healthy Hand: Making Health & Wellness Accessible',
    meta: ['Design Lead', '2025 – Present', 'iOS app + partner dashboard'],
    body: ['I lead design for HealthyHand, a mobile discovery platform that bridges the gap between health-conscious people and local wellness businesses.',
      'Members find curated cafés, studios, parks and clinics through personalized onboarding and a map, and earn rewards for every visit, while small businesses get the visibility to compete and grow in their local markets.'],
    chips: ['0-to-1 product', 'Health & wellness'],
    img: 'healthyhand.webp', alt: 'HealthyHand For You and Map screens on two iPhones in front of the partner business dashboard',
    links: [['View Project', 'projects/healthyhand.html'], ['View Site', 'https://www.healthyhand.co']] },
  { key: 'paraillel', tag: 'AI startup', color: '#1E6FD9', title: 'Boosting Teacher Efficiency & Student Potential With AI-Powered Classroom Tools',
    meta: ['Lead Product Designer', '2023 – 2024', 'AI ed-tech web app'],
    body: ['Designed the core AI-powered tools at Paraillel, an ed-tech startup focused on personalized learning, creating unique learning paths for every student while boosting teacher efficiency.'],
    chips: ['+22% task success', '−30% user errors', '0-to-1 product'],
    video: 'paraillel.mp4', img: 'paraillel.webp', alt: 'Walkthrough of the Paraillel teacher dashboard and assignments on a laptop', links: [['View Project', 'projects/paraillel.html']] },
  { key: 'helperbees', tag: 'Healthcare', color: '#C08A00', title: 'Supporting Senior Independence Through In-Home Care Design',
    meta: ['Lead Product Designer', 'In-home care', 'Mobile app'],
    body: ['A personalized, accessible recommendation experience that connects older adults and their families with trusted aging-in-place products, bridging payer goals with the real needs of seniors.'],
    chips: ['Personalized recommendations', 'Older adults & caregivers', 'Accessibility'],
    tall: true, video: 'hb-flow.mp4', img: 'hb/flow-poster.webp', alt: 'The Helper Bees recommendations questionnaire on an iPhone, step by step', links: [['View Project', 'projects/helper-bees.html']] },
  { key: 'geisinger', tag: 'Patient care', color: '#0A8BC9', title: 'From Complexity to Clarity: Improving the Patient Experience',
    meta: ['UX redesign', 'Healthcare', 'Responsive web'],
    body: ['A redesign of Geisinger’s website for patients seeking care across Pennsylvania: simpler navigation, better mobile usability and WCAG 2.2 accessibility, so it’s easier to find care, log in and trust the system.'],
    chips: ['WCAG 2.2', 'Mobile usability', 'Simpler navigation'],
    img: 'geisinger.webp', alt: 'Redesigned Geisinger website on a desktop monitor', links: [['View Project', 'https://ikejustis.github.io/geisinger-redesign/']] },
  { key: 'cli', tag: 'Education & health', color: '#B5643C', title: 'UT Health’s UX Initiatives in the Education and Clinical Setting',
    meta: ['Senior UX Designer', 'UT Health · 2024 – 2025', 'Education & clinical web'],
    body: ['Led design and research initiatives for the CLI Engage platform, using human-centered design and testing to create accessible tools that improved engagement and satisfaction for educators and parents.'],
    chips: ['+20% usability & adoption', 'WCAG 2.2 design system', 'Research & testing'],
    img: 'cli.webp', alt: 'Children’s Learning Institute website on an iMac', links: [['View Project', 'projects/cli.html']] },
  { key: 'tandem', tag: 'Mental health', color: '#5F63B8', title: 'Designing Patient-Centered Mental Health Experiences',
    meta: ['UX research & strategy', 'Mental health', 'Website'],
    body: ['Redesigned Tandem’s digital experience, leading user research, UX strategy and accessibility work for a patient-centered platform that improved engagement and streamlined mental healthcare operations.'],
    chips: ['User research', 'Accessibility', 'Patient-centered'],
    img: 'tandem.webp', alt: 'Tandem Psychiatric website on a laptop', links: [['View Project', 'projects/tandem.html']] },
];
const MORE = [
  { key: 'tudum', tag: 'Entertainment', color: '#C8102E', title: 'Netflix Tudum Case Study', meta: ['UX case study', 'Streaming'],
    body: ['Tudum’s strengths, weaknesses, and the future of streaming fan events.'],
    img: 'tudum.webp', alt: 'Netflix Tudum site on a laptop', links: [['View Project', 'projects/tudum.html']] },
  { key: 'ctmd', tag: 'Creative brand', color: '#E0283F', title: 'CTMD Studio: Closer To My Dreams', meta: ['Brand & storytelling', 'Film & fashion'],
    body: ['A creative brand rooted in the story of a young boy chasing his dreams. I led the design and storytelling, bridging film, fashion and emotion into one brand experience.'],
    img: 'ctmd.webp', alt: 'CTMD Studio website on a desktop monitor', links: [['View Site', 'https://www.ctmdstudio.com/#home-section']] },
];

const ext = (href) => /^https?:/.test(href) ? ' target="_blank" rel="noopener"' : '';

const meta = (p) => '<p class="meta">' + p.meta.map(esc).join('<span aria-hidden="true">·</span>') + '</p>';
const chips = (p) => p.chips ? '<ul class="chips">' + p.chips.map((c) => '<li>' + esc(c) + '</li>').join('') + '</ul>' : '';
const btns = (p) => '<div class="btns">' + p.links.map(([t, h]) => '<a class="btn" href="' + h + '"' + ext(h) + '>' + esc(t) + '</a>').join('') + '</div>';
/* An animated walkthrough (p.video) plays muted on a loop in place of the still image. */
const img = (p, cls) => p.video ? '<video class="shot' + (p.tall ? ' tall' : '') + '" src="assets/video/' + p.video + '" poster="assets/img/' + p.img + '" autoplay muted loop playsinline preload="metadata" aria-label="' + esc(p.alt) + '"></video>' : '<img class="' + (cls || ('shot' + (p.tall ? ' tall' : ''))) + '" src="assets/img/' + p.img + '" alt="' + esc(p.alt) + '" loading="lazy" decoding="async">';
const tag = (p) => p.tag ? '<p class="pill" style="--c:' + p.color + '">' + esc(p.tag) + '</p>' : '';
const text = (p, h) => tag(p) + '<' + h + ' class="ttl" style="color:' + p.color + '">' + esc(p.title) + '</' + h + '>' + meta(p) + p.body.map((b) => '<p class="body">' + esc(b) + '</p>').join('') + chips(p) + btns(p);

/* Layout A and B: alternating rows. C: grid of tiles. */
/* The featured project (HealthyHand) gets the full width: its text in two columns, then the image across the page. */
const featureText = (p) => '<div class="ft-a">' + tag(p) + '<h3 class="ttl" style="color:' + p.color + '">' + esc(p.title) + '</h3>' + meta(p) + '</div><div class="ft-b">' + p.body.map((b) => '<p class="body">' + esc(b) + '</p>').join('') + chips(p) + btns(p) + '</div>';
const rows = () => PROJECTS.map((p, i) => p.feature
  ? '<article class="row feature" id="' + p.key + '"><div class="txt">' + featureText(p) + '</div><div class="pic">' + img(p) + '</div></article>'
  : '<article class="row' + (i % 2 ? ' flip' : '') + '" id="' + p.key + '"><div class="txt">' + text(p, 'h3') + '</div><div class="pic">' + img(p) + '</div></article>').join('');
const tiles = () => PROJECTS.map((p, i) => '<article class="tile' + (i < 2 ? ' big' : '') + '" id="' + p.key + '" style="--c:' + p.color + '"><div class="pic">' + img(p) + '</div><div class="txt">' + text(p, 'h3') + '</div></article>').join('');
const more = () => '<section class="more" aria-labelledby="more-h"><h2 id="more-h" class="sec">More work</h2><div class="more-grid">' +
  MORE.map((p) => '<article class="mini" id="' + p.key + '"><div class="pic">' + img(p) + '</div><div class="txt">' + text(p, 'h3') + '</div></article>').join('') + '</div></section>';

function page(v) {
  const work = v === 'c' ? '<div class="tiles">' + tiles() + '</div>' : rows();
  return `<!doctype html>
<html lang="en">
<head>
${head({ base: '', title: 'Ikedi J. Nwogu · Design thinker, product builder, storyteller', description: 'Ikedi (Justice) Nwogu builds products that turn complex challenges into intuitive, meaningful experiences.' })}
</head>
<body class="v-${v}">
${nav({ base: '', current: 'home' })}
<section class="sky hero" aria-label="Introduction">
  ${livingSky({ bank: true })}
  <div class="hero-in">
    <p class="eyebrow">Hi, I’m Ikedi</p>
    <h1>Design thinker.<br>Product builder.<br>Storyteller.</h1>
    <p class="lede">Building products that turn complex challenges into intuitive, meaningful experiences.</p>
    <div class="hero-btns"><a class="btn solid" href="#work">View my work</a></div>
  </div>
  <a class="scroll" href="#work">scroll down to view work<span aria-hidden="true">⌄</span></a>
</section>
<main id="main" class="work">
  <span id="work" class="anchor"></span>
  <h2 class="sec">Selected work</h2>
  ${work}
  ${more()}
  <section class="about" aria-labelledby="about-h">
    <h2 id="about-h" class="sec">About</h2>
    <p>I’m a design thinker and product builder with 5+ years across healthcare, education and consumer products. I start with empathy and context, understanding the behavior and unspoken pain points behind how people use technology, and build thoughtful, scalable, inclusive products that improve people’s well-being. Music, animation and short films keep my thinking creative.</p>
    <a class="btn" href="about.html">More about me</a>
  </section>
</main>
<section class="sky contact" aria-labelledby="contact-h">
  ${livingSky({ count: 2, near: false })}
  <h2 id="contact-h">Let’s build something people love.</h2>
  <p>Open to product, design and creative technology roles.</p>
  <div class="hero-btns"><a class="btn solid" href="${SITE.linkedin}" target="_blank" rel="noopener">Connect on LinkedIn</a></div>
</section>
${foot({ base: '' })}
</body>
</html>
`;
}

const out = process.argv[2] === 'mocks' ? ['a', 'b', 'c'].map((v) => [v + '.html', v]) : [['index.html', process.argv[2] || 'a']];
for (const [f, v] of out) { fs.writeFileSync(path.join(__dirname, f), page(v)); console.log('wrote', f); }
