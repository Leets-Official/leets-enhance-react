import './ModifyKnife.css'
import Diamond from'./../Assets/Diamond.png'
import Knife from './../Assets/Knife.png'
import Trophy from './../Assets/Trophy.png'
import Card from './../Assets/Card.png'
import Manual from './../Assets/Manual.png'
import DestroyFire from './../Assets/DestroyFire.png'
import WaterDrop from './../Assets/WaterDrop.png'
import X from './../Assets/X.png'
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import React from 'react';

import Modal from 'react-modal'
Modal.setAppElement('#root');

const ModifyKnife = () => {

  const nav = useNavigate();

  let [card, setCard] = useState(3);
  let [level, setLevel] = useState(10);

  const [result, setResult] = useState("");
  const [manualModalIsOpen, setManualModalIsOpen] = useState(false);
  const [enhanceModalIsOpen, setEnhanceModalIsOpen] = useState(false);
  const [cardModalISOpen, setCardModalIsOpen] = useState(false);
  const [resultModalIsOpen, setResultModalIsOpen] = useState(false);

  const onClickRanking = () =>{
    nav('/enhance');
  }
  
  const openManualModal = () => {
    setManualModalIsOpen(true);
  }
  const closeManualModal = () => {
    setManualModalIsOpen(false);
  }
  const openEnhanceModal = () => {
    setEnhanceModalIsOpen(true);
  }
  const closeEnhanceModal = () => {
    setEnhanceModalIsOpen(false);
  }
  const openCardModal = () => {
    setCardModalIsOpen(true);
  }
  const closeCardModal = () => {
    setCardModalIsOpen(false);
  }
  const openResultModal = () => {
    setResultModalIsOpen(true);
  }
  const closeResultModal = () => {
    setResultModalIsOpen(false);
  }

  return (
    <div className='modifyKnife'>
      <div className='top'>
        <div className='manualItem'>
          <div
          className='manual'
          onClick={openManualModal}
          >
          <img src={Manual} alt="manual" />
          설명서
          </div>
        </div>

        <div className='info'>
          <h2>박보검</h2>
          <h2>Lv.{level}</h2>
        </div>

        <div className='menu-prob'>
          <div
          className='card'
          >
          <img src={Card} alt="card" />
          확률 증가권 : {card}개 남음
          </div>
        </div>
      </div>

      <div className='knife'>
        <img src={Knife} alt="knife" />
      </div>

      <div className='bottom'>
        <div className='menu-rank'>
          <div
          className='menu-item'
          onClick={onClickRanking}
          >
          <img src={Trophy} alt="trophy" />
          명예의 전당 가기
          </div>
        </div>

        <button
          className='enhanceButton'
          onClick={openEnhanceModal}
          >
          강화하기
        </button>
      </div>

      <Modal
        className='manualModal'
        isOpen={manualModalIsOpen}
        onRequestClose={closeManualModal}
        contentLabel='instruction'
      >
        
        <p className='instruction'>
          확률 증가권(사용시 확률 10% 증가)은 계정당 3개 주어집니다.<br/>
          강화 단계에 따른 강화 확률이 보여집니다.<br/>
          <br/>
          💪🏻강화 확률<br/>
          90% → 80% → 70% → 50% → 30% → 10% → 3%<br/>
          7번 성공 이후에는 3%로 고정됩니다<br/>
            <br/>
          🔥파괴 확률<br/>
          3강 이전 5%<br/>
          4강 이후부터 5%씩 증가,<br/>
          예) 4강 10%, 15%....<br/>
          최대 50%까지 증가합니다<br/>
          <br/>
          파괴되지 않을 경우 한 단계 하강<br/>
          파괴될 경우 Lv.0으로 하강
        </p>
      </Modal>

      <Modal
        className='modal-enhance'
        isOpen={enhanceModalIsOpen}
        onRequestClose={closeEnhanceModal}
        contentLabel='enhance'
      >
        <h3 className='realQuestion'>정말 강화하시겠습니까?<br/><br/><br/></h3>
        <div className='button'>
          <button
            onClick={() => {
              closeEnhanceModal();
              openCardModal();
            }}
          >예</button>
          <button
            onClick={closeEnhanceModal}
          >아니요</button>
        </div>
      </Modal>

      <Modal
        className='modal-enhance'
        isOpen={cardModalISOpen}
        onRequestClose={closeCardModal}
        contentLabel='card'
      >
        <h3>확률 증가권을 사용하시겠습니까?</h3>
        사용시 자동으로 즉시 강화하기가 실행 됩니다<br/>
        사용시 강화 성공 확률은 13%입니다<br/><br/><br/>
        <div className='button'>
          <button
            onClick={()=>{
              closeCardModal();
              openResultModal();
              setCard(prev => prev-1);
            }}
          >예</button>
          <button
            onClick={()=>{
              closeCardModal();
              openResultModal();
            }}
          >아니요</button>
        </div>
      </Modal>

      <Modal
        isOpen={resultModalIsOpen}
        onRequestClose={closeResultModal}
        contentLabel='result'
      >
        <img className='x' onClick={closeResultModal} src={X} alt="x" />
        {result}
      </Modal>
    </div>
  )
}

export default ModifyKnife;