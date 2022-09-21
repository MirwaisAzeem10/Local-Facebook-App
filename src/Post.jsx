import React from 'react'
import { Avatar } from '@mui/material'
function Post() {
  return (
     <>
     <div className='flex flex-col items-center gap-6 overflow-y-auto h-[35rem] pt-10'>
       <div className='bg-[#FFFFFF] drop-shadow-xl p-10 px-20 rounded-md'>  
        <div className='flex  flex-row  gap-4'>
        <Avatar variant='dot' alt="Remy Sharp" src="/assets/person/pexelsprofile.jpg"/>
        <p className='text-lg font-bold'>Paul Pogba</p>

        </div>
        <div className='flex justify-start'>
       <p >My new profile</p>
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
       <p >How's this one</p>
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
       <p >My New Profile</p>
        </div>
        <img className='' src='/assets/person/pexels-andrew-personal-training-697509.jpg' width={300} alt=''/>
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