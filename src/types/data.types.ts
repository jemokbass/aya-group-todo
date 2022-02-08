export interface IDataObj {
  day: string;
  group: string;
  id: number;
  children: string[];
}

export interface IDataArr extends Array<IDataObj> {}
