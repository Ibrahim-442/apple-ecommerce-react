import React, { useState, useContext } from "react";

import { Link, NavLink } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap-icons/font/bootstrap-icons.css";

import "./cNav.css";

import { ProductsContext } from "../../context/context.jsx";

function SearchBar() {
  const { products } = useContext(ProductsContext);

  const [query, setQuery] = useState("");

  const convertArabicNums = (str) =>
    str.replace(/[٠-٩]/g, (d) => "٠١٢٣٤٥٦٧٨٩".indexOf(d));

  // Search
  const filtered =
    query.trim() === ""
      ? []
      : products
          ?.filter((item) => {
            const cleanTitle = convertArabicNums(
              item.title?.toString().toLowerCase() || "",
            );

            const cleanQuery = convertArabicNums(query.toLowerCase());

            return cleanTitle.includes(cleanQuery);
          })
          .slice(0, 5);

  return (
    <div className="search-box">
      <i className="bi bi-search search-icon"></i>

      <input
        className="form-control"
        type="search"
        placeholder="Search"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />

      {filtered.length > 0 && (
        <div className="results-dropdown">
          {filtered.map((item) => (
            <Link
              key={item.id}
              to={`/product/${item.id}`}
              onClick={() => setQuery("")}
            >
              <div className="result-item">
                <img src={item.image} alt={item.title} className="result-img" />

                <div className="result-info">
                  <span className="result-title">{item.title}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

export default function Nav() {
  const [hover, setHover] = useState("");

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand leftnav" to="/">
       <div className="liquid-text" data-text="Istore">Istore</div>
      </Link>

      <form>
        <SearchBar />
      </form>

      <div
        className="collapse navbar-collapse rightnav"
        id="navbarNavAltMarkup"
      >
        <div className="navbar-nav">
          <NavLink
            className="nav-item nav-link"
            to="/Love"
            onMouseEnter={() => setHover("heart")}
            onMouseLeave={() => setHover("")}
          >
            {({ isActive }) => (
              <>
                {isActive || hover === "heart" ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    className="bi bi-heart-fill heat1 iconNav"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fillRule="evenodd"
                      d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    className="bi bi-heart iconNav"
                    viewBox="0 0 16 16"
                  >
                    <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15" />
                  </svg>
                )}
              </>
            )}
          </NavLink>

          <NavLink
            className="nav-item nav-link"
            onMouseEnter={() => setHover("cart")}
            onMouseLeave={() => setHover("")}
            to="/Cart"
          >
            {hover === "cart" ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                className="bi bi-cart-fill iconNav"
                viewBox="0 0 16 16"
              >
                <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0-2-2m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2" />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                className="bi bi-cart iconNav"
                viewBox="0 0 16 16"
              >
                <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l1.313 7h8.17l1.313-7zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 2 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2" />
              </svg>
            )}
          </NavLink>

          <NavLink
            className="nav-item nav-link"
            onMouseEnter={() => setHover("user")}
            onMouseLeave={() => setHover("")}
            to="/User"
          >
            {hover === "user" ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                className="bi bi-person-badge-fill iconNav"
                viewBox="0 0 16 16"
              >
                <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2zm4.5 0a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1zM8 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6m5 2.755C12.146 12.825 10.623 12 8 12s-4.146.826-5 1.755V14a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1z" />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                className="bi bi-person-circle iconNav"
                viewBox="0 0 16 16"
              >
                <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />

                <path
                  fillRule="evenodd"
                  d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 13.468 12.37 7 7 0 0 0 8 1"
                />
              </svg>
            )}
          </NavLink>
        </div>
      </div>
    </nav>
  );
}
