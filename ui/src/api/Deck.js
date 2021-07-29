import axios from "axios"

export const getADeck = async numOfDecks => {
  const { data } = await axios.get(`http://localhost:4000/deck/${numOfDecks}`)

  return data
}
