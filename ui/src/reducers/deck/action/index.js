import { getADeck } from "../../../api/Deck"

export const getDeck = numOfDecks => async dispatch => {
  const deck = await getADeck(numOfDecks)

  dispatch({ type: "GET_DECK", data: deck })
}
