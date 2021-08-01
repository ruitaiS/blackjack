// ** Redux Imports
import { combineReducers } from "redux"
import { deck } from "./deck/reducer"
import { tournament } from "./tournament/reducer"

const rootReducer = combineReducers({
  deck,
  tournament
})

export default rootReducer
