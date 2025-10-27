import React from "react";
import { Link } from "react-router-dom";

export default function CountryCard({
  country,
  onToggleFav,
  isFav,
  showMiniWeather,
}) {
  // restcountries returns flags.svg, name.common, capital, region, population
  const name = country.name?.common;
  const cap = country.capital?.[0] || "—";
  return (
    <div className="country-card">
      <img
        src={country.flags?.svg || country.flags?.png}
        alt={`${name} flag`}
        className="flag"
      />
      <div className="card-body">
        <Link
          to={`/country/${encodeURIComponent(name)}`}
          className="card-title"
        >
          {name}
        </Link>
        <p>
          <strong>Capital:</strong> {cap}
        </p>
        <p>
          <strong>Region:</strong> {country.region}
        </p>
        <p>
          <strong>Population:</strong> {country.population.toLocaleString()}
        </p>
      </div>
      <div className="card-actions">
        <button onClick={() => onToggleFav(country)}>
          {isFav ? "★" : "☆"}
        </button>
      </div>
    </div>
  );
}
