import React from 'react'
import LogOut from './LogOut'
import SignIn from './SignIn'
import { gapi } from 'gapi-script'
import { useEffect } from 'react'
const client_id="957952090664-3sne87r97562p9kvsm8ririvcq7cu2qj.apps.googleusercontent.com"


function Navbar({ setToggle, togglebar, auth, setAuth ,setUser,user}) {
    
    useEffect(() => {
        function start() {
            gapi.client.init({
                client_Id: client_id,
                scope:''
            })
        }
        gapi.load('client:auth2',start)
    },[])
    // var accesstoken = gapi.auth.getToken().access_token;
  return (
      <header className='container-fluid  fixed-top bg-white' id='head'>
          <div className='row navbar navbar-expand-md'>
             <section className='logo navbar-brand col-md-3 col-12 bg-white p-1 '>
              <div className='container'>
                <div className='row gap-2'>
                    <div className='col-2'>
                        <button className='btn' onClick={()=>{setToggle(!togglebar)}}>       
                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="black" class="bi bi-filter-left" viewBox="0 0 16 16">
                                <path d="M2 10.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z"/>
                            </svg>
                        </button>
                    </div>
                    <div className='col-1  flex items-center '>
                        <span >
                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="gold" class="bi bi-youtube" viewBox="0 0 16 16">
                                <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408L6.4 5.209z"/>
                            </svg>
                        </span>
                    </div>
                    <div className='col-3'>
                        <span class="spark">Spark</span>
                        <span class="tube">Tube</span>
                    </div>
                </div>
                  </div>
                  
              </section>
              
            <section className='col-md-5 col-12 p-1 search'>
               <form action="" id="searchForm" class="d-flex ms-auto ">
                <div class="input-group">
                <input type="search" placeholder="Rechercher " className=" form-control rounded-l-[30px]"/>
                <button type="submit " className="btn w-[4rem] flex justify-center items-center btn-warning rounded-r-[30px] ">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className=" bi bi-search" viewBox="0 0 16 16">
                        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                    </svg>
                </button>
                </div>

            </form>
            </section>
            <section className='col-md-4     col-12 p-0 flex justify-end pe-md-5  user'>
                <div className='flex container md:justify-end md:gap-7 justify-between'>
                <span className='flex items-center justify-center  '>
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="gold   " class="bi bi-camera-video-fill" viewBox="0 0 16 16">
                         <path fill-rule="evenodd" d="M0 5a2 2 0 0 1 2-2h7.5a2 2 0 0 1 1.983 1.738l3.11-1.382A1 1 0 0 1 16 4.269v7.462a1 1 0 0 1-1.406.913l-3.111-1.382A2 2 0 0 1 9.5 13H2a2 2 0 0 1-2-2V5z"/>
                    </svg>
                </span>
                <span className='  flex items-center justify-center '>
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="gold   " class="bi bi-bell-fill" viewBox="0 0 16 16">
                        <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zm.995-14.901a1 1 0 1 0-1.99 0A5.002 5.002 0 0 0 3 6c0 1.098-.5 6-2 7h14c-1.5-1-2-5.902-2-7 0-2.42-1.72-4.44-4.005-4.901z"/>
                    </svg>
                </span>
                      {auth ? <span data-bs-toggle='offcanvas' data-bs-target='#create' className='h-[50px] cursor-pointer bg-yellow-400 text-[25px] text-black w-[50px] rounded-[50%] flex items-center justify-center'>{ user.givenName[0]}</span> : <SignIn setUser={setUser} setAuth={setAuth} />}
                </div>
              </section>
              
        </div>
       
         
      </header>
   
  )
}

export default Navbar