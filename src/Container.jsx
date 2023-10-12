import { useState } from 'react';
import PropTypes from 'prop-types';
import Cards from "./components/Cards";

function Container({ data }) {
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredCountries, setFilteredCountries] = useState(data);

    const handleSearch = (e) => {
        const term = e.target.value;
        console.log(term);
        setSearchTerm(term);
        const filteredResults = data.filter((country) => {
            return country.name.official.toLowerCase().includes(term.toLowerCase())
        })
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
                            <Cards key={index} country={filteredCountries} />
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

Container.propTypes = {
    data: PropTypes.array.isRequired,
};

export default Container;