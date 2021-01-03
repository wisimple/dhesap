import { Switch, Route, useRouteMatch } from 'react-router-dom';

import TransactionsCreate from 'pages/me/transactions/Create';
import TransactionsEdit from 'pages/me/transactions/Edit';

const Index = () => {
  const { url } = useRouteMatch();

  return (
    <div>
      <h1>transactions</h1>
      <Switch>
        <Route exact path={url + '/create'} component={TransactionsCreate} />
        <Route exact path={url + '/edit'} component={TransactionsEdit} />
      </Switch>
    </div>
  );
};

export default Index;
