import { IMongoData } from 'models';
import { CurrencyCodes } from './Currency';

export type AccountTypes = 'person' | 'company' | 'bank' | 'coin';

export interface IAccountDto {
  name: string;
  blnc: number;
  crny: CurrencyCodes;
  main?: boolean;
  type: AccountTypes;
  avt?: string;
  avtT?: string;
  gndr?: boolean;
}

export interface IAccount extends IAccountDto, IMongoData {}
