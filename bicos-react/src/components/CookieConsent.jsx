import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function CookieConsent({ onAccept }) {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)] z-[9999]
                    border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex-1 text-center md:text-left">
          <p className="text-sm text-gray-600">
            Utilizamos cookies para melhorar sua experiência. Ao continuar navegando, 
            você concorda com nossa política de privacidade e termos de uso.
          </p>
        </div>
        <div className="flex gap-4 items-center">
          <Link
            to="/terms"
            className="text-sm text-[#424794] hover:text-[#2a2f86] transition-colors duration-200"
          >
            Termos de Uso
          </Link>
          <button
            onClick={onAccept}
            className="px-6 py-2.5 bg-[#424794] hover:bg-[#2a2f86] text-white text-sm 
                     rounded-full transition-colors duration-200 font-medium
                     hover:shadow-md active:scale-95"
          >
            Aceitar
          </button>
        </div>
      </div>
    </div>
  );
}

CookieConsent.propTypes = {
  onAccept: PropTypes.func.isRequired
};

export default CookieConsent;
