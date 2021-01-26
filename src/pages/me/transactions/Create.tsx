import Button from 'components/common/inputs/Button';
import { useEffect, useState } from 'react';
import Check from '@material-ui/icons/Check';
import ScrollableSelect from 'components/common/inputs/ScrollableSelect';
import { useDispatch, useSelector } from 'react-redux';
import { getAllAccounts } from 'store/account/actions';
import { RootState } from 'store';
import { ITransactionCrudDto } from 'models/Transaction';
import { createTransaction } from 'store/transaction/actions';

const Create = () => {
  const [isPositive, setisPositive] = useState(true);
  const [accountIndex, setaccountIndex] = useState(0);
  const [amount, setamount] = useState(0);
  const dispatch = useDispatch();
  const { accounts, opLoading } = useSelector((state: RootState) => state.accountState);

  useEffect(() => {
    if (accounts.length < 1) dispatch(getAllAccounts());
  }, []);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('submit');

    const transactionCrudDto: ITransactionCrudDto = {
      from: accounts[accountIndex]._id,
      amnt: isPositive ? amount : -amount,
    };

    dispatch(createTransaction(transactionCrudDto));
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className='form__group'>
          <div className='flex button-group'>
            <Button outlined={!isPositive} onClick={() => setisPositive(true)}>
              {isPositive && <Check className='icon icon--left' />}
              Income
            </Button>
            <Button outlined={isPositive} onClick={() => setisPositive(false)}>
              {!isPositive && <Check className='icon icon--left' />}
              Expense {opLoading ? 'loading...' : ''}
            </Button>
          </div>
        </div>
        <div className='form__group'>
          <input
            type='number'
            className='input'
            name='amnt'
            placeholder='$'
            autoFocus
            value={amount ? amount : ''}
            onChange={({ target }) => setamount(parseFloat(target.value))}
          />
          <label htmlFor='amnt' className='label label--linear'>
            Amount
          </label>
        </div>
        <div className='form__group'>
          <ScrollableSelect
            options={accounts}
            selectedIndex={accountIndex}
            renderItem={(item, index, isSelected) => <Button outlined={!isSelected}>{item.name}</Button>}
            onChanged={(item, i) => setaccountIndex(i)}
          />
          <label className='label label--linear'>Select an account</label>
        </div>
        <div className='form__group'>
          <Button type='submit' loading={opLoading}>
            Save
          </Button>
        </div>
      </form>
    </div>
  );
};

export default Create;
