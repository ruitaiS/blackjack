import { Switch, Route, Redirect } from "react-router-dom"
import { AuthRoutes } from "./authRoutes"
import Home from "./pages/home/home"
import MainPage from "./pages/mainPage/mainPage"
import SetUpSingPlayer from "./pages/single/setUpSingPlayer"
import SinglePlayerPage from "./pages/single/singleplayerPage"
import MultiplayerPage from "./pages/multi/multiplayerPage"

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/main" component={MainPage} />
      <Route exact path="/single/set-up" component={SetUpSingPlayer} />
      <Route exact path="/single/player" component={SinglePlayerPage} />
      <Route path="/multi/player" component={MultiplayerPage} />
      <Redirect to="/login" />
    </Switch>
  )
}

export default Routes
