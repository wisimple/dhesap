import avatarMale from 'assets/img/avatar-m.png';
import avatarFemale from 'assets/img/avatar-f.png';
import avatarNoGender from 'assets/img/avatar-no-gender.png';
import { AccountTypes } from 'models/Account';
interface Props {
  url?: string;
  className?: string;
  gender?: boolean | undefined;
  type: AccountTypes;
}

const Avatar = ({ url, className = '', gender, type }: Props) => {
  if (!url) {
    switch (type) {
      case 'person':
        if (gender === undefined) {
          url = avatarNoGender;
        } else if (gender === true) {
          url = avatarMale;
        } else {
          url = avatarFemale;
        }
        break;
      // @TODO other types will be implemented
      default:
        url = avatarFemale;
    }
  }
  return <img src={url} alt='account avatar' className={`avatar ${className}`} width='50' height='50' />;
};

export default Avatar;
