/* Tandem case study. Text from the current ijnwogu.com page, lightly edited. */
module.exports = ({ B, fig, zoom, list, quotes, facts, glance, cards, diamond, esc }) => {
  const IMG = B + 'assets/img/tan/';
  const C = '#5F63B8';

  const PERSONAS = [
    { name: 'Justin Carter', meta: '24 · Graphic Designer', photo: 'justin.webp',
      bio: 'Justin was recently diagnosed with bipolar disorder and is working to establish a consistent care routine. As a freelancer, his schedule is unpredictable, and he often forgets appointments. He wants a mobile-friendly platform where he can quickly check availability, reschedule when needed and reach his provider easily. He prefers messaging over phone calls, so messaging his doctor directly is essential.',
      goals: ['Get appointment reminders and see provider availability instantly', 'Use an easy-to-navigate, mobile-optimized interface', 'Communicate by message instead of phone calls', 'Get to his medical information securely and quickly on the go'],
      pains: ['Forgets appointments and needs reminders', 'Needs mobile access to schedule changes and provider messaging', 'Finds phone calls inconvenient and prefers texting or online messaging', 'Needs lab results without clicking through multiple pages'] },
    { name: 'Sarah Thompson', meta: '45 · High School Teacher', photo: 'sarah.webp',
      bio: 'Sarah has been managing anxiety for several years while also caring for her teenage son, who has ADHD. She schedules appointments for both of them, and finds it frustrating to manage multiple appointments, find lab results and reach providers. She wants a simple, intuitive platform where she can check availability, message doctors and stay on top of her family’s mental health care.',
      goals: ['Book and manage appointments for herself and her son in one place', 'See her family’s lab results and visit notes without digging', 'Message providers directly instead of making repeat phone calls', 'Use a calm, clearly organized platform she can trust'],
      pains: ['Juggles two people’s appointments across separate schedules and calls', 'Can’t find lab results and records quickly when she needs them', 'Spends time on hold or waiting for call-backs to reach a provider', 'Gets overwhelmed by cluttered navigation, which adds stress when she’s already anxious'] },
  ];

  const JOURNEY = [
    ['Awareness', 'Learn about Tandem and find mental health care', 'Searches online, asks for referrals, visits the website', 'Confused, unsure of next steps', 'Website lacks clear navigation and provider info', 'Improve site structure, add a “Find a Provider” page'],
    ['Onboarding', 'Set up an account and understand services', 'Creates an account, tries to explore options', 'Frustrated by unclear steps', 'Complicated forms, login issues', 'Simplify onboarding with guided tutorials'],
    ['Appointment booking', 'Schedule a visit with minimal effort', 'Tries to book online or calls the office', 'Stressed, annoyed', 'Hard-to-use scheduling, no reminders', 'One-click scheduling, automated confirmations'],
    ['Pre-visit preparation', 'Prepare and complete forms', 'Fills out intake forms, reviews provider details', 'Anxious about missing paperwork', 'No digital intake, unclear instructions', 'Mobile-friendly digital forms, automated reminders'],
    ['Consultation', 'Meet the provider and discuss concerns', 'Attends the session, takes notes, asks questions', 'Relieved but forgets key info', 'No easy way to track session notes', 'Post-visit summary in the patient portal'],
    ['Post-visit follow-up', 'Review the summary and next steps', 'Looks for instructions, tries to message the provider', 'Confused, uncertain about next steps', 'Hard to find visit notes, delayed responses', 'Secure messaging, visit summaries'],
    ['Ongoing engagement', 'Stay connected and manage care', 'Sends messages, checks the portal for updates', 'Confident in ongoing care', 'No real-time support, unclear medication reminders', 'Chat support, automated medication reminders'],
  ];
  const journey = '<div class="scroll-x"><table class="jmap"><thead><tr><th scope="col">Stage</th><th scope="col">User goal</th><th scope="col">User actions</th><th scope="col">Emotions</th><th scope="col">Pain points</th><th scope="col">Opportunities</th></tr></thead><tbody>' +
    JOURNEY.map(([s, ...r]) => `<tr><th scope="row">${esc(s)}</th>${r.map((c) => `<td>${esc(c)}</td>`).join('')}</tr>`).join('') + '</tbody></table></div>';

  return {
    key: 'tandem', color: C,
    title: 'Tandem case study · Ikedi J. Nwogu',
    description: 'UX Designer and Researcher on Tandem Psychiatric Family Practice: a patient-centered redesign that made scheduling, provider messaging and medical records easier to reach.',
    hero: `<section class="case-hero" style="--c:${C}">
  <div class="ch-txt">
    <img class="ch-logo" src="${IMG}logo.webp" alt="Tandem Psychiatric Family Practice" width="506" height="130">
    <h1 class="long" style="color:#23285E">Designing patient-centered mental health experiences.</h1>
    <p class="lede">Enhancing patient-centered mental health care through personalized treatment, collaborative support and innovative strategies to improve outcomes for people of all ages.</p>
  </div>
  <div class="ch-pic"><img src="${IMG}hero.webp" alt="The redesigned Tandem home page on a desktop monitor: “Here at Tandem, your story matters.”" width="1252" height="732"></div>
</section>
${facts([['Company', 'Tandem Psychiatric Family Practice'], ['Role', 'UX Designer – UX Researcher'], ['Platform', 'Responsive website'], ['Focus', 'Research, IA, wireframing, prototyping, accessibility']])}
${glance([
  ['The challenge', 'Patients struggled to book appointments, reach their providers and find their medical information online.'],
  ['What I did', 'Led the research and redesign: surveys, personas, journey map, a new information architecture, wireframes and WCAG-compliant hi-fi.'],
  ['The result', 'Patient engagement up 25% and administrative workload down 15%, with better appointment completion.'],
])}`,
    sections: [
      ['challenge', 'The challenge', 'Project overview', `
<p>Tandem is a psychiatric practice that helps people navigate mental health challenges such as addiction, anxiety, depression, bipolar disorder, ADHD and childhood mental health issues. Despite exceptional care, patients and caregivers were struggling with the digital tools available to them. Scheduling appointments, communicating with providers and reaching critical medical information were far from seamless. That meant frustration, missed appointments and a disjointed experience for caregivers and clinicians alike.</p>
    <p>As Tandem’s UX Designer and Researcher, I was tasked with making this experience more <b>accessible, efficient and empowering</b> for patients and providers: streamlining scheduling, improving communication and making medical records easy to reach, while making the practice run more smoothly.</p>`],
      ['problem', 'The problem', 'Project overview', `
<div class="callout">
  <p class="big">Patients had trouble reaching their providers, managing appointments and finding important medical information.</p>
  <p>Many missed appointments, got lost in a complex website, or couldn’t quickly message their doctors.</p>
</div>
<h3>What patients told us</h3>
${list([['Limited direct communication', 'with providers.'], ['Difficulty reaching medical information.', ''], ['Website accessibility barriers.', ''], ['Appointment management issues.', '']])}`],
      ['solution', 'The solution', 'Project overview', `
<p class="big">Streamline scheduling, strengthen provider communication and improve accessibility for a more seamless, patient-centered experience.</p>
${cards([
  ['Direct communication with providers', 'A secure “Contact Us” message page where patients can write to their doctor directly, improving communication and response times.'],
  ['Appointment management & self-service', 'The practice’s existing patient service site brought into the main navigation, reducing admin work and patient confusion.'],
  ['A more accessible website', 'A refined information architecture and wireframes that improve navigation and the overall experience.'],
])}
<h3>My impact</h3>
<p>Integrating direct messaging and simplifying navigation led to a <b>25% increase in engagement</b>, and optimized scheduling workflows <b>reduced administrative burden by 15%</b>. Research-driven design made the platform more seamless, efficient and inclusive for patients and providers.</p>`],
      ['process', 'Design process', 'Project overview', `
<p>I followed a structured UX process to keep the work user-centered and research-driven while aligning with business goals.</p>
<div class="scroll-x">${diamond('#ECE8FB', '#C9DDFB', ['DISCOVER', 'DEFINE', 'DEVELOP', 'DELIVER'], ['BROAD GOAL', 'STAKEHOLDER REVIEW', 'HIGH-FIDELITY DESIGN'])}</div>`],
      ['research', 'User research', 'Empathize', `
<p>To begin, I ran UX research to understand the challenges patients faced:</p>
${list([['User surveys:', 'with patients about their day-to-day needs and frustrations with existing tools.'], ['Stakeholder workshops:', 'with the internal team, to align product goals with user needs.']])}
<p>The survey covered <b>20 patients</b>, gathering qualitative insight into their digital experience and pain points.</p>
<div class="stats four">
  <div class="stat" style="--w:85%"><b>85%</b><span>were frustrated by the lack of direct communication with providers</span><i></i></div>
  <div class="stat" style="--w:75%"><b>75%</b><span>found appointment scheduling confusing and hard to navigate</span><i></i></div>
  <div class="stat" style="--w:60%"><b>60%</b><span>struggled to find lab results and other critical health information</span><i></i></div>
  <div class="stat" style="--w:40%"><b>40%</b><span>had trouble using the website because of poor navigation and accessibility</span><i></i></div>
</div>
${quotes([
  ['I wish I could just send my doctor a quick message instead of waiting for a call back.', 'Female patient, 45'],
  ['It’s frustrating that I have to go through multiple steps just to see my lab results.', 'Male patient, 57'],
  ['The website is confusing, and I can’t find the information I need.', 'Female patient, 43'],
  ['I missed my last appointment because I forgot the time, and I can’t find an easy way to check my next one.', 'Male patient, 24'],
])}`],
      ['personas', 'User personas', 'Define', `
<p>The research pointed to two core personas:</p>
<div class="personas">${PERSONAS.map((p) => `<article class="persona">
  <img class="pphoto" src="${IMG}${p.photo}" alt="" loading="lazy" decoding="async" width="204" height="347">
  <div class="pbody"><header><h3>${esc(p.name)}</h3><p>${esc(p.meta)}</p></header>
  <p>${esc(p.bio)}</p>
  <div class="pgrid"><div><h4>Goals</h4><ul>${p.goals.map((g) => `<li>${esc(g)}</li>`).join('')}</ul></div><div><h4>Challenges</h4><ul>${p.pains.map((g) => `<li>${esc(g)}</li>`).join('')}</ul></div></div></div>
</article>`).join('')}</div>
<h3>User journey map</h3>
<p>I mapped the current patient journey to find where the system was failing and where there was room to improve.</p>
${journey}`],
      ['ideate', 'Concept development', 'Ideate', `
<p>I led brainstorming sessions with the cross-functional team to turn the pain points into solutions:</p>
${list([['Redesign the website', 'to improve navigation and accessibility.'], ['Full accessibility compliance', 'following WCAG guidelines.'], ['Bring the patient portal into the main navigation,', 'so lab results, scheduling and provider messaging are in one central place.']])}
<p>These ideas became the foundation of our design and development strategy, keeping the solutions user-centered and aligned with business goals.</p>
<h3>Affinity mapping</h3>
<div class="split rev">
  ${zoom(IMG + 'affinity.webp', 'Affinity map: patient pain points, business challenges, user needs and expectations, and potential solutions', '')}
  <div>
    <p>The affinity map organized insights from patient feedback, stakeholder interviews and research into pain points, business challenges and opportunities, revealing the patterns behind our design decisions.</p>
    ${list([['Business challenges:', 'high no-show rates, a heavy administrative workload and inefficient patient communication.'], ['User needs:', 'seamless booking, easy access to health records, direct messaging with providers and an accessible interface.']])}
  </div>
</div>
<h3>Key insights</h3>
${cards([
  ['Quick, easy interactions', 'Patients value quick, easy interactions with their providers.'],
  ['Less friction for everyone', 'Reducing administrative friction benefits patients and staff.'],
  ['Accessibility drives engagement', 'Improving accessibility can raise patient engagement.'],
])}
<h3>Information architecture</h3>
<p>I restructured Tandem’s information architecture to improve <b>navigation, accessibility and usability</b> for patients and providers. A simpler structure, with scheduling, messaging and medical records easy to find and a clear flow, raised engagement and reduced administrative friction.</p>
${zoom(IMG + 'ia.webp', 'Sitemap: the home page leads to Resources, Our Services, Let’s Get Started, Our Team, Patient Portal and Contact')}`],
      ['wireframe', 'Wireframe', 'Design', `
<div class="split">
  <div>
    <p>I sketched the home page on paper, then built interactive mockups in Figma to bring the concepts to life.</p>
    <p>The sketch sets the order of the page: the hero, care tailored to your needs, our mission, how we can help, exploring your mental health, meet our team, send a message, and what our patients say.</p>
  </div>
  ${zoom(IMG + 'wireframe-paper.webp', 'Hand-drawn wireframe of the Tandem home page', 'tallfig')}
</div>`],
      ['hifi', 'High-fidelity mockups', 'Design', `
<p>High-fidelity prototypes with detailed UI and accessibility features, including adjustable font sizes, color contrast adjustments and screen reader compatibility.</p>
<div class="split">
  <div><h3>Making the website more accessible</h3>
  ${list([['Refined the information architecture,', 'improving navigation and usability.'], ['WCAG compliance,', 'so the site is inclusive and easy to use for every patient.']])}</div>
  ${fig(IMG + 'home-laptop.webp', 'The accessible Tandem home page on a laptop')}
</div>
<div class="split rev">
  ${fig(IMG + 'fusion.webp', 'The Patient Fusion login on a laptop, reached from Tandem’s main navigation')}
  <div><h3>Appointment management & self-service</h3>
  ${list([['Patient Fusion in the navigation', 'for easy access to medical records and messaging.'], ['One place', 'to check lab results, schedule appointments and contact providers.'], ['Simpler booking,', 'reducing confusion and administrative workload.']])}</div>
</div>
<div class="split">
  <div><h3>Direct communication with providers</h3>
  ${list([['A direct contact phone number', 'to improve accessibility.'], ['A secure “Contact Us” messaging page', 'for seamless patient–provider communication.']])}</div>
  ${fig(IMG + 'contact.webp', 'The Tandem Contact Us page on a laptop')}
</div>`],
      ['next', 'Results & next steps', 'Reflect', `
<div class="split">
  <div>
    <p>The redesign met key business goals: <b>patient engagement up 25%</b>, <b>administrative workload down 15%</b>, and appointment completion rates significantly improved.</p>
    <p>Next, post-launch feedback will be essential to refining the platform and catching new pain points:</p>
    ${list([['Personalized patient dashboards.', ''], ['Streamlined appointment management.', ''], ['Ongoing accessibility and usability improvements.', '']])}
    <p>By tracking engagement and iterating on real needs, Tandem can keep delivering measurable impact in digital mental healthcare.</p>
  </div>
  ${fig(IMG + 'next-steps.webp', 'The Tandem home page on a dark laptop')}
</div>`],
    ],
  };
};
