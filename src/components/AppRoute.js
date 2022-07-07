import React, { Component } from 'react'
import { Switch, Route, BrowserRouter as Router, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'

import PropTypes from 'prop-types'
import { authProtectedRoutes, publicRoutes } from '../routes'

class AppRoute extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  static propTypes = {
    location: PropTypes.object.isRequired,
  }
  render() {
    return (
      <>
        <Router>
          <Switch>
            {publicRoutes.map((route, idx) => (
              <AppRoute path={route.path} component={route.component} key={idx} isAuthProtected={false} />
            ))}

            {authProtectedRoutes.map((route, idx) => (
              <AppRoute path={route.path} component={route.component} key={idx} isAuthProtected={true} />
            ))}
          </Switch>
        </Router>
      </>
    )
  }
}

const mapStateToProps = state => {
  return {
    auth: state.auth,
  }
}

export default withRouter(connect(mapStateToProps, null)(AppRoute))
