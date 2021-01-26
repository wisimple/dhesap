import React, { useEffect, useState } from 'react';
import ScrollableSelect from 'components/common/inputs/ScrollableSelect';
import { currencies } from 'constants/currencies';
import { accountTypes } from 'constants/accountTypes';
import Icon from '@material-ui/core/Icon';
import { IAccount, IAccountDto } from 'models/Account';
import { CurrencyCodes } from 'models/Currency';
import { useDispatch } from 'react-redux';

import { createAccount, deleteAccount, updateAccount } from 'store/account/actions';
import { useHistory } from 'react-router-dom';
interface Props {
  data?: IAccount;
  loading?: boolean;
}

const AccountForm = ({ data, loading }: Props) => {
  const [accountTypeIndex, setaccountTypeIndex] = useState(0);
  const [name, setname] = useState('');
  const [balance, setbalance] = useState(0);
  // @TODO 'default user currency will be setted'
  const [currency, setcurrency] = useState<CurrencyCodes>('TRY');
  const [isBalancePositive, setisBalancePositive] = useState(true);
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    if (data) {
      setaccountTypeIndex(accountTypes.findIndex((a) => a.value === data.type));
      setname(data.name);
      setbalance(data.blnc);
      setcurrency(data.crny);
      if (data.blnc < 0) {
        setisBalancePositive(false);
      }
    }
  }, [data]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const accountDto: IAccountDto = {
      blnc: balance,
      crny: currency,
      name,
      type: accountTypes[accountTypeIndex].value,
    };

    if (!data) {
      await dispatch(createAccount(accountDto));
    } else {
      await dispatch(updateAccount(data._id, accountDto));
    }
    history.goBack();
  };
  return (
    <>
      <form onSubmit={handleSubmit} className='form'>
        <div className='form__group '>
          <input
            type='text'
            placeholder={loading ? 'loading...' : 'Exp: John Doe'}
            className='input'
            name='name'
            id='name'
            autoFocus
            value={name}
            onChange={({ target }) => setname(target.value)}
          />
          <label htmlFor='name' className='label label--linear'>
            Account Name
          </label>
        </div>
        {!data && (
          <div className='form__group flex'>
            <div className='flex-grow'>
              <input
                type='number'
                placeholder='0'
                className='input'
                name='balance'
                id='balance'
                value={balance ? balance : ''}
                onChange={({ target }) => setbalance(parseFloat(target.value))}
              />
              <label htmlFor='balance' className='label label--linear'>
                Initial Balance
              </label>
            </div>
            {/* @TODO minus is not working correctly */}
            <button
              type='button'
              style={{ width: '8rem', padding: '0.3rem 0', position: 'absolute', right: 0 }}
              onClick={() => {
                setisBalancePositive((prev) => !prev);
                setbalance((prev) => -prev);
              }}>
              {isBalancePositive ? '- set as negative' : '+ set as positive'}
            </button>
          </div>
        )}
        <div className='form__group'>
          <select
            name='currency'
            id='currency'
            className='input'
            placeholder='helo'
            value={currency}
            onChange={({ target }) => setcurrency(target.value as CurrencyCodes)}>
            {currencies.map((c, i) => (
              <option key={i} value={c.code}>
                {c.symbol} - {c.name}
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
            selectedIndex={accountTypeIndex}
            onChanged={(item, index) => setaccountTypeIndex(index)}
            renderItem={(item, index, selected) => (
              <button
                key={index}
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
          <button type='submit' className='button button--primary'>
            Save
          </button>
        </div>
        {data && !data.main && (
          <div className='form__group'>
            <button
              type='button'
              className='button button--red--outlined'
              onClick={() => {
                dispatch(deleteAccount(data._id));
                history.replace('/me/tabs/accounts');
              }}>
              Delete
            </button>
          </div>
        )}
      </form>
    </>
  );
};

export default AccountForm;
