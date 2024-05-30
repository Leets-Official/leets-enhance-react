import './Register.css';
import { useState, useContext} from 'react';
import { createUserWithEmailAndPassword } from "firebase/auth"; // firebase/auth에서 createUserWithEmailAndPassword 함수 가져오기
import { authService } from '../../firebase'; // authService 가져오기
import { useNavigate } from 'react-router-dom';

const Register = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState(''); // confirmPassword 상태 추가
    const [name, setUserName] = useState('');
    const [part, setUserPart] = useState('');
    const [error, setError] = useState('');



    const navigate = useNavigate();

    const signup = async () => {
        try {
            await createUserWithEmailAndPassword(authService, email, password);
            setError(''); // 에러 초기화

            // 이름과 파트를 localStorage에 저장
            localStorage.setItem('name', name);
            localStorage.setItem('part', part);

            // 회원가입 성공 시 로그인 페이지로 이동
            alert("회원가입 성공!");
            navigate('/');
        } catch (err) {
            if(err.code==='auth/invalid-email'){
                setError("잘못된 이메일 주소 입니다.")
            }else if(err.code==='auth/weak-password'){
                setError("비밀 번호는 6자리 이상이어야 합니다.")
            }else if(err.code==='email-already-in-use'){
                setError("이미 사용중인 이메일 입니다.")
            }
            setError('회원가입 중 오류가 발생했습니다.');
            console.error(err);
        }
    }

    const onChange = (e) => {
        const { name, value } = e.target;
        if (name === 'email') setEmail(value);
        else if (name === 'password') setPassword(value);
        else if (name === 'confirmPassword') setConfirmPassword(value); // confirmPassword 값 설정
        else if (name === 'name') setUserName(value);
        else if (name === 'part') setUserPart(value);
    };

    const onSubmit = (e) => {
        e.preventDefault();
        // 패스워드와 패스워드 확인이 일치하는지 확인
        if (password !== confirmPassword) {
            setError('비밀번호와 비밀번호 확인이 일치하지 않습니다.');
            return;
        }
        signup();
    };

    return (
        <div className="Register">
            <h3>✨회원가입✨</h3>
            <form className="RegisterForm" onSubmit={onSubmit}>
                <label>ID</label>
                <div>
                    <input
                        className="ID"
                        name="email"
                        placeholder="아이디를 입력해 주세요"
                        type="email"
                        required
                        value={email}
                        onChange={onChange}
                    />
                    <button type="button" className='IdVaildBtn'>아이디 확인</button>
                </div>
                <p className='IdVaildMsg'></p>
                <label>PASSWORD</label>
                <input
                    className="PW"
                    name="password"
                    placeholder="비밀번호를 입력해 주세요"
                    type="password"
                    required
                    value={password}
                    onChange={onChange}
                />
                <input
                    className="PW"
                    name="confirmPassword"
                    placeholder="비밀번호를 한 번 더 입력해 주세요"
                    type="password"
                    required
                    value={confirmPassword}
                    onChange={onChange}
                />
                <p className='PwVaildMsg'></p>
                <label>INFO</label>
                <div>
                    <input
                        className="Name"
                        name="name"
                        placeholder="이름을 입력해 주세요"
                        required
                        value={name}
                        onChange={onChange}
                    />
                    <input
                        className="Part"
                        name="part"
                        placeholder="파트를 입력해 주세요"
                        required
                        value={part}
                        onChange={onChange}
                    />
                </div>
                {error && <p className="error">{error}</p>}
                <button className="RegisterBtn" type="submit" >회원가입</button>
            </form>
        </div>
    );
}

export default Register;
