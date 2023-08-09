"use client";
import Image from "next/image";
import Link from "next/link";
import { FaAngleRight } from "react-icons/fa6";
import projectImg from "/public/project-image/project1.png";
import blogImg from "/public/blog-image/blog.jpg";

const Page = ({ type, className, postURL }) => {
  console.log(postURL);
  if (type === "project") {
    return (
      <>
        <div className="projectCard">
          <div className="cardImage">
            <Image src={projectImg} alt="image" />
          </div>
          <div className="title">Inventory Management</div>
          <div className="desc">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vitae dolor ultrices
            libero.
          </div>
        </div>
      </>
    );
  } else if (type === "post") {
    return (
      <>
        <div className={`postCard ${className}`}>
          <div className="cardImage">
            <Link href={postURL}>
              <Image src={blogImg} alt="image" />
            </Link>
          </div>
          <Link href={postURL}>
            <div className="title">Blog title text here</div>
          </Link>
          <div className="desc">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vitae dolor ultrices
            libero.
          </div>
          <Link href={postURL} className="readMore">
            Read More
          </Link>
        </div>
      </>
    );
  }
};

Page.defaultProps = {
  postURL: "post/id",
};

export default Page;
