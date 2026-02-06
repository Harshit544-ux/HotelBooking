import './App.css'
import FeatureDestination from './component/FeatureDestination';
import Hero from './component/Hero';
import Navbar from './component/Navbar'
import { Routes, useLocation ,Route} from 'react-router-dom'



function App() {

  const isOwnerPath = useLocation().pathname.includes('owner');

  return (
    <div>
      {!isOwnerPath && <Navbar />}
   
      <div className='min-h-[70vh]'>
     
        <Routes>
          <Route path='/' element={<><Hero /><FeatureDestination/></>} />

        </Routes>

        
      </div>

    </div>
  )
}

export default App
