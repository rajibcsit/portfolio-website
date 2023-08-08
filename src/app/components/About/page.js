"use client";
import Link from "next/link";
import React, { useEffect } from "react";
import { FaFacebook, FaGithub, FaLinkedin, FaTwitter, FaWhatsapp } from "react-icons/fa6";

// const skillData = [
//   {
//     name: "JavaScript",
//     percent: "85%",
//   },
//   {
//     name: "NEXT.JS",
//     percent: "80%",
//   },
//   {
//     name: "React.JS",
//     percent: "70%",
//   },

//   {
//     name: "PHP",
//     percent: "60%",
//   },
//   {
//     name: "Laravel",
//     percent: "65%",
//   },
//   {
//     name: "MySql",
//     percent: "70%",
//   },
// ];

const keySkils = [
  "PHP",
  "Laravel",
  "JavaScript",
  "React.JS",
  "Next.JS",
  "Vue.JS",
  "HTML5",
  "CSS3",
  "Tailwind CSS",
  "MySql",
  "Git",
];

const Page = () => {
  const socialIcons = [
    {
      icon: <FaFacebook />,
      href: "https://www.facebook.com/rajibmia.rahid51",
    },
    {
      icon: <FaWhatsapp />,
      href: "https://wa.me/",
    },
    {
      icon: <FaGithub />,
      href: "https://github.com/rajibcsit",
    },
    {
      icon: <FaLinkedin />,
      href: "https://www.linkedin.com/in/rajibmiarahid/",
    },
  ];

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY >= 575) {
        document.querySelectorAll(".progressBar").forEach((el, index) => {
          el.style.width = skillData[index].percent;
        });
      }
    });
  }, []);

  return (
    <>
      <div className="aboutSection" id="about">
        <div className="title">About Me</div>
        <div className="wrapper">
          <div className="left">
            <p>
              Hi, I am Rajib Mia Rahid. I have been working as a Web Developer for 1 years. Mainly I
              develop applications using PHP programming language and Laravel framework . I also use
              JavaScript and .Vue js,React js, and Next js this time learning for the Frontend. I
              have good knowledge of web .I want to work with Artificial IntelligenceEspec Machine
              Learning in the future. Please, keep me in your prayers.
            </p>
            {/* <h3>My Skills & Tools</h3>

            <div className="skills">
              {skillData.map((skill, index) => (
                <div className="progressWrapper" key={index}>
                  <p>{skill.name}</p>
                  <div className="progress">
                    <div className="progressBar" data-percent={skill.percent}></div>
                  </div>
                </div>
              ))}
            </div> */}
          </div>
          <div className="right">
            <h3 className="title">Here are some of my tools:</h3>
            <div className="keySkills">
              {keySkils.map((skill, index) => (
                <div className="chip" key={index}>
                  {skill}
                </div>
              ))}
            </div>
            <div className="title">Connect With Me</div>
            <div className="socialLinks">
              {socialIcons.map((socialIcon, index) => (
                <Link className="icon" target="_blank" key={index} href={socialIcon.href}>
                  {socialIcon.icon}
                </Link>
              ))}
            </div>
            <br />
          </div>
        </div>
        <hr />
      </div>
    </>
  );
};

export default Page;
