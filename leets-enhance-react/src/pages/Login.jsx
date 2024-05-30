import './Login.css';
import { useContext, useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import {authService} from '../../firebase'
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../App';


const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const { setIsLogin } = useContext(UserContext);
  
  
  const navigate = useNavigate();

  const login = async () => {
    try {
      await signInWithEmailAndPassword(authService, email, password);
      // 로그인 성공 시 홈으로 이동
      alert("로그인 성공!");
      setIsLogin(true);
      navigate('/'); 
    } catch (err) {
      console.error(err);
      if (err.code === 'auth/user-not-found') {
        setError('아이디가 존재하지 않습니다.');
      } else if (err.code === 'auth/wrong-password') {
        setError('비밀번호가 일치하지 않습니다.');
      } else {
        setError('아이디가 존재하지 않습니다.');
      }
    }
  };

  const onChange = (e) => {
    const { name, value } = e.target;
    if (name === 'email') setEmail(value);
    else setPassword(value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    login();
  };

  return (
    <div className="Login">
      <h3>✨로그인✨</h3>
      <form className="LoginForm" onSubmit={onSubmit}>
        <label>ID</label>
        <input
          className="ID"
          name="email"
          placeholder="이메일을 입력해 주세요"
          type="text"
          required
          value={email}
          onChange={onChange}
        />
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
        <div className='button-wrapper'>
          <button className="LoginBtn" type="submit">로그인</button>
          <button
            className="RegisterBtn"
            onClick={() => navigate('/register')}>
            회원가입
          </button>
        </div>
      </form>
      {error && <p className="error">{error}</p>}
    </div>
  );
};

export default Login;
