const initialState = {
  players: [],
  hands: []
}

export const tournament = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_PLAYER":
      return { ...state, players: [...state.players, { ...action.data }] }
    case "ADD_HANDS":
      return { ...state, hands: [...state.hands, { ...action.data }] }

    default:
      return state
  }
}
