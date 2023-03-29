import Sidebar from "@/components/Sidebar";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { BiDownload } from "react-icons/bi";
import { HiOutlineEye } from "react-icons/hi";

const Cupons = () => {
  return (
    <>
      <div className="container">
        <div className="card">
          <div className="filter">
            <p>Filter</p>
            <select>
              <option>Date</option>
            </select>
            <select>
              <option>Name</option>
            </select>
            <button type="submit">
              Export <BiDownload size={20} />
            </button>
          </div>
          <div className="table">
            <div className="table-head">
              <p className="cupon-cupon">Cupon</p>
              <p className="cupon-name">Name</p>
              <p className="cupon-promocode">Promocode</p>
              <p className="cupon-amount">Amount</p>
              <p className="cupon-minAmount">Minimum Amount</p>
              <p className="cupon-exDate">Expire Date</p>
              <p className="cupon-view">View</p>
            </div>
            <div className="table-body">
              <div className="cupon-cupon">
                <Image
                  src="/image/cupon.png"
                  alt="cupon_image"
                  height={93}
                  width={52}
                />
              </div>
              <div className="cupon-name table-image">
                <Image
                  src="/image/supportImage.png"
                  alt="user_image"
                  height={45}
                  width={45}
                />
                <p>Hamid Hasan</p>
              </div>
              <p className="cupon-promocode">8hg4xcvv</p>
              <p className="cupon-amount">$80</p>
              <p className="cupon-minAmount">$50</p>
              <p className="cupon-exDate">7/11/2022</p>
              <p className="cupon-view">
                <Link href="/cupons/cupon?_id=1dsd21hg21871178631">
                  <HiOutlineEye size={20} color={"#5197ca"} />
                </Link>
              </p>
            </div>
            <div className="table-body">
              <div className="cupon-cupon">
                <Image
                  src="/image/cupon.png"
                  alt="cupon_image"
                  height={93}
                  width={52}
                />
              </div>
              <div className="cupon-name table-image">
                <Image
                  src="/image/supportImage.png"
                  alt="user_image"
                  height={45}
                  width={45}
                />
                <p>Hamid Hasan</p>
              </div>
              <p className="cupon-promocode">8hg4xcvv</p>
              <p className="cupon-amount">$80</p>
              <p className="cupon-minAmount">$50</p>
              <p className="cupon-exDate">7/11/2022</p>
              <p className="cupon-view">
                <Link href="/cupons/cupon?_id=1dsd21hg21871178631">
                  <HiOutlineEye size={20} color={"#5197ca"} />
                </Link>
              </p>
            </div>
            <div className="table-body">
              <div className="cupon-cupon">
                <Image
                  src="/image/cupon.png"
                  alt="cupon_image"
                  height={93}
                  width={52}
                />
              </div>
              <div className="cupon-name table-image">
                <Image
                  src="/image/supportImage.png"
                  alt="user_image"
                  height={45}
                  width={45}
                />
                <p>Hamid Hasan</p>
              </div>
              <p className="cupon-promocode">8hg4xcvv</p>
              <p className="cupon-amount">$80</p>
              <p className="cupon-minAmount">$50</p>
              <p className="cupon-exDate">7/11/2022</p>
              <p className="cupon-view">
                <Link href="/cupons/cupon?_id=1dsd21hg21871178631">
                  <HiOutlineEye size={20} color={"#5197ca"} />
                </Link>
              </p>
            </div>
            <div className="table-body">
              <div className="cupon-cupon">
                <Image
                  src="/image/cupon.png"
                  alt="cupon_image"
                  height={93}
                  width={52}
                />
              </div>
              <div className="cupon-name table-image">
                <Image
                  src="/image/supportImage.png"
                  alt="user_image"
                  height={45}
                  width={45}
                />
                <p>Hamid Hasan</p>
              </div>
              <p className="cupon-promocode">8hg4xcvv</p>
              <p className="cupon-amount">$80</p>
              <p className="cupon-minAmount">$50</p>
              <p className="cupon-exDate">7/11/2022</p>
              <p className="cupon-view">
                <Link href="/cupons/cupon?_id=1dsd21hg21871178631">
                  <HiOutlineEye size={20} color={"#5197ca"} />
                </Link>
              </p>
            </div>
          </div>
        </div>
        <div className="add-product" style={{ marginTop: "3rem" }}>
          <Link href="/coupons/addCoupon">Add Coupon</Link>
        </div>
      </div>
    </>
  );
};

export default Cupons;
