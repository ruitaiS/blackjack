import { Switch, Route, Redirect } from "react-router-dom"
import { AuthRoutes } from "./authRoutes"
import Home from "./pages/home/home"
import MainPage from "./pages/mainPage/mainPage"
import SetUpSingPlayer from "./pages/single/setUpSingPlayer"
import SinglePlayerPage from "./pages/single/singleplayerPage"
import MultiplayerPage from "./pages/multi/multiplayerPage"
import Authentication from "./pages/auth/authentication"

const Routes = ({ user }) => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/login" component={Authentication} />
      <AuthRoutes exact path="/main" component={MainPage} user={user} />
      <AuthRoutes exact path="/single/set-up" component={SetUpSingPlayer} user={user} />
      <AuthRoutes exact path="/single/player" component={SinglePlayerPage} user={user} />
      <AuthRoutes path="/multi/player" component={MultiplayerPage} user={user} />
      <Redirect to="/login" />
    </Switch>
  )
}

export default Routes
