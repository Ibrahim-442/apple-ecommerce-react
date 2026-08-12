import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ProductsContext } from "../../../../context/context.jsx";
import "./Pay.css";

export default function Pay() {
  const {
  products,
  cart,
  user,
  clearCart
} = useContext(ProductsContext);
  const navigate = useNavigate();

  const cartProducts = products.filter((product) => cart.includes(product.id));

  const subtotal = cartProducts.reduce(
    (total, product) => total + product.price,
    0,
  );
 const [orderSuccess, setOrderSuccess] = useState(false);
const [orderTotal, setOrderTotal] = useState(0);

  const shipping = subtotal > 0 ? 0 : 0;
  const total = subtotal + shipping;

  if (!user) {
    return (
      <div className="checkout-empty">
        <div className="checkout-empty-card">
          <div className="empty-icon">
            <i className="bi bi-person"></i>
          </div>

          <h2>Complete Your Profile</h2>

          <p>Please add your information before continuing with your order.</p>

          <Link to="/user" className="checkout-main-btn">
            Go to Profile
            <i className="bi bi-arrow-right"></i>
          </Link>
        </div>
      </div>
    );
  }


if (cartProducts.length === 0 && !orderSuccess) {
  return (
    <div className="checkout-empty">
      <div className="checkout-empty-card">
        <div className="empty-icon">
          <i className="bi bi-cart"></i>
        </div>

        <h2>Your Cart Is Empty</h2>

        <p>
          Add some products to your cart before checking out.
        </p>

        <Link to="/" className="checkout-main-btn">
          Continue Shopping
          <i className="bi bi-arrow-right"></i>
        </Link>
      </div>
    </div>
  );
}

const handlePlaceOrder = () => {
  const finalTotal = subtotal + shipping;

  setOrderTotal(finalTotal);
  setOrderSuccess(true);

  clearCart();
};
  return (
    <div className="checkout-page">
      <div className="checkout-header">
        <span>CHECKOUT</span>

        <h1>Complete Your Order</h1>

        <p>Review your information and order before placing it.</p>
      </div>

      <div className="checkout-container">
        <div className="checkout-left">
          <section className="checkout-card">
            <div className="section-title">
              <div className="section-icon">
                <i className="bi bi-person"></i>
              </div>

              <div>
                <h2>Customer Information</h2>
                <p>Your saved account information</p>
              </div>
            </div>

            <div className="customer-info">
              <div className="customer-item">
                <span>Username</span>
                <strong>{user.username}</strong>
              </div>

              <div className="customer-item">
                <span>Email</span>
                <strong>{user.email}</strong>
              </div>

              <div className="customer-item">
                <span>Phone</span>
                <strong>{user.phone}</strong>
              </div>
            </div>

            <Link to="/user" className="edit-profile">
              <i className="bi bi-pencil"></i>
              Edit Profile
            </Link>
          </section>
          <section className="checkout-card">
            <div className="section-title">
              <div className="section-icon">
                <i className="bi bi-geo-alt"></i>
              </div>

              <div>
                <h2>Shipping Address</h2>
                <p>Where your order will be delivered</p>
              </div>
            </div>

            <div className="shipping-address">
              <div className="address-main">
                <i className="bi bi-geo-alt-fill"></i>

                <div>
                  <strong>{user.address}</strong>

                  <span>
                    {user.area}, {user.city}
                  </span>
                </div>
              </div>

              <Link to="/user" className="edit-profile">
                <i className="bi bi-pencil"></i>
                Edit Address
              </Link>
            </div>
          </section>
          <section className="checkout-card">
            <div className="section-title">
              <div className="section-icon">
                <i className="bi bi-bag"></i>
              </div>

              <div>
                <h2>Your Products</h2>
                <p>{cartProducts.length} items in your order</p>
              </div>
            </div>

            <div className="checkout-products">
              {cartProducts.map((product) => (
                <Link
                  to={`/product/${product.id}`}
                  className="checkout-product"
                  key={product.id}
                >
                  <div className="checkout-product-image">
                    <img src={product.image} alt={product.title} />
                  </div>

                  <div className="checkout-product-info">
                    <span>{product.category}</span>

                    <h3>{product.title}</h3>

                    <p>${product.price}</p>
                  </div>

                  <i className="bi bi-chevron-right product-arrow"></i>
                </Link>
              ))}
            </div>
          </section>

          <section className="checkout-card">
            <div className="section-title">
              <div className="section-icon">
                <i className="bi bi-credit-card"></i>
              </div>

              <div>
                <h2>Payment Method</h2>
                <p>Select your preferred payment method</p>
              </div>
            </div>

            <div className="payment-method">
              <div className="payment-option active">
                <div className="payment-radio">
                  <span></span>
                </div>

                <div className="payment-option-info">
                  <strong>Cash on Delivery</strong>

                  <span>Pay when your order arrives</span>
                </div>

                <i className="bi bi-cash-stack"></i>
              </div>

              <div className="payment-option disabled">
                <div className="payment-radio"></div>

                <div className="payment-option-info">
                  <strong>Credit / Debit Card</strong>

                  <span>Coming soon</span>
                </div>

                <i className="bi bi-credit-card"></i>
              </div>
            </div>
          </section>
        </div>

        <aside className="order-summary">
          <div className="summary-header">
            <h2>Order Summary</h2>

            <span>{cartProducts.length} items</span>
          </div>

          <div className="summary-products">
            {cartProducts.map((product) => (
              <div className="summary-product" key={product.id}>
                <div className="summary-product-image">
                  <img src={product.image} alt={product.title} />
                </div>

                <div className="summary-product-info">
                  <span>{product.title}</span>
                  <strong>${product.price}</strong>
                </div>
              </div>
            ))}
          </div>

          <div className="summary-divider"></div>

          <div className="summary-row">
            <span>Subtotal</span>
            <strong>${subtotal.toFixed(2)}</strong>
          </div>

          <div className="summary-row">
            <span>Shipping</span>

            <strong className="free">Free</strong>
          </div>

          <div className="summary-divider"></div>

          <div className="summary-total">
            <span>Total</span>

            <strong>${total.toFixed(2)}</strong>
          </div>

          <button className="place-order-btn" onClick={handlePlaceOrder}>
            <span>Place Order</span>

            <i className="bi bi-arrow-right"></i>
          </button>

          <div className="secure-checkout">
            <i className="bi bi-shield-check"></i>

            <span>Secure checkout</span>
          </div>
        </aside>
      </div>
      {orderSuccess && (
        <div className="success-overlay">
          <div className="success-modal">
            <button
              className="success-close"
              onClick={() => {
                setOrderSuccess(false);
                navigate("/");
              }}
            >
              ×
            </button>

            <div className="success-icon">
              <i className="bi bi-check-lg"></i>
            </div>

            <span className="success-label">ORDER CONFIRMED</span>

            <h2>Order Placed Successfully!</h2>

            <p>
              Thank you, {user.username}. Your order has been successfully
              placed and will be processed shortly.
            </p>

            <div className="success-details">
              <div>
                <span>Customer</span>
                <strong>{user.username}</strong>
              </div>

              <div>
                <span>Total</span>
               <strong>${orderTotal.toFixed(2)}</strong>
              </div>
            </div>

            <button className="success-home-btn" onClick={() => navigate("/")}>
              Continue Shopping
              <i className="bi bi-arrow-right"></i>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
