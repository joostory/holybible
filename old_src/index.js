import React from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import App from './containers/App'
import {applyMiddleware, createStore} from "redux"
import {createLogger} from "redux-logger"
import { fetchHolybible } from './actions'
import reducer from './reducers'
import './styles/index.scss'

const middleware = [createLogger()]
const store = createStore(
  reducer,
  applyMiddleware(...middleware)
)

fetchHolybible(store)

createRoot(document.getElementById('root'))
  .render(
    <Provider store={store}>
      <App />
    </Provider>
  )
