import { IMongoData } from 'models';

export interface IUser extends IMongoData {
  name: string;
  companyName?: string;
  email: string;
}
