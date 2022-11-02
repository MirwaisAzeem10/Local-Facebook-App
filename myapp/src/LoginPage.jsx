import React from "react";
import HomeIcon from "@mui/icons-material/Home";
function LoginPage() {
  return (
    <>
      <div className="flex col-span-2">
        <div className="flex flex-row bg-[#F9F9F9] px-4 gap-4 mt-4">
          <img className="w-10" src="/images/facebook.png" alt="" />
          <input className="px-8" type="text" placeholder="Search" />
        </div>

        <div className="flex flex-row gap-2 py-6">
          <HomeIcon />
          <HomeIcon />
          <HomeIcon />
          <HomeIcon />
        </div>
      </div>
    </>
  );
}

export default LoginPage;
