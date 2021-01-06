import { Switch, Route, useRouteMatch } from 'react-router-dom';
import TabsLayout from 'layouts/TabsLayout';

// Tabs
import Home from 'pages/me/Transactions';
import Summary from 'pages/me/Summary';
import Accounts from 'pages/me/Accounts';
import Categories from 'pages/me/Categories';

// Other Pages
import TransactionsIndex from 'pages/me/transactions/index';
import AccountsIndex from 'pages/me/accounts/index';
import CategoriesIndex from 'pages/me/categories/index';

import SettingsIndex from 'pages/me/settings/index';

function Index() {
  const { url } = useRouteMatch();

  return (
    <Switch>
      <Route path={url + '/transactions'} component={TransactionsIndex} />
      <Route path={url + '/accounts'} component={AccountsIndex} />
      <Route path={url + '/categories'} component={CategoriesIndex} />
      <Route path={url + '/settings'} component={SettingsIndex} />

      <Route path={url + '/tabs'}>
        <TabsLayout>
          <Switch>
            <Route exact path={url + '/tabs/home'} component={Home} />
            <Route exact path={url + '/tabs/accounts'} component={Accounts} />
            <Route exact path={url + '/tabs/summary'} component={Summary} />
            <Route exact path={url + '/tabs/categories'} component={Categories} />
          </Switch>
        </TabsLayout>
      </Route>
    </Switch>
  );
}

export default Index;
