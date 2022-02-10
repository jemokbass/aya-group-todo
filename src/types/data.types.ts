export interface IGroupObj {
  name: string;
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
}
