import Card from "../card/card"
import "./playerPanel.css"

const PlayerPanel = ({ player, tally }) => {
  const { hand } = player

  return (
    <div>
      <h3 className="text-center">You have: {tally(hand)}</h3>
      <div className="player-panel flex-center">
        {hand.map((hand, index) => (
          <Card rank={hand.rank} suit={hand.suit} shown={true} />
        ))}
      </div>
    </div>
  )
}

export default PlayerPanel
