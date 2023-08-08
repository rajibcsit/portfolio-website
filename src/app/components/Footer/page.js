import React from "react";
import Link from "next/link";
import { FaFacebook, FaWhatsapp, FaGithub, FaLinkedin } from "react-icons/fa6";

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
  return (
    <footer className="mt-auto">
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto debitis possimus porro,
        provident natus aliquam exercitationem labore distinctio temporibus qui nisi ut id autem
        reiciendis nam perspiciatis, accusantium consequuntur sint?
      </p>
      <div className="socialIcons">
        {socialIcons.map((socialIcon) => (
          <Link key={socialIcon.href} target="_blank" href={socialIcon.href}>
            {socialIcon.icon}
          </Link>
        ))}
      </div>
      <div className="creditSection">All rights reserved by © 2023</div>
    </footer>
  );
};

export default Page;
