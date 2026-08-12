import React ,{useContext}from "react";
import { ProductsContext } from "../../../../../../../context/context.jsx";

export default function Sidemac() {
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
          <input type="checkbox"  checked={filters.price.includes("under1000")}
    onChange={() => handleFilter("price", "under1000")}/>
          Under $1000
        </label>

        <label>
          <input type="checkbox" checked={filters.price.includes("1000-2000")}
    onChange={() => handleFilter("price", "1000-2000")}/>
          $1000 - $2000
        </label>

        <label>
          <input type="checkbox"  checked={filters.price.includes("over2000")}
    onChange={() => handleFilter("price", "over2000")}/>
          Over $2000
        </label>
      </div>

      <hr />
      <div className="filter">
        <h5>RAM</h5>

        <label>
          <input type="checkbox"  checked={filters.ram.includes("8GB")}
          onChange={() => handleFilter("ram", "8GB")} />
          8GB
        </label>

        <label>
          <input type="checkbox"  checked={filters.ram.includes("16GB")}
          onChange={() => handleFilter("ram", "16GB")}/>
          16GB
        </label>

        <label>
          <input type="checkbox"  checked={filters.ram.includes("18GB")}
          onChange={() => handleFilter("ram", "18GB")}/>
          18GB
        </label>

        <label>
          <input type="checkbox"  checked={filters.ram.includes("24GB")}
          onChange={() => handleFilter("ram", "24GB")}/>
          24GB
        </label>

        <label>
          <input type="checkbox"  checked={filters.ram.includes("32GB")}
          onChange={() => handleFilter("ram", "32GB")}/>
          32GB
        </label>

        <label>
          <input type="checkbox"  checked={filters.ram.includes("36GB")}
          onChange={() => handleFilter("ram", "36GB")}/>
          36GB
        </label>

        <label>
          <input type="checkbox"  checked={filters.ram.includes("48GB")}
          onChange={() => handleFilter("ram", "48GB")}/>
          48GB
        </label>

        <label>
          <input type="checkbox" checked={filters.ram.includes("64GB")}
          onChange={() => handleFilter("ram", "64GB")} />
          64GB
        </label>
      </div>
      <hr />
      <div className="filter">
        <h5>Storage</h5>

        <label>
          <input type="checkbox"  checked={filters.storage.includes("256GB SSD")}
          onChange={() => handleFilter("storage", "256GB SSD")} />
          256GB SSD
        </label>

        <label>
          <input type="checkbox" checked={filters.storage.includes("512GB SSD")}
          onChange={() => handleFilter("storage", "512GB SSD")}/>
          512GB SSD
        </label>

        <label>
          <input type="checkbox" checked={filters.storage.includes("1TB SSD")}
          onChange={() => handleFilter("storage", "1TB SSD")}/>
          1TB SSD
        </label>

        <label>
          <input type="checkbox" checked={filters.storage.includes("2TB SSD")}
          onChange={() => handleFilter("storage", "2TB SSD")}/>
          2TB SSD
        </label>
      </div>

      <hr />
      <div className="filter">
        <h5>Processor</h5>

        <label>
          <input type="checkbox"  checked={filters.processor.includes("Apple M1")}
          onChange={() => handleFilter("processor", "Apple M1")}/>
          Apple M1
        </label>

        <label>
          <input type="checkbox"  checked={filters.processor.includes("Apple M2")}
          onChange={() => handleFilter("processor", "Apple M2")}/>
          Apple M2
        </label>

        <label>
          <input type="checkbox"  checked={filters.processor.includes("Apple M3")}
          onChange={() => handleFilter("processor", "Apple M3")}/>
          Apple M3
        </label>

        <label>
          <input type="checkbox"  checked={filters.processor.includes("Apple M4")}
          onChange={() => handleFilter("processor", "Apple M4")}/>
          Apple M4
        </label>
      </div>

      <hr />
      <div className="filter">
        <h5>Rating</h5>

        <label>
          <input type="checkbox" checked={filters.rating.includes("4")}
          onChange={() => handleFilter("rating", "4")}/>⭐ 4+
        </label>

        <label>
          <input type="checkbox" checked={filters.rating.includes("4.5")}
          onChange={() => handleFilter("rating", "4.5")}/>⭐ 4.5+
        </label>

        <label>
          <input type="checkbox" checked={filters.rating.includes("5")}
          onChange={() => handleFilter("rating", "5")}/>⭐ 5
        </label>
      </div>
      <hr />
      <span className="h3filter">
      <button className="noselect clearFilter"  onClick={()=>clearFilters("mac")}>
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
