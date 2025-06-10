import React from 'react';

function Footer() {
  return (
    <footer className='bg-gray-800 text-white py-8'>
      <div className='container mx-auto px-4 text-center'>
        <p>&copy; {new Date().getFullYear()} Your Company Name. All rights reserved.</p>
        <div className='flex justify-center space-x-6 mt-4'>
          <a href="#" className='hover:text-blue-400 transition-colors duration-200'>Privacy Policy</a>
          <a href="#" className='hover:text-blue-400 transition-colors duration-200'>Terms of Service</a>
          <a href="#" className='hover:text-blue-400 transition-colors duration-200'>Contact Us</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;