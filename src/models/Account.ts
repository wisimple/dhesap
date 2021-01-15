import { IMongoData } from 'models';
import { CurrencyCodes } from './Currency';

export type AccountTypes = 'person' | 'company' | 'bank' | 'coin';

export interface IAccount extends IMongoData {
  name: string;
  blnc: number;
  crny: CurrencyCodes;
  main?: boolean;
  type: AccountTypes;
  avt?: string;
  avtT?: string;
  gndr?: boolean;
}
