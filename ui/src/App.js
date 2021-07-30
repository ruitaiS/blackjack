
import { useEffect } from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import { useDispatch } from "react-redux"
import Game from "./Components/game"
import { getDeck } from "./reducers/deck/action"
import PlayerPanel from "./Components/playerPanel"

function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getDeck(1))
  }, [dispatch])
  
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Game} />
      </Switch>
    </Router>
  )
}

export default App
