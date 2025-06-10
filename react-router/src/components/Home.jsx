import React from 'react';

function Home() {
  return (
    <div className='flex flex-col items-center justify-center min-h-[calc(100vh-80px-64px)] bg-gradient-to-r from-blue-50 to-indigo-100 p-8'> {/* Adjusted height to account for header and footer */}
      <h1 className='text-5xl font-extrabold text-gray-800 mb-6'>
        Welcome to Our Website!
      </h1>
      <p className='text-xl text-gray-600 max-w-2xl text-center leading-relaxed'>
        Discover amazing features and content tailored just for you. We strive to provide the best experience possible.
      </p>
      <button className='mt-10 px-8 py-4 bg-blue-600 text-white text-lg font-semibold rounded-lg shadow-lg hover:bg-blue-700 transition-all duration-300 transform hover:scale-105'>
        Learn More
      </button>
    </div>
  );
}

export default Home;