import { FC } from 'react';
import DayContainer from '../../components/DayContainer/DayContainer';
import PageLayout from '../../components/PageLayout/PageLayout';
import GroupContainer from '../../components/GroupContainer/GroupContainer';
import ToDoElement from '../../components/ToDoElement/ToDoElement';
import { useHome } from './hooks/useHome';
import NewTodoModal from './components/NewTodoModal';

interface IHomeProps {
  date: Date| null
}

const Home: FC<IHomeProps> = ({date}) => {
  const {
    moveDown,
    moveUp,
    remove,
    errors,
    showToDoModal,
    showGroupModal,
    openToDoModal,
    openGroupModal,
    data,
    controls,
    typingHandler,
    isEdit,
    closeModal,
    submitToDoHandler,
    submitGroupHandler,
    changeToDoHandler,
    changeGroupHandler,
  } = useHome(date);

  return (
    <section className="home">
      <PageLayout>
        {data.map((item, dataId) => (
          <DayContainer key={item.id} day={item.day} addGroup={() => openGroupModal(dataId, false)}>
            {item.group.map((group, groupId) => (
              <GroupContainer
                key={group.id}
                group={group.name}
                addTodo={() => openToDoModal(dataId, false, groupId)}
                onClick={() => openGroupModal(dataId, true, groupId, group.name)}
              >
                {group.children.map((child, childId) => (
                  <ToDoElement
                    key={child + childId}
                    moveUp={() => moveUp(child, dataId, groupId, childId)}
                    moveDown={() => moveDown(child, dataId, groupId, childId)}
                    remove={() => remove(dataId, groupId, childId)}
                    onClick={() => openToDoModal(dataId, true, groupId, child)}
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
        onSubmit={e => (isEdit ? changeToDoHandler(e) : submitToDoHandler(e))}
        showModal={showToDoModal}
        onClose={e => closeModal(e)}
        onChange={e => typingHandler(e)}
        value={controls.name}
        label="Enter title ToDo"
        inputName="name"
        errors={errors}
      />
      <NewTodoModal
        onSubmit={e => (isEdit ? changeGroupHandler(e) : submitGroupHandler(e))}
        showModal={showGroupModal}
        onClose={e => closeModal(e)}
        onChange={e => typingHandler(e)}
        value={controls.group}
        label="Enter title Group"
        inputName="group"
        errors={errors}
      />
    </section>
  );
};

export default Home;
