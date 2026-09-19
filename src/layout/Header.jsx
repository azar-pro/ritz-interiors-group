import { NavLink, Link, useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react'
import logo from '../assets/logo-original.jpg'
import heroLogo from '../assets/logo-hero.png'

const links = [
  ['/projects','Projects'],['/expertise','Expertise'],['/bespoke','Bespoke'],['/studio','Studio'],['/process','Process'],['/contact','Contact']
]

export default function Header(){
  const [scrolled,setScrolled]=useState(false)
  const [open,setOpen]=useState(false)
  const {pathname}=useLocation()
  useEffect(()=>{
    const onScroll=()=>setScrolled(window.scrollY>34)
    onScroll(); window.addEventListener('scroll',onScroll,{passive:true})
    return ()=>window.removeEventListener('scroll',onScroll)
  },[])
  useEffect(()=>setOpen(false),[pathname])
  const home = pathname === '/'
  return <header className={`site-header ${scrolled || !home ? 'site-header--solid':''}`}>
    <div className="site-header__inner shell-wide">
      <Link to="/" className={`brand ${home?'brand--home':''}`} aria-label="Ritz Interiors Group home"><img src={home?heroLogo:logo} alt="Ritz Interiors Group"/></Link>
      <nav className="desktop-nav" aria-label="Primary navigation">
        {links.map(([to,label])=><NavLink key={to} to={to}>{label}</NavLink>)}
      </nav>
      <div className="lang-switch" aria-label="Language"><span className="muted">FR</span><b>/</b><span>EN</span></div>
      <button className="menu-toggle" aria-label="Open menu" aria-expanded={open} onClick={()=>setOpen(v=>!v)}><span/><span/></button>
    </div>
    <div className={`mobile-menu ${open?'is-open':''}`}>
      <div className="mobile-menu__links">{links.map(([to,label])=><NavLink key={to} to={to}>{label}</NavLink>)}</div>
      <div className="mobile-menu__foot">Fès · Morocco <span>@ritzinteriorsgroup</span></div>
    </div>
  </header>
}
