import React, { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ParallaxSection from "./components/ParallaxSection"; // Parallax section component
import Login from "./pages/Login"; // Login page
import Navbar from "./components/Navbar"; // Navbar component

// Simple text section component
const TextSection = ({ heading, description, bgColor }) => (
  <section id={heading.toLowerCase()} className={`min-h-screen flex flex-col justify-center items-center ${bgColor}`}>
    <div className="text-center max-w-3xl p-6">
      <h2 className="text-5xl font-bold mb-6">{heading}</h2>
      <p className="text-xl text-gray-200">{description}</p>
    </div>
  </section>
);

// Sections like Home, Trainers, and Activities
const Home = () => (
  <TextSection
    heading="Home"
    description="Welcome to Our Website. Discover the amazing world of learning with our expert trainers and engaging activities."
    bgColor="bg-gray-900 text-white"
  />
);

const Trainers = () => (
  <TextSection
    heading="Trainers"
    description="Meet Our Trainers: Industry experts with years of experience in their respective fields, ready to guide you through your learning journey."
    bgColor="bg-gray-800 text-white"
  />
);

const Activities = () => (
  <TextSection
    heading="Activities"
    description="Explore Our Activities: Engage in various activities that boost your knowledge and skills. From hands-on projects to live demonstrations, there's something for everyone."
    bgColor="bg-gray-700 text-white"
  />
);

const Contact = () => (
  <TextSection
    heading="Contact"
    description="Get in Touch: Have any questions or inquiries? Feel free to contact us."
    bgColor="bg-gray-600 text-white"
  />
);

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
    <Router>
      <div className="relative">
        {/* Navbar */}
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

        {/* Routes without layouts */}
        <Routes>
          <Route
            path="/"
            element={
              <>
                {/* Home Section */}
                <Home />

                {/* Parallax Section 1 */}
                <ParallaxSection imageUrl="https://images.pexels.com/photos/747964/pexels-photo-747964.jpeg">
                  <h2 className="text-5xl font-bold fadeInUp text-white">
                    Experience the Beauty of Nature
                  </h2>
                  <p className="text-2xl mt-4 text-white">A breathtaking view for a stunning experience.</p>
                </ParallaxSection>

                {/* Trainers Section */}
                <Trainers />

                {/* Parallax Section 2 */}
                <ParallaxSection imageUrl="https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg">
                  <h2 className="text-5xl font-bold fadeInUp text-white">
                    Reach New Heights
                  </h2>
                  <p className="text-2xl mt-4 text-white">Pushing your limits and reaching new heights.</p>
                </ParallaxSection>

                {/* Activities Section */}
                <Activities />

                {/* Contact Section */}
                <Contact />
              </>
            }
          />

          {/* Login page */}
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
