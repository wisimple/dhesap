import NavigationTabs from 'components/NavigationTabs';
import NavigationTop from 'components/NavigationTop';

import Settings from '@material-ui/icons/Settings';
import { Link } from 'react-router-dom';
import Logo from 'components/common/Logo';

const TabsLayout: React.FC = ({ children }) => {
  return (
    <>
      <NavigationTop
        items={[
          <Logo />,
          <Link to='/me/settings'>
            <Settings />
          </Link>,
        ]}
      />
      <main className='container container--with-tabs'>{children}</main>
      <NavigationTabs />
    </>
  );
};

export default TabsLayout;
