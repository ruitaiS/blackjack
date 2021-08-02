import Card from "../card/card"
import "./dealerPanel.css"

const DealerPanel = ({ dealer, tally }) => {
  const { hand } = dealer
  return (
    <>
      <div className="dealer-panel flex-center">
        {hand.length ? (
          <>
          <Card shown={false} rank={hand[0]?.rank} suit={hand[0]?.suit} />
          <Card shown={true} rank={hand[1]?.rank} suit={hand[1]?.suit} />
          </>
        ) : null}
      </div>
      <h3 className="text-center">Dealer has: {tally(dealer.hand[1])}</h3>
    </>
  )
}

export default DealerPanel
