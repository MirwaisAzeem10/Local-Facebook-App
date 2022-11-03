import React from 'react'
import { useNavigate } from "react-router-dom";

function Navbar() {

const navigate = useNavigate();


const myForgetFunc = () => {

    navigate('/forget')
}
    


return (
   

  
<nav class="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-900 shadow-xl ">
  <div class="container flex flex-wrap justify-between items-center mx-auto">
  <a href="https://flowbite.com/" class="flex items-center">
      {/* <img src="https://flowbite.com/docs/images/logo.svg" class="mr-3 h-6 sm:h-9" alt="Flowbite Logo"/> */}
      <span class="self-center font-bold whitespace-nowrap dark:text-white text-[1.5rem] text-[#1B74E4]">Facebook</span>
  </a>
     <div className='flex flex-row items-center gap-4'>
        <input className='border-[1px] p-2 px-5 rounded' type='text'  placeholder='Your Email'/>
        <input  className='border-[1px] p-2 px-5 rounded'  type='text'  placeholder='Your Password'/>
        <button className='bg-[#1B74E4] text-white font-bold py-2 px-5 rounded'>Log in</button>
        {/* <p className='text-[#1B74E4] o'>Forget Password?</p> */}
        <button className='bg-none text-[#1B74E4]'>Forget password</button>
     </div>
   
  </div>
</nav>






  )
}

export default Navbar