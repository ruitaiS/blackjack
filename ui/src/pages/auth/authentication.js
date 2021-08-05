import axios from "axios"
import { useState } from "react"
import { useDispatch } from "react-redux"
import { useHistory } from "react-router-dom"
import { handleLogin, handleRegister } from "../../reducers/auth/action"

const Authentication = () => {
  const history = useHistory()
  const dispatch = useDispatch()
  const [auth, setAuth] = useState("login")
  const [userData, setUserdata] = useState({
    username: "",
    password: "",
    confirmPassword: ""
  })

  const handleSubmit = async e => {
    e.preventDefault()

    if (userData.passowrd === userData.confirmPassword) {
      alert("password doesn't match")
    }

    if (auth === "register") {
      dispatch(handleRegister(userData, history))
    } else {
      dispatch(handleLogin(userData, history))
    }
  }

  const handleChange = e => {
    const { name, value } = e.target

    setUserdata(data => ({ ...data, [name]: value }))
  }

  return (
    <div className="center-container">
      <div className="card center p-4">
        {auth === "login" ? <h3 className="mb-4">Login</h3> : <h3 className="mb-4">Register</h3>}
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              type="username"
              className="form-control"
              name="username"
              id="username"
              value={userData.username}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              className="form-control"
              id="password"
              name="password"
              value={userData.password}
              onChange={handleChange}
            />
          </div>
          {auth === "register" ? (
            <div className="form-group">
              <label htmlFor="confirmPassword">Confirm Password</label>
              <input
                type="password"
                className="form-control"
                id="confirmPassword"
                name="confirmPassword"
                value={userData.confirmPassword}
                onChange={handleChange}
              />
            </div>
          ) : null}
          <div className="form-group mt-2 d-flex justify-content-end">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
        </form>
        <div className="p-2 mt-4">
          {auth === "register" ? (
            <p>
              Already have an account?{" "}
              <button className="custom-btn" onClick={() => setAuth("login")}>
                Login
              </button>
            </p>
          ) : (
            <p>
              Don't have an account?{" "}
              <button className="custom-btn" onClick={() => setAuth("register")}>
                Register
              </button>
            </p>
          )}
        </div>
      </div>
    </div>
  )
}

export default Authentication
