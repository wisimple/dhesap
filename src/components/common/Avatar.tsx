import avatarMaleImage from 'assets/img/avatar-m.png';
import avatarFemaleImage from 'assets/img/avatar-f.png';
import avatarNoGenderImage from 'assets/img/avatar-no-gender.png';
import companyImage from 'assets/img/company.png';
import bankImage from 'assets/img/bank.png';
import coinImage from 'assets/img/coin.png';

import { AccountTypes } from 'models/Account';
interface Props {
  url?: string;
  className?: string;
  gender?: boolean | undefined;
  type: AccountTypes;
  size?: 'sm' | 'md' | 'lg';
}

const Avatar = ({ url, className = '', gender, type, size = 'md' }: Props) => {
  if (!url) {
    switch (type) {
      case 'person':
        if (gender === undefined) {
          url = avatarNoGenderImage;
        } else if (gender === true) {
          url = avatarMaleImage;
        } else {
          url = avatarFemaleImage;
        }
        break;
      case 'company':
        url = companyImage;
        break;
      case 'bank':
        url = bankImage;
        break;
      case 'coin':
        url = coinImage;
        break;
    }
  }
  return (
    <img
      src={url}
      alt='account avatar'
      className={`avatar avatar--${size} ${className}`}
      width='50'
      height='50'
    />
  );
};

export default Avatar;
