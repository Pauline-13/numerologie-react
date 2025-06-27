import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import logo from '../assets/Logo.png';


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="bg-[#fdf3f8] shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img
            src={logo} 
            alt="Logo"
            className="h-12 w-auto"
          />
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex gap-10 text-lg">
        <Link to="/accueil" className="hover:text-[#B898A3]">Accueil</Link>
       <Link to="/" className="text-[#B898A3]">Numérologie</Link>
          <a href="#" className="hover:text-[#B898A3]">Astrologie</a>
          <a href="#" className="hover:text-[#B898A3]">Ikigaï</a>
          <a href="#" className="hover:text-[#B898A3]">Personnes inspirantes</a>
        </nav>

        {/* Mobile Menu Toggle */}
        <button className="md:hidden" onClick={toggleMenu}>
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <nav className=" md:hidden px-4 pb-4">
          <ul className="flex flex-col gap-4 text-lg">
            <li><Link to="/" className="hover:text-[#B898A3]">Accueil</Link></li>
            <li><Link to="/Numerologie" className="text-[#B898A3]">Numérologie</Link></li>
            <li><a href="#" className="hover:text-[#B898A3]">Astrologie</a></li>
            <li><a href="#" className="hover:text-[#B898A3]">Ikigaï</a></li>
            <li><a href="#" className="hover:text-[#B898A3]">Personnes inspirantes</a></li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Navbar;
