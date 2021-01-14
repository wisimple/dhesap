import Icon from '@material-ui/core/Icon';

interface Props {
  name: string;
  rounded?: boolean;
  size?: 'sm' | 'md' | 'lg';
  bgColor?: string;
  color?: string;
  styles?: React.CSSProperties;
  className?: string;
}

const CustomIcon = ({
  bgColor = 'inherit',
  color = 'inherit',
  rounded = true,
  size = 'md',
  name,
  styles,
  className = '',
}: Props) => {
  return (
    <button
      type='button'
      className={`icon-container icon-container--${size} ${
        rounded ? 'icon-container--rounded' : ''
      } ${className}`}
      style={{
        backgroundColor: bgColor,
        ...styles,
      }}>
      <Icon className={`icon icon--${size}`} style={{ color: color }}>
        {name}
      </Icon>
    </button>
  );
};

export default CustomIcon;
