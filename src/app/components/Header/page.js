"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { FaBars, FaXmark } from "react-icons/fa6";

const Page = () => {
  const [menuToggle, setMenuToggle] = useState(false);
  const [menuClass, setMenuClass] = useState("");

  const toggleMenu = () => {
    if (menuToggle) {
      setMenuClass("");
      setMenuToggle(false);
    } else {
      setMenuClass("active");
      setMenuToggle(true);
    }
  };

  const links = [
    {
      name: "Home",
    },
    {
      name: "About",
    },
    // {
    //   name: "Services",
    // },
    {
      name: "Projects",
    },
    {
      name: "Blog",
    },
  ];

  useEffect(() => {
    document.addEventListener("scroll", () => {
      if (window.scrollY > 0) {
        document.querySelector(".header").classList.add("active");
      } else {
        document.querySelector(".header").classList.remove("active");
      }
    });
  }, []);

  return (
    <>
      <header className="header">
        <div className="wrapper">
          <div className="logo">
            <Link href="/">
              <img src={"/logo.svg"} width={160} height={160} />
            </Link>
          </div>
          <nav className={menuClass}>
            <ul>
              {links.map((link) => (
                <li key={link.name}>
                  {link.name === "Home" ? (
                    <Link
                      href="/"
                      onClick={() => {
                        window.scrollTo(0, 0);
                        toggleMenu();
                      }}
                    >
                      {link.name}
                    </Link>
                  ) : link.name === "About" ? (
                    <Link
                      href="/#about"
                      onClick={() => {
                        window.innerWidth <= 890
                          ? window.scrollTo(0, 875)
                          : window.scrollTo(0, 575);
                        toggleMenu();
                      }}
                    >
                      {link.name}
                    </Link>
                  ) : link.name === "Services" ? (
                    <Link
                      href="/#services"
                      onClick={() => {
                        window.innerWidth <= 890
                          ? window.scrollTo(0, 1610)
                          : window.scrollTo(0, 1030);
                        toggleMenu();
                      }}
                    >
                      {link.name}
                    </Link>
                  ) : link.name === "Projects" ? (
                    <Link
                      href="/#projects"
                      onClick={() => {
                        window.innerWidth <= 890
                          ? window.scrollTo(0, 2220)
                          : window.scrollTo(0, 1440);
                        toggleMenu();
                      }}
                    >
                      {link.name}
                    </Link>
                  ) : link.name === "Blog" ? (
                    <Link
                      href="/#blogs"
                      onClick={() => {
                        window.innerWidth <= 890
                          ? window.scrollTo(0, 3480)
                          : window.scrollTo(0, 2390);
                        toggleMenu();
                      }}
                    >
                      {link.name}
                    </Link>
                  ) : (
                    <Link
                      href="/#contact"
                      onClick={() => {
                        window.innerWidth <= 890
                          ? window.scrollTo(0, 4520)
                          : window.scrollTo(0, 3080);
                        toggleMenu();
                      }}
                    >
                      {link.name}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </nav>
          <div className="btns">
            <button className="btn primaryBtn">Download CV</button>
            <button className="menuBtn" onClick={() => toggleMenu()}>
              {!menuToggle ? <FaBars /> : <FaXmark />}
            </button>
          </div>
        </div>
      </header>
    </>
  );
};

export default Page;
