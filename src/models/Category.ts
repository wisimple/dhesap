import { IMongoData, IIcon } from 'models';

export interface ICategory extends IMongoData {
  name: string;
  icon: IIcon;
}
