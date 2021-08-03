import Card from "../card/card"
import "./dealerPanel.css"

const DealerPanel = ({ hand }) => {
  return (
    <>
      <div className="dealer-panel flex-center">
        {hand.map((card, index) => (
          <Card
            key={`${card.rank}${card.suit}${index}`}
            shown={!card.face}
            rank={card.rank}
            suit={card.suit}
          />
        ))}
      </div>
    </>
  )
}

export default DealerPanel
