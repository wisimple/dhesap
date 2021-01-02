import React from 'react';
import Home from '@material-ui/icons/Home';
import SupervisorAccount from '@material-ui/icons/SupervisorAccount';
import Category from '@material-ui/icons/Category';
import BarChart from '@material-ui/icons/BarChart';
import Add from '@material-ui/icons/Add';
import { Link, useLocation, useRouteMatch } from 'react-router-dom';

import { motion, AnimatePresence } from 'framer-motion';

const routes = [
  {
    name: 'Summary',
    path: '/summary',
    plusButtonLink: null,
    icon: <BarChart />,
  },
  {
    name: 'Home',
    path: '/home',
    plusButtonLink: '/me/transactions/create',
    icon: <Home />,
  },
  {
    name: 'Accounts',
    path: '/accounts',
    plusButtonLink: '/me/accounts/create',
    icon: <SupervisorAccount />,
  },
  {
    name: 'Categories',
    path: '/categories',
    plusButtonLink: '/me/categories/create',
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

  const buttonLink = routes.find((r) => pathname === '/me/tabs' + r.path)?.plusButtonLink;

  return (
    <nav className='nav-fixed nav-fixed--bottom'>
      <AnimatePresence>
        {buttonLink && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}>
            <Link to={buttonLink || '/sdf'} className='nav-main-button'>
              <Add />
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
      <ul className='nav-tabs'>
        {routes.map((route) => (
          <li
            key={route.path}
            className={
              'nav-tabs__item ' + (`${match.url}${route.path}` === pathname ? 'active' : '')
            }>
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
