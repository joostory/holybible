import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import App from './containers/App'
import {applyMiddleware, createStore} from "redux"
import {createLogger} from "redux-logger"
import { fetchHolybible } from './actions'
import reducer from './reducers'
import './styles/holybible.css'

const middleware = [createLogger()]
const store = createStore(
  reducer,
  applyMiddleware(...middleware)
)

fetchHolybible(store)

render (
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root')
)
