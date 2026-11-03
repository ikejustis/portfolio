/* Netflix Tudum: an independent UX case study. Text from the current ijnwogu.com page, lightly edited. */
module.exports = ({ B, fig, list, facts, glance, cards, esc }) => {
  const IMG = B + 'assets/img/tud/';
  const C = '#C8102E';
  const small = (src, alt, cls = '') => fig(src, alt, '', ('sm ' + cls).trim());

  const RIVALS = [
    ['Netflix', '301.63 million', 'Tudum', 'Exclusive content · behind-the-scenes access · live Q&A sessions · global availability · fan-centric activities', 'A comprehensive, immersive experience with a wide range of exclusive content that boosts engagement.', 'Little public data on user participation and engagement.'],
    ['Disney+', '200 million', 'D23 Expo · Disney+ Day', 'Exclusive premieres · special promotions · character-centric interactions · celebration of its IP', 'Builds on Disney’s huge IP portfolio, generating real excitement among fans.', 'Focuses mainly on existing franchises, which may limit appeal to new subscribers.'],
    ['Prime Video', '122.7 million', 'Prime Video Presents: The Show Must Go On', 'Creator and star panels · diverse genres · exclusive sneak peeks · Amazon ecosystem integration', 'Highlights diverse content, appealing to a broad audience.', 'Less established as a marquee event than its competitors.'],
    ['Apple TV+', '25 million', 'Apple Events', 'Focus on quality · creator discussions · niche appeal · brand-first design', 'Emphasizes high-quality original content, in line with Apple’s brand.', 'Limited frequency and scale may mean lower overall impact.'],
    ['HBO Max', '100 million', 'HBO Max Fan Fest', 'Event-tied releases · social media campaigns · exclusive previews · award-winning content', 'Uses acclaimed content to attract viewers.', 'No unified, recurring fan event, which may reduce ongoing engagement.'],
  ];
  const rivals = '<div class="scroll-x"><table class="jmap ctable"><thead><tr><th scope="col">Service</th><th scope="col">Subscribers</th><th scope="col">Event</th><th scope="col">Key features</th><th scope="col">Strengths</th><th scope="col">Weaknesses</th></tr></thead><tbody>' +
    RIVALS.map(([s, ...r]) => `<tr><th scope="row">${esc(s)}</th>${r.map((c) => `<td>${esc(c)}</td>`).join('')}</tr>`).join('') + '</tbody></table></div>';

  /* Strengths / opportunities pair, used for each finding. */
  const pair = (good, better, goodLabel = 'Strengths', betterLabel = 'Opportunities for improvement') => `<div class="pgrid sw"><div><h4>${goodLabel}</h4>${list(good)}</div><div><h4>${betterLabel}</h4>${list(better)}</div></div>`;

  return {
    key: 'tudum', color: C,
    title: 'Netflix Tudum case study · Ikedi J. Nwogu',
    description: 'An independent UX case study of Netflix’s Tudum fan event: research, competitive analysis, usability testing across devices, and recommendations.',
    hero: `<section class="case-hero" style="--c:${C}">
  <div class="ch-txt">
    <p class="eyebrow" style="color:${C}">UX case study</p>
    <h1 class="long" style="color:#141414">Netflix’s Tudum: what makes a fan event work, and what could make it better.</h1>
    <p class="lede">Tudum is Netflix’s annual global fan event, celebrating its original content with sneak peeks, trailers, behind-the-scenes footage and live Q&amp;A sessions.</p>
  </div>
  <div class="ch-pic"><img src="${IMG}hero.webp" alt="The Tudum website’s What to Watch page on a laptop, beside the Tudum logo" width="1130" height="822"></div>
</section>
${facts([['Role', 'UX Designer – Researcher'], ['Type', 'Independent case study'], ['Platforms', 'Smartphone, laptop and smart TV'], ['Methods', 'Expert review, competitive analysis, surveys, usability testing']])}
${glance([
  ['The question', 'How well does Tudum engage fans, and how could UX principles make it more immersive and seamless?'],
  ['What I did', 'Evaluated the event hands-on, compared it with rival fan events, surveyed Netflix users and tested it across devices.'],
  ['The outcome', 'Three recommendations: guided onboarding, personalized experiences, and better mobile and multi-device navigation.'],
])}`,
    sections: [
      ['overview', 'Project overview', 'The study', `
<div class="split">
  <div>
    <p>As a UX designer and researcher who’s an active Netflix user, I was curious how Tudum influences engagement, encourages community and strengthens the emotional connection between Netflix and its subscribers.</p>
    <p>The goal: evaluate the event’s <b>design, usability, interactivity and overall experience</b>, and find how Netflix could improve Tudum by applying key UX principles.</p>
  </div>
  ${fig(IMG + 'event.webp', 'The Netflix Tudum live event stage, lit in red')}
</div>`],
      ['objectives', 'Background & research objectives', 'The study', `
<p>Tudum is part of Netflix’s broader strategy to strengthen its relationship with subscribers and build fan loyalty. I wanted to see how well it serves existing and potential subscribers: providing value, building community and encouraging deeper interaction with content.</p>
<h3>Core research questions</h3>
${list([['How effective is the event', 'at engaging users and building excitement?'], ['How does Netflix apply UX principles', 'such as accessibility, mobile optimization and personalization?'], ['How could Tudum', 'offer a more immersive, seamless experience?'], ['Which features', 'drive the most fan interaction and satisfaction?']])}`],
      ['goals', 'Study goals & business objectives', 'The study', `
<div class="pgrid sw">
  <div><h4>Study goals</h4>${list([['Evaluate engagement:', 'how well Tudum excites fans and creates a memorable, interactive experience through live streams, Q&As, exclusive content and social integrations.'], ['Examine UX principles:', 'accessibility, mobile optimization and personalization, across devices and for a global audience.'], ['Find opportunities:', 'where design, interactivity or usability could make the event more immersive and engaging.']])}</div>
  <div><h4>Business objectives</h4>${list([['Strengthen subscriber loyalty:', 'deeper emotional attachment to Netflix originals, improving retention and reducing churn.'], ['Enhance brand perception:', 'position Tudum as a fan-first platform that values its global audience, encourages community and offers exclusive, personalized experiences.']])}</div>
</div>`],
      ['methods', 'Research & methodology', 'Research', `
<div class="split">
  <div>
    ${list([['Personal experience evaluation:', 'I used Netflix during Tudum to assess the interface, navigation, interactivity and overall experience.'],
      ['Competitive analysis:', 'compared Tudum with fan events from Disney+, Prime Video, Apple TV+ and HBO Max to find industry best practices.'],
      ['User surveys:', 'an informal survey of fellow Netflix users on satisfaction, ease of use and emotional engagement.'],
      ['Usability testing:', 'tested accessibility and usability on a smartphone, a laptop and a smart TV, to see how consistent the experience is.']])}
  </div>
  ${fig(IMG + 'tv.webp', 'Netflix on a living-room TV, with a game controller in hand')}
</div>`],
      ['competitive', 'Competitive analysis', 'Research', `
<p>How Tudum compares with similar events from other major streaming services, by strengths, weaknesses and opportunities in fan engagement, brand loyalty and market positioning.</p>
${rivals}
<p class="hint">Subscriber figures as reported at the time of the study.</p>`],
      ['surveys', 'User surveys', 'Research', `
<p>An informal survey of <b>15–30 Netflix users</b> (friends and colleagues) about their experiences with Tudum, focused on <b>satisfaction</b> and <b>ease of use</b>.</p>
<div class="stats two">
  <div class="stat" style="--w:85%"><b>85%</b><span>enjoyed the exclusive content: trailers, sneak peeks and behind-the-scenes footage</span><i></i></div>
  <div class="stat" style="--w:10%"><b>10%</b><span>hadn’t heard of Tudum until it was promoted on social media</span><i></i></div>
</div>
<p>On ease of use, participants liked the straightforward layout and being able to <b>switch devices seamlessly</b>, for example starting on a phone and continuing on a TV.</p>`],
      ['testing', 'Usability testing', 'Research', `
<p>I tested Tudum’s accessibility and usability across devices to see how consistent and intuitive the experience is.</p>
<div class="split rev">
  ${small(IMG + 'phone.webp', 'Tudum on a smartphone: a news story about the Carry-On trailer', 'phone')}
  <div><h3>Smartphone</h3>
  ${pair([['Responsive design:', 'the layout adapts well to different screen sizes.'], ['Touch-friendly:', 'buttons and menus are easy to tap.'], ['Streaming quality:', 'smooth playback on mobile networks with adaptive resolution.']],
    [['Navigation complexity:', 'nested menus make specific content hard to find.'], ['Overlapping text:', 'on smaller screens, text sometimes overlaps or gets cut off.']], 'Strengths', 'Weaknesses')}</div>
</div>
<div class="split">
  <div><h3>Laptop (web browser)</h3>
  ${pair([['Intuitive navigation:', 'a clear menu hierarchy and breadcrumbs for easy backtracking.'], ['Search:', 'a robust search bar with auto-suggestions.']],
    [['Accessibility shortcomings:', 'limited keyboard navigation for people who rely on assistive technology.'], ['Inconsistent branding:', 'some pages lack visual consistency, breaking the immersion.']], 'Strengths', 'Weaknesses')}</div>
  ${small(IMG + 'laptop.webp', 'Tudum on a laptop: a feature page with a sci-fi film still')}
</div>`],
      ['findings', 'Key findings', 'Takeaways', `
<h3>1. Event design & interface</h3>
<p>The landing page was highly engaging, with high-quality video, animation and content-rich carousels, and it made live streams, trailers, exclusive content and highlights easy to reach.</p>
${pair([['Cinematic design:', 'large visuals and immersive trailers set a premium, entertainment-driven tone.'], ['Clear navigation:', 'sections like “Top 10,” “Trending” and “What to Watch” reduce cognitive load.'], ['Multi-device support:', 'responsive on mobile, with more room to explore on desktop.']],
  [['Overwhelming for first-timers:', 'a guided onboarding experience, such as an interactive tutorial or intro message, would help new visitors.'], ['Personalization:', 'event content curated from each user’s watching habits, such as tailored trailers or announcements.']])}
<h3>2. Accessibility & global reach</h3>
<p>Tudum has to serve a global audience: multilingual support, accessibility for people with disabilities, and regional content.</p>
${pair([['Multi-language support:', 'subtitles in many languages, plus dubbing or localized options on the live stream.'], ['Accessible features:', 'closed captions and audio descriptions for people with hearing or vision impairments.']],
  [['Screen reader navigation:', 'more descriptive alt text for images and video would help visually impaired users.'], ['Localized fan experience:', 'region-specific content and events in local time zones.']])}
<h3>3. Mobile experience</h3>
<p>Mobile optimization was key, given how many people watch Netflix on phones and tablets.</p>
${pair([['Smooth streaming:', 'minimal buffering, seamless transitions and easy-to-tap buttons.'], ['Responsive design:', 'a clean layout on both phones and tablets.']],
  [['Limited interactivity on small screens:', 'more compact features would make interactions smoother without clutter.'], ['Battery drain:', 'long sessions are taxing; optimizing for lower power use would help people on the go.']])}`],
      ['recommendations', 'Recommendations', 'Conclusion', `
<div class="split">
  <p class="big">Tudum connects with fans through exclusive content, interactive features and global reach. Its cinematic design, real-time interaction and social integration make it memorable, and three changes could raise the experience further.</p>
  ${fig(IMG + 'tv-grid.webp', 'A grid of Netflix titles on a TV in a dark room')}
</div>
${cards([
  ['1. Guided navigation & onboarding', '<b>An interactive onboarding tour</b> of live streams, trailers and exclusive sessions for first-time visitors. <b>Contextual reminders</b> for upcoming Q&amp;As and drops, based on each person’s interests. <b>Progress indicators</b> showing what they’ve seen and what’s left to explore.'],
  ['2. Customized experiences', '<b>Personalized content curation</b> from viewing history, highlighting related trailers and sneak peeks. <b>Personalized notifications</b> for the genres and shows each person follows. <b>A customizable event homepage</b> where people choose what they care about most, reducing overwhelm.'],
  ['3. Mobile & multi-device navigation', '<b>Adaptive mobile navigation</b> with a collapsible bar for live events, trailers and exclusives. <b>Mobile-specific notifications</b> that open live chat or polls directly. <b>Multi-device sync</b>, so people can start on a phone and pick up on a laptop where they left off.'],
])}`],
      ['conclusion', 'Conclusion', 'Conclusion', `
<div class="split">
  <p class="big">With these improvements, Tudum could give people a more personalized, guided and intuitive experience that deepens engagement and their emotional connection to Netflix’s content and platform.</p>
  ${fig(IMG + 'remote.webp', 'A hand holding a remote in front of the Netflix home screen on a TV')}
</div>`],
    ],
  };
};
