import React, { useState } from 'react'
import {createUserWithEmailAndPassword} from "firebase/auth"
import {auth} from "./firebase-config"
import { useNavigate } from 'react-router-dom';
function Register() {
 
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

   const mySignup = async () =>{
      
     try {
    const user = await createUserWithEmailAndPassword(
    auth,
    email,
    password,

   

    );
    navigate("/headertwo")
    alert("Data Successfully Submitted");

  
     } catch (error) {
        
     }

   } 
      
     
 function handleSubmit(event) {
  event.preventDefault();


}
   


    
  return (
    <>
        
<form className='px-10'  onSubmit={handleSubmit}> 
  <div class="mb-6 text-start ">
    <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">First Name</label>
    <input type="name" id="name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@flowbite.com" required=""
      onChange={(e) => setFirstName(e.target.value)}
    />
  </div>
  <div class="mb-6 text-start ">
    <label for="lastname" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Last Name</label>
    <input type="lastname" id="lastname" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@flowbite.com" required="" 
      onChange={(e) => setLastName(e.target.value)}
    />
  </div>
  <div class="mb-6 text-start ">
    <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your email</label>
    <input type="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@flowbite.com" required=""
      onChange={(e) => setEmail(e.target.value)}
    />
  </div>
  <div class="mb-6 text-start ">
    <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your password</label>
    <input type="password" id="password" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required=""
      onChange={(e) => setPassword(e.target.value)}
    />
  </div>
  {/* <div class="flex items-start mb-6 ">
    <div class="flex items-center h-5">
      <input id="remember" type="checkbox" value="" class="w-4 h-4 bg-gray-50 rounded border border-gray-300 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800" required=""/>
    </div>
    <label for="remember" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Remember me</label>
  </div> */}
  <button onClick={mySignup} type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
</form>

    </>
  )
}

export default Register