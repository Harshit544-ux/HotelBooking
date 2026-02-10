import './App.css'
import Navbar from './component/Navbar'
import { Routes, useLocation ,Route} from 'react-router-dom'
import Home from './pages/Home';
import Footer from './component/Footer';
import AllRooms from './pages/AllRooms';
import RoomDetails from './pages/RoomDetails';
import MyBookings from './pages/MyBookings';
import HotelReg from './component/HotelReg';
import Layout from './pages/hotelOwner/Layout';

function App() {
  const isOwnerPath = useLocation().pathname.includes('owner');

  return (
    <div>
      {/* navbar */}
      {!isOwnerPath && <Navbar />}
      {false && <HotelReg/>}
     {/*  main content page */}
      <div className='min-h-[70vh]'>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/rooms' element={<AllRooms/>} />
          <Route path='/rooms/:id' element={<RoomDetails/>} />
          <Route path='/my-bookings' element={<MyBookings/>} />
          <Route path='/owner' element={<Layout/>} /> 
        </Routes>
      </div>

      {/* footer */}
        <Footer/>

    </div>
  )
}      

export default App
