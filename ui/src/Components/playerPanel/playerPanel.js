import Card from "../card/card"
import "./playerPanel.css"

const PlayerPanel = ({ player, playerTotal, setTurn }) => {
  const { hand } = player

  const busted =
    playerTotal > 21 ? (
      <h3 className="text-center">You went over 21, bust!</h3>
    ) : (
      <h3 className="text-center">You have: {playerTotal}</h3>
    )

  return (
    <div>
      {busted}
      <div className="player-panel flex-center">
        {hand.map((hand, index) => (
          <Card rank={hand.rank} suit={hand.suit} shown={true} />
        ))}
      </div>
    </div>
  )
}

export default PlayerPanel
