import { useDispatch } from "react-redux"
import { stay, start, hit } from "../../reducers/singlePlayer/action"
import "./playerActions.css"

import BetPanel from "../../Components/betPanel/betPanel"

const PlayerActions = ({ status, statuses, betAmt, setBetAmt, playerBank }) => {
  const dispatch = useDispatch()
  const handleGameStart = () => {
    if(!betAmt){
      alert("Please enter a bet.")
    }else{
      dispatch(start(betAmt))
    }
  }

  const handleHit = () => {
    dispatch(hit("player"))
  }

  const handleStay = () => {
    dispatch(stay())
  }

  const action = statuses.indexOf(status) === -1 ? false : true

  return (
    <div className="player-action-group">
      {action ? (
        <>
        <BetPanel betAmt={betAmt} setBetAmt={setBetAmt} handleGameStart={handleGameStart} playerBank={playerBank}/>
        </>
      ) : (
        <>
          <button className="player-action-buttons stay" onClick={handleStay}>
            Stay
          </button>
          <button className="player-action-buttons hit" onClick={handleHit}>
            Hit
          </button>
        </>
      )}
    </div>
  )
}

export default PlayerActions
