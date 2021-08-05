import { useSelector } from "react-redux"
import {useState} from "react"
import DealerPanel from "../../Components/dealerPanel/dealerPanel"
import PlayerPanel from "../../Components/playerPanel/playerPanel"
import PlayerActions from "../../Components/playerActions/playerActions"
import Gamelog from "../../Components/gameLog/gamelog"


const SingleplayerPage = () => {
  const { status, dealerHand, dealerScore, playerHand, playerScore, playerBank } = useSelector(state => state.singlePlayer)

  const [betAmt, setBetAmt] = useState(0)

  const statuses = ["win", "lose", "bet", "blackjack", "push"]
  const statusIndex = statuses.indexOf(status)

  return (
    <div className="flex-row">
      <Gamelog />
      <div className="single-player-container">
        {/* {statusIndex !== -1 && <h2 className="text-center">{`${statuses[statusIndex]}`}</h2>} */}
        <DealerPanel hand={dealerHand} score={dealerScore} />
        <PlayerActions status={status} statuses={statuses} betAmt={betAmt} setBetAmt={setBetAmt} playerBank={playerBank}/>
        <PlayerPanel hand={playerHand} score={playerScore} />
      </div>
    </div>
  )
}

export default SingleplayerPage
