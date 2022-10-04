import React from "react";
import { Button, FormControlLabel, Radio } from "@mui/material";
import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "./firebase-config";
import { useNavigate } from "react-router-dom";
import { ref, set } from "firebase/database";
// import {Storage} from "./firebase";+

function Signin() {
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const [userData, setUserData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    dob: "",
    gender: " ",
  });

  const postUserData = (event) => {
    console.log(event.target.name);
    const name = event.target.name;
    const value = event.target.value;
    setUserData({ ...userData, [name]: value });
  };

  const signupFunction = async () => {
    try {
      console.log('userData.email, userData.password', userData.email, userData.password)
      const user = await createUserWithEmailAndPassword(auth, userData.email, userData.password);
      await handleSubmit(user)
      navigate("/");
      alert("");
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = async (user) => {
    const res = await fetch(
      "https://mybook-d10-default-rtdb.firebaseio.com/userDataRecord.json",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      }
    );
    if (res) {
       setUserData({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        dob: "",
        gender: " ",
       })
      alert("data stored");
    } else {
      alert("plz fill the data");
    }
  };

  function getYears() {
    const years = [];
    let year = 1905;
    while (year !== new Date().getFullYear()) {
      years.push(year);
      year++;
    }
    years.push(year);
    return years.reverse();
  }

  return (
    <>
      <form>
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
              name="firstName"
              className="p-2 border-[1px]"
              type="text"
              placeholder="firstname"
              value={userData.firstName}
              onChange={postUserData}
            />
            <input
              name="lastName"
              className="p-2 border-[1px]"
              type="text"
              placeholder="lastname"
              value={userData.lastName}
              onChange={postUserData}
            />
          </div>
          <div className="flex justify-start items-start text-start">
            <input
              name="email"
              className="p-2  w-[100%] border-[1px]"
              type="email"
              placeholder="Mobile number or email"
              value={userData.email}
              onChange={postUserData}
            />
          </div>
          <div className="flex justify-start items-start text-start">
            <input
              className="p-2  w-[100%] border-[1px]"
              type="password"
              name="password"
              placeholder="New password"
              value={userData.password}
              onChange={postUserData}
            />
          </div>
          <div className="flex justify-start">
            <p className="text-sm text-[#606770]">Date of birth ?</p>
          </div>
          <div className="flex flex-row gap-8">
            <select
              className="p-2 border-[1px] w-[25%]"
              onChange={setUserData}
              value={userData.dob}
            >
              {Array(31)
                .fill(0)
                .map((_, index) => (
                  <option>{index + 1}</option>
                ))}
            </select>
            <select
              className="p-2 border-[1px] w-[25%]"
              onChange={setUserData}
              value={userData.dob}
            >
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
            <select
              className="p-2 border-[1px] w-[25%]"
              onChange={setUserData}
              value={userData.dob}
              name="dob"
            >
              {getYears().map((year) => (
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
