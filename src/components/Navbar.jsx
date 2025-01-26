import React, { useState } from 'react'

import { Link, useNavigate } from 'react-router-dom'



function Navbar() {

  const[currentActive, setCurrentActive] = useState(null)







  return (
    <div className='bg-sky-200'>
        <div className='p-4 mx-auto bg-sky-200 justify-center  flex items-center '>
        <ul className='m-2 '>

           <Link to={'/'} className={`hover:text-gray-400 cursor-pointer  mr-12 ${currentActive === 'home' ? 'text-orange-600' : 'text-black'}`} onClick={()=> setCurrentActive('home')} >Home</Link> 
           <Link to={'/About'} className={`hover:text-gray-400 cursor-pointer  mr-12 ${currentActive === 'about' ? 'text-orange-600' : 'text-black'}`} onClick={()=> setCurrentActive('about')}>About</Link> 
           <Link to={'/Projects'} className={`hover:text-gray-400 cursor-pointer  mr-12 ${currentActive === 'projects' ? 'text-orange-600' : 'text-black'}`} onClick={()=> setCurrentActive('projects')}>Projects</Link> 

           
        </ul>
        </div>

        {/* <div className="bg-sky-200 flex items-center ml-24" >
          <img src="src/assets/profile.png" alt=""  className='h-screen  max-w-screen-md '/>
          <div>
            <div>
            <p className='text-2xl'>Hi, I am  <span className='text-orange-600 font-bold text-3xl '>Aaradra Gautam</span></p>
            <p>Fontend Developer & UI/UX Designer</p>
            </div>

            <Link to={'/About'} ><p className='bg-orange-600 text-white rounded-lg p-2 mt-8 w-fit'>Contact Me</p></Link>
            <div className='h-6 w-6  ml-48 flex gap-6'>
              <img src="src/assets/github_733609.png" alt="" />
              <img src="src/assets/linkedin_3536569.png" alt="" />
              <img src="src/assets/phone-call_455705.png" alt="" />
            </div>
          </div>
        </div> */}

    </div>
  )
}

export default Navbar