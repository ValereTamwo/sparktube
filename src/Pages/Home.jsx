import React from 'react'
import Navbar from '../Components/Navbar'
import Sidebar from '../Components/Sidebar'
import { useEffect } from 'react'
import VideolistHome from '../Components/VideolistHome'
import UserInfo from '../Components/UserInfo'
import SearchResult from '../Components/SearchResult'
import { DataContext } from '../contexts/Datacontext'
import { useContext } from 'react'
import MobileNav from '../Components/MobileNav'



function Home() {

   const {setAuth,getWindowsWidth,setToggle,auth,togglebar,user,mobile,setUser,search,setSearch} = useContext(DataContext)


    useEffect(() => {
        getWindowsWidth()
    },[])
  return (
      <div className='container-fluid'>
          <div className='row'>
              <div className='col-12'>
                  <Navbar user={user} search={search} setSearch={setSearch} mobile={mobile} setUser={setUser} setToggle={setToggle} auth={auth} setAuth={setAuth} togglebar={togglebar}/>
              </div>
              
         
              <div className='col-12'>
                  <div className='container-fluid'>
                      <div className='row'>
                          <div className='col-2  '>
                            <Sidebar togglebar={togglebar} mobile={mobile} />    
                             
                          </div>
                          <div className={mobile?'mt-[4rem]  col-12 ':'mt-[4rem]   col-9 p-2 '}>
                              {search?<SearchResult/>:<VideolistHome mobile={mobile} />}
                          </div>
                      </div>
                  </div>
              </div>
              <MobileNav/>
            <UserInfo user={user}/>
           </div>
    </div>
  )
}

export default Home