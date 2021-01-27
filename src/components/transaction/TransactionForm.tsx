import Button from 'components/common/inputs/Button';
import { useEffect, useState } from 'react';
import Check from '@material-ui/icons/Check';
import ScrollableSelect from 'components/common/inputs/ScrollableSelect';
import { useDispatch, useSelector } from 'react-redux';
import { ITransactionCrudDto } from 'models/Transaction';
import Avatar from 'components/common/Avatar';

import { RootState } from 'store';
import { createTransaction } from 'store/transaction/actions';
import { getAllAccounts } from 'store/account/actions';
import { getAllCategories } from 'store/category/actions';
import CustomIcon from 'components/common/CustomIcon';

interface Props {
  onSubmitEnd?: () => void;
}

const TransactionForm = ({ onSubmitEnd = () => {} }: Props) => {
  const [isPositive, setisPositive] = useState(true);
  const [accountIndex, setaccountIndex] = useState(0);
  const [categoryIndex, setcategoryIndex] = useState(0);
  const [amount, setamount] = useState(0);

  const dispatch = useDispatch();
  const { opLoading } = useSelector((state: RootState) => state.transactionState);
  const { accounts, loading: accountsLoading } = useSelector((state: RootState) => state.accountState);
  const { categories, loading: categoriesLoading } = useSelector((state: RootState) => state.categoryState);

  useEffect(() => {
    dispatch(getAllAccounts());
    dispatch(getAllCategories());
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('submit');

    const transactionCrudDto: ITransactionCrudDto = {
      from: accounts[accountIndex]._id,
      amnt: isPositive ? amount : -amount,
    };

    await dispatch(createTransaction(transactionCrudDto));
    onSubmitEnd();
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
            <Button outlined>Transfer</Button>
            <Button outlined={isPositive} onClick={() => setisPositive(false)}>
              {!isPositive && <Check className='icon icon--left' />}
              Expense
            </Button>
          </div>
        </div>
        <div className='form__group'>
          <input
            type='number'
            className='input'
            name='amnt'
            placeholder={accounts[accountIndex]?.crny || ''}
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
            loading={!accounts.length && accountsLoading}
            renderItem={(account, index, isSelected) => (
              <Button outlined={!isSelected} size='md'>
                <Avatar type={account.type} size='sm' className='mr-15' /> {account.name}
              </Button>
            )}
            onChanged={(item, i) => setaccountIndex(i)}
          />
          <label className='label label--linear'>Select an account</label>
        </div>
        <div className='form__group'>
          <ScrollableSelect
            options={categories}
            selectedIndex={categoryIndex}
            loading={!categories.length && categoriesLoading}
            renderItem={(category, index, isSelected) => {
              const { name, icon } = category;
              return (
                <Button rounded outlined={!isSelected} size='sm'>
                  <CustomIcon name={icon.name} /> <span className='mr-1'>{name}</span>
                </Button>
              );
            }}
            onChanged={(item, i) => setcategoryIndex(i)}
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

export default TransactionForm;
