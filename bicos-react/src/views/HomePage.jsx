import { useState } from 'react';
import NavBar from '../components/NavBar';
import Hero from '../components/Hero';
import LocationSelector from '../components/LocationSelector';
import PopularProfessionals from '../components/PopularProfessionals';
import CookieConsent from '../components/CookieConsent';
import Footer from '../components/Footer';

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

  const handleHeroSearch = () => {
    const searchInput = document.querySelector('#searchButton');
    if (searchInput) {
      searchInput.focus();
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <NavBar 
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        filteredCategories={filteredCategories}
        categories={categories}
      />
      <Hero onSearch={handleHeroSearch} />
      <LocationSelector />
      <PopularProfessionals />
      <Footer />
      {showCookieConsent && <CookieConsent onAccept={handleCookieAccept} />}
    </div>
  );
}

export default HomePage;