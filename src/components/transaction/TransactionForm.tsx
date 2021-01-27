import Button from 'components/common/inputs/Button';
import { useEffect, useState } from 'react';
import Check from '@material-ui/icons/Check';
import ScrollableSelect from 'components/common/inputs/ScrollableSelect';
import { useDispatch, useSelector } from 'react-redux';
import { ITransaction, ITransactionCrudDto } from 'models/Transaction';
import Avatar from 'components/common/Avatar';

import { RootState } from 'store';
import { createTransaction, deleteTransaction, updateTransaction } from 'store/transaction/actions';
import { getAllAccounts } from 'store/account/actions';
import { getAllCategories } from 'store/category/actions';
import CustomIcon from 'components/common/CustomIcon';
import ScrollableSelectMulti from 'components/common/inputs/ScrollableSelectMulti';
import Icon from '@material-ui/core/Icon';
import { useHistory } from 'react-router-dom';

interface Props {
  data?: ITransaction;
  loading?: boolean;
  onSubmitEnd?: () => void;
}

const TransactionForm = ({ data, loading, onSubmitEnd = () => {} }: Props) => {
  const [isPositive, setisPositive] = useState(true);
  const [accountIndex, setaccountIndex] = useState(0);
  const [categoryIndexes, setcategoryIndexes] = useState<Array<number>>([]);
  const [amount, setamount] = useState(0);

  const history = useHistory();
  const dispatch = useDispatch();
  const { opLoading } = useSelector((state: RootState) => state.transactionState);
  const { accounts, loading: accountsLoading } = useSelector((state: RootState) => state.accountState);
  const { categories, loading: categoriesLoading } = useSelector((state: RootState) => state.categoryState);

  useEffect(() => {
    dispatch(getAllAccounts());
    dispatch(getAllCategories());
  }, []);

  useEffect(() => {
    if (data) {
      if (data.amnt < 0) setisPositive(false);
      setamount(Math.abs(data.amnt));
      setaccountIndex(accounts.findIndex((account) => account._id === data.from._id));
    }
  }, [data, accounts, categories]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('submit');

    const transactionCrudDto: ITransactionCrudDto = {
      from: accounts[accountIndex]._id,
      amnt: isPositive ? amount : -amount,
    };

    if (data) {
      await dispatch(updateTransaction(data._id, transactionCrudDto));
    } else {
      await dispatch(createTransaction(transactionCrudDto));
    }
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
            placeholder={`0 ${accounts[accountIndex]?.crny || ''}`}
            autoFocus={!data ? true : false}
            value={amount ? amount : ''}
            onChange={({ target }) => setamount(parseFloat(target.value))}
          />
          <label htmlFor='amnt' className='label label--linear'>
            Amount ({accounts[accountIndex]?.crny || ''})
          </label>
        </div>
        <div className='form__group'>
          <ScrollableSelect
            options={accounts}
            selectedIndex={accountIndex}
            loading={!accounts.length && accountsLoading}
            renderItem={(account, index, isSelected) => (
              <Button outlined={!isSelected} size='md' rounded>
                <Avatar type={account.type} size='sm' className='mr-15' /> {account.name}
              </Button>
            )}
            onChanged={(item, i) => setaccountIndex(i)}
          />
          <label className='label label--linear'>Select an Account</label>
        </div>
        <div className='form__group'>
          {/* <ScrollableSelectMulti
            options={categories}
            selectedIndexes={categoryIndexes}
            onChanged={(selectedIndexes) => setcategoryIndexes(selectedIndexes)}
            renderItem={(category, index, isSelected) => {
              const { name, icon } = category;
              return (
                <Button outlined={!isSelected} rounded size='md'>
                  <Icon className='mr-1'>{icon.name}</Icon>
                  {category.name}
                </Button>
              );
            }}
          /> */}
          <label className='label label--linear'>
            Select Category <small>(you can choose multiple)</small>
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
              outlined
              color='red'
              onClick={() => {
                dispatch(deleteTransaction(data._id));
                history.replace('/me/tabs/transactions');
              }}>
              Delete
            </Button>
          </div>
        )}
      </form>
    </div>
  );
};

export default TransactionForm;
