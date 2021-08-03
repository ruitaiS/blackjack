import { useState } from "react"
import { getValue } from "../reducers/singlePlayer/action"

const useWinner = (dealer, player) => {
  const [winner, setWinner] = useState(null)
  const [outcome, setOutcome] = useState("")

  if (dealer.hand.length & (player.hand.length > 0)) {
    const dealerTotal = getValue(dealer.hand)
    const playerTotal = getValue(player.hand)

    if (dealerTotal > 21) {
      setOutcome("dealer bust!")
      setWinner(player)
    } else if (dealerTotal > playerTotal) {
      setOutcome("dealer wins!")
      setWinner(dealer)
    } else if (dealerTotal === playerTotal) {
      setOutcome("push")
      setWinner(null)
    } else if (playerTotal > 21) {
      setOutcome("player bust!")
      setWinner(dealer)
    } else {
      setOutcome("player wins!")
      setWinner(player)
    }
  }

  return { winner, outcome }
}

export default useWinner
