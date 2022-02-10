import { IDataArr } from '../types/data.types';

export const deepClone = (array: IDataArr): IDataArr => {
  return JSON.parse(JSON.stringify(array));
};
