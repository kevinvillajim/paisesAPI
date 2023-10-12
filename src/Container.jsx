

function Container() {

    // const handleSearch = (e) => {
    //     e.preventDefault()
    //     const filteredResults = data.filter((pokemon) => {
    //       return (
    //         data.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    //         data.types.some((type) => type.type.name.toLowerCase().includes(searchTerm.toLowerCase()))
    //       )
    //     })
    //     setFilteredPokemonList(filteredResults);
    //   };

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
                        <input className="search-input" type="text" placeholder="Search for a country..."/>
                        <span className="material-symbols-outlined search-icon">search</span>
                    </div>
                    <h2>Desplegable</h2>
                </div>
                <div className="countriesContainer">
                    
                </div>
            </div>
        </div>
    </>
    )
  }

  export default Container;