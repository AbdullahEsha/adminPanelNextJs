import Link from "next/link";
import React from "react";

const Category = ({ data, i }) => {
  return (
    <Link
      href={`/products/add/${data}`}
      style={{ textDecoration: "none", color: "#000" }}
    >
      <div className="product-card" style={{ cursor: "pointer" }}>
        <img
          src={`${
            i < 3
              ? "http://res.cloudinary.com/bayshore/image/upload/v1648488131/n4kyji7ojoqhfnzsqhrh.png"
              : i < 7
              ? "http://res.cloudinary.com/bayshore/image/upload/v1649203376/wunytik98kzubfx6yssb.png"
              : "http://res.cloudinary.com/bayshore/image/upload/v1648487892/oifbm2xpntegwjekd1ca.png"
          }`}
          alt="dummy"
        />
        <h5>{data}</h5>
      </div>
    </Link>
  );
};
const categoryData = [
  "Dot",
  "Business Card",
  "Watch Band",
  "Wrist Band",
  "Sport Band",
  "Badge",
  "Keychain",
  "Display",
  "Smart Case",
  "Bundle Pack",
  "Custom",
];

const Categories = () => {
  return (
    <div className="container">
      <div className="justify-grid">
        {categoryData.map((el, i) => (
          <Category key={i} i={i} data={el} />
        ))}
      </div>
    </div>
  );
};

export default Categories;
