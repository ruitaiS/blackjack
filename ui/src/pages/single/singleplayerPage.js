import { useSelector } from "react-redux"
import DealerPanel from "../../Components/dealerPanel/dealerPanel"
import PlayerPanel from "../../Components/playerPanel/playerPanel"
import PlayerActions from "../../Components/playerActions/playerActions"

const SingleplayerPage = () => {
  const { status, dealerHand, dealerScore, playerHand, playerScore } = useSelector(
    state => state.singlePlayer
  )

  const statuses = ["win", "lose", "bet", "blackjack", "push"]
  const statusIndex = statuses.indexOf(status)

  return (
    <>
      <div>
        {statusIndex !== -1 && <h2 className="text-center">{`${statuses[statusIndex]}`}</h2>}
        <DealerPanel hand={dealerHand} score={dealerScore} />
        <PlayerActions status={status} statuses={statuses} />
        <PlayerPanel hand={playerHand} score={playerScore} />
      </div>
    </>
  )
}

export default SingleplayerPage
