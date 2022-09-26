import React from 'react'
import { Avatar } from '@mui/material'
import PhotoLibraryIcon from '@mui/icons-material/PhotoLibrary';
import LabelIcon from '@mui/icons-material/Label';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import AddReactionIcon from '@mui/icons-material/AddReaction';
import AddHomeIcon from '@mui/icons-material/AddHome';
function Post() {
  return (
     <>
     <div className='flex justify-center bg-[#FFFFFF] drop-shadow-xl p-10 '>
     <div className='flex flex-row gap-4'>
     <Avatar variant='dot' alt="Remy Sharp" src="/assets/person/pexelsprofile.jpg"/>
     <input className=''  type='text' placeholder='what are you thinking about'/>
     </div>
     
     {/* <div className='flex flex-col gap-4'>
     <div className='flex flex-row gap-2'> 
     <PhotoLibraryIcon  />
     <p>Images & Videos</p>
     </div>
     <div className='flex flex-row gap-2'>
     <LabelIcon />
     <p>Tag</p>
     </div>
     <div className='flex flex-row gap-2'>
      <LocationOnIcon/>
      <p>Location</p>
     </div>
     <div className='flex flex-row gap-2'>
     <AddReactionIcon/>
     <p>Emotion</p>
     </div>
     </div> */}
    </div>
      
     <div className='flex flex-col items-center gap-6 overflow-y-auto h-[35rem] pt-10'>
       <div className='bg-[#FFFFFF] drop-shadow-xl p-10 px-20 rounded-md'>  
        <div className='flex  flex-row  gap-4'>
        <Avatar variant='dot' alt="Remy Sharp" src="/assets/person/pexelsprofile.jpg"/>
        <p className='text-lg font-bold'>Paul Pogba</p>

        </div>
        <div className='flex justify-start'>
       <p className='py-5'>My new profile</p>
        </div>
        <img className='' src='/assets/person/pexelsprofile.jpg' width={300} alt=''/>
        <div className='flex jusify-start items-center pt-5'>
        <img className='w-[30px]' src='assets/person/like.png'  alt=''/>
        <img className='w-[30px]' src='assets/person/thumbs-up.png'   alt=''/>
        <p>2 people like this</p>
        </div>
        
       </div>

       <div className='bg-[#FFFFFF] drop-shadow-xl p-10 px-20 rounded-md'>
       <div className='flex  flex-row  gap-4'>
        <Avatar variant='dot' alt="Remy Sharp" src="/asstes/person/pexels-emily-garland-1499327.jpg"/>
        <p className='text-lg font-bold'>Amma Butt</p>

        </div>
        <div className='flex justify-start'>
       <p className='py-5'>How's this one</p>
        </div>
        <img className='' src='/assets/person/pexels-emily-garland-1499327.jpg' width={300} alt=''/>
        <div className='flex jusify-start items-center pt-5'>
        <img className='w-[30px]' src='assets/person/like.png'  alt=''/>
        <img className='w-[30px]' src='assets/person/thumbs-up.png'   alt=''/>
        <p>2 people like this</p>
        </div>
       </div>

       <div className='bg-[#FFFFFF] drop-shadow-xl p-10 px-20 rounded-md'>
       <div className='flex  flex-row  gap-4'>
        <Avatar variant='dot' alt="Remy Sharp" className='' src=''/>
        <p className='text-lg font-bold'>Amjad bhai</p>

        </div>
        <div className='flex justify-start'>
       <p className='py-5'>My New Profile</p>
        </div>
        <img className='' src='/assets/person/pexels-andrew-personal-training-697509.jpg' width={300} alt=''/>
        <div className='flex jusify-start items-center pt-5'>
        <img className='w-[30px]' src='assets/person/like.png'  alt=''/>
        <img className='w-[30px]' src='assets/person/thumbs-up.png'   alt=''/>
        <p>2 people like this</p>
        </div>
       </div>

       <div className='bg-[#FFFFFF] drop-shadow-xl p-10 px-20 rounded-md'>  
        <div className='flex  flex-row  gap-4'>
        <Avatar variant='dot' alt="Remy Sharp" src="/assets/person/pexelsprofile.jpg"/>
        <p className='text-lg font-bold'>Paul Pogba</p>

        </div>
        <div className='flex justify-start'>
       <p className='py-5'>My new profile</p>
        </div>
        <img className='' src='/assets/person/pexelsprofile.jpg' width={300} alt=''/>
        <div className='flex jusify-start items-center pt-5'>
        <img className='w-[30px]' src='assets/person/like.png'  alt=''/>
        <img className='w-[30px]' src='assets/person/thumbs-up.png'   alt=''/>
        <p>2 people like this</p>
        </div>
        
       </div>

       <div className='bg-[#FFFFFF] drop-shadow-xl p-10 px-20 rounded-md'>
       <div className='flex  flex-row  gap-4'>
        <Avatar variant='dot' alt="Remy Sharp" src="/asstes/person/pexels-emily-garland-1499327.jpg"/>
        <p className='text-lg font-bold'>Amma Butt</p>

        </div>
        <div className='flex justify-start'>
       <p className='py-5'>How's this one</p>
        </div>
        <img className='' src='/assets/person/pexels-emily-garland-1499327.jpg' width={300} alt=''/>
        <div className='flex jusify-start items-center pt-5'>
        <img className='w-[30px]' src='assets/person/like.png'  alt=''/>
        <img className='w-[30px]' src='assets/person/thumbs-up.png'   alt=''/>
        <p>2 people like this</p>
        </div>
       </div>

       <div className='bg-[#FFFFFF] drop-shadow-xl p-10 px-20 rounded-md'>
       <div className='flex  flex-row  gap-4'>
        <Avatar variant='dot' alt="Remy Sharp" className='' src=''/>
        <p className='text-lg font-bold'>Amjad bhai</p>

        </div>
        <div className='flex justify-start'>
       <p className='py-5'>My New Profile</p>
        </div>
        <img className='' src='/assets/person/pexels-andrew-personal-training-697509.jpg' width={300} alt=''/>
        <div className='flex jusify-start items-center pt-5'>
        <img className='w-[30px]' src='assets/person/like.png'  alt=''/>
        <img className='w-[30px]' src='assets/person/thumbs-up.png'   alt=''/>
        <p>2 people like this</p>
        </div>
       </div>


       <div className='bg-[#FFFFFF] drop-shadow-xl p-10 px-20 rounded-md'>
       <div className='flex  flex-row  gap-4'>
        <Avatar variant='dot' alt="Remy Sharp" className='' src=''/>
        <p className='text-lg font-bold'>Faizan</p>

        </div>
        <div className='flex justify-start'>
       <p className='py-5'>Check out this video</p>
        </div>

        <img src='https://placeimg.com/400/225/arch'  alt='nature'/>
        <div className='flex jusify-start items-center pt-5'>
        <img className='w-[30px]' src='assets/person/like.png'  alt=''/>
        <img className='w-[30px]' src='assets/person/thumbs-up.png'   alt=''/>
        <p>2 people like this</p>
        </div>
       </div>
        
     </div>








     </>
  )
}

export default Post