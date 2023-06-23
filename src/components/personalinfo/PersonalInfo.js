import React from "react";
import "./personalinfo.css";
import Image from "next/image";

import myImg from "../../app/img/profile.png";
import TypedText from "../typedtext/TypedText";
import Link from "next/link";
import Socialmedia from "../Socialmedia/Socialmedia";

const PersonalInfo = () => {
  return (
    <div className="personal_info shadow">
      <Image src={myImg} width="100%" height="100%" className="profile_img" />
      <h1 className="name">Jayram Desai</h1>
      <div className="my_position">
        <TypedText />
      </div>
      <Socialmedia />
      <div className="cv_contact">
        <Link href="#" className="border-end cv_contact_link">
          Download CV
        </Link>
        <Link href="#contactme" className="cv_contact_link">
          Contact Me
        </Link>
      </div>
    </div>
  );
};

export default PersonalInfo;
