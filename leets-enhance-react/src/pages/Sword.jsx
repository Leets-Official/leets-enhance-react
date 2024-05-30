import './Sword.css';
import { getImage } from '../util/get-image';
import { useState, useContext } from 'react';
import { UserContext } from '../App';
import { useNavigate } from 'react-router-dom';
import Button from '../components/Button';

const Sword = () => {
    const { swordName, setSwordName } = useContext(UserContext);
    const [userSword, setUserSword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleInputChange = (e) => {
        const value = e.target.value;
        if (value.length <= 5) {
            setUserSword(value);
            localStorage.setItem('sword', value);
            setError('');
        } else {
            setError('검의 이름은 최대 5글자까지 입력 가능합니다.');
        }
    };

    return (
        <div className='sword-input'>
            <h2>검의 이름을 입력해 주세요</h2>
            <img src={getImage('sword')} alt="sword" />
            <input 
                placeholder='ex)박보검' 
                value={userSword} 
                onChange={handleInputChange} 
            />
            {error && <p className='error'>{error}</p>}
            <Button onClick={() => navigate('/enforce')} text={"이름 짓기"} />
        </div>
    );
};

export default Sword;
