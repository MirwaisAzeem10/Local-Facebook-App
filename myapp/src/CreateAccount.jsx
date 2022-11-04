import React, { useEffect } from 'react'
import { db, } from "./firebase-config";
import { collection, addDoc, getDocs,} from "firebase/firestore";
import {useState} from 'react'
import { Button, FormControlLabel, Radio } from "@mui/material";

function CreateAccount() {


   const [myFirstName, setMyFirstName] = useState("")
   const [myLastName, setMyLastName] = useState("")
   const [myEmail, setMyEmail] = useState("")
   const [myPassword, setMyPassword] = useState("")
   const [myDateOfBirth, setDateOfBirth] = useState({
    month: null,
    date: null,
    year: null
   })

   
   const [myGender, setMyGender] = useState("")
    
   
    const userCollectionRef = collection(db, 'users');
   
    const [userData, setUserData] = useState(
        // firstname: myFirstName,
        // lastname: myLastName,
        // email: myEmail, 
        // password: "",
        // dateofbirth: myDateOfBirth,
        // gender: myGender,
    ) 
    //  if (setUserData) {
    //   alert("data submitted to firestore")
      
    //  } else {
    //   console.log("Error Accured")

    //  }

    const createUser = () => {
      addDoc( userCollectionRef, {
        firstname: myFirstName,
        lastname: myLastName,
        email: myEmail, 
        password: "",
        dateofbirth: myDateOfBirth,
        gender: myGender,
      }
  
       
      )

    }
    
 

    useEffect(() => {
      const getUsers = async () => {
      const data = await getDocs(userCollectionRef);
      setUserData(data.docs.map((doc) => ({...doc.data(), id: doc.id})))

      };

      getUsers();

    }, []);
    

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
          <div className='flex justify-center items-center py-10'>
            <p className='text-[3rem] text-[#1877F2] font-extrabold'>Facebook</p>
          </div>
        <div className="container mx-auto flex flex-col gap-2 bg-[#FFFFFF] drop-shadow-xl p-2 w-[30%] px-5">
          <div className="flex justify-center items-center pt-5">
            <p className="text-[1.5rem] font-bold">Create a new account</p>
          </div>
          <div className="flex justify-center items-center">
            <p className='text-[#606770]'>it's quick and easy.</p>
          </div>
          <div>
            <hr className="w-full" />
          </div>
          <div className="flex justify-center items-center gap-4 pt-5 px-5 ">
            <input
              name="firstName"
              className="flex p-2 px-7 border-[1px] rounded text-start"
              type="text"
              placeholder="firstname"
              onChange={(event) => {
              setMyFirstName(event.target.value);
            }}

            />
            <input
              name="lastName"
              className="flex p-2 px-7 border-[1px] rounded text-start"
              type="text"
              placeholder="lastname"
              onChange={(event) => {
              setMyLastName(event.target.value);
            }}
              
            />
          </div>
          <div className="flex justify-start items-start text-start">
            <input
              name="email"
              className="p-2  w-[100%] border-[1px] rounded"
              type="email"
              placeholder="Mobile number or email"
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
              onChange={(event) => {
              setMyPassword(event.target.value);
            }}
            
            />
          </div>
          {/* <div className="flex justify-start">
            <p className="text-sm text-[#606770]">Date of birth ?</p>
          </div>
          <div className="flex flex-row gap-8">
            <select
              className="p-2 border-[1px] w-[25%]"
              onChange={setUserData}
              // value={userData.dateofbirth}
            >
              {Array(31)
                .fill(0)
                .map((_, index) => (
                  <option>{index + 1}</option>
                ))}
            </select>
            <select
              className="p-2 border-[1px] w-[25%]"
              onChange={(event) => setDateOfBirth({...myDateOfBirth, month: event.target.value})}
              value={dateofbirth.month}
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
              onChange={(event) => setDateOfBirth({...myDateOfBirth, year: event.target.value})}
              value={dateofbirth.year}
              name="date of birth"
            >
              {getYears().map((year) => (
                <option>{year}</option>
              ))}
            </select>
          </div> */}
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
            {/* <Button
            //   onClick={signupFunction}
              variant="contained"
              color="success"
            >
              Sign Up
            </Button> */}
            <button type="button" class="w-[30%] focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
            onClick={createUser}>Sign Up</button>

          </div>
        </div>
    </>

    










  )
}

export default CreateAccount