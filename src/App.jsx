//import { useState } from 'react'
import './App.css'

import Header from './components/Header'
import Scores from './components/Scores'
import CardGrid from './components/CardGrid'

function App() {

  return (
    <>
      <Header />
      <main id='game'>
        <Scores />
        <CardGrid />
      </main>

    </>
  )
}

export default App
