import { useState } from 'react'
import './App.css'
import Sidebar from './Components/Sidebar'
import Home from './Components/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
   <>
    <Sidebar />
    <div className='body'>
    <Home />
    </div>
   </>
  )
}

export default App
