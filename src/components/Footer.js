"use client";

import React from "react";
import Socialmedia from "./Socialmedia/Socialmedia";
import ButtonGroup from "@mui/joy/ButtonGroup";
import Button from "@mui/joy/Button";
import Link from "next/link";

const Footer = () => {
  return (
    <>
      <Socialmedia />
      <ButtonGroup
        variant="plain"
        style={{
          justifyContent: "center",
          margin: "30px 0px",
        }}
      >
        <Button
          style={{
            fontSize: "16px",
            fontWeight: "normal",
            lineHeight: "20px",
            padding: "0px 10px",
            height: "20px",
            minHeight: "unset",
            color: "#fff",
          }}
        >
          Privacy
        </Button>
        <Button
          style={{
            fontSize: "16px",
            fontWeight: "normal",
            lineHeight: "20px",
            padding: "0px 10px",
            height: "20px",
            minHeight: "unset",
            color: "#fff",
          }}
        >
          Terms
        </Button>
        <Button
          style={{
            fontSize: "16px",
            fontWeight: "normal",
            lineHeight: "20px",
            padding: "0px 10px",
            height: "20px",
            minHeight: "unset",
            color: "#fff",
          }}
        >
          FAQs
        </Button>
        <Button
          style={{
            fontSize: "16px",
            fontWeight: "normal",
            lineHeight: "20px",
            padding: "0px 10px",
            height: "20px",
            minHeight: "unset",
            color: "#fff",
          }}
        >
          Help
        </Button>
      </ButtonGroup>
      <p className="all_right">
        © All Rights Reserved. Designed by <Link href="#">ADWEBS</Link>
      </p>
    </>
  );
};

export default Footer;
