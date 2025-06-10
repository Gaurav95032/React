import React from 'react';

function Contact() {
  return (
    <div className='flex flex-col items-center justify-center min-h-[calc(100vh-80px-64px)] bg-green-50 p-8'>
      <h1 className='text-4xl font-bold text-gray-800 mb-4'>Contact Us</h1>
      <p className='text-lg text-gray-600 max-w-xl text-center'>
        Have a question or want to work together? Feel free to reach out to us!
      </p>
      <p className='text-lg text-gray-600 mt-4'>Email: info@example.com</p>
    </div>
  );
}

export default Contact;