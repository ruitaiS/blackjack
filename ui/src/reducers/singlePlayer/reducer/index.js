const initialState = {
  deck: [],
  players: []
}

export const singlePlayer = (state = initialState, action) => {
  switch (action.type) {
    case "START_GAME":
      return { ...state, players: [...action.data.players], deck: action.data.deck }

    case "UPDATE_GAME":
      const gameCopy = {
        ...state,
        players: [...state.players],
        deck: [...state.deck]
      }

      gameCopy.deck = action.data.deck
      gameCopy.players = action.data.players
      return gameCopy

    case "UPDATE_DECK":
      const deckCopy = {
        ...state,
        players: [...state.players],
        deck: [...state.deck]
      }
      deckCopy.deck = action.deck
      return deckCopy

    case "UPDATE_PLAYER_HAND":
      const playerCopy = {
        ...state,
        players: [...state.players],
        deck: [...state.deck]
      }

      return playerCopy

    default:
      return state
  }
}
