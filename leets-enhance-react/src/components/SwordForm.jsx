import './SwordForm.css';
import { getImage } from '../util/get-image';

const SwordForm = ({swordName, level, userName}) =>{
    return (
        <div className='sword-form'>
            <img src={getImage('sword')}></img>
            <div className='sword-wrapper'>
                <div>{swordName}</div>
                <div>Lv.{level}</div>
            </div>
            <div className='level-box'></div>
            <div>{userName}</div>
        </div>
    );
};

export default SwordForm;
