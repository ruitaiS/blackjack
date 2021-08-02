import { useDispatch } from "react-redux"
import { dealACardToPlayer } from "../../reducers/singlePlayer/action"
import "./playerActions.css"

const PlayerActions = ({
  player,
  phase,
  start,
  setPhase,
  deck,
  userId,
  setTurn,
  turn,
  dealerTurn,
  hit
}) => {
  const dispatch = useDispatch()
  const handleStart = () => {
    start()
    setPhase("action")
  }

  const stay = () => {
    setTurn({
      dealer: true,
      player: false
    })
    dealerTurn()
  }

  const doubleDown = () => {}

  return (
    <>
      {phase === "ready" && (
        <div className="player-action-group">
          <button className="player-action-buttons" onClick={handleStart}>
            Start
          </button>
        </div>
      )}
      {phase === "action" && (
        <div className="player-action-group">
          <button className="player-action-buttons stay" onClick={stay}>
            Stay
          </button>
          <button className="player-action-buttons double">Double</button>
          <button className="player-action-buttons hit" onClick={() => hit(player)}>
            Hit
          </button>
        </div>
      )}
    </>
  )
}

export default PlayerActions
