import ReactDOM from 'react-dom'
import * as serviceWorker from './serviceWorker'
import configureStore from './configureStore'
import Main from './main'
import { ApplicationState } from './store'

const initialState = (window as { INITIAL_REDUX_STATE?: ApplicationState })
  .INITIAL_REDUX_STATE
const store = configureStore(initialState)

ReactDOM.render(<Main store={store} />, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
