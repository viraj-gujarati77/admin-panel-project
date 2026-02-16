import React from "react";
import "./Products.css";

function Products() {
  return (
    <div className="main-box">
      <form action="/submitform" method="POST" enctype="multipart/form-data">
        <h3 className="heading-upload">Upload Product</h3>
        <label for="nameinput" class="form-label">
          Name
        </label>
        <input
          type="text"
          name="username"
          class="form-control"
          id="nameinput"
          placeholder="Enter your name"
        ></input>
        <input className="input-upload" type="file" />
        <button className="upload-button">Upload Now</button>
      </form>
    </div>
  );
}

export default Products;
