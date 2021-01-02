import React, { Suspense } from 'react';
import NavigationTabs from './components/NavigationTabs';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NavigationTop from './components/NavigationTop';

const Home = React.lazy(() => import('pages/home'));
const Welcome = React.lazy(() => import('pages/Welcome'));
const Signin = React.lazy(() => import('pages/Signin'));
const Signup = React.lazy(() => import('pages/Signup'));

function App() {
  return (
    <Router>
      <Suspense fallback={<h1>loading...</h1>}>
        <Switch>
          <Route path='/home' component={Home} />
          <Route path='/signin' component={Signin} />
          <Route path='/signup' component={Signup} />
          <Route path='/' component={Welcome} />
        </Switch>
      </Suspense>
    </Router>
  );
}

export default App;
