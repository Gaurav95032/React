import React from 'react';

function About() {
  return (
    <div className='flex flex-col items-center justify-center min-h-[calc(100vh-80px-64px)] bg-blue-50 p-8'>
      <h1 className='text-4xl font-bold text-gray-800 mb-4'>About Us</h1>
      <p className='text-lg text-gray-600 max-w-xl text-center'>
        We are a passionate team dedicated to delivering high-quality solutions and exceptional user experiences.
      </p>
    </div>
  );
}

export default About;