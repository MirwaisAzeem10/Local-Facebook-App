import React from 'react'
import PeopleOutlineOutlinedIcon from '@mui/icons-material/PeopleOutlineOutlined';
import FeedOutlinedIcon from '@mui/icons-material/FeedOutlined';
import EmailIcon from '@mui/icons-material/Email';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import QuizIcon from '@mui/icons-material/Quiz';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';
import { Avatar } from '@mui/material';
function Sidebar() {
  return (
    <>
    <div className='flex flex-col px-6 gap-6 overflow-y-auto h-[30rem]'>
      

      <div className='flex flex-row items-center gap-4'>
        
      <Avatar variant='dot' alt="Remy Sharp" src="/assets/person/pexelsprofile.jpg"/>
        <p className='text-lg font-bold'>Salman Bhai</p>
      </div>
      <div className='flex flex-row items-center gap-4'>
        <PeopleOutlineOutlinedIcon fontSize='medium'/>
        <p className='text-lg font-bold'>Friends</p>
      </div>
      <div className='flex flex-row gap-4'>
        <FeedOutlinedIcon fontSize='medium'/>
        <p className='text-lg font-bold'>Feed</p>
      </div>
      <div className='flex flex-row gap-4'>
        <EmailIcon fontSize='medium'/>
        <p className='text-lg font-bold'>Messges</p>
      </div>
      <div className='flex flex-row gap-4'>
        <OndemandVideoIcon fontSize='medium'/>
        <p className='text-lg font-bold'>Videos</p>
      </div>
      <div className='flex flex-row gap-4'>
        <QuizIcon fontSize='medium'/>
        <p className='text-lg font-bold'>Faq</p>
      </div>
      <div className='flex flex-row gap-4'>
        <NewspaperIcon fontSize='medium'/>
        <p className='text-lg font-bold'>News</p>
      </div>
      <div className='flex flex-row gap-4'>
        <WorkOutlineIcon fontSize='medium'/>
        <p className='text-lg font-bold'>Jobs</p>
      </div>
      <div className='flex flex-row gap-4'>
        <LocalGroceryStoreIcon fontSize='medium'/> 
        <p className='text-lg font-bold'>Marketplace</p>
      </div>

       <div>
        <button>show more</button>
       </div>
       
       <div>
        <hr className='border-[1px] w-full border-[]'/>
       </div>
        <div className='flex flex-col gap-4'>
         <div className='flex flex-row items-center gap-4'>
         <p className='text-lg font-bold'>Friends</p>
         </div>
         <div className='flex flex-row  gap-4'>
          <Avatar className="rounded-full" variant='dot' alt="Remy Sharp" src="/assets/person/pexelsprofile.jpg"/>
          <p className=' font-bold'>Laila Khan</p>
         </div>
         <div className='flex flex-row  gap-4'>
          <Avatar className="rounded-full" variant='dot' alt="Remy Sharp" src="/assets/person/pexelsprofile.jpg"/>
          <p className=' font-bold'>Amjad Don</p>
         </div>
         <div className='flex flex-row  gap-4'>
          <Avatar className="rounded-full" variant='dot' alt="Remy Sharp" src="/assets/person/pexelsprofile.jpg"/>
          <p className=' font-bold'>Faizan Anwer Ali</p>
         </div>
         <div className='flex flex-row  gap-4'>
          <Avatar className="rounded-full" variant='dot' alt="Remy Sharp" src="/assets/person/pexelsprofile.jpg"/>
          <p className=' font-bold'>Princess Smarty</p>
         </div>
        </div>

    </div>

    </>
  )
}

export default Sidebar