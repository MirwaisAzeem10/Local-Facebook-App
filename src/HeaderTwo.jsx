import React, { useState } from "react";
import HomeIcon from "@mui/icons-material/Home";
import { useNavigate } from "react-router-dom";
import {createUserWithEmailAndPassword} from "firebase/auth"
import {auth} from "./firebase-config"

function HeaderTwo() {

  const [email, setEmail] = useState("");
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();


  const navigateLogin = () => {

  }


  const myfunction = () => {

  return email.length > 0 && password.length > 0;

 };

  
 function handleSubmit(event) {
  event.preventDefault();


}


const myLogin = async () => {

  try {
  const user = await createUserWithEmailAndPassword(
    auth,
    email,
    password,
  );
  navigate('/mainpage')
  alert("login Successfully")

    console.log(user);
    

  } catch (error) {
    console.log(error.message);
  }
 
}


const myLogout = async () => {
try {
const user = await createUserWithEmailAndPassword();
  
} catch (error) {
  
}

}



const myRegister = () => {
  navigate("/register")
  alert("done")
}
  return (
    <>
      <div className="flex justify-center items-center col-span-2 gap-8 mt-24  flex-wrap">
        <div>
          <p className="text-[#1877F2] text-[3rem] font-bold">Facebook</p>
          <p className="text-[1.5rem] px-4">
            Facebook helps you connect and share with the people in your life.
          </p>
        </div>
        <form onSubmit={handleSubmit}>

        <div className="flex flex-col gap-2 bg-[#F0F2F5] p-16 rounded-md">
          <div className="flex justify-center items-center">
            <input
              className="px-10 py-2 border-[1px] rounded bg-[#F9F9F9]"
              type="email"
              required
              placeholder="Enter Your Email or Phone"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="flex justify-center items-center">
            <input
              className="px-10 py-2 border-[1px] rounded bg-[#F9F9F9]"
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
            <p className="text-[#1877F2]">forgotten password?</p>
          </div>
          <div className="my-4">
            <hr className="border-[1px] border-gray-200 " /> 
          </div>
          <div className="flex justify-center items-center">
            <button onClick={myRegister} className="bg-[#42B72A] text-[#FFF] rounded w-52 p-2">
              Create New Account
            </button>
          </div>
          <div className="flex justify-center items-center ">
            <p className="">
              <span className="font-bold underline">Create a Page </span> Create
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
