import React from 'react';
import Loop from '@material-ui/icons/Loop';

interface ButtonProps
  extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  loading?: boolean;
  color?: 'primary' | 'red';
  rounded?: boolean;
  outlined?: boolean;
}
const Button = (props: ButtonProps) => {
  const { children, loading, rounded, color = 'primary', outlined, ...rest } = props;

  const buttonStyle = `${rounded ? 'button--rounded' : ''} button--${color}${outlined ? '--outlined' : ''}`;

  return (
    <button className={`button ${buttonStyle}`} type='button' {...rest}>
      {children}
      {loading && <Loop className='loader icon icon--right' />}
    </button>
  );
};

export default Button;
