import axios from "axios"

export const getDeck = numOfDecks => async dispatch => {
  const { data } = await axios.get(`http://localhost:4000/deck/${numOfDecks}`)

  dispatch({ type: "GET_DECK", data })
}
