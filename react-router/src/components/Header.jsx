import React from 'react';
import { Link, NavLink } from 'react-router-dom';

function Header() {
  return (
    <div className='sticky top-0 z-50 bg-white shadow-md'> {/* Added shadow and z-index for layering */}
      <header className='container mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between'>

        <div className='text-white text-3xl sm:text-4xl font-bold bg-gray-700 py-2 px-6 rounded-lg flex-shrink-0 flex items-center justify-center'> {/* flex-shrink-0 to prevent shrinking on small screens */}
          <Link to="/" className="font-bold">Logo</Link>
        </div>
        <nav className='flex-grow flex justify-center'> {/* flex-grow to take available space */}
          <ul className='flex flex-wrap justify-center gap-x-8 gap-y-2 text-lg font-medium text-gray-700'>
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `hover:text-blue-600 transition-colors duration-200 ${isActive ? 'text-blue-600 border-b-2 border-blue-600' : ''
                  }`
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  `hover:text-blue-600 transition-colors duration-200 ${isActive ? 'text-blue-600 border-b-2 border-blue-600' : ''
                  }`
                }
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  `hover:text-blue-600 transition-colors duration-200 ${isActive ? 'text-blue-600 border-b-2 border-blue-600' : ''
                  }`
                }
              >
                Contact
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/github"
                className={({ isActive }) =>
                  `hover:text-blue-600 transition-colors duration-200 ${isActive ? 'text-blue-600 border-b-2 border-blue-600' : ''
                  }`
                }
              >
                Github
              </NavLink>
            </li>
          </ul>
        </nav>

        <div className='bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg font-semibold transition-colors duration-200 cursor-pointer flex-shrink-0'> {/* flex-shrink-0 for button */}
          Register
        </div>
      </header>
    </div>
  );
}

export default Header;