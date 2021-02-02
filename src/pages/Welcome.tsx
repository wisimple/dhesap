import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Welcome = () => {
  const { t } = useTranslation();
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
        alignItems: 'center',
        justifyContent: 'space-around',
      }}>
      <Link to='/signin'>{t('auth.signin')}</Link>
      <Link to='/signup'>{t('auth.signup')}</Link>
    </div>
  );
};

export default Welcome;
