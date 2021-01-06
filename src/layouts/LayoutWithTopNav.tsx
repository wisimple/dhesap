import React from 'react';
import NavigationTop from 'layouts/navs/NavigationTop';

import ChevronLeft from '@material-ui/icons/ChevronLeft';
import Logo from 'components/common/Logo';

import { useHistory } from 'react-router-dom';

const LayoutWithTopNav: React.FC = ({ children }) => {
  const history = useHistory();

  return (
    <div className='container container--with-top-tab'>
      <NavigationTop>
        <button
          className='input--non-styled'
          style={{ display: 'flex', alignItems: 'center' }}
          onClick={() => history.goBack()}>
          <ChevronLeft />
          <span>Back</span>
        </button>
        <Logo />
      </NavigationTop>
      {children}
    </div>
  );
};

export default LayoutWithTopNav;
