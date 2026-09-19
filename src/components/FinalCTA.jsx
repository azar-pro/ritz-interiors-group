import ArrowLink from './ArrowLink'
export default function FinalCTA(){
  return <section className="final-cta dark-section" data-reveal>
    <div className="shell final-cta__inner">
      <div><span className="eyebrow">Start your project</span><h2>Have a space in mind?<br/><em>Let’s shape it together.</em></h2></div>
      <ArrowLink to="/contact">Start Your Project</ArrowLink>
    </div>
  </section>
}
