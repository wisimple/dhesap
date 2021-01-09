import { Switch, Route } from 'react-router-dom';
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
  return (
    <Switch>
      <Route path='/me/tabs'>
        <TabsLayout>
          <Switch>
            <Route path={'/me/tabs/transactions'} component={Home} />
            <Route path={'/me/tabs/accounts'} component={Accounts} />
            <Route path={'/me/tabs/summary'} component={Summary} />
            <Route path={'/me/tabs/categories'} component={Categories} />
          </Switch>
        </TabsLayout>
      </Route>

      <Route path={'/me/accounts'} component={AccountsIndex} />
      <Route path={'/me/transactions'} component={TransactionsIndex} />
      <Route path={'/me/categories'} component={CategoriesIndex} />
      <Route path={'/me/settings'} component={SettingsIndex} />
    </Switch>
  );
}

export default Index;
