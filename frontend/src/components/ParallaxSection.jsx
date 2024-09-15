// src/components/ParallaxSection.jsx

import React, { useEffect, useRef } from "react";

const ParallaxSection = ({ imageUrl, children }) => {
  const parallaxRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (parallaxRef.current) {
        const scrollTop = window.pageYOffset;
        parallaxRef.current.style.backgroundPositionY = `${scrollTop * 0.5}px`;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      ref={parallaxRef}
      className="relative h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${imageUrl})`, backgroundAttachment: 'fixed' }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center">
        <div className="text-center text-white z-10 p-8">
          {children}
        </div>
      </div>
    </div>
  );
};

export default ParallaxSection;
