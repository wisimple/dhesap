import SignupForm from 'components/user/SignupForm';

const Signup = () => {
  return (
    <div className='flex justify-center items-center' style={{ height: '100vh' }}>
      <div style={{ width: '50rem' }}>
        <SignupForm />
      </div>
    </div>
  );
};

export default Signup;
