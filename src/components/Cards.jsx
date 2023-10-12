import PropTypes from "prop-types";

function Cards({ country }) {
  return (
    <>
        <div className="car">
          <div className="DivImg">
            <img src={country.flags.png} alt={country.name.official}></img>
          </div>
          <div className="DivText">
            <h3 className="tit">
              <strong>{country.name.official}</strong>
            </h3>
            <ul>
              <li><strong>Population: </strong>{country.population}</li>
              <li><strong>Region: </strong>{country.region}</li>
              <li><strong>Capital: </strong>{country.capital}</li>
            </ul>
          </div>
        </div>
    </>
  );
}

Cards.propTypes = {
  country: PropTypes.object.isRequired,
};

export default Cards;
