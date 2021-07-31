import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom"
import MainPage from "./pages/mainPage/mainPage"
import SetUpSingPlayer from "./pages/single/setUpSingPlayer"
import SinglePlayerPage from "./pages/single/singleplayerPage"
import MultiplayerPage from "./pages/multi/multiplayerPage"
import Authentication from "./pages/auth/authentication"
import { AuthRoutes } from "./authRoutes"
import "bootstrap/dist/css/bootstrap.css"

import "./app.css"

function App() {
  const auth = localStorage.getItem("user") ? false : true

  return (
    <Router>
      <Switch>
        <Route exact path="/login" component={Authentication} />
        <AuthRoutes exact path="/main" component={MainPage} auth={auth} />
        <AuthRoutes exact path="/single/set-up" component={SetUpSingPlayer} auth={auth} />
        <AuthRoutes exact path="/single/player" component={SinglePlayerPage} auth={auth} />
        <AuthRoutes exact path="/multi/player" component={MultiplayerPage} auth={auth} />
        <Redirect to="/main" />
      </Switch>
    </Router>
  )
}

export default App
