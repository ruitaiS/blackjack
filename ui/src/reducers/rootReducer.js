// ** Redux Imports
import { combineReducers } from "redux"
import { auth } from "./auth/reducer"
import { singlePlayer } from "./singlePlayer/reducer"
import { gameHistory } from "./game/reducer"

const rootReducer = combineReducers({
  singlePlayer,
  gameHistory,
  auth
})

export default rootReducer
