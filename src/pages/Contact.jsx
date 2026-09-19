import Seo from '../components/Seo'
import useReveal from '../hooks/useReveal'
import InnerHero from '../components/InnerHero'
import hero from '../assets/project-dining.webp'

export default function Contact(){useReveal();return <>
 <Seo title="Contact" description="Start a project conversation with Ritz Interiors Group in Fès, Morocco."/>
 <InnerHero eyebrow="Project Inquiry" title="Have a space in mind? Let’s shape it together." text="Tell us about the project and the kind of space you are planning." image={hero}/>
 <section className="section contact-section" data-reveal><div className="shell contact-grid"><div className="contact-side"><span className="eyebrow">Ritz Interiors Group</span><h2>Start a considered conversation.</h2><p>Fès, Morocco</p><a href="https://www.instagram.com/ritzinteriorsgroup/" target="_blank" rel="noreferrer">@ritzinteriorsgroup ↗</a></div><form className="inquiry-form" name="project-inquiry" method="POST" data-netlify="true"><input type="hidden" name="form-name" value="project-inquiry"/><label>Name<input name="name" required/></label><label>Phone<input name="phone" type="tel"/></label><label>Email<input name="email" type="email" required/></label><label>Project Type<select name="projectType" defaultValue=""><option value="" disabled>Select project type</option><option>Residential Interior</option><option>Commercial Interior</option><option>Architecture</option><option>Bespoke Design</option><option>Renovation</option></select></label><label>Location<input name="location"/></label><label>Approximate Budget<input name="budget"/></label><label className="full">Message<textarea name="message" rows="5" required/></label><button className="submit-btn" type="submit">Send Inquiry →</button></form></div></section>
 </>}
