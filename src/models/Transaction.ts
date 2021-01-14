import { IMongoData } from 'models';
import { IAccount } from 'models/Account';
import { ICategory } from 'models/Category';

type TransactionTypes = 'debt';

export interface ITransaction extends IMongoData {
  from: IAccount;
  amnt: number;
  to?: IAccount;
  ctgrs?: ICategory[];
  type?: TransactionTypes;
  desc?: string;
  dueAt?: Date;
}
