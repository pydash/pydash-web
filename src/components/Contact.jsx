import React from "react";
import FlowingMenu from "./custom/FlowingMenu";
import { SiFacebook, SiInstagram, SiGithub, SiMaildotru } from "react-icons/si";
import { HiPhone } from "react-icons/hi2";
import "../styles/Contact.css";

const contactList = [
  {
    link: "https://www.facebook.com/sarabusing.daniel/",
    text: "Facebook",
    image: <SiFacebook />,
  },

  {
    link: "https://www.instagram.com/danielmarkk_/",
    text: "Instagram",
    image: <SiInstagram />,
  },

  {
    link: "https://github.com/pydash",
    text: "Github",
    image: <SiGithub />,
  },
];

function Contact() {
  return (
    <>
      <div id="contact" className="contact-container">
        <FlowingMenu items={contactList} />
      </div>
    </>
  );
}
export default Contact;
