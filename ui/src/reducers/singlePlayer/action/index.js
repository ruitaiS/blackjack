import axios from "axios"

export const startGame = (player, numOfDecks) => async dispatch => {
  try {
    const { data } = await axios.get(`http://localhost:4000/deck/${numOfDecks}`)

    dispatch({ type: "GET_DECK", data })
    // const game = await axios.post("/single/player", { player, numOfDecks })
  } catch (err) {
    console.log(err)
  }
}

export const startHand = (players, deck, amount) => async dispatch => {
  console.log("players", players)
  console.log("deck", deck)

  // deal two cards to player and dealer
  for (let i = 0; i < 2; i++) {
    for (let j = 0; j < players.length; j++) {
      players[j].hands.push(deck[j])
      deck.shift()
    }
  }

  dispatch({ type: "UPDATE_DECK", deck })
  dispatch({ type: "UPDATE_PLAYER", players })
}

export const dealACardToPlayer = (deck, player) => async dispatch => {
  console.log("player", player)
  console.log("deck", deck)

  player.hands.push(deck[0])
  deck.shift()

  dispatch({ type: "UPDATE_DECK", deck })
  dispatch({ type: "UPDATE_PLAYER", player })
}
