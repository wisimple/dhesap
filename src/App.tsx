import React, { Suspense, useEffect } from 'react';

import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

import Welcome from 'pages/Welcome';
import Signin from 'pages/Signin';
import Signup from 'pages/Signup';
import TextLoading from 'components/common/TextLoading';
import PrivateRoute from 'PrivateRoute';
import { useSelector } from 'react-redux';
import { RootState } from 'store';

const Home = React.lazy(() => import('pages/me'));

function App() {
  const token = useSelector((state: RootState) => state.authState.token);
  const theme = useSelector((state: RootState) => state.appState.theme);

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (
    <Router>
      <Suspense fallback={<TextLoading />}>
        <Switch>
          <Route exact path='/' component={Welcome} />
          <Route exact path='/signin'>
            {token ? <Redirect to='/me/tabs/transactions' /> : <Signin />}
          </Route>
          <Route exact path='/signup'>
            {token ? <Redirect to='/me/tabs/transactions' /> : <Signup />}
          </Route>
          <PrivateRoute path='/me'>
            <Home />
          </PrivateRoute>
          <Route path='*' component={Welcome} />
        </Switch>
      </Suspense>
    </Router>
  );
}

export default App;
