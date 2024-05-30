import './Enforce.css';
import { getImage } from '../util/get-image';
import { useState, useContext, useEffect } from 'react';
import Button from '../components/Button';
import { UserContext } from '../App';
import { useNavigate } from 'react-router-dom';
import TextModal from '../modals/TextModal';
import ImageModal from '../modals/ImageModal';
import CardModal from '../modals/CardModal';
import ColorModal from '../modals/ColorModal';

const Enforce = () => {
  const navigate = useNavigate();
  const swordName = localStorage.getItem('sword')
  const [level, setLevel] = useState(1);
  const [card, setCard] = useState(3); 
  const [textModalOpen, setTextModalOpen] = useState(false);
  const [imageModalOpen, setImageModalOpen] = useState(false);
  const [cardModalOpen, setCardModalOpen] = useState(false);
  const [colorModalOpen, setColorModalOpen] = useState(false);
  const [modalImage, setModalImage] = useState('');
  const [imageText, setImageText] = useState('');

  const successRates = [90, 80, 70, 50, 30, 10, 3];
  const destroyRates = [0, 0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50];
  
  const getSuccessRate = (level) => {
    return level < successRates.length ? successRates[level - 1] : 3;
  }

  const getDestroyRate = (level) => {
    return level < destroyRates.length ? destroyRates[level - 1] : 50;
  }

  const openCardModal = () => {
    if (card > 0) {
        setCardModalOpen(true);
    } else {
        alert("카드를 다 사용했습니다!");
    }
  }

  const openTextModal = () => setTextModalOpen(true); 
  const closeTextModal = () => setTextModalOpen(false);

  const openImageModal = () => setImageModalOpen(true);
  const closeImageModal = () => setImageModalOpen(false);

  const closeCardModal = () => setCardModalOpen(false);

  const openColorModal = () => setColorModalOpen(true); 
  const closeColorModal = () => setColorModalOpen(false);

  const enforceAction = () => {
    const successRate = getSuccessRate(level);
    const destroyRate = getDestroyRate(level);
    
    const randomNum = Math.random() * 100;

    if (randomNum < successRate) {
      // 성공
      setLevel(prevLevel => (prevLevel < 10 ? prevLevel + 1 : prevLevel));
      setImageText('강화 성공!');
      setModalImage(getImage('diamond'));
    } else if (randomNum > successRate && randomNum < successRate + destroyRate) {
      // 파괴
      setLevel(0);
      setImageText('파괴 되었습니다!');
      setModalImage(getImage('bluefire'));
    } else {
      // 실패
      setLevel(prevLevel => (prevLevel > 0 ? prevLevel - 1 : prevLevel));
      setImageText('강화 실패!');
      setModalImage(getImage('dropwater'));
    }
    
    closeTextModal();
    openImageModal();
  };

  const cardAction = () => {
    alert("강화 확률 증가!");
    setCard(prevCard => prevCard - 1); 
    closeCardModal();
  }

  return (
    <div className="enforce">
      <div className='top'>
        <div className='info' onClick={openColorModal}>
          <img src={getImage('letter')} alt="letter"/>
          설명서
        </div>
        <div className='sword-info'>
          <p>{swordName} <br/> Lv. {level}</p>
        </div>
        <div className='card' onClick={openCardModal}>
          <img src={getImage('card')} alt="card"/>
          확률 증가권 : <br/>{card}개
        </div>
      </div>
      <div className='sword'>
        <img src={getImage('sword')} alt="sword"/>
      </div>
      <div onClick={() => navigate('/')} className='hof'>
        <img src={getImage('trophy')} alt="trophy"/>
        명예의 전당 가기
      </div>
      <Button className='enforceBtn' text={"강화하기"} onClick={openTextModal} />
      <TextModal open={textModalOpen} close={closeTextModal} onConfirm={enforceAction} />
      <ImageModal text={imageText} image={modalImage} open={imageModalOpen} close={closeImageModal} />
      <CardModal open={cardModalOpen} close={closeCardModal} onConfirm={cardAction} />
      <ColorModal open={colorModalOpen} close={closeColorModal} />

    </div>
  );
}

export default Enforce;
