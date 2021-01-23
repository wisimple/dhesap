import SigninForm from 'components/user/SigninForm';

const Signin = () => {
  return (
    <div className='flex justify-center items-center' style={{ height: '100vh' }}>
      <div style={{ width: '50rem' }}>
        <SigninForm />
      </div>
    </div>
  );
};

export default Signin;
