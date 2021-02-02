import React, { useEffect, useState } from 'react';
import ScrollableSelect from 'components/common/inputs/ScrollableSelect';
import { currencies } from 'constants/currencies';
import { accountTypes } from 'constants/accountTypes';
import Icon from '@material-ui/core/Icon';
import { IAccount, IAccountDto } from 'models/Account';
import { CurrencyCodes } from 'models/Currency';
import { useDispatch, useSelector } from 'react-redux';

import { createAccount, deleteAccount, updateAccount } from 'store/account/actions';
import { useHistory } from 'react-router-dom';
import { RootState } from 'store';
import Button from 'components/common/inputs/Button';
import { useTranslation } from 'react-i18next';
interface Props {
  data?: IAccount;
  loading?: boolean;
  onSubmitEnd?: () => void;
}

const AccountForm = ({ data, loading, onSubmitEnd = () => {} }: Props) => {
  const { t } = useTranslation();
  const [accountTypeIndex, setaccountTypeIndex] = useState(0);
  const [name, setname] = useState('');
  const [balance, setbalance] = useState(0);
  // @TODO 'default user currency will be setted'
  const [currency, setcurrency] = useState<CurrencyCodes>('TRY');
  const [isBalancePositive, setisBalancePositive] = useState(true);
  const dispatch = useDispatch();
  const history = useHistory();
  const opLoading = useSelector((state: RootState) => state.accountState.opLoading);

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
    onSubmitEnd();
  };
  return (
    <>
      <form onSubmit={handleSubmit} className='form'>
        <div className='form__group '>
          <input
            type='text'
            placeholder={loading ? t('loading') : t('inputs.exampleName')}
            className='input'
            name='name'
            id='name'
            autoFocus={!data ? true : false}
            value={name}
            onChange={({ target }) => setname(target.value)}
          />
          <label htmlFor='name' className='label label--linear'>
            {t('accountName')}
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
                {t('initialBalance')}
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
              {isBalancePositive ? t('setAsDebtor') : t('setAsCreditor')}
            </button>
          </div>
        )}
        <div className='form__group'>
          <select
            name='currency'
            id='currency'
            className='input'
            value={currency}
            onChange={({ target }) => setcurrency(target.value as CurrencyCodes)}>
            {currencies.map((c, i) => (
              <option key={i} value={c.code}>
                {c.symbol} - {t(c.name)}
              </option>
            ))}
          </select>
          <label htmlFor='currency' className='label label--linear'>
            {t('defaultCurrency')}
          </label>
        </div>
        <div className='form__group'>
          <ScrollableSelect
            options={accountTypes}
            selectedIndex={accountTypeIndex}
            onChanged={(item, index) => setaccountTypeIndex(index)}
            renderItem={(item, index, selected) => (
              <Button outlined={!selected} size='md'>
                <div className='icon icon--left'>
                  <Icon>{item.icon}</Icon>
                </div>
                {t(item.name)}
              </Button>
            )}
          />
          <label htmlFor='type' className='label label--linear'>
            {t('accountType')}
          </label>
        </div>
        <div className='form__group'>
          <Button type='submit' loading={opLoading}>
            {t('save')}
          </Button>
        </div>
        {data && !data.main && (
          <div className='form__group'>
            <Button
              type='button'
              color='red'
              outlined
              onClick={() => {
                dispatch(deleteAccount(data._id));
                history.replace('/me/tabs/accounts');
              }}>
              {t('delete')}
            </Button>
          </div>
        )}
      </form>
    </>
  );
};

export default AccountForm;
