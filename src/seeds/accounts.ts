import { IAccount } from 'models/Account';
import { currencies } from 'constants/currencies';
import { accountTypes } from 'constants/accountTypes';
import { generateRandomNumber } from 'helpers';
import faker from 'faker';

const currenciesLength = currencies.length;
const accountTypeLenght = accountTypes.length;

export const seedAccount = (main?: boolean): IAccount => {
  const type = accountTypes[generateRandomNumber(accountTypeLenght)].value;

  return {
    _id: faker.random.uuid(),
    name: type === 'company' ? faker.company.companyName() : faker.name.findName(),
    blnc: faker.random.boolean() ? parseFloat(faker.finance.amount()) : -parseFloat(faker.finance.amount()),
    type,
    main: main,
    crny: currencies[generateRandomNumber(currenciesLength)].code,
    avtT: faker.random.boolean()
      ? `http://placeimg.com/640/320/${
          type === 'company' ? 'business' : 'people'
        }?random=${faker.random.number()}`
      : undefined,
    avt: 'http://placeimg.com/640/480/people',
    gndr: faker.random.boolean() ? faker.random.boolean() : undefined,
    cAt: faker.date.past(),
    uAt: faker.date.past(),
  };
};

export const seedAccounts = (count: number): IAccount[] =>
  [...Array(count)].map((a, i) => {
    if (i === 0) {
      return seedAccount(true);
    }
    return seedAccount();
  });
