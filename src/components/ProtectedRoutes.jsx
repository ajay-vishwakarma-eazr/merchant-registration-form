import React from 'react'
import { Navigate, Route } from 'react-router-dom'

const ProtectedRoutes = ({ auth, component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) => {
        if (auth) return <Component {...props} />;
        if (!auth) return <Navigate to={{ path: '/', state: { from: props.location } }} />
      }} 
    > 
</Route>
  );
}

export default ProtectedRoutes
