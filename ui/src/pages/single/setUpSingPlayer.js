import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { initGame } from "../../reducers/singlePlayer/action"
import { useHistory } from "react-router"

import "./singlePlayer.css"

const SetUpSingPlayer = () => {
  const history = useHistory()
  const dispatch = useDispatch()
  const { user } = useSelector(state => state.auth)
  const [numOfDecks, setNumOfDecks] = useState(1)
  const [bank, setBank] = useState(500)

  const handleSubmit = e => {
    e.preventDefault()

    dispatch(initGame(numOfDecks, bank, history))
  }

  const handleSetDeck = e => {
    setNumOfDecks(e.target.value)
  }

  const handleSetBank = e => {
    setBank(e.target.value)
  }

  return (
    <div className="d-flex justify-content-center w-100">
      <div>
        <h2 className="w-30 mt-4">Single Player</h2>
        <form onSubmit={handleSubmit} className="w-30 mt-4">
          <div className="card" style={{ width: "18rem" }}>
            <div className="card-body">
              <h5 className="card-title">Name: {user.username}</h5>
            </div>
          </div>
          <div className="form-group mt-4">
            <label htmlFor="bankAmount">Start Amount</label>
            <input
              className="form-control"
              id="bankAmount"
              name="bankAmount"
              type="number9"
              onChange={handleSetBank}
              value={bank}
            />
          </div>
          <div className="form-group mt-4">
            <label htmlFor="numOfDecks">Number of decks</label>
            <select
              className="form-control"
              id="numOfDecks"
              name="numOfDecks"
              onChange={handleSetDeck}
              value={numOfDecks}
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
