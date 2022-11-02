import React from 'react'
import { useState } from 'react'
import { Avatar } from '@mui/material'
function AddFriend() {

const [color, setColor] = useState("")

    const addFunc = () => {
      
        alert("requested")
        
    }






  return (
    <>
    <div className='flex justify-center items-center'>
        <p >
           Add Friend
        </p>
    </div>
 

 <div className='flex flex-col items-center gap-2 py-10'>
 <div className='flex flex-row items-center gap-8'>
    <div className='flex flex-row gap-4'>
    <Avatar variant='dot' alt="Remy Sharp" src="/assets/person/pexelsprofile.jpg"/> 
    <p>Salman bhai</p> 
    </div>
    

    <div>
        <button className='bg-[#1877F2] text-[#FFFF] p-2 rounded ' onClick={addFunc}>Add Friends</button>
    </div>
     </div>

     <div className='flex flex-row items-center gap-8'>
    <div className='flex flex-row gap-4'>
    <Avatar variant='dot' alt="Remy Sharp" src="/assets/person/pexelsprofile.jpg"/>
    <p>Salman bhai</p> 
    </div>
    

     <div>
        <button className='bg-[#1877F2] text-[#FFFF] p-2 rounded' onClick={addFunc}>Add Friends</button>
        </div>
     </div>



     <div className='flex flex-row items-center gap-8'>
    <div className='flex flex-row gap-4'>
    <Avatar variant='dot' alt="Remy Sharp" src="/assets/person/pexelsprofile.jpg"/>
    <p>Salman bhai</p> 
    </div>
    

     <div>
        <button className='bg-[#1877F2] text-[#FFFF] p-2 rounded' onClick={addFunc}>Add Friends</button>
        </div>
     </div>


     <div className='flex flex-row items-center gap-8'>
    <div className='flex flex-row gap-4'>
    <Avatar variant='dot' alt="Remy Sharp" src="/assets/person/pexelsprofile.jpg"/>
    <p>Salman bhai</p> 
    </div>
    

     <div>
        <button className='bg-[#1877F2] text-[#FFFF] p-2 rounded' onClick={addFunc}>Add Friends</button>
        </div>
     </div>

     <div className='flex flex-row items-center gap-8'>
    <div className='flex flex-row gap-4'>
    <Avatar variant='dot' alt="Remy Sharp" src="/assets/person/pexelsprofile.jpg"/>
    <p>Salman bhai</p> 
    </div>
    

     <div>
        <button className='bg-[#1877F2] text-[#FFFF] p-2 rounded' onClick={addFunc}>Add Friends</button>
        </div>
     </div>

     <div className='flex flex-row items-center gap-8'>
    <div className='flex flex-row gap-4'>
    <Avatar variant='dot' alt="Remy Sharp" src="/assets/person/pexelsprofile.jpg"/>
    <p>Salman bhai</p> 
    </div>
    

     <div>
        <button className='bg-[#1877F2] text-[#FFFF] p-2 rounded' onClick={addFunc}>Add Friends</button>
        </div>
     </div>
 </div>













    </>
  )
}

export default AddFriend