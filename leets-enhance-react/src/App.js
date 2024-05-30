import './App.css';
import Login from './Pages/Login';
import Signup from './Pages/Signup';
import Home from './Pages/Home';
import Enhance from './Pages/Enhance'
import MakeKnife from './Pages/MakeKnife'
import ModifyKnife from './Pages/ModifyKnife';
import {Routes, Route} from 'react-router-dom'
import { createContext, useState } from 'react';

export const LoginContext = createContext()

function App() {
  const [name, setName ] = useState('')
  
  const onCreateEmail = (email) => {
    const newEmail = email;
  }

  const onCreatePassword = (password) => {
    const newPassword = password
  }

  const onCreateConfirmPassword = (confirmPassword) => {
    const newConfirmPassword = confirmPassword
  }

  const onCreateName = (name) => {
    setName(name)
  }
  
  return(
    <div className='App'>
      <LoginContext.Provider value={{onCreateEmail, onCreatePassword, onCreateConfirmPassword, onCreateName}}>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/signup' element={<Signup/>}/>
          <Route path='/home' element={<Home/>}/>
          <Route path='/enhance' element={<Enhance/>}/>
          <Route path='/makeKnife' element={<MakeKnife/>}/>
          <Route path='/modifyKnife' element={<ModifyKnife/>}/>
        </Routes>
      </LoginContext.Provider>
    </div>
  )
}

export default App;
