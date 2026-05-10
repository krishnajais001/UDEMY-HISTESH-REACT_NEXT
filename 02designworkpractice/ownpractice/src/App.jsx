import { useState } from 'react'
import './App.css'

import NavBar from './components/NavBar'
import Hero from './components/Hero'
import Card from './components/Card'
import Footer from './components/Footer'

import plans from './data/Plans'

function App() {
  return (
    <>
      <NavBar />
      <Hero />

      <Card plansData={plans} />

      <Footer/>
    </>
  )
}

export default App