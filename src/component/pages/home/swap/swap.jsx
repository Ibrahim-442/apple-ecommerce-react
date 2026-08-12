import React from "react";
import "./swap.css";
import { Link } from "react-router-dom";

export default function Swap() {
  return (
    <div
      id="carouselExampleIndicators"
      data-bs-ride="carousel"
      data-bs-interval="5000"
      className="carousel slide"
    >
      <div className="carousel-indicators">
        <button
          type="button down"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="0"
          className="active"
        ></button>

        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="1"
        ></button>

        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="2"
        ></button>
      </div>

      <div className="carousel-inner">
        <div className="carousel-item active">
          <Link to="Product/Mac">
            {" "}
            <img src="/images/Mac.png" className="d-block w-100" alt="Mac" />
          </Link>
        </div>

        <div className="carousel-item">
          <Link to="Product/Iphone">
            {" "}
            <img
              src="/images/Phones.png"
              className="d-block w-100"
              alt="Phones"
            />
          </Link>
        </div>

        <div className="carousel-item">
          <Link to="Product/HeadPhone">
            {" "}
            <img
              src="/images/HeadPhones.png"
              className="d-block w-100"
              alt="HeadPhones"
            />
          </Link>
        </div>
      </div>

      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon"></span>
      </button>

      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon"></span>
      </button>
    </div>
  );
}
