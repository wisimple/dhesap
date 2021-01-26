import FacebookIcon from '@material-ui/icons/Facebook';
import { useState } from 'react';

import { useDispatch } from 'react-redux';
import { signin } from 'store/auth/actions';

const SigninForm = () => {
  const dispatch = useDispatch();

  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(signin(email, password));
  };

  return (
    <div>
      <button className='button button--sm mb-1' style={{ backgroundColor: '#1877f2' }}>
        <FacebookIcon className='mr-2' />
        Continue with Facebook
      </button>
      <button className='button button--sm mb-1' style={{ backgroundColor: '#E23F29' }}>
        <FacebookIcon className='mr-2' />
        Continue with Google
      </button>
      <form className='form' onSubmit={handleSubmit}>
        <h3>Signin to your account</h3>
        <div className='form__group'>
          <input
            type='email'
            className='input'
            id='email'
            placeholder='Your email address'
            value={email}
            onChange={({ target }) => setemail(target.value)}
          />
        </div>
        <div className='form__group'>
          <input
            type='password'
            className='input'
            id='password'
            placeholder='Password'
            value={password}
            onChange={({ target }) => setpassword(target.value)}
          />
        </div>
        <div className='form__group'>
          <button className='button button--primary'>Signin</button>
        </div>
      </form>
    </div>
  );
};

export default SigninForm;
