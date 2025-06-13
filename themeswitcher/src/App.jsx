import React from 'react';

function App() {
  return (
    <div className="min-h-screen w-full flex justify-center items-center bg-gradient-to-r from-white-700 via-gray-900 to-black p-4">
      <div className="bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded-2xl shadow-2xl w-80 p-6 flex flex-col items-center">
        {/* Profile Image */}
        <div className="h-32 w-32 rounded-full overflow-hidden border-4 border-white shadow-md">
          <img
            src="https://avatars.githubusercontent.com/u/9919?v=4"
            alt="Profile"
            className="h-full w-full object-cover"
          />
        </div>

        {/* Profile Info */}
        <div className="mt-4 text-center">
          <h1 className="text-xl font-semibold">Gaurav Waghmare</h1>
          <p className="text-sm text-gray-500 dark:text-gray-300">@gaurav.dev</p>
          <p className="text-sm">Full Stack Developer</p>
        </div>

        {/* Stats */}
        <div className="flex justify-between items-center w-full mt-6 text-center">
          {["Posts", "Followers", "Following"].map((label, index) => (
            <div key={index} className="flex flex-col items-center">
              <span className="font-bold text-lg">16</span>
              <span className="text-xs text-gray-500 dark:text-gray-400">{label}</span>
            </div>
          ))}
        </div>

        {/* Actions */}
        <div className="mt-6 w-full flex flex-col items-center gap-2">
          <button className="w-full dark:bg-black bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition duration-300">
            Send Message
          </button>
          <button className="text-blue-600 hover:underline text-sm">More</button>
        </div>
      </div>
    </div>
  );
}

export default App;
