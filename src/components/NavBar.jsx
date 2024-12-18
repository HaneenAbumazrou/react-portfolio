// src/components/NavBar/index.jsx
import React, { useState, useEffect } from 'react';

const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-lg' : 'bg-transparent'}`}>
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <div className="logo">
            <a href="#home" 
               className={`text-2xl font-semibold transition-colors duration-300 ${isScrolled ? 'text-gray-800' : 'text-white'}`}>
              Haneen Abumazrou
            </a>
          </div>
          <ul className="hidden md:flex space-x-8">
            {['Home', 'About', 'Skills', 'Services', 'Portfolio', 'Contact'].map((item) => (
              <li key={item}>
                <a  // This was the missing tag
                  href={`#${item.toLowerCase()}`}
                  className={`px-4 py-2 rounded-full transition-all duration-300
                    ${isScrolled 
                      ? 'text-gray-800 hover:bg-blue-500 hover:text-white' 
                      : 'text-white hover:bg-blue-500/50'
                    }`}
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;