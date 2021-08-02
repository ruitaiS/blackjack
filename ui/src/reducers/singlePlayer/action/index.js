/* eslint-disable array-callback-return */
import axios from "axios"

export const startGame = (players, deck, history) => async dispatch => {
  try {
    dispatch({ type: "START_GAME", data: { deck, players } })
    history.push("/single/player")
  } catch (err) {
    console.log(err)
  }
}

export const startHand = (players, deck) => async dispatch => {
  players.map(player => {
    if (player.hand.length) {
      player.hand = []
    }
  })

  // deal two cards to player and dealer
  for (let i = 0; i < 2; i++) {
    for (let j = 0; j < players.length; j++) {
      players[j].hand.push(deck[0])
      deck.shift()
    }
  }

  dispatch({ type: "UPDATE_GAME", data: { deck, players } })
}

export const dealACardToPlayer = (player, deck) => async dispatch => {
  const card = deck[0]
  player.hand.push(card)
  deck.shift()

  dispatch({ type: "UPDATE_DECK", deck })
  dispatch({ type: "UPDATE_PLAYER_HAND", player })
}

export const getValue = hand => {
  let val = 0
  let aceCount = 0
  for (let card of hand) {
    if (card.value < 11) {
      val += card.value
      if (card.value === 1) {
        aceCount += 1
        val += card.value
      }
    }
  }

  while (aceCount > 0 && val > 21) {
    aceCount -= 1
    val -= 10
  }

  return val
}
