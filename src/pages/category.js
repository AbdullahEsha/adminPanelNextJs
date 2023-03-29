import Link from "next/link";
import React from "react";

const category = () => {
  return (
    <div className="container">
      <form>
        <div
          style={{ display: "flex", justifyContent: "space-between" }}
          className="product-card"
        >
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" />

          <label htmlFor="file">Image:</label>
          <input type="file" id="file" name="file" />
        </div>
        <div className="center">
          <button
            type="submit"
            className="btn-common "
            style={{ marginTop: "2rem" }}
          >
            Add Category
          </button>
        </div>
      </form>
    </div>
  );
};

export default category;
