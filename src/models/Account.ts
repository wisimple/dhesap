import { IMongoData } from '.';
import { CurrencyCodes } from './Currency';

export type AccountTypes = 'person' | 'company' | 'bank' | 'coin';

export interface IAccount extends IMongoData {
  name: string;
  blnc: number;
  crrncy: CurrencyCodes;
  isMain?: boolean;
  type: AccountTypes;
  avtr?: string;
  avtrThumb?: string;
}
