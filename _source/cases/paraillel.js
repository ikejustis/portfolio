/* Paraillel case study. Text from the current ijnwogu.com page, lightly edited. */
module.exports = ({ B, fig, zoom, list, quotes, facts, glance, cards, diamond }) => {
  const IMG = B + 'assets/img/par/';
  const C = '#1E6FD9';
  return {
    key: 'paraillel', color: C,
    title: 'Paraillel case study · Ikedi J. Nwogu',
    description: 'Lead Product Designer on Paraillel, an AI-powered classroom dashboard that helps teachers in underserved districts personalize learning and spend less time on admin.',
    hero: `<section class="case-hero" style="--c:${C}">
  <div class="ch-txt">
    <img class="ch-logo sm" src="${IMG}logo.webp" alt="Paraillel" width="321" height="101">
    <h1 style="color:#0F4C9E">AI-powered tools that let teachers teach.</h1>
    <p class="lede">An AI-driven dashboard that makes it effortless to create engaging, personalized content, so teachers can focus on what matters most: teaching.</p>
  </div>
  <div class="ch-pic"><img src="${B}assets/img/paraillel.webp" alt="Paraillel teacher dashboard on a laptop" width="1400" height="887"></div>
</section>
${facts([['Role', 'Lead Product Designer'], ['Timeline', '2023 – 2024'], ['Platform', 'AI ed-tech web app'], ['Team', 'Designers, researchers, developers and PMs']])}
${glance([
  ['The challenge', 'Teachers in underserved Detroit schools struggle to personalize lessons with outdated tools, while admin work takes time away from students.'],
  ['What I did', 'Led design and research for the core tools: the dashboard, calendar, assignments and the design system, built to WCAG 2.2.'],
  ['The result', 'Teacher admin workload down 30%, with task success up 22% and user errors down 30% in testing.'],
])}`,
    sections: [
      ['overview', 'Bridging the education gap with AI', 'The product', `
<p>As an <b>AI-driven educational platform</b>, Paraillel streamlines classroom management, automates tedious tasks and personalizes learning, so teachers can focus on teaching and students stay engaged.</p>
<p>Paraillel’s goal: accessible, scalable and intelligent educational tools that support both educators and students, whatever their school’s resources.</p>
<p>I designed three core tools, the <b>Dashboard</b>, <b>Calendar</b> and <b>Assignments</b>, plus the <b>Design System</b>, with a focus on classroom efficiency and student engagement. Accessibility and personalized learning came first, so I followed the Web Content Accessibility Guidelines (WCAG) 2.2 to create an inclusive experience for educators and students with diverse abilities.</p>`],
      ['problem', 'A strained education system', 'The problem', `
<div class="callout">
  <p class="big">In underserved Detroit schools, teachers struggle to connect with students and personalize lessons because of outdated tools and limited resources.</p>
  <p>Administrative burdens get in the way of student engagement and learning outcomes.</p>
</div>
<h3>What we heard</h3>
${list([['Lack of resources', 'in underserved districts.'], ['Time-consuming admin tasks.', ''], ['Limited engagement', 'and personalized learning for students.'], ['Fragmented, inaccessible technology.', '']])}`],
      ['solution', 'A bridge to better education', 'The solution', `
<p class="big">Give teachers in underserved districts intuitive, AI-driven classroom tools that streamline admin, personalize learning and make the classroom accessible to every student.</p>
${cards([
  ['Customizable dashboard', 'Teachers tailor lesson plans to each student’s progress and learning style.'],
  ['Interactive calendar & reminders', 'Students track deadlines; teachers organize lesson plans efficiently.'],
  ['Accessibility-focused design', 'Every student, including those with disabilities, can fully use the platform through WCAG 2.2-compliant features.'],
])}
<p style="margin-top:18px">As Lead Product Designer and researcher, I designed AI-powered classroom tools that addressed critical pain points, empowering educators, engaging students and improving education for underserved communities in Detroit.</p>`],
      ['process', 'Design process', 'Project overview', `
<p>I followed a structured, research-driven process that kept users at the center while aligning with business goals.</p>
<div class="scroll-x">${diamond('#DDF1FC', '#93C2F8')}</div>`],
      ['research', 'Understanding the users', 'Empathize', `
<p>To build tools that served teachers and students, I started with the challenges they faced: <b>interviews</b> with educators and <b>surveys</b> with students to find pain points, plus close work with administrators and AI specialists to keep the design aligned with Paraillel’s mission.</p>
<h3>User interviews</h3>
<p>Exploratory, qualitative research with teachers and students about their day-to-day needs and frustrations with existing tools.</p>
<dl class="facts in"><div><dt>Study type</dt><dd>Generative (exploratory)</dd></div><div><dt>Location</dt><dd>Detroit · Remote</dd></div><div><dt>Participants</dt><dd>15 teachers &amp; students</dd></div><div><dt>Length</dt><dd>30 minutes each</dd></div></dl>
<h3>Key insights</h3>
${list([['Simple to navigate.', 'Teachers needed tools that were easy to use but handled complex classroom tasks: student tracking, task management and engagement.'],
  ['Personalized learning.', 'Students needed an experience that adjusts to their pace and performance.'],
  ['Accessibility gaps.', 'Educators and students both struggled with interfaces lacking proper color contrast, readable fonts and keyboard navigation.']])}
${quotes([
  ['I spend too much time on administrative tasks instead of engaging with students.', 'Educator, Wayne County'],
  ['A lot of platforms lack proper accessibility features, making it hard for some students to use them.', 'Educator, Oakland County'],
  ['I often forget deadlines because I don’t have a clear overview of my assignments.', 'Student, Oakland County'],
  ['Some subjects are really boring or confusing.', 'Student, Macomb County'],
])}
<h3>Empathy maps</h3>
<p>Built from the interviews, to understand each user’s behavior, attitude, goals and challenges.</p>
${zoom(IMG + 'empathy-maps.webp', 'Empathy maps for a teacher and a student: what each says, thinks, does and sees')}`],
      ['personas', 'Clarifying the problems', 'Define', `
<p>Research pointed to two personas that guided our design decisions:</p>
${list([['Educator persona', 'teachers with varying tech skills who need an intuitive way to manage classroom tasks, track performance and engage students with personalized content.'],
  ['Student persona', 'students who need interactive, personalized learning tools that adapt to their progress and give feedback.']])}
<div class="pcards">${zoom(IMG + 'persona-teacher.webp', 'Persona: Mrs. Sarah Miller, high school teacher, with her bio, goals and challenges', 'pcard')}${zoom(IMG + 'persona-student.webp', 'Persona: Jane Carter, high school student, with her bio, goals and challenges', 'pcard')}</div>
<h3>Journey map</h3>
<p>How teachers and students move through Paraillel, from awareness to long-term use, with the touchpoints, emotions, pain points and opportunities at each stage.</p>
${zoom(IMG + 'journey-map.webp', 'Journey map: awareness, onboarding, first use, daily use and long-term use, by user goal, actions, emotions, pain points and opportunities')}`],
      ['ideation', 'Developing solutions', 'Ideate', `
<p>Brainstorming sessions turned the pain points into concepts:</p>
${list([['Customizable dashboards', 'for managing student data, tasks and classroom activities in one place.'],
  ['Interactive calendar', 'for organizing assignments, deadlines and events, with color-coded categories and reminders.'],
  ['Personalized learning tools', 'that use AI to recommend resources and assignments based on each student’s performance and preferences.']])}
<h3>Information architecture</h3>
<p>I structured Paraillel into a clear sitemap and mapped the user flows, so teachers and students could quickly reach the AI-powered dashboard, the calendar and the learning tools.</p>
${zoom(IMG + 'sitemap.webp', 'Paraillel sitemap: landing page, sign up and log in, then the dashboard with calendar, assignments, resources, collaborations, messages, roster, analytics, reports and settings')}
<h3>Applying UX laws</h3>
${cards([
  ['Hick’s Law', 'Fewer choices at once in the Dashboard and Calendar, so information is easy to find and act on.'],
  ['Fitts’s Law', 'Buttons and navigation sized and spaced for easy use, especially for students with varying digital literacy.'],
  ['Miller’s Law', 'Content in small, digestible chunks so teachers and students take in dashboards and lesson plans quickly.'],
  ['Aesthetic-Usability Effect', 'A clean, modern interface that feels easier to use and earns trust.'],
  ['Gestalt principles', 'Proximity, similarity and continuity in the design system for a structured, cohesive experience.'],
], 'laws', 'law')}`],
      ['wireframes', 'From sketch to prototype', 'Design', `
<p>I sketched solutions on paper first, then built high-fidelity, interactive prototypes in Figma that met WCAG 2.2, so the platform would work for students with disabilities.</p>
<div class="split">
  <div>
    <h3>Paper wireframes</h3>
    <p>Hand-drawn sketches of the key features:</p>
    ${list([['A dynamic dashboard', 'for tracking students and simplifying lesson planning.'], ['An interactive calendar', 'to help students stay organized and teachers plan.'], ['Accessible UI elements', 'with clear navigation and inclusive design.']])}
    <p>The sketches sparked conversations: teachers and students shared insights that shaped each feature before it went digital. Testing fast and iterating early kept real needs in mind from the start.</p>
  </div>
  ${fig(IMG + 'wireframes-paper.webp', 'Hand-drawn wireframes of the dashboard and the calendar')}
</div>
<h3>Low-fidelity wireframes</h3>
<p>Quick wireframes of the dashboard and calendar mapped the core features and allowed rapid iteration before high fidelity.</p>
${zoom(IMG + 'wireframes-lofi.webp', 'Low-fidelity wireframes of the dashboard and the calendar')}`],
      ['testing', 'Usability testing', 'Design', `
<p>We ran a usability study to see whether the Dashboard, Calendar and design system were easy for teachers and students to use: how well they completed tasks and how they engaged with the AI features.</p>
<dl class="facts in"><div><dt>Method</dt><dd>Unmoderated usability study</dd></div><div><dt>Location</dt><dd>Remote</dd></div><div><dt>Participants</dt><dd>12</dd></div><div><dt>Length</dt><dd>30 minutes each</dd></div></dl>
<h3>Key findings</h3>
${cards([
  ['Overwhelmed by the dashboard', 'Too much information at once. Users wanted a streamlined dashboard they could customize.'],
  ['Hard to find assignments', 'Users struggled to locate tasks quickly, so we added assignment tabs across the interface.'],
  ['Hidden accessibility settings', 'Settings were buried in menus, so they were hard to find and adjust.'],
])}`],
      ['final', 'High-fidelity design', 'Design', `
<p>I turned the sketches into high-fidelity prototypes, refining every detail for a seamless, inclusive experience. They let educators and students experience Paraillel before it launched.</p>
${zoom(IMG + 'hifi-dashboard.webp', 'Dashboard with callouts: student performance insights, personalized lesson planning, classroom management tools and accessibility-first design')}
${zoom(IMG + 'hifi-calendar.webp', 'Calendar with callouts: smart scheduling, automated reminders, seamless integration and collaborative planning')}
${zoom(IMG + 'hifi-assignments.webp', 'Assignments with callouts: customizable assignments, personalized learning paths, deadline reminders and dashboard integration')}
<p class="hint">Tap an image to see it full size.</p>`],
      ['system', 'Design system', 'Design', `
<p>The Paraillel design system brought <b>consistency, scalability and accessibility</b> to every AI-powered classroom tool. Standard components that follow WCAG 2.2 made the experience inclusive, sped up development and kept the platform visually cohesive.</p>
<div class="split rev">${zoom(IMG + 'design-system.webp', 'Design system: logo, buttons, toggles, inputs, dropdowns, progress rings and icons', '')}${zoom(IMG + 'color-type.webp', 'Color system and typography scale', '')}</div>`],
      ['takeaways', 'Takeaways', 'Reflect', `
<div class="split">
  <div><p class="big">Designing for underserved school districts reinforced the importance of accessibility, scalability and user-centered solutions.</p>
  <p>AI-powered tools streamlined admin for educators and personalized learning for students, making education more efficient and engaging. The project showed the value of continuous research, iterative design and stakeholder collaboration in building meaningful products.</p></div>
  ${fig(IMG + 'takeaways.webp', 'A teacher working on a laptop at her desk')}
</div>`],
      ['next', 'Results & next steps', 'Reflect', `
<div class="split">
  <div>
    <p>The project supported Paraillel’s business goals by <b>reducing teacher admin workload by 30%</b>, boosting student engagement and increasing daily use across classrooms.</p>
    <p>Next, continued feedback from teachers and students will shape the dashboard as classroom needs evolve:</p>
    ${list([['Usability testing & iteration', 'with educators and students.'], ['Better AI personalization', 'from real classroom data.'], ['LMS integration', 'with existing school systems.'], ['Refined teacher & student dashboards', 'for more intuitive insights.'], ['Scaling accessibility', 'for diverse learning needs.']])}
    <p>My work laid the foundation for a scalable, user-centered product that empowers educators and improves learning in underserved communities.</p>
  </div>
  ${fig(IMG + 'next-steps.webp', 'Paraillel sign-up screen on a laptop')}
</div>`],
    ],
  };
};
