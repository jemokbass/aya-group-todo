import { FC } from 'react';
import DayContainer from '../../components/DayContainer/DayContainer';
import PageLayout from '../../components/PageLayout/PageLayout';
import GroupContainer from '../../components/GroupContainer/GroupContainer';
import ToDoElement from '../../components/ToDoElement/ToDoElement';
import Modal from '../../components/UI/Modal/Modal';
import { useHome } from './hooks/useHome';

const Home: FC = () => {
  const { moveDown, moveUp, remove, showModal, setShowModal, data } = useHome();

  return (
    <section className="home">
      <PageLayout>
        {data.map((item, index) => (
          <DayContainer key={item.id} day={item.day}>
            <GroupContainer group={item.group} addTodo={() => setShowModal(true)}>
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
      <Modal
        showModal={showModal}
        onClose={e => (e.target === e.currentTarget ? setShowModal(false) : null)}
      />
    </section>
  );
};

export default Home;
