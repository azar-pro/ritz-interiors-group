import { Link } from 'react-router-dom'
import logo from '../assets/logo-original.jpg'

export default function Footer(){
  return <footer className="site-footer" data-reveal>
    <div className="shell footer-grid">
      <div className="footer-brand"><img src={logo} alt="Ritz Interiors Group"/><p>Architecture & Design<br/>Fès · Morocco</p></div>
      <div className="footer-nav">
        <Link to="/projects">Projects</Link><Link to="/expertise">Expertise</Link><Link to="/bespoke">Bespoke</Link><Link to="/studio">Studio</Link><Link to="/process">Process</Link><Link to="/contact">Contact</Link>
      </div>
      <div className="footer-tagline"><em>Better Spaces<br/>Brighter Lives.</em></div>
      <div className="footer-social"><a href="https://www.instagram.com/ritzinteriorsgroup/" target="_blank" rel="noreferrer">Instagram ↗</a><span>@ritzinteriorsgroup</span></div>
    </div>
    <div className="shell footer-bottom"><span>© {new Date().getFullYear()} Ritz Interiors Group.</span><span>Interior Architecture · Bespoke Design · Fès, Morocco</span></div>
  </footer>
}
