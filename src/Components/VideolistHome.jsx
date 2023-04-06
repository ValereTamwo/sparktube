import React from 'react'
import { Link } from 'react-router-dom'
function VideolistHome({mobile}) {
  return (
    <section className='container-fluid'>

      <div className='row gap-3 '>
        <div className='col-12 mt-[10px] mb-[10px]  h-[50px] rounded-[20px] p-2 bg-yellow-100'>
                  <div className='container '>
                      <div className='row '>
                          <div className='col-2 p-2 flex justify-center'>
                              <div className='text-black badge bg-yellow-400' >Justin Bieber</div>
                          </div>
                           <div className='col-2 p-2 flex justify-center'>
                              <div className='text-black badge bg-yellow-400' >dadju</div>
                          </div>
                           <div className='col-2 p-2 flex justify-center'>
                              <div className='text-black badge bg-yellow-400' >Post Malone</div>
                          </div>
                           <div className='col-2 p-2 flex justify-center'>
                              <div className='text-black badge bg-yellow-400' >Maroons</div>
                          </div>
                           <div className='col-2 p-2 flex justify-center '>
                              <div className='text-black badge bg-yellow-400' >Ariana grande</div>
                          </div>
                           <div className='col-2 p-2 flex justify-center'>
                              <div className='text-black badge bg-yellow-400' >Victoria</div>
                          </div>
                      </div>
                  </div>
        </div>
         {/* <div className='col-md-3 col-12 mb-[10px] mr-[70px]'>
                <iframe  width="300" height="200" src="https://www.youtube.com/embed/ISWdMAiibU4?controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
              <Link to='/view' >  <span className='' > Souf : Ma reine</span></Link>
              
            
              </div> */}
              
            <div className='col-md-3 col-12 mb-[10px] mr-[70px]' >
                {/* <div className='w-[300px] bg-slate-500  rounded-[20px] h-[200px]'></div> */}
                <iframe className='rounded-[20px]' width={mobile?"100%":"300"}  height={mobile?"200":'200'} src="https://www.youtube.com/embed/kffacxfA7G4?controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>                 
       
              <Link to='/view' ><span className='' > Justin Beiber : Baby</span></Link> 

              </div>
               <div className='col-md-3 col-12 mb-[10px] mr-[70px]'>
                <iframe width={mobile?"100%":"300"} className='rounded-[20px]' height={mobile?"200":'200'} src="https://www.youtube.com/embed/kffacxfA7G4?controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>                 
                <span className='' > Justin Beiber : Baby</span>
              
            
              </div>
               <div className='col-md-3 col-12 mb-[10px] mr-[70px]'>
                <iframe width={mobile?"100%":"300"} className='rounded-[20px]' height={mobile?"200":'200'} src="https://www.youtube.com/embed/kffacxfA7G4?controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>                 
                <span className='' > Justin Beiber : Baby</span>
              
            
              </div>
               <div className='col-md-3 col-12 mb-[10px] mr-[70px]'>
                <iframe width={mobile?"100%":"300"} className='rounded-[20px]' height={mobile?"200":'200'} src="https://www.youtube.com/embed/kffacxfA7G4?controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>                 
                <span className='' > Justin Beiber : Baby</span>
              
            
              </div>
               <div className='col-md-3 col-12 mb-[10px] mr-[70px]'>
                <iframe width={mobile?"100%":"300"} className='rounded-[20px]' height={mobile?"200":'200'} src="https://www.youtube.com/embed/kffacxfA7G4?controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>                 
                <span className='' > Justin Beiber : Baby</span>
              
            
              </div>
              <div className='col-md-3 col-12 mb-[10px] mr-[70px]'>
                <iframe width={mobile?"100%":"300"} className='rounded-[20px]' height={mobile?"200":'200'} src="https://www.youtube.com/embed/kffacxfA7G4?controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>                 
                <span className='' > Justin Beiber : Baby</span>
              
            
              </div>
               <div className='col-md-3 col-12 mb-[10px] mr-[70px]'>
                <iframe width={mobile?"100%":"300"} className='rounded-[20px]' height={mobile?"200":'200'} src="https://www.youtube.com/embed/kffacxfA7G4?controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>                 
                <span className='' > Justin Beiber : Baby</span>
              
            
              </div>
               <div className='col-md-3 col-12 mb-[10px] mr-[70px]'>
                <iframe width={mobile?"100%":"300"} className='rounded-[20px]' height={mobile?"200":'200'} src="https://www.youtube.com/embed/kffacxfA7G4?controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>                 
                <span className='' > Justin Beiber : Baby</span>
              
            
              </div>
               <div className='col-md-3 col-12 mb-[10px] mr-[70px]'>
                <iframe width={mobile?"100%":"300"} className='rounded-[20px]' height={mobile?"200":'200'} src="https://www.youtube.com/embed/kffacxfA7G4?controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>                 
                <span className='' > Justin Beiber : Baby</span>
              </div>

              
                <div className='col-md-3 col-12 mb-[10px] mr-[70px]'>
                <iframe width={mobile?"100%":"300"} className='rounded-[20px]' height={mobile?"200":'200'} src="https://www.youtube.com/embed/kffacxfA7G4?controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>                 
                <span className='' > Justin Beiber : Baby</span>
              
            
              </div>
               <div className='col-md-3 col-12 mb-[10px] mr-[70px]'>
                <iframe width={mobile?"100%":"300"} className='rounded-[20px]' height={mobile?"200":'200'} src="https://www.youtube.com/embed/kffacxfA7G4?controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>                 
                <span className='' > Justin Beiber : Baby</span>
              
            
              </div>
               <div className='col-md-3 col-12 mb-[10px] mr-[70px]'>
                <iframe width={mobile?"100%":"300"} className='rounded-[20px]' height={mobile?"200":'200'} src="https://www.youtube.com/embed/kffacxfA7G4?controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>                 
                <span className='' > Justin Beiber : Baby</span>
              
            
              </div>
               <div className='col-md-3 col-12 mb-[10px] mr-[70px]'>
                <iframe width={mobile?"100%":"300"} className='rounded-[20px]' height={mobile?"200":'200'} src="https://www.youtube.com/embed/kffacxfA7G4?controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>                 
                <span className='' > Justin Beiber : Baby</span>
              
            
              </div>
               <div className='col-md-3 col-12 mb-[10px] mr-[70px]'>
                <iframe width={mobile?"100%":"300"} className='rounded-[20px]' height={mobile?"200":'200'} src="https://www.youtube.com/embed/kffacxfA7G4?controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>                 
                <span className='' > Justin Beiber : Baby</span>
              
            
              </div>
              <div className='col-md-3 col-12 mb-[10px] mr-[70px]'>
                <iframe width={mobile?"100%":"300"} className='rounded-[20px]' height={mobile?"200":'200'} src="https://www.youtube.com/embed/kffacxfA7G4?controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>                 
                <span className='' > Justin Beiber : Baby</span>
              
            
              </div>
               <div className='col-md-3 col-12 mb-[10px] mr-[70px]'>
                <iframe width={mobile?"100%":"300"} className='rounded-[20px]' height={mobile?"200":'200'} src="https://www.youtube.com/embed/kffacxfA7G4?controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>                 
                <span className='' > Justin Beiber : Baby</span>
              
            
              </div>
               <div className='col-md-3 col-12 mb-[10px] mr-[70px]'>
                <iframe width={mobile?"100%":"300"} className='rounded-[20px]' height={mobile?"200":'200'} src="https://www.youtube.com/embed/kffacxfA7G4?controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>                 
                <span className='' > Justin Beiber : Baby</span>
              
            
              </div>
               <div className='col-md-3 col-12 mb-[10px] mr-[70px]'>
                <iframe width={mobile?"100%":"300"} className='rounded-[20px]' height={mobile?"200":'200'} src="https://www.youtube.com/embed/kffacxfA7G4?controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>                 
              </div>
                <span className='' > Justin Beiber : Baby</span>



          </div>
    </section>
  )
}

export default VideolistHome