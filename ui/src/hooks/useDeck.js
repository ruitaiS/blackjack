import { useState, useEffect } from "react"
import axios from "axios"

const useDeck = numOfDecks => {
  const [deck, setDeck] = useState(null)

  useEffect(() => {
    const getDeck = async () => {
      const { data } = await axios.get(`http://localhost:4000/deck/${numOfDecks}`)
      setDeck(data)
    }

    getDeck()
  }, [numOfDecks])

  return deck
}

export default useDeck
