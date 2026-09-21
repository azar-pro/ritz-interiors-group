import Seo from '../components/Seo'
import useReveal from '../hooks/useReveal'
import InnerHero from '../components/InnerHero'
import SectionLabel from '../components/SectionLabel'
import FinalCTA from '../components/FinalCTA'
import hero from '../assets/living-light.webp'
import detail from '../assets/detail-reading-clean.png'
import villa from '../assets/project-villa.webp'

export default function Studio(){useReveal();return <>
 <Seo title="Studio" description="Ritz Interiors Group is an architecture and interior design studio based in Fès, Morocco."/>
 <InnerHero eyebrow="Ritz Interiors Group" title="Architecture & Design Studio" text="Fès, Morocco" image={hero}/>
 <section className="section studio-manifesto" data-reveal><div className="shell studio-manifesto-grid"><div><SectionLabel>Our Approach</SectionLabel><h2>Contemporary living, shaped through materiality and proportion.</h2></div><p>A design studio creating residential and commercial interiors through a refined dialogue between contemporary living, craftsmanship and materiality.</p></div></section>
 <section className="section studio-chapters" data-reveal><div className="shell"><article><img src={detail} alt="Material and lighting detail"/><div><span className="eyebrow">Craftsmanship</span><h2>Details carry the identity.</h2><p>Warm timber, stone, metal and light are composed with restraint, allowing material quality to remain visible.</p></div></article><article className="reverse"><img src={villa} alt="Contemporary villa architecture"/><div><span className="eyebrow">Fès</span><h2>Rooted locally. Looking outward.</h2><p>The studio’s visual language draws on warmth, shadow, material craft and measured geometry without relying on decorative clichés.</p></div></article></div></section>
 <FinalCTA/>
 </>}
