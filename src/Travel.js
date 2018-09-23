// src/Quote.js
import React from "react";

const Travel = ({dest, country, image, distance}) => (
  <figure>
    <img
      src={image}
      alt={dest}
    />
    <figcaption>
      {dest} is located in {country} at {distance} from here.
    </figcaption>
  </figure>
);

export default Travel;