import Seo from '../components/Seo'
import useReveal from '../hooks/useReveal'
import InnerHero from '../components/InnerHero'
import FinalCTA from '../components/FinalCTA'
import img1 from '../assets/project-dining.webp'
import img2 from '../assets/detail-bedroom.webp'
import img3 from '../assets/project-bath.webp'

const services=[
 ['Interior Architecture','Spatial structure, circulation and proportion shaped as one coherent architectural language.',img1],
 ['Interior Design','Material, light, furniture and detail composed into calm, purposeful interiors.',img2],
 ['Bespoke Furniture','Custom pieces developed around the scale, function and identity of each space.',img2],
 ['Space Planning','Clear layouts that improve movement, use and visual balance without overfilling the room.',img1],
 ['Renovation','Existing spaces reworked with a measured approach to structure, finishes and atmosphere.',img3],
 ['Styling & Decoration','The final layer of objects, textiles, artwork and tonal balance that makes a space feel complete.',img2],
 ['Exterior Design','A restrained architectural approach to façades, entrances and outdoor spatial identity.',img1]
]
export default function Expertise(){useReveal();return <>
 <Seo title="Expertise" description="Interior architecture, interior design, bespoke furniture, renovation and exterior design."/>
 <InnerHero eyebrow="Expertise" title="Expertise shaped around the way you live." text="A considered approach to architecture, interiors and bespoke design." image={img1}/>
 <section className="section service-list" data-reveal><div className="shell">{services.map((s,i)=><article className="service-item" key={s[0]}><span>0{i+1}</span><div><h2>{s[0]}</h2><p>{s[1]}</p></div><img src={s[2]} alt="" loading="lazy"/></article>)}</div></section>
 <FinalCTA/>
 </>}
