import { useState } from 'react'
import './App.css'

import Header from './components/Header'
import Scores from './components/Scores'
import CardGrid from './components/CardGrid'

function App() {
  const [gameData, setGameData] = useState({currentScore: 0, highScore: 0});

  return (
    <>
      <Header />
      <main id='game'>
        <Scores scores={gameData} />
        <CardGrid scores={gameData} />
      </main>
    </>
  )
}

export default App
