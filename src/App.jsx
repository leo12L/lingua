import { BrowserRouter, Routes, Route } from 'react-router-dom'
import FirstPage from './componets/page/FirstPage'
import Banner from './componets/organis/Banner'
import About from './componets/page/About'
import Login from './componets/page/Login'
import NewAccount from './componets/page/NewAccount'

import './App.css'



function App() {
 

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<FirstPage/>}/>
        <Route path='/about' element={<About/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/newaccount' element={<NewAccount/>}/>
      </Routes>
    </BrowserRouter>

    </>
  )
}

export default App
