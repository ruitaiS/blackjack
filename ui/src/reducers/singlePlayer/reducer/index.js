const initialState = {
  deck: [],
  players: []
}

export const singlePlayer = (state = initialState, action) => {
  switch (action.type) {
    case "START_GAME":
      return { players: [...action.data.players], deck: [...action.data.deck] }

    case "UPDATE_GAME":
      console.log(action)
      return { players: [...action.data.players], deck: [...action.data.deck] }

    default:
      return state
  }
}
