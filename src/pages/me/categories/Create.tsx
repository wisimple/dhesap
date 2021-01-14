import { useState } from 'react';

import { useHistory } from 'react-router-dom';

import ScrollableSelect from 'components/common/inputs/ScrollableSelect';
import Check from '@material-ui/icons/Check';
import { colors, backgroundColors } from 'constants/colors';
import { icons } from 'constants/icons';
import CustomIcon from 'components/common/CustomIcon';

const Create = () => {
  const [selectedColor, setselectedColor] = useState('');
  const [selectedBackgroundColor, setselectedBackgroundColor] = useState('');
  const [selectedIcon, setselectedIcon] = useState('');

  const history = useHistory();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    history.goBack();
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
            onChanged={({ selectedItem }) => setselectedIcon(selectedItem)}
            options={icons}
            renderItem={(item, i, selected) => (
              <CustomIcon
                name={item}
                color={selectedColor}
                bgColor={selected ? selectedBackgroundColor : ''}
              />
            )}
          />
          <label htmlFor='icon' className='label label--linear'>
            Select an icon
          </label>
        </div>
        <div className='form__group'>
          <ScrollableSelect
            onChanged={({ selectedItem }) => setselectedColor(selectedItem)}
            options={colors}
            renderItem={(item, i, selected) => (
              <button
                type='button'
                className='button-square button-square--sm'
                style={{
                  backgroundColor: item,
                }}>
                {selected && <Check style={{ color: '#666' }} />}
              </button>
            )}
          />
          <label htmlFor='color' className='label label--linear'>
            Select an icon color
          </label>
        </div>
        <div className='form__group'>
          <ScrollableSelect
            onChanged={({ selectedItem }) => setselectedBackgroundColor(selectedItem)}
            options={backgroundColors}
            renderItem={(item, i, selected) => (
              <button
                type='button'
                className='button-square button-square--sm'
                style={{
                  backgroundColor: item,
                }}>
                {selected && <Check style={{ color: '#333' }} />}
              </button>
            )}
          />
          <label htmlFor='bg-color' className='label label--linear'>
            Select a background color
          </label>
        </div>

        <button className='button button--primary'>Save</button>
      </form>
    </div>
  );
};

export default Create;
