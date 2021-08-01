import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { startHand } from "../../reducers/singlePlayer/action"
import PlayerPanel from "../../Components/playerPanel/playerPanel"
import DealerPanel from "../../Components/dealerPanel/dealerPanel"
import PlayerActions from "../../Components/playerActions/playerActions"

const SingleplayerPage = ({ numOfDecks }) => {
  const dispatch = useDispatch()
  const { players, deck } = useSelector(state => state.singlePlayer)
  const { user } = useSelector(state => state.auth)
  const dealer = players.filter(user => user.player === "dealer")
  const player = players.filter(player => player.id === user.id)
  const [phase, setPhase] = useState("bet")

  const handleDealHand = () => {
    dispatch(startHand(players, deck))
  }

  const hit = () => {}
  const doubleDown = () => {}
  const stay = () => {}

  return (
    <>
      <DealerPanel dealer={dealer[0]} />
      {phase === "bet" ? <PlayerActions phase={phase} start={handleDealHand} /> : null}
      <PlayerPanel player={player[0]} deck={deck} />
    </>
  )
}

export default SingleplayerPage
