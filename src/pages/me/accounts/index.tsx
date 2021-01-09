import { Switch, Route, useRouteMatch } from 'react-router-dom';

import AccountsCreate from 'pages/me/accounts/Create';
import AccountsEdit from 'pages/me/accounts/Edit';
import LayoutWithTopNav from 'layouts/LayoutWithTopNav';

const Index = () => {
  const { url } = useRouteMatch();

  return (
    <LayoutWithTopNav>
      <Switch>
        <Route path={'/me/accounts/create'} component={AccountsCreate} />
        <Route path={'/me/accounts/edit'} component={AccountsEdit} />
      </Switch>
    </LayoutWithTopNav>
  );
};

export default Index;
