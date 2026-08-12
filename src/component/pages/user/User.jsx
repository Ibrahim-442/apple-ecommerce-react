import React, { useContext, useState } from "react";
import { ProductsContext } from "../../../context/context.jsx";
import "./User.css";

export default function User() {
  const { user, saveUser } = useContext(ProductsContext);

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    area: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    saveUser(formData);
  };

  if (!user) {
    return (
      <div className="user-page">
        <div className="user-form-wrapper">
          <div className="user-form-icon">
            <i className="bi bi-person"></i>
          </div>

          <div className="user-form-header">
            <span>WELCOME</span>

            <h1>Create Your Profile</h1>

            <p>
              Add your information once and we'll use it automatically during
              checkout.
            </p>
          </div>

          <form className="user-form" onSubmit={handleSubmit}>
            <div className="input-group">
              <label>Username</label>

              <div className="input-wrapper">
                <i className="bi bi-person"></i>

                <input
                  type="text"
                  name="username"
                  value={formData.username}
                  onChange={handleChange}
                  placeholder="Enter your username"
                  required
                />
              </div>
            </div>

            <div className="input-group">
              <label>Email Address</label>

              <div className="input-wrapper">
                <i className="bi bi-envelope"></i>

                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="example@email.com"
                  required
                />
              </div>
            </div>

            <div className="input-group">
              <label>Phone Number</label>

              <div className="input-wrapper">
                <i className="bi bi-telephone"></i>

                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+20 100 000 0000"
                  required
                />
              </div>
            </div>
            <div className="input-group">
              <label htmlFor="address">Address</label>

              <div className="input-wrapper">
                <i className="bi bi-geo-alt"></i>

                <input
                  id="address"
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  placeholder="Enter your address"
                  required
                />
              </div>
            </div>

            <div className="input-group">
              <label htmlFor="city">City</label>

              <div className="input-wrapper">
                <i className="bi bi-buildings"></i>

                <input
                  id="city"
                  type="text"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  placeholder="Enter your city"
                  required
                />
              </div>
            </div>

            <div className="input-group">
              <label htmlFor="area">Area</label>

              <div className="input-wrapper">
                <i className="bi bi-map"></i>

                <input
                  id="area"
                  type="text"
                  name="area"
                  value={formData.area}
                  onChange={handleChange}
                  placeholder="Enter your area"
                  required
                />
              </div>
            </div>

            <button type="submit" className="save-profile-btn">
              Save Profile
              <i className="bi bi-arrow-right"></i>
            </button>
          </form>

          <p className="privacy-note">
            <i className="bi bi-shield-check"></i>
            Your information is stored for this session.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="user-page">
      <div className="profile-card">
        <div className="profile-top">
          <div className="profile-avatar">
            {user.username.charAt(0).toUpperCase()}
          </div>

          <div className="profile-heading">
            <span>MY ACCOUNT</span>

            <h1>{user.username}</h1>

            <p>Welcome back 👋</p>
          </div>
        </div>

        <div className="profile-divider"></div>

        <div className="profile-info">
          <div className="profile-item">
            <div className="profile-item-icon">
              <i className="bi bi-person"></i>
            </div>

            <div>
              <span>Username: </span>
              <strong>{user.username}</strong>
            </div>
          </div>

          <div className="profile-item">
            <div className="profile-item-icon">
              <i className="bi bi-envelope"></i>
            </div>

            <div>
              <span>Email Address: </span>
              <strong>{user.email}</strong>
            </div>
          </div>

          <div className="profile-item">
            <div className="profile-item-icon">
              <i className="bi bi-telephone"></i>
            </div>

            <div>
              <span>Phone Number: </span>
              <strong>{user.phone}</strong>
            </div>
          </div>
          <div className="profile-item">
            <div className="profile-item-icon">
              <i className="bi bi-geo-alt"></i>
            </div>

            <div className="profile-item-content">
              <span>ADDRESS: </span>
              <strong>{user.address}</strong>
            </div>
          </div>

          <div className="profile-location-row">
            <div className="profile-item">
              <div className="profile-item-icon">
                <i className="bi bi-map"></i>
              </div>

              <div className="profile-item-content">
                <span>AREA: </span>
                <strong>{user.area}</strong>
              </div>
            </div>

            <div className="profile-item">
              <div className="profile-item-icon">
                <i className="bi bi-buildings"></i>
              </div>

              <div className="profile-item-content">
                <span>CITY: </span>
                <strong>{user.city}</strong>
              </div>
            </div>
          </div>
        </div>

        <div className="profile-footer">
          <div>
            <i className="bi bi-check-circle-fill"></i>
            Profile saved
          </div>

          <span>Session account</span>
        </div>
      </div>
    </div>
  );
}
