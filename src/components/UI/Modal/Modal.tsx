import ReactDOM from 'react-dom';
import { FC, MouseEvent } from 'react';

interface IModalProps {
  showModal: boolean;
  onClose: (e: MouseEvent<HTMLElement>) => void;
  title: string;
  className?: string;
}

const Modal: FC<IModalProps> = ({ showModal, onClose, title, children, className }) => {
  if (!showModal) return null;

  return ReactDOM.createPortal(
    <div className={`modal${className ? ` ${className}` : ''}`} onClick={onClose}>
      <div className="modal__container">
        <h5 className="modal__title">{title}</h5>
        {children}
      </div>
    </div>,
    document.body
  );
};

export default Modal;
