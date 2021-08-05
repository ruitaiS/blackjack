import Card from "../card/card"
import "./dealerPanel.css"

const DealerPanel = ({ hand, score }) => {
  const showScore = hand.filter(card => card.face).length ? true : false
  const faceUpCard = hand.filter(card => !card.face)

  return (
    <div className="dealer-panel flex-center">
      <div className="flex-row">
        {hand.map((card, index) => (
          <Card key={`${card.rank}${card.suit}${index}`} shown={!card.face} rank={card.rank} suit={card.suit} />
        ))}
      </div>
      <h3 className="text-center">{showScore ? `Dealer showing ${faceUpCard[0].value}` : `Dealer has: ${score}`}</h3>
    </div>
  )
}

export default DealerPanel
