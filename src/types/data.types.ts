export interface IGroupObj {
  name: string;
  id: number;
  children: string[];
}

export interface IDataObj {
  day: string;
  id: number;
  date: string;
  group: IGroupObj[];
}

export interface IDataArr extends Array<IDataObj> {}

export interface IAddTodo {
  name: string;
  group: string;
}
