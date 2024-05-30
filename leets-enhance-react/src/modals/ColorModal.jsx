import './ColorModal.css'

const ColorModal = (props) => {
    const { open, close, onConfirm } = props;
  
    return (
      <div className={open ? "openModal modal" : "modal"}>
        {open ? (
          <section>
            <div className="color-modal-content">
            <button className="closeBtn" onClick={close}>
              &times;
            </button>
              <div className='enhance-info'>
                <h3>💪🏻 강화 확률</h3>
                <p>90% → 80% → 70% → 50% → 30% → 10% → 3%</p>
                <p>7번 성공 이후에는 3%로 고정됩니다</p>
                <h3>🔥 파괴 확률</h3>
                <p>3강 이전 5%</p>
                <p>4강 이후부터 5%씩 증가, 최대 50%까지 증가합니다</p>
                <p>예&#41; 4강 10%, 5강 15%, ...</p>
                <p>파괴되지 않을 경우 한 단계 하강</p>
                <p>파괴될 경우 Lv.0으로 하강</p>
            </div>
            </div>
          </section>
        ) : null}
      </div>
    );
  }
  
  export default ColorModal;