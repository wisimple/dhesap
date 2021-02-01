import { IMongoData } from 'models';
import { IAccount } from 'models/Account';
import { ICategory } from 'models/Category';

type TransactionTypes = 'debt';

export interface ITransactionDto {
  from: IAccount;
  to?: IAccount;
  amnt: number;
  fBlnc: number;
  tBlnc?: number;
  exRt?: number;
  ctgrs?: ICategory[];
  type?: TransactionTypes;
  desc?: string;
  dueAt?: Date;
}

export interface ITransactionCrudDto {
  from: string;
  to?: string;
  amnt: number;
  ctgrs?: string[];
  desc?: string;
}

export interface ITransaction extends ITransactionDto, IMongoData {}
