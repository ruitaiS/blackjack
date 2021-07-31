const initialState = {
  deck: []
}

export const deck = (state = initialState, action) => {
  switch (action.type) {
    case "GET_DECK":
      return { deck: [...action.data] }

    case "UPDATE_DECK":
      return { deck: [...action.deck] }

    default:
      return state
  }
}
