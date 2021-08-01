import { useState, useEffect } from "react"
import { Route, Switch, useLocation, Redirect } from "react-router-dom"
import MainPage from "./pages/mainPage/mainPage"
import SetUpSingPlayer from "./pages/single/setUpSingPlayer"
import SinglePlayerPage from "./pages/single/singleplayerPage"
import MultiplayerPage from "./pages/multi/multiplayerPage"
import Authentication from "./pages/auth/authentication"
import { AuthRoutes } from "./authRoutes"
import "bootstrap/dist/css/bootstrap.css"
import "./app.css"

function App() {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")))
  const location = useLocation()

  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem("user")))
  }, [location])

  return (
    <Switch>
      <AuthRoutes exact path="/main" component={MainPage} user={user} />
      <Route path="/login" component={Authentication} />
      <AuthRoutes exact path="/single/set-up" component={SetUpSingPlayer} user={user} />
      <AuthRoutes exact path="/single/player" component={SinglePlayerPage} user={user} />
      <AuthRoutes path="/multi/player" component={MultiplayerPage} user={user} />
      <Redirect to="/login" />
    </Switch>
  )
}

export default App
