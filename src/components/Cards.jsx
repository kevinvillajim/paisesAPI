import PropTypes from "prop-types";

function Cards({ country }) {
  return (
    <>
<<<<<<< HEAD
      <main>
        <div className="car">
          <div className="DivImg">
            <img src={country.flags.png} alt={country.name.official}></img>
          </div>
          <div className="DivText">
            <h3 className="tit">
              <strong>{country.name.official}</strong>
            </h3>
            <ul>
              <li>Population: {country.population}</li>
              <br />
              <li>Region: {country.region}</li>
              <br />
              <li>Capital: {country.capital}</li>
            </ul>
          </div>
        </div>
=======
      <main className="container">
        {data.map((el, index) => {
          return (
            <div className="car" key={index}>
              <div className="DivImg">
                <img src={el.flags.png} alt={el.name.official}></img>
              </div>
              <div className="DivText">
                <h3 className="tit">
                  <strong>{el.name.official}</strong>
                </h3>
                <ul>
                  <li>Population: {el.population}</li>
                  <br />
                  <li>Region: {el.region}</li>
                  <br />
                  <li>Capital: {el.capital}</li>
                </ul>
              </div>
            </div>
          );
        })}
>>>>>>> 9febef174dfbd8f1ba1c4757e8a14afbe87f508c
      </main>
    </>
  );
}

Cards.propTypes = {
  country: PropTypes.object.isRequired,
};

export default Cards;
