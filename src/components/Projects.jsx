import React, { useState } from 'react'
import Navbar from './navbar'
import { Link } from 'react-router-dom'



function Projects() {

    const [currentHover, setCurrentHover] = useState(null)

    const project = [
        {
            id : 1,
            name : 'Idonor-A blood donation mobile app',
            link : 
                {
                    git : 'https://github.com/aaradra779/IdonarFrontend',
                    live : null
                    
                }
            
        },
        {
            id : 2,
            name : 'IMDB-A movie database',
            link : 
                {
                    git : 'https://github.com/aaradra779/tmdbMovieApp',
                    live : null
                }
            
        },
        {
            id : 3,
            name : 'Portfolio',
            link : 
                {
                    git : 'https://github.com/aaradra779/portfolio',
                    live : null
                }
                
            
        },
        
    ]

//  const mouseEnter = ()=>{
    
//  }

    



  return (
    <div className='bg-sky-200 h-screen overflow-hidden '>
       {/* <Navbar /> */}
        <div className='ml-48 mt-48 '>
        <ul className='flex flex-wrap item-center gap-12'>
       
            {project.map((item)=>(
                <a href={item.link.git}>

                <div className='h-40 w-60 rounded-lg bg-white flex items-center mr-24' onMouseEnter={()=>setCurrentHover(item.id)}onMouseLeave={()=> setCurrentHover(null)}  >

                  
                    {currentHover === item.id? 
                    <img src="src/assets/github_733609.png" alt="" className='h-6 w-6 ml-28' /> : 
                    <p className='ml-12 h-40 w-60 font-bold text-orange-600 mt-24 mr-12 '>{item.name}</p>
                    }
                   
                    
                </div>
                </a>
          

            ))}
        </ul>
       </div>

       {/* <div className='flex items-center ml-32 mt-24'>

        <div className='h-40 w-60 rounded-lg bg-white flex items-center m-24  ' onMouseEnter={onHover} onMouseLeave={onLeave}>
            {hover?
            <div className='h-40 w-60   bg-slate-200 opacity-80  rounded-lg items-center flex gap-6'>
              <img src="src/assets/github_733609.png" alt="" className='h-6 w-6 ml-12' />
              <img src="src/assets/linkedin_3536569.png" alt=""   className='h-6 w-6'/>
              <img src="src/assets/email.png" alt=""  className='h-6 w-6' />
            </div> : <p className=' ml-8 h-40 w-60 font-bold text-orange-600 mt-24 mr-12 '>IDONOR-A blood donation app</p>  }
        </div>
       
        <div className='h-40 w-60 rounded-lg bg-white p-12 mr-24 opacity-100'><p className=' ml-2 font-bold text-orange-600  mt-2 '>IMDB-A movie database</p></div>
        <div className='h-40 w-60 rounded-lg bg-white p-12  opacity-100'><p className=' ml-2 font-bold text-orange-600  mt-2 '>My Portfolio</p></div>

       </div>
       <div className='h-40 w-60 rounded-lg bg-white flex items-center mr-24  ' onMouseEnter={onHover} onMouseLeave={onLeave}>
            {hover?
            <div className='h-40 w-60   bg-slate-200 opacity-80  rounded-lg items-center flex gap-6'>
              <img src="src/assets/github_733609.png" alt="" className='h-6 w-6 ml-12' />
              <img src="src/assets/linkedin_3536569.png" alt=""   className='h-6 w-6'/>
              <img src="src/assets/email.png" alt=""  className='h-6 w-6' />
            </div> : <p className=' ml-8 h-40 w-60 font-bold text-orange-600 mt-24 mr-12 '>IMDB-A movie database</p>  }
        </div> */}

    </div>
  )
}


export default Projects