import React from 'react'
import './Home.css'
import { Navbar } from '../index'
import { Outlet} from "react-router-dom";

const Home = () => {
  return (
    <div className='home'>
        <Navbar />
        <Outlet />
    </div>
  )
}

export default Home