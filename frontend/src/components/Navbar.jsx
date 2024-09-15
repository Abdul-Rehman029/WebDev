// src/components/Navbar.jsx

import React, { useState, useEffect } from "react";
import { FaBars, FaTimes, FaSearch, FaUser, FaMoon, FaSun } from "react-icons/fa";
import logo from "../assets/logo.svg";

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [darkMode, setDarkMode] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const toggleNav = () => {
    setNavOpen(!navOpen);
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle('dark');
  };

  // Smooth Scroll Logic
  const handleSmoothScroll = (e, target) => {
    e.preventDefault();
    const element = document.getElementById(target);
    element.scrollIntoView({ behavior: "smooth" });
    setNavOpen(false); // Close mobile nav
  };

  // ScrollSpy Effect
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      const scrollPos = window.scrollY + window.innerHeight / 2;

      sections.forEach((section) => {
        if (
          scrollPos >= section.offsetTop &&
          scrollPos < section.offsetTop + section.offsetHeight
        ) {
          setActiveSection(section.getAttribute("id"));
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Handle Search
  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery) {
      const section = document.getElementById(searchQuery.toLowerCase());
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }
    setSearchQuery(""); // Clear the search query
  };

  return (
    <nav className={`fixed w-full top-4 z-20 bg-opacity-30 bg-white backdrop-blur-md shadow-lg rounded-[36px] p-4 transition-all duration-300 ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center space-x-4">
          <img src={logo} alt="Logo" className="h-12 w-12 animate-pulse" />
          <span className="text-3xl font-bold tracking-wider">MyApp</span>
        </div>

        {/* Links for desktop */}
        <ul className="hidden md:flex space-x-8 text-lg font-medium">
          {["home", "trainers", "activities", "contact"].map((section) => (
            <li
              key={section}
              className={`hover:text-yellow-300 transition duration-300 ${
                activeSection === section ? "text-yellow-300" : ""
              }`}
            >
              <a href={`#${section}`} onClick={(e) => handleSmoothScroll(e, section)}>
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </a>
            </li>
          ))}
        </ul>

        {/* Icons and Hamburger Icon */}
        <div className="flex items-center space-x-4">
          {/* Search Bar */}
          <form onSubmit={handleSearch} className="flex items-center space-x-2">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="p-2 rounded-[20px] text-black"
              placeholder="Search"
            />
            <FaSearch size={20} className="cursor-pointer hover:text-yellow-300 transition duration-300" onClick={handleSearch} />
          </form>

          <FaUser size={20} className="cursor-pointer hover:text-yellow-300 transition duration-300" />
          {/* Dark Mode Toggle */}
          <div onClick={toggleDarkMode} className="cursor-pointer">
            {darkMode ? <FaSun size={20} className="text-yellow-300" /> : <FaMoon size={20} className="text-yellow-300" />}
          </div>
          <div className="md:hidden" onClick={toggleNav}>
            {navOpen ? <FaTimes size={28} /> : <FaBars size={28} />}
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <ul
        className={`md:hidden absolute top-16 left-0 w-full bg-white bg-opacity-90 backdrop-blur-lg space-y-4 py-4 transition-transform ${
          navOpen ? "transform translate-y-0" : "transform -translate-y-full"
        }`}
      >
        {["home", "trainers", "activities", "contact"].map((section) => (
          <li
            key={section}
            className={`text-left text-lg font-medium ${
              activeSection === section ? "text-yellow-300" : ""
            }`}
          >
            <a href={`#${section}`} onClick={(e) => handleSmoothScroll(e, section)}>
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
