import { Switch, Route, useRouteMatch } from 'react-router-dom';

import TransactionsCreate from 'pages/me/transactions/Create';
import TransactionsEdit from 'pages/me/transactions/Edit';
import TransactionShow from 'pages/me/transactions/Show';
import LayoutWithTopNav from 'layouts/LayoutWithTopNav';

const Index = () => {
  const { url } = useRouteMatch();

  return (
    <LayoutWithTopNav>
      <Switch>
        <Route path={url + '/create'} component={TransactionsCreate} />
        <Route path={url + '/:id/edit'} component={TransactionsEdit} />
        <Route path={url + '/:id'} component={TransactionShow} />
      </Switch>
    </LayoutWithTopNav>
  );
};

export default Index;
