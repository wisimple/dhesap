import { Link, NavLink, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

import Home from '@material-ui/icons/Home';
import SupervisorAccount from '@material-ui/icons/SupervisorAccount';
import Category from '@material-ui/icons/Category';
import BarChart from '@material-ui/icons/BarChart';
import Add from '@material-ui/icons/Add';

const routes = [
  {
    name: 'Summary',
    path: '/summary',
    plusButtonRedirectUrl: null,
    iconComponent: <BarChart />,
  },
  {
    name: 'Transactions',
    path: '/transactions',
    plusButtonRedirectUrl: '/me/transactions/create',
    iconComponent: <Home />,
  },
  {
    name: 'Accounts',
    path: '/accounts',
    plusButtonRedirectUrl: '/me/accounts/create',
    iconComponent: <SupervisorAccount />,
  },
  {
    name: 'Categories',
    path: '/categories',
    plusButtonRedirectUrl: '/me/categories/create',
    iconComponent: <Category />,
  },
];

const NavigationTabs: React.FC = () => {
  const { pathname } = useLocation();

  const isPlusButtonShown = routes.find((r) => pathname === '/me/tabs' + r.path)?.plusButtonRedirectUrl;

  return (
    <nav className='nav-fixed nav-fixed--bottom'>
      <AnimatePresence>
        {isPlusButtonShown && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}>
            <Link to={isPlusButtonShown || '/'} className='nav-button-fixed-center'>
              <Add />
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
      <ul className='nav-tabs'>
        {routes.map((route) => (
          <li key={route.path} className='nav-tabs__item' onClick={() => window.scrollTo(0, 0)}>
            <NavLink to={'/me/tabs' + route.path} activeClassName='active'>
              {route.iconComponent} <span>{route.name}</span>
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavigationTabs;
