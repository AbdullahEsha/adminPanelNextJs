import Parent from "@/components/Layout";
import Sidebar from "@/components/Sidebar";
import axios from "axios";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

const Products = ({ data, error }) => {
  // console.log(data.data.data, error);
  if (error) return <div>Something is wrong</div>;
  return (
    <>
      <div className="container">
        <div className="justify-grid">
          {/* Dynamic */}
          {/* {data.data.data.map((el, i) => (
            <div key={i} className="product-card">
              <Link href={`/products/${el._id}`}>
                <img src={el.images[0]} alt={el.name} />
              </Link>
              <h5>{el.name}</h5>
              <p>{el.description}</p>
              <div className="product-price">
                <label className="left">${el.price}</label>
                <label className="right">QTY: {el.quantity}</label>
              </div>
            </div>
          ))} */}

          <div className="product-card">
            <Link href="/products/product?_id=624cd765a5d835001615a6d3">
              <Image
                alt="no_image"
                src="/image/product2.png"
                width={300}
                height={300}
              />
            </Link>
            <h5>Swop NFC Band</h5>
            <p>
              Good sound quality and perfect bass provide to you and long
              lasting.
            </p>
            <div className="product-price">
              <label className="left">$29.99</label>
              <label className="right">QTY: 23</label>
            </div>
          </div>

          <div className="product-card">
            <Link href="/products/product?_id=624cd765a5d835001615a6d3">
              <Image
                alt="no_image"
                src="/image/product3.png"
                width={300}
                height={300}
              />
            </Link>
            <h5>Swop NFC Band</h5>
            <p>
              Good sound quality and perfect bass provide to you and long
              lasting.
            </p>
            <div className="product-price">
              <label className="left">$29.99</label>
              <label className="right">QTY: 23</label>
            </div>
          </div>
          <div className="product-card">
            <Link href="/products/product?_id=624cd765a5d835001615a6d3">
              <Image
                alt="no_image"
                src="/image/product4.png"
                width={300}
                height={300}
              />
            </Link>
            <h5>Swop NFC Band</h5>
            <p>
              Good sound quality and perfect bass provide to you and long
              lasting.
            </p>
            <div className="product-price">
              <label className="left">$29.99</label>
              <label className="right">QTY: 23</label>
            </div>
          </div>
          <div className="product-card">
            <Link href="/products/product?_id=624cd765a5d835001615a6d3">
              <Image
                alt="no_image"
                src="/image/product5.png"
                width={300}
                height={300}
              />
            </Link>
            <h5>Swop NFC Band</h5>
            <p>
              Good sound quality and perfect bass provide to you and long
              lasting.
            </p>
            <div className="product-price">
              <label className="left">$29.99</label>
              <label className="right">QTY: 23</label>
            </div>
          </div>
          <div className="product-card">
            <Link href="/products/product?_id=624cd765a5d835001615a6d3">
              <Image
                alt="no_image"
                src="/image/product6.png"
                width={300}
                height={300}
              />
            </Link>
            <h5>Swop NFC Band</h5>
            <p>
              Good sound quality and perfect bass provide to you and long
              lasting.
            </p>
            <div className="product-price">
              <label className="left">$29.99</label>
              <label className="right">QTY: 23</label>
            </div>
          </div>
          <div className="product-card">
            <Link href="/products/product?_id=624cd765a5d835001615a6d3">
              <Image
                alt="no_image"
                src="/image/product1.png"
                width={300}
                height={300}
              />
            </Link>
            <h5>Swop NFC Band</h5>
            <p>
              Good sound quality and perfect bass provide to you and long
              lasting.
            </p>
            <div className="product-price">
              <label className="left">$29.99</label>
              <label className="right">QTY: 23</label>
            </div>
          </div>
          <div className="product-card">
            <Link href="/products/product?_id=624cd765a5d835001615a6d3">
              <Image
                alt="no_image"
                src="/image/product2.png"
                width={300}
                height={300}
              />
            </Link>
            <h5>Swop NFC Band</h5>
            <p>
              Good sound quality and perfect bass provide to you and long
              lasting.
            </p>
            <div className="product-price">
              <label className="left">$29.99</label>
              <label className="right">QTY: 23</label>
            </div>
          </div>
          <div className="product-card">
            <Link href="/products/product?_id=624cd765a5d835001615a6d3">
              <Image
                alt="no_image"
                src="/image/product3.png"
                width={300}
                height={300}
              />
            </Link>
            <h5>Swop NFC Band</h5>
            <p>
              Good sound quality and perfect bass provide to you and long
              lasting.
            </p>
            <div className="product-price">
              <label className="left">$29.99</label>
              <label className="right">QTY: 23</label>
            </div>
          </div>
          <div className="product-card">
            <Link href="/products/product?_id=624cd765a5d835001615a6d3">
              <Image
                alt="no_image"
                src="/image/product4.png"
                width={300}
                height={300}
              />
            </Link>
            <h5>Swop NFC Band</h5>
            <p>
              Good sound quality and perfect bass provide to you and long
              lasting.
            </p>
            <div className="product-price">
              <label className="left">$29.99</label>
              <label className="right">QTY: 23</label>
            </div>
          </div>
          <div className="product-card">
            <Link href="/products/product?_id=624cd765a5d835001615a6d3">
              <Image
                alt="no_image"
                src="/image/product5.png"
                width={300}
                height={300}
              />
            </Link>
            <h5>Swop NFC Band</h5>
            <p>
              Good sound quality and perfect bass provide to you and long
              lasting.
            </p>
            <div className="product-price">
              <label className="left">$29.99</label>
              <label className="right">QTY: 23</label>
            </div>
          </div>
          <div className="product-card">
            <Link href="/products/product?_id=624cd765a5d835001615a6d3">
              <Image
                alt="no_image"
                src="/image/product6.png"
                width={300}
                height={300}
              />
            </Link>
            <h5>Swop NFC Band</h5>
            <p>
              Good sound quality and perfect bass provide to you and long
              lasting.
            </p>
            <div className="product-price">
              <label className="left">$29.99</label>
              <label className="right">QTY: 23</label>
            </div>
          </div>
        </div>
        <div className="add-product">
          <Link href="/products/add">Add products</Link>
        </div>
      </div>
    </>
  );
};

// Dynamic
// export async function getStaticProps() {
//   try {
//     const res = await axios.get("http://localhost:8000/api/v1/products");
//     const data = res.data;

//     return {
//       props: {
//         data,
//         error: null,
//       },
//     };
//   } catch (error) {
//     return {
//       props: {
//         data: [],
//         error: {
//           message: error.message,
//         },
//       },
//     };
//   }
// }

export default Products;
