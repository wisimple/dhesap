import { IMongoData } from 'models';

export interface IUser extends IMongoData {
  name: string;
  email: string;
}
