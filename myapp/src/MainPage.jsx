import React from "react";
import HomeIcon from '@mui/icons-material/Home';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import AllInboxIcon from '@mui/icons-material/AllInbox';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import { Button } from "@mui/material";
import "./MainPage.css"
import Sidebar from "./Sidebar";
import Stories from "./Stories";
import Secondsidebar from "./Secondsidebar";
import Post from "./Post";
import NotificationsIcon from '@mui/icons-material/Notifications';
import MessageIcon from '@mui/icons-material/Message';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import {useNavigate} from 'react-router-dom';
import Activity from "./Activity";
import { signOut} from "firebase/auth";
import { useState } from "react";
import { async } from "@firebase/util";
import {auth} from "./firebase-config";
import {useEffect} from "react";
import AddModal from "./AddModal";
import Avatar from '@mui/material/Avatar';
import Modal from '@mui/material/Modal';

function MainPage() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);   
  const [color, setColor] = useState("")
  const [myButton, setMyButton] = useState("add a friend")

 
  const openModal = () => {
    navigate("/add-modal")
  }



  const navigate = useNavigate();
  // const navigateHome = () => {

  //   navigate("/headertwo") 
  //   alert("logout Successful")
 

          
  // }

  const logout = async () => {

    try {
      
      await signOut(
        auth
       ) ;
       navigate("/")
       alert("Logout Successfully")

    } catch (error) {
      
    }
      
  };


  const myhomeFunc  = () => {
    navigate("/mainpage")
  }


  const myvideoFunc = () => {

     navigate("/myvideo")
  }
  
  const myinboxFunc = () => {
    navigate("/inbox")
  }

  const addfriendFunc = () => {

    navigate("/addfriend")
  }
 

  
  

  return (
    <>
      <div className="flex justify-between  flex-row items-center  gap-4 mt-4">
        <div className="flex flex-row bg-[#F9F9F9] px-4 gap-4 mt-4">
          <p className="text-[#1877F2] text-[1.5rem] font-bold">Facebook</p>
          <input className="px-8" type="text" placeholder="Search" />
        </div>
        <div className="flex flex-row gap-24">
        <div>
        <HomeIcon onClick={myhomeFunc} fontSize="large"/>
        </div>
        <div>
        <OndemandVideoIcon onClick={myvideoFunc} fontSize="large"/>
        </div>
        <div>
        <AllInboxIcon onClick={myinboxFunc} fontSize="large"/>
        </div>
        <div>
        <GroupAddIcon fontSize="large" onClick={openModal}

        />
<Modal>
    <div className='container mx-auto flex flex-col items-center gap-2 py-10 bg-[#FFFFFF] w-[25%]'>
    <div className='flex flex-row items-center gap-8'>
    <div className='flex flex-row gap-4'>
    <Avatar variant='dot' alt="Remy Sharp" src="/assets/person/pexelsprofile.jpg"/> 
    <p>Salman bhai</p> 
    </div>
    

    <div>
        <button className='bg-[#1877F2] text-[#FFFF] p-2 rounded '>Add Friend</button>
    </div>
     </div>

     <div className='flex flex-row items-center gap-8'>
    <div className='flex flex-row gap-4'>
    <Avatar variant='dot' alt="Remy Sharp" src="/assets/person/pexelsprofile.jpg"/>
    <p>Salman bhai</p> 
    </div>
    

     <div>
        <button className='bg-[#1877F2] text-[#FFFF] p-2 rounded'>Add Friend</button>
     </div>
     </div>



     <div className='flex flex-row items-center gap-8'>
    <div className='flex flex-row gap-4'>
    <Avatar variant='dot' alt="Remy Sharp" src="/assets/person/pexelsprofile.jpg"/>
    <p>Salman bhai</p> 
    </div>
    

     <div>
        <button className='bg-[#1877F2] text-[#FFFF] p-2 rounded'>Add Friend</button>
        </div>
     </div>


     <div className='flex flex-row items-center gap-8'>
    <div className='flex flex-row gap-4'>
    <Avatar variant='dot' alt="Remy Sharp" src="/assets/person/pexelsprofile.jpg"/>
    <p>Salman bhai</p> 
    </div>
    

     <div>
        <button className='bg-[#1877F2] text-[#FFFF] p-2 rounded'>Add Friend</button>
        </div>
     </div>

     <div className='flex flex-row items-center gap-8'>
    <div className='flex flex-row gap-4'>
    <Avatar variant='dot' alt="Remy Sharp" src="/assets/person/pexelsprofile.jpg"/>
    <p>Salman bhai</p> 
    </div>
     <div>
        <button className='bg-[#1877F2] text-[#FFFF] p-2 rounded'>Add Friend</button>
        </div>
     </div>

     <div className='flex flex-row items-center gap-8'>
    <div className='flex flex-row gap-4'>
    <Avatar variant='dot' alt="Remy Sharp" src="/assets/person/pexelsprofile.jpg"/>
    <p>Salman bhai</p> 
    </div>
    

     <div>
        <button className='bg-[#1877F2] text-[#FFFF] p-2 rounded'>Add Friend</button>
        </div>
     </div>
 </div>
</Modal>
        </div>
        </div>
         
          <div className="flex flex-row gap-2">
          <NotificationsIcon />
          <MessageIcon />
          <PeopleAltIcon />
          </div>

          <div className="px-10">

          <Button
          onClick={logout}
          >Logout</Button>

          {/* <button onClick={navigateHome} type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Log out</button> */}


          </div>
          
         
          
        
      </div>
      <div>
        <hr className="border-[1px] border-[]" />
      </div>
      {/* <Stories/> */}

      <div className="flex justify-between  flex-row   gap-8 mt-4 px-20">
       <Sidebar />
       <div className="max-w-3xl w-full">
          
    {/* Gallery */}
      <Stories/>


          <Post/>
       </div>
      
       <div className="">
       {/* <h3>Online Users</h3>  */}
       {/* <Activity/> */}
       <Secondsidebar />

       </div>
      </div>
     

     


      
    </>
  );
}

export default MainPage;
