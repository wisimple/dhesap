import { Switch, Route, useRouteMatch } from 'react-router-dom';

import CategoriesCreate from 'pages/me/categories/Create';
import CategoriesEdit from 'pages/me/categories/Edit';
import NavigationTop from 'components/NavigationTop';

import { useHistory } from 'react-router-dom';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import Logo from 'components/common/Logo';

const Index = () => {
  const { url } = useRouteMatch();
  const history = useHistory();

  return (
    <div className='container'>
      <NavigationTop
        items={[
          <button
            className='button--non-styled'
            style={{ display: 'flex', alignItems: 'center' }}
            onClick={() => history.goBack()}>
            <ChevronLeft />
            <span>Back</span>
          </button>,
          ,
          <Logo />,
        ]}
      />
      <Switch>
        <Route exact path={url + '/create'} component={CategoriesCreate} />
        <Route exact path={url + '/edit'} component={CategoriesEdit} />
      </Switch>
    </div>
  );
};

export default Index;
