import { BrowserRouter, Routes, Route } from 'react-router-dom'
import FirstPage from './componets/page/FirstPage'
import Banner from './componets/organis/Banner'
import About from './componets/page/About'


import './App.css'


function App() {
 

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<FirstPage/>}/>
        <Route path='/about' element={<About/>} />
      </Routes>
    </BrowserRouter>

    </>
  )
}

export default App
