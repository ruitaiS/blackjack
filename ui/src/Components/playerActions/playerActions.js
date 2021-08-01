import "./playerActions.css"

const PlayerActions = ({ phase, start }) => {
  return phase === "bet" ? (
    <div className="player-action-group">
      <button className="player-action-buttons" onClick={start}>
        Start
      </button>
    </div>
  ) : (
    <div className="player-action-group">
      <button className="player-action-buttons stay">Stay</button>
      <button className="player-action-buttons double">Double</button>
      <button className="player-action-buttons hit">Hit</button>
    </div>
  )
}

export default PlayerActions
