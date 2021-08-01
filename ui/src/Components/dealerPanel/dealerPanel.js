import Card from "../card"
import "./dealerPanel.css"

const DealerPanel = ({ dealer, dealerTotal }) => {
  return (
    <>
      <h3>Dealer has: {dealerTotal}</h3>
      <div className="dealer-panel flex-center">
        {dealer.hand.map((card, index) => (
          <Card key={index} rank={card.rank} suit={card.suit} shown={true} />
        ))}
      </div>
    </>
  )
}

export default DealerPanel
