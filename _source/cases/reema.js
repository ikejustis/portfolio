/* Sounds of Reema: a UX case study in the same 7-part structure as the rewritten case studies, written for
   lead UX / senior product design roles: systems-level thinking, end-to-end ownership and measurable impact.
   Every number is either from her own bio or measured on the old site and the redesign (desktop 1440px, phone 390px).
   The step helpers mirror v2/kit.js (num, own, i2d, flow, outcomes, beforeAfter), defined here because kit.js loads projects.js. */
module.exports = ({ B, fig, list, facts, glance, cards, esc }) => {
  const IMG = B + 'assets/img/reema/';
  const C = '#D6336C';
  const num = (n, label) => `<span class="n">${String(n).padStart(2, '0')}</span> ${label}`;
  const own = (cols) => `<div class="own">${cols.map(([h, items]) => `<div><h3>${h}</h3><ul>${items.map((i) => `<li>${i}</li>`).join('')}</ul></div>`).join('')}</div>`;
  const i2d = (rows, left, right) => `<div class="i2d">${rows.map(([i, d]) => `<div class="i2d-row"><p class="i"><span>${left}</span>${i}</p><span class="arrow" aria-hidden="true">→</span><p class="d"><span>${right}</span>${d}</p></div>`).join('')}</div>`;
  const flow = (steps, label) => `<ol class="flowx" aria-label="${label}">${steps.map(([t, d], i) => `<li><b>${i + 1}</b><h3>${t}</h3><p>${d}</p></li>`).join('')}</ol>`;
  const outcomes = (rows) => `<div class="outc">${rows.map(([v, l, how]) => `<div><b>${v}</b><span>${l}</span><em>${how}</em></div>`).join('')}</div>`;
  const beforeAfter = (rows) => `<div class="ba">${rows.map(([t, before, after]) => `<article><h3>${t}</h3><div class="ba-in"><p class="b"><span>Before</span>${before}</p><p class="a"><span>After</span>${after}</p></div></article>`).join('')}</div>`;
  /* A table with a header row and labelled rows, in the site's journey-map style. */
  const table = (head, rows, label) => `<div class="scroll-x"><table class="jmap ctable" aria-label="${label}"><thead><tr>${head.map((h) => `<th scope="col">${h}</th>`).join('')}</tr></thead><tbody>${rows.map(([h, ...cells]) => `<tr><th scope="row">${h}</th>${cells.map((c) => `<td>${c}</td>`).join('')}</tr>`).join('')}</tbody></table></div>`;

  return {
    key: 'reema', color: C,
    title: 'Sounds of Reema case study · Ikedi J. Nwogu',
    description: 'A UX case study: redesigning LA DJ Reema’s website around one business goal, more bookings, from audit and journey mapping to a design system and a responsive site.',
    hero: `<section class="case-hero" style="--c:${C}">
  <div class="ch-txt">
    <p class="eyebrow num-eyebrow">${num(1, 'Project introduction')}</p>
    <h1 class="long" style="color:#17120F">Redesigning a DJ’s website around one business goal: more bookings.</h1>
    <p class="lede">Reema is a Los Angeles DJ, “a sound selector”, and an affiliate of How a Sunset Sounds. She reached out because she wanted more bookings. I owned the redesign end to end: auditing her site, mapping how bookers reach her, building a small design system, and shipping a responsive site with a plan to measure the result.</p>
    <p><a class="btn" href="https://soundsofreema.com/" target="_blank" rel="noopener">View Site</a></p>
  </div>
  <div class="ch-pic"><img src="${IMG}hero.webp" alt="The redesigned Sounds of Reema site on a laptop and a phone: taped polaroids of her sets around her name" width="1400" height="818"></div>
</section>
${facts([['Client', 'Reema, DJ (Los Angeles)'], ['Business goal', 'More booking inquiries'], ['My role', 'Lead product designer, solo and end to end'], ['Shipped', 'Design system and a responsive site']])}
${glance([
  ['The problem', 'Her site was where bookers decided, but it hid what they decide on: no photos on the first screen, small links, and a Book button that disappeared once you scrolled.'],
  ['What I owned', 'Research, journey mapping, three design directions, the design system, the front-end build, testing across screen sizes, and the launch measurement plan.'],
  ['The impact', 'Measured on the same screens: 0 → 4 photos on the first screen, a Book button visible on every scroll, and header links 42% larger. Booking inquiries are tracked from launch.'],
])}`,
    sections: [
      ['problem', 'A conversion problem, not a styling problem', num(2, 'The problem'), `
<p class="big">Bookings are Reema’s income, and her website is where a booker decides whether to reach out. The site had the right content but didn’t move anyone toward booking.</p>
<div class="two-sided">
  <article><h3>Bookers</h3><p>Promoters, venues, brands and private hosts. Many find her through Instagram or TikTok, often on a phone. They judge the vibe in seconds, want to hear a set, then need a fast way to reach her.</p></article>
  <article><h3>Reema</h3><p>Wants more bookings without changing how she works: bookings arrive by email and Instagram DM, and she updates her own links, flyers and gigs.</p></article>
</div>
<h3>What success means</h3>
${list([['More booking inquiries', 'per month, by email and Instagram DM, compared with before launch.'], ['More visitors reaching out:', 'Book Reema, Copy email and DM clicks as a share of visits.'], ['No new work for Reema:', 'she keeps updating the site the way she does today.']])}`],
      ['role', 'Owning it end to end', num(3, 'My role &amp; approach'), `
${own([
  ['I owned', ['The audit of her live site on desktop and phone', 'The booker journey map and the problem definition', 'Three design directions and the decision between them', 'The design system, the front-end build and testing across screen sizes', 'The launch measurement plan']],
  ['I worked from', ['Reema’s goal: more bookings', 'Her real content: bio, 3 YouTube sets, SoundCloud, 17 event flyers and her set photos', 'How she takes bookings today: email and Instagram DMs']],
  ['I balanced', ['Bookers: see the vibe, hear a set, reach her fast', 'Reema: a site that feels like her and stays easy to update', 'Brand personality against looking professional enough to book']],
])}
<h3>How I worked</h3>
${flow([
  ['Discover', 'Audited her live site, inventoried her content, and walked the booking path on desktop and phone.'],
  ['Define', 'Mapped the booker’s journey, named where it broke, and set the success measures.'],
  ['Design &amp; build', 'Explored three directions on her real content, then built the chosen one on a shared design system.'],
  ['Validate &amp; iterate', 'Measured the redesign against the old site on the same screens, and refined it round by round.'],
], 'The process: discover, define, design and build, validate and iterate')}`],
      ['research', 'Mapping how a booker gets to “yes”', num(4, 'Research &amp; insights'), `
<dl class="facts in"><div><dt>Methods</dt><dd>Heuristic review, content audit, journey mapping, measured walkthroughs</dd></div><div><dt>Devices</dt><dd>Desktop (1440px) and phone (390px)</dd></div><div><dt>Content audited</dt><dd>Bio, 3 YouTube sets, SoundCloud, 17 flyers, socials</dd></div><div><dt>Goal</dt><dd>More booking inquiries</dd></div></dl>
<h3>The booker journey, and where the old site broke it</h3>
${table(['Stage', 'Booker’s goal', 'On the old site', 'Opportunity'], [
  ['1 · Arrive', 'Land from her Instagram or TikTok', 'Her name in large type on white, with no photos on the first screen', 'Lead with her real set photos'],
  ['2 · Feel the vibe', 'See her play, see the crowd', 'The first photo sat below the fold, after the bio', 'Show the crowd and the decks immediately'],
  ['3 · Hear her', 'Play a set or a mix', 'Sets were there, but the SoundCloud button was a plain square', 'Make listening an obvious, inviting action'],
  ['4 · Trust her', 'Check she can carry a room', 'Her strongest numbers sat inside long bio paragraphs', 'Pull proof out where it’s seen'],
  ['5 · Reach out', 'Contact her fast, from wherever they are', 'Book Reema was at the top only; mid-page, no way to book was on screen', 'Keep booking one click away on every scroll'],
], 'Booker journey map: stages, goals, problems on the old site and opportunities')}
<div class="split">${fig(IMG + 'before-laptop.webp', 'The previous Sounds of Reema homepage: her name in large type on white, with two small square buttons')}<div>
<h3>Four insights</h3>
${list([['Her photos are the pitch,', 'but none were on the first screen.'], ['The calls to action blended in:', '12px header links and plain square buttons.'], ['Her proof was buried:', 'a 1,500+ crowd at How a Sunset Sounds and 300+ at her series Dey Here sat deep in her bio.'], ['Booking disappeared on scroll:', 'the header didn’t stay, so mid-page there was no way to book on screen.']])}
</div></div>`],
      ['decisions', 'From insight to decision', num(5, 'Design decisions'), `
<h3>Three directions on her real content</h3>
${fig(IMG + 'directions.webp', 'The three directions side by side: Scrapbook, After Dark and Sunset', 'Scrapbook (taped polaroids on paper), After Dark (a night-club palette) and Sunset (a pink-to-orange stage glow), each built responsive on the same content. Scrapbook was chosen: it puts her real set photos at the center and feels personal without looking unprofessional.')}
${i2d([
  ['Her photos are the pitch.', 'Taped polaroids of her sets frame “sounds of REEMA”, so the first screen shows the crowd, the decks and her before any copy.'],
  ['The calls to action blended in.', 'Header links at 17px bold, and chunky rounded Book Reema and SoundCloud buttons, 60px tall, in the hero and the header.'],
  ['Her proof was buried.', 'Three numbers from her bio, 1,500+, 300+ and 4 cities, pulled out as cards beside her story.'],
  ['Booking disappeared on scroll.', 'A header that stays on screen with a Book Reema button. Every Book button opens one pop-up with her email and a Copy email button.'],
], 'What the research showed', 'What I designed')}
<h3>Tradeoffs I weighed</h3>
${cards([
  ['Personality vs. credibility', 'Pink is her brand, but a pink, playful Book button read as less serious. The Book button is solid black, and pink stays in accents like the tape and labels.'],
  ['A form vs. her inbox', 'A booking form looks thorough, but needs a server and would change how she works. Two actions match her real workflow: copy her email, or DM her.'],
  ['Embedded players vs. links out', 'Embedded YouTube players add weight and don’t play everywhere. Each set is a card that opens on YouTube, so it always works.'],
])}`],
      ['system', 'Thinking in systems', num(5, 'Design decisions'), `
<p>I built the site on one content model and a small design system, so every section and all three directions share the same parts. Reema’s content lives in one place; the components and the theme decide how it looks.</p>
${flow([
  ['Content', 'Her bio, proof points, sets, 17 flyers and links, written once.'],
  ['Components', 'Polaroid, buttons with states, proof card, booking pop-up, flyer strip.'],
  ['Themes', 'Color and type tokens plus a hero layout. Each direction is a theme over the same content and components.'],
  ['Screens', 'Responsive rules for phone, tablet and desktop, tested from 390px to 1920px.'],
], 'How the site is built: content, then components, then themes, then screens')}
${fig(IMG + 'components.webp', 'The design system: color tokens, type, primary and secondary buttons with hover states, buttons on dark, the proof card, the polaroid and the booking pop-up', 'The system: four color tokens, four type roles, and the components every section reuses.')}
<h3>Quality bar</h3>
${list([['Nothing scrolls sideways', 'at any width from 390px to 1920px.'], ['Larger tap targets:', 'primary buttons are 60px tall, up from 46px.'], ['Motion respects settings:', 'the flyer strip stops for people who turn on reduced motion.'], ['The pop-up behaves like a dialog:', 'it closes with Esc, the close button or a click outside, and Copy email falls back gracefully if copying is blocked.']])}`],
      ['iterate', 'Refining it, round by round', num(5, 'Design decisions'), `
<p>I made each decision from side-by-side previews on desktop and phone, and changed whatever got in the way of booking.</p>
${beforeAfter([
  ['Looking bookable', 'A Book button with a pink drop shadow: fun, but it read as less serious.', 'A solid black Book button that turns white with a black shadow on hover.'],
  ['Booking steps', 'A booking form with seven fields at the bottom of the page.', 'Two actions that match how she takes bookings: copy her email, or DM her on Instagram.'],
  ['Past events', 'Flyers too small to read the event names.', 'Flyers about 40% larger, chosen from a side-by-side comparison of two sizes.'],
  ['Room to breathe', 'A photo crowded the “R” of her name.', 'Photos placed so her name stays clear at every width, with the strongest shot enlarged.'],
])}`],
      ['final', 'The final experience', num(6, 'Final experience'), `
<p>Try it yourself: the redesigned site is live, with her real photos, sets and flyers, and works on desktop and phone.</p>
<p><a class="btn" href="https://soundsofreema.com/" target="_blank" rel="noopener">View Site</a></p>
<div class="split rev"><div><h3>Booking, one click away</h3><p>Her email in large type, a Copy email button that confirms with “Copied!”, and a way to open an email app. It’s the same pop-up from the header, the hero and the booking card.</p></div>${fig(IMG + 'popup-laptop.webp', 'The booking pop-up on a laptop: her email address, with Copy email and Open email app buttons')}</div>
<div class="split"><div>${fig(IMG + 'phones.webp', 'Before and after on a phone: the old type-only first screen, and the new collage with Book Reema and SoundCloud buttons')}</div><div><h3>Built for the phone</h3><p>Many visits start from her socials on a phone. On mobile, her name and both buttons come first, and the Book button stays in the header as you scroll.</p></div></div>
${fig(IMG + 'sets.webp', 'Watch the sets: three YouTube sets in polaroid frames, and a SoundCloud band', 'Her three YouTube sets open on YouTube, with SoundCloud one tap away.')}
${fig(IMG + 'past.webp', 'Past events: event flyers as taped prints in a drifting strip', 'Past events drift on their own and can be swiped or dragged.')}
${fig(IMG + 'book.webp', 'The booking card: Book Reema for your next event, with a white Copy email button and an outlined DM button', 'The booking card: copy her email or DM her on Instagram.')}`],
      ['outcomes', 'Impact, and how I’ll measure it', num(7, 'Outcomes &amp; reflection'), `
<h3>Measured on the same screens, old site vs. redesign</h3>
${outcomes([
  ['0 → 4', 'photos on the first screen (desktop); 0 → 2 on a phone', 'Measured at 1440px and 390px'],
  ['No → Yes', 'a Book button on screen when you’re mid-page', 'Header stays visible on scroll'],
  ['+42%', 'header link size, 12px to 17px, regular to bold', 'Measured on desktop'],
  ['46 → 60px', 'Book button height, a larger tap target', 'Measured at 1440px and 390px'],
])}
<h3>How I’ll measure impact after launch</h3>
${table(['Metric', 'Why it matters', 'How it’s measured', 'Compared with'], [
  ['Booking inquiries per month', 'The business goal', 'Emails and Instagram DMs that ask about a booking', 'The 3 months before launch'],
  ['Booking actions per visit', 'Shows whether visitors move toward booking', 'Clicks on Book Reema, Copy email and DM, divided by visits', 'A baseline from the first weeks'],
  ['Listening', 'A step toward booking', 'Clicks to SoundCloud and YouTube sets', 'A baseline from the first weeks'],
], 'Launch measurement plan: metrics, why they matter, how they are measured, and the baseline')}
<div class="split">
  <div><h3>What I learned</h3><p>For a creative, the photos are the pitch, and the booking path is the product. Treating a personal site as a conversion problem, with a journey, measures and a system behind it, kept every decision tied to the goal instead of to taste.</p></div>
  <div><h3>What I’d do next</h3>${list([['Interview bookers:', 'talk with promoters and venue bookers about how they choose a DJ, and test the site with them.'], ['Launch and measure', 'against the plan above, then iterate on whatever step loses the most people.'], ['Hand it over', 'on her current setup, where she updates links, flyers and gigs from one place.']])}</div>
</div>`],
    ],
  };
};
