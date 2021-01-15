import f from 'faker';
import { generateRandomNumber } from 'helpers';
import { ICategory } from 'models/Category';
import { ITransaction } from 'models/Transaction';

import { seedAccounts } from 'seeds/accounts';
import { seedCategories } from './categories';

const accounts = seedAccounts(10);
const accountsLenght = accounts.length;

export const seedTransaction = (t?: ITransaction): ITransaction => {
  const randomAccountIndex = generateRandomNumber(accountsLenght);
  const accountFrom = accounts[randomAccountIndex];
  const amount = f.random.boolean() ? parseFloat(f.finance.amount()) : -parseFloat(f.finance.amount());

  let selectedCategories: ICategory[] | undefined;

  f.random.boolean()
    ? (selectedCategories = seedCategories(f.random.number(5)))
    : (selectedCategories = undefined);

  const accountTo = () => {
    if (f.random.boolean()) {
      const exceptRandomAccount = accounts.filter((a, i) => i !== randomAccountIndex);
      return exceptRandomAccount[generateRandomNumber(accountsLenght - 1)];
    } else {
      return undefined;
    }
  };

  return {
    _id: f.random.uuid(),
    from: accountFrom,
    to: accountTo(),
    amnt: amount,
    desc: f.random.boolean() ? f.lorem.sentence() : undefined,
    ctgrs: selectedCategories,
    cAt: f.date.past(),
    uAt: f.random.boolean() ? f.date.past() : undefined,
  };
};

export const seedTransactions = (count: number): ITransaction[] => [...Array(count)].map(seedTransaction);
