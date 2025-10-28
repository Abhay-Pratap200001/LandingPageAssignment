import React from "react";
import Logo from "../assets/Logo";
import { Facebook, Twitter, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200 py-10 px-6">
      {/* Top Section */}
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <Logo />
        </div>

        {/* Links */}
        <ul className="flex flex-wrap justify-center md:justify-between gap-5 text-sm text-gray-700">
          <li className="hover:text-black cursor-pointer">For designers</li>
          <li className="hover:text-black cursor-pointer">Hire talent</li>
          <li className="hover:text-black cursor-pointer">Inspiration</li>
          <li className="hover:text-black cursor-pointer">Advertising</li>
          <li className="hover:text-black cursor-pointer">Blog</li>
          <li className="hover:text-black cursor-pointer">About</li>
          <li className="hover:text-black cursor-pointer">Careers</li>
          <li className="hover:text-black cursor-pointer">Support</li>
        </ul>

        {/* Socials */}
        <div className="flex items-center gap-4 text-gray-600">
          <Twitter className="w-5 h-5 hover:text-sky-500 cursor-pointer" />
          <Facebook className="w-5 h-5 hover:text-blue-600 cursor-pointer" />
          <Instagram className="w-5 h-5 hover:text-pink-500 cursor-pointer" />
        </div>
      </div>

      {/* Bottom Section */}
      <div className="max-w-6xl mx-auto mt-8 flex flex-col md:flex-row items-center justify-between text-gray-500 text-sm gap-3">
        <div className="text-center md:text-left">
          © 2025 Dribbble — <span className="hover:text-black cursor-pointer">Terms</span> ·{" "}
          <span className="hover:text-black cursor-pointer">Privacy</span> ·{" "}
          <span className="hover:text-black cursor-pointer">Cookies</span>
        </div>

        <div className="flex flex-wrap justify-center gap-4 text-gray-500">
          <span className="hover:text-black cursor-pointer">Jobs</span>
          <span className="hover:text-black cursor-pointer">Designers</span>
          <span className="hover:text-black cursor-pointer">Freelancers</span>
          <span className="hover:text-black cursor-pointer">Tags</span>
          <span className="hover:text-black cursor-pointer">Places</span>
          <span className="hover:text-black cursor-pointer">Resources</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
