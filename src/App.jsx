import { useState } from 'react'
import './App.css'

import Header from './components/Header'
import Scores from './components/Scores'
import CardGrid from './components/CardGrid'

function App() {
  const [gameData, setGameData] = useState({currentScore: 0, highScore: 0});

  const updateScores = () => {
    if (gameData.currentScore === gameData.highScore) {
      setGameData(prevData => ({
        currentScore: prevData.currentScore + 1,
        highScore: prevData.highScore + 1
      }));
    } else {
      setGameData(prevData => ({...prevData, currentScore: prevData.currentScore + 1}))
    }
  }
  
  const resetScores = () => setGameData(prevData => ({
      ...prevData,
      currentScore: 0
    })
  );

  return (
    <>
      <Header />
      <main id='game'>
        <Scores scores={gameData} />
        <CardGrid updateScores={updateScores} resetScores={resetScores} />
      </main>
    </>
  )
}

export default App
