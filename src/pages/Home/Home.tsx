import { FC } from 'react';
import DayContainer from '../../components/DayContainer/DayContainer';
import PageLayout from '../../components/PageLayout/PageLayout';
import GroupContainer from '../../components/GroupContainer/GroupContainer';
import ToDoElement from '../../components/ToDoElement/ToDoElement';
import { useHome } from './hooks/useHome';
import NewTodoModal from './components/NewTodoModal';

const Home: FC = () => {
  const {
    moveDown,
    moveUp,
    remove,
    showModal,
    openModal,
    data,
    submitFormHandler,
    toDoControls,
    typingHandler,
    isEdit,
    closeModal,
    submitChangeFormHandler,
  } = useHome();

  return (
    <section className="home">
      <PageLayout>
        {data.map((item, dataId) => (
          <DayContainer key={item.id} day={item.day}>
            {item.group.map((group, groupId) => (
              <GroupContainer group={group.name} addTodo={() => openModal(dataId, groupId, false)}>
                {group.children.map((child, childId) => (
                  <ToDoElement
                    key={child + childId}
                    moveUp={() => moveUp(child, dataId, groupId, childId)}
                    moveDown={() => moveDown(child, dataId, groupId, childId)}
                    remove={() => remove(dataId, groupId, childId)}
                    onClick={() => openModal(dataId, groupId, true, child)}
                  >
                    {child}
                  </ToDoElement>
                ))}
              </GroupContainer>
            ))}
          </DayContainer>
        ))}
      </PageLayout>
      <NewTodoModal
        onSubmit={e => (isEdit ? submitChangeFormHandler(e) : submitFormHandler(e))}
        showModal={showModal}
        onClose={e => closeModal(e)}
        onChange={e => typingHandler(e)}
        value={toDoControls.name}
      />
    </section>
  );
};

export default Home;
