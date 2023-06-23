import React from "react";
import { FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FiTwitter } from "react-icons/fi";
import "./socialmedia.css";
import Link from "next/link";

const Socialmedia = () => {
  return (
    <div className="social_media">
      <Link href="#" className="icon">
        <FaInstagram />
      </Link>
      <Link href="#" className="icon">
        <FiTwitter />
      </Link>
      <Link href="#" className="icon">
        <FaLinkedinIn />
      </Link>
    </div>
  );
};

export default Socialmedia;
