import React from 'react'

function MyVideo() {
  return (
    
    <>

     <div className='flex justify-center items-center py-10'>
        <p className='text-lg font-bold'>My Videos</p>
     </div>
   


<div className='flex flex-col gap-6'>   
<div className='flex justify-center items-center'>
      <video width="400" height="500" controls >
      <source src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4" type="video/mp4"/>
     </video>
    </div>

    <div className='flex justify-center items-center'>
      <video width="400" height="500" controls >
      <source src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4" type="video/mp4"/>
     </video>
    </div>

    <div className='flex justify-center items-center'>
      <video width="400" height="500" controls >
      <source src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4" type="video/mp4"/>
     </video>
    </div>


    <div className='flex justify-center items-center'>
      <video width="400" height="500" controls >
      <source src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4" type="video/mp4"/>
     </video>
    </div>

    <div className='flex justify-center items-center'>
      <video width="400" height="500" controls >
      <source src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4" type="video/mp4"/>
     </video>
    </div>
</div>

    

    </>
   
  



  )
}

export default MyVideo