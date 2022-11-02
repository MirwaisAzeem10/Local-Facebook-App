import React from 'react'
import  { useState } from 'react';
import "./profile.css"
import { Avatar } from '@mui/material'
import PhotoLibraryIcon from '@mui/icons-material/PhotoLibrary';
import LabelIcon from '@mui/icons-material/Label';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import AddReactionIcon from '@mui/icons-material/AddReaction';
import AddHomeIcon from '@mui/icons-material/AddHome';
import Stories from './Stories';
import ImageIcon from '@mui/icons-material/Image';
import ProfieModal from './ProfieModal';
import InputEmoji from 'react-input-emoji';
import Secondsidebar from './Secondsidebar';
// import { Navigate } from 'react-router-dom';
// import { useNavigate } from "react-router-dom";


function Profile() {

// const navigate = useNavigate();

// const [ myText, setMyText] = useState("")
// function handleOnEnter (myText) {
//   console.log('enter', myText)
// }

// const myDetailFunc = () => {
//  navigate('/edit');
//  console.log('done');
//  alert("yah its working")
// }


  return (
    <>

     <div className='container mx-auto'>
      <div>
     <img className='profileCoverImg' src='/assets/person/pexels-emily-garland-1499327.jpg'  alt=''/>

      </div>
     <div className='flex justify-center items-center bg-[white] rounded-full relative'>
     <img className='profileuserimg ' src='/assets/person/pexels-emily-garland-1499327.jpg' alt=''/>



     </div>
     <div className='flex flex-col gap-2 py-20'>
     <p className='text-lg font-bold '>Emily Garland</p>
     <p>Never give up!</p>
     </div>

    </div>    
 
    <div className='flex justify-between items-center bg-[#FFFEFF] drop-shadow-xl w-[100%] border-[1px] rounded'>
    <div className='flex justify-start gap-12 py-4 px-6'>
    <p className='text-lg font-bold text-[gray] hover:text-[blue]'>Post</p>
    <p className='text-lg font-bold text-[gray] hover:text-[blue]'>Abouts</p>
    <p className='text-lg font-bold text-[gray] hover:text-[blue]'>Friends</p>  
    <p className='text-lg font-bold text-[gray] hover:text-[blue]'>Photos</p>
    {/* <p className='text-lg font-bold text-[gray] hover:text-[blue]'>Timeline</p> */}
    <p className='text-lg font-bold text-[gray] hover:text-[blue]'>Videos</p>
    <select className='text-lg font-bold text-[gray]'>
     <option>
      More
      </option>
      <option>
      setting
      </option>
      <option>
      setting
      </option>
      <option>
      setting
      </option>
    </select>
    </div>
    <div className='flex flex-row gap-6 py-4 px-8'>
      <button className='bg-[blue] text-[white] font-bold rounded border-none p-2 px-5'>
        Edit Page
      </button>
      <button className='bg-[#E5E4E9] text-[#000] font-bold rounded border-none p-2 px-5'>
        Manual Page
      </button>
    </div>

    </div>

  <div className='flex justify-center flex-row items-center gap-8 mt-4'>
  <div className='flex flex-col gap-4 px-24 py-12 bg-[#FFFFFF] drop-shadow-xl'>
  <div className='flex justify-start'>
    <p className='text-lg font-bold '>Details</p>
  </div>
   <div className='flex flex-row items-center gap-6'>
        <p className='font-bold'>City:</p>
        <p>Karachi</p>
      </div>
      <div className='flex flex-row gap-8'>
        <p className='font-bold'>From:</p>
        <p>Pakistan</p>
      </div>
      <div className='flex flex-row gap-8'>
        <p className='font-bold'>Followers</p>
        <p>35 peoples</p>
      </div>
      <div className='flex justify-start'>
        <button className='bg-[#E5E6EB] font-bold p-2 px-20 rounded'>Edit Detail</button>
      </div>
      <div className='flex justify-start mt-6'>
      <p className='text-lg font-bold'>Friends</p>
      </div>
      <div className='flex flex-row gap-4'>
      <div className='flex flex-col items-center gap-2'>
        <img className='w-[65px]' src='/assets/person/pexels-emily-garland-1499327.jpg'  alt=''/>
        <p>Salman</p>
      </div>
      <div className='flex flex-col items-center gap-2'>
        <img className='w-[65px]' src='/assets/person/pexels-andrew-personal-training-697509.jpg'  alt=''/>
        <p>Salman</p>
      </div>
      <div className='flex flex-col items-center gap-2'>
        <img className='w-[65px]' src='/assets/person/pexelsprofile.jpg'  alt=''/>
        <p>Salman</p>
      </div>

      </div>
      <div className='flex flex-row gap-4'>
      <div className='flex flex-col items-center gap-2'>
        <img className='w-[65px]' src='/assets/person/pexels-emily-garland-1499327.jpg'  alt=''/>
        <p>Salman</p>
      </div>
      <div className='flex flex-col items-center gap-2'>
        <img className='w-[65px]' src='/assets/person/pexels-andrew-personal-training-697509.jpg'  alt=''/>
        <p>Salman</p>
      </div>
      <div className='flex flex-col items-center gap-2'>
        <img className='w-[65px]' src='/assets/person/pexelsprofile.jpg'  alt=''/>
        <p>Salman</p>
      </div>
      
      </div>
   
   
      

  </div>


  <div>
  <div className='bg-[#FFFFFF] drop-shadow-xl p-10 -mt-64'>
  <div className='flex justify-row gap-4 py-5 px-10'>
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
     {/* <AddReactionIcon /> */}
     {/* <InputEmoji
          value={myText}
          onChange={setMyText}
          cleanOnEnter
          onEnter={handleOnEnter}
          // placeholder="Type a message"
        /> */}
     <p className='font-bold text-sm'>Emotions</p>
     <button className='bg-[#008000] text-[#FFF] p-2 px-4 rounded'>share</button>
     </div>
  </div>
   
  <div className='flex justify-start py-8 p-10 '>  
      <p className='text-lg font-bold'>Posts</p>
  </div>

  </div>      


  <div className='bg-[#FFFFFF] drop-shadow-xl'>
    <Secondsidebar/>
  </div>
 

  
 

 
     {/* <div className='flex flex-col gap-4'>
     <p className='text-lg font-bold'>Online Users</p>
     <div className='flex flex-row items-center gap-2'>
     <ProfieModal/>
    <Avatar  variant='dot' alt="Remy Sharp" src="/assets/images/pexelsprofile.jpg"/>
     <p className='text-lg font-bold'>Salman Nadeem</p>
     </div>
     <div className='flex flex-row items-center gap-2'>
     <ProfieModal/>
    <Avatar  variant='dot' alt="Remy Sharp" src="/assets/images/pexelsprofile.jpg"/>
     <p className='text-lg font-bold'>Salman Nadeem</p>
     </div>

     <div className='flex flex-row items-center gap-2'>
     <ProfieModal/>
    <Avatar  variant='dot' alt="Remy Sharp" src="/assets/images/pexelsprofile.jpg"/>
     <p className='text-lg font-bold'>Salman Nadeem</p>
     </div>

     <div className='flex flex-row items-center gap-2'>
     <ProfieModal/>
    <Avatar  variant='dot' alt="Remy Sharp" src="/assets/images/pexelsprofile.jpg"/>
     <p className='text-lg font-bold'>Salman Nadeem</p>
     </div>

     <div className='flex flex-row items-center gap-2'>
     <ProfieModal/>
    <Avatar  variant='dot' alt="Remy Sharp" src="/assets/images/pexelsprofile.jpg"/>
     <p className='text-lg font-bold'>Salman Nadeem</p>
     </div>
     </div> */}
    
   





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

export default Profile