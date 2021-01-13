import { IAccount } from 'models/Account';
import { currencies } from 'constants/currencies';
import { accountTypes } from 'constants/accountTypes';
import { generateRandomNumber } from 'helpers';
import faker from 'faker';

const currenciesLength = currencies.length;
const accountTypeLenght = accountTypes.length;

export const seedAccount = (): IAccount => {
  const type = accountTypes[generateRandomNumber(accountTypeLenght)].type;

  return {
    _id: faker.random.uuid(),
    name: type === 'company' ? faker.company.companyName() : faker.name.findName(),
    blnc: faker.random.boolean() ? parseFloat(faker.finance.amount()) : -parseFloat(faker.finance.amount()),
    type,
    crrncy: currencies[generateRandomNumber(currenciesLength)].code,
    avtrThumb: faker.random.boolean()
      ? `http://placeimg.com/320/320/${
          type === 'company' ? 'business' : 'people'
        }?random=${faker.random.number()}`
      : undefined,
    avtr: 'http://placeimg.com/640/480/people',
    cAt: faker.date.past(),
    uAt: faker.date.past(),
  };
};

export const seedAccounts = (count: number): IAccount[] => [...Array(count)].map(seedAccount);
