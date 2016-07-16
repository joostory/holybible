import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import App from './containers/App'
import configureStore from './store/configureStore'
import { fetchHolybible } from './actions'

const store = configureStore()

store.dispatch(fetchHolybible())

render (
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root')
)
