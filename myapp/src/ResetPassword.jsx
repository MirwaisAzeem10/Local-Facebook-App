import React from 'react'

function ResetPassword() {







  return (
    <>
       <div className='container mx-auto bg-[#FFFFFF] rounded shadow-xl w-[25%]'>
       <form>
       <div className='py-5'>
       <p className='text-[1.5rem] font-bold'>Reset Password</p>
       </div>
       <div className='flex flex-col items-center'> 
       <div className='py-6'>
       <label className="text-lg font-bold">New password</label>
       <input type='password' className='p-2' placeholder='Enter Your new password'></input>
       </div>
       <div className='py-6'>
       <label className="text-lg font-bold">Confirm Password</label>
       <input type='password' className='p-2' placeholder='Enter Your new password'></input>
       </div>
       </div>
       </form>
       </div>
       
    </>
  )
}

export default ResetPassword