import './style.scss';

function Modal({ content }) {
  return (
    <div className="modal-wrapper">
      <div className="content">
        {content}
      </div>
    </div>
  );
}

export default Modal;
