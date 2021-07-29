// ** Redux Imports
import { combineReducers } from "redux"
import { deck } from "./deck/reducer"

const rootReducer = combineReducers({
  deck
})

export default rootReducer
