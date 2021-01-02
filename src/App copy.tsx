import React, { Suspense } from 'react';
import NavigationTabs from './components/NavigationTabs';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NavigationTop from './components/NavigationTop';

const Home = React.lazy(() => import('./pages/home/Home'));
const Summary = React.lazy(() => import('./pages/home/Summary'));
const Accounts = React.lazy(() => import('./pages/home/Accounts'));
const Categories = React.lazy(() => import('./pages/home/Categories'));

function App() {
  return (
    <Router basename='/home'>
      <NavigationTop />

      <main className='container'>
        <Suspense fallback={<h1>loading...</h1>}>
          <Switch>
            <Route path='/summary' component={Summary} />
            <Route path='/accounts' component={Accounts} />
            <Route path='/categories' component={Categories} />
            <Route path='/' component={Home} />
          </Switch>
        </Suspense>
      </main>

      <NavigationTabs />
    </Router>
  );
}

export default App;
