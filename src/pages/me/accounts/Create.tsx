import React from 'react';
import { useHistory } from 'react-router-dom';
import ScrollableSelect from 'components/common/inputs/ScrollableSelect';

const Create = () => {
  const history = useHistory();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    history.goBack();
  };
  return (
    <>
      <form onSubmit={handleSubmit} className='form'>
        <div className='form__group'>
          <input
            type='text'
            placeholder='Exp: John Doe'
            className='input'
            name='name'
            id='name'
            autoFocus
          />
          <label htmlFor='name' className='label label--linear'>
            Account Name
          </label>
        </div>
        <div className='form__group'>
          <input type='number' placeholder='0' className='input' name='balance' id='balance' />
          <label htmlFor='balance' className='label label--linear'>
            Initial Balance
          </label>
        </div>
        <div className='form__group'>
          <ScrollableSelect
            options={['Person', 'Company', 'Bank']}
            renderItem={(item, i, selected) => (
              <button
                type='button'
                className={`button button--sm ${!selected ? 'button--inverted' : ''}`}>
                {item}
              </button>
            )}
          />
          <label htmlFor='type' className='label label--linear'>
            Account Type
          </label>
        </div>
        <div className='form__group'>
          <button type='submit' className='button'>
            Save
          </button>
        </div>
      </form>
    </>
  );
};

export default Create;
