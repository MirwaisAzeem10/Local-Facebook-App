import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Avatar } from '@mui/material';
import { useState } from 'react';
    
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

function AddModal() {

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [myButton, setMyButton] = useState("add friend")
    

const myBtnFunc = () => {

   setMyButton("Requested")

}
 
    
    
      return (
        <> 
    <div>
      <Button onClick={handleOpen}>Add Friend</Button>
      <Modal
        keepMounted
        open={open}
        onClose={handleClose}
        aria-labelledby="keep-mounted-modal-title"
        aria-describedby="keep-mounted-modal-description"
      >
        {/* <Box sx={style}>
          <Typography id="keep-mounted-modal-title" variant="h6" component="h2">
            Text in a modal
          </Typography>
          <Typography id="keep-mounted-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography>
        </Box> */}
 
 <div className='container mx-auto flex flex-col items-center gap-2 py-10 bg-[#FFFFFF] w-[25%] shadow-xl rounded my-36'>
 <div className='flex flex-row items-center gap-8'>
    <div className='flex flex-row gap-4'>
    <Avatar variant='dot' alt="Remy Sharp" src="/assets/person/pexelsprofile.jpg"/> 
    <p className='font-bold'>Salman bhai</p> 
    </div>
    

    <div>
        <button className='bg-[#1877F2] text-[#FFFF] p-2 rounded ' onClick={myBtnFunc}>{myButton}</button>
    </div>
     </div>

     <div className='flex flex-row items-center gap-8'>
    <div className='flex flex-row gap-4'>
    <Avatar variant='dot' alt="Remy Sharp" src="/assets/person/pexelsprofile.jpg"/>
    <p className='font-bold'>Salman bhai</p> 
    </div>
    

     <div>
        <button className='bg-[#1877F2] text-[#FFFF] p-2 rounded' onClick={myBtnFunc}>{myButton}</button>
     </div>
     </div>



     <div className='flex flex-row items-center gap-8'>
    <div className='flex flex-row gap-4'>
    <Avatar variant='dot' alt="Remy Sharp" src="/assets/person/pexelsprofile.jpg"/>
    <p className='font-bold'>Salman bhai</p> 
    </div>
    

     <div>
        <button className='bg-[#1877F2] text-[#FFFF] p-2 rounded' onClick={myBtnFunc}>{myButton}</button>
        </div>
     </div>


     <div className='flex flex-row items-center gap-8'>
    <div className='flex flex-row gap-4'>
    <Avatar variant='dot' alt="Remy Sharp" src="/assets/person/pexelsprofile.jpg"/>
    <p className='font-bold'>Salman bhai</p> 
    </div>
    

     <div>
        <button className='bg-[#1877F2] text-[#FFFF] p-2 rounded' onClick={myBtnFunc}>{myButton}</button>
        </div>
     </div>

     <div className='flex flex-row items-center gap-8'>
    <div className='flex flex-row gap-4'>
    <Avatar variant='dot' alt="Remy Sharp" src="/assets/person/pexelsprofile.jpg"/>
    <p className='font-bold'>Salman bhai</p> 
    </div>
     <div>
        <button className='bg-[#1877F2] text-[#FFFF] p-2 rounded' onClick={myBtnFunc}>{myButton}</button>
        </div>
     </div>

     <div className='flex flex-row items-center gap-8'>
    <div className='flex flex-row gap-4'>
    <Avatar variant='dot' alt="Remy Sharp" src="/assets/person/pexelsprofile.jpg"/>
    <p className='font-bold'>Salman bhai</p> 
    </div>
    

     <div>
        <button className='bg-[#1877F2] text-[#FFFF] p-2 rounded' onClick={myBtnFunc}>{myButton}</button>
        </div>
     </div>
 </div>
</Modal>
    </div>
        </>
       
      );
    
      }






  

export default AddModal