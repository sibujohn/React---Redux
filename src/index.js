import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import { createLogger } from 'redux-logger'

import AppComponent from './app.component'
import AppStore from './app.store'

const middleware = [ thunk ]
if (process.env.NODE_ENV !== 'production') {
  middleware.push(createLogger())
}

const store = AppStore

render(
  <Provider store={store}>
    <AppComponent />
  </Provider>,
  document.getElementById('root')
)
