import React from 'react';

function Forget() {
  return (




    
    <div className='container mx-auto flex flex-col gap-2 bg-[#FFFFFF] shadow-xl p-5 w-[35%] py-5'>
    <div className='flex justify-start items-start'>
    <p className='text-[1.5rem] font-bold'>
     Find Your Account 
    </p>
    </div>
    <hr className='border-[1px] w-full'/>
    <div className='flex justify-start items-start'>
    <p className='text-lg'>Please enter your email address or mobile number to search for your account.</p>
    </div>
    <div className='flex justify-start items-start py-5'>
    <input className='w-full border-[1px] p-2 rounded' placeholder='Email Address Or Mobile Number'/>
    </div>
    <hr className='border-[1px] w-full'/>
    <div className='flex justify-end gap-4 py-5'>
    <button className='bg-[#E4E6EB] p-2 px-4 rounded '>cancel</button>
    <button className='bg-[#1877F2] p-2 px-4 text-white rounded'>search</button>
    </div>
    </div>
  )
}

export default Forget