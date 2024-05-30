import './Signup.css'
import { firebaseAuth, createUserWithEmailAndPassword, fetchSignInMethodsForEmail } from '../Components/Firebase'
import { useNavigate } from 'react-router-dom'
import { useContext, useState } from 'react'
import { LoginContext } from '../App'

const Signup = () => {
    const { onCreateEmail, onCreatePassword, onCreateConfirmPassword, onCreateName } = useContext(LoginContext)
    const nav = useNavigate()

    const [error, setError] = useState('')
    const [emailError, setEmailError] = useState('')
    const [email, setEmail] = useState('')
    const [name, setName] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

    const onChangeEmail = (e) => {
        setEmail(e.target.value)
    }

    const onChnagePassword = (e) => {
        setPassword(e.target.value)
    }

    const onChangeConfirmPassword = (e) => {
        setConfirmPassword(e.target.value)
    }

    const onChangeName = (e) => {
        setName(e.target.value)
    }

    const signup = async() => {
        try {
            setError('')
            const result = await createUserWithEmailAndPassword( firebaseAuth, email, password )
            console.log(result)
            onCreateEmail(email)
            onCreatePassword(password)
            onCreateConfirmPassword(confirmPassword)
            onCreateName(name)

            setEmail('')
            setPassword('')
            alert('회원가입이 완료되었습니다.')
            nav('/login')
        } catch (err) {
            switch (err.code){
                case 'auth/weak-password':
                    setError('비밀번호는 6자리 이상이어야 합니다.');
                    break;
                case 'auth/invalid-email':
                    setError('잘못된 이메일 주소입니다');
                    break;
                case 'auth/wrong-password':
                    setError('비밀번호가 일치하지 않습니다!');
                    break;
                case 'email-already-in-use':
                    setError('이미 사용중인 이메일 입니다.')
                    break;
                case 'auth/internal-error':
                    setError('잘못된 요청입니다');
                    break;
                case 'auth/network-request-failed':
                    setError('네트워크 요청을 실패했습니다');
                    break;
                default:
                    setError('회원가입 중 오류가 발생하였습니다.');
            }
        }
    }

    // const emailCheck = async() => {
    //     try {
    //         await createUserWithEmailAndPassword(firebaseAuth, email, 'asdfasdfasdfasd')
    //         setEmailError('사용 가능한 이메일입니다!')
    //     } catch (err) {
    //         switch (error.code){
    //             case 'auth/invalid-email':
    //                 setEmailError('잘못된 이메일 주소입니다');
    //                 break;
    //            case 'email-already-in-use':
    //                 setEmailError('이미 사용중인 이메일 입니다.')
    //                 break;
    //             default:
    //                 setEmailError('사용할 수 없는 이메일입니다.');            
    //     }
    //     }
    // }

    const onSubmit = async (e) => {
        if(password === confirmPassword){
            await signup()
        } else {
            setError('비밀번호가 일치하지 않습니다.')
        }
    }

    const onCheck = async() => {
        setEmailError('')
        const signInMethods = await fetchSignInMethodsForEmail(firebaseAuth, email)
        if (signInMethods > 0){
            setEmailError('이미 가입되어 있는 계정입니다.')
        } else {
            setEmailError('사용 가능한 이메일입니다.')
        }
    }

    return(
        <div className='Signup'>
            <h1>회원가입</h1>
            <div className='email'>
                <input
                    value={email}
                    onChange={onChangeEmail}
                    placeholder='이메일을 입력해주세요'
                />
                <button
                    className='emailButton'
                    onClick={onCheck}
                >
                    이메일 확인
                </button>
            </div>
            {emailError && <p className='emailError'>{emailError}</p>}
            <div className='remain'>
                <input
                    value={name}
                    onChange={onChangeName}
                    placeholder='이름을 입력해주세요'
                />
                <input 
                    type='password'
                    value={password}
                    onChange={onChnagePassword}
                    placeholder='비밀번호를 입력해주세요'
                />
                <input
                    type='password'
                    value={confirmPassword}
                    onChange={onChangeConfirmPassword}
                    placeholder='비밀번호를 한 번 더 입력해주세요'
                />
                {error && <p className='error'>{error}</p>}
                <button
                    onClick={onSubmit}>
                    회원가입
                </button>
            </div>
        </div>
    )
}

export default Signup