import { FiSearch, FiMenu, FiX } from 'react-icons/fi';
import { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const SearchResults = ({ searchTerm, filteredCategories, isDesktop = false }) => {
  if (!searchTerm?.trim()) return null;

  return (
    <div className={`
      absolute left-0 right-0 bg-white shadow-xl rounded-2xl py-2
      transform transition-all duration-200 overflow-y-auto
      ${isDesktop ? 'top-full mt-2 z-[60]' : 'top-full mt-2'}
      max-h-64
    `}>
      {filteredCategories.length > 0 ? (
        filteredCategories.map((result, index) => (
          <a
            key={index}
            className="block px-4 py-2 text-gray-700 
                     hover:bg-gray-50 
                     hover:text-[#424794]
                     transition-colors duration-200 cursor-pointer"
          >
            {result}
          </a>
        ))
      ) : (
        <div className="px-4 py-3 text-gray-500 text-center">
          Nenhum resultado encontrado
        </div>
      )}
    </div>
  );
};

SearchResults.propTypes = {
  searchTerm: PropTypes.string,
  filteredCategories: PropTypes.arrayOf(PropTypes.string).isRequired,
  isDesktop: PropTypes.bool
};

function NavBar({ searchTerm, setSearchTerm, filteredCategories, categories }) {
  const [searchFocus, setSearchFocus] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="fixed top-0 w-full z-50">
      <nav className="w-full h-16 bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 md:px-6 h-full flex items-center justify-between">
          <a href="/" className="font-['Arista'] text-[#424794] hover:text-[#2a2f86] transition-colors duration-300 text-3xl md:text-4xl">
            bicos
          </a>

          <div className="hidden md:flex w-full max-w-xl mx-8 relative">
            <div className="w-full">
              <div className={`
                w-full flex items-center
                border-2 rounded-full px-5 py-2.5
                ${searchFocus ? 'border-[#424794] bg-gray-50 shadow-sm' : 'border-gray-200 bg-white'}
                transition-all duration-300 hover:border-[#424794]/70
              `}>
                <input 
                  type="text" 
                  placeholder="O que você precisa?" 
                  className="w-full bg-transparent outline-none text-gray-700 placeholder-gray-400"
                  onFocus={() => setSearchFocus(true)}
                  onBlur={() => setSearchFocus(false)}
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <FiSearch className="w-5 h-5 text-gray-400 hover:text-[#424794] cursor-pointer transition-colors duration-200" />
              </div>
              <SearchResults 
                searchTerm={searchTerm}
                filteredCategories={filteredCategories}
                isDesktop={true}
              />
            </div>
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center">
            <Link 
                to="/login"  className="px-8 py-2.5 text-sm font-semibold text-[#424794] border-2 border-[#424794] 
                              rounded-full hover:bg-[#424794] hover:text-white transition-all duration-300
                              hover:shadow-md active:scale-95">
              Entrar
            </Link>
          </div>

          <button 
            className="md:hidden p-2 rounded-lg hover:bg-gray-100"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <FiX className="w-6 h-6" /> : <FiMenu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      <div className="hidden md:block w-full bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-2 h-12 flex items-center justify-between">
          {categories.map((category, index) => (
            <a
              key={index}
              className="text-base font-medium text-gray-600 hover:text-[#424794] 
                         transition-colors duration-200 cursor-pointer px-4 py-2
                         hover:bg-gray-50/80 rounded-md relative group"
            >
              {category}
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#424794] scale-x-0 
                             group-hover:scale-x-100 transition-transform duration-300"/>
            </a>
          ))}
        </div>
      </div>

      <div className={`
          md:hidden fixed inset-0 top-16 bg-white/95 backdrop-blur-sm z-40
          transition-all duration-300 ease-in-out transform
          ${isMenuOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'}
        `}
      >
        <div className="sticky top-0 z-[999] bg-white">
          <div className={`
            p-4 shadow-sm transition-all duration-300 delay-100
            ${isMenuOpen ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'}
            w-full relative
          `}>
            <div className="relative">
              <div className="flex items-center w-full border border-gray-200 rounded-full px-4 py-2.5">
                <input 
                  type="text" 
                  placeholder="O que você precisa?" 
                  className="w-full bg-transparent outline-none text-gray-700 placeholder-gray-400 text-base"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <FiSearch className="w-5 h-5 text-gray-400" />
              </div>
              <SearchResults 
                searchTerm={searchTerm}
                filteredCategories={filteredCategories}
              />
            </div>
          </div>
        </div>

        <div className="overflow-y-auto h-[calc(100vh-13rem)]">
          <div className="py-4">
            {categories.map((category, index) => (
              <a
                key={index}
                className={`
                  block px-4 py-3 text-lg font-medium text-gray-600 
                  hover:bg-gray-50 hover:text-[#424794] 
                  transition-all duration-300 transform
                  ${isMenuOpen 
                    ? 'translate-x-0 opacity-100' 
                    : 'translate-x-8 opacity-0'
                  }
                `}
                style={{ transitionDelay: `${150 + index * 50}ms` }}
              >
                {category}
              </a>
            ))}
          </div>
        </div>

        <div className={`
          absolute bottom-0 w-full p-4 bg-white shadow-[0_-2px_10px_rgba(0,0,0,0.05)]
          transition-all duration-300 delay-300 transform
          ${isMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}
        `}>
          <button className="w-full py-3 text-center text-white bg-[#424794] rounded-full 
                           font-semibold hover:bg-[#2a2f86] transition-colors duration-200">
            Entrar
          </button>
        </div>
      </div>
    </div>
  );
}

NavBar.propTypes = {
  searchTerm: PropTypes.string.isRequired,
  setSearchTerm: PropTypes.func.isRequired,
  filteredCategories: PropTypes.arrayOf(PropTypes.string).isRequired,
  categories: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default NavBar;