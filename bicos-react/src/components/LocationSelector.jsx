import { useState } from 'react';
import { FiMapPin, FiChevronRight } from 'react-icons/fi';

const popularCities = [
  'Rio de Janeiro', 'São Paulo', 'Belo Horizonte', 
  'Curitiba', 'Salvador', 'Brasília'
];

function LocationSelector() {
  const [selectedState, setSelectedState] = useState('RJ');

  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center gap-2 mb-6">
          <FiMapPin className="w-5 h-5 text-[#424794]" />
          <h2 className="text-xl font-semibold text-gray-800">Selecione sua região</h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-8">
          {popularCities.map((city) => (
            <button
              key={city}
              className="px-4 py-3 bg-white rounded-lg border border-gray-200
                       hover:border-[#424794] hover:shadow-sm transition-all duration-200
                       flex items-center justify-between group"
            >
              <span className="text-gray-700 group-hover:text-[#424794]">{city}</span>
              <FiChevronRight className="w-4 h-4 text-gray-400 group-hover:text-[#424794]" />
            </button>
          ))}
        </div>

        <div className="flex gap-4 items-center">
          <select
            value={selectedState}
            onChange={(e) => setSelectedState(e.target.value)}
            className="px-4 py-2.5 bg-white rounded-lg border border-gray-200
                     text-gray-700 focus:outline-none focus:border-[#424794]
                     hover:border-[#424794] cursor-pointer"
          >
            <option value="RJ">Rio de Janeiro</option>
            <option value="SP">São Paulo</option>
            <option value="MG">Minas Gerais</option>
          </select>

          <select
            className="flex-1 max-w-xs px-4 py-2.5 bg-white rounded-lg border border-gray-200
                     text-gray-700 focus:outline-none focus:border-[#424794]
                     hover:border-[#424794] cursor-pointer"
          >
            <option value="">Selecione a cidade</option>
          </select>
        </div>
      </div>
    </section>
  );
}

export default LocationSelector;
