import avatar from 'assets/img/avatar-m.png';
interface Props {
  url?: string;
}

const Avatar = ({ url = avatar }: Props) => {
  return (
    <div className='avatar'>
      <img src={url} alt='avatar 1' />
    </div>
  );
};

export default Avatar;
