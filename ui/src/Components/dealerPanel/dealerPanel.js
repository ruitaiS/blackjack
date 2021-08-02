import Card from "../card/card"
import "./dealerPanel.css"

const DealerPanel = ({ dealer, tally, turn, deck }) => {
  const { hand } = dealer

  return (
    <>
      <div className="dealer-panel flex-center">
        {!turn && hand.length ? (
          <>
            <Card shown={turn} rank={hand[0]?.rank} suit={hand[0]?.suit} />
            <Card shown={true} rank={hand[1]?.rank} suit={hand[1]?.suit} />
          </>
        ) : (
          dealer.hand.map(card => <Card shown={true} rank={card.rank} suit={card.suit} />)
        )}
      </div>
      <h3 className="text-center">Dealer has: {turn ? tally(hand) : tally(hand[1])}</h3>
    </>
  )
}

export default DealerPanel
