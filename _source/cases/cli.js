/* UT Health × Children's Learning Institute. Text from the current ijnwogu.com page, lightly edited.
   CLI's project visuals are restricted, so this page stays text-led on purpose. */
module.exports = ({ B, fig, list, facts, glance }) => {
  const IMG = B + 'assets/img/cli/';
  const C = '#B5643C';
  return {
    key: 'cli', color: C,
    title: 'UT Health × CLI · Ikedi J. Nwogu',
    description: 'Senior UX Designer and Researcher at the Children’s Learning Institute, UTHealth Houston: research-led, accessible tools for educators and parents on the CLI Engage platform.',
    hero: `<section class="case-hero" style="--c:${C}">
  <div class="ch-txt">
    <img class="ch-logo" src="${IMG}logo.webp" alt="Children’s Learning Institute and UTHealth Houston" width="707" height="168">
    <h1 class="long" style="color:#1d1d1d">UX initiatives in the education and clinical setting.</h1>
    <p class="lede">Research-led, accessible tools that help educators and parents support every child’s learning and health.</p>
  </div>
  <div class="ch-pic"><img src="${IMG}laptop.webp" alt="The Children’s Learning Institute website on a laptop on a wooden desk" width="1800" height="1251"></div>
</section>
${facts([['Company', 'Children’s Learning Institute · UTHealth Houston'], ['Role', 'Senior UX Designer – UX Researcher'], ['Timeline', '2024 – 2025'], ['Focus', 'Research, ideation workshops, wireframing, prototyping, usability testing, design systems, accessibility']])}
${glance([
  ['The mission', 'Advance learning and health outcomes for all children through research, resources, clinical programs and services.'],
  ['What I do', 'Lead UX design and research on public and internal tools, including the CLI Engage platform.'],
  ['The result', 'A 20% improvement in usability and user satisfaction, measured through research and testing with educators.'],
])}`,
    sections: [
      ['overview', 'Overview', 'The role', `
<p class="big">The Children’s Learning Institute’s mission is to advance learning and health outcomes for all children through research, resource development, clinical programs and service delivery.</p>
<p>As the User Experience Designer and Researcher at the Children’s Learning Institute, part of UTHealth Houston, I work on public and internal tools, redesigning products across the organization. I collaborate every day with engineers, product managers and business analysts.</p>
<p>The goal of my role: improve how our products work, so people get their work done and are more effective at improving outcomes for children.</p>`],
      ['accomplishments', 'Some of my accomplishments', 'Impact', `
${list([['Led UX design and research for CLI Engage,', 'working in Agile and Scrum with cross-functional teams to deliver user-centered tools that improved engagement and satisfaction for educators and parents in early childhood education.'],
      ['Applied human-centered design', 'so the platform works for diverse users, from educators with varying technical skills to parents following their young children’s progress.'],
      ['Ran user research, usability testing and feedback sessions', 'with educators, driving a 20% improvement in usability and user satisfaction.']])}
<p class="hint">To respect the privacy of CLI and its initiatives, details and visuals of my projects are restricted.</p>`],
    ],
  };
};
