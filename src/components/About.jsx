import React from 'react'
// import Navbar from './navbar'
import { Link } from 'react-router-dom'
import AaradraGautam from '../assets/AaradraGautam.pdf'
import AaradraGautamUI from '../assets/AaradraGautamUI.pdf'



function About() {
  return (


    <div className='bg-sky-200 h-screen overflow-hidden'>
        {/* <Navbar /> */}
       <div className=' ml-24 mr-24 flex justify-between gap-6 '>
        <div className=''>

            <p className='text-2xl font-bold'>About Me</p>
            <div className='mt-4'>
                <p className='text-lg'>Hi, I am  <span className='text-orange-600 font-bold text-xl '>Aaradra Gautam</span></p>
                <p>UI/UX Designer & Web Developer</p> 
                <p className='mt-2' >I am a passionate frontend and UI/UX developer with a strong foundation in building interactive and user-friendly web and mobile applications. I specialize in technologies like React, React Native, and Figma, while also focusing on creating intuitive and visually appealing designs.I am always eager to learn new tools and techniques to stay updated with the evolving frontend and design landscape, ensuring my work combines creativity with practicality.</p>
            </div>
            <div className='flex gap-8 mt-4'>

                <div className='text-lg'>
                    <p>Name:</p>
                    <p>Email:</p>
                    <p>Phone:</p>
                    <p>Location:</p>
                </div>
                <div className='font-bold  text-lg'>
                    <p>Aaradra Gautam</p>
                    <p>aaradragautam@gmail.com</p>
                    <p>9814963622</p>
                    <p>Birtamode, Jhapa</p>
                </div>
            </div>
             <div className='flex items-center gap-8'>
                 <a href={AaradraGautamUI} download={'Aaradra_Gautam'}><button className='bg-green-600 text-white rounded-lg p-2 mt-8  w-fit'>Download CV</button></a>
                
                 <div className='h-6 w-6 mt-8 flex gap-6'>
                    <img src="src/assets/github_733609.png" alt="" />
                    <img src="src/assets/linkedin_3536569.png" alt="" />
                    <img src="src/assets/email.png" alt="" />
            </div>
             </div>
        </div>
        <div>
            <p className='text-2xl font-bold'>Experience</p>
            <p className='mt-4'>UI/UX designer at <span className='font-bold text-orange-600'>Treeleaf Technologies.</span></p>
            <p className='mt-2'>At Treeleaf Technologies, I gained valuable experience as a UI/UX designer, focusing on creating intuitive and user-centered designs. I worked on designing wireframes, prototypes, and user interfaces that enhanced user engagement and aligned with project goals. This role allowed me to improve my skills in design tools, user research, and collaborative teamwork to deliver impactful digital solutions.</p>
           
        </div>
       </div>
        
    </div>
  )
}

export default About