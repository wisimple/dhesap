import React, { Suspense } from 'react';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Welcome from 'pages/Welcome';
import Signin from 'pages/Signin';
import Signup from 'pages/Signup';
import LoadingText from 'components/common/LoadingText';

const Home = React.lazy(() => import('pages/me'));

function App() {
  return (
    <Router>
      <Suspense fallback={<LoadingText />}>
        <Switch>
          <Route exact path='/' component={Welcome} />
          <Route exact path='/signin' component={Signin} />
          <Route exact path='/signup' component={Signup} />
          <Route path='/me' component={Home} />
        </Switch>
      </Suspense>
    </Router>
  );
}

export default App;
