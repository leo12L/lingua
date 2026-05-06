import { BrowserRouter, Routes, Route } from 'react-router-dom'
import FirstView from './componets/page/FirstView'
import CreateAccount from './componets/page/CreateAccount'
import Profile from './componets/page/Profile'
import './App.css'


function App() {
 

  return (
    <>
    <BrowserRouter>
      <Routes>
        
        <Route path='/' element={<FirstView/>}/>
        <Route path='/createAccount' element={<CreateAccount/>}/>
        <Route path='/profile' element={<Profile/>}/>
        
      </Routes>
    </BrowserRouter>

    </>
  )
}

export default App
