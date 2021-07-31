import { axios } from "../../../utils/axios"

export const createTournament = (userId, balance, numOfDecks) => async dispatch => {
  try {
    const { data } = await axios.post("/tournament", {
      userId,
      balance,
      numOfDecks
    })

    dispatch({ type: "CREATE_TOURNAMENT", tournament: data })
  } catch (err) {
    console.log(err)
  }
}

export const joinTournament = (userId, tournamentId, balance) => async dispatch => {
  try {
    const response = await axios.post(`/tournament/${tournamentId}`, {
      userId,
      balance
    })

    if (response.status === 200) {
      dispatch({ type: "JOIN_TOURNAMENT", tournament: response.data })
    }
  } catch (err) {
    console.log(err)
  }
}

export const updateTournamentWithPlayerHands =
  (tournamentId, username, balance, hand) => async dispatch => {
    try {
      const response = await axios.post(`/tournament/${tournamentId}/hands`, {
        username,
        balance,
        hand
      })

      if (response.status === 200) {
        dispatch({ type: "UPDATE_HANDS", hand: { username, balance, hand } })
      }
    } catch (err) {
      console.log(err)
    }
  }

export const setTournamentWinner = (userId, tournamentId) => async dispatch => {
  try {
    const response = await axios.patch(`/tounrament/${tournamentId}/winner`, { userId })

    if (response.status === 200) {
      dispatch({ type: "SET_TOURNAMENT_WINNER", winner: response.data })
    }
  } catch (err) {
    console.log(err)
  }
}

export const updateBalance = (state, username, win, betAmount) => async dispatch => {
  const copyState = { ...state }
  const player = copyState.players.filter(player => player.username === username)

  if (!win) {
    player[0].balance -= betAmount
  }
  player[0].balance += betAmount

  dispatch({ type: "UPDATE_PLAYER_BALANCE", data: copyState })
}
