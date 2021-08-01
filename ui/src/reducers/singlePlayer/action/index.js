import axios from "axios"

export const startGame = (players, numOfDecks, history) => async dispatch => {
  try {
    const { data } = await axios.get(`http://localhost:4000/deck/${numOfDecks}`)

    dispatch({ type: "START_GAME", data: { deck: data, players } })
    history.push("/single/player")
  } catch (err) {
    console.log(err)
  }
}

export const startHand = (players, deck) => async dispatch => {
  console.log("inside start hand", deck.length)
  // deal two cards to player and dealer
  for (let i = 0; i < 2; i++) {
    for (let j = 0; j < players.length; j++) {
      players[j].hand.push(deck[0])
      deck.shift()
    }
  }

  console.log(deck)
  console.log("after loop inside start hand", deck.length)
  dispatch({ type: "UPDATE_DECK", data: { deck, players } })
}

export const dealACardToPlayer = (player, deck) => async dispatch => {
  console.log("deck length 1", deck.length)
  const card = deck[0]
  console.log("deck length 2", deck.length)
  player.hand.push(card)
  console.log("deck length 3", deck.length)
  deck.shift()
  console.log("deck length 4", deck.length)

  dispatch({ type: "UPDATE_DECK", deck })
  dispatch({ type: "UPDATE_PLAYER_HAND", player })
}

export const getValue = hand => {
  let val = 0
  let aceCount = 0
  for (let card of hand) {
    if (card.value < 11) {
      val += card.value
      if (card.rank === 1) {
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
