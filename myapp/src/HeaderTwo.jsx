import React, { useState } from "react";
import HomeIcon from "@mui/icons-material/Home";
import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword,} from "firebase/auth"
import {auth} from "./firebase-config"

function HeaderTwo() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();


const forgotFunc = () => {
  navigate('/forget')
}


  const myfunction = () => {

  return email.length > 0 && password.length > 0;

 };

  
 function handleSubmit(event) {
  event.preventDefault();


}


const myLogin = async () => {

  try {
  const user = await  signInWithEmailAndPassword(
    auth,
    email,
    password,
  );
  navigate('/mainpage')
  alert("login Successfully")

    console.log(user);
    
    
  } catch (error) {
    console.log(error.message); 
    console.log("Error is occur");
  }
 
}


// const myLogout = async () => {
// try {
// const user = await createUserWithEmailAndPassword();
  
// } catch (error) {
  
// }

// }

const myRegister = () => {
  navigate("/signin")
  // alert("done")
}


  return (
    <>
      <div className="flex justify-center items-center col-span-2 gap-8 mt-24 flex-wrap "> 
        <div className="text-start gap-2">
          <p className="text-[#1877F2] text-[3.5rem] font-extrabold ">Facebook</p>
          <p className="text-[1.5rem] px-4 pr-4">
            Facebook helps you connect and share <br/> with the people in your life.
          </p>
        </div>
        <form onSubmit={handleSubmit}>

        <div className="flex flex-col gap-2 bg-[#] p-12 rounded-md">
          <div className="flex justify-center items-center">
            <input
              className="px-10 py-2 border-[1px] rounded bg-[#F9F9F9] text-start"
              type="email"
              required
              placeholder="Enter Your Email or Phone"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="flex justify-center items-center">
            <input  
              className="px-10 py-2 border-[1px] rounded bg-[#F9F9F9] text-start"
              type="password"
              required
              placeholder="Enter Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="flex justify-center items-center">
            <button  onClick={myLogin} type="submit" className="bg-[#1877F2] rounded w-52 p-2 text-[#FFFF]">
              Login
            </button>
          </div>
          <div className="flex justify-center items-center">
            <button className="text-[#1877F2] bg-none"  onClick={forgotFunc}>forgotten password?</button>
          </div>
          <div className="my-4">
            <hr className="border-[1px] border-gray-200 " /> 
          </div>
          <div className="flex justify-center items-center">
            <button onClick={myRegister} className="bg-[#42B72A] text-[#FFF] rounded w-52 p-2">
              Create New Account
            </button>
          </div>
          <div className="flex flex-row items-center px-8">
            <p>
            <a href="/create-account">
            <span className="font-bold underline">Create a Page </span>
            </a>
              Create
              a Page for a celebrity, brand or business
            </p>
          </div>
        </div>
        </form>
       
      </div>
      
    </>
  );
}

export default HeaderTwo;
