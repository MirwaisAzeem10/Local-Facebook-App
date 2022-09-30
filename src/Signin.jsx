import React from "react";
import { Button, FormControlLabel, Radio } from "@mui/material";
import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "./firebase-config";
import { useNavigate } from "react-router-dom";
import {Storage} from "./firebase";
function Signin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    password: "",
    dob: null,
    gender: "",
    
  });




  const signupFunction = async () => {
    try {
      const user = await createUserWithEmailAndPassword(auth, email, password);
      navigate("/");
      alert("");
    } catch (error) {
      console.log(error);
    }
  };

  function handleSubmit(event) {
    event.preventDefault();
  }

  function getYears() {
    const years = [];
    let year = 1905;
    while (year !== new Date().getFullYear()) {
      years.push(year);
      year++;
    }
    years.push(year);
    return years.reverse()
  }

  

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="container mx-auto flex flex-col gap-2 bg-[#FFFFFF] shadow-xl p-2 w-[30%]">
          <div className="flex justify-start ">
            <p className="text-[1.5rem] font-bold">Sign Up</p>
          </div>
          <div className="flex justify-start">
            <p>it's quick and easy.</p>
          </div>
          <div>
            <hr className="border-[1px] w-full" />
          </div>
          <div className="flex  flex-row items-center gap-4 pt-5">
            <input
              className="p-2 border-[1px]"
              type="text"
              placeholder="firstname"
            />
            <input
              className="p-2 border-[1px]"
              type="text"
              placeholder="surname"
            />
          </div>
          <div className="flex justify-start items-start text-start">
            <input
              className="p-2  w-[100%] border-[1px]"
              type="text"
              placeholder="Mobile number or email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="flex justify-start items-start text-start">
            <input
              className="p-2  w-[100%] border-[1px]"
              type="password"
              placeholder="New password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="flex justify-start">
            <p className="text-sm text-[#606770]">Date of birth ?</p>
          </div>
          <div className="flex flex-row gap-8">
            <select className="p-2 border-[1px] w-[25%]">
              {Array(31).fill(0).map((_, index) => (
                <option>{index + 1}</option>
              ))}
            </select>
            <select className="p-2 border-[1px] w-[25%]">
              <option>Jan</option>
              <option>Feb</option>
              <option>Mar</option>
              <option>Apr</option>
              <option>May</option>
              <option>Jun</option>
              <option>Jul</option>
              <option>Aug</option>
              <option>Sep</option>
              <option>Oct</option>
              <option>Nov</option>
              <option>Dec</option>
            </select>
            <select className="p-2 border-[1px] w-[25%]">
            {getYears().map(year => (
              <option>{year}</option>
            ))}
            </select>
          </div>
          <div className="flex justify-start">
            <p className="text-sm text-[#606770]">Gender ?</p>
          </div>

          <div className="flex flex-row gap-4">
            {/* <FormControlLabel   labelPlacement="start" value="female" control={<Radio />} label="Female" />
     <FormControlLabel   labelPlacement="start" value="male"  control={<Radio />} label="Male" />
     <FormControlLabel   labelPlacement="start" value="other" control={<Radio />} label="Other" /> */}
            <div className="flex justify-center items-center gap-2 border-[1px] w-[25%] p-2">
              <label>Female</label>
              <input type="radio" />
            </div>
            <div className="flex justify-center border-[1px] gap-2  w-[25%] p-2">
              <label>Male</label>
              <input type="radio" />
            </div>
            <div className="flex justify-center border-[1px] gap-2 w-[25%] p-2">
              <label>Other</label>
              <input type="radio" />
            </div>
          </div>
          <div className="flex flex-col py-6">
            <p className="text-sm">
              People who use our service may have uploaded your contact
              information to Facebook. Learn more. By clicking Sign Up, you
              agree to our Terms, Privacy Policy and Cookies Policy. You may
              receive SMS notifications from us and can opt out at any time.
            </p>
          </div>
          <div className="py-6">
            <Button
              onClick={signupFunction}
              variant="contained"
              color="success"
            >
              Sign Up
            </Button>
          </div>
        </div>
      </form>
    </>
  );
}

export default Signin;
