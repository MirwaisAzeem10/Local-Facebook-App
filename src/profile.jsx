import React from 'react'
import "./profile.css"
import { Avatar } from '@mui/material'
import PhotoLibraryIcon from '@mui/icons-material/PhotoLibrary';
import LabelIcon from '@mui/icons-material/Label';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import AddReactionIcon from '@mui/icons-material/AddReaction';
import AddHomeIcon from '@mui/icons-material/AddHome';
function profile() {
  return (
    <>

     <div className='container mx-auto'>
      <div>
     <img className='profileCoverImg' src='/assets/person/pexels-emily-garland-1499327.jpg'  alt=''/>

      </div>
     <div className='flex justify-center items-center bg-[white] rounded-full relative'>
     <img className='profileuserimg ' src='/assets/person/pexels-emily-garland-1499327.jpg' alt=''/>

     </div>
    </div>    
 

  <div className='flex justify-between  flex-row items-center  gap-4 mt-4'>
    

    {/* <div className='flex flex-col gap-5 px-10 bg-[#FFFFFF] drop-shadow-xl p-10'>
    <div className='flex flex-row gap-2'>
    <AddHomeIcon />
    <p className='text-[#9A9A9A]'>lives in Karachi</p>
   </div>

   <div className='flex flex-row gap-2'>
    <AddHomeIcon color='gray'/>
    <p className='text-[#9A9A9A]'>followers</p>
   </div>

   <div className='flex flex-row gap-2'>
    <AddHomeIcon />
    <p className='text-[#9A9A9A]'></p>
   </div>

   <div className='flex flex-row gap-2'>
    <AddHomeIcon />
    <p className='text-[#9A9A9A]'>lives in Karachi</p>
   </div>

    </div> */}
      <div className='bg-[#FFFFFF]  drop-shadow-xl p-10 px'>
      <div className="rightbarInfo">
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">City:</span>
            <span className="rightbarInfoValue">Karachi </span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">From:</span>
            <span className="rightbarInfoValue">Pakistan</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">Relationship:</span>
            <span className="rightbarInfoValue">-</span>
          </div>
        </div>
        
      </div>
        


  <div className='flex flex-col mt-24 bg-[#FFFFFF] drop-shadow-xl p-16 '>
      <div className='flex justify-center gap-4'>
      <Avatar variant='dot' alt="Remy Sharp" src="/images/pexelsprofile.jpg"/>
     <input className='border-none' type='text' placeholder='what are you thinking salman'  />
     
      
     
     {/* <hr className='w-full border-[#9A9A9A] border-[1px]'/> */}

     
    </div>
    
    
      </div>

  </div>
      

      
   
    </>
    


     
  )
}

export default profile