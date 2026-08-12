import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ProductsContext } from "../../../context/context.jsx";
import "./Cart.css";

export default function Cart() {
  const { products, cart, love, togglecart, toggleLove } =
    useContext(ProductsContext);

  const cartProducts = cart
    .map((id) => products.find((product) => product.id === id))
    .filter(Boolean);

  if (cartProducts.length === 0) {
    return (
      <div className="empty-cart">
        <div className="empty-cart-icon">🛒</div>
        <h2>Your Cart is Empty</h2>
        <p>Looks like you haven't added anything to your cart yet.</p>

        <Link to="/" className="continue-shopping">
          Continue Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="cart-page">
      <div className="cart-header">
        <span>YOUR SHOPPING CART</span>
        <h1>My Cart</h1>
        <p>{cartProducts.length} product(s) in your cart</p>
      </div>

      <div className="cart-container">
        <div className="cart-products">
          {cartProducts.map((product) => {
            const isLoved = love.includes(product.id);
            const isInCart = cart.includes(product.id);

            return (
              <div className="cart-card" key={product.id}>
                <Link to={`/product/${product.id}`} className="cart-image">
                  <img src={product.image} alt={product.title} />
                </Link>

                <div className="cart-info">
                  <span className="cart-category">{product.category}</span>

                  <Link to={`/product/${product.id}`} className="cart-title">
                    {product.title}
                  </Link>

                  <p className="cart-description">{product.description}</p>

                  <div className="cart-rating">
                    <span>{"★".repeat(Math.floor(product.rating))}</span>

                    <small>{product.rating} / 5</small>
                  </div>

                  <div className="cart-bottom">
                    <strong className="cart-price">${product.price}</strong>

                    <div className="cart-actions">
                      <button
                        className={`action-btn love-btn ${
                          isLoved ? "loved" : ""
                        }`}
                        onClick={() => toggleLove(product.id)}
                        title="Add to favorites"
                      >
                        {isLoved ? "♥" : "♡"}
                      </button>

                      <button
                        className="remove-btn "
                        onClick={() => togglecart(product.id)}
                      >
                        <i class="bi bi-bag-x-fill"></i> Remove
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="cart-summary">
          <h2>Order Summary</h2>

          <div className="summary-row">
            <span>Products</span>
            <span>{cartProducts.length}</span>
          </div>

          <div className="summary-line"></div>

          <div className="summary-total">
            <span>Total</span>

            <strong>
              $
              {cartProducts
                .reduce((total, product) => total + product.price, 0)
                .toFixed(2)}
            </strong>
          </div>

          <Link to="/Pay">
            
            <button className="checkout-btn">Proceed to Checkout</button>
          </Link>

          <Link to="/" className="continue-link">
            ← Continue Shopping
          </Link>
        </div>
      </div>
    </div>
  );
}
