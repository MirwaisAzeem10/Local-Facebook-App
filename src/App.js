import * as React from "react";
import { Routes, Route, Link } from "react-router-dom";
import "./App.css";
import HeaderTwo from "./HeaderTwo";
import MainPage from "./MainPage";
import Sidebar from "./Sidebar";
import Profile from "./profile";
import ProfileModal from "./ProfieModal";
import Activity from "./Activity";


function App() {
  return (
    <div className="App">
      
      <Routes>
        <Route path="/headertwo" element={<HeaderTwo/>}/>
        <Route path="/mainpage" element={<MainPage/>}/>
        <Route path="/sidebar" element={<Sidebar/>}/>
        <Route path="/profile" element={<Profile/>}/>
        <Route path="/profilemodal" element={<ProfileModal/>}/>
        <Route path="/activity" element={<Activity/>}/>
       
      </Routes>
    </div>
  );
}

export default App;