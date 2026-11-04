/* Live build of the four rewritten case studies (Paraillel, HealthyHand, UT Health, Tandem), run from projects.js.
   Builds each rewritten case study by KEEPING every section of the live page and adding the new ones around it.
   Each section gets its phase number (01–07); live sections keep their own process label (Empathize, Define, Ideate…).
   'live' = a section from the live page, 'new' = a section from the rewrite draft (cases/*.js). */
const k = require('./kit');
const site = require('../projects.js');

const PHASES = ['', 'Project introduction', 'The problem', 'My role &amp; approach', 'Research &amp; insights', 'Design decisions', 'Final experience', 'Outcomes &amp; reflection'];

/* Plans: [source, section id, phase, fix?]. Order is the page order. */
const PLANS = {
  paraillel: [
    ['live', 'overview', 1], ['live', 'problem', 2], ['new', 'problem', 2, 'par-two'], ['live', 'solution', 2],
    ['new', 'role', 3], ['live', 'process', 3],
    ['live', 'research', 4], ['live', 'personas', 4],
    ['live', 'ideation', 5], ['new', 'decisions', 5], ['live', 'wireframes', 5], ['live', 'testing', 5],
    ['live', 'final', 6], ['live', 'system', 6],
    ['new', 'outcomes', 7], ['live', 'takeaways', 7], ['live', 'next', 7, 'par-next'],
  ],
  healthyhand: [
    ['live', 'overview', 1], ['live', 'problem', 2], ['live', 'solution', 2],
    ['new', 'role', 3], ['live', 'process', 3], ['new', 'system', 3],
    ['live', 'research', 4], ['live', 'personas', 4], ['live', 'insights', 4],
    ['live', 'ideate', 5], ['live', 'laws', 5], ['live', 'prototypes', 5], ['new', 'build', 5, 'hh-build'],
    ['live', 'final', 6],
    ['live', 'takeaways', 7], ['live', 'reflection', 7],
  ],
  cli: [
    ['live', 'overview', 1], ['new', 'context', 2, 'cli-context'],
    ['new', 'role', 3], ['new', 'research', 4], ['new', 'decisions', 5],
    ['live', 'accomplishments', 7],
  ],
  tandem: [
    ['live', 'challenge', 1], ['live', 'problem', 2], ['new', 'problem', 2, 'tan-who'], ['live', 'solution', 2, 'tan-solution'],
    ['new', 'role', 3], ['live', 'process', 3],
    ['live', 'research', 4], ['live', 'personas', 4],
    ['live', 'ideate', 5], ['live', 'wireframe', 5], ['new', 'workflows', 5],
    ['live', 'hifi', 6],
    ['live', 'next', 7, 'tan-next'],
  ],
};

/* Text fixes: confirmed changes to live sections, and trims where a new section repeats a live one. */
const cut = (h, re) => { const out = h.replace(re, ''); if (out === h) throw new Error('fix did not apply: ' + re); return out; };
const FIX = {
  'par-next': (t, h) => [t, h.replace('The project supported Paraillel’s business goals by <b>reducing teacher admin workload by 30%</b>, boosting student engagement and increasing daily use across classrooms.', 'The project supported Paraillel’s business goals by boosting student engagement and increasing daily use across classrooms.')],
  'hh-build': (t, h) => ['Design system &amp; build', cut(h, /<div class="journey4">[\s\S]*?<\/div>\n/)],
  'par-two': () => ['Two sides of the problem', null],
  'cli-context': (t, h) => [t, cut(h, /<p>The Children’s Learning Institute advances learning and health outcomes for children through research, resources, clinical programs and services\. /).replace(/^\s*I worked across/, '<p>I worked across')],
  'tan-who': () => ['Who Tandem serves', null],
  'tan-solution': (t, h) => [t, cut(h, /<h3>My impact<\/h3>\s*<p>[\s\S]*?<\/p>/)],
  'tan-next': (t, h) => [t, h.replace('<p>The redesign met key business goals: <b>patient engagement up 25%</b>, <b>administrative workload down 15%</b>, and appointment completion rates significantly improved.</p>', '<p>The redesign made booking, provider messaging and medical records easier to reach for patients, while easing the load on the practice’s staff.</p>')],
};

/* Trims inside the new sections, so they add to the live page instead of repeating it. */
function trimNew(key, id, html) {
  let h = html.replace(/<aside class="dnote">[\s\S]*?<\/aside>/g, '');
  if (key === 'paraillel' && id === 'problem') h = cut(h, /<p class="big">In underserved Detroit schools[^<]*<\/p>/);
  if (key === 'paraillel' && id === 'decisions') h = cut(h, /<h3>From sketch to wireframe<\/h3>[\s\S]*$/);
  if (key === 'paraillel' && id === 'outcomes') h = cut(h, /<div class="split">\s*<div><h3>What I learned[\s\S]*$/);
  return h;
}

function build(key, B) {
  /* B: path back to the site root from projects/. */
  const live = site.CASES.find((c) => c.key === key);
  const draft = require('./cases/' + key)(B, k);
  const pick = (src, id) => (src === 'live' ? live : draft).sections.find((s) => s[0] === id) || (() => { throw new Error(`${key}: no ${src} section ${id}`); })();
  const seen = {};
  const sections = PLANS[key].map(([src, id, phase, fix]) => {
    const [, title, eyebrow, html0] = pick(src, id);
    let t = title, h = src === 'new' ? trimNew(key, id, html0) : html0;
    if (fix) { const [t2, h2] = FIX[fix](t, h); t = t2; if (h2 !== null) h = h2; }
    /* The eyebrow: phase number, then the live page's own process label, and a tag on what's new or updated. */
    const own = src === 'live' ? eyebrow.replace(/<[^>]+>/g, '') : '';
    const label = own && own !== PHASES[phase].replace('&amp;', '&') ? ` · ${own}` : '';
    const tag = '';
    let sid = (src === 'new' && live.sections.some((s) => s[0] === id)) ? id + '-new' : id;
    seen[sid] = (seen[sid] || 0) + 1; if (seen[sid] > 1) sid += seen[sid];
    return { sid, title: t, eyebrow: `${k.num(phase, PHASES[phase])}${label}${tag}`, html: h, phase };
  });
  const c = { ...draft, sections: sections.map((s) => [s.sid, s.title, s.eyebrow, s.html]) };
  let page = k.casePage(c);
  /* Side contents grouped by phase, so a long case study still scans in seven steps. */
  const groups = [];
  for (const s of sections) { const g = groups[groups.length - 1]; if (g && g.phase === s.phase) g.items.push(s); else groups.push({ phase: s.phase, items: [s] }); }
  const toc = groups.map((g) => `<p class="toc-ph"><span>${String(g.phase).padStart(2, '0')}</span>${PHASES[g.phase]}</p>${g.items.map((s) => `<a href="#${s.sid}">${s.title}</a>`).join('')}`).join('');
  page = page.replace(/<nav class="toc" aria-label="On this page">[\s\S]*?<\/nav>/, `<nav class="toc" aria-label="On this page">${toc}</nav>`);
  return { page, counts: { live: sections.length - PLANS[key].filter((p) => p[0] === 'new').length, added: PLANS[key].filter((p) => p[0] === 'new').length, liveTotal: live.sections.length } };
}

module.exports = { build, PLANS };
