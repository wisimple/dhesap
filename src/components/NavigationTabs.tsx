import React from 'react';
import Home from '@material-ui/icons/Home';
import SupervisorAccount from '@material-ui/icons/SupervisorAccount';
import Category from '@material-ui/icons/Category';
import BarChart from '@material-ui/icons/BarChart';
import { Link, useLocation, useRouteMatch } from 'react-router-dom';

const routes = [
  {
    name: 'Summary',
    path: '/summary',
    icon: <BarChart />,
  },
  {
    name: 'Home',
    path: '',
    icon: <Home />,
  },
  {
    name: 'Accounts',
    path: '/accounts',
    icon: <SupervisorAccount />,
  },
  {
    name: 'Categories',
    path: '/categories',
    icon: <Category />,
  },
];

const NavigationTabs: React.FC = () => {
  const { pathname } = useLocation();
  const match = useRouteMatch();

  const onClick = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };

  console.log(match.path);
  return (
    <nav className='nav-fixed nav-fixed--bottom'>
      <ul className='nav-tabs'>
        {routes.map((route) => (
          <li key={route.path} className={'nav-tabs__item ' + (`${match.url}${route.path}` === pathname ? 'active' : '')}>
            <Link to={`${match.url}${route.path}`} onClick={onClick}>
              <BarChart /> <span>{route.name}</span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavigationTabs;
