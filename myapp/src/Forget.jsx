import React from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import { toast } from "react-toastify";
import { getAuth, sendPasswordResetEmail } from "firebase/auth";
// import { ReactComponent as ArrowRightIcon } from '..assets/svg/';
import { useState } from "react";
import { async } from "@firebase/util";

function Forget() {
  const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const onChange = (e) => setEmail(e.target.value);

  const onSubmit = async (e) => {
    e.preventDefault();
    console.log(email);
    try {
      const auth = getAuth();
      await sendPasswordResetEmail(auth, email);
      toast.success("email was send");
    } catch (error) {
      toast.error("could not send reset email");
    }
  };

  const exitFunc = () => {
    navigate("/");
  };

  // function handleSubmit(event) {
  //   event.preventDefault();

  // }

  return (
    <>
      <Navbar />
      <form className="" onSubmit={onSubmit}>
        <div className="py-10 bg-[#E9EBEE]">
          <div className="container mx-auto flex flex-col gap-2 bg-[#FFFFFF] rounded shadow-xl p-5 w-[35%] py-4">
            <div className="flex justify-start items-start">
              <p className="text-[1.5rem] font-bold">Find Your Account</p>
            </div>
            <hr className="w-full" />
            <div className="flex text-start py-5">
              <p className="text-lg">
                Please enter your email address or mobile number to search for
                your account.
              </p>
            </div>
            <div className="flex justify-start items-start py-5">
              <input
                onChange={onChange}
                className="w-full border-[1px] p-2 rounded"
                placeholder="Email Address Or Mobile Number"
                type="email"
                required
                value={email}
              />
            </div>
            <hr className="w-full " />
            <div className="flex justify-end gap-4 py-5">
              <button
                className="bg-[#E4E6EB] p-2 px-4 rounded text-lg"
                onClick={exitFunc}
              >
                cancel
              </button>
              {/* <button className='bg-[#1877F2] p-2 px-4 text-white rounded text-lg' onClick={onSubmit}></button> */}

              <button
                className="ForgotPassword bg-[#1877F2]  p-2 px-4 text-white rounded text-lg"
                type="submit"
              >
                Submit
              </button>

              <div>
                {/* <div className='signInText'>Send reset link</div> */}
                {/* <button className='signInButton bg-[#1877F2] p-2 px-4'> 
      click
    </button> */}
              </div>
            </div>
          </div>
        </div>
      </form>
    </>
  );
}

export default Forget;
