import { useDispatch } from "react-redux"
import { stay, start, hit } from "../../reducers/singlePlayer/action"
import "./playerActions.css"

const PlayerActions = ({ status, statuses }) => {
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

  const action = statuses.indexOf(status) === -1 ? false : true

  return (
    <div className="player-action-group">
      {action ? (
        <button className="player-action-buttons" onClick={handleGameStart}>
          Deal
        </button>
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
