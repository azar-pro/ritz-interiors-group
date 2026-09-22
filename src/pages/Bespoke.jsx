import Seo from '../components/Seo'
import useReveal from '../hooks/useReveal'
import InnerHero from '../components/InnerHero'
import SectionLabel from '../components/SectionLabel'
import FinalCTA from '../components/FinalCTA'
import { useState } from 'react'
import hero from '../assets/detail-bedroom.webp'
import bath from '../assets/project-bath.webp'
import detail from '../assets/detail-marble.webp'
import reading from '../assets/detail-reading-clean.png'
import pink from '../assets/pink-bedroom.webp'
import dining from '../assets/project-dining.webp'
import living from '../assets/project-living-wide.webp'

const items=[
 ['Furniture','Custom furniture shaped around proportion, comfort and the character of each interior.',reading,'center 48%'],
 ['Custom Storage','Integrated storage designed as part of the architecture, not added after it.',living,'center 50%'],
 ['Dining Pieces','Tables and dining elements composed for everyday rituals and considered gatherings.',dining,'center 48%'],
 ['Bathrooms','Tailored vanities, surfaces and details that bring calm precision to private spaces.',bath,'center 52%'],
 ['Lighting','Layered decorative and architectural lighting designed to shape atmosphere.',pink,'center 42%'],
 ['Decorative Elements','Objects, finishes and accents selected to complete the visual rhythm of a room.',detail,'center 44%'],
 ['Built-in Joinery','Wall systems, cabinetry and crafted architectural elements resolved as one composition.',hero,'center 46%']
]

const materials=['Marble','Wood','Stone','Fabric','Metal','Glass','Lighting']

export default function Bespoke(){
 const [active,setActive]=useState(0)
 useReveal()
 return <>
  <Seo title="Bespoke" description="Bespoke furniture, joinery, lighting and custom interior elements by Ritz Interiors Group."/>
  <InnerHero eyebrow="Bespoke by Ritz" title="Designed beyond the room." text="Custom elements shaped with the same attention as the architecture around them." image={hero}/>

  <section className="section bespoke-index bespoke-index--editorial" data-reveal>
    <div className="shell">
      <SectionLabel>Bespoke Elements</SectionLabel>
      <div className="bespoke-editorial">
        <div className="bespoke-editorial__list">
          {items.map((item,i)=>
            <article
              key={item[0]}
              className={`bespoke-editorial__item ${active===i?'is-active':''}`}
              onMouseEnter={()=>setActive(i)}
              onFocus={()=>setActive(i)}
              tabIndex="0"
            >
              <span>0{i+1}</span>
              <div>
                <h2>{item[0]}</h2>
                <p>{item[1]}</p>
              </div>
              <img
                className="bespoke-editorial__mobile-image"
                src={item[2]}
                alt=""
                style={{objectPosition:item[3]}}
                loading="lazy"
              />
            </article>
          )}
        </div>

        <aside className="bespoke-editorial__visual" aria-live="polite">
          <div className="bespoke-editorial__frame">
            {items.map((item,i)=>
              <img
                key={item[0]}
                src={item[2]}
                alt=""
                className={i===active?'is-active':''}
                style={{objectPosition:item[3]}}
                loading={i===0?'eager':'lazy'}
              />
            )}
          </div>
          <div className="bespoke-editorial__meta">
            <span>0{active+1}</span>
            <p>{items[active][0]}</p>
          </div>
        </aside>
      </div>
    </div>
  </section>

  <section className="section material-story dark-section" data-reveal>
    <div className="shell">
      <SectionLabel right="Texture / Detail / Atmosphere">Materials define the atmosphere.</SectionLabel>
      <div className="material-strip">
        <img src={detail} alt="Marble and textile detail" loading="lazy"/>
        <img src={reading} alt="Reading corner material detail" loading="lazy"/>
        <img src={bath} alt="Bathroom stone and glass detail" loading="lazy"/>
        <img src={pink} alt="Lighting and upholstered bedroom detail" loading="lazy"/>
      </div>
      <div className="material-tags">{materials.map(x=><span key={x}>{x}</span>)}</div>
    </div>
  </section>

  <FinalCTA/>
 </>
}
