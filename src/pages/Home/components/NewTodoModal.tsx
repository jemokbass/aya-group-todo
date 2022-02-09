import { FC, MouseEvent } from 'react';
import Button from '../../../components/UI/Button/Button';
import Form from '../../../components/UI/Form/Form';
import Input from '../../../components/UI/Input/Input';
import Label from '../../../components/UI/Label/Label';
import Modal from '../../../components/UI/Modal/Modal';
import { useHome } from '../hooks/useHome';

interface INewTodoModalProps {
  showModal: boolean;
  onClose: (e: MouseEvent<HTMLElement>) => void;
}

const NewTodoModal: FC<INewTodoModalProps> = ({ showModal, onClose }) => {
  const { typingHandler, controls, errors, submitFormHandler } = useHome();

  return (
    <Modal onClose={onClose} showModal={showModal} className="new-todo-modal" title="Add new ToDo">
      <Form onSubmit={e => submitFormHandler(e)}>
        <Label label="Enter ToDo text" error={errors.name}>
          <Input onChange={e => typingHandler(e)} value={controls.name} name="name" />
        </Label>
        <Button type="submit">Save</Button>
      </Form>
    </Modal>
  );
};

export default NewTodoModal;
