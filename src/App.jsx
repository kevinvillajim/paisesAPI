import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Cards from './components/Cards';
import './App.css';

function useData() {
  const [data, setData] = useState(null);
  useEffect(() => {
    const getData = async () => {
      try {
        const res = await fetch("https://restcountries.com/v3.1/all");
                const datos = await res.json();
        setData(datos);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };
    getData();
  }, []);
  const saludar = () => alert("Hola Mundo");
  return { data, saludar };
}

function App() {
  const { data} = useData();
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredCountries, setFilteredCountries] = useState([]);

  useEffect(() => {
    if (data) {
      setFilteredCountries(data);
    }
  }, [data]);

  const handleSearch = (e) => {
    const term = e.target.value;
    setSearchTerm(term);
    const filteredResults = data ? data.filter((country) => {
      return country.name.official.toLowerCase().includes(term.toLowerCase())
    }) : [];
    setFilteredCountries(filteredResults);
  };
  
  return (
    <>
      <div className="totalContainer">
        <header className="header">
          <h2>Where in the world?</h2>
          <button className="darkMode"><span className="material-symbols-outlined">dark_mode</span>Dark Mode</button>
        </header>
        <div className="bodyContainer">
          <div className="filtersContainer">
            <div className="search-container">
              <input className="search-input" type="text" placeholder="Search for a country..." value={searchTerm} onChange={handleSearch}/>
              <span className="material-symbols-outlined search-icon">search</span>
            </div>
            <h2>Desplegable</h2>
          </div>
          <div className="countriesContainer">
            {filteredCountries.map((country, index) => (
              <Cards key={index} country={country} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;

App.propTypes = {
  data: PropTypes.array,
};

App.defaultProps = {
  data: [],
};