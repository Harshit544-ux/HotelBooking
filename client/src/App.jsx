import './App.css'
import Navbar from './component/Navbar'
import { Routes, useLocation ,Route} from 'react-router-dom'
import Home from './pages/Home';
import Footer from './component/Footer';


function App() {

  const isOwnerPath = useLocation().pathname.includes('owner');

  return (
    <div>
      {/* navbar */}
      {!isOwnerPath && <Navbar />}
    
     {/*  main content page */}
      <div className='min-h-[70vh]'>
        <Routes>
          <Route path='/' element={<Home/>} />
        </Routes>
      </div>

      {/* footer */}
    <Footer/>

    </div>
  )
}

export default App
