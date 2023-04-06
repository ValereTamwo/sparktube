import React from 'react'
import Navbar from './Components/Navbar'
import UserInfo from './Components/UserInfo'
import { useEffect } from 'react'
import { useContext } from 'react'
import { DataContext } from './contexts/Datacontext'

function Watch() {
   const {setAuth,setToggle,setMobile,auth,togglebar,user,mobile,setUser,getWindowsWidth,search,setSearch} = useContext(DataContext)
    
    useEffect(() => {
        getWindowsWidth();
    },[])
  return (
      <>
          <main className=' w-full h-full'>
              <section className='col-12'> 
                  <Navbar mobile={mobile}  user={user} setUser={setUser} setToggle={setToggle} auth={auth} setAuth={setAuth} togglebar={togglebar} />
                  <UserInfo user={user} />
              </section>
              <section className='col-12' >
                  <div className={mobile?'container mt-[200px]':'container mt-[80px]'}>
                      <div className='row'>
                        <div className='col-12 col-md-7 h-[80vh] p-2  flex flex-col '>
                           
                                <iframe width={mobile?"300":"800"} className='rounded-[15px] ' height={mobile?"200":'500'} src="https://www.youtube.com/embed/kffacxfA7G4?controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>                 
                             <div className='ml-[2rem] mt-[1rem] '>
                              <p className='fw-`bold ' > Justin Beiber : Baby</p>  
                                <p className='' >released-date: 12 janvier 2013</p>       
                                <p className='' > 200000 likes</p>       
                              </div>
                            
                      </div>
                          <div className='col-12 col-md-5 p-2 h-[full] overflow-y-scroll'>
                              <span className=' bagde bg-yellow-500 p-2 sidebar'> Quelque Recommendations pour Vous</span>
                              <div className='container mt-[4rem]'>
                                  <div className='row'>
                                      <div className='col-6  '>
                                          <div className='container-fluid'>
                                              <div className='row gap-3'>
                                                  <div className='flex justify-center col-12'>
                                                         <iframe width={mobile?"210":"300"} className='rounded-[7px]' height={mobile?"200":'100'} src="https://www.youtube.com/embed/kffacxfA7G4?controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>                                
                                                  </div>
                                                   <div className='col-12 flex justify-center'>
                                                         <iframe width={mobile?"210":"300"} className='rounded-[7px]' height={mobile?"200":'100'} src="https://www.youtube.com/embed/kffacxfA7G4?controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>                                
                                                  </div>
                                                   <div className='col-12 flex justify-center'>
                                                         <iframe width={mobile?"210":"300"} className='rounded-[7px]' height={mobile?"200":'100'} src="https://www.youtube.com/embed/kffacxfA7G4?controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>                                
                                                  </div>
                                                   <div className='col-12 flex justify-center'>
                                                         <iframe width={mobile?"210":"300"} className='rounded-[7px]' height={mobile?"200":'100'} src="https://www.youtube.com/embed/kffacxfA7G4?controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>                                
                                                  </div>
                                                   <div className='col-12 flex justify-center'>
                                                         <iframe width={mobile?"210":"300"} className='rounded-[7px]' height={mobile?"200":'100'} src="https://www.youtube.com/embed/kffacxfA7G4?controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>                                
                                                  </div>
                                                   <div className='col-12 flex justify-center'>
                                                         <iframe width={mobile?"210":"300"} className='rounded-[7px]' height={mobile?"200":'100'} src="https://www.youtube.com/embed/kffacxfA7G4?controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>                                
                                                  </div>
                                                   <div className='col-12 flex justify-center'>
                                                         <iframe width={mobile?"210":"300"} className='rounded-[7px]' height={mobile?"200":'100'} src="https://www.youtube.com/embed/kffacxfA7G4?controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>                                
                                                  </div>
                                                   <div className='col-12 flex justify-center'>
                                                         <iframe width={mobile?"210":"300"} className='rounded-[7px]' height={mobile?"200":'100'} src="https://www.youtube.com/embed/kffacxfA7G4?controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>                                
                                                  </div>
                                                   <div className='col-12 flex justify-center'>
                                                         <iframe width={mobile?"210":"300"} className='rounded-[7px]' height={mobile?"200":'100'} src="https://www.youtube.com/embed/kffacxfA7G4?controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>                                
                                                  </div>
                                              </div>
                                          </div>
                                      </div>
                                      <div className='col-6'>
                                          <div className='container'>
                                              <div className='row gap-5'>
                                                  
                                             
                                          <div className='col-12 flex justify-start'>
                                              <div>
                                                  <p className='fw-bold'> justify Beiber</p>
                                                  <p className=''> Sorry for what i did</p>
                                                  <p className='fw-bold'> june 2022</p>

                                              </div>
                                          </div>
                                          <div className='col-12 flex justify-start'>
                                              <div>
                                                  <p className='fw-bold'> justify Beiber</p>
                                                  <p className=''> Sorry for what i did</p>
                                                  <p className='fw-bold'> june 2022</p>

                                              </div>
                                          </div>
                                          <div className='col-12 flex justify-start'>
                                              <div>
                                                  <p className='fw-bold'> justify Beiber</p>
                                                  <p className=''> Sorry for what i did</p>
                                                  <p className='fw-bold'> june 2022</p>

                                              </div>
                                          </div>
                                          <div className='col-12 flex justify-start'>
                                              <div>
                                                  <p className='fw-bold'> justify Beiber</p>
                                                  <p className=''> Sorry for what i did</p>
                                                  <p className='fw-bold'> june 2022</p>

                                              </div>
                                          </div>
                                          <div className='col-12 flex justify-start'>
                                              <div>
                                                  <p className='fw-bold'> justify Beiber</p>
                                                  <p className=''> Sorry for what i did</p>
                                                  <p className='fw-bold'> june 2022</p>

                                              </div>
                                          </div>
                                          <div className='col-12 flex justify-start'>
                                              <div>
                                                  <p className='fw-bold'> justify Beiber</p>
                                                  <p className=''> Sorry for what i did</p>
                                                  <p className='fw-bold'> june 2022</p>

                                              </div>
                                          </div>
                                          <div className='col-12 flex justify-start'>
                                              <div>
                                                  <p className='fw-bold'> justify Beiber</p>
                                                  <p className=''> Sorry for what i did</p>
                                                  <p className='fw-bold'> june 2022</p>

                                              </div>
                                          </div>
                                          <div className='col-12 flex justify-start'>
                                              <div>
                                                  <p className='fw-bold'> justify Beiber</p>
                                                  <p className=''> Sorry for what i did</p>
                                                  <p className='fw-bold'> june 2022</p>

                                              </div>
                                          </div>
                                          <div className='col-12 flex justify-start'>
                                              <div>
                                                  <p className='fw-bold'> justify Beiber</p>
                                                  <p className=''> Sorry for what i did</p>
                                                  <p className='fw-bold'> june 2022</p>

                                              </div>
                                          </div>
                                    
                                    
                                        
                                             </div>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                        </div>
                    </div>
                  </div>
              </section>
          </main>
      </>
  )
}

export default Watch