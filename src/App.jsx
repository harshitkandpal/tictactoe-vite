import './styles.scss'
import "./components/Board"
import Board from './components/Board'
import { useState } from 'react';
import { calculateWinner } from './components/winner';
import StatusMessage from './components/StatusMessage';
import History from './components/History';

const NEW_GAME = [{square:  Array(9).fill(null), isNextX :false}]

function App() {

    const [history, setHistory] = useState(NEW_GAME)
    const [currentMove, setCurrentMove] = useState(0)
    const gamingBoard = history[currentMove]
    const {winner,winningSquare} = calculateWinner(gamingBoard.square);
   
    const handleSquare = (pos) =>{

      const isTraversing = currentMove +1 !== history.length 
      
      if(gamingBoard.square[pos] || winner){return}
      setHistory((currentHistory)=>{
          const lastGamingState = isTraversing? currentHistory[currentMove]:currentHistory[history.length - 1]

            const nextSquareState = lastGamingState.square.map((squareValue, currpos)=>{
                if(pos === currpos){
                    return lastGamingState.isNextX ? "X" : "0";
                }
                return squareValue;
            })

            const base = isTraversing ? 
            currentHistory.slice(0, currentHistory.indexOf(lastGamingState)+1 )
            :currentHistory

            return (base.concat({square: nextSquareState, isNextX : !lastGamingState.isNextX}))

        })
        setCurrentMove((move) => move + 1)
    }

    const moveTo = (move) => {
      setCurrentMove(move)
    }

    const reset = () => {
      setHistory(NEW_GAME)
      setCurrentMove(0)
    }

  return (
    <div className='app'>
      <h2>Tic Tac Toe</h2>
      <StatusMessage winner={winner} gamingBoard={gamingBoard}/>
      <Board square={gamingBoard.square} handleSquare={handleSquare} winningSquare = {winningSquare}/>
      <button type='button' onClick={reset} className={`btn-reset${winner||currentMove===9?" active":""}`}>Reset</button>
      <h2>Moves</h2>
      <History history={history} onClick = {moveTo} currentMove={currentMove}/>
    </div>
  )
}

export default App
