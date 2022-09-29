import React, { useState } from 'react'
import { styled } from '@mui/material/styles';
import Badge from '@mui/material/Badge';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import ProfieModal from './ProfieModal';
import { TextField } from '@mui/material';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

function Secondsidebar() {

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [input, setInput] = useState("")

//  const myFunction = () => {
//   setInput(input)
//  }

 
  

  return (
    <> 
      
    
    
    <div className='flex flex-col gap-6 overflow-y-auto h-[20rem] w-[120%]'>
  
    <div className='flex justify-start'><p className='text-lg font-bold'>Online Users</p></div>
    <div className='flex flex-row items-center gap-2'>
    <ProfieModal />
    <Avatar onClick={handleOpen} variant='dot' alt="Remy Sharp" src="/assets/images/pexelsprofile.jpg"/>
     <p className='text-lg font-bold'>Salman Nadeem</p>
     </div>
     <div className='flex flex-row items-center gap-2'>
     <ProfieModal /> 
     <Avatar onClick={handleOpen}   className=" before:content-[''] before:right-0 before:bottom-[0px] before:absolute before:w-2.5 before:rounded-full before:h-2.5 before:bg-[green] relative" variant='dot' alt="Remy Sharp" src="/assets/person/pexelsprofile.jpg"/>
     <p className='text-lg font-bold'>Faizan Anwer</p>
     </div>
     <div onClick={handleOpen} className='flex flex-row items-center gap-2'>
     <ProfieModal />
     <Avatar className=" before:content-[''] before:right-0 before:bottom-[0px] before:absolute before:w-2.5 before:rounded-full before:h-2.5 before:bg-[green] relative" variant='dot' alt="Remy Sharp" src="/assets/person/pexelsprofile.jpg"/>
     <p className='text-lg font-bold'>Amjad Khan</p>
     </div>
     <div onClick={handleOpen} className='flex flex-row items-center gap-2'>
     <ProfieModal />

     <Avatar className="before:content-[''] before:right-0 before:bottom-[0px] before:absolute before:w-2.5 before:rounded-full before:h-2.5 before:bg-[green] relative" variant='dot' alt="Remy Sharp" src="/assets/person/pexelsprofile.jpg"/>
     <p className='text-lg font-bold'>Paul Pogba</p>
     </div>
     <div onClick={handleOpen} className='flex flex-row items-center gap-2'>
     <ProfieModal />
     <Avatar className="before:content-[''] before:right-0 before:bottom-[0px] before:absolute before:w-2.5 before:rounded-full before:h-2.5 before:bg-[green] relative" variant='dot' alt="Remy Sharp" src="/assets/person/pexelsprofile.jpg"/>
     <p className='text-lg font-bold'>Romelo lukaku</p>
     </div>
     <div onClick={handleOpen} className='flex flex-row items-center gap-2'>
     <ProfieModal />
     <Avatar className="before:content-[''] before:right-0 before:bottom-[0px] before:absolute before:w-2.5 before:rounded-full before:h-2.5 before:bg-[green] relative" variant='dot' alt="Remy Sharp" src=""/>
     <ProfieModal />
     <p className='text-lg font-bold'>Eden Hazard</p>
     </div>

    </div>



    </>
  )
}

export default Secondsidebar