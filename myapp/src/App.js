import * as React from "react";
import { Routes, Route, Link } from "react-router-dom";
import "./App.css";
import HeaderTwo from "./HeaderTwo";
import MainPage from "./MainPage";
import Sidebar from "./Sidebar";
import Profile from "./Profile";
import ProfileModal from "./ProfieModal";
import Activity from "./Activity";
import Register from "./Register";
import Signin from "./Signin";
import MyVideo from "./MyVideo";
import AddFriend from "./AddFriend";
import Inbox from "./Inbox";
import MyModalTwo from "./MyModalTwo";
import Edit from "./Edit";
import Forget from "./Forget";
import Navbar from "./Navbar";
import CreateAccount from "./CreateAccount";
function App() {
  return (
    <div className="App">
      
      <Routes>
        <Route path="/" element={<HeaderTwo/>}/>
        {/* <Route path="/headertwo" element={<HeaderTwo/>}/> */}
        <Route path="/mainpage" element={<MainPage/>}/>
        <Route path="/sidebar" element={<Sidebar/>}/>
        <Route path="/profile" element={<Profile/>}/>
        <Route path="/profilemodal" element={<ProfileModal/>}/>
        <Route path="/activity" element={<Activity/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/signin" element={<Signin/>}/>
        <Route path="/myvideo" element={<MyVideo/>}/>
        <Route path="/addfriend" element={<AddFriend/>}/>
        <Route path="/inbox" element={<Inbox/>}/>
        <Route path="/mymodaltwo" element={<MyModalTwo/>}/>
        <Route path="/edit" element={<Edit/>}/>
        <Route path="/forget" element={<Forget/>}/>
        <Route path="/navbar" element={<Navbar/>}/>
        <Route path="/create-account" element={<CreateAccount/>}/>        
      </Routes>
    </div>
  );
}


export default App;