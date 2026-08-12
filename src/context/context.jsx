import React, { createContext, useEffect, useState } from "react";

export const ProductsContext = createContext();

export default function ProductsProvider({ children }) {
  const [products, setProducts] = useState([]);
  const [love, setlove] = useState([]);
  const [cart, setCart] = useState([]);

  const [user, setUser] = useState(() => {
  const savedUser = sessionStorage.getItem("user");

  return savedUser ? JSON.parse(savedUser) : null;
});
const saveUser = (userData) => {
  setUser(userData);

  sessionStorage.setItem(
    "user",
    JSON.stringify(userData)
  );
};
  useEffect(() => {
    fetch("/products/products.json")
      .then((res) => res.json())

      .then((data) => {
        setProducts(data.products);
      });
  }, []);
const clearCart = () => {
  setCart([]);
};
  const toggleLove = (id) => {
    setlove((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id],
    );
  };
  const togglecart = (id) => {
    setCart((prev) => 
      prev.includes(id)? prev.filter((item)=>(item !== id)):[...prev, id],
    );
  };

  const [filters, setFilters] = useState({
    ram: [],

    storage: [],

    processor: [],

    rating: [],

    price: [],

    color: [],

    chargingCase: [],
  });

  const handleFilter = (type, value) => {
    setFilters((prev) => ({
      ...prev,

      [type]: prev[type].includes(value)
        ? prev[type].filter((item) => item !== value)
        : [...prev[type], value],
    }));

    window.scrollTo({
      top: 0,

      behavior: "smooth",
    });
  };

  const clearFilters = () => {
    setFilters({
      ram: [],

      storage: [],

      processor: [],

      rating: [],

      price: [],

      color: [],

      chargingCase: [],
    });
  };

  useEffect(() => {
    return () => {
      clearFilters();
    };
  }, []);

  const filteredProducts = products.filter((product) => {
    if (
      filters.chargingCase.length > 0 &&
      !filters.chargingCase.includes(product.chargingCase)
    ) {
      return false;
    }

    if (filters.color.length > 0 && !filters.color.includes(product.color)) {
      return false;
    }

    if (filters.ram.length > 0 && !filters.ram.includes(product.ram)) {
      return false;
    }

    if (
      filters.storage.length > 0 &&
      !filters.storage.includes(product.storage)
    ) {
      return false;
    }

    if (
      filters.processor.length > 0 &&
      !filters.processor.includes(product.processor)
    ) {
      return false;
    }

    if (filters.rating.length > 0) {
      const rating = Number(product.rating);

      const ratingMatch = filters.rating.some(
        (selectedRating) => rating >= Number(selectedRating),
      );

      if (!ratingMatch) {
        return false;
      }
    }

    if (filters.price.length > 0) {
      const price = Number(product.price);

      const priceMatch = filters.price.some((range) => {
        if (range === "under200") {
          return price < 200;
        }

        if (range === "under1000") {
          return price < 1000;
        }

        if (range === "over1000") {
          return price > 1000;
        }

        if (range === "under700") {
          return price < 700;
        }

        if (range === "700-1000") {
          return price >= 700 && price <= 1000;
        }

        if (range === "over200") {
          return price >= 200;
        }

        if (range === "1000-2000") {
          return price >= 1000 && price <= 2000;
        }

        if (range === "200-400") {
          return price >= 200 && price <= 400;
        }

        if (range === "over2000") {
          return price > 2000;
        }

        if (range === "over400") {
          return price > 400;
        }

        return false;
      });

      if (!priceMatch) {
        return false;
      }
    }

    return true;
  });

  return (
    <ProductsContext.Provider
      value={{
        products,

        filteredProducts,

        love,

        toggleLove,

        filters,

        handleFilter,

        clearFilters,
        togglecart, cart,saveUser ,user,clearCart
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
}
