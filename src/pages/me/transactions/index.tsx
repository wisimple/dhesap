import { Switch, Route, useRouteMatch } from 'react-router-dom';

import CreateTransaction from 'pages/me/transactions/Create';

const Index = () => {
  const { url } = useRouteMatch();

  return (
    <div>
      <h1>transactions</h1>
      <Switch>
        <Route path={url} component={CreateTransaction} />
      </Switch>
    </div>
  );
};

export default Index;
