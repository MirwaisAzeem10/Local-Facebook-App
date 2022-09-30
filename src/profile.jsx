import React from 'react'
import "./profile.css"
import { Avatar } from '@mui/material'
import PhotoLibraryIcon from '@mui/icons-material/PhotoLibrary';
import LabelIcon from '@mui/icons-material/Label';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import AddReactionIcon from '@mui/icons-material/AddReaction';
import AddHomeIcon from '@mui/icons-material/AddHome';
import Stories from './Stories';
import ImageIcon from '@mui/icons-material/Image';
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
 

  <div className='flex justify-center flex-row items-center gap-4 mt-4'>

 

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
    
      {/* <div className='bg-[#FFFFFF]  drop-shadow-xl p-10 px'>
      <div className="rightbarInfo">
          <div className="rightbarInfoIt">
            <span className="rightbarInfoKey">City:</span>
            <span className="rightbarInfoValue">Karachi </span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">From:</span>
            <span className="rightbarInfoValue">Pakistan</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">Relationship:</span>
            <span className="rightbarInfoValue">yes</span>
          </div>
        </div>
        
      </div> */}


 
  <div className='flex flex-col gap-4 bg-[#FFFFFF]  drop-shadow-xl px-10 py-10'>
     <div className='flex flex-row gap-2'>
        <p className='font-bold'>City:</p>
        <p>Karachi</p>
      </div>
      <div className='flex flex-row gap-2'>
        <p className='font-bold'>From:</p>
        <p>Pakistan</p>
      </div>
      <div className='flex flex-row gap-2'>
        <p className='font-bold'>Relationship</p>
        <p>-</p>
      </div>
  </div>


        
 <div></div>
  <div className='bg-[#FFFFFF] drop-shadow-xl p-10'>
  <div className='flex justify-row gap-4 p-10 px-10'>
     <Avatar variant='dot' alt="Remy Sharp" src="/assets/person/pexels-emily-garland-1499327.jpg"/>
     <input className=''  type='text' placeholder='what are you thinking about'/>
  </div>
 <div className=''>
 <hr className='border-[1px] '/>
 </div>
     <div className='flex flex-row items-center gap-6 pt-5'>
     <ImageIcon />
     <p className='font-bold text-sm'>Images or Video</p>
     <LabelIcon />
     <p className='font-bold text-sm'>Tag</p>
     <LocationOnIcon />
     <p className='font-bold text-sm'>Location</p>
     <AddReactionIcon />
     <p className='font-bold text-sm'>Emotions</p>
     <button className='bg-[#008000] text-[#FFF] p-2 px-4 rounded'>share</button>
     </div>
    
  </div>
 
     
     





     {/* <div className='flex flex-col mt-24 bg-[#FFFFFF] drop-shadow-xl p-16 '>
      <div className='flex justify-center gap-4'>
      <Avatar variant='dot' alt="Remy Sharp" src="/images/pexelsprofile.jpg"/>
     <input className='border-none' type='text' placeholder='what are you thinking salman'  />
     
      
     
     <hr className='w-full border-[#9A9A9A] border-[1px]'/>

     
    </div>
    
    
      </div> */}

  </div>
      

      
   
    </>
    


     
  )
}

export default profile