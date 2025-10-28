import React from "react";
import { Heart, MessageCircle } from "lucide-react";
import img from "../assets/eleventh img.webp";

const ProfileIcon = () => {
  return (
    <div className="sticky top-[75px] z-40 bg-white flex flex-col  px-40  sm:flex-row sm:justify-between sm:items-center gap-6 pt-10 pb-4 border-b border-gray-200">
      {/* Left: Profile Info */}
      <div className="flex flex-col sm:flex-row sm:items-center pl-36 gap-4">
        <img
          src={img}
          alt="Profile"
          className="w-16 h-16 sm:w-16 sm:h-16 rounded-full object-cover"
        />

        <div className="flex flex-col text-center sm:text-left">
          <div className="flex flex-col sm:flex-row sm:gap-2 sm:items-center">
            <h3 className="font-bold text-lg sm:text-sm">Danny Amache</h3>
            <span className="text-green-600 text-sm">Available for work</span>
            <span className="text-gray-500 text-sm cursor-pointer hover:text-gray-700">
              Follow
            </span>
          </div>
        </div>
      </div>

      {/* Right: Icons & Button */}
      <div className="flex justify-center sm:justify-end gap-3 sm:gap-4 items-center">
        <div className="p-2 border border-gray-400 rounded-full cursor-pointer hover:bg-gray-100">
          <Heart className="w-5 h-5 text-gray-600" />
        </div>
        <div className="p-2 border border-gray-400 rounded-full cursor-pointer hover:bg-gray-100">
          <MessageCircle className="w-5 h-5 text-gray-600" />
        </div>
        <button className="px-3 sm:px-4 py-2 border border-gray-400 bg-black text-white rounded-full hover:bg-gray-700 text-sm font-medium">
          Get in touch
        </button>
      </div>
    </div>
  );
};

export default ProfileIcon;
