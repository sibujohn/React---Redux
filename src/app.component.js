import React, { Component } from 'react'
import { connect } from 'react-redux'

import AppRoutes from './app.routes'


class AppComponent extends Component {
  render() {
    return (
      <div>
          {AppRoutes}
      </div>
    )
  }
}

export default connect()(AppComponent)
