import { Switch, Route } from 'react-router-dom';

import LayoutWithTopNav from 'layouts/LayoutWithTopNav';

import AccountsCreate from 'pages/me/accounts/Create';
import AccountsEdit from 'pages/me/accounts/Edit';
import AccountShow from 'pages/me/accounts/Show';

const Index = () => {
  return (
    <LayoutWithTopNav>
      <Switch>
        <Route path={'/me/accounts/create'} component={AccountsCreate} />
        <Route path={'/me/accounts/:id/edit'} component={AccountsEdit} />
        <Route path={'/me/accounts/:id'} component={AccountShow} />
      </Switch>
    </LayoutWithTopNav>
  );
};

export default Index;
