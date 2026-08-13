import { useContext , useEffect} from "react";
import { ProductsContext } from "../../../../../../context/context.jsx";
import "../all.css";
import { Link } from "react-router-dom";

export default function EarBuds() {
  const {  love, toggleLove,filteredProducts,clearFilters  } = useContext(ProductsContext);
 useEffect(() => {
    return () => {
      clearFilters();
    };
  }, []);

  const EarBuds = filteredProducts .filter(
    (product) =>
      product.title.toLowerCase().includes("airpods") &&
      !product.title.toLowerCase().includes("max"),
  );
  return (
    <div className="products">
      {EarBuds.map((product) => (
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
  );
}
