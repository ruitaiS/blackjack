import axios from "axios"

export const getADeck = async numOfDecks => {
  const deck = await axios.get(`http://localhost:4000/deck/${numOfDecks}`)

  console.log(deck)
}
