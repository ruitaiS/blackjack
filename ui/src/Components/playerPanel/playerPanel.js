import Card from "../card/card"
import "./playerPanel.css"

const PlayerPanel = ({ hand }) => {
  return (
    <div>
      <div className="player-panel flex-center">
        {hand.map((card, index) => (
          <Card
            key={`${card.suit}${card.rank}${index}`}
            rank={card.rank}
            suit={card.suit}
            shown={true}
          />
        ))}
      </div>
    </div>
  )
}

export default PlayerPanel
