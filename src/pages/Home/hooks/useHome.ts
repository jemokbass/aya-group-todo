import { useState } from 'react';
import { deepClone } from '../../../utils/deepClone';
import { IDataArr } from '../../../types/data.types';

export const useHome = () => {
  const [showModal, setShowModal] = useState(false);
  const [data, setData] = useState<IDataArr>([
    { day: 'Tomorrow', group: 'Work', id: 1, children: ['Work after work', 'Rest', 'Have'] },
  ]);

  const moveUp = (item: string, index: number, idx: number) => {
    const newData = deepClone(data);

    if (idx > 0) {
      newData[index].children.splice(idx, 1);
      newData[index].children.splice(idx - 1, 0, item);

      setData(newData);
    } else return;
  };

  const moveDown = (item: string, index: number, idx: number) => {
    const newData = deepClone(data);

    if (idx < newData[index].children.length - 1) {
      newData[index].children.splice(idx, 1);
      newData[index].children.splice(idx + 1, 0, item);

      setData(newData);
    } else return;
  };

  const remove = (index: number, idx: number) => {
    const newData = deepClone(data);

    newData[index].children.splice(idx, 1);
    setData(newData);
  };

  return { showModal, setShowModal, moveUp, moveDown, remove, data };
};
