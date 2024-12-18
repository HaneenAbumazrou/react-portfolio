import React from 'react';
const Footer = () => {
    return (
      <footer className="bg-gray-800 text-white py-6">
        <div className="container mx-auto px-6 text-center">
          <p>&copy; {new Date().getFullYear()} Haneen Abumazrou. All Rights Reserved.</p>
        </div>
      </footer>
    );
  };
  export default Footer;