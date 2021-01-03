import { Switch, Route, useRouteMatch } from 'react-router-dom';

import AccountsCreate from 'pages/me/accounts/Create';
import AccountsEdit from 'pages/me/accounts/Edit';

const Index = () => {
  const { url } = useRouteMatch();

  return (
    <Switch>
      <Route exact path={url + '/create'} component={AccountsCreate} />
      <Route exact path={url + '/edit'} component={AccountsEdit} />
    </Switch>
  );
};

export default Index;
