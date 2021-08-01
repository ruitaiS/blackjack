const initialState = {
  deck: [],
  player: []
}

export const player = (state = initialState, action) => {
  switch (action.type) {
    case "START_GAME":
      return { players: [...action.players] }

    case "UPDATE_PLAYERS":
      return { players: [...action.players] }

    default:
      return state
  }
}
