// ** Redux Imports
import { combineReducers } from "redux"
import { auth } from "./auth/reducer"
import { singlePlayer } from "./singlePlayer/reducer"

const rootReducer = combineReducers({
  singlePlayer,
  auth
})

export default rootReducer
