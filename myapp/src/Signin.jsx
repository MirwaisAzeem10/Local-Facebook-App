import React from "react";
import { Button, FormControlLabel, Radio } from "@mui/material";
import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "./firebase-config";
import { useNavigate } from "react-router-dom";
import { ref, set } from "firebase/database";
import { addDoc,collection } from "firebase/firestore";

// import {Storage} from "./firebase";

function Signin() {
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState(""); 
  const [lastName, setLastName] = useState("");
  const [myEmail, setMyEmail] = useState("");
  const [myDateOfBirth, setMyDateOfBirth] = useState("");
  const [myGender, setMyGender] = useState("");
  const navigate = useNavigate();
  const signupCollectionRef = collection(db, 'signup');
  const [userData, setUserData] = useState();


  const signUp = () => {
    addDoc (signupCollectionRef, {
      firstname: firstName,
      lastname: lastName,
      email: myEmail,
      password: "",
      dateofbirth: myDateOfBirth,
      gender: myGender,

    });
   
    
   if(addDoc) { 
    navigate('/')
    alert("data successfully stored");
   } else {
    alert("data not submitted")
    
   }


  }



   // const postUserData = (event) => {
  //   console.log(event.target.name);
  //   const name = event.target.name;
  //   const value = event.target.value;
  //   setUserData({ ...userData, [name]: value });
  // };

  // const signupFunction = async () => {
  //   try {
  //     console.log('userData.email, userData.password', userData.email, userData.password)
  //     const user = await createUserWithEmailAndPassword(auth, userData.email, userData.password);
  //     await handleSubmit(user)
  //     navigate("/");
  //     alert("");
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // const handleSubmit = async (user) => {
  //   const res = await fetch(
  //     "https://mybook-d10-default-rtdb.firebaseio.com/userDataRecord.json",
  //     {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify(userData),
  //     }
  //   );

  //   if (res) {
  //      setUserData({
  //       firstName: "",
  //       lastName: "",
  //       email: "",
  //       password: "",
  //       dob: "",
  //       gender: " ",
  //      })
  //     alert("data stored");
  //   } else {
  //     // alert("plz fill the data");
  //     alert("data not stored")
  //   }
  // };

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
             
      <form className="flex justify-center items-center">
        <div className="container mx-auto flex flex-col gap-2 bg-[#FFFFFF] shadow-xl p-2 w-[25%]">
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
              className="p-2 border-[1px] w-[100%] rounded"
              type="text"
              placeholder="firstname"
              // value={userData.firstName}
              onChange={(event) => {
              setFirstName(event.target.value);
            }}
            
            />
            <input
              name="lastName"
              className="p-2 border-[1px] w-[100%] rounded"
              type="text"
              placeholder="lastname"
              // value={userData.lastName}
              onChange={(event) => {
              setLastName(event.target.value);
            }}
            
            />
          </div>
          <div className="flex justify-start items-start text-start">
            <input
              name="email"
              className="p-2  w-[100%] border-[1px] rounded"
              type="email"
              placeholder="Mobile number or email"
              // value={userData.email}
              onChange={(event) => {
              setMyEmail(event.target.value);
            }}
            
            />
          </div>
          <div className="flex justify-start items-start text-start">
            <input
              className="p-2  w-[100%] border-[1px] rounded"
              type="password"
              name="password"
              placeholder="New password"
              // value={userData.password}
              onChange={(event) => {
                setPassword(event.target.value);
            }}
            />
          </div>
          <div className="flex justify-start">
            <p className="text-sm text-[#606770]">Date of birth ?</p>
          </div>
          <div className="flex flex-row gap-8">
            <select
              className="p-2 border-[1px] w-[25%] rounded"
              onChange={(event) => setMyDateOfBirth({...myDateOfBirth, date: event.target.value})}
              value={myDateOfBirth.date}
            >
              {Array(31)
                .fill(0)
                .map((_, index) => (
                  <option>{index + 1}</option>
                ))}
            </select>
            <select
              className="p-2 border-[1px] w-[25%] rounded"
              onChange={(event) => setMyDateOfBirth({...myDateOfBirth, month: event.target.value})}
              value={myDateOfBirth.month}
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
              className="p-2 border-[1px] w-[25%] rounded"
              onChange={(event) => setMyDateOfBirth({...myDateOfBirth, year: event.target.value})}
              value={myDateOfBirth.year}

              // value={userData.dateofbirth}
              name="date of birth"
            >
              {getYears().map((year) => (
                <option>{year}</option>
              ))}
            </select>
          </div>
          <div className="flex justify-start">
            <p className="text-sm text-[#606770]">Gender ?</p>
          </div>

          <div className="flex justify-start items-center gap-8">
            {/* <FormControlLabel   labelPlacement="start" value="female" control={<Radio />} label="Female" 
               onChange={(event) => setMyGender({...myGender, female: event.target.value})}
               className=" w-[26%]"
            />
            <FormControlLabel   labelPlacement="start" value="male"  control={<Radio />} label="Male" 
               onChange={(event) => setMyGender({...myGender, male: event.target.value})}
               className=" w-[26%]"
            />
            <FormControlLabel   labelPlacement="start" value="other" control={<Radio />} label="Other" 
               onChange={(event) => setMyGender({...myGender, other: event.target.value})}
               className="w-[26%]"
            /> */}
            <div className="flex justify-center items-center gap-2 border-[1px] w-[25%] p-2 rounded">
              <label>Female</label>
              <input type="radio"
              onChange={(event) => setMyGender({...myGender, female: event.target.value})}

              />
            </div>
            <div className="flex justify-center border-[1px] gap-2  w-[25%] p-2 rounded">
              <label>Male</label>
              <input type="radio" 
              onChange={(event) => setMyGender({...myGender, male: event.target.value})}

              />
            </div>
            <div className="flex justify-center border-[1px] gap-2 w-[25%] p-2 rounded">
              <label>Other</label>
              <input type="radio" 
              onChange={(event) => setMyGender({...myGender, other: event.target.value})}

              />
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
          <div className="py-4">
            {/* <Button
              onClick={signupFunction}
              variant="contained"
              color="success"
            >
              Sign Up
            </Button> */}
            <button className="w-[40%] bg-[#00A400] text-white
             rounded p-2 text-lg font-bold" onClick={signUp}>Sign Up</button>
          </div>
        </div>
      </form>
    </>
  );
}

export default Signin;
