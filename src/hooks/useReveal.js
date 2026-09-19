import { useEffect } from 'react'

export default function useReveal(){
  useEffect(() => {
    const els = document.querySelectorAll('[data-reveal]')
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if(reduced){ els.forEach(el => el.classList.add('is-visible')); return }
    const obs = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if(entry.isIntersecting){ entry.target.classList.add('is-visible'); obs.unobserve(entry.target) }
      })
    }, { threshold: .12 })
    els.forEach(el => obs.observe(el))
    return () => obs.disconnect()
  }, [])
}
