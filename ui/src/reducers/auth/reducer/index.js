const initialState = {
  user: {}
}

export const auth = (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN_USER":
      return { user: action.user }
    default:
      return state
  }
}
