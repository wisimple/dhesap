import { Link } from 'react-router-dom';
const Welcome = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
        alignItems: 'center',
        justifyContent: 'space-around',
      }}>
      <Link to='/signin'>Signin</Link>
      <Link to='/signup'>Signup</Link>
      <Link to='/me/tabs/transactions'>Me</Link>
    </div>
  );
};

export default Welcome;
