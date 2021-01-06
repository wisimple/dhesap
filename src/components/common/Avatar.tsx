interface Props {
  imageUrl: string;
}

const Avatar = ({ imageUrl }: Props) => {
  return (
    <div className='avatar'>
      <img src={imageUrl} alt='avatar 1' />
    </div>
  );
};

export default Avatar;
