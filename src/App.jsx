import './App.css'
import { Register ,Home ,Dashboard} from './components'
import { useState } from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom';

const App = () => {
  const [userConnected, setUserConnected] = useState(true)

  return (
    <div>
      {userConnected ? 
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} >
            <Route index element={<Dashboard/>} />
          </Route>
        </Routes>
      </BrowserRouter>  
       : <Register setUserConnected = {setUserConnected}/> }
    </div>
  )
}

export default App