import ReactDOM from 'react-dom';
import { FC, MouseEvent } from 'react';

interface IModalProps {
  showModal: boolean;
  onClose: (e: MouseEvent<HTMLElement>) => void;
}

const Modal: FC<IModalProps> = ({ showModal, onClose }) => {
  if (!showModal) return null;

  return ReactDOM.createPortal(
    <div className="modal" onClick={onClose}>
      <div className="modal__container">
        <h5 className="modal__title">New ToDo</h5>
      </div>
    </div>,
    document.body
  );
};

export default Modal;
