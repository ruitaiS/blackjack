import { useSelector } from "react-redux"
import DealerPanel from "../../Components/dealerPanel/dealerPanel"
import PlayerPanel from "../../Components/playerPanel/playerPanel"
import PlayerActions from "../../Components/playerActions/playerActions"

const SingleplayerPage = () => {
  const singlePlayer = useSelector(state => state.singlePlayer)

  return (
    <>
      <div>
        <h2>{singlePlayer.status}</h2>
        <DealerPanel hand={singlePlayer.dealerHand} />
        <PlayerActions status={singlePlayer.status} />
        <PlayerPanel hand={singlePlayer.playerHand} />
      </div>
    </>
  )
}

export default SingleplayerPage
