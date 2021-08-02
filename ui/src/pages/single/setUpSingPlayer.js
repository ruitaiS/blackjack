import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { startGame } from "../../reducers/singlePlayer/action"
import { useHistory } from "react-router"

import "./singlePlayer.css"

const SetUpSingPlayer = () => {
  const history = useHistory()
  const dispatch = useDispatch()
  const { user } = useSelector(state => state.auth)
  const [numOfDeck, setNumOfDeck] = useState(1)
  const [players, setPlayers] = useState([
    {
      name: "dealer",
      hand: []
    },
    {
      name: user.username,
      id: user.id,
      balance: user.balance,
      hand: []
    }
  ])

  const handleSubmit = e => {
    e.preventDefault()

    dispatch(startGame(players, numOfDeck, history))
  }

  const handleChange = e => {
    setNumOfDeck(e.target.value)
  }

  return (
    <div className="d-flex justify-content-center w-100">
      <div>
        <h2 className="w-30 mt-4">Single Player</h2>
        <form onSubmit={handleSubmit} className="w-30 mt-4">
          <div className="card" style={{ width: "18rem" }}>
            <div className="card-body">
              <h5 className="card-title">Name: {user.username}</h5>
              <p className="card-text">Bank: {user.balance}</p>
            </div>
          </div>
          <div className="form-group mt-4">
            <label htmlFor="numOfDecks">Number of decks</label>
            <select
              className="form-control"
              id="numOfDecks"
              name="numOfDecks"
              onChange={handleChange}
              value={user.numOfDecks}
            >
              <option>1</option>
              <option>4</option>
              <option>8</option>
            </select>
          </div>
          <button className="btn btn-success mt-4" type="submit">
            Start
          </button>
        </form>
      </div>
    </div>
  )
}

export default SetUpSingPlayer
