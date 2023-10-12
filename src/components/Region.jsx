import { useState } from 'react';
import PropTypes from 'prop-types';

function Region({ countries }) {
  const [selectedRegion, setSelectedRegion] = useState('');

  const handleRegionSelect = (region) => {
    setSelectedRegion(region);
  };

  const filteredCountries = selectedRegion
    ? countries.filter((country) => country.region === selectedRegion)
    : countries;

  return (
    <div>
        <select id='options'>
            <option disabled selected>Filter by Region</option>
            <option onClick={() => handleRegionSelect('Africa')}>África</option>
            <option onClick={() => handleRegionSelect('Americas')}>Américas</option>
            <option onClick={() => handleRegionSelect('Asia')}>Asia</option>
            <option onClick={() => handleRegionSelect('Europa')}>Europa</option>
            <option onClick={() => handleRegionSelect('Oceania')}>Oceania</option>
            <option onClick={() => handleRegionSelect('')}>Todos</option>
        </select>
      <ul>
      </ul>
    </div>
  );
}

export default Region;