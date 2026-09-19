import Seo from '../components/Seo'
import { Link, useParams, Navigate } from 'react-router-dom'
import useReveal from '../hooks/useReveal'
import { projects } from '../data/projects'
import FinalCTA from '../components/FinalCTA'

export default function ProjectDetail(){
  useReveal(); const {slug}=useParams(); const p=projects.find(x=>x.slug===slug)
  if(!p) return <Navigate to="/projects" replace/>
  const idx=projects.indexOf(p), prev=projects[(idx-1+projects.length)%projects.length], next=projects[(idx+1)%projects.length]
  return <>
    <Seo title={p.title} description={`${p.category} project by Ritz Interiors Group.`}/>
    <section className="project-detail-hero">
      <img src={p.cover} alt={`${p.title} by Ritz Interiors Group`}/><div className="project-detail-veil"/>
      <div className="shell project-detail-title"><span className="eyebrow">PROJECT {p.index}</span><h1>{p.title}</h1><p>{p.category}{p.location?` · ${p.location}`:''}</p></div>
    </section>
    <section className="section project-intro" data-reveal><div className="shell project-intro-grid"><span className="eyebrow">Project Direction</span><h2>{p.intro}</h2><p>{p.direction}</p></div></section>
    <section className="project-gallery" data-reveal>
      <div className="shell">
        {p.gallery.map((img,i)=><figure key={img} className={`gallery-shot gallery-shot--${i%3}`}><img src={img} alt={`${p.title} project view ${i+1}`} loading="lazy"/></figure>)}
      </div>
    </section>
    <section className="section project-materials" data-reveal><div className="shell material-grid"><div><span className="eyebrow">Materials</span><h2>Materiality with restraint.</h2></div><div className="material-list">{p.materials.map((m,i)=><span key={m}><b>0{i+1}</b>{m}</span>)}</div></div></section>
    <nav className="project-nav shell" aria-label="Project navigation"><Link to={`/projects/${prev.slug}`}>← Previous Project<span>{prev.title}</span></Link><Link to={`/projects/${next.slug}`}>Next Project →<span>{next.title}</span></Link></nav>
    <FinalCTA/>
  </>
}
