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
  const [outcome, setOutcome] = useState("")
  const [turn, setTurn] = useState({
    dealer: false,
    player: false,
    end: false
  })

  console.log(outcome)

  const start = () => {
    setTurn({
      dealer: false,
      player: true,
      end: false
    })
    dispatch(startHand(players, deck))
  }

  const hit = player => {
    dispatch(dealACardToPlayer(player, deck))
  }

  const tally = hand => {
    if (hand === undefined) return 0
    if (hand.length > 0) {
      return getValue(hand)
    }
    return hand.value
  }

  const playerTotal = tally(player[0].hand)
  const dealerTotal = tally(dealer[0].hand)

  const dealerTurn = () => {
    setTurn({
      dealer: true,
      player: false,
      end: false
    })
    if (dealerTotal < 17) {
      hit(dealer[0])
    }
  }

  const decideWinner = () => {
    if (turn.end) {
      setTurn({
        dealer: false,
        player: false,
        end: false
      })

      if (dealerTotal > 21) {
        setOutcome("dealer bust!")
      } else if (dealerTotal > playerTotal) {
        setOutcome("dealer wins!")
      } else if (dealerTotal === playerTotal) {
        setOutcome("push")
      } else if (playerTotal > 21) {
        setOutcome("player bust!")
      } else {
        setOutcome("player wins!")
      }
    }
  }

  decideWinner()

  return (
    <>
      <DealerPanel dealer={dealer[0]} tally={tally} deck={deck} turn={turn} />
      {!turn.dealer & !turn.player ? <PlayerActions start={start} turn={turn} /> : null}
      {turn.player ? (
        <PlayerActions
          player={player[0]}
          dealerTurn={dealerTurn}
          hit={hit}
          turn={turn}
          outcome={outcome}
        />
      ) : null}
      <PlayerPanel player={player[0]} playerTotal={playerTotal} />
    </>
  )
}

export default SingleplayerPage
