import * as React from "react";
import { Routes, Route, Link } from "react-router-dom";
import "./App.css";
import HeaderTwo from "./HeaderTwo";
import MainPage from "./MainPage";
import Sidebar from "./Sidebar";
import Profile from "./profile";
import ProfileModal from "./ProfieModal";
import Activity from "./Activity";
import Register from "./Register";
import Signin from "./Signin";


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

      </Routes>
    </div>
  );
}

export default App;