import React from 'react';
import Home from '@material-ui/icons/Home';
import SupervisorAccount from '@material-ui/icons/SupervisorAccount';
import Category from '@material-ui/icons/Category';
import BarChart from '@material-ui/icons/BarChart';
import { Link, useLocation } from 'react-router-dom';

const NavigationTabs: React.FC = () => {
  const { pathname } = useLocation();

  const onClick = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };

  return (
    <nav className='nav-fixed nav-fixed--bottom'>
      <ul className='nav-tabs'>
        <li className={`nav-tabs__item ${pathname === '/summary' ? 'active' : ''}`}>
          <Link to='/summary' onClick={onClick}>
            <BarChart /> <span>Summary</span>
          </Link>
        </li>
        <li className={`nav-tabs__item ${pathname === '/' ? 'active' : ''}`}>
          <Link to='/' onClick={onClick}>
            <Home /> <span>Home</span>
          </Link>
        </li>
        <li className={`nav-tabs__item ${pathname === '/accounts' ? 'active' : ''}`}>
          <Link to='/accounts' onClick={onClick}>
            <SupervisorAccount /> <span>Accounts</span>
          </Link>
        </li>
        <li className={`nav-tabs__item ${pathname === '/categories' ? 'active' : ''}`}>
          <Link to='/categories' onClick={onClick}>
            <Category />
            <span>Categories</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavigationTabs;
