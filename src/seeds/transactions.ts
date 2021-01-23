import f from 'faker';
import { generateRandomNumber } from 'helpers';
import { IAccount } from 'models/Account';
import { ICategory } from 'models/Category';
import { ITransaction } from 'models/Transaction';

import { seedAccounts } from 'seeds/accounts';
import { seedCategories } from './categories';

const accounts = seedAccounts(10);
const accountsLenght = accounts.length;

const getExcept = (items: IAccount[], itemIndex: number) => {
  if (f.random.boolean()) {
    const except = items.filter((a, i) => i !== itemIndex);
    return except[generateRandomNumber(accountsLenght - 1)];
  } else {
    return undefined;
  }
};

export const seedTransaction = (t?: ITransaction): ITransaction => {
  const randomAccountIndex = generateRandomNumber(accountsLenght);
  const accountFrom = accounts[randomAccountIndex];
  const amount = f.random.boolean() ? parseFloat(f.finance.amount()) : -parseFloat(f.finance.amount());
  const accountTo = getExcept(accounts, randomAccountIndex);

  let selectedCategories: ICategory[] | undefined;

  f.random.boolean()
    ? (selectedCategories = seedCategories(f.random.number(5)))
    : (selectedCategories = undefined);

  let exRt = undefined;
  if (accountTo && accountFrom.crny !== accountTo.crny) {
    exRt = f.random.number(10) + 1.1;
  }

  return {
    _id: f.random.uuid(),
    from: accountFrom,
    to: accountTo,
    fBlnc: 499,
    tBlnc: accountTo ? 299 : undefined,
    exRt,
    amnt: amount,
    desc: f.random.boolean() ? f.lorem.sentence() : undefined,
    ctgrs: selectedCategories,
    cAt: f.date.past(),
    uAt: f.random.boolean() ? f.date.past() : undefined,
  };
};

export const seedTransactions = (count: number): ITransaction[] => [...Array(count)].map(seedTransaction);
