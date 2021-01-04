import { useState } from 'react';
import Icon from '@material-ui/core/Icon';
import ScrollableSelect from 'components/common/inputs/ScrollableSelect';
import Check from '@material-ui/icons/Check';
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
  const [selectedElements, setselectedElements] = useState<number>(0);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className='form form--xlg'>
        <div className='form__group form__group--xlg'>
          <input
            type='text'
            name='name'
            id='name'
            className='input input--xlg'
            autoFocus
            placeholder='Category Name'
          />
          <label htmlFor='name' className='label label--linear'>
            Category Name
          </label>
        </div>
        <div className='form__group'>
          <ScrollableSelect
            // multiple
            onSelected={(i) => setselectedElements(i)}
            options={colors}
            renderItem={(item, i, selected) => (
              <button
                className='button'
                style={{
                  backgroundColor: item,
                }}>
                {selected && <Check />}
              </button>
            )}
          />
          <label htmlFor='color' className='label label--linear'>
            Select a color
          </label>
        </div>
        <div className='form__group'>
          <ScrollableSelect
            options={icons}
            renderItem={(item, i, selected) => (
              <button className='input--non-styled'>
                <Icon
                  style={{
                    fontSize: '3.5rem',
                    color: selected ? colors[selectedElements] : 'black',
                  }}>
                  {item}
                </Icon>
              </button>
            )}
          />
          <label htmlFor='icon' className='label label--linear'>
            Select an icon
          </label>
        </div>

        <button className='button'>Save</button>
      </form>
    </div>
  );
};

export default Create;
