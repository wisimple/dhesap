import { IMongoData } from 'models';
import { IIcon } from './Icon';

export interface ICategoryDto {
  name: string;
  icon: IIcon;
}

export interface ICategory extends ICategoryDto, IMongoData {}
