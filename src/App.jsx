import { useState } from "react";
import Navbar from "./components/Navbar";
import MainPge from "./components/MainPge";
import Content from "./components/content";
import ProfileIcon from "./components/ProfileIcon";
import Footer from "./components/Footer";

function App() {

  return (
    <div className="relative pt-2 h-screen w-screen">
      <Navbar/>
      <MainPge/>
      <ProfileIcon/>
      <Content/>
      <Footer/>
    </div>
    
  );
}

export default App;
