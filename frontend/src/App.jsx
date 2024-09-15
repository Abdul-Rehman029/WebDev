// src/App.jsx

import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ParallaxSection from "./components/ParallaxSection";
import { FaArrowUp } from "react-icons/fa";

const App = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="relative">
      <Navbar />

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-4 right-4 p-3 bg-yellow-300 rounded-full text-black shadow-lg"
        >
          <FaArrowUp size={20} />
        </button>
      )}

      {/* Home Section */}
      <section id="home" className="min-h-screen flex items-center justify-center text-white bg-gray-900 fadeIn">
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-6xl font-bold mb-4">Welcome to Our Website</h1>
          <p className="text-xl">An interactive one-page scrolling experience.</p>
        </div>
      </section>

      {/* Parallax Section */}
      <ParallaxSection imageUrl="https://source.unsplash.com/1600x900/?nature,water">
        <h2 className="text-5xl font-bold fadeInUp">Experience the Beauty of Nature</h2>
        <p className="text-2xl mt-4">A breathtaking view for a stunning experience.</p>
      </ParallaxSection>

      {/* Trainers Section */}
      <section id="trainers" className="min-h-screen flex items-center justify-center text-white bg-gray-800 fadeIn">
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-6xl font-bold mb-4">Meet the Trainers</h1>
          <p className="text-xl">Our experienced trainers are here to help you grow.</p>
        </div>
      </section>

      {/* Parallax Section */}
      <ParallaxSection imageUrl="https://source.unsplash.com/1600x900/?mountains">
        <h2 className="text-5xl font-bold fadeInUp">Reach New Heights</h2>
        <p className="text-2xl mt-4">Pushing your limits and reaching new heights.</p>
      </ParallaxSection>

      {/* Activities Section */}
      <section id="activities" className="min-h-screen flex items-center justify-center text-white bg-gray-700 fadeIn">
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-6xl font-bold mb-4">Our Activities</h1>
          <p className="text-xl">Join our activities and start your journey with us.</p>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="min-h-screen flex items-center justify-center text-white bg-gray-600 fadeIn">
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-6xl font-bold mb-4">Get in Touch</h1>
          <p className="text-xl">We'd love to hear from you! Contact us for more information.</p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default App;
