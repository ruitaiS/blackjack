import { useDispatch } from "react-redux"
import { stay, start, hit } from "../../reducers/singlePlayer/action"
import "./playerActions.css"

const PlayerActions = ({ status }) => {
  const dispatch = useDispatch()
  const handleGameStart = () => {
    const bet = 100
    dispatch(start(bet))
  }

  const handleHit = () => {
    dispatch(hit("player"))
  }

  const handleStay = () => {
    dispatch(stay())
  }
  return (
    <>
      <div className="player-action-group">
        {status === "win" && (
          <button className="player-action-buttons" onClick={handleGameStart}>
            Deal
          </button>
        )}
        {status === "action" && (
          <>
            <button className="player-action-buttons stay" onClick={handleStay}>
              Stay
            </button>
            <button className="player-action-buttons hit" onClick={handleHit}>
              Hit
            </button>
          </>
        )}
        {status === "lose" && (
          <button className="player-action-buttons" onClick={handleGameStart}>
            Deal
          </button>
        )}
        {status === "blackjack" && (
          <button className="player-action-buttons" onClick={handleGameStart}>
            Deal
          </button>
        )}
      </div>
    </>
  )
}

export default PlayerActions
