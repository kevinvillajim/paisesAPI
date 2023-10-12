import PropTypes from "prop-types";

function Cards({ country }) {
  return (
    <>
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
      </main>
    </>
  );
}

Cards.propTypes = {
  country: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Cards;
