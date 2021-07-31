export const handleLogin = (data, history) => async dispatch => {
  try {
    const { user, accessToken, refreshToken } = data

    dispatch({ type: "LOGIN_USER", user })
    localStorage.setItem("user", JSON.stringify(user))
    localStorage.setItem("accessToken", JSON.stringify(accessToken))
    localStorage.setItem("refreshToken", JSON.stringify(refreshToken))

    history.push("/main")
  } catch (err) {
    console.log(err)
  }
}

export const handleLogout = () => {
  localStorage.removeItem("user")
  localStorage.removeItem("accessToken")
  localStorage.removeItem("refreshToken")
}
