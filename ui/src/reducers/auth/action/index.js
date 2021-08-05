import axios from "axios"

export const handleRegister = (userData, history) => async dispatch => {
  try {
    history.push("/main")
    const { data } = await axios.post("https://gentle-gorge-88181.herokuapp.com/auth/register", {
      userData
    })

    localStorage.setItem("user", JSON.stringify(data.user))
    localStorage.setItem("accessToken", JSON.stringify(data.accessToken))
    localStorage.setItem("refreshToken", JSON.stringify(data.refreshToken))
    dispatch({ type: "LOGIN_USER", user: data.user })
  } catch (err) {
    console.log(err)
  }
}

export const handleLogin = (userData, history) => async dispatch => {
  try {
    history.push("/main")
    const { data } = await axios.post(
      "https://gentle-gorge-88181.herokuapp.com/auth/login",
      userData
    )

    localStorage.setItem("user", JSON.stringify(data.user))
    localStorage.setItem("accessToken", JSON.stringify(data.accessToken))
    localStorage.setItem("refreshToken", JSON.stringify(data.refreshToken))
    dispatch({ type: "LOGIN_USER", user: data.user })
  } catch (err) {
    console.log(err)
  }
}

export const handleLogout = () => {
  localStorage.removeItem("user")
  localStorage.removeItem("accessToken")
  localStorage.removeItem("refreshToken")
}
