import './App.css';
import PlayerRoll from './components/PlayerRoll';
import Scoreboard from './components/Scoreboard';
import { useState } from 'react';

const rollRandomFunc = () => {
  const min = Math.ceil(1);
  const max = Math.floor(6);
  return Math.floor(Math.random() * (max - min) + min);
}
function App() {
  const [p1Score, setp1Score] = useState(9);
  const [p2Score, setp2Score] = useState(9);
  const [dieScore1, setDieScore1] = useState(0);
  const [dieScore2, setDieScore2] = useState(0);
  const [turnMessage, setTurnMessage] = useState("")
  const [finalGame, setFinalGame] = useState("")


  const rollDie = () => {
    setDieScore1(rollRandomFunc)
    setTurnMessage("");
    setDieScore2(rollRandomFunc)
    setTurnMessage("");
  }
  const compareScores = () => {
    if (dieScore1 === dieScore2) {
      console.log("Deuce")
      setTurnMessage("Deuce")
    } else {
      if (dieScore1 > dieScore2) {
        setp1Score(p1Score + 1)
        setDieScore1(0)
        setDieScore2(0)
        setTurnMessage("Player 1 won this turn")
      } else {
        setp2Score(p2Score + 1)
        setDieScore1(0)
        setDieScore2(0)
        setTurnMessage("Player 2 won this turn")
      }
    }
    if (p1Score >= 10) {
      setTurnMessage("")
      setFinalGame(`P1 WINS Score:${p1Score}`)
    } else {
      if (p2Score >= 10) {
        setTurnMessage("")
        setFinalGame(`P2 WINS Score:${p2Score}`)
      }
    }
  }
  const reset = () => {
    setp1Score(0)
    setp2Score(0)
    setDieScore1(0)
    setDieScore2(0)
    setTurnMessage("")
    setFinalGame("")
  }


  return (
    <div className="App">
      <h2>Scoreboard</h2>
      <Scoreboard player="1" score={p1Score} />
      <Scoreboard player="2" score={p2Score} />
      <PlayerRoll player={"Player 1"} rollScore={dieScore1} />
      <PlayerRoll player={"Player 2"} rollScore={dieScore2} />
      <button onClick={() => rollDie()}>Roll</button>
      <div>
        <button onClick={() => compareScores()}>Compare Score</button>
        <div>{turnMessage}</div>
        <div>{finalGame}</div>
        <button onClick={() => reset()}>Reset Game</button>
      </div>
    </div>
  );
}

export default App;
