const initialState = {
  gameLog: []
}

export const gameHistory = (state = initialState, action) => {
  switch (action.type) {
    case "LOG":
      return { gameLog: [...state.gameLog, action.log] }

    case "RESET_LOG":
      return { gameLog: [] }

    default:
      return state
  }
}
