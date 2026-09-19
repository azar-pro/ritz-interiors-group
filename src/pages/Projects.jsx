import Seo from '../components/Seo'
import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import useReveal from '../hooks/useReveal'
import InnerHero from '../components/InnerHero'
import FinalCTA from '../components/FinalCTA'
import { projects } from '../data/projects'
import hero from '../assets/project-living-wide.webp'

const filters=['All','Residential','Commercial','Architecture','Bespoke']

export default function Projects(){
  useReveal(); const [filter,setFilter]=useState('All')
  const shown=useMemo(()=>projects.filter(p=>{
    if(filter==='All') return true
    if(filter==='Residential') return /Residential/.test(p.category)
    if(filter==='Commercial') return /Commercial|Hospitality|Retail/.test(p.category)
    return p.category.includes(filter)
  }),[filter])
  return <>
 <Seo title="Projects" description="Selected residential, commercial and architectural projects by Ritz Interiors Group."/>
    <InnerHero eyebrow="Portfolio" title="Selected Projects" text="A curated selection of residential, commercial and architectural spaces." image={hero}/>
    <section className="section projects-index" data-reveal>
      <div className="shell">
        <div className="filters" role="group" aria-label="Project filters">{filters.map(f=><button className={f===filter?'active':''} key={f} onClick={()=>setFilter(f)}>{f}</button>)}</div>
        <div className="projects-masonry">
          {shown.map((p,i)=><Link key={p.slug} to={`/projects/${p.slug}`} className={`index-project index-project--${i%4}`}>
            <div className="project-image"><img src={p.cover} alt={`${p.title} — ${p.category}`} loading="lazy"/></div>
            <div className="index-project__meta"><span>PROJECT {p.index}</span><h2>{p.title}</h2><p>{p.category}{p.location?` · ${p.location}`:''}</p><b>View Project →</b></div>
          </Link>)}
        </div>
      </div>
    </section>
    <FinalCTA/>
  </>
}
