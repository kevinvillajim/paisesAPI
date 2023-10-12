import { useEffect, useState } from "react";

function Cards() {
  const [data, setData] = useState([]);

  const getData = async () => {
    try {
      const res = await fetch("https://restcountries.com/v3.1/all");
      const resJson = await res.json();
      setData(resJson);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <main className="container">
        {data.map((el, index) => {
          return (
            <div className="car">
              <div className="DivImg">
                <img src={el.flags.png} key={index}></img>
              </div>
              <div className="DivText">
                <h3 className="tit">
                  <strong>{el.name.official}</strong>
                </h3>
                <ul>
                  <il>Population: {el.population}</il>
                  <br />
                  <il>Region: {el.region}</il>
                  <br />
                  <il>Capital: {el.capital}</il>
                </ul>
              </div>
            </div>
          );
        })}
      </main>
    </>
  );
}

export default Cards;
