import './Login.css'
import { useNavigate } from 'react-router-dom'
import { firebaseAuth, signInWithEmailAndPassword } from '../Components/Firebase'
import { useState } from 'react'

const Login = () => {
    const nav = useNavigate()

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')

    const onChangeEmail = (e) => {
        setEmail(e.target.value)
    }

    const onChnagePassword = (e) => {
        setPassword(e.target.value)
    }

    const onClickSingupButton = () => {
        nav('/Signup')
    }

    const login = async () => {
        try{
            setError('')
            const userInfo = await signInWithEmailAndPassword(firebaseAuth, email, password)
            console.log(userInfo)
            setEmail('')
            setPassword('')
            nav('/enhance')
        } catch (err) {
            switch (err.code) {
                case "auth/invalid-credential":
                    setError("이메일 혹은 아이디를 다시 확인해주세요.");
                    break;
                default:
                    setError("알 수 없는 오류입니다");
            }
        }
    }

    return(
        <div className='Login'>
            <h1>로그인</h1>
            <input
                value={email}
                onChange={onChangeEmail}
                placeholder='아이디를 입력해주세요'
            />
            <input
                type='password'
                value={password}
                onChange={onChnagePassword}
                placeholder='비밀번호를 입력해주세요'
            />
            {error && <p className='error'>{error}</p>}
            <div className='two'>
                <button
                    onClick={login}
                >로그인하기</button>
                <button
                    onClick={onClickSingupButton}
                >회원가입하기</button>
            </div>
        </div>
    )
}

export default Login