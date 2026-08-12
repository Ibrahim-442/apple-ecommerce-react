import React, { useContext } from "react";
import { ProductsContext } from "../../../../../../../context/context.jsx";

export default function Sideearbuds() {
  const { filters, handleFilter, clearFilters } = useContext(ProductsContext);

  return (
    <>
      <div className="filter">
        <h5>Price</h5>

        <label>
          <input
            type="checkbox"
            checked={filters.price.includes("under200")}
            onChange={() => handleFilter("price", "under200")}
          />
          Under $200
        </label>

        <label>
          <input
            type="checkbox"
            checked={filters.price.includes("over200")}
            onChange={() => handleFilter("price", "over200")}
          />
          Over $200
        </label>
      </div>

      <hr />
      <div className="filter">
        <h5>Charging Case</h5>

        <label>
          <input
            type="checkbox"
            checked={filters.chargingCase.includes("Lightning")}
            onChange={() => handleFilter("chargingCase", "Lightning")}
          />
          Lightning
        </label>

        <label>
          <input
            type="checkbox"
            checked={filters.chargingCase.includes("USB-C")}
            onChange={() => handleFilter("chargingCase", "USB-C")}
          />
          USB-C
        </label>
      </div>
      <hr />

      <div className="filter">
        <h5>Rating</h5>

        <label>
          <input
            type="checkbox"
            checked={filters.rating.includes("4")}
            onChange={() => handleFilter("rating", "4")}
          />
          ⭐ 4+
        </label>

        <label>
          <input
            type="checkbox"
            checked={filters.rating.includes("4.5")}
            onChange={() => handleFilter("rating", "4.5")}
          />
          ⭐ 4.5+
        </label>

        <label>
          <input
            type="checkbox"
            checked={filters.rating.includes("5")}
            onChange={() => handleFilter("rating", "5")}
          />
          ⭐ 5
        </label>
      </div>

      <hr />
      <span className="h3filter">
        <button className="noselect clearFilter" onClick={clearFilters}>
          <span className="text"> Clear </span>
          <span className="icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z"></path>
            </svg>
          </span>
        </button>
      </span>
    </>
  );
}
