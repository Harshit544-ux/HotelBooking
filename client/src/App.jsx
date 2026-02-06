import './App.css'
import Navbar from './component/Navbar'
import { Routes, useLocation ,Route} from 'react-router-dom'
import Home from './pages/Home';


function App() {

  const isOwnerPath = useLocation().pathname.includes('owner');

  return (
    <div>
      {!isOwnerPath && <Navbar />}
   
      <div className='min-h-[70vh]'>
     
        <Routes>
          <Route path='/' element={<Home/>} />

        </Routes>

        
      </div>

    </div>
  )
}

export default App
