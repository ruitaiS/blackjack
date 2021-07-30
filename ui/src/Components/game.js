import { useState } from "react"
import { useDispatch } from "react-redux"
import { useSelector } from "react-redux"
import { getDeck } from "../reducers/deck/action"
import Card from "./card"

import PlayerPanel from "./playerPanel"
import DealerPanel from "./dealerPanel"

const Game = () => {
  const dispatch = useDispatch()
  const { deck } = useSelector(state => state.deck)
  const [index, setIndex] = useState(0)

  const handleNewDeck = () => {
    dispatch(getDeck(1))
    setIndex(0)
  }

  const handleIndexChange = () => {
    setIndex(index + 1)
  }

  if (index >= 51) {
    return (
      <>
        <p>there are no more cards in the deck</p>
        <button onClick={handleNewDeck}>Get a new deck</button>
      </>
    )
  }

  const { rank, suit } = deck[index]

  //Placeholder for now
  let phase = "bet"
  let hand = [{rank: "1", suit:"C"}, {rank:"2", suit:"D"}, {rank:"4", suit:"H"}]
  let hand2 = [{rank: "1", suit:"D"}, {rank:"2", suit:"D"}]

  return (
    <div>
      <DealerPanel hand={hand2} phase={phase}/>
      <PlayerPanel hand={hand} balance={9999} phase={phase}/>
      <Card rank={rank} suit={suit} shown={true} />
      <button onClick={handleIndexChange}>next card</button>
    </div>
  )
}

export default Game
