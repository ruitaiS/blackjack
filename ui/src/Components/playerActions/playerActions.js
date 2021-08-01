import "./playerActions.css"

const PlayerActions = () => {
  return (
    <div className="player-action-group">
      <button className="player-action-buttons stay">Stay</button>
      <button className="player-action-buttons double">Double</button>
      <button className="player-action-buttons hit">Hit</button>
    </div>
  )
}

export default PlayerActions
