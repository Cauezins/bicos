import { FiSearch, FiMoon, FiSun } from 'react-icons/fi';
import { useState } from 'react';

function NavBar() {
  const [isDark, setIsDark] = useState(false);
  const [searchFocus, setSearchFocus] = useState(false);

  return (
    <nav className="w-full h-16 bg-white shadow-md fixed top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 h-full flex items-center justify-between">
        {/* Logo */}
        <a 
          href="#" 
          className="font-['Arista'] text-[#424794] hover:text-[#2a2f86] transition-colors duration-200"
          style={{ fontSize: '2.3rem' }}
        >
          bicos
        </a>

        {/* Search Bar */}
        <div className={`
          relative flex items-center w-full max-w-md mx-4
          border-2 rounded-full px-4 py-2
          ${searchFocus ? 'border-[#424794] bg-gray-50' : 'border-gray-300 bg-white'}
          transition-all duration-200
        `}>
          <input 
            type="text" 
            placeholder="O que você precisa?" 
            className="w-full bg-transparent outline-none text-gray-700 placeholder-gray-400"
            onFocus={() => setSearchFocus(true)}
            onBlur={() => setSearchFocus(false)}
          />
          <FiSearch className="w-5 h-5 text-gray-400 hover:text-[#424794] cursor-pointer" />
        </div>

        {/* Actions */}
        <div className="flex items-center gap-4">
          <button
            className="px-6 py-2 text-sm font-medium text-[#424794] border-2 border-[#424794] 
                       rounded-full hover:bg-[#424794] hover:text-white transition-colors duration-200"
          >
            Entrar
          </button>

          <button
            onClick={() => setIsDark(!isDark)}
            className="p-2 rounded-full hover:bg-gray-100 transition-colors duration-200"
            aria-label="Toggle dark mode"
          >
            {isDark ? (
              <FiSun className="w-5 h-5 text-[#424794]" />
            ) : (
              <FiMoon className="w-5 h-5 text-[#424794]" />
            )}
          </button>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;