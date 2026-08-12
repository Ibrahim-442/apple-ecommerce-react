import "./Arrivals.css";
import React, { useContext, useEffect, useState } from "react";
import { ProductsContext } from "../../../../context/context.jsx";
import { Link } from "react-router-dom";

export default function Arrivals() {
  const { products, love, toggleLove } = useContext(ProductsContext);
  const [randomProducts, setRandomProducts] = useState([]);

  useEffect(() => {
    if (products.length > 0) {
      const shuffled = [...products].sort(() => Math.random() - 0.5);

      setRandomProducts(shuffled.slice(0, 8));
    }
  }, [products]);

  return (
    <div>
      <div className="ArrivalLine">
        <hr className="ArrivalLine1" />
      </div>
      <div className="allnewArival">
        <div className="NewArivaltitle">
          <h4>New Arrivals</h4>
          <Link to="Product/All">
            {" "}
            <button className="ShowAll">Show All</button>
          </Link>
        </div>
        <div className="products">
          {randomProducts.map((product) => (
            <Link
  to={`/product/${product.id}`}
  className="cardinfo"
  key={product.id}
>
  <div className="productImageBox">
    <img
      src={product.image}
      className="productImage"
      alt={product.title}
    />

    <button
      className="favorite"
      onClick={(e) => {
        e.preventDefault();
        e.stopPropagation();
        toggleLove(product.id);
      }}
    >
      <i
        className={
          love.includes(product.id)
            ? "bi bi-heart-fill favcolor"
            : "bi bi-heart"
        }
      ></i>
    </button>
  </div>

  <h5 className="productName">{product.title}</h5>

  <div className="rating">
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

    <span className="ratingNumber">
      ({product.rating})
    </span>
  </div>

  <div className="price">${product.price}</div>
</Link>
          ))}
        </div>
      </div>
    </div>
  );
}
