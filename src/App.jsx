import { Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Header from './layout/Header'
import Footer from './layout/Footer'
import Home from './pages/Home'
import Projects from './pages/Projects'
import ProjectDetail from './pages/ProjectDetail'
import Expertise from './pages/Expertise'
import Bespoke from './pages/Bespoke'
import Process from './pages/Process'
import Studio from './pages/Studio'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound'

function PageReset(){
  const { pathname } = useLocation()
  useEffect(() => { window.scrollTo({ top: 0, behavior: 'instant' }) }, [pathname])
  return null
}

export default function App(){
  return <>
    <PageReset />
    <Header />
    <main>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/projects" element={<Projects/>}/>
        <Route path="/projects/:slug" element={<ProjectDetail/>}/>
        <Route path="/expertise" element={<Expertise/>}/>
        <Route path="/bespoke" element={<Bespoke/>}/>
        <Route path="/process" element={<Process/>}/>
        <Route path="/studio" element={<Studio/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
    </main>
    <Footer />
  </>
}
