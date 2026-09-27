export function GuideSection() {
  return <section className="section guide-section" aria-labelledby="guide-title">
    <div className="shell guide-grid">
      <div className="guide-photo" role="img" aria-label="Amit Chakraborty, guide at AccelPro Academy">
        <span className="sr-only">Amit Chakraborty with 30+ years of professional experience</span>
      </div>
      <div>
        <p className="eyebrow">Meet your guide</p>
        <h2 className="display guide-title" id="guide-title">Practical guidance from Amit Chakraborty.</h2>
        <p>With 30+ years of professional experience and hands-on work in AI and digital solutions, I focus on practical implementation over theory.</p>
        <p>I help professionals cut through the noise, build the right system and test it in the real world.</p>
        <p className="guide-proof">Hands-on experience building AI-powered products and digital solutions.</p>
      </div>
    </div>
  </section>;
}
