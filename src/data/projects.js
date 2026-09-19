import salon from '../assets/project-salon.webp'
import dining from '../assets/project-dining.webp'
import villa from '../assets/project-villa.webp'
import dental from '../assets/project-dental.webp'
import cake from '../assets/project-cake.webp'
import bedroom from '../assets/project-bedroom.webp'
import bath from '../assets/project-bath.webp'
import dark from '../assets/project-dark.webp'
import livingWide from '../assets/project-living-wide.webp'
import reality from '../assets/reality-mirror.webp'
import concept from '../assets/concept-living.webp'

export const projects = [
  {
    slug: 'private-residence-fes',
    index: '01',
    title: 'Private Residence',
    category: 'Residential Interior',
    location: 'Fès',
    cover: salon,
    gallery: [salon, livingWide, bedroom, bath],
    intro: 'A calm residential composition shaped through proportion, warm materials and carefully controlled light.',
    direction: 'Soft architectural lines, layered neutrals and dark timber accents create a balanced, understated interior.',
    materials: ['Natural stone', 'Warm timber', 'Textured upholstery', 'Metal accents']
  },
  {
    slug: 'residential-villa',
    index: '02',
    title: 'Residential Villa',
    category: 'Architecture',
    cover: villa,
    gallery: [villa, dining, dark],
    intro: 'A contemporary villa language defined by strong framing, warm material contrast and a measured relationship between interior and exterior.',
    direction: 'The architecture relies on depth, shadow and restrained detailing rather than decorative excess.',
    materials: ['Stone', 'Timber', 'Glass', 'Dark metal']
  },
  {
    slug: 'dental-clinic',
    index: '03',
    title: 'Dental Clinic',
    category: 'Commercial Interior',
    cover: dental,
    gallery: [dental],
    intro: 'A professional environment softened through warm timber, marble surfaces and integrated lighting.',
    direction: 'The space balances clinical clarity with a more welcoming, hospitality-led atmosphere.',
    materials: ['Marble', 'Timber', 'Glass', 'Integrated lighting']
  },
  {
    slug: 'cake-design-atelier',
    index: '04',
    title: 'Cake Design Atelier',
    category: 'Hospitality & Retail',
    cover: cake,
    gallery: [cake],
    intro: 'A bright commercial interior where crafted joinery, marble surfaces and warm metal details shape the customer experience.',
    direction: 'Vertical proportions and material continuity give the space a strong architectural identity.',
    materials: ['Marble', 'Oak-toned timber', 'Glass', 'Champagne metal']
  }
]

export const conceptReality = { concept, reality }
