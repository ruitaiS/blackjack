import "./playerActions.css"

const PlayerActions = ({ player, start, dealerTurn, hit, turn, outcome }) => {
  return (
    <>
      {!turn.player && (
        <div className="player-action-group">
          <button className="player-action-buttons" onClick={() => start()}>
            Deal
          </button>
        </div>
      )}
      {turn.player && (
        <div className="player-action-group">
          <button className="player-action-buttons stay" onClick={() => dealerTurn()}>
            Stay
          </button>
          <button className="player-action-buttons double">Double</button>
          <button className="player-action-buttons hit" onClick={() => hit(player)}>
            Hit
          </button>
        </div>
      )}
      {turn.end && (
        <div className="player-action-group">
          <h3>{outcome}</h3>
          <button className="player-action-buttons hit">New</button>
        </div>
      )}
    </>
  )
}

export default PlayerActions
