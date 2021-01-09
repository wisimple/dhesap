import React from 'react';
import { useHistory } from 'react-router-dom';
import ScrollableSelect from 'components/common/inputs/ScrollableSelect';
import { currencies } from 'constants/currencies';
import { accountTypes } from 'constants/accountTypes';
import Icon from '@material-ui/core/Icon';

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
          <select name='currency' id='currency' className='input' placeholder='helo'>
            {currencies.map((c, i) => (
              <option key={i} value={c.value}>
                {c.sign} - {c.name}
              </option>
            ))}
          </select>
          <label htmlFor='currency' className='label label--linear'>
            Default Currency
          </label>
        </div>
        <div className='form__group'>
          <ScrollableSelect
            options={accountTypes}
            renderItem={(item, i, selected) => (
              <button
                key={i}
                type='button'
                className={`button button--sm button--primary${!selected ? '--outlined' : ''}`}>
                <div className='icon icon--left'>
                  <Icon>{item.icon}</Icon>
                </div>
                {item.name}
              </button>
            )}
          />
          <label htmlFor='type' className='label label--linear'>
            Account Type
          </label>
        </div>
        <div className='form__group'>
          <button type='submit' className='button button--primary--outlined'>
            Save
          </button>
        </div>
      </form>
    </>
  );
};

export default Create;
