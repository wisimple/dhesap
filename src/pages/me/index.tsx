import NavigationTabs from 'components/NavigationTabs';

import { Switch, Route, useRouteMatch } from 'react-router-dom';
import NavigationTop from 'components/NavigationTop';

import Home from 'pages/me/Home';
import Summary from 'pages/me/Summary';
import Accounts from 'pages/me/Accounts';
import Categories from 'pages/me/Categories';

// Transactions
import Transactions from 'pages/me/transactions';

function Index() {
  const { url } = useRouteMatch();

  return (
    <Switch>
      <Route path={url + '/transactions'} component={Transactions} />

      <Route path={url}>
        <NavigationTop />
        <main className='container'>
          <Switch>
            <Route exact path={url} component={Home} />
            <Route exact path={url + '/accounts'} component={Accounts} />
            <Route exact path={url + '/summary'} component={Summary} />
            <Route exact path={url + '/categories'} component={Categories} />
          </Switch>
        </main>
        <NavigationTabs />
      </Route>
    </Switch>
  );
}

export default Index;
