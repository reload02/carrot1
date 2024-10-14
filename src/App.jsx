import './App.css'
import Home from './pages/Home'
import Chatting from './pages/Chatting'
import CityLife from './pages/CityLife'
import CityMap from './pages/CityMap'
import EditContent from './pages/EditContent'
import MyInfo from './pages/MyInfo'
import NewContent from './pages/NewContent'
import { Route, Routes } from 'react-router-dom'
import Header from './component/Header'
import Footer from './component/Footer'



function App() {

  return (
   <div className='App'>
      <Header/>
    <Routes>
      <Route path = "/" element={<Home/>}/>
      <Route path = "/chatting" element={<Chatting/>}/>
      <Route path = "/citylife" element={<CityLife/>}/>
      <Route path = "/citymap" element={<CityMap/>}/>
      <Route path = "/editcontent" element={<EditContent/>}/>
      <Route path = "/myinfo" element={<MyInfo/>}/>
      <Route path = "/newcontent" element={<NewContent/>}/>
    </Routes>
    <Footer className="Footer"/>
    </div>
    
  )
}

export default App
