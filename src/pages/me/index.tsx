import { Switch, Route, useRouteMatch } from 'react-router-dom';
import NavigationTop from 'components/NavigationTop';
import NavigationTabs from 'components/NavigationTabs';

import Home from 'pages/me/Home';
import Summary from 'pages/me/Summary';
import Accounts from 'pages/me/Accounts';
import Categories from 'pages/me/Categories';

// Transactions
import Transactions from 'pages/me/transactions';

// Accounts
import AccountsIndex from 'pages/me/accounts/index';

function Index() {
  const { url } = useRouteMatch();

  return (
    <Switch>
      <Route path={url + '/transactions'} component={Transactions} />
      <Route path={url + '/accounts'} component={AccountsIndex} />

      <Route path={url + '/tabs'}>
        <NavigationTop />
        <main className='container'>
          <Switch>
            <Route exact path={url + '/tabs/home'} component={Home} />
            <Route exact path={url + '/tabs/accounts'} component={Accounts} />
            <Route exact path={url + '/tabs/summary'} component={Summary} />
            <Route exact path={url + '/tabs/categories'} component={Categories} />
          </Switch>
        </main>
        <NavigationTabs />
      </Route>
    </Switch>
  );
}

export default Index;
