import { IMongoData, IIcon } from '.';

export interface ICategory extends IMongoData {
  name: string;
  icon: IIcon;
}
