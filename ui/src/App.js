import { useState, useEffect } from "react"
import { useLocation, useHistory } from "react-router-dom"
import { useDispatch } from "react-redux"
import Routes from "./Routes"
import Nav from "./pages/home/nav"
import { handleLogout } from "./reducers/auth/action"
import "bootstrap/dist/css/bootstrap.css"
import "./app.css"

function App() {
  const history = useHistory()
  const dispatch = useDispatch()
  const [user, setUser] = useState(null)
  const location = useLocation()

  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem("user")))
  }, [location, history])

  const handleUserLogout = () => {
    dispatch(handleLogout)
  }

  return (
    <div>
      <Nav user={user} logout={handleUserLogout} />
      <Routes user={user} />
    </div>
  )
}

export default App
