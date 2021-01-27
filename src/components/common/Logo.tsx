import { useSelector } from 'react-redux';
import { RootState } from 'store';

const Logo = () => {
  const { loading } = useSelector((state: RootState) => state.appState);

  return (
    <span className={`logo ${loading ? 'logo--animated' : ''}`}>
      <span className='letter-d'>d</span>hesap
    </span>
  );
};

export default Logo;
