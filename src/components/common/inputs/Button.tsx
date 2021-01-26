import React from 'react';
import Loop from '@material-ui/icons/Loop';

interface ButtonProps
  extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  loading?: boolean;
  color?: 'primary' | 'red';
  outlined?: boolean;
}
const Button = (props: ButtonProps) => {
  const { children, loading, color = 'primary', outlined, ...rest } = props;
  const buttonStyle = `${color}${outlined ? '--outlined' : ''}`;
  console.log(buttonStyle);

  return (
    <button className={`button button--${buttonStyle}`} {...rest}>
      {children}
      {loading && <Loop className='loader' />}
    </button>
  );
};

export default Button;
