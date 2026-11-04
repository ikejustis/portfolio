/* Paraillel, rewritten in the 7-part structure. Facts come from the live case study and Ikedi's resume;
   anything only the review suggested is wrapped in cf() for Ikedi to confirm. */
module.exports = (B, k) => {
  const { fig, zoom, list, quotes, facts, glance, cards, cf, num, own, i2d, flow, outcomes, note } = k;
  const IMG = B + 'assets/img/par/';
  const C = '#1E6FD9';
  return {
    key: 'paraillel', color: C,
    title: 'Paraillel case study · Ikedi J. Nwogu',
    description: 'Lead Product Designer on Paraillel, an AI-powered learning platform built from 0 to 1 for teachers and students in underserved Detroit districts.',
    hero: `<section class="case-hero" style="--c:${C}">
  <div class="ch-txt">
    <p class="eyebrow num-eyebrow">${num(1, 'Project introduction')}</p>
    <img class="ch-logo sm" src="${IMG}logo.webp" alt="Paraillel" width="321" height="101">
    <h1 class="long" style="color:#0F4C9E">Building an AI-powered learning platform that gives teachers more time to teach.</h1>
    <p class="lede">Paraillel was an early-stage ed-tech startup making personalized learning more accessible to students in underserved Detroit school districts. I helped build the platform from 0 to 1, leading product design and a team of four designers I mentored, while partnering with educators, product and engineering on AI-powered classroom tools that cut administrative work and supported more personalized learning.</p>
  </div>
  <div class="ch-pic"><video src="${B}assets/video/paraillel.mp4" poster="${B}assets/img/paraillel.webp" autoplay muted loop playsinline preload="metadata" aria-label="Walkthrough of the Paraillel teacher dashboard and assignments"></video></div>
</section>
${facts([['Role', 'Lead Product Designer'], ['Timeline', 'Jul 2023 – Mar 2024 · 0 to 1'], ['Platform', 'AI ed-tech web app for teachers and students'], ['Team', '4 designers I led, plus PMs, engineers and AI specialists']])}
${glance([
  ['The problem', 'Students needed learning that fits them. Teachers needed less admin work and more time with students.'],
  ['What I owned', 'Product definition from 0 to 1, leading and mentoring four designers, research, and the WCAG 2.2 design system.'],
  ['The outcome', 'In usability testing: task success up 22% and user errors down 30%. Engineering handoff time cut by 35%.'],
])}`,
    sections: [
      ['problem', 'One classroom, two problems', num(2, 'The problem'), `
<p class="big">In underserved Detroit schools, teachers struggle to personalize lessons with outdated tools, and admin work takes time away from students.</p>
<div class="two-sided">
  <article><h3>Students</h3><p>Needed learning that adjusts to their pace and performance. Many found lessons boring or confusing, and lost track of deadlines without a clear view of their assignments.</p></article>
  <article><h3>Teachers</h3><p>Needed less administrative work and more time with students. Tracking progress, planning lessons and organizing assignments across fragmented tools took hours every week.</p></article>
</div>
<h3>Why it mattered</h3>
<p>Underserved districts have the fewest resources for one-to-one support. If the tools did the routine work, teachers could spend that time teaching, and every student could get a path that fits them.</p>`],
      ['role', 'What I owned', num(3, 'My role &amp; ownership'), `
${own([
  ['I led', ['Product definition for the 0-to-1 platform: which tools to build first and why', 'Leading and mentoring a team of four designers: critiques, standards and accessibility', 'The research plan: interviews, contextual inquiry and usability and A/B testing', 'The design system, built to WCAG 2.2']],
  ['I partnered with', ['Educators and administrators in Wayne, Oakland and Macomb counties', 'Product managers on scope and priorities', 'Engineers, from concept to production', 'AI specialists, on how recommendations work and how they’re explained']],
  ['What the team delivered', ['The teacher dashboard, calendar and assignments tools', 'AI-recommended resources and assignments', 'A shared, accessible component library', 'Developer-ready specs that cut handoff time by 35%']],
])}`],
      ['research', 'What we learned from teachers and students', num(4, 'Research &amp; insights'), `
<dl class="facts in"><div><dt>Methods</dt><dd>Interviews, surveys, contextual inquiry</dd></div><div><dt>Participants</dt><dd>15 teachers &amp; students</dd></div><div><dt>Where</dt><dd>Detroit · remote</dd></div><div><dt>Length</dt><dd>30 minutes each</dd></div></dl>
${quotes([
  ['I spend too much time on administrative tasks instead of engaging with students.', 'Educator, Wayne County'],
  ['A lot of platforms lack proper accessibility features, making it hard for some students to use them.', 'Educator, Oakland County'],
  ['I often forget deadlines because I don’t have a clear overview of my assignments.', 'Student, Oakland County'],
  ['Some subjects are really boring or confusing.', 'Student, Macomb County'],
])}
<h3>Three insights that shaped the product</h3>
${cards([
  ['Simple on the surface', 'Teachers needed tools that were easy to use but handled complex work: tracking students, managing tasks and keeping students engaged.'],
  ['Personal, not generic', 'Students needed an experience that adjusts to their pace and performance.'],
  ['Accessible by default', 'Both groups struggled with poor contrast, small type and no keyboard navigation in existing tools.'],
])}
<div class="pcards">${zoom(IMG + 'persona-teacher.webp', 'Persona: Mrs. Sarah Miller, high school teacher', 'pcard')}${zoom(IMG + 'persona-student.webp', 'Persona: Jane Carter, high school student', 'pcard')}</div>`],
      ['decisions', 'How research changed the product', num(5, 'Design decisions'), `
<p>Every core feature traces back to something we heard or saw in testing.</p>
${i2d([
  ['Teachers lose hours to admin work.', 'AI recommends resources and assignments for each student, so teachers spend less time building them from scratch.'],
  ['Students need learning that adjusts to them.', 'Personalized learning paths that recommend resources based on each student’s performance and preferences.'],
  ['Students lose track of deadlines.', 'A shared calendar with color-coded categories and automated reminders.'],
  ['Testing: the dashboard showed too much at once.', 'A customizable dashboard: teachers choose the widgets they need, following Hick’s and Miller’s laws.'],
  ['Testing: assignments were hard to find.', 'Assignment tabs across the interface, one tap from anywhere.'],
  ['Testing: accessibility settings were buried.', 'Accessibility settings moved to the top level, with contrast, type size and keyboard navigation built into every component.'],
])}
<h3>How the AI works in the experience</h3>
${flow([
  ['Students work', 'Each student’s work and performance builds their learning profile.'],
  ['AI recommends', 'Resources and assignments matched to each student, with a short explanation of why.'],
  ['Teacher decides', 'Teachers review, edit or reject every recommendation before students see it.'],
  ['Students learn', 'Each student gets a personalized path, and their results feed the next round.'],
], 'How AI recommendations move from student data to the teacher to the student')}
${note('This loop diagram is new. It replaces the list of UX laws and shows the review’s main ask: how the AI actually works and where the teacher stays in control.')}
<h3>From sketch to wireframe</h3>
<div class="pair2">${fig(IMG + 'wireframes-paper.webp', 'Hand-drawn wireframes of the dashboard and calendar', 'Paper sketches')}${fig(IMG + 'wireframes-lofi.webp', 'Low-fidelity wireframes of the dashboard and calendar', 'Low-fidelity wireframes')}</div>`],
      ['final', 'The final experience', num(6, 'Final experience'), `
<div class="fx"><h3>Dashboard</h3><p>Student performance at a glance, lesson planning and classroom management in one place.</p>${zoom(IMG + 'hifi-dashboard.webp', 'Dashboard with callouts: student performance insights, personalized lesson planning, classroom management tools and accessibility-first design')}</div>
<div class="fx"><h3>Calendar</h3><p>Smart scheduling and automated reminders, shared between teachers and students.</p>${zoom(IMG + 'hifi-calendar.webp', 'Calendar with callouts: smart scheduling, automated reminders, seamless integration and collaborative planning')}</div>
<div class="fx"><h3>Assignments</h3><p>Customizable assignments and personalized learning paths, with deadline reminders tied to the dashboard.</p>${zoom(IMG + 'hifi-assignments.webp', 'Assignments with callouts: customizable assignments, personalized learning paths, deadline reminders and dashboard integration')}</div>
<div class="fx"><h3>Design system</h3><p>Standard WCAG 2.2 components that kept every tool consistent and sped up development.</p><div class="split rev">${zoom(IMG + 'design-system.webp', 'Design system components', '')}${zoom(IMG + 'color-type.webp', 'Color system and type scale', '')}</div></div>`],
      ['outcomes', 'What changed, and what I learned', num(7, 'Outcomes &amp; reflection'), `
${outcomes([
  ['+22%', 'task success', 'Usability and A/B testing'],
  ['−30%', 'user errors', 'Usability and A/B testing'],
  ['−35%', 'engineering handoff time', 'Design-to-development handoff'],
])}
<div class="split">
  <div><h3>What I learned</h3><p>Designing for underserved districts made accessibility and simplicity non-negotiable. The biggest wins came from testing early with real teachers. Each round removed something rather than adding it.</p></div>
  <div><h3>What I’d do next</h3>${list([['Measure admin time', 'in real classrooms, before and after.'], ['Better AI personalization', 'from real classroom data.'], ['LMS integration', 'with the systems schools already use.']])}</div>
</div>`],
    ],
  };
};
