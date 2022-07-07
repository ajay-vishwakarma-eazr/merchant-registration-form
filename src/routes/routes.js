import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

const AppRoute = ({ component: Component, isAuthProtected, auth, ...rest }) => (
  <Route
    {...rest}
    render={props => {
      if (isAuthProtected && !auth.isAuthenticated) {
        return (
          <Redirect
            to={{
              pathname: '/login',
              state: { from: props.location },
            }}
          />
        )
      } else if (!isAuthProtected && auth.isAuthenticated) {
        return (
          <Redirect
            to={{
              pathname: '/register',
              state: { from: props.location },
            }}
          />
        )
      }
    }}
  />
)

const mapStateToProps = state => {
  return {
    auth: state.auth,
  }
}

export default connect(mapStateToProps, null)(AppRoute)
