import './Home.css'
import Gold from './../Assets/Gold.png'
import Bronze from './../Assets/Bronze.png'
import Silver from './../Assets/Silver.png'
import Knife from './../Assets/Knife.png'
import Blue from './../Assets/Blue.png'
import { useNavigate } from 'react-router-dom'

const Home = () => {
    const nav = useNavigate('')

    const change = () => {
        nav('/login')
    }

    return(
        <div className='home'>
            <div className='top'>
                <h1
                    className='button'
                    onClick={change}
                >로그인하기 버튼</h1>
                <h1 className='honor'>명예의 전당</h1>
            </div>
            <div className='Three'>
                <div className='silver'>
                    <img src = {Silver} alt='silver'/>
                    <img src = {Knife} alt='knife'/>
                    <p className='secondKnife'>두번째검 Lv.9</p>
                    <img src = {Blue} alt ='blue'/>
                    <p className='secondKnifeName'>안세영</p>
                </div>
                <div className='gold'>
                <img src = {Gold} alt='gold'/>
                <img src = {Knife} alt='knife'/>
                <p className='hyewon'>혜워니검 Lv.10</p>
                <img src = {Blue} alt ='blue'/>
                <p className='hyewonName'>조혜원</p>
                </div>
                <div className='bronze'>
                    <img src = {Bronze} alt='bronze'/>
                    <img src = {Knife} alt='knife'/>
                    <p className='myFirstKnife'>내가일등검 Lv.8</p>
                    <img src = {Blue} alt ='blue'/>
                    <p className='myFirstKnifeName'>박승준</p>
                </div>
            </div>
            <div className='all'>
                <div className='first'>
                    <img src = {Knife} alt='knife'/>
                    <p className='load'>짐의 검 Lv.7</p>
                    <img src = {Blue} alt='blue'/>
                    <p className='loadName'>김지원</p>
                </div>
                <div className='two'>
                    <img src = {Knife} alt='knife'/>
                    <p className='balloon'>풍선검 Lv.7</p>
                    <img src = {Blue} alt='blue'/>
                    <p className='balloonName'>조예진</p>
                </div>
                <div className='three'>
                    <img src = {Knife} alt='knife'/>
                    <p className='tree'>나무검 Lv.7</p>
                    <img src = {Blue} alt='blue'/>
                    <p className='treeName'>이강혁</p>
                </div>
                <div className='four'>
                    <img src = {Knife} alt='knife'/>
                    <p className='minho'>당검 Lv.6</p>
                    <img src = {Blue} alt='blue'/>
                    <p className='minhoName'>장민호</p>
                </div>
                <div className='five'>
                    <img src = {Knife} alt='knife'/>
                    <p className='fiveKnife'>박보검 Lv.3</p>
                    <img src = {Blue} alt='blue'/>
                    <p className='fiveKnifeName'>계다현</p>
                </div>
                <div className='six'>
                    <img src = {Knife} alt='knife'/>
                    <p className='silverKnife'>은검 Lv.2</p>
                    <img src = {Blue} alt='blue'/>
                    <p className='silverKnifeName'>양혜원</p>
                </div>
                <div className='seven'>
                    <img src = {Knife} alt='knife'/>
                    <p className='mefirst'>나일등검 Lv.2</p>
                    <img src = {Blue} alt='blue'/>
                    <p className='mefirstName'>전시현</p>
                </div>
            </div>
            
        </div>
    )
}

export default Home