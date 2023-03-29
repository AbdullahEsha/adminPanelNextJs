import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";
import { BiMessageSquareEdit } from "react-icons/bi";
import { RiFolderUploadFill } from "react-icons/ri";
import { useState, useEffect } from "react";
import ImageUploading from "react-images-uploading";

import axios from "axios";
import { GrUpdate } from "react-icons/gr";

const Product = () => {
  const router = useRouter();
  const { product } = router.query;
  // const [images, setImages] = useState([]);

  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [images, setImages] = useState([,]);

  const [productInfo, setProductInfo] = useState({
    name: "",
    price: "",
    description: "",
    quantity: "",
  });

  // useEffect(() => {
  //   async function fetchData() {
  //     if (product) {
  //       try {
  //         const response = await axios.get(
  //           `http://localhost:8000/api/v1/products/${product}`
  //         );
  //         setData(response.data.data.data);
  //         setProductInfo((prevState) => ({
  //           name: response.data.data.data.name,
  //           price: response.data.data.data.price,
  //           description: response.data.data.data.description,
  //           quantity: response.data.data.data.quantity,
  //         }));
  //         setImages(response.data.data.data.images);
  //         // setImages(response.data.data.data.images);
  //         setIsLoading(false);
  //       } catch (error) {
  //         console.error(error);
  //         setIsLoading(false);
  //       }
  //     }
  //   }
  //   fetchData();
  // }, [product]);

  // console.log(data);

  const maxNumber = 69;

  // const onChange = async (imageList, addUpdateIndex) => {
  //   // console.log(imageList, addUpdateIndex);
  //   // Update the state to display the selected images
  //   setImages(imageList);
  // };

  const updataDataHandler = () => {};

  // const [iconIsShown, setIconIsShown] = useState(false);

  console.log(images);
  return (
    <>
      {/* <Parent> */}
      <div className="container">
        <div className="product-upload-container">
          <div className="product-image-upload">
            <div className="product-image-upload-top">
              <button type="submit">
                <RiFolderUploadFill size={15} /> Export
              </button>
              {/* {data && (
                <img
                  src={data.images[0]}
                  alt={data.name}
                  height={200}
                  width={200}
                />
              )} */}
              <Image
                src="/image/product1.png"
                alt="product_image"
                height={200}
                width={200}
              />
              <Link href="/">
                <BiMessageSquareEdit size={35} color="#fff" />
              </Link>
            </div>
            <div className="product-image-upload-bottom">
              {/* {data && <img src={data.images[1]} alt={data.name} />}
              {data && <img src={data.images[2]} alt={data.name} />}
              {data && <img src={data.images[3]} alt={data.name} />} */}

              <Image
                src="/image/product1.png"
                alt="product_image"
                height={200}
                width={200}
              />
              <Image
                src="/image/product2.png"
                alt="product_image"
                height={200}
                width={200}
              />
              <Image
                src="/image/product1.png"
                alt="product_image"
                height={200}
                width={200}
              />
            </div>

            {/* {images.length > 0 && (
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
                      <div className="image-select">
                        {imageList.map((image, index) => (
                          <div
                            key={index}
                            className={`image-item ${
                              index === 0 ? "first" : ""
                            }`}
                          >
                            <img
                              src={
                                image["data_url"] ? image["data_url"] : image
                              }
                              alt=""
                              width="100"
                              style={{
                                width: "100%",
                                height: "100%",
                              }}
                            />
                            {iconIsShown && (
                              <div className="image-item__btn-wrapper">
                                <button
                                  onClick={() => onImageUpdate(index)}
                                  className="absolute"
                                  style={{ top: "2%", right: "25px" }}
                                >
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
                            )}
                          </div>
                        ))}
                      </div>
                      <div
                        style={{
                          position: "absolute",
                          bottom: "30%",
                          right: "20px",
                          cursor: "pointer",
                        }}
                        onClick={() => setIconIsShown((prevSt) => !prevSt)}
                      >
                        <Image
                          src="/image/editicon.png"
                          height={40}
                          width={40}
                          alt="edit-icon"
                        />
                      </div>
                    </div>
                  )}
                </ImageUploading>
              </div>
            )} */}
          </div>

          <div className="product-name">
            <h3>Product Name:</h3>
            <input
              type="text"
              // placeholder={data && data.name}
              value={productInfo.name && productInfo.name}
              className="product-upload-input"
            />
            <div className="product-description-card">
              <h5>Description</h5>
              <textarea
                rows="7"
                value={productInfo.description && productInfo.description}
                className="product-name-textarea"
              />
            </div>
          </div>
          <div className="product-unit-price">
            <h3>Price:</h3>
            <input
              type="number"
              value={productInfo.price && productInfo.price}
              onChange={(e) => {
                setProductInfo((prevState) => ({
                  ...prevState,
                  name: e.target.value,
                }));
              }}
              className="product-upload-input"
            />
            <div className="product-description-card">
              <h5>Variants</h5>
              <div className="product-name-textarea">
                <div className="variant-title-text">
                  <label>*Variant Title:</label>{" "}
                  <input type="text" placeholder="Input text here" />
                </div>
                <div className="variant-title-text">
                  <label>*Color:</label> <div className="color-red" />
                  <div className="color-green" />
                  <button>Delete Variant</button>
                </div>
                <div className="variant-title-text">
                  <label>*Size:</label>
                  <div className="size">M</div>
                  <div className="size">L</div>
                  <div className="size">XL</div>
                  <button>Delete Variant</button>
                </div>
                <button className="add-variant">Add Variant</button>
              </div>
            </div>
          </div>
          <div className="product-quantity">
            <h3>Quantity available:</h3>
            <input
              type="number"
              value={productInfo.quantity && productInfo.quantity}
              // placeholder={data && data.quantity}
              className="product-upload-input"
            />
            <div className="product-description-card">
              <h5>Info</h5>
              <div className="product-name-textarea">
                <div className="product-info">
                  <h4 className="product-info-subject">*Contact Info </h4>
                  <div className="product-info-decision">
                    : <input type="checkbox" /> <label>YES</label>{" "}
                    <input type="checkbox" /> <label>No</label>
                  </div>
                </div>
                <div className="product-info">
                  <h4 className="product-info-subject">*SWOP Profile </h4>
                  <div className="product-info-decision">
                    : <input type="checkbox" /> <label>YES</label>{" "}
                    <input type="checkbox" /> <label>No</label>
                  </div>
                </div>
                <div className="product-info">
                  <h4 className="product-info-subject">*Website </h4>
                  <div className="product-info-decision">
                    : <input type="checkbox" /> <label>YES</label>{" "}
                    <input type="checkbox" /> <label>No</label>
                  </div>
                </div>
                <div className="product-info">
                  <h4 className="product-info-subject">*App Taxes </h4>
                  <div className="product-info-decision">
                    : <input type="checkbox" /> <label>YES</label>{" "}
                    <input type="checkbox" /> <label>No</label>
                  </div>
                </div>
                <div className="product-info">
                  <h4 className="product-info-subject">*Shipping </h4>
                  <div className="product-info-decision">
                    : <input type="checkbox" /> <label>YES</label>{" "}
                    <input type="checkbox" /> <label>No</label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className=""
          style={{
            paddingRight: "1rem",
            display: "flex",
            justifyContent: "end",
            margin: "1rem 0",
          }}
        >
          <button
            style={{ cursor: "pointer", padding: "8px 40px", fontSize: "18px" }}
            onClick={updataDataHandler}
            className="btn-common"
          >
            Update
          </button>
        </div>
        <div className="card">
          <div className="product-top-panel">
            <h3>Product Inventory</h3>
            <input type="text" placeholder="🔎︎ Search here..." />
            <div className="filter">
              <p>Filter</p>
              <select>
                <option>Date</option>
              </select>
              <select>
                <option>Name</option>
              </select>
            </div>
          </div>
          <div className="table">
            <div className="table-head">
              <p className="table-product-product">Product</p>
              <p className="table-product-name">Product Name</p>
              <p className="table-product-price">Price</p>
              <p className="table-product-bonus">Bonus</p>
              <p className="table-product-quantity">Quantity</p>
              <p className="table-product-color">Color</p>
            </div>
            <div className="table-body">
              <div className="table-product-product table-image">
                <Image
                  src="/image/product1.png"
                  alt="user_image"
                  height={45}
                  width={45}
                />
              </div>
              <p className="table-product-name">Gold NFC</p>
              <p className="table-product-price">12$</p>
              <p className="table-product-bonus">57%</p>
              <p className="table-product-quantity">57</p>
              <p className="table-product-color">Black, White</p>
            </div>
            <div className="table-body">
              <div className="table-product-product table-image">
                <Image
                  src="/image/product1.png"
                  alt="user_image"
                  height={45}
                  width={45}
                />
              </div>
              <p className="table-product-name">Gold NFC</p>
              <p className="table-product-price">12$</p>
              <p className="table-product-bonus">57%</p>
              <p className="table-product-quantity">57</p>
              <p className="table-product-color">Black, White</p>
            </div>
            <div className="table-body">
              <div className="table-product-product table-image">
                <Image
                  src="/image/product1.png"
                  alt="user_image"
                  height={45}
                  width={45}
                />
              </div>
              <p className="table-product-name">Gold NFC</p>
              <p className="table-product-price">12$</p>
              <p className="table-product-bonus">57%</p>
              <p className="table-product-quantity">57</p>
              <p className="table-product-color">Black, White</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
