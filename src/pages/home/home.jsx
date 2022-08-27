import React from 'react'
import Sidebar from '../../components//SideBar/Sidebar'
import Navbar from '../../components/NavBar/Navbar'
import Main from '../../components/Main/Main'
import "./home.css";
function Home() {
  return (
    <div className='Main'>
      <div className='Side'><Sidebar/></div>
    
    <div className='container'>
        <Navbar/>
        <Main/>
    </div>
    </div>
  )
}

export default Home