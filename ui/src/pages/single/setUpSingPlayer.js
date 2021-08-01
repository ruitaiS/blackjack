import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { startGame } from "../../reducers/singlePlayer/action"
import { useHistory } from "react-router"

import "./singlePlayer.css"

const SetUpSingPlayer = ({ setLoading }) => {
  const history = useHistory()
  const dispatch = useDispatch()
  // const { user } = useSelector(state => state.user)
  const [singlePlayer, setSinglePlayer] = useState({
    player: {
      name: "Terry",
      amount: 50
    },
    numOfDecks: 1
  })

  const handleSubmit = e => {
    e.preventDefault()

    dispatch(startGame(singlePlayer.player, singlePlayer.numOfDecks))
    history.push("/single/player")
  }

  const handleChange = e => {
    const { name, value } = e.target
    setSinglePlayer(state => ({ ...state, [name]: value }))
  }

  return (
    <div className="d-flex justify-content-center w-100">
      <div>
        <h2 className="w-30 mt-4">Single Player</h2>
        <form onSubmit={handleSubmit} className="w-30 mt-4">
          <div className="card" style={{ width: "18rem" }}>
            <div className="card-body">
              <h5 className="card-title">Name: {singlePlayer.player.name}</h5>
              <p className="card-text">Bank: {singlePlayer.player.amount}</p>
            </div>
          </div>
          <div className="form-group mt-4">
            <label htmlFor="numOfDecks">Number of decks</label>
            <select
              className="form-control"
              id="numOfDecks"
              name="numOfDecks"
              onChange={handleChange}
              value={singlePlayer.numOfDecks}
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
