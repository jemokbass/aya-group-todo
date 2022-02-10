import { FC, MouseEvent, FormEventHandler, ChangeEvent } from 'react';
import Button from '../../../components/UI/Button/Button';
import Form from '../../../components/UI/Form/Form';
import Input from '../../../components/UI/Input/Input';
import Label from '../../../components/UI/Label/Label';
import Modal from '../../../components/UI/Modal/Modal';

interface INewTodoModalProps {
  showModal: boolean;
  onClose: (e: MouseEvent<HTMLElement>) => void;
  onSubmit: FormEventHandler<HTMLFormElement>;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  value: string;
  label: string;
  inputName: string;
  errors: { [key: string]: string };
}

const NewTodoModal: FC<INewTodoModalProps> = ({
  showModal,
  onClose,
  onSubmit,
  onChange,
  value,
  label,
  inputName,
  errors,
}) => {
  return (
    <Modal onClose={onClose} showModal={showModal} className="new-todo-modal" title="Add new ToDo">
      <Form onSubmit={onSubmit}>
        <Label label={label} error={errors.name || errors.group}>
          <Input onChange={onChange} value={value} name={inputName} />
        </Label>
        <Button type="submit">Save</Button>
      </Form>
    </Modal>
  );
};

export default NewTodoModal;
