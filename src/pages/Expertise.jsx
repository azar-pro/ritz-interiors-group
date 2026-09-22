import Seo from '../components/Seo'
import useReveal from '../hooks/useReveal'
import InnerHero from '../components/InnerHero'
import FinalCTA from '../components/FinalCTA'
import { useState } from 'react'
import img1 from '../assets/project-dining.webp'
import img2 from '../assets/project-living-wide.webp'
import img3 from '../assets/detail-marble.webp'
import img4 from '../assets/hero-villa.webp'

const services=[
 ['Interior Architecture','Spatial structure, circulation and proportion shaped as one coherent architectural language.',img1],
 ['Interior Design','Material, light, furniture and detail composed into calm, purposeful interiors.',img2],
 ['Bespoke Furniture','Custom pieces developed around the scale, function and identity of each space.',img3],
 ['Space Planning','Clear layouts that improve movement, use and visual balance without overfilling the room.',img1],
 ['Renovation','Existing spaces reworked with a measured approach to structure, finishes and atmosphere.',img2],
 ['Styling & Decoration','The final layer of objects, textiles, artwork and tonal balance that makes a space feel complete.',img3],
 ['Exterior Design','A restrained architectural approach to façades, entrances and outdoor spatial identity.',img4]
]

export default function Expertise(){
 const [active,setActive]=useState(0)
 useReveal()
 return <>
  <Seo title="Expertise" description="Interior architecture, interior design, bespoke furniture, renovation and exterior design."/>
  <InnerHero eyebrow="Expertise" title="Expertise shaped around the way you live." text="A considered approach to architecture, interiors and bespoke design." image={img1}/>
  <section className="section service-list service-list--editorial" data-reveal>
    <div className="shell service-index">
      <div className="service-index__list">
        {services.map((s,i)=>
          <article
            className={`service-item ${active===i?'is-active':''}`}
            key={s[0]}
            onMouseEnter={()=>setActive(i)}
            onFocus={()=>setActive(i)}
            tabIndex="0"
          >
            <span>0{i+1}</span>
            <div>
              <h2>{s[0]}</h2>
              <p>{s[1]}</p>
            </div>
            <img className="service-item__mobile-image" src={s[2]} alt="" loading="lazy"/>
          </article>
        )}
      </div>

      <aside className="service-index__visual" aria-live="polite">
        <div className="service-index__visual-frame">
          {services.map((s,i)=>
            <img
              key={s[0]}
              src={s[2]}
              alt=""
              className={i===active?'is-active':''}
              loading={i===0?'eager':'lazy'}
            />
          )}
        </div>
        <div className="service-index__visual-meta">
          <span>0{active+1}</span>
          <p>{services[active][0]}</p>
        </div>
      </aside>
    </div>
  </section>
  <FinalCTA/>
 </>
}
