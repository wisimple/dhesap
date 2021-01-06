import ChevronRight from '@material-ui/icons/ChevronRight';
import Icon from 'components/common/Icon';
import { colors, backgroundColors } from 'constants/colors';
import { icons } from 'constants/icons';
import { generateRandomNumber } from 'helpers';
import { useHistory } from 'react-router-dom';

interface IIcon {
  name: string;
  bgColor?: string;
  color?: string;
}
interface ICategory {
  _id: string;
  name: string;
  icon: IIcon;
}

const len = colors.length - 1;
const bglen = backgroundColors.length;
const iconLen = icons.length;

let categories: ICategory[] = [];

for (let i = 0; i < 20; i++) {
  categories.push({
    _id: i.toString(),
    name: 'Transportation',
    icon: {
      name: icons[generateRandomNumber({ max: iconLen })],
      color: colors[generateRandomNumber({ max: len })],
      bgColor: backgroundColors[generateRandomNumber({ max: bglen })],
    },
  });
}

const Categories: React.FC = () => {
  const history = useHistory();

  return (
    <>
      <table className='table'>
        <thead>
          <tr>
            <th>Categories</th>
          </tr>
        </thead>
        <tbody>
          {categories.map((item, i) => (
            <tr key={i} onClick={() => history.push('/me/categories/' + item._id + '/edit')}>
              <td>
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                  }}>
                  <Icon name={item.icon.name} color={item.icon.color} bgColor={item.icon.bgColor} />
                  <span className='text-truncate' style={{ flexGrow: 1 }}>
                    {item.name}
                  </span>
                  <ChevronRight style={{ flexShrink: 0 }} />
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Categories;
