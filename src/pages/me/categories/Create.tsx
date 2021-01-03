import { useState } from 'react';
import CustomSelect from 'components/common/inputs/CustomSelect';
import Icon from '@material-ui/core/Icon';
const colors = [
  'red',
  'orange',
  'yellow',
  'green',
  'blue',
  'purple',
  'brown',
  'magenta',
  'tan',
  'cyan',
  'olive',
  'maroon',
  'navy',
  'aquamarine',
  'turquoise',
  'silver',
  'lime',
  'teal',
  'indigo',
  'violet',
  'pink',
  'black',
  'white',
  'grey',
];

const icons: string[] = [
  'account_balance_wallet',
  'book',
  'build',
  'card_giftcard',
  'commute',
  'credit_card',
  'face',
  'favorite',
  'language',
  'pets',
  'shopping_card',
  'shopping_bag',
  'star_rate',
  'theaters',
  'movie',
  'work',
  'library_music',
  'subscriptions',
  'videocam',
  'camera',
  'audiotrack',
  'web',
  'business',
  'call',
  'hourglass_bottom',
  'map',
  'message',
  'stay_current_portrait',
  'phone_iphone',
  'weekend',
  'network_wifi',
  'cloud',
  'computer',
  'headset',
  'watch',
  'videogame_asset',
  'tv',
  'router',
  'brush',
  'color_lens',
  'photo',
  'receipt_long',
  'agriculture',
  'category',
];

const Create = () => {
  const [color, setColor] = useState('red');
  const [backgroundColor, setbackgroundColor] = useState('black');
  return (
    <div>
      <h2>Create a New Category</h2>
      <form action='#' className='form'>
        <label htmlFor='name' className='label'>
          Category Name
        </label>
        <input
          type='text'
          name='name'
          id='name'
          className='input'
          autoFocus
          placeholder='Ex: transportation'
        />
        <label htmlFor='color' className='label'>
          Select a color
        </label>
        <CustomSelect items={colors} onSelect={(item) => setColor(item)} />
        <label htmlFor='color' className='label'>
          Select background color
        </label>
        <CustomSelect items={colors} onSelect={(item) => setbackgroundColor(item)} />
        <div style={{ display: 'flex', flexWrap: 'wrap' }}>
          {icons.map((icon, i) => (
            <div
              key={i}
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: backgroundColor,
                margin: '1rem',
                padding: '1rem',
                borderRadius: '50%',
              }}>
              <Icon style={{ fontSize: '3rem', color: color }}>{icon}</Icon>
            </div>
          ))}
        </div>
        <button className='button'>Save</button>
      </form>
    </div>
  );
};

export default Create;
