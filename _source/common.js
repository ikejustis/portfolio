/* Pieces every page shares: <head>, the menu (with the Product Design
   dropdown), the footer and the "more case studies" strip.
   base: '' for pages at the site root, '../' for pages in projects/. */
const SITE = {
  name: 'Ikedi J. Nwogu',
  linkedin: 'https://www.linkedin.com/in/ikedi-j-nwogu-963736201/',
  url: 'https://www.ijnwogu.com',
};

/* The Product Design dropdown, in the same order as the projects on the home page.
   A third value is an outside link: that project opens it in a new tab instead of a page here. */
const CASES = [
  ['healthyhand', 'Healthy Hand'],
  ['paraillel', 'Paraillel'],
  ['cli', 'UT Health X CLI'],
  ['helper-bees', 'The Helper Bees'],
  ['geisinger', 'Geisinger', 'https://ikejustis.github.io/geisinger-redesign/'],
  ['tandem', 'Tandem'],
  ['tudum', 'Netflix Tudum Case Study'],
];

const caseLink = (base, [k, , url]) => url ? `href="${url}" target="_blank" rel="noopener"` : `href="${base}projects/${k}.html"`;
const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
const LI = '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M4.98 3.5a2.5 2.5 0 110 5 2.5 2.5 0 010-5zM3 9.5h4V21H3zM9.5 9.5h3.8v1.6h.06c.53-1 1.83-2.06 3.77-2.06 4.03 0 4.77 2.65 4.77 6.1V21h-4v-5.1c0-1.22-.02-2.78-1.7-2.78-1.7 0-1.96 1.33-1.96 2.7V21h-4z"/></svg>';
const CARET = '<svg viewBox="0 0 12 12" aria-hidden="true"><path d="M2.5 4.5 6 8l3.5-3.5" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>';

function head({ base, title, description, path = '' }) {
  return `<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${esc(title)}</title>
<meta name="description" content="${esc(description)}">
<meta property="og:title" content="${esc(title)}">
<meta property="og:description" content="${esc(description)}">
<meta property="og:image" content="${SITE.url}/assets/img/og.jpg">
<meta property="og:url" content="${SITE.url}/${path}">
<meta name="twitter:card" content="summary_large_image">
<link rel="icon" href="${base}assets/img/favicon.png">
<link rel="preload" href="${base}assets/fonts/urbanist-latin-500-normal.woff2" as="font" type="font/woff2" crossorigin>
<link rel="stylesheet" href="${base}css/site.css">`;
}

/* current: 'home' | a case key | 'motion' | 'about'. solid: white bar (case studies). */
function nav({ base, current, solid }) {
  const cur = (k) => (k === current ? ' aria-current="page"' : '');
  const inCases = CASES.some(([k]) => k === current);
  return `<a class="skip" href="#main">Skip to content</a>
<header class="nav${solid ? ' solid' : ''}">
  <a class="logo" href="${base}index.html" aria-label="Ikedi J. Nwogu, home"><img src="${base}assets/img/signature.png" alt="Ikedi J. Nwogu" width="631" height="227"></a>
  <nav aria-label="Main">
    <a href="${base}index.html"${cur('home')}>Home</a>
    <div class="dd">
      <button class="dd-btn${inCases ? ' on' : ''}" aria-expanded="false" aria-controls="dd-cases">Product Design${CARET}</button>
      <div class="dd-menu" id="dd-cases">${CASES.map((c) => `<a ${caseLink(base, c)}${cur(c[0])}>${esc(c[1])}</a>`).join('')}</div>
    </div>
    <a href="${base}motion.html"${cur('motion')}>Animation &amp; Motion Design</a>
    <a href="${base}about.html"${cur('about')}>About</a>
    <a class="li" href="${SITE.linkedin}" target="_blank" rel="noopener" aria-label="LinkedIn">${LI}</a>
  </nav>
</header>`;
}

/* Below a case study: the other case studies, as on the current site. */
function moreCases({ base, current }) {
  const others = CASES.filter(([k]) => k !== current);
  return `<section class="others" aria-labelledby="others-h">
  <h2 id="others-h" class="sec">More case studies</h2>
  <p>${others.map((c) => `<a ${caseLink(base, c)}>${esc(c[1])}</a>`).join('<span aria-hidden="true"> / </span>')}</p>
</section>`;
}

function foot({ base }) {
  return `<footer class="foot">
  <img src="${base}assets/img/signature.png" alt="Ikedi J. Nwogu" width="631" height="227">
  <p><a class="foot-li" href="${SITE.linkedin}" target="_blank" rel="noopener">LinkedIn</a></p>
  <p>© <span id="yr">2026</span> Ikedi Nwogu. All rights reserved.</p>
</footer>
<script>
document.getElementById('yr').textContent = new Date().getFullYear();
/* Every page opens at the top: clicking a project, in the list or the dropdown, starts its case study
   from the beginning. Links to a section (#…) and the browser's Back button keep their place. */
(function () {
  var entry = performance.getEntriesByType && performance.getEntriesByType('navigation')[0];
  if (location.hash || (entry && entry.type !== 'navigate')) return;
  /* Keep putting it back at the top while the page settles, until the visitor scrolls themselves. */
  var moved = false;
  ['wheel', 'touchstart', 'keydown'].forEach(function (t) { addEventListener(t, function () { moved = true; }, { passive: true, once: true }); });
  function toTop() { if (!moved) window.scrollTo({ top: 0, left: 0, behavior: 'instant' }); }
  toTop(); addEventListener('load', function () { toTop(); setTimeout(toTop, 150); setTimeout(toTop, 450); });
})();
/* The logo goes to the top of the home page. On the home page itself it glides back up. */
(function () {
  var logo = document.querySelector('.logo');
  if (!logo) return;
  logo.addEventListener('click', function (e) {
    if (new URL(logo.href, location.href).pathname !== location.pathname) return;
    e.preventDefault();
    var still = matchMedia('(prefers-reduced-motion: reduce)').matches;
    window.scrollTo({ top: 0, behavior: still ? 'instant' : 'smooth' });
    if (location.hash) history.replaceState(null, '', location.pathname + location.search);
  });
})();
/* Product Design dropdown: opens on hover (desktop) and on tap or Enter;
   Escape or a click elsewhere closes it. */
(function () {
  var dd = document.querySelector('.dd'), btn = dd && dd.querySelector('.dd-btn');
  if (!btn) return;
  function set(open) { dd.classList.toggle('open', open); btn.setAttribute('aria-expanded', open); }
  btn.addEventListener('click', function () { set(!dd.classList.contains('open')); });
  document.addEventListener('click', function (e) { if (!dd.contains(e.target)) set(false); });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape' && dd.classList.contains('open')) { set(false); btn.focus(); } });
})();
/* Living sky parallax: each cloud layer moves with the mouse and the scroll by its depth. */
(function () {
  var layers = [].slice.call(document.querySelectorAll('.skyfx .layer'));
  if (!layers.length || matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  var mx = 0, my = 0, queued = false;
  function apply() {
    queued = false;
    layers.forEach(function (l) {
      var d = +l.dataset.depth, top = l.parentNode.getBoundingClientRect().top;
      l.style.transform = 'translate3d(' + (mx * d * 28) + 'px,' + (my * d * 16 + Math.min(0, top) * d * .35) + 'px,0)';
    });
  }
  function queue() { if (!queued) { queued = true; requestAnimationFrame(apply); } }
  addEventListener('pointermove', function (e) { mx = e.clientX / innerWidth - .5; my = e.clientY / innerHeight - .5; queue(); }, { passive: true });
  addEventListener('scroll', queue, { passive: true });
})();
</script>`;
}

/* Living sky: three layers of clouds sail across a sky section at different speeds and depths,
   and shift with the mouse and the scroll (script in foot). count: clouds per layer (1–3).
   bank: a row of clouds along the bottom edge that melts the section into the white page. */
function livingSky({ base = '', count = 3, near = true, bank = false } = {}) {
  const cloud = (n, top, w, dur, delay, o) => `<img class="dc" src="${base}assets/img/sky/cloud-${n}.webp" alt="" style="--top:${top};--w:${w}px;--dur:${dur}s;--delay:${delay}s;--o:${o}">`;
  const row = (list) => list.slice(0, count).map((c) => cloud(...c)).join('');
  const far = [[0, '14%', 260, 140, -20, .55], [3, '30%', 220, 160, -95, .45], [5, '8%', 200, 150, -60, .4]];
  const mid = [[1, '22%', 420, 95, -10, .85], [2, '48%', 380, 110, -70, .8], [4, '12%', 340, 100, -45, .75]];
  const nearRow = [[0, '74%', 640, 70, -30, .95], [2, '80%', 560, 80, -5, .9]];
  return `<div class="skyfx" aria-hidden="true">
  <div class="layer far" data-depth=".25">${row(far)}</div>
  <div class="layer mid" data-depth=".6">${row(mid)}</div>${near ? `
  <div class="layer near" data-depth="1">${row(nearRow)}</div>` : ''}</div>${bank ? `
<div class="bank" aria-hidden="true">${[0, 2, 1, 4, 0].map((n, i) => `<img src="${base}assets/img/sky/cloud-${n}.webp" alt="" style="--i:${i}">`).join('')}</div>` : ''}`;
}

module.exports = { SITE, CASES, esc, head, nav, foot, moreCases, livingSky };
