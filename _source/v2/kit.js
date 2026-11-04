/* Pieces for the case study rewrite mockups, on top of the live site's own helpers (site/projects.js). */
const site = require('../projects.js');
const { esc } = site;

/* Text that needs Ikedi's confirmation before it goes live: highlighted in yellow, with the reason on hover. */
const cf = (text, why = 'Confirm this is accurate before publishing') => `<mark class="cf" title="${esc(why)}">${text}</mark>`;

/* Section eyebrow for the 7-part structure: "03 · My role & ownership". */
const num = (n, label) => `<span class="n">${String(n).padStart(2, '0')}</span> ${label}`;

/* My role & ownership: three columns of who did what. cols: [[heading, [items]]] */
const own = (cols) => `<div class="own">${cols.map(([h, items]) => `<div><h3>${h}</h3><ul>${items.map((i) => `<li>${i}</li>`).join('')}</ul></div>`).join('')}</div>`;

/* Evidence → decision rows (reuses the live site's .i2d style). */
const i2d = (rows, left = 'What we learned', right = 'What I changed') => `<div class="i2d">${rows.map(([i, d]) => `<div class="i2d-row"><p class="i"><span>${left}</span>${i}</p><span class="arrow" aria-hidden="true">→</span><p class="d"><span>${right}</span>${d}</p></div>`).join('')}</div>`;

/* A numbered loop or flow of steps, drawn as connected cards. steps: [[title, text]] */
const flow = (steps, label) => `<ol class="flowx" aria-label="${esc(label)}">${steps.map(([t, d], i) => `<li><b>${i + 1}</b><h3>${t}</h3><p>${d}</p></li>`).join('')}</ol>`;

/* Outcome cards: [value, label, how it was measured] */
const outcomes = (rows) => `<div class="outc">${rows.map(([v, l, how]) => `<div><b>${v}</b><span>${l}</span><em>${how}</em></div>`).join('')}</div>`;

/* Before / after pair of short descriptions. */
const beforeAfter = (rows) => `<div class="ba">${rows.map(([t, before, after]) => `<article><h3>${t}</h3><div class="ba-in"><p class="b"><span>Before</span>${before}</p><p class="a"><span>After</span>${after}</p></div></article>`).join('')}</div>`;

/* A note to Ikedi inside the draft (not part of the final page). */
const note = (html) => `<aside class="dnote"><b>Draft note</b>${html}</aside>`;

module.exports = { ...site, cf, num, own, i2d, flow, outcomes, beforeAfter, note };
