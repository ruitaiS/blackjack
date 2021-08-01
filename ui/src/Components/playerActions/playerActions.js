import "./playerActions.css"

const PlayerActions = ({ phase, start, setPhase, hit }) => {
  const handleStart = () => {
    start()
    setPhase("action")
  }

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
          <button className="player-action-buttons stay">Stay</button>
          <button className="player-action-buttons double">Double</button>
          <button className="player-action-buttons hit" onClick={hit}>
            Hit
          </button>
        </div>
      )}
    </>
  )
}

export default PlayerActions
