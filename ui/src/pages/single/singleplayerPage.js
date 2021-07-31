import { useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { startHand } from "../../reducers/singlePlayer/action"
import { getDeck } from "../../reducers/deck/action"
import PlayerPanel from "../../Components/playerPanel"

const SingleplayerPage = ({ numOfDecks }) => {
  const dispatch = useDispatch()
  const { deck } = useSelector(state => state.deck)
  const [loading, setLoading] = useState(true)
  const [player, setPlayer] = useState([
    {
      player: "dealer",
      hands: []
    },
    {
      player: "playerOne",
      hands: []
    }
  ])
  useEffect(() => {}, [numOfDecks, dispatch])

  const handleGameStart = () => {
    dispatch(getDeck(numOfDecks))
    dispatch(startHand(player, deck, "100"))
  }

  return (
    <>
      <PlayerPanel
        player={player}
        deck={deck}
        start={handleGameStart}
        loading={loading}
        setLoading={setLoading}
      />
    </>
  )
}

export default SingleplayerPage
