import { ICategory } from 'models/Category';

import { seedIcon } from './icons';

import faker from 'faker';

export const seeedCategory = (): ICategory => ({
  _id: faker.random.uuid(),
  name: faker.name.jobType(),
  icon: seedIcon(),
  cAt: faker.date.recent(),
  uAt: faker.date.past(),
});

export const seedCategories = (count: number): ICategory[] => [...Array(count)].map(seeedCategory);
