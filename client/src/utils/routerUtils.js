import React from 'react'
import createBrowserHistory from 'history/createBrowserHistory'
import { Route, Redirect } from 'react-router-dom'

export const history = createBrowserHistory()

export const PrivateRoute = ({
  component: Component,
  isAthenticated,
  ...rest
}) => (
  <Route
    {...rest}
    render={props => {
      console.log('isAthenticated:', isAthenticated)

      if (isAthenticated) {
        return <Component />
      } else {
        return (
          <Redirect
            to={{
              pathname: '/login',
              state: { from: props.location }
            }}
          />
        )
      }
    }}
  />
)
