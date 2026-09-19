import { useEffect } from 'react'

export default function Seo({title, description}){
  useEffect(()=>{
    document.title = title ? `${title} — Ritz Interiors Group` : 'Ritz Interiors Group — Architecture & Interior Design'
    let meta = document.querySelector('meta[name="description"]')
    if(!meta){ meta=document.createElement('meta'); meta.name='description'; document.head.appendChild(meta) }
    meta.content = description || 'Ritz Interiors Group — Architecture & Interior Design Studio in Fès, Morocco.'
    let og = document.querySelector('meta[property="og:title"]')
    if(!og){ og=document.createElement('meta'); og.setAttribute('property','og:title'); document.head.appendChild(og) }
    og.content=document.title
    let ogd = document.querySelector('meta[property="og:description"]')
    if(!ogd){ ogd=document.createElement('meta'); ogd.setAttribute('property','og:description'); document.head.appendChild(ogd) }
    ogd.content=meta.content
  },[title,description])
  return null
}
