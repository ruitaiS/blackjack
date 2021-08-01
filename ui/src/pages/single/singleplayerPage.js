import { useState, useRef } from "react"
import { useDispatch, useSelector } from "react-redux"
import { startHand, getValue, dealACardToPlayer } from "../../reducers/singlePlayer/action"
import PlayerPanel from "../../Components/playerPanel/playerPanel"
import DealerPanel from "../../Components/dealerPanel/dealerPanel"
import PlayerActions from "../../Components/playerActions/playerActions"

const SingleplayerPage = ({ numOfDecks }) => {
  const dispatch = useDispatch()
  const singlePlayer = useSelector(state => state.singlePlayer)
  const { user } = useSelector(state => state.auth)

  const { players, deck } = singlePlayer
  const dealer = players.filter(p => p.name === "dealer")
  const player = players.filter(p => p.id === user.id)

  const [phase, setPhase] = useState("ready")

  const handleDealHand = () => {
    dispatch(startHand(players, deck))
  }

  const playerTotal = () => {
    return getValue(player[0].hand)
  }

  console.log("inside single player page", deck.length)

  const hit = () => {
    dispatch(dealACardToPlayer(player[0], deck, user.id))
  }
  const doubleDown = () => {}
  const stay = () => {}

  return (
    <>
      <DealerPanel dealer={dealer[0]} />
      {phase === "ready" ? (
        <PlayerActions phase={phase} start={handleDealHand} setPhase={setPhase} />
      ) : null}
      {phase === "action" ? <PlayerActions phase={phase} hit={hit} setPhase={setPhase} /> : null}
      <PlayerPanel player={player[0]} deck={deck} />
    </>
  )
}

export default SingleplayerPage
