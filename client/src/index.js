import React from 'react'
import ReactDOM from 'react-dom'
import App from './containers/App'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import rootReducer from './reducers'

let middlewares = [thunk]

if (process.env.NODE_ENV !== 'production') {
  const { logger } = require('redux-logger')
  middlewares.push(logger)
}

const store = createStore(rootReducer, applyMiddleware(...middlewares))

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
