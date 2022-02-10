import { FC, MouseEvent, FormEventHandler, ChangeEvent } from 'react';
import Button from '../../../components/UI/Button/Button';
import Form from '../../../components/UI/Form/Form';
import Input from '../../../components/UI/Input/Input';
import Label from '../../../components/UI/Label/Label';
import Modal from '../../../components/UI/Modal/Modal';
import { useHome } from '../hooks/useHome';

interface INewTodoModalProps {
  showModal: boolean;
  onClose: (e: MouseEvent<HTMLElement>) => void;
  onSubmit: FormEventHandler<HTMLFormElement>;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  value: string;
}

const NewTodoModal: FC<INewTodoModalProps> = ({ showModal, onClose, onSubmit, onChange, value }) => {
  const { errors } = useHome();

  return (
    <Modal onClose={onClose} showModal={showModal} className="new-todo-modal" title="Add new ToDo">
      <Form onSubmit={onSubmit}>
        <Label label="Enter ToDo text" error={errors.name}>
          <Input onChange={onChange} value={value} name="name" />
        </Label>
        <Button type="submit">Save</Button>
      </Form>
    </Modal>
  );
};

export default NewTodoModal;
