import Icon from '@material-ui/core/Icon';

interface Props {
  name: string;
  bgColor?: string;
  color?: string;
}

const CustomIcon = ({ bgColor = 'inherit', color = 'inherit', name }: Props) => {
  return (
    <button
      type='button'
      className='icon-container'
      style={{
        backgroundColor: bgColor,
      }}>
      <Icon className='icon' style={{ color: color }}>
        {name}
      </Icon>
    </button>
  );
};

export default CustomIcon;
