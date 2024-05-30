import './Hof.css';
import Button from '../components/Button';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../App';
import { useContext } from 'react';
import SwordForm from '../components/SwordForm';
import { getImage } from '../util/get-image';

const Hof = () => {
    const { isLogin } = useContext(UserContext);
    const navigate = useNavigate();
    const { swordName } = useContext(UserContext);
    const userName = localStorage.getItem("name");

    return (
        <div className='hof'>
            <h2>명예의 전당</h2>
            <div className='btn-wrapper'>
                {isLogin ? (
                    <div onClick={() => navigate('/sword')} className='enforceBtn'>
                        <img src={getImage('fire')} alt="강화하러 가기" />
                        강화하러 가기
                    </div>
                ) : (
                    <Button onClick={() => navigate('/Login')} text={'로그인'} className='loginBtn' />
                )}
            </div>
            <div className='medal-wrapper'>
                <div className='silver'>
                    <img src={getImage('silver')} alt="silver medal" />
                    <SwordForm swordName={'최강검검'} level={9} userName={'양이양'} />
                </div>
                <div className='gold'>
                    <img src={getImage('gold')} alt="gold medal" />
                    <SwordForm swordName={'최강검검'} level={9} userName={'양이양'} />
                </div>
                <div className='bronze'>
                    <img src={getImage('bronze')} alt="bronze medal" />
                    <SwordForm swordName={'최강검검'} level={9} userName={'양이양'} />
                </div>
            </div>
            <div className='others'>
                <SwordForm swordName={'최강검검'} level={9} userName={'양이양'} />
                <SwordForm swordName={'최강검검'} level={9} userName={'양이양'} />
                <SwordForm swordName={'최강검검'} level={9} userName={'양이양'} />
                <SwordForm swordName={'최강검검'} level={9} userName={'양이양'} />
                <SwordForm swordName={'최강검검'} level={9} userName={'양이양'} />
            </div>
        </div>
    );
}

export default Hof;
