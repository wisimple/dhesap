import React, { useEffect, useState } from 'react';
import { icons } from 'constants/icons';
import { colors, backgroundColors } from 'constants/colors';
import ScrollableSelect from 'components/common/inputs/ScrollableSelect';
import CustomIcon from 'components/common/CustomIcon';
import { ICategory } from 'models/Category';
import { useDispatch, useSelector } from 'react-redux';
import { createCategory, deleteCategory, updateCategory } from 'store/category/actions';
import { useHistory } from 'react-router-dom';
import { RootState } from 'store';
import Button from 'components/common/inputs/Button';

interface Props {
  data?: ICategory;
  loading?: boolean;
}

const CategoryForm = ({ data, loading }: Props) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [name, setname] = useState('');
  const [iconIndex, seticonIndex] = useState(0);
  const [bgColorIndex, setbgColorIndex] = useState(0);
  const [colorIndex, setcolorIndex] = useState(0);
  const opLoading = useSelector((state: RootState) => state.categoryState.opLoading);

  useEffect(() => {
    if (data) {
      setname(data.name);
      seticonIndex(icons.findIndex((i) => i === data.icon.name));
      setbgColorIndex(backgroundColors.findIndex((color) => color === data.icon.bgClr));
      setcolorIndex(colors.findIndex((color) => color === data.icon.clr));
    }
  }, [data]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const categoryDto = {
      name,
      icon: { name: icons[iconIndex], bgClr: backgroundColors[bgColorIndex], clr: colors[colorIndex] },
    };
    if (data) {
      await dispatch(updateCategory(data._id, categoryDto));
    } else {
      await dispatch(createCategory(categoryDto));
    }
    history.goBack();
  };

  return (
    <form onSubmit={handleSubmit} className='form form--xlg'>
      <div className='form__group form__group--xlg'>
        <input
          type='text'
          name='name'
          id='name'
          className='input input--xlg'
          placeholder={loading ? 'loading...' : 'Category Name'}
          value={name}
          onChange={({ target }) => setname(target.value)}
          autoFocus={!data ? true : false}
        />
        <label htmlFor='name' className='label label--linear'>
          Category Name
        </label>
      </div>
      <div className='form__group'>
        <ScrollableSelect
          selectedIndex={iconIndex}
          options={icons}
          onChanged={(item, index) => seticonIndex(index)}
          renderItem={(item, i, selected) => (
            <CustomIcon
              name={item}
              bgColor={selected ? backgroundColors[bgColorIndex] : ''}
              color={colors[colorIndex]}
            />
          )}
        />
        <label htmlFor='icon' className='label label--linear'>
          Select an icon
        </label>
      </div>
      <div className='form__group'>
        <ScrollableSelect
          selectedIndex={bgColorIndex}
          options={backgroundColors}
          onChanged={(item, index) => setbgColorIndex(index)}
          renderItem={(item, i, selected) => (
            <div
              className={`colored-item ${selected ? 'colored-item--selected' : ''}`}
              style={{ backgroundColor: item }}></div>
          )}
        />
        <label htmlFor='icon' className='label label--linear'>
          Select a background color
        </label>
      </div>
      <div className='form__group'>
        <ScrollableSelect
          selectedIndex={colorIndex}
          options={colors}
          onChanged={(item, index) => setcolorIndex(index)}
          renderItem={(item, i, selected) => (
            <div
              className={`colored-item ${selected ? 'colored-item--selected' : ''}`}
              style={{ backgroundColor: item }}></div>
          )}
        />
        <label htmlFor='icon' className='label label--linear'>
          Select an icon color
        </label>
      </div>

      <div className='form__group'>
        <Button type='submit' loading={opLoading}>
          Save
        </Button>
      </div>

      {data && (
        <div className='form__group'>
          <Button
            type='button'
            color='red'
            outlined
            onClick={() => {
              dispatch(deleteCategory(data?._id));
              history.replace('/me/tabs/categories');
            }}>
            Delete
          </Button>
        </div>
      )}
    </form>
  );
};

export default CategoryForm;
