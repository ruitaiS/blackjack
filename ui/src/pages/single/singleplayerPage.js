import { useDispatch, useSelector } from "react-redux"
import { hit, stay, start } from "../../reducers/singlePlayer/action"
import DealerPanel from "../../Components/dealerPanel/dealerPanel"
import PlayerPanel from "../../Components/playerPanel/playerPanel"
import PlayerActions from "../../Components/playerActions/playerActions"

const SingleplayerPage = () => {
  const singlePlayer = useSelector(state => state.singlePlayer)

  console.log(singlePlayer)

  return (
    <>
      <div>
        <h2>{singlePlayer.status}</h2>
        <p>{JSON.stringify(singlePlayer.dealerHand)}</p>
        <PlayerActions />
        <p>{JSON.stringify(singlePlayer.playerHand)}</p>
      </div>
    </>
  )
}

export default SingleplayerPage
