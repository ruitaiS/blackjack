/* eslint-disable array-callback-return */
import axios from "axios"

export const initGame = (numOfDecks, bank, history) => async dispatch => {
  try {
    const { data } = await axios.get(`http://localhost:4000/deck/${numOfDecks}`)

    dispatch({ type: "INIT", data: { deck: data, amount: bank } })
    history.push("/single/player")
  } catch (err) {
    console.log(err)
  }
}

export const start = bet => async (dispatch, getState) => {
  const { singlePlayer } = getState()
  // deal hands to dealer and player
  dispatch({ type: "DEAL", bet })
  // get total values
  dispatch({ type: "TALLY" })

  // if player either busts or hit blackjack
  // change status
  if (singlePlayer.playerScore >= 21) dispatch({ type: "OUTCOME" })
}

export const hit =
  ({ turn }) =>
  async (dispatch, getState) => {
    const { singlePlayer } = getState()
    // hit the player with a card
    dispatch({ type: "HIT", turn })
    // get new total value
    dispatch({ type: "TALLY" })

    // check if player busted or hit 21
    if (singlePlayer.playerScore >= 21) dispatch({ type: "OUTCOME" })
  }

export const stay = () => async (dispatch, getState) => {
  const { singlePlayer } = getState()

  // check the deck to see if there are enough cards for next turn
  // if not get new deck

  if (singlePlayer.deck.length > 10)
    // while dealer has less than 17 keep hitting dealer with a card
    while (singlePlayer.dealerScore < 17) {
      dispatch({ type: "TALLY" })
      dispatch({ type: "HIT", turn: "dealer" })
      break
    }

  //decide winner
  dispatch({ type: "OUTCOME" })
}

export const getCardValue = cards => {
  let value = 0
  let aceCount = 0

  // loop over cards array and add their value to value
  for (const card of cards) {
    // add value to value
    value += card.value
    // count aces
    if (card.value === 11) {
      aceCount++
    }
  }

  // subtract 10 from value if value is over 21
  if ((aceCount > 0) & (value > 21)) {
    value -= 10
  }

  return value
}
