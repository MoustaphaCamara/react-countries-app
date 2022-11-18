import axios from "axios";
import React, { useEffect, useState } from "react";
import Card from "./Card";

const Countries = () => {
  const [data, setData] = useState([]);
  const [rangeValue, setRangeValue] = useState(36);
  const [selectedRadio, setSelectedRadio] = useState("");
  const continents = ["Africa", "America", "Asia", "Europe", "Oceania"];

  useEffect(() => {
    axios
      .get("https://restcountries.com/v3.1/all")
      .then((res) => setData(res.data));
  }, []);
  return (
    <div className="countries">
      <h2>Liste de pays</h2>
      <ul className="radio-container">
        <p>
          <input
            type="range"
            min="1"
            max="250"
            defaultValue={rangeValue}
            onChange={(e) => setRangeValue(e.target.value)}
          />
          &nbsp; {rangeValue} pays
        </p>

        {continents.map((continent) => (
          <li>
            <input
              type="radio"
              name="continentRadio"
              id={continent}
              checked={continent === selectedRadio}
              //   si oui il renvoie true, si non il renvoie false. checked = false
              onChange={(e) => setSelectedRadio(e.target.id)}
            />
            <label htmlFor={continent}>{continent}</label>
          </li>
        ))}
      </ul>

      {selectedRadio && (
        <button onClick={() => setSelectedRadio("")}>Retirer le filtre</button>
      )}
      <ul>
        {data
          .filter((country) => country.continents[0].includes(selectedRadio))
          .sort((a, b) => b.population - a.population)
          .slice(0, rangeValue)
          .map((country, index) => (
            <Card key={index} country={country} />
          ))}
      </ul>
    </div>
  );
};

export default Countries;
