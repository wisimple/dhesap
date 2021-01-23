import { useDispatch } from 'react-redux';
import { signout } from 'store/auth/actions';

const Index = () => {
  const dispatch = useDispatch();
  const toggleTheme = () => {
    console.log('sdfsf');
    document.body.classList.toggle('theme-dark');
  };
  return (
    <div>
      <h1>Settings</h1>
      <button onClick={toggleTheme}>Toggle Theme</button>
      <button className='button button--primary--outlined' onClick={() => dispatch(signout())}>
        Sign out
      </button>
    </div>
  );
};

export default Index;
