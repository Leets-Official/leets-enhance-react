import './ImageModal.css'

const ImageModal = (props) => {
  const { text, image, open, close } = props;

  return (
    <div className={open ? "openModal modal" : "modal"}>
      {open ? (
        <section>
          <div className="img-modal-content">
          <button className="close" onClick={close}>&times;</button>
            
            <h2>{text}</h2>
            <div className="modal-image">
              <img src={image} alt="Modal Content"/>
            </div>
          </div>
        </section>
      ) : null}
    </div>
  );
}

export default ImageModal;
