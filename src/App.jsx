import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import './App.css'
import SideBar from './Component/SideBar'
import Exchange from './Pages/Exchange'
import Home from './Pages/Home'
import News from './Pages/News'
import Crypto from './Pages/Crypto'

function App() {

  return (
    <>
    <SideBar/>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/crypto' element={<Crypto/>}/>
      <Route path='/exchange' element={<Exchange/>}/>
      <Route path='/news' element={<News/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
