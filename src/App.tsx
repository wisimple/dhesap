import React, { Suspense } from 'react';
import NavigationTabs from './components/NavigationTabs';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NavigationTop from './components/NavigationTop';

const Home = React.lazy(() => import('./pages/Home'));
const Summary = React.lazy(() => import('./pages/Summary'));
const Accounts = React.lazy(() => import('./pages/Accounts'));
const Categories = React.lazy(() => import('./pages/Categories'));

function App() {
  return (
    <Router>
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
