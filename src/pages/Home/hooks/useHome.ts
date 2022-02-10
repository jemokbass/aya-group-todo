import { ChangeEvent, useState, FormEvent, useContext, useEffect, MouseEvent } from 'react';
import { deepClone } from '../../../utils/deepClone';
import { IDataArr, IAddTodo } from '../../../types/data.types';
import { IdContext } from '../../../app/App';
import { mockData } from '../../../service/mockData';

export const useHome = () => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [isEdit, setIsEdit] = useState<boolean>(false);
  const [data, setData] = useState<IDataArr>([]);
  const [toDoControls, setToDoControls] = useState<IAddTodo>({ name: '' });
  const [errors, setErrors] = useState({ name: '' });
  const context = useContext(IdContext);
  const [toDoElement, setToDoElement] = useState('');

  const clearState = () => {
    setShowModal(false);
    setToDoElement('');
    setIsEdit(false);
    setErrors({ name: '' });
    setToDoControls({ name: '' });
  };

  useEffect(() => {
    if (
      new Date() > new Date(mockData[0].date) &&
      new Date(mockData[0].date).getDay() !== new Date().getDay()
    ) {
      mockData.unshift({
        day: 'today',
        group: [],
        id: 3,
        date: new Date().toDateString(),
      });
    }
    setData(mockData);
  }, []);

  useEffect(() => {
    if (isEdit && context?.currentDayId && toDoElement) {
      setToDoControls({ name: toDoElement });
    }
  }, [isEdit, context?.currentDayId, data, toDoElement]);

  const typingHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const current = e.target.name;
    const value = e.target.value;

    if (value.trim().length < 1) {
      setErrors(prevState => ({ ...prevState, [current]: 'Please enter a value' }));
    }

    if (value.trim().length > 1) {
      setErrors(prevState => ({ ...prevState, [current]: '' }));
    }

    setToDoControls(prevState => ({ ...prevState, [current]: value }));
  };

  const submitFormHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { name } = toDoControls;
    const newData = deepClone(data);

    if (toDoControls.name.length > 0) {
      if (
        (context?.currentDayId || context?.currentDayId === 0) &&
        (context?.currentGroupId || context?.currentGroupId === 0)
      ) {
        newData[context.currentDayId].group[context.currentGroupId].children.push(name);

        setData([...newData]);
        clearState();
      }
    }
  };

  const submitChangeFormHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { name } = toDoControls;
    const newData = deepClone(data);

    if (toDoControls.name.length > 0) {
      if (
        (context?.currentDayId || context?.currentDayId === 0) &&
        (context?.currentGroupId || context?.currentGroupId === 0)
      ) {
        const index = data[context.currentDayId].group[context.currentGroupId].children.findIndex(
          el => el === toDoElement
        );
        newData[context.currentDayId].group[context.currentGroupId].children.splice(index, 1, name);

        setData([...newData]);
        clearState();
      }
    }
  };

  const moveUp = (item: string, dataId: number, groupId: number, childId: number) => {
    const newData = deepClone(data);

    if (childId > 0) {
      newData[dataId].group[groupId].children.splice(childId, 1);
      newData[dataId].group[groupId].children.splice(childId - 1, 0, item);

      setData(newData);
    } else return;
  };

  const moveDown = (item: string, dataId: number, groupId: number, childId: number) => {
    const newData = deepClone(data);

    if (childId < newData[dataId].group[groupId].children.length - 1) {
      newData[dataId].group[groupId].children.splice(childId, 1);
      newData[dataId].group[groupId].children.splice(childId + 1, 0, item);

      setData(newData);
    } else return;
  };

  const remove = (dataId: number, groupId: number, childId: number) => {
    const newData = deepClone(data);

    newData[dataId].group[groupId].children.splice(childId, 1);
    setData(newData);
  };

  const openModal = (dayId: number | null, groupId: number | null, edit: boolean, child?: string) => {
    context?.setCurrentDayId(dayId);
    context?.setCurrentGroupId(groupId);
    setShowModal(true);

    if (edit && child) {
      setIsEdit(true);
      setToDoElement(child);
    } else return;
  };

  const closeModal = (e: MouseEvent<HTMLElement>) => (e.target === e.currentTarget ? clearState() : null);

  return {
    showModal,
    openModal,
    setShowModal,
    moveUp,
    moveDown,
    remove,
    data,
    toDoControls,
    typingHandler,
    errors,
    submitFormHandler,
    isEdit,
    setIsEdit,
    closeModal,
    submitChangeFormHandler,
  };
};
