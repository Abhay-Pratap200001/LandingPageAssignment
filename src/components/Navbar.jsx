import React from "react";
import Logo from "../assets/Logo";
import { Search } from "lucide-react";
import AnimatedSelect from "./AnimatedSelect";

const Navbar = () => {
  return (
    <header className="fixed top-0 w-screen bg-white z-50">
      <div className="flex items-center justify-between px-10 py-3">
        {/* Logo */}
        <div className="flex items-center space-x-24">
          <div className="w-39">
            <Logo cl />
          </div>

          {/* Search Bar */}
          <div className="hidden lg:flex items-center bg-slate-100 rounded-full px-4 py-2 w-[33rem]">
            <input
              type="text"
              placeholder="What are you looking for?"
              className="bg-slate-100 focus:outline-none text-sm flex-1"/>

            <div className="relative right-2">
            <AnimatedSelect
              label="Explore"
              options={["Short", "Designer", "Services"]}/>
              </div>

            <button className="bg-pink-500 text-white rounded-full p-2 hover:bg-pink-600 transition">
              <Search size={16} />
            </button>
          </div>
        </div>

        {/* Middle Nav Dropdowns */}
        <div className="hidden lg:flex mr-20 gap-4">
          <AnimatedSelect
            label="Explore"
            options={["Popular", "New", "Following"]}/>


          <AnimatedSelect
            label="Find Talent"
            options={["Designers", "Agencies", "Freelancers"]}/>


          <AnimatedSelect
            label="Get Hired"
            options={["Post Job", "Career Advice", "Internships"]}/>


          <AnimatedSelect
            label="Blog"
            options={["Design Tips", "Case Studies", "Stories"]}/>
        </div>

        {/* Auth Buttons */}
        <div className="flex items-center space-x-4">
          <button className="hidden lg:flex text-sm font-medium text-black hover:text-pink-500">
            Sign up
          </button>
          <button className="text-sm font-medium bg-black text-white rounded-full px-4 py-2 hover:bg-black transition">
            Log in
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
