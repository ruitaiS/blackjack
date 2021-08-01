import Card from "../card"
import "./playerPanel.css"

const PlayerPanel = ({ player, deck, start, playerTotal, betAmount }) => {
  const { hand } = player

  return (
    <div>
      <h3>You have: {playerTotal}</h3>
      <div className="player-panel flex-center">
        {hand.map(hand => (
          <Card rank={hand.rank} suit={hand.suit} shown={true} />
        ))}
      </div>
    </div>
  )
}

export default PlayerPanel
