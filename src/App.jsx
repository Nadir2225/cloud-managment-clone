import { useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/header'
import Home from './components/home'
import About from './components/about'
import Support from './components/support'
import Platforms from './components/platforms'
import Pricing from './components/pricing'

function App() {
  const home = useRef(null)
  const about = useRef(null)
  const support = useRef(null)
  const platforms = useRef(null)
  const pricing = useRef(null)

  const scrollDown = (sectionRef) => {
    sectionRef.current?.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  };

  return (
    <>
      <Header scrollDown={scrollDown} home={home} about={about} support={support} platforms={platforms} pricing={pricing} />
      <Home home={home} />
      <About about={about} />
      <Support support={support} />
      <Platforms platforms={platforms} />
      <Pricing pricing={pricing} />
    </>
  )
}

export default App
