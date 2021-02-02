import Button from 'components/common/inputs/Button';
import ScrollableSelect from 'components/common/inputs/ScrollableSelect';
import { languages } from 'constants/languages';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'store';
import { setAppTheme } from 'store/app/actions';
import { setAppLanguage } from 'store/app/actions';
import { signout } from 'store/auth/actions';

const Index = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const { theme, language } = useSelector((state: RootState) => state.appState);

  const toggleTheme = (checked: boolean) => {
    dispatch(setAppTheme(checked ? 'theme-dark' : ''));
  };

  return (
    <div>
      <h1>{t('settings')}</h1>

      <div className='flex items-center mb-1'>
        <small>Light</small>
        <label className='switch mx-1'>
          <input
            type='checkbox'
            checked={theme !== ''}
            onChange={({ target }) => toggleTheme(target.checked)}
          />
          <span className='slider slider--rounded'></span>
        </label>
        <small>Dark</small>
      </div>

      <div className='form__group'>
        <ScrollableSelect
          selectedIndex={languages.findIndex((l) => l.value === language)}
          options={languages}
          renderItem={(item, index, isSelected) => {
            return <Button outlined={!isSelected}>{t(item.name)}</Button>;
          }}
          onChanged={(item, index) => dispatch(setAppLanguage(item.value))}
        />
        <label className='label label--linear'>{t('changeTheLanguage')}</label>
      </div>

      <Button outlined onClick={() => dispatch(signout())}>
        {t('auth.signout')}
      </Button>
    </div>
  );
};

export default Index;
