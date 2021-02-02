import Button from 'components/common/inputs/Button';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'store';
import { setAppTheme } from 'store/app/actions';
import { setAppLanguage } from 'store/app/actions';
import { signout } from 'store/auth/actions';

const Index = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const theme = useSelector((state: RootState) => state.appState.theme);

  return (
    <div>
      <h1>{t('settings')}</h1>
      <Button onClick={() => dispatch(setAppLanguage('en'))}>Toggle language</Button>
      <Button onClick={() => dispatch(setAppLanguage('tr'))}>Toggle language</Button>
      <Button outlined onClick={() => dispatch(setAppTheme(theme ? '' : 'theme-dark'))}>
        {t('switchTheme')}
      </Button>
      <Button outlined onClick={() => dispatch(signout())}>
        {t('auth.signout')}
      </Button>
    </div>
  );
};

export default Index;
