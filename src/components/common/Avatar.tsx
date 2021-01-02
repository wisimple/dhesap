import React from 'react';
import Business from '@material-ui/icons/Business';
interface Props {
  imageUrl: string;
}

const Avatar: React.FC<Props> = ({ imageUrl }) => {
  return (
    <div className='avatar'>
      <img src={imageUrl} alt='avatar 1' />
    </div>
  );
};

export default Avatar;
