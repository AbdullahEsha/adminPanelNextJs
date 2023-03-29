import { useState } from "react";
import Sidebar from "@/components/Sidebar";
import Head from "next/head";
import Image from "next/image";
import { BiDownload } from "react-icons/bi";

const Subscribers = () => {
  return (
    <>
      <div className="container">
        <div className="card">
          <div className="subscriber-top-panel">
            <input type="text" placeholder="🔎︎ Search here..." />
            <div className="filter">
              <p>Filter</p>
              <select>
                <option>Date</option>
              </select>
              <button type="submit">
                Export <BiDownload size={20} />
              </button>
            </div>
          </div>
          <div className="table">
            <div className="table-head">
              <p className="subscriber-date">Date</p>
              <p className="subscriber-name">Name</p>
              <p className="subscriber-email">Email</p>
              <p className="subscriber-phone">Phone</p>
            </div>
            <div className="table-body">
              <p className="subscriber-date">7/11/2022</p>
              <div className="subscriber-name table-image">
                <Image
                  src="/image/supportImage.png"
                  alt="user_image"
                  height={45}
                  width={45}
                />
                <p>Hamid Hasan</p>
              </div>
              <p className="subscriber-email">hamidul3@gmail.com</p>
              <p className="subscriber-phone">+1 677 673 7326</p>
            </div>
            <div className="table-body">
              <p className="subscriber-date">7/11/2022</p>
              <div className="subscriber-name table-image">
                <Image
                  src="/image/supportImage.png"
                  alt="user_image"
                  height={45}
                  width={45}
                />
                <p>Hamid Hasan</p>
              </div>
              <p className="subscriber-email">hamidul3@gmail.com</p>
              <p className="subscriber-phone">+1 677 673 7326</p>
            </div>
            <div className="table-body">
              <p className="subscriber-date">7/11/2022</p>
              <div className="subscriber-name table-image">
                <Image
                  src="/image/supportImage.png"
                  alt="user_image"
                  height={45}
                  width={45}
                />
                <p>Hamid Hasan</p>
              </div>
              <p className="subscriber-email">hamidul3@gmail.com</p>
              <p className="subscriber-phone">+1 677 673 7326</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Subscribers;
