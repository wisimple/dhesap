import React from 'react';
import Settings from '@material-ui/icons/Settings';

const NavigationTop: React.FC = () => {
  const toggleTheme = () => {
    console.log('sdfsf');
    document.body.classList.toggle('theme-dark');
  };
  return (
    <nav className='nav-fixed nav-fixed--top'>
      <span className='logo'>
        <span className='letter-d'>d</span>hesap
      </span>
      <Settings onClick={toggleTheme} />
    </nav>
  );
};

export default NavigationTop;
