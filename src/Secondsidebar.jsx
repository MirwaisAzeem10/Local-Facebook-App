import React from 'react'
import { styled } from '@mui/material/styles';
import Badge from '@mui/material/Badge';
import Avatar from '@mui/material/Avatar';


function Secondsidebar() {
  return (
    <> 
      {/* <h3>Online Users</h3> */}
    <div className='flex flex-col gap-6 overflow-y-auto h-[20rem] w-[120%]'>
    
    <div className='flex flex-row items-center gap-2'>
    

    <Avatar variant='dot' alt="Remy Sharp" src="/images/pexelsprofile.jpg"/>

     <p className='text-lg font-bold'>Salman Nadeem</p>
     </div>
     <div className='flex flex-row items-center gap-2'>
     <Avatar className="before:content-[''] before:right-0 before:bottom-[0px] !overflow-visible before:absolute before:w-2.5 before:rounded-full before:h-2.5 before:bg-[green] relative" variant='dot' alt="Remy Sharp" src="/images/pexelsprofile.jpg"/>
     <p className='text-lg font-bold'>Faizan Anwer</p>
     </div>
     <div className='flex flex-row items-center gap-2'>
     <Avatar className="before:content-[''] before:right-0 before:bottom-[0px] !overflow-visible before:absolute before:w-2.5 before:rounded-full before:h-2.5 before:bg-[green] relative" variant='dot' alt="Remy Sharp" src="/images/pexelsprofile.jpg"/>
     <p className='text-lg font-bold'>Amjad Khan</p>
     </div>
     <div className='flex flex-row items-center gap-2'>
     <Avatar className="before:content-[''] before:right-0 before:bottom-[0px] !overflow-visible before:absolute before:w-2.5 before:rounded-full before:h-2.5 before:bg-[green] relative" variant='dot' alt="Remy Sharp" src="/images/pexelsprofile.jpg"/>
     <p className='text-lg font-bold'>Paul Pogba</p>
     </div>
     <div className='flex flex-row items-center gap-2'>
     <Avatar className="before:content-[''] before:right-0 before:bottom-[0px] !overflow-visible before:absolute before:w-2.5 before:rounded-full before:h-2.5 before:bg-[green] relative" variant='dot' alt="Remy Sharp" src="/images/pexelsprofile.jpg"/>
     <p className='text-lg font-bold'>Romelo lukaku</p>
     </div>
     <div className='flex flex-row items-center gap-2'>
     <Avatar className="before:content-[''] before:right-0 before:bottom-[0px] !overflow-visible before:absolute before:w-2.5 before:rounded-full before:h-2.5 before:bg-[green] relative" variant='dot' alt="Remy Sharp" src="/images/pexelsprofile.jpg"/>
     <p className='text-lg font-bold'>Eden Hazard</p>
     </div>

    </div>



    </>
  )
}

export default Secondsidebar