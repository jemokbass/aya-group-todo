import { ChangeEvent, useState, FormEvent, useContext, useEffect, MouseEvent, useCallback } from 'react';
import { deepClone } from '../../../utils/deepClone';
import { IDataArr, IAddTodo } from '../../../types/data.types';
import { IdContext } from '../../../app/App';

export const useHome = (date: Date | null) => {
  const [showToDoModal, setShowToDoModal] = useState<boolean>(false);
  const [showGroupModal, setShowGroupModal] = useState<boolean>(false);
  const [isEdit, setIsEdit] = useState<boolean>(false);
  const [data, setData] = useState<IDataArr>([]);
  const [controls, setControls] = useState<IAddTodo>({ name: '', group: '' });
  const [errors, setErrors] = useState({ name: '', group: '' });
  const context = useContext(IdContext);
  const [toDoElement, setToDoElement] = useState('');
  const [groupElement, setGroupElement] = useState('');
  const localeData = localStorage.getItem('data');

  const clearState = () => {
    setShowToDoModal(false);
    setShowGroupModal(false);
    setToDoElement('');
    setGroupElement('');
    setIsEdit(false);
    setErrors({ name: '', group: '' });
    setControls({ name: '', group: '' });
  };

  const enterDate = useCallback(
    (date: Date) => {
      const newData = {
        day: date.toDateString(),
        group: [],
        id: Number(date),
        date: date.toDateString(),
      };

      if (!data.filter(item => new Date(item.date).getDay() === date.getDay()).length) {
        setData(prevState => [...prevState, newData]);
        setData(prevState => [...prevState.sort(item => +new Date(item.date) - +new Date(date))]);
      }
    },
    [data]
  );

  useEffect(() => {
    if (date) {
      enterDate(date);
    }
  }, [enterDate, date, setData]);

  useEffect(() => {
    if (isEdit && toDoElement) {
      setControls({ name: toDoElement, group: '' });
    }

    if (isEdit && groupElement) {
      setControls({ name: '', group: groupElement });
    }
  }, [isEdit, context?.currentDayId, data, toDoElement, groupElement]);

  useEffect(() => {
    if (localeData) {
      setData(JSON.parse(localeData));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('data', JSON.stringify(data));
  }, [data]);

  const typingHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const current = e.target.name;
    const value = e.target.value;

    if (value.trim().length < 1) {
      setErrors(prevState => ({ ...prevState, [current]: 'Please enter a value' }));
    }

    if (value.trim().length > 1) {
      setErrors(prevState => ({ ...prevState, [current]: '' }));
    }

    setControls(prevState => ({ ...prevState, [current]: value }));
  };

  const submitToDoHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { name } = controls;
    const newData = deepClone(data);

    if (controls.name.length > 0) {
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

  const submitGroupHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { group } = controls;
    const newData = deepClone(data);

    if (controls.group.length > 0) {
      if (context?.currentDayId || context?.currentDayId === 0) {
        newData[context.currentDayId].group.push({
          name: group,
          id: Math.random(),
          children: [],
        });

        setData([...newData]);
        clearState();
      }
    }
  };

  const changeToDoHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { name } = controls;
    const newData = deepClone(data);

    if (controls.name.length > 0) {
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

  const changeGroupHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { group } = controls;
    const newData = deepClone(data);

    if (controls.group.length > 0) {
      if (context?.currentDayId || context?.currentDayId === 0) {
        const index = data[context.currentDayId].group.findIndex(el => el.name === groupElement);
        const { id, children } = data[context.currentDayId].group[index];

        newData[context.currentDayId].group.splice(index, 1, { name: group, id, children: [...children] });

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

  const removeToDo = (dayId: number, groupId: number, childId: number) => {
    const newData = deepClone(data);

    newData[dayId].group[groupId].children.splice(childId, 1);
    setData(newData);
  };

  const removeGroup = (dayId: number, groupId: number) => {
    const newData = deepClone(data);

    newData[dayId].group.splice(groupId, 1);
    setData(newData);
  };

  const openToDoModal = (dayId: number | null, edit: boolean, groupId: number | null, child?: string) => {
    context?.setCurrentDayId(dayId);

    if (groupId || groupId === 0) {
      context?.setCurrentGroupId(groupId);
    }

    setShowToDoModal(true);

    if (edit && child) {
      setIsEdit(true);
      setToDoElement(child);
    } else return;
  };

  const openGroupModal = (dayId: number | null, edit: boolean, groupId?: number | null, child?: string) => {
    context?.setCurrentDayId(dayId);

    if (groupId || groupId === 0) {
      context?.setCurrentGroupId(groupId);
    }

    setShowGroupModal(true);

    if (edit && child) {
      setIsEdit(true);
      setGroupElement(child);
    } else return;
  };

  const closeModal = (e: MouseEvent<HTMLElement>) => (e.target === e.currentTarget ? clearState() : null);

  return {
    showToDoModal,
    showGroupModal,
    openToDoModal,
    openGroupModal,
    setShowToDoModal,
    setShowGroupModal,
    moveUp,
    moveDown,
    removeToDo,
    removeGroup,
    data,
    controls,
    typingHandler,
    errors,
    isEdit,
    setIsEdit,
    closeModal,
    submitToDoHandler,
    submitGroupHandler,
    changeToDoHandler,
    changeGroupHandler,
    enterDate,
  };
};
