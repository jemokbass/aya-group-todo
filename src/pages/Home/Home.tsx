import { FC } from 'react';
import DayContainer from '../../components/DayContainer/DayContainer';
import PageLayout from '../../components/PageLayout/PageLayout';
import GroupContainer from '../../components/GroupContainer/GroupContainer';
import ToDoElement from '../../components/ToDoElement/ToDoElement';

const Home: FC = () => {
  return (
    <section className="home">
      <PageLayout>
        <DayContainer>
          <GroupContainer>
            <ToDoElement>Work after work</ToDoElement>
          </GroupContainer>
        </DayContainer>
      </PageLayout>
    </section>
  );
};

export default Home;
