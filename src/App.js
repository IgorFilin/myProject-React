import React from 'react'
import "./App.css";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Setting from "./components/Setting/Setting";
import { Route, Routes } from "react-router-dom";
import {DialogsContainer} from "./components/Dialogs/DialogsContainer";

function App() {
  return (
    <div className="app-wrapper">
      <Header />
      <Navbar />
      <div className="app-wrapper-content">
        <Routes>
          <Route path="/Profile/" element={<Profile/>}/>
          <Route path="/Dialogs/*" element={<DialogsContainer/>}/>
          <Route path="/News/" element={<News />} />
          <Route path="/Music/" element={<Music />} />
          <Route path="/Setting/" element={<Setting />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
