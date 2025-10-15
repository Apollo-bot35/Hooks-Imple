import React from "react";
import useFetch from "../hooks/useFetch";

import "./ProductList.css";

function ProductList() {
  const { data, loading, error, retry } = useFetch(
    "https://api.escuelajs.co/api/v1/products"
  );

  if (loading) return <p className="loading">Loading products...</p>;

  if (error)
    return (
      <div className="error-container">
        <p className="error">Error: {error}</p>
        <button className="retry-btn" onClick={retry}>
          Retry
        </button>
      </div>
    );

  return (
    <div className="container">
      <h2>Product List</h2>
      <div className="grid">
        {data &&
          data.slice(0, 10).map((item) => (
            <div className="card" key={item.id}>
              <img src={item.images[0]} alt={item.title} />
              <h3>{item.title}</h3>
              <p>₹ {item.price}</p>
            </div>
          ))}
      </div>
    </div>
  );
}

export default ProductList;
