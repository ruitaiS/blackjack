import Card from "../card"
import "./dealerPanel.css"

const DealerPanel = ({ dealer }) => {
  return (
    <div className="dealer-panel flex-center">
      {dealer.hand.map((card, index) => (
        <Card rank={card.rank} suit={card.suit} shown={true} />
      ))}
    </div>
  )
}

export default DealerPanel
