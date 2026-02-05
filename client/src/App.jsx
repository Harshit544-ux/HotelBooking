import './App.css'
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
          <Route path='/' element={<Hero />} />

        </Routes>
      </div>

    </div>
  )
}

export default App
