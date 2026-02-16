import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [products, setProducts] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    price: "",
    image: null,
  });

  // Fetch all products
  const fetchProducts = async () => {
    const res = await axios.get("http://localhost:3000/admin-panel-data/products");
    setProducts(res.data);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  // Handle Form Submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append("name", formData.name);
    data.append("price", formData.price);
    data.append("image", formData.image);

    await axios.post("http://localhost:3000/admin-panel-data/products", data);
    alert("Product Uploaded!");
    fetchProducts(); // Refresh list
  };

  return (
    <div className="container">
      <h2>Admin Product Panel</h2>

      {/* Upload Form */}
      <form className="upload-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Product Name"
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          required
        />
        <input
          type="number"
          placeholder="Price"
          onChange={(e) => setFormData({ ...formData, price: e.target.value })}
          required
        />
        <input
          type="file"
          onChange={(e) =>
            setFormData({ ...formData, image: e.target.files[0] })
          }
          required
        />
        <button type="submit">Add Product</button>
      </form>

      <hr />

      {/* Product Display Grid */}
      <div className="product-grid">
        {products.map((p) => (
          <div key={p._id} className="card">
            <img
              src={`http://localhost:3000/admin-panel-data/products/${p.image}`}
              alt={p.name}
            />
            <div className="card-info">
              <h3>{p.name}</h3>
              <p className="price">${p.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
