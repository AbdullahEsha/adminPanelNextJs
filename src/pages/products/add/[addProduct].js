import Parent from "@/components/Layout";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { BiMessageSquareEdit } from "react-icons/bi";
import { RiFolderUploadFill } from "react-icons/ri";
import { GrUpdate } from "react-icons/gr";

import ImageUploading from "react-images-uploading";
import axios from "axios";
import { async } from "@firebase/util";

const cloudName = "dhssbbiwj";
const uploadPreset = "nasim67reja";
const uploadUrl = `https://api.cloudinary.com/v1_1/${cloudName}/upload`;

const Products = () => {
  const [images, setImages] = useState([]);
  const maxNumber = 69;
  const handleImageUpload = async () => {
    // Upload each image to Cloudinary
    const imageUrls = await Promise.all(
      images.map(async (image) => {
        const formData = new FormData();
        formData.append("file", image.file);
        formData.append("upload_preset", uploadPreset);
        const response = await axios.post(uploadUrl, formData);
        return response.data.secure_url;
      })
    );
    console.log(imageUrls);
    // Save the image URLs in a database
    // await axios.post("/api/images", { urls: imageUrls });
    console.log("yeah");
    // Update the state to display the uploaded images
    setImages([]);
  };
  const onChange = async (imageList, addUpdateIndex) => {
    // console.log(imageList, addUpdateIndex);
    // Update the state to display the selected images
    setImages(imageList);
  };
  const [name, setName] = useState();
  const [price, setPrice] = useState();
  const [description, setDescription] = useState();
  const [quantity, setQuantity] = useState();
  const handleSubmit = async () => {
    // console.log(name, price, description);
    const imageUrls = await Promise.all(
      images.map(async (image) => {
        const formData = new FormData();
        formData.append("file", image.file);
        formData.append("upload_preset", uploadPreset);
        const response = await axios.post(uploadUrl, formData);
        return response.data.secure_url;
      })
    );
    // console.log(imageUrls);
    // Create the new product
    const productData = {
      name,
      description,
      price,
      quantity,
      category: "Home",
      images: imageUrls,
    };
    try {
      const response = await axios.post(
        "http://localhost:8000/api/v1/products",
        productData
      );
      console.log(response);
    } catch (err) {
      console.log(err);
    }
    setName("");
    setPrice("");
    setDescription("");
    setQuantity("");
    setImages([]);
  };
  return (
    <div className="container">
      <div
        className="product-upload-container"
        style={{ position: "relative" }}
      >
        <div className="product-image-upload ">
          {/* Upload Image */}
          <div
            className="App"
            style={{
              height: "100%",
              width: "100%",
              position: "relative",
            }}
          >
            <ImageUploading
              multiple
              value={images}
              onChange={onChange}
              maxNumber={maxNumber}
              dataURLKey="data_url"
            >
              {({
                imageList,
                onImageUpload,
                onImageRemoveAll,
                onImageUpdate,
                onImageRemove,
                isDragging,
                dragProps,
              }) => (
                // write your building UI
                <div className="upload__image-wrapper">
                  <button
                    // style={isDragging ? { color: "red" } : undefined}
                    onClick={onImageUpload}
                    {...dragProps}
                    className="upload-btn btn-upload-left"
                    style={{
                      position: "absolute",
                      bottom: "5px",
                      left: "5px",
                      zIndex: "10",
                    }}
                  >
                    {/* Upload Image{" "} */}
                    <span>
                      <Image
                        src="/image/upload.png"
                        width={14}
                        height={14}
                        alt="upload-icon"
                      />
                    </span>
                  </button>
                  &nbsp;
                  <button
                    onClick={onImageRemoveAll}
                    className="upload-btn btn-upload-right"
                    style={{
                      position: "absolute",
                      bottom: "5px",
                      right: "5px",
                      zIndex: "10",
                    }}
                  >
                    Remove all
                  </button>
                  <div className="image-select">
                    {imageList.map((image, index) => (
                      <div
                        key={index}
                        className={`image-item ${index === 0 ? "first" : ""}`}
                      >
                        <img
                          src={image["data_url"]}
                          alt=""
                          width="100"
                          style={{
                            width: "100%",
                            height: "100%",
                          }}
                        />
                        <div className="image-item__btn-wrapper">
                          <button
                            onClick={() => onImageUpdate(index)}
                            className="absolute"
                            style={{ top: "2%", right: "25px" }}
                          >
                            {/* <Image
                          src="/image/updating.png"
                          width={15}
                          height={15}
                          alt="updating-icon"
                        /> */}
                            <GrUpdate
                              style={{ width: "10px", height: "10px" }}
                            />
                          </button>
                          <button
                            onClick={() => onImageRemove(index)}
                            className="absolute"
                            style={{ top: "2%", right: "0%" }}
                          >
                            <Image
                              src="/image/cancel.png"
                              width={10}
                              height={10}
                              alt="cancel-icon"
                            />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                  {/* <button
                      onClick={handleImageUpload}
                      style={{ position: "absolute", zIndex: "50" }}
                    >
                      Upload images
                    </button> */}
                </div>
              )}
            </ImageUploading>
          </div>
          {/*  */}
        </div>
        <div className="product-name">
          <h3>Product Name:</h3>
          <input
            type="text"
            placeholder="Enter product name"
            className="product-upload-input"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
          <div className="product-description-card">
            <h5>Description</h5>
            <textarea
              rows="7"
              placeholder="Enter description here"
              className="product-name-textarea"
              onChange={(e) => setDescription(e.target.value)}
              value={description}
            />
          </div>
        </div>
        <div className="product-unit-price">
          <h3>Price:</h3>
          <input
            type="number"
            placeholder="Enter product price"
            className="product-upload-input"
            onChange={(e) => setPrice(e.target.value)}
            value={price}
          />
        </div>
        <div className="product-quantity">
          <h3>Quantity available:</h3>
          <input
            type="number"
            placeholder="Enter product quantity"
            className="product-upload-input"
            onChange={(e) => setQuantity(e.target.value)}
            value={quantity}
          />
        </div>
        <button
          style={{
            position: "absolute",
            bottom: "5px",
            right: "25px",
            padding: "10px 25px",
            cursor: "pointer",
          }}
          onClick={handleSubmit}
          className="btn-common"
        >
          Add Products
        </button>
      </div>
    </div>
  );
};

export default Products;
