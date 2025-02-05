import { FiSearch, FiUserPlus } from 'react-icons/fi';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function Hero({ onSearch }) {
  return (
    <div className="h-[calc(100vh-7rem)] min-h-[600px] max-h-[800px] bg-white flex items-center">
      <div className="max-w-7xl mx-auto px-4 w-full">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
          <div className="flex-1 text-center md:text-left md:py-12">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
              Encontre <span className="text-[#424794]">profissionais</span> 
              <br className="hidden md:block" /> perto de você
            </h1>
            <p className="text-lg text-gray-600 mb-8 max-w-xl mx-auto md:mx-0">
              Conectamos você aos melhores profissionais autônomos da sua região.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Link 
                to="/register"
                className="px-6 py-3 border-2 border-[#424794] text-[#424794] rounded-full 
                         text-base font-medium hover:bg-[#424794] hover:text-white
                         transition-all duration-200 flex items-center gap-2 justify-center"
              >
                <FiUserPlus className="w-4 h-4" />
                Seja um profissional
              </Link>
            </div>
          </div>

          <div className="flex-1 mt-8 md:mt-0 md:py-12">
            <img 
              src="/hero-workers.png" 
              alt="Profissionais trabalhando"
              className="w-full max-w-md mx-auto rounded-lg shadow-lg object-cover"
            />
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 border-b border-gray-200" />
    </div>
  );
}

Hero.propTypes = {
  onSearch: PropTypes.func
};

Hero.defaultProps = {
  onSearch: () => {}
};

export default Hero;
