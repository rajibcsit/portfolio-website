"use client";
import React from "react";
import Image from "next/image";
import HomeCoverImg from "public/rajib.png";

const Page = () => {
  return (
    <>
      <div className="homeSection mt-16">
        <div className="left">
          <span>Hey There , I am</span>
          <h3>Rajib Mia Rahid</h3>
          <h4>
            Professional <span>Web Developer</span>
          </h4>
          <p>
            To establish myself as a professional and expertise in the field of Web Development with
            challenge of effective and efficient utilization of knowledge, exposure and skills to
            achieve the organizational goal.
          </p>
          <div className="actionsButtons">
            <button
              className="btn primaryBtnLite"
              onClick={() => {
                window.innerWidth <= 890 ? window.scrollTo(0, 3430) : window.scrollTo(0, 3230);
              }}
            >
              Contact Me
            </button>
            <button className="btn primaryBtnDark">Hire Me</button>
          </div>
        </div>
        <div className="right">
          <Image src={HomeCoverImg} width={250} height={100} />
        </div>
      </div>
    </>
  );
};

export default Page;
