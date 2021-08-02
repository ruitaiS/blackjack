import { useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { dealACardToPlayer, restartHand } from "../../reducers/singlePlayer/action"
import { startHand, getValue } from "../../reducers/singlePlayer/action"
import DealerPanel from "../../Components/dealerPanel/dealerPanel"
import PlayerPanel from "../../Components/playerPanel/playerPanel"
import PlayerActions from "../../Components/playerActions/playerActions"

const SingleplayerPage = () => {
  const dispatch = useDispatch()
  const singlePlayer = useSelector(state => state.singlePlayer)
  const { user } = useSelector(state => state.auth)

  const { players, deck } = singlePlayer
  const dealer = players.filter(p => p.name === "dealer")
  const player = players.filter(p => p.id === user.id)
  const [turn, setTurn] = useState({
    dealer: false,
    player: true
  })
  const [phase, setPhase] = useState("ready")

  useEffect(() => {
    console.log("hjfeiwjfe")
  }, [])

  const start = () => {
    dispatch(startHand(players, deck))
  }

  const hit = player => {
    dispatch(dealACardToPlayer(player, deck))
  }

  const tally = hand => {
    if (hand?.length) {
      return getValue(hand)
    }
    return hand?.value
  }

  const playerTotal = tally(player[0].hand)
  const dealerTotal = tally(dealer[0].hand)

  const dealerTurn = () => {
    console.log(dealerTotal)
    if (dealerTotal < 18) {
      hit(dealer[0])
    }
    setPhase("end")

    if (phase === "end") {
      setTimeout(decideWinner, 3000)
    }
  }

  const decideWinner = () => {
    if (phase === "end") {
      if (dealerTotal > 21) {
        return alert("dealer bust!")
      } else if (dealerTotal > playerTotal) {
        return alert("dealer wins!")
      } else if (dealerTotal === playerTotal) {
        return alert("push")
      } else {
        return alert("player wins!")
      }
    }
  }

  decideWinner()

  return (
    <>
      <DealerPanel dealer={dealer[0]} tally={tally} deck={deck} turn={turn} />
      {phase === "ready" ? <PlayerActions phase={phase} start={start} setPhase={setPhase} /> : null}
      {phase === "action" ? (
        <PlayerActions
          phase={phase}
          player={player[0]}
          setPhase={setPhase}
          deck={deck}
          userId={user.id}
          setTurn={setTurn}
          turn={turn}
          dealerTurn={dealerTurn}
          hit={hit}
        />
      ) : null}
      <PlayerPanel player={player[0]} deck={deck} tally={tally} />
    </>
  )
}

export default SingleplayerPage
