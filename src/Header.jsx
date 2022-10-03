import React from "react";

function Header() {
  return (
    <>
      <div className=" flex justify-between items-center gap-8 bg-[#3C5B99] w-full h-24">
        <div className="flex justify-start items-center">
          <p className="text-[2rem] font-bold px-6 text-[#FFFF]">Facebook</p>
        </div>
        <div className="flex flex-row gap-4 px-6">
          <div className="flex flex-col gap-2">
            <label className="text-[#FFFF]">Email or Phone</label>
            <input className=" px-2" type="text" placeholder="name" />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-[#FFFF]">Password</label>
            <input className=" px-2" type="text" placeholder="password" 
              
            />
          </div>

          <div className="">
            <button className="bg-[#4267AE] rounded text-[#FFFF] px-4 py-2 mt-4">
              Login
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
