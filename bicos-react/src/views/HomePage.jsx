import { useState } from 'react';
import NavBar from '../components/NavBar';
import CookieConsent from '../components/CookieConsent';

const categories = ['Pedreiro', 'Marceneiro', 'Faxineira', 'Eletricista', 'Pintor', 'Costureira'];

function HomePage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [showCookieConsent, setShowCookieConsent] = useState(() => !localStorage.getItem('cookiesAccepted'));
  
  const filteredCategories = categories.filter(category => 
    category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleCookieAccept = () => {
    localStorage.setItem('cookiesAccepted', 'true');
    setShowCookieConsent(false);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <NavBar 
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        filteredCategories={filteredCategories}
        categories={categories}
      />
      {showCookieConsent && <CookieConsent onAccept={handleCookieAccept} />}
    </div>
  );
}

export default HomePage;