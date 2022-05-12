import { createStore } from "redux"
import reducerCounetr from "../reducers/reducerCounter"

const store = createStore(reducerCounetr, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

export default store