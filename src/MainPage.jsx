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

function MainPage() {
  return (
    <>
      <div className="flex justify-between  flex-row items-center  gap-4 mt-4">
        <div className="flex flex-row bg-[#F9F9F9] px-4 gap-4 mt-4">
          <p className="text-[#1877F2] text-[2rem] font-bold">Facebook</p>
          <input className="px-8" type="text" placeholder="Search" />
        </div>
        <div className="flex flex-row gap-24">
          <HomeIcon fontSize="large"/>
          <OndemandVideoIcon  fontSize="large"/>
          <AllInboxIcon fontSize="large"/>
          <GroupAddIcon fontSize="large"/>
         
        </div>

          <div className="px-10">
          <Button
          onClick={() => console.log("Yes its Clicked")}
          >Logout</Button>

          </div>
        
      </div>
      <div>
        <hr className="border-[1px] border-[]" />
      </div>
      <Stories/>

      <div className="flex justify-between  flex-row   gap-8 mt-4 px-20">
       <Sidebar />
       <div>
          
          <Post/>
       </div>
      
       <div className="">
       {/* <h3>Online Users</h3>  */}
       <Secondsidebar />

       </div>
      </div>
     

     


      
    </>
  );
}

export default MainPage;
