import React, { Suspense, useEffect } from 'react';

import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

import 'i18n/config';

import Welcome from 'pages/Welcome';
import Signin from 'pages/Signin';
import Signup from 'pages/Signup';
import TextLoading from 'components/common/TextLoading';
import PrivateRoute from 'PrivateRoute';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'store';
import { useTranslation } from 'react-i18next';
import { updateUserSettings } from 'store/auth/actions';

const Home = React.lazy(() => import('pages/me'));

function App() {
  const token = useSelector((state: RootState) => state.authState.token);
  const { theme, language } = useSelector((state: RootState) => state.appState);
  const { i18n } = useTranslation();
  const dispatch = useDispatch();

  useEffect(() => {
    document.body.className = theme;
    i18n.changeLanguage(language);
  }, [theme, language]);

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
