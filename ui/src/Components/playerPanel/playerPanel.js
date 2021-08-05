import Card from "../card/card"
import "./playerPanel.css"

const PlayerPanel = ({ hand, score }) => {
  return (
    <div className="flex-center player-panel">
      <h3 className="text-center">You have {score}</h3>
      <div className="flex-row">
        {hand.map((card, index) => (
          <Card key={`${card.suit}${card.rank}${index}`} rank={card.rank} suit={card.suit} shown={true} />
        ))}
      </div>
    </div>
  )
}

export default PlayerPanel
