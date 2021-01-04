import NavigationTabs from 'layouts/navs/NavigationTabs';
import NavigationTop from 'layouts/navs/NavigationTop';

import Settings from '@material-ui/icons/Settings';
import { Link } from 'react-router-dom';
import Logo from 'components/common/Logo';

const TabsLayout: React.FC = ({ children }) => {
  return (
    <>
      <NavigationTop>
        <Logo />
        <Link to='/me/settings'>
          <Settings />
        </Link>
      </NavigationTop>
      <main className='container container--with-tabs'>{children}</main>
      <NavigationTabs />
    </>
  );
};

export default TabsLayout;
