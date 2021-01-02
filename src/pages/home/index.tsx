import React, { Suspense } from 'react';
import NavigationTabs from 'components/NavigationTabs';

import { Switch, Route, useRouteMatch } from 'react-router-dom';
import NavigationTop from 'components/NavigationTop';

const Home = React.lazy(() => import('pages/home/Home'));
const Summary = React.lazy(() => import('pages/home/Summary'));
const Accounts = React.lazy(() => import('pages/home/Accounts'));
const Categories = React.lazy(() => import('pages/home/Categories'));

function Index() {
  const match = useRouteMatch();

  return (
    <>
      <NavigationTop />
      <main className='container'>
        <Suspense fallback={<h1>loading...</h1>}>
          <Switch>
            <Route path={`${match.url}/summary`} component={Summary} />
            <Route path={`${match.url}/accounts`} component={Accounts} />
            <Route path={`${match.url}/categories`} component={Categories} />
            <Route path={`${match.url}/`} component={Home} />
          </Switch>
        </Suspense>
      </main>
      <NavigationTabs />
    </>
  );
}

export default Index;
