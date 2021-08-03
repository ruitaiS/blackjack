import { useDispatch } from "react-redux"
import { stay, start, hit } from "../../reducers/singlePlayer/action"
import "./playerActions.css"

const PlayerActions = status => {
  const dispatch = useDispatch()
  const handleGameStart = () => {
    const bet = 100
    dispatch(start(bet))
  }

  console.log(status)

  const handleHit = () => {
    dispatch(hit("player"))
  }

  const handleStay = () => {
    dispatch(stay())
  }
  return (
    <>
      <div className="player-action-group">
        <button className="player-action-buttons" onClick={handleGameStart}>
          Deal
        </button>
        <button className="player-action-buttons stay" onClick={handleStay}>
          Stay
        </button>
        <button className="player-action-buttons hit" onClick={handleHit}>
          Hit
        </button>
        {status === "WIN" && (
          <button className="player-action-buttons" onClick={handleGameStart}>
            Deal
          </button>
        )}
        {status === "ACTION" && (
          <>
            <button className="player-action-buttons stay" onClick={handleStay}>
              Stay
            </button>
            <button className="player-action-buttons hit" onClick={handleHit}>
              Hit
            </button>
          </>
        )}
        {status === "LOSE" && (
          <button className="player-action-buttons" onClick={handleGameStart}>
            Deal
          </button>
        )}
        {status === "BLACKJACK" && (
          <button className="player-action-buttons" onClick={handleGameStart}>
            Deal
          </button>
        )}
      </div>
    </>
  )
}

export default PlayerActions
