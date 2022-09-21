import React from "react";
import HomeIcon from '@mui/icons-material/Home';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import AllInboxIcon from '@mui/icons-material/AllInbox';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import "./MainPage.css"


function MainPage() {
  return (
    <>
      <div className="flex justify-between  flex-row items-center  gap-4 mt-4">
        <div className="flex flex-row bg-[#F9F9F9] px-4 gap-4 mt-4">
          <p className="text-[#1877F2] text-[1.5rem] font-bold">Facebook</p>
          <input className="px-8" type="text" placeholder="Search" />
        </div>
        <div className="flex flex-row gap-6">
          <HomeIcon style={{width: "120px"}}/>
          <OndemandVideoIcon style={{width: "120px"}}/>
          <AllInboxIcon style={{width: "120px"}}/>
          <GroupAddIcon style={{width: "120px"}}/>
         
        </div>

          <div className="px-10">
         <button className="border-[1px] rounded">Logout</button>

          </div>
        
      </div>
      <div>
        <hr className="border-[1px] border-[]" />
      </div>


      <div className="container mx-auto header">

            <div className="headerWrapper">

                   <div className="headerTop">

                      <div className="headerOptions">
                        <span className="headerText">Stories</span>
                      </div>

                      <div className="headerOptions"> 
                        <span className="headerText">Reels</span>
                      </div>

                      <div className="headerOptions"> 
                        <span className="headerText">Rooms</span>
                      </div>
                       
                   </div>

                   <hr className="headerHr"></hr>

                   <div className="headerBottom">

                      <div className="headerBottomPartial">
                        <img className="headerImg" src="/assets/person/mert.jpg" alt="" />
                        <img className="headerImg1" src="/assets/person/mert.jpg" alt="" />
                        <h5 className="headerImgText1">Create a story</h5>
                      </div>

                      <div className="headerBottomPartial">
                        <img className="headerImg" src="/assets/person/moriarty.jpg" alt="" /> 
                        <img className="headerImg1" src="/assets/person/moriarty.jpg" alt="" />
                        <h5 className="headerImgText2">Faizan Anwer Ali</h5>
                      </div>

                      <div className="headerBottomPartial">
                        <img className="headerImg" src="/assets/person/patrick.jpg" alt="" />
                        <img className="headerImg1" src="/assets/person/patrick.jpg" alt="" />
                        <h5 className="headerImgText3">Salman Khan</h5>
                      </div>

                      <div className="headerBottomPartial">
                        <img className="headerImg" src="/assets/person/tyler.jpg" alt="" />
                        <img className="headerImg1" src="/assets/person/tyler.jpg" alt="" />
                        <h5 className="headerImgText4">Amjad Bhai</h5>
                      </div>

                      <div className="headerBottomPartial">
                        <img className="headerImg" src="/assets/person/kayzer.jpg" alt="" />
                        <img className="headerImg1" src="/assets/person/kayzer.jpg" alt="" />
                        <h5 className="headerImgText5">Falak Share</h5>
                      </div>
                       
                   </div>

            </div>

        </div>


    </>
  );
}

export default MainPage;
