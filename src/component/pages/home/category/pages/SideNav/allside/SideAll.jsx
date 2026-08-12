import React,{ useContext } from "react";
import { ProductsContext } from "../../../../../../../context/context.jsx";


export default function SideAll() {
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
            checked={filters.price.includes("under1000")}
            onChange={() => handleFilter("price", "under1000")}
          />
          Under $1000
        </label>

        <label>
          <input
            type="checkbox"
            checked={filters.price.includes("1000-2000")}
            onChange={() => handleFilter("price", "1000-2000")}
          />
          $1000 - $2000
        </label>

        <label>
          <input
            type="checkbox"
            checked={filters.price.includes("over2000")}
            onChange={() => handleFilter("price", "over2000")}
          />
          Over $2000
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
