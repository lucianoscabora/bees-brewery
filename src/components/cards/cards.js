import React from "react";
import Tags from "../tags/tags";
import "./cards.css";
import { useEffect, useState } from "react";
import Img from "../../style/images/delete.png";

function Card() {
  const [brew, setBrew] = useState([]);

  //api to display 6 cards per page
  useEffect(() => {
    fetch("https://api.openbrewerydb.org/breweries?per_page=6")
      .then((response) => response.json())
      .then(setBrew);
  }, []);

  //remove card function
  const removeCard = (index) => {
    setBrew([...brew.filter((brews) => brew.indexOf(brews) !== index)]);
  };

  return (
    <div className="brewrie-container">
      {brew.map((beers, index) => (
        <div className="brew-card" key={beers.id}>
          <div className="delete-icon">
            <img src={Img} alt="delete" onClick={() => removeCard(index)} />
          </div>
          <div className="card-header">
            <strong>{beers.name}</strong>
            <div className="card-address">
              <p>{beers.street}</p>
              <p>
                {beers.city}, {beers.state} - {beers.country}
              </p>
            </div>
          </div>
          <Tags />
        </div>
      ))}
    </div>
  );
}

export default Card;
