import Seo from '../components/Seo'
import useReveal from '../hooks/useReveal'
import InnerHero from '../components/InnerHero'
import SectionLabel from '../components/SectionLabel'
import FinalCTA from '../components/FinalCTA'
import hero from '../assets/detail-bedroom.webp'
import bath from '../assets/project-bath.webp'
import detail from '../assets/detail-marble.webp'
import reading from '../assets/detail-reading-clean.png'
import pink from '../assets/pink-bedroom.webp'

const items=['Furniture','Custom Storage','Dining Pieces','Bathrooms','Lighting','Decorative Elements','Built-in Joinery']
const materials=['Marble','Wood','Stone','Fabric','Metal','Glass','Lighting']
export default function Bespoke(){useReveal();return <>
 <Seo title="Bespoke" description="Bespoke furniture, joinery, lighting and custom interior elements by Ritz Interiors Group."/>
 <InnerHero eyebrow="Bespoke by Ritz" title="Designed beyond the room." text="Custom elements shaped with the same attention as the architecture around them." image={hero}/>
 <section className="section bespoke-index" data-reveal><div className="shell"><SectionLabel>Bespoke Elements</SectionLabel><div className="bespoke-index-grid">{items.map((x,i)=><div key={x}><span>0{i+1}</span><h2>{x}</h2></div>)}</div></div></section>
 <section className="section material-story dark-section" data-reveal><div className="shell"><SectionLabel right="Texture / Detail / Atmosphere">Materials define the atmosphere.</SectionLabel><div className="material-strip"><img src={detail}/><img src={reading}/><img src={bath}/><img src={pink}/></div><div className="material-tags">{materials.map(x=><span key={x}>{x}</span>)}</div></div></section>
 <FinalCTA/>
 </>}
