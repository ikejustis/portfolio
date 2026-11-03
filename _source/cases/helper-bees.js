/* The Helper Bees case study. Text from the current ijnwogu.com page, lightly edited. */
module.exports = ({ B, fig, zoom, list, facts, glance }) => {
  const IMG = B + 'assets/img/hb/';
  const C = '#B07D00';
  const box = (rows) => '<div class="callout hb">' + rows + '</div>';
  return {
    key: 'helper-bees', color: C,
    title: 'The Helper Bees case study · Ikedi J. Nwogu',
    description: 'Lead Product Designer on a personalized recommendations experience that helps older adults and their caregivers find aging-in-place products and services.',
    hero: `<section class="case-hero" style="--c:${C}">
  <div class="ch-txt">
    <img class="ch-logo sm" src="${IMG}logo.webp" alt="The Helper Bees" width="503" height="93">
    <h1 class="long" style="color:#1d1d1d">Designing a recommendation experience for aging-in-place products.</h1>
    <figure class="hb-quote"><blockquote>“Team, our senior bees can’t find their recommendations once they fly away from the home comb. How do we fix this?”</blockquote><figcaption>The brief</figcaption></figure>
  </div>
  <div class="ch-pic"><img src="${IMG}hero.webp" alt="The Helper Bees personalized recommendations page on a laptop and an iPhone" width="1336" height="908"></div>
</section>
${facts([['Company', 'The Helper Bees'], ['Role', 'Lead Product Designer'], ['Platform', 'Responsive web + mobile'], ['Focus', 'Older adults & caregivers, accessibility']])}
${glance([
  ['The challenge', 'Older adults and their caregivers couldn’t find their recommended products and services once they left the page.'],
  ['What I did', 'Designed the recommendations experience end to end: the invitation, a guided questionnaire, and personalized results.'],
  ['The result', 'A calm, three-step journey that builds trust at every step and explains why each recommendation fits.'],
])}`,
    sections: [
      ['background', 'Why this matters', 'Background', `
<div class="split">
  <div>
    <p class="big">This isn’t just about building a webpage. It’s about helping older adults and their caregivers find the right support without feeling overwhelmed by technology or decision fatigue.</p>
    <p>I designed a Recommendations page for The Helper Bees’ marketplace to help seniors and their caregivers find the right services and products to live independently at home. My perspective comes from working as a medical scribe in a clinic, supporting seniors who had or needed in-home health care. I saw firsthand how access to the right support can transform their daily lives.</p>
    <p>So I focused on an experience that feels human, empathetic and easy to navigate: guiding people through the questionnaire, presenting clear personalized recommendations, and building trust at every step.</p>
  </div>
  ${fig(IMG + 'banner.webp', 'The Helper Bees logo over a photo of an older adult with a caregiver')}
</div>`],
      ['pre', 'Invitation', 'Before the questionnaire', `
<div class="split">
  <div>
    <p>This is the first impression, the moment trust is built or lost. The hero message, “Discover the perfect support for your needs,” works as a friendly invitation, followed by clear, benefit-driven subtext. The page is intentionally uncluttered, guiding people to one clear call to action: <b>Start Questionnaire</b>.</p>
    ${box(list([['Warm headline:', '“Discover the perfect support for your needs.”'], ['Subtext:', '“Our smart questionnaire matches you with products and services tailored to your lifestyle and benefits.”'], ['Trust-building points:', 'Quick & Easy (3 minutes), Personalized Results, Private & Secure.'], ['Social proof:', '“92% of members found helpful matches.”'], ['Large, high-contrast', 'Start Questionnaire button.'], ['Always-there “Need Help?”', 'tab with live chat and phone support.']]))}
  </div>
  ${zoom(IMG + 'pre.webp', 'The invitation page on a laptop and an iPhone', '')}
</div>`],
      ['during', 'Guided journey', 'During the questionnaire', `
<div class="split">
  <div>
    <p>This stage is all about <b>reducing cognitive load</b>. I broke the questionnaire into small, digestible steps, with a progress bar to reassure people they’re moving forward. Helpful hints appear in context, so they never feel like instructions shouting at them.</p>
    ${box(list([['Progress feedback:', 'step-by-step navigation with clear labels (“1 of 5”) and a progress bar that stays at the top.'], ['Accessible input design:', 'large tap targets.'], ['Encouragement:', 'subtle visuals and icons so the process feels less clinical.']]))}
  </div>
  ${zoom(IMG + 'during.webp', 'A questionnaire step on a laptop and an iPhone', '')}
</div>`],
      ['post', 'Personalized empowerment', 'After the questionnaire', `
<div class="split">
  <div>
    <p>Once completed, the Recommendations page delivers a moment of clarity. Seniors and caregivers see tailored suggestions, not just a list, with a short summary of why each one fits their needs. This builds trust and makes the decision easier.</p>
    ${box(list([['Warm message:', 'based on your answers, products and services that match your needs.'], ['Recommendation cards', 'with large images or icons, coverage badges (Fully Covered, Partially Covered, Not Covered), a short benefit summary and why it was recommended, and clear actions: “Get Now” and “Schedule Service”.'], ['Filter and sort', 'by urgency, cost or category.'], ['Benefits summary', 'below, for full transparency.'], ['Update Preferences', 'to revise answers anytime.']]))}
  </div>
  ${zoom(IMG + 'post.webp', 'Personalized recommendations on a laptop and an iPhone', '')}
</div>`],
      ['flow', 'Recommendations user flow', 'Prototype', `
<p>The full journey on a phone: the invitation, each questionnaire step, and the personalized results.</p>
<figure class="fig flow"><video src="${B}assets/video/hb-flow.mp4" poster="${IMG}flow-poster.webp" autoplay muted loop playsinline preload="metadata" aria-label="Prototype walkthrough of the recommendations questionnaire on an iPhone"></video></figure>`],
    ],
  };
};
