
import './TextModal.css';

const TextModal = (props) => {
  const { open, close, onConfirm } = props;

  return (
    <div className={open ? "openModal modal" : "modal"}>
      {open ? (
        <section>
          <div className="modal-content">
            <h2>정말 강화하시겠습니까?</h2>
            <div className="modal-buttons">
              <button onClick={onConfirm}>예</button>
              <button onClick={close}>아니오</button>
            </div>
          </div>
        </section>
      ) : null}
    </div>
  );
}

export default TextModal;