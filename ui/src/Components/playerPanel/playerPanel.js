import Card from "../card/card"
import "./playerPanel.css"

const PlayerPanel = ({ hand, score }) => {
  return (
    <>
      <h3 className="text-center">You have {score}</h3>
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
    </>
  )
}

export default PlayerPanel
