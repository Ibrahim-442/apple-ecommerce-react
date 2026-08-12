import React ,{useContext}from "react";
import { ProductsContext } from "../../../../../../../context/context.jsx";

export default function Sideiphone() {
    const {
    filters,
    handleFilter,
    clearFilters
  } = useContext(ProductsContext);
    
  return (
    <>
     
     
      <div className="filter">
        <h5>Price</h5>

        <label>
          <input type="checkbox" checked={filters.price.includes("under700")}
    onChange={() => handleFilter("price", "under700")}/>
          Under $700
        </label>

        <label>
          <input type="checkbox" checked={filters.price.includes("700-1000")}
    onChange={() => handleFilter("price", "700-1000")}/>
          $700 - $1000
        </label>

        <label>
          <input type="checkbox" checked={filters.price.includes("over1000")}
    onChange={() => handleFilter("price", "over1000")}/>
          Over $1000
        </label>
      </div>

      <hr/>
      <div className="filter">
        <h5>Storage</h5>

        <label>
          <input type="checkbox" checked={filters.storage.includes("64GB")}
          onChange={() => handleFilter("storage", "64GB")}/>
          64GB
        </label>

        <label>
          <input type="checkbox" checked={filters.storage.includes("128GB")}
          onChange={() => handleFilter("storage", "128GB")}/>
          128GB
        </label>

        <label>
          <input type="checkbox" checked={filters.storage.includes("256GB")}
          onChange={() => handleFilter("storage", "256GB")}/>
          256GB
        </label>
      </div>

     <hr/>
      <div className="filter">
        <h5>Color</h5>

        <label>
          <input type="checkbox"  checked={filters.color.includes("black")}
            onChange={() => handleFilter("color", "black")}/>
          Black
        </label>

        <label>
          <input type="checkbox"  checked={filters.color.includes("Blue")}
            onChange={() => handleFilter("color", "Blue")}/>
          Blue
        </label>

        <label>
          <input type="checkbox" checked={filters.color.includes("Pink")}
            onChange={() => handleFilter("color", "Pink")} />
          Pink
        </label>

        <label>
          <input type="checkbox"  checked={filters.color.includes("midnight")}
            onChange={() => handleFilter("color", "midnight")}/>
          Midnight
        </label>

        <label>
          <input type="checkbox"  checked={filters.color.includes("Desert Titanium")}
            onChange={() => handleFilter("color", "Desert Titanium")}/>
          Desert Titanium
        </label>

      </div>

     <hr/>
      <div className="filter">
        <h5>Rating</h5>

        <label>
          <input type="checkbox"    checked={filters.rating.includes("4")}
            onChange={() => handleFilter("rating", "4")}/>
          ⭐ 4+
        </label>

        <label>
          <input type="checkbox"    checked={filters.rating.includes("4.5")}
            onChange={() => handleFilter("rating", "4.5")}/>
          ⭐ 4.5+
        </label>

        <label>
          <input type="checkbox"    checked={filters.rating.includes("5")}
            onChange={() => handleFilter("rating", "5")}/>
          ⭐ 5
        </label>
      </div>
<hr/>
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
  )
}
