import Card from "../card/card"
import "./dealerPanel.css"

const DealerPanel = ({ dealer, tally, turn, deck }) => {
  const { hand } = dealer
  return (
    <>
      <div className="dealer-panel flex-center">
        {!turn.dealer & (hand.length === 2) ? (
          <>
            <Card shown={turn.dealer} rank={hand[0]?.rank} suit={hand[0]?.suit} />
            <Card shown={true} rank={hand[1]?.rank} suit={hand[1]?.suit} />
          </>
        ) : (
          hand.map(card => <Card shown={true} rank={card.rank} suit={card.suit} />)
        )}
      </div>
      <h3 className="text-center">Dealer has: {turn.dealer ? tally(hand) : tally(hand[1])}</h3>
    </>
  )
}

export default DealerPanel
