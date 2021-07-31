import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import MainPage from "./pages/mainPage/mainPage"
import SingleplayerPage from "./pages/single/singleplayerPage"
import MultiplayerPage from "./pages/multi/multiplayerPage"

import "./app.css"

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={MainPage} />
        <Route exact path="/single/player" component={SingleplayerPage} />
        <Route exact path="/multi/player" component={MultiplayerPage} />
      </Switch>
    </Router>
  )
}

export default App
