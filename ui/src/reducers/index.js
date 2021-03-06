// ** Redux, Thunk & Root Reducer Imports
import thunk from "redux-thunk"
import createDebounce from "redux-debounced"
import { loadState, saveState } from "../reducers/persistedReducers"
import rootReducer from "./rootReducer"
import { createStore, applyMiddleware, compose } from "redux"

// ** init middleware
const middleware = [thunk, createDebounce()]

// ** Dev Tools
const composeEnhancers =
  (typeof window !== "undefined" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose

const persistedStore = loadState()

// ** Create store
const store = createStore(
  rootReducer,
  persistedStore,
  composeEnhancers(applyMiddleware(...middleware))
)

store.subscribe(() => {
  saveState(store.getState())
})

export { store }
