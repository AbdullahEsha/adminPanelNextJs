import { useRouter } from "next/router";
import Sidebar from "@/components/Sidebar";
import Head from "next/head";
import Image from "next/image";

const Coupon = () => {
  const router = useRouter();
  const { _id } = router.query;
  return (
    <>
      <Head>
        <title>Swop Admin - Coupon</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className="main-container">
          <Sidebar />
          <div className="main-content">
            <div className="home-top-panel-out">
              <div className="home-top-panel">
                <h2>Dashboard</h2>
                <input type="text" placeholder="🔎︎ Search here..." />
                <select className="select-language">
                  <option value="eng">Eng (US)</option>
                  <option value="eng">Eng (US)</option>
                </select>
                <div className="travis-card">
                  <Image
                    src="/image/travis.png"
                    alt="travis_image"
                    height={54}
                    width={55}
                    className="travis_image"
                  />
                  <p>Travis Herron</p>
                </div>
              </div>
            </div>
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
                    <p>Discount Type:</p>
                    <input type="radio" name="discount-type" /> {" "}
                    <label>Percent (%)</label> 
                    <input type="radio" name="discount-type" /> {" "}
                    <label>Amount $</label>
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
                    <input type="radio" name="shiping-type" /> {" "}
                    <label>Yes</label> 
                    <input type="radio" name="shiping-type" /> {" "}
                    <label>No</label>
                    <p>Image:</p>
                    <input type="file" />
                  </div>
                  <button>Save</button>
                  <button>Delete</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Coupon;
