import React from 'react'
// import Navbar from './navbar'
import { Link } from 'react-router-dom'


function Home() {
  return (

    <div className='bg-sky-200 max-h-screen overflow-hidden'>
     {/* <Navbar /> */}
     <div className="flex items-center" >
        <div className='ml-24'>
          <img src="src/assets/profile.png" alt=""  className='h-full max-w-2xl'/>
        </div>
          <div>
            <div>
            <p className='text-2xl'>Hi, I am  <span className='text-orange-600 font-bold text-3xl '>Aaradra Gautam</span></p>
            <p>UI/UX Designer & Web Developer</p>
            </div>
           
            <Link to={'/About'} ><p className='bg-orange-600 text-white rounded-lg p-2 mt-8 w-fit'>Contact Me</p></Link>
            <div className='h-6 w-6  ml-48 flex gap-6'>
              <img src="src/assets/github_733609.png" alt="" />
              <img src="src/assets/linkedin_3536569.png" alt="" />
              <img src="src/assets/email.png" alt="" />
            </div>
          </div>
        </div> 
    </div>

  )
}

export default Home