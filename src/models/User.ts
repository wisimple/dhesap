import { IMongoData } from 'models';

export interface IUserSettings {
  lang?: string;
  theme?: string;
  crny?: string;
}

export interface IUser extends IMongoData {
  name: string;
  companyName?: string;
  email: string;
  settings?: IUserSettings;
}
