import Card from "../card"
import "./playerPanel.css"

const PlayerPanel = ({ player, deck, start }) => {
  const { hand } = player

  return (
    <div className="player-panel flex-center">
      {hand.map(hand => (
        <Card rank={hand.rank} suit={hand.suit} shown={true} />
      ))}
    </div>
  )
}

export default PlayerPanel
