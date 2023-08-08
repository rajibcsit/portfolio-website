"use client";
import React, { useState, useRef } from "react";
import Card from "@/app/components/Card/page";
import ScrollToTop from "@/app/components/ScrollToTop/page";
import { FaMagnifyingGlass, FaXmark } from "react-icons/fa6";
import Link from "next/link";

export default function Page() {
  const [focus, setFocus] = useState(false);
  const [clearSearch, setClearSearch] = useState(false);
  const searchRef = useRef("");
  return (
    <>
      <ScrollToTop />
      <div className="allBlogsSection">
        <div className={`searchBoxWrapper ${focus ? "active" : ""}`}>
          <div
            className="searchBox"
            onClick={() => {
              searchRef.current.focus();
            }}
          >
            <FaMagnifyingGlass />
            <input
              type="text"
              ref={searchRef}
              placeholder="Search Blogs"
              onBlur={() => {
                setFocus(false);
              }}
              onFocus={() => {
                !focus ? setFocus(true) : "";
              }}
              onKeyUp={() => {
                searchRef.current.value != "" ? setClearSearch(true) : setClearSearch(false);
              }}
            />
            {clearSearch ? (
              <FaXmark
                onClick={() => {
                  searchRef.current.value = "";
                  setClearSearch(false);
                }}
                className="cursor-pointer ml-2"
              />
            ) : (
              ""
            )}
          </div>
        </div>
        <div className="postsSection">
          <div className="posts">
            <Card type={"post"} className="scale-95" postURL="/post/15792486" />
            <Card type={"post"} className="scale-95" postURL="/post/15792486" />
            <Card type={"post"} className="scale-95" postURL="/post/15792486" />
            <Card type={"post"} className="scale-95" postURL="/post/15792486" />
            <div className="wrapper w-full flex justify-center">
              <button className="btn primaryBtn">Load More</button>
            </div>
          </div>
        </div>
        {/* <Card type={"post"} /> */}
      </div>
    </>
  );
}
