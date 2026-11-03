/* The About page, and holding pages for the case studies and Animation & Motion
   until their content is moved over.  node pages.js */
const fs = require('fs');
const path = require('path');
const { CASES, esc, head, nav, foot, moreCases, livingSky } = require('./common');

const shell = ({ base, current, title, description, file, body, solid = true }) => `<!doctype html>
<html lang="en">
<head>
${head({ base, title, description, path: file })}
</head>
<body class="${solid ? 'case' : ''}">
${nav({ base, current, solid })}
<main id="main">
${body}
</main>
${foot({ base })}
</body>
</html>
`;

const ABOUT = `<section class="sky about-page" aria-labelledby="about-h">
  ${livingSky({ count: 2, near: false })}
  <div class="about-in">
    <h1 id="about-h">About</h1>
    <p>As a <b>design thinker and product builder with 6 years of experience</b>, I craft digital experiences that merge people’s needs with real business impact.</p>
    <p>My design philosophy centers on <b>empathy</b> and a deep exploration of <b>context</b>, driven by a fascination with human behavior and the unspoken motivations and pain points that shape how people use technology.</p>
    <p>I believe in building <b>thoughtful, scalable and inclusive</b> products that don’t just solve problems, but genuinely connect with people and improve their well-being. My background in the arts sharpens this perspective: music, animation and short films inform how I think, solve problems and bring ideas to life. My goal is always to create experiences that are intuitive and deeply resonant.</p>
    <div class="hero-btns" style="justify-content:flex-start"><a class="btn solid" href="index.html#work">View my work</a></div>
  </div>
</section>`;

fs.writeFileSync(path.join(__dirname, 'about.html'), shell({ base: '', current: 'about', title: 'About · Ikedi J. Nwogu', description: 'About Ikedi (Justice) Nwogu, design thinker, product builder and storyteller.', file: 'about.html', body: ABOUT, solid: false }));

const soon = (base, name) => `<section class="soon"><p class="eyebrow">Case study</p><h1>${esc(name)}</h1><p>This page is being moved to the new site.</p><a class="btn" href="${base}index.html#work">Back to all work</a></section>`;
for (const [k, t, url] of CASES) {
  const f = path.join(__dirname, 'projects', k + '.html');
  // Outside projects get a page that forwards there, so any old link to it still works.
  if (url) { fs.writeFileSync(f, `<!doctype html><html lang="en"><head><meta charset="utf-8"><title>${esc(t)} · Ikedi J. Nwogu</title><meta http-equiv="refresh" content="0; url=${url}"><link rel="canonical" href="${url}"></head><body><p><a href="${url}">Open the ${esc(t)} project</a></p></body></html>\n`); continue; }
  if (['healthyhand', 'paraillel', 'helper-bees', 'cli', 'tandem', 'tudum'].includes(k)) continue;   // full case studies (projects.js)
  fs.writeFileSync(f, shell({ base: '../', current: k, title: t + ' · Ikedi J. Nwogu', description: t + ' case study by Ikedi J. Nwogu.', file: 'projects/' + k + '.html', body: soon('../', t) + moreCases({ base: '../', current: k }) }));
}
/* Animation & Motion Design. Each piece: title, year, tools, text, and its media (a video, or a still until the video arrives). */
const MOTION = [
  { title: 'HealthyHand Teaser', year: '2026', tools: 'Blender & After Effects',
    text: 'A cinematic 3D launch teaser for HealthyHand, combining playful animation, dynamic camera movements and branded visual storytelling to introduce the platform and build excitement for its launch.',
    media: `<video class="mv tall" src="assets/video/hh-film.mp4" poster="assets/img/hh/film-poster.webp" controls playsinline preload="metadata" aria-label="HealthyHand 3D launch teaser"></video>` },
  { title: 'HealthyHand Reel', year: '2026', tools: 'After Effects',
    text: 'A vertical Instagram Reel and TikTok in a sky, sticker-collage style: real app screens and die-cut paper stickers slap on and wobble in stop-motion over drifting clouds, cut to the beat of the soundtrack.',
    media: `<video class="mv tall" src="assets/video/hh-reel.mp4" poster="assets/img/motion/hh-reel.webp" controls playsinline preload="metadata" aria-label="HealthyHand Instagram Reel and TikTok, sticker-collage style"></video>` },
  { title: 'CTMD Studio Introduction', year: '2020', tools: 'After Effects, Photoshop',
    text: 'A sleek, high-impact introduction animation for CTMD Studio, combining smooth transitions, bold typography and layered motion graphics to establish a strong brand presence.',
    media: `<img class="mv" src="assets/img/motion/ctmd-intro.webp" alt="The CTMD Studio logo in red outline type on black" width="1280" height="720" loading="lazy" decoding="async">` },
  { title: 'Rotating Orb', year: '2024', tools: 'After Effects',
    text: 'A mesmerizing loop of an orb in constant rotation, experimenting with fluid motion, light refraction and textural depth to create a hypnotic visual experience.',
    media: `<video class="mv" src="assets/video/orb.mp4" poster="assets/img/motion/orb.webp" autoplay muted loop playsinline preload="metadata" aria-label="Looping animation of a glowing, rainbow-banded orb rotating on black"></video>` },
];
const MOTION_BODY = `<section class="mo-hero">
  <img class="cherub l" src="assets/img/motion/cherub-l.png" alt="" aria-hidden="true" width="144" height="139">
  <img class="cherub r" src="assets/img/motion/cherub-r.png" alt="" aria-hidden="true" width="170" height="148">
  <h1>Animation &amp; Motion Design:<br>Bringing Ideas to Life</h1>
  <p>Animation has always been an essential part of my creative journey as a designer. It lets me craft engaging, dynamic experiences that bring ideas to life in ways static visuals can’t. Whether through 3D modeling, motion graphics or visual effects, I use animation to tell compelling stories, enhance user experiences and push the boundaries of digital design.</p>
</section>
<div class="mo-list">${MOTION.map((m) => `<article class="mo">
  <div class="mo-txt"><h2>${esc(m.title)} <span>(${m.year})</span></h2><p class="tools">Tools: ${esc(m.tools)}</p><p>${esc(m.text)}</p></div>
  <div class="mo-media">${m.media}</div>
</article>`).join('')}</div>
<section class="mo-close"><p>Each of these projects reflects my passion for movement, storytelling and interactive engagement. Animation is more than a skill: it’s how I bring creative visions to life, bridging the gap between design and emotion.</p></section>`;
fs.writeFileSync(path.join(__dirname, 'motion.html'), shell({ base: '', current: 'motion', title: 'Animation & Motion Design · Ikedi J. Nwogu', description: 'Animation and motion design by Ikedi J. Nwogu: 3D, motion graphics and brand animation.', file: 'motion.html', body: MOTION_BODY }));
console.log('wrote about.html, motion.html and', CASES.length - 1, 'holding pages');
