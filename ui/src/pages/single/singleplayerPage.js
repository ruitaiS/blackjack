import { useSelector } from "react-redux"
import DealerPanel from "../../Components/dealerPanel/dealerPanel"
import PlayerPanel from "../../Components/playerPanel/playerPanel"
import PlayerActions from "../../Components/playerActions/playerActions"

const SingleplayerPage = () => {
  const { status, dealerHand, dealerScore, playerHand, playerScore } = useSelector(
    state => state.singlePlayer
  )



  return (
    <>
      <div>
      {status === "win" && (<h2 className="text-center">You Win</h2>)}
      {status === "lose" && (<h2 className="text-center">You Lost</h2>)}
      {status === "blackjack" && (<h2 className="text-center">Blackjack! You Win</h2>)}
        <DealerPanel hand={dealerHand} score={dealerScore} />
        <PlayerActions status={status} />
        <PlayerPanel hand={playerHand} score={playerScore} />
      </div>
    </>
  )
}

export default SingleplayerPage
