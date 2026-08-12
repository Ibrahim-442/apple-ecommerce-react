import { useContext, useEffect, useState } from "react";
import { ProductsContext } from "../../../../../../context/context.jsx";
import "../all.css";
import { Link } from "react-router-dom";

export default function Iphone() {
  const { love, toggleLove, filteredProducts } = useContext(ProductsContext);
  const changePage = (page) => {
    setCurrentPage(page);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const Iphone = filteredProducts.filter((product) =>
    product.title.toLowerCase().includes("iphone"),
  );

  const [currentPage, setCurrentPage] = useState(1);

  const productsPerPage = 12;

  const totalPages = Math.ceil(Iphone.length / productsPerPage);

  const startIndex = (currentPage - 1) * productsPerPage;

  const currentProducts = Iphone.slice(
    startIndex,
    startIndex + productsPerPage,
  );

  useEffect(() => {
    setCurrentPage(1);
  }, [filteredProducts]);

  return (
    <>
      <div className="products">
        {currentProducts.map((product) => (
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

      {totalPages > 1 && (
        <div className="pagination">
          <button
            onClick={() => changePage(currentPage - 1)}
            disabled={currentPage === 1}
          >
            ‹
          </button>

          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index}
              className={currentPage === index + 1 ? "active" : ""}
              onClick={() => changePage(index + 1)}
            >
              {index + 1}
            </button>
          ))}
          <button
            onClick={() => changePage(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            ›
          </button>
        </div>
      )}
    </>
  );
}
