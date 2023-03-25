import React from 'react'
import Navbar from '../Components/Navbar'
import Sidebar from '../Components/Sidebar'
import { useState,useEffect } from 'react'
import VideolistHome from '../Components/VideolistHome'
import UserInfo from '../Components/UserInfo'

function Home() {
    const [togglebar, setToggle] = useState(true)
    const [mobile, setMobile] = useState(false)
    const [auth, setAuth] = useState(false)
    const [user, setUser] = useState({});
    function getWindowsWidth() {
        let width = window.screen.width;
        if (width <= 764) {
            setToggle(false);
            setMobile(true)
            
        }
    }
    useEffect(() => {
        getWindowsWidth()
    },[])
  return (
      <div className='container-fluid'>
          <div className='row'>
              <div className='col-12'>
                  <Navbar user={user} setUser={setUser} setToggle={setToggle} auth={auth} setAuth={setAuth} togglebar={togglebar}/>
              </div>
              
         
              <div className='col-12'>
                  <div className='container-fluid'>
                      <div className='row'>
                          <div className='col-2 '>
                             <Sidebar togglebar={togglebar} mobile={mobile} />                  
                          </div>
                          <div className={mobile?'mt-[10rem] col-9 ':'mt-[4rem] ml-[5vw]  col-8 p-2 '}>
                              <VideolistHome mobile={mobile}/>
                          </div>
                      </div>
                  </div>
              </div>
            <UserInfo user={user}/>
           </div>
    </div>
  )
}

export default Home