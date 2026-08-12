import React, { useContext } from "react";
import { ProductsContext } from "../../../context/context.jsx";
import { Link } from "react-router-dom";
import "./Love.css";

export default function Love() {
  const { products, love, toggleLove } = useContext(ProductsContext);

  const favoriteProducts = products.filter((product) =>
    love.includes(product.id)
  );

  if (favoriteProducts.length === 0) {
    return (
      <div className="love-empty">
        <div className="empty-heart">
          <i className="bi bi-heart"></i>
        </div>

        <h2>Your Wishlist is Empty</h2>

        <p>
          Save your favorite products here and come back to them later.
        </p>

        <Link to="/" className="shop-now">
          Start Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="love-page">

      <div className="love-header">
        <span>YOUR FAVORITES</span>

        <h1>Wishlist</h1>

        <p>
          {favoriteProducts.length}{" "}
          {favoriteProducts.length === 1 ? "product" : "products"} saved
        </p>
      </div>

      <div className="favorite-grid">

        {favoriteProducts.map((product) => (

          <Link
            to={`/product/${product.id}`}
            className="favorite-card"
            key={product.id}
          >

            <div className="favorite-image-box">

              <img
                src={product.image}
                className="favorite-image"
                alt={product.title}
              />

              <button
                className="favorite-button"
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  toggleLove(product.id);
                }}
              >
                <i className="bi bi-heart-fill"></i>
              </button>

            </div>

            <div className="favorite-content">

              <span className="favorite-category">
                {product.category}
              </span>

              <h3>{product.title}</h3>

              <div className="favorite-rating">

                <div className="stars">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <i
                      key={star}
                      className={
                        star <= Math.floor(product.rating)
                          ? "bi bi-star-fill"
                          : star === Math.ceil(product.rating) &&
                            product.rating % 1 !== 0
                          ? "bi bi-star-half"
                          : "bi bi-star"
                      }
                    ></i>
                  ))}
                </div>

                <span>({product.rating})</span>

              </div>

              <div className="favorite-bottom">

                <strong>${product.price}</strong>

                <span className="view-product">
                  View
                  <i className="bi bi-arrow-right"></i>
                </span>

              </div>

            </div>

          </Link>

        ))}

      </div>

    </div>
  );
}