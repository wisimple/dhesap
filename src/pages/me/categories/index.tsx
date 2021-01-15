import { Switch, Route, useRouteMatch } from 'react-router-dom';

import CategoriesCreate from 'pages/me/categories/Create';
import CategoriesEdit from 'pages/me/categories/Edit';
import CategoriesShow from 'pages/me/categories/Show';

import LayoutWithTopNav from 'layouts/LayoutWithTopNav';

const Index = () => {
  const { url } = useRouteMatch();

  return (
    <LayoutWithTopNav>
      <Switch>
        <Route path={url + '/create'} component={CategoriesCreate} />
        <Route path={url + '/:id/edit'} component={CategoriesEdit} />
        <Route path={url + '/:id'} component={CategoriesShow} />
      </Switch>
    </LayoutWithTopNav>
  );
};

export default Index;
