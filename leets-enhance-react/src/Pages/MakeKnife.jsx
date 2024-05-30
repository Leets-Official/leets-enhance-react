import './MakeKnife.css'
import Knife from './../Assets/Knife.png'
import GraySmallBox from './../Assets/GraySmallBox.png'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const MakeKnife = () => {
    const nav = useNavigate('')

    const [myKnife, setMyKnife] = useState('')

    const onChangeKnife = (e) => {
        setMyKnife(e.target.value)
    }

    const buildName = () => {
        nav('/modifyKnife')
    }

    return(
        <div className='MakeKnife'>
            <h1 className='write'>검의 이름을 입력해주세요</h1>
            <img 
                className = 'knife'
                src={Knife} alt='knife'
            />
            <input 
                className='example'
                placeholder='ex) 박보검'
                onChange={onChangeKnife}
            />
            <img 
                className='graySmallBox'
                src={GraySmallBox} alt='graySmallBox'
            />
            <button
                className='buildName'
                onClick={buildName}
            >
                이름 짓기
            </button>
        </div>
    )
}

export default MakeKnife