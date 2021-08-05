/* eslint-disable array-callback-return */
import axios from "axios"

const log = ({ dealerScore, playerScore, status}) => `dealer: ${dealerScore}, player: ${playerScore}. Player ${status}`

export const initGame = (numOfDecks, bank, history) => async dispatch => {
  try {
    const { data } = await axios.get(`https://gentle-gorge-88181.herokuapp.com/deck/${numOfDecks}`)

    dispatch({ type: "INIT", data: { deck: data, amount: bank } })
    history.push("/single/player")
  } catch (err) {
    console.log(err)
  }
}

export const start = bet => async (dispatch, getState) => {
  // TODO: check for length of the deck to see if new deck is required

  // deal hands to dealer and player
  dispatch({ type: "DEAL", bet })
  // get total values
  dispatch({ type: "TALLY" })

  // if player either busts or hit blackjack
  // change status
  if (getState().singlePlayer.playerScore >= 21 || getState().singlePlayer.dealerScore >= 21) {
    dispatch({ type: "OUTCOME" })

    const { singlePlayer } = getState()
    dispatch({
      type: "GAME_LOG",
      data: {
        playerScore: singlePlayer.playerScore,
        dealerScore: singlePlayer.dealerScore,
        status: singlePlayer.status,
        deck: singlePlayer.deck.length,
        bet: singlePlayer.bet,
        playerBank: singlePlayer.playerBank
      }
    })
  }
}

export const hit = turn => async (dispatch, getState) => {
  // hit the player with a card
  dispatch({ type: "HIT", turn })
  // get new total value
  dispatch({ type: "TALLY" })
  // check if player busted or hit 21
  if (getState().singlePlayer.playerScore >= 21) {
    dispatch({ type: "OUTCOME" })

    const { singlePlayer } = getState()
    dispatch({
      type: "GAME_LOG",
      data: {
        playerScore: singlePlayer.playerScore,
        dealerScore: singlePlayer.dealerScore,
        status: singlePlayer.status,
        deck: singlePlayer.deck.length,
        playerBank: singlePlayer.playerBank
      }
    })
  }
}

export const stay = () => async (dispatch, getState) => {
  // while dealer has less than 17 keep hitting dealer with a card
  while (getState().singlePlayer.dealerScore < 17) {
    dispatch(hit("dealer"))
  }

  //decide winner
  dispatch({ type: "OUTCOME" })

  if (getState().singlePlayer.status !== "action" || getState().singlePlayer.status !== "bet") {
    const { singlePlayer } = getState()
    dispatch({
      type: "GAME_LOG",
      data: {
        playerScore: singlePlayer.playerScore,
        dealerScore: singlePlayer.dealerScore,
        status: singlePlayer.status,
        deck: singlePlayer.deck.length,
        playerBank: singlePlayer.playerBank
      }
    })
  }
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
  while (aceCount > 0 && value > 21) {
    value -= 10
    aceCount--
  }

  return value
}
