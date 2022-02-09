import { ChangeEvent, useState, FormEvent, useContext } from 'react';
import { deepClone } from '../../../utils/deepClone';
import { IDataArr, IAddTodo } from '../../../types/data.types';
import { IdContext } from '../../../app/App';

export const useHome = () => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [data, setData] = useState<IDataArr>([
    { day: 'today', group: 'Work', id: 1, children: ['Work after work', 'Rest', 'Have'] },
    { day: 'Tomorrow', group: 'Work', id: 2, children: ['Work after work', 'Rest', 'Have'] },
  ]);
  const [controls, setControls] = useState<IAddTodo>({ name: '' });
  const [errors, setErrors] = useState<IAddTodo>({ name: '' });
  const context = useContext(IdContext);

  const typingHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const current = e.target.name;
    const value = e.target.value;

    if (value.trim().length < 1) {
      return setErrors(prevState => ({ ...prevState, [current]: 'Please enter a value' }));
    }

    setControls(prevState => ({ ...prevState, [current]: value }));
  };

  const submitFormHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { name } = controls;
    const newData = deepClone(data);

    console.log(context?.currentId);

    if (context?.currentId) {
      newData[context.currentId].children.push(name);
      setData(newData);
      setControls({ name: '' });
      setShowModal(false);
    }
  };

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

  const openModal = (id: number | null) => {
    context?.setCurrentId(id);
    setShowModal(true);
  };

  return {
    showModal,
    openModal,
    setShowModal,
    moveUp,
    moveDown,
    remove,
    data,
    controls,
    typingHandler,
    errors,
    submitFormHandler,
  };
};
