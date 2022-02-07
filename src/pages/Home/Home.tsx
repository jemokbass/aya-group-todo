import { MouseEvent, FC, useState } from 'react';
import DayContainer from '../../components/DayContainer/DayContainer';
import PageLayout from '../../components/PageLayout/PageLayout';
import GroupContainer from '../../components/GroupContainer/GroupContainer';
import ToDoElement from '../../components/ToDoElement/ToDoElement';

const Home: FC = () => {
  const [data, setData] = useState([
    { day: 'Tomorrow', group: 'Work', id: 1, children: ['Work after work', 'Rest', 'Have'] },
  ]);

  const deepClone = (array: any[]) => {
    return array.map(obj => ({ ...obj, children: [...obj.children] }));
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

  return (
    <section className="home">
      <PageLayout>
        {data.map((item, index) => (
          <DayContainer key={item.id} day={item.day}>
            <GroupContainer group={item.group}>
              {item.children.map((child, idx) => (
                <ToDoElement
                  key={child + idx}
                  moveUp={() => moveUp(child, index, idx)}
                  moveDown={() => moveDown(child, index, idx)}
                  remove={() => remove(index, idx)}
                >
                  {child}
                </ToDoElement>
              ))}
            </GroupContainer>
          </DayContainer>
        ))}
      </PageLayout>
    </section>
  );
};

export default Home;
