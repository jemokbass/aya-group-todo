import { IDataArr } from '../types/data.types';

export const deepClone = (array: IDataArr): IDataArr => {
  return array.map(obj => ({ ...obj, children: [...obj.children] }));
};
