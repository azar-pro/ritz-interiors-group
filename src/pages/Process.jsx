import Seo from '../components/Seo'
import useReveal from '../hooks/useReveal'
import InnerHero from '../components/InnerHero'
import FinalCTA from '../components/FinalCTA'
import { conceptReality } from '../data/projects'
import img from '../assets/project-living-wide.webp'
import { useEffect, useRef } from 'react'

const steps=[
 ['Consultation','Understanding the space, priorities and the way it needs to be lived or used.'],
 ['Concept','A visual and spatial direction shaped through references, mood and early composition.'],
 ['Design Development','The concept becomes a more resolved interior through layout, detailing and visualisation.'],
 ['Material Selection','Surfaces, finishes and key material relationships are refined into a coherent palette.'],
 ['Execution','The design moves into implementation with focus on precision, proportion and finish.'],
 ['Final Styling','Furniture, objects, lighting and final details bring the space into balance.']
]
export default function Process(){
 const trackRef=useRef(null)
 useReveal()
 useEffect(()=>{
   const reduced=window.matchMedia('(prefers-reduced-motion: reduce)').matches
   if(reduced) return
   const onScroll=()=>{
     const el=trackRef.current
     if(!el) return
     const r=el.getBoundingClientRect()
     const vh=window.innerHeight
     const progress=Math.max(0,Math.min(1,(vh-r.top)/(r.height+vh*.25)))
     el.style.setProperty('--process-progress',progress)
   }
   onScroll()
   window.addEventListener('scroll',onScroll,{passive:true})
   window.addEventListener('resize',onScroll)
   return ()=>{window.removeEventListener('scroll',onScroll);window.removeEventListener('resize',onScroll)}
 },[])
 return <>
 <Seo title="Process" description="A considered interior architecture and design process from consultation to final styling."/>
 <InnerHero eyebrow="Our Process" title="A considered process. A refined result." text="From first conversation to final styling, each stage is treated as part of one design language." image={img}/>
 <section className="section process-page" data-reveal><div className="shell process-track" ref={trackRef}>{steps.map((s,i)=><article key={s[0]}><span>0{i+1}</span><h2>{s[0]}</h2><p>{s[1]}</p></article>)}</div></section>
 <section className="section concept-reality" data-reveal><div className="shell"><div className="concept-copy"><span className="eyebrow">From Vision to Reality</span><h2>Ideas take shape<br/>in extraordinary spaces.</h2></div><div className="concept-pair"><figure><img src={conceptReality.concept} alt="Interior design concept"/><figcaption>CONCEPT</figcaption></figure><figure><img src={conceptReality.reality} alt="Executed interior"/><figcaption>REALITY</figcaption></figure></div></div></section>
 <FinalCTA/>
 </>
}
