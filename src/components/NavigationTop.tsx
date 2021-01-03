import React from 'react';

interface Props {
  items?: React.ReactNode[];
}

const NavigationTop: React.FC<Props> = ({ items }) => {
  return (
    <nav className='nav-fixed nav-fixed--top'>
      {items?.map((item, i) => (
        <React.Fragment key={i}>{item}</React.Fragment>
      ))}
    </nav>
  );
};

export default NavigationTop;
