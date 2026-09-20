import Seo from '../components/Seo'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import useReveal from '../hooks/useReveal'
import SectionLabel from '../components/SectionLabel'
import ArrowLink from '../components/ArrowLink'
import FinalCTA from '../components/FinalCTA'
import { projects } from '../data/projects'
import heroLiving from '../assets/hero-living.webp'
import heroVilla from '../assets/hero-villa.webp'
import heroInterior from '../assets/hero-interior.webp'
import detailReading from '../assets/detail-reading.webp'
import detailBedroom from '../assets/detail-bedroom.webp'
import livingLight from '../assets/living-light.webp'
import logoHero from '../assets/logoHeroData'

const heroSlides = [
  {src:heroLiving, caption:'Private Residence · Fès', position:'center center', zoom:'out'},
  {src:heroVilla, caption:'Residential Architecture', position:'center 45%', zoom:'in'},
  {src:heroInterior, caption:'Bespoke Interior Design', position:'center center', zoom:'out'}
]

export default function Home(){
  useReveal()
  const [slide,setSlide] = useState(0)
  useEffect(()=>{
    const reduced=window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if(reduced) return
    const id=setInterval(()=>setSlide(v=>(v+1)%heroSlides.length),6000)
    return ()=>clearInterval(id)
  },[])

  return <>
    <Seo title="Home" description="Luxury architecture and interior design by Ritz Interiors Group in Fès, Morocco."/>
    <section className={`hero hero-home hero-home--slide-${slide}`}>
      <div className="hero-media" aria-hidden="true">
        {heroSlides.map((item,i)=>(
          <div
            key={item.src}
            className={`hero-slide ${i===slide?'is-active':''} ${item.zoom==='in'?'hero-slide--zoom-in':'hero-slide--zoom-out'}`}
          >
            <img
              src={item.src}
              alt=""
              style={{objectPosition:item.position}}
              fetchPriority={i===0?'high':'auto'}
              loading={i===0?'eager':'lazy'}
              decoding="async"
            />
          </div>
        ))}
      </div>
      <div className="hero-overlay"/>
      <Link to="/" className="hero-brand" aria-label="Ritz Interiors Group home"><img src={logoHero} alt="Ritz Interiors Group"/></Link>
      <div className="shell hero-content">
        <span className="eyebrow hero-kicker">Ritz Interiors Group</span>
        <h1><span>Spaces composed</span><span>with quiet distinction.</span></h1>
        <p>Interior Architecture · Bespoke Design · Fès</p>
        <ArrowLink to="/projects">View Projects</ArrowLink>
      </div>
      <div className="hero-caption">{heroSlides[slide].caption}</div>
    </section>

    <section className="section selected-projects" data-reveal>
      <div className="shell">
        <SectionLabel right="Selected Works">Featured Projects</SectionLabel>
        <div className="editorial-projects">
          <Link className="project-feature project-feature--tall" to={`/projects/${projects[0].slug}`}>
            <div className="project-image"><img src={projects[0].cover} alt={`${projects[0].title} by Ritz Interiors Group`} loading="lazy"/></div>
            <div className="project-meta"><span>PROJECT 01</span><h3>{projects[0].title}</h3><p>{projects[0].category} · {projects[0].location}</p><b>→</b></div>
          </Link>
          <div className="project-cluster">
            <Link className="project-feature project-feature--wide" to={`/projects/${projects[1].slug}`}>
              <div className="project-image"><img src={projects[1].cover} alt={`${projects[1].title} by Ritz Interiors Group`} loading="lazy"/></div>
              <div className="project-meta"><span>PROJECT 02</span><h3>{projects[1].title}</h3><p>{projects[1].category}</p><b>→</b></div>
            </Link>
            <div className="project-pair">
              {projects.slice(2,4).map((p)=><Link key={p.slug} className="project-feature project-feature--small" to={`/projects/${p.slug}`}>
                <div className="project-image"><img src={p.cover} alt={`${p.title} by Ritz Interiors Group`} loading="lazy"/></div>
                <div className="project-meta"><span>PROJECT {p.index}</span><h3>{p.title}</h3><p>{p.category}</p><b>→</b></div>
              </Link>)}
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="section philosophy dark-section" data-reveal>
      <div className="shell philosophy-grid">
        <div>
          <SectionLabel>Our Philosophy</SectionLabel>
          <h2>A Signature<br/>of Quiet Luxury</h2>
          <p>Ritz Interiors Group creates refined interiors where proportion, materials, light and craftsmanship come together to form spaces with a distinct sense of identity.</p>
        </div>
        <div className="philosophy-words"><span>PEOPLE</span><span>SPACES</span><span>MATERIALS</span><strong>A MORE MEANINGFUL LIFE</strong></div>
        <div className="philosophy-image"><img src={detailReading} alt="Interior material and lighting detail" loading="lazy"/></div>
      </div>
    </section>

    <section className="section expertise-preview" data-reveal>
      <div className="shell">
        <SectionLabel right="Spaces for a better everyday">Our Expertise</SectionLabel>
        <div className="expertise-rows compact">
          {['Interior Architecture','Interior Design','Bespoke Furniture','Renovation'].map((x,i)=><div className="expertise-row" key={x}><span>0{i+1}</span><h3>{x}</h3></div>)}
        </div>
        <ArrowLink to="/expertise">Explore Expertise</ArrowLink>
      </div>
    </section>

    <section className="section bespoke-preview" data-reveal>
      <div className="shell bespoke-grid">
        <div className="bespoke-image"><img src={detailBedroom} alt="Bespoke bedroom and furniture detail" loading="lazy"/></div>
        <div className="bespoke-copy">
          <SectionLabel>Bespoke by Ritz</SectionLabel>
          <h2>Designed for<br/>a more personal living.</h2>
          <p>Custom furniture and refined details, crafted to elevate everyday life with elegance and purpose.</p>
          <div className="bespoke-links">{['Furniture','Lighting','Storage','Dining Pieces','Bathrooms','Custom Elements'].map(x=><span key={x}>{x}<b>→</b></span>)}</div>
          <ArrowLink to="/bespoke">Discover Bespoke</ArrowLink>
        </div>
      </div>
    </section>

    <section className="section studio-preview" data-reveal>
      <div className="shell studio-preview-grid">
        <div className="studio-preview-image"><img src={livingLight} alt="Refined residential interior by Ritz Interiors Group" loading="lazy"/></div>
        <div>
          <SectionLabel right="Fès, Morocco">Ritz Interiors Group</SectionLabel>
          <h2>Architecture & Design Studio</h2>
          <p>A design studio creating residential and commercial interiors through a refined dialogue between contemporary living, craftsmanship and materiality.</p>
          <ArrowLink to="/studio">Our Studio</ArrowLink>
        </div>
      </div>
    </section>
    <FinalCTA/>
  </>
}
