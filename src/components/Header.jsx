// src/components/Header/index.jsx
import React from 'react';

const Header = () => {
  return (
    <header 
      className="relative h-screen flex items-center justify-center text-white text-center"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('./images/bg-home.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="animate-fade-in-down">
        <h1 className="text-6xl font-bold mb-6 text-shadow">Welcome to My World</h1>
        <p className="text-2xl font-light mb-8">
          Web Developer | Communication Engineer | Mobile App Developer
        </p>
        <a 
          href="#portfolio"
          className="inline-block px-8 py-4 bg-blue-500 text-white rounded-full text-lg 
                   transition-all duration-300 hover:bg-blue-600 hover:scale-105"
        >
          Explore My Work
        </a>
      </div>
    </header>
  );
};

export default Header;