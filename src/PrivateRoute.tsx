import React from 'react';
import { Route, Redirect, RouteProps } from 'react-router-dom';

import { useSelector } from 'react-redux';
import { RootState } from 'store';

interface Props extends RouteProps {
  children?: React.ReactNode;
}

const PrivateRoute = ({ children, ...rest }: Props) => {
  const { token } = useSelector((state: RootState) => state.auth);
  return (
    <Route
      {...rest}
      render={({ location }) =>
        token ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: '/signin',
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};

export default PrivateRoute;