import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'store';
import { setAppTheme } from 'store/app/actions';
import { signout } from 'store/auth/actions';

const Index = () => {
  const dispatch = useDispatch();
  const theme = useSelector((state: RootState) => state.appState.theme);

  return (
    <div>
      <h1>Settings</h1>
      <button onClick={() => dispatch(setAppTheme(theme ? '' : 'theme-dark'))}>Toggle Theme</button>
      <button className='button button--primary--outlined' onClick={() => dispatch(signout())}>
        Sign out
      </button>
    </div>
  );
};

export default Index;
