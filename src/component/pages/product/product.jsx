import { useState, useContext, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { ProductsContext } from "../../../context/context.jsx";
import "./product.css";

export default function Productr() {
  const { id } = useParams();
  const { products, love, toggleLove, togglecart, cart } =
    useContext(ProductsContext);
  const navigate = useNavigate();
  const product = products.find((product) => product.id === Number(id));

  if (!product) {
    return (
      <div className="product-not-found">
        <h2>Product Not Found</h2>
        <Link to="/">Back to Home</Link>
      </div>
    );
  }

  const iscart = cart.includes(product.id);
  const isLoved = love.includes(product.id);
  return (
    <div className="product-details">
      <Link
        to="#"
        className="back-btn"
        onClick={(e) => {
          e.preventDefault();
          navigate(-1);
        }}
      >
        ← Back
      </Link>

      <div className="product-container">
        <div className="product-image-section">
          <div className="image-box">
            <img src={product.image} alt={product.title} />
          </div>
        </div>

        <div className="product-info">
          <span className="product-category">{product.category}</span>

          <h1>{product.title}</h1>

          <div className="rating">
            <span className="stars">
              {"★".repeat(Math.floor(product.rating))}
              {"☆".repeat(5 - Math.floor(product.rating))}
            </span>

            <span>{product.rating} / 5</span>
          </div>

          <p className="product-description">{product.description}</p>

          <div className="product-price">${product.price}</div>

          <div className="stock">
            <span>●</span> {product.stock} items available
          </div>

          <div className="specifications">
            <h2>Specifications</h2>

            <div className="spec-grid">
              <div className="spec-item">
                <span>Brand</span>
                <strong>{product.brand}</strong>
              </div>

              {product.ram && (
                <div className="spec-item">
                  <span>RAM</span>
                  <strong>{product.ram}</strong>
                </div>
              )}

              {product.storage && (
                <div className="spec-item">
                  <span>Storage</span>
                  <strong>{product.storage}</strong>
                </div>
              )}

              {product.processor && (
                <div className="spec-item">
                  <span>Processor</span>
                  <strong>{product.processor}</strong>
                </div>
              )}

              {product.connectivity && (
                <div className="spec-item">
                  <span>Connectivity</span>
                  <strong>{product.connectivity}</strong>
                </div>
              )}

              {product.chargingCase && (
                <div className="spec-item">
                  <span>Charging Case</span>
                  <strong>{product.chargingCase}</strong>
                </div>
              )}

              {product.color && (
                <div className="spec-item">
                  <span>Color</span>
                  <strong>{product.color}</strong>
                </div>
              )}
            </div>
          </div>

          <div className="product-actions">
            <button
              className={`add-cart ${iscart ? "added" : ""}`}
              onClick={() => togglecart(product.id)}
            >
              {iscart ? (
                <>
                  <span className="check-icon">✓</span>
                  Added to Cart
                </>
              ) : (
                <>
                  <span className="cart-icon">🛒</span>
                  Add to Cart
                </>
              )}
            </button>

            <button
              className={`wishlist-btn ${isLoved ? "active" : ""}`}
              onClick={() => toggleLove(product.id)}
            >
              {isLoved ? "♥ Added to Wishlist" : "♡ Add to Wishlist"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
