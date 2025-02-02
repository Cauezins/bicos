import { useState } from 'react';
import NavBar from '../components/NavBar';

const categories = ['Pedreiro', 'Marceneiro', 'Faxineira', 'Eletricista', 'Pintor', 'Costureira'];

function HomePage() {
  const [searchTerm, setSearchTerm] = useState('');
  
  const filteredCategories = categories.filter(category => 
    category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <NavBar 
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        filteredCategories={filteredCategories}
        categories={categories}
      />
    </div>
  );
}

export default HomePage;