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
  // deal two cards to player and dealer
  for (let i = 0; i < 2; i++) {
    for (let j = 0; j < players.length; j++) {
      players[j].hand.push(deck[0])
      deck.shift()
    }
  }

  console.log(players)

  dispatch({ type: "UPDATE_DECK", data: { deck, players } })
}

export const dealACardToPlayer = (deck, players, playerId) => async dispatch => {
  console.log("player", players)
  console.log("deck", deck)

  const currentPlayer = players.filter(player => player.id === playerId)
  currentPlayer.hand.push(deck[0])
  deck.shift()

  dispatch({ type: "UPDATE_DECK", deck })
  dispatch({ type: "UPDATE_PLAYER", players })
}

export const getValue = hand => {
  let val = 0
  let aceCount = 0
  for (let card of hand) {
    if (card.rank < 11) {
      val += card.rank
      if (card.rank === 1) {
        aceCount += 1
        val += card.rank
      }
    }
  }

  while (aceCount > 0 && val > 21) {
    aceCount -= 1
    val -= 10
  }

  return val
}
