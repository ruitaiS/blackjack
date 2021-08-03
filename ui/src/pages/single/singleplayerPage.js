import { useSelector } from "react-redux"
import DealerPanel from "../../Components/dealerPanel/dealerPanel"
import PlayerPanel from "../../Components/playerPanel/playerPanel"
import PlayerActions from "../../Components/playerActions/playerActions"

const SingleplayerPage = () => {
  const { status, dealerHand, dealerScore, playerHand, playerScore } = useSelector(
    state => state.singlePlayer
  )

  // if (status === "win") alert("YOU WIN")
  // if (status === "lose") alert("YOU LOSE")
  // if (status === "blackjack") alert("BLACKJACK")

  return (
    <>
      <div>
        <DealerPanel hand={dealerHand} score={dealerScore} />
        <PlayerActions status={status} />
        <PlayerPanel hand={playerHand} score={playerScore} />
      </div>
    </>
  )
}

export default SingleplayerPage
