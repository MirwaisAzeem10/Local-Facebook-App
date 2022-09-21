import * as React from "react";
import { Routes, Route, Link } from "react-router-dom";
import "./App.css";
import HeaderTwo from "./HeaderTwo";
import MainPage from "./MainPage";


function App() {
  return (
    <div className="App">
      
      <Routes>
        <Route path="/headertwo" element={<HeaderTwo/>}/>
        <Route path="/mainpage" element={<MainPage/>}/>
       
      </Routes>
    </div>
  );
}

export default App;