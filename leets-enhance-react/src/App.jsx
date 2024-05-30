
import './App.css'
import { Route, Routes, Link, useNavigate } from 'react-router-dom'
import Login from './pages/Login'
import Register from './pages/Register'
import NotFound from './pages/NotFound'
import Hof from './pages/Hof'
import Enforce from './pages/Enforce'
import Sword from './pages/Sword'

import { useState, createContext } from 'react'


export const UserContext = createContext();

function App() {

  const [swordName,setSwrodName] = useState('');
  const [isEnforce,setIsEnforce] = useState(false);
  const [isLogin, setIsLogin] = useState(false);


  return (
    <>
    <UserContext.Provider value={{swordName, setSwrodName, isEnforce, setIsEnforce, isLogin, setIsLogin}}>
      
      <Routes>
        <Route path='/' element={<Hof/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/enforce' element={<Enforce/>}/>
        <Route path='/sword' element={<Sword/>}/>
        <Route path='*' element={<NotFound/>}/>
      </Routes>
    </UserContext.Provider>   
   </>
  )
}

export default App
