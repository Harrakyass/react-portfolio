import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './index.css'
import Intro from './components/intro';
import Navbar from './components/navbar';
import About from './components/about';
import Projects from './components/projects';
import Experience from './components/experience';
import Footer from './components/footer';

function App() {
 return (
    <div className="grid gap-16 bg-secondary">
      <Navbar />
      <Intro />
      <About />
      <Projects />
      <Experience />
      <Footer />
    </div>
    
 )
}

export default App