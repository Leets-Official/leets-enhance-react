
import './CardModal.css';

const CardModal = (props) => {
  const { open, close, onConfirm } = props;

  return (
    <div className={open ? "openModal modal" : "modal"}>
      {open ? (
        <section>
          <div className="card-modal-content">
          <button className="closeBtn" onClick={close}>&times;</button>
            <h2>확률 증가권을 사용하시겠습니까?</h2>
            <div className='text'> 사용시 자동으로 즉시 강화하기가 실행 됩니다.<br/>
사용시 강화 성공 확률은 13%입니다.</div>
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

export default CardModal;