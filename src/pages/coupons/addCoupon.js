import Image from "next/image";
import React, { useState } from "react";

const AddCoupon = () => {
  const [shippingType, setShippingType] = useState(""); // initialize state with an empty string

  function handleShippingChange(event) {
    setShippingType(event.target.value);
  }
  console.log(shippingType);
  return (
    <>
      <div className="container">
        <div className="promocode-card">
          <div className="promocode-background">
            <Image
              src="/image/promo-code.png"
              alt="promo-code"
              height={262}
              width={434}
            />
          </div>
          <div className="promocode-bottom">
            <div className="promocode-inside">
              <p>Name:</p>
              <input type="text" placeholder="Enter your name." />
              <p>Contact or Promocode:</p>
              <input type="text" placeholder="0x628js784489" />
              <p>Expires:</p>
              <input type="date" />

              <div className={`${shippingType === "yes" ? "disable" : ""}`}>
                <p>Discount Type:</p>
                <input type="radio" name="discount-type" /> {" "}
                <label>Percent (%)</label> 
                <input type="radio" name="discount-type" /> {" "}
                <label>Amount $</label>
              </div>

              <p>Description:</p>
              <textarea
                rows="9"
                placeholder="Write your description....."
              ></textarea>
            </div>
            <div className="promocode-inside">
              <p>Amount Off:</p>
              <input type="text" placeholder="Enter your name." />
              <p>Coupon:</p>
              <input type="text" placeholder="0x628js784489" />
              <p>Token Link:</p>
              <input type="text" placeholder="0x628js784489" />
              <p>Spent minimum amount:</p>
              <input type="text" placeholder="0x628js784489" />

              <p>Free shipping:</p>
              <input
                type="radio"
                name="shipping-type"
                value="yes"
                checked={shippingType === "yes"}
                onChange={handleShippingChange}
              />
              <label>Yes</label>
              <input
                type="radio"
                name="shipping-type"
                value="no"
                checked={shippingType === "no"}
                onChange={handleShippingChange}
              />
              <label>No</label>

              <p>Image:</p>
              <input type="file" />
            </div>
            <button>Save</button>
            <button>Delete</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddCoupon;
